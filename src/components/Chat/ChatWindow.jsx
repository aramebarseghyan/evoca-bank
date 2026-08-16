import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthStore } from "../../Pages/Acc/authStore";

import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import DeletedChatsView from "./DeletedChatsView";
import MessageInput from "./MessageInput";
import PeerCallModal from "./PeerCallModal"; 

const ChatWindow = ({ isOpen, onClose, peerInstance, incomingCall, setIncomingCall }) => {
  const user = useAuthStore((state) => state.user);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const [openMenuId, setOpenMenuId] = useState(null);
  const [deletedTimestamps, setDeletedTimestamps] = useState({});
  const [pinnedChats, setPinnedChats] = useState({});
  const [showDeletedView, setShowDeletedView] = useState(false);

  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editText, setEditText] = useState("");
  const [openMsgMenuId, setOpenMsgMenuId] = useState(null);

  const [isCallActive, setIsCallActive] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const isCancelledRef = useRef(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, deletedTimestamps, isRecording]);

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenuId(null);
      setOpenMsgMenuId(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // --- ՄԻԱՑՆՈՒՄ ԵՆՔ ԶԱՆԳԻ ՊԱՏՈՒՀԱՆԸ ԵԹԵ ԿԱ ՄՈՒՏՔԱՅԻՆ ԶԱՆԳ ---
  useEffect(() => {
    if (incomingCall) {
      setIsCallActive(true);
    }
  }, [incomingCall]);

  useEffect(() => {
    if (!isOpen) {
      setShowDeletedView(false);
      if (isRecording) stopRecording(true);
      setEditingMessageId(null);
    }
  }, [isOpen, isRecording]);

  useEffect(() => {
    if (!isOpen || !user) return;

    const qDeleted = query(collection(db, `users/${user.uid}/deletedChats`));
    const unsubscribeDeleted = onSnapshot(qDeleted, (snapshot) => {
      const timestamps = {};
      snapshot.docs.forEach((doc) => {
        timestamps[doc.id] = doc.data().deletedAt?.toMillis() || Date.now();
      });
      setDeletedTimestamps(timestamps);
    });

    const qPinned = query(collection(db, `users/${user.uid}/pinnedChats`));
    const unsubscribePinned = onSnapshot(qPinned, (snapshot) => {
      const pinned = {};
      snapshot.docs.forEach((doc) => {
        pinned[doc.id] = true;
      });
      setPinnedChats(pinned);
    });

    return () => {
      unsubscribeDeleted();
      unsubscribePinned();
    };
  }, [isOpen, user]);

  useEffect(() => {
    if (!isOpen) return;

    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllUsers(
        usersList.filter((u) => u.id !== user?.uid && u.uid !== user?.uid),
      );
    });

    return () => unsubscribe();
  }, [isOpen, user]);

  useEffect(() => {
    if (!activeChat) return;

    let q;
    if (activeChat === "group") {
      q = query(collection(db, "group_chat"), orderBy("createdAt", "asc"));
    } else {
      const chatId =
        user.uid < activeChat.uid
          ? `${user.uid}_${activeChat.uid}`
          : `${activeChat.uid}_${user.uid}`;

      q = query(
        collection(db, `direct_messages/${chatId}/messages`),
        orderBy("createdAt", "asc"),
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [activeChat, user]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          echoCancellation: true,
        },
      });

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      isCancelledRef.current = false;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());

        if (isCancelledRef.current) return;

        const mimeType = mediaRecorder.mimeType || "audio/webm";
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });

        await uploadAndSendAudio(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Սխալ միկրոֆոնը միացնելիս:", err);
      alert("Խնդրում ենք թույլատրել խոսափողի օգտագործումը բրաուզերում:");
    }
  };

  const stopRecording = (cancel = false) => {
    if (mediaRecorderRef.current && isRecording) {
      isCancelledRef.current = cancel;
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const uploadAndSendAudio = async (audioBlob) => {
    if (!user) return;
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);

    reader.onloadend = async () => {
      const base64Audio = reader.result;

      if (base64Audio.length > 900000) {
        alert("Ձայնագրությունը չափազանց երկար է (առավելագույնը մոտ 1 րոպե):");
        return;
      }

      const messageData = {
        audioURL: base64Audio,
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        createdAt: serverTimestamp(),
        type: "audio",
      };

      try {
        if (activeChat === "group") {
          await addDoc(collection(db, "group_chat"), messageData);
        } else {
          const chatId =
            user.uid < activeChat.uid
              ? `${user.uid}_${activeChat.uid}`
              : `${activeChat.uid}_${user.uid}`;

          await addDoc(
            collection(db, `direct_messages/${chatId}/messages`),
            messageData,
          );
        }
      } catch (error) {
        console.error("Սխալ աուդիոն վերբեռնելիս. ", error);
      }
    };
  };

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (!newMessage.trim()) return;
    if (!user) {
      alert("Խնդրում ենք մուտք գործել:");
      return;
    }

    const messageText = newMessage;
    setNewMessage("");

    const messageData = {
      text: messageText,
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
      createdAt: serverTimestamp(),
      type: "text",
    };

    try {
      if (activeChat === "group") {
        await addDoc(collection(db, "group_chat"), messageData);
      } else {
        const chatId =
          user.uid < activeChat.uid
            ? `${user.uid}_${activeChat.uid}`
            : `${activeChat.uid}_${user.uid}`;

        await addDoc(
          collection(db, `direct_messages/${chatId}/messages`),
          messageData,
        );
      }
    } catch (error) {
      console.error("Սխալ. ", error);
    }
  };

  const handleDeleteMessage = async (msgId) => {
    if (!user) return;
    try {
      if (activeChat === "group") {
        await deleteDoc(doc(db, "group_chat", msgId));
      } else {
        const chatId =
          user.uid < activeChat.uid
            ? `${user.uid}_${activeChat.uid}`
            : `${activeChat.uid}_${user.uid}`;
        await deleteDoc(doc(db, `direct_messages/${chatId}/messages`, msgId));
      }
    } catch (error) {
      console.error("Սխալ հաղորդագրությունը ջնջելիս: ", error);
    }
  };

  const handleSaveEdit = async (msgId) => {
    if (!editText.trim() || !user) return;
    try {
      const updateData = { text: editText, edited: true };
      if (activeChat === "group") {
        await updateDoc(doc(db, "group_chat", msgId), updateData);
      } else {
        const chatId =
          user.uid < activeChat.uid
            ? `${user.uid}_${activeChat.uid}`
            : `${activeChat.uid}_${user.uid}`;
        await updateDoc(
          doc(db, `direct_messages/${chatId}/messages`, msgId),
          updateData,
        );
      }
      setEditingMessageId(null);
      setEditText("");
    } catch (error) {
      console.error("Սխալ հաղորդագրությունը խմբագրելիս: ", error);
    }
  };

  const handleTogglePinChat = async (userId) => {
    if (!user) return;
    setOpenMenuId(null);
    try {
      const pinRef = doc(db, `users/${user.uid}/pinnedChats`, userId);
      if (pinnedChats[userId]) {
        await deleteDoc(pinRef);
      } else {
        await setDoc(pinRef, { pinnedAt: serverTimestamp() });
      }
    } catch (error) {
      console.error("Սխալ: ", error);
    }
  };

  const handleDeleteChat = async (userId) => {
    if (!user) return;
    setOpenMenuId(null);
    try {
      await setDoc(doc(db, `users/${user.uid}/deletedChats`, userId), {
        deletedAt: serverTimestamp(),
      });
      if (pinnedChats[userId]) {
        await deleteDoc(doc(db, `users/${user.uid}/pinnedChats`, userId));
      }
      if (activeChat?.id === userId) setActiveChat(null);
    } catch (error) {
      console.error("Սխալ: ", error);
    }
  };

  const handleRestoreChat = async (userId) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, `users/${user.uid}/deletedChats`, userId));
    } catch (error) {
      console.error("Սխալ: ", error);
    }
  };

  const handleCall = () => {
    if (!activeChat || activeChat === "group") return;
    setIsCallActive(true); 
  };

  if (!isOpen) return null;

  const filteredMessages = messages.filter((msg) => {
    if (activeChat === "group") return true;
    const deletedAt = deletedTimestamps[activeChat?.id] || 0;
    const msgTime = msg.createdAt?.toMillis
      ? msg.createdAt.toMillis()
      : Date.now() + 10000;
    return msgTime > deletedAt;
  });

  const deletedUsers = allUsers.filter(
    (u) => deletedTimestamps[u.id] && u.id !== user?.uid,
  );

  const activeUsers = allUsers
    .filter((u) => !deletedTimestamps[u.id] && u.id !== user?.uid)
    .sort((a, b) => {
      const isAPinned = pinnedChats[a.id] ? 1 : 0;
      const isBPinned = pinnedChats[b.id] ? 1 : 0;
      return isBPinned - isAPinned;
    });

  let targetUserName =
    activeChat && activeChat !== "group"
      ? activeChat.displayName || activeChat.email?.split("@")[0] || "Անանուն"
      : "";
  let finalTargetUid = activeChat?.id || activeChat?.uid;

  // Եթե սա մուտքային զանգ է ուրիշ օգտատիրոջից, գտնում ենք նրա անունը
  if (incomingCall) {
    finalTargetUid = incomingCall.peer.replace('chat-user-', '');
    const callerUser = allUsers.find(u => u.uid === finalTargetUid || u.id === finalTargetUid);
    if (callerUser) {
        targetUserName = callerUser.displayName || callerUser.email?.split("@")[0] || "Անանուն";
    } else {
        targetUserName = "Մուտքային զանգ";
    }
  }

  return (
    <>
      {/* ՓՈԽԱՆՑՎՈՒՄ ԵՆ PEER-Ի ՏՎՅԱԼՆԵՐԸ ԶԱՆԳԻ ՄՈԴԱԼԻՆ */}
      {isCallActive && user && finalTargetUid && (
        <PeerCallModal
          currentUserUid={user.uid}
          targetUserUid={finalTargetUid}
          targetUserName={targetUserName}
          peerInstance={peerInstance}         // Ավելացված է
          incomingCallInit={incomingCall}     // Ավելացված է
          clearIncomingCall={() => setIncomingCall(null)} // Ավելացված է
          onClose={() => {
            setIsCallActive(false);
            if (setIncomingCall) setIncomingCall(null);
          }}
        />
      )}

      <div className="fixed inset-0 z-[60] flex flex-col bg-white shadow-2xl sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[350px] sm:h-[500px] sm:rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200">
        <ChatHeader
          activeChat={activeChat}
          showDeletedView={showDeletedView}
          setActiveChat={setActiveChat}
          onClose={onClose}
          onCall={handleCall}
        />

        <div className="flex-1 bg-gray-50 overflow-hidden relative flex flex-col">
          {!activeChat ? (
            showDeletedView ? (
              <DeletedChatsView
                deletedUsers={deletedUsers}
                setShowDeletedView={setShowDeletedView}
                handleRestoreChat={handleRestoreChat}
              />
            ) : (
              <ChatList
                activeUsers={activeUsers}
                deletedUsers={deletedUsers}
                pinnedChats={pinnedChats}
                openMenuId={openMenuId}
                setOpenMenuId={setOpenMenuId}
                setActiveChat={setActiveChat}
                setShowDeletedView={setShowDeletedView}
                handleTogglePinChat={handleTogglePinChat}
                handleDeleteChat={handleDeleteChat}
              />
            )
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {filteredMessages.map((msg) => {
                  const isMe = user && msg.uid === user.uid;
                  const msgName =
                    msg.displayName ||
                    msg.email?.email?.split("@")[0] ||
                    msg.email?.split("@")[0] ||
                    "Անանուն";

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col group relative ${
                        isMe ? "items-end" : "items-start"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-400 mb-1 ml-1">
                          {isMe ? "Դուք" : msgName}
                        </span>

                        {isMe && !msg.audioURL && (
                          <div
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={() =>
                                setOpenMsgMenuId(
                                  openMsgMenuId === msg.id ? null : msg.id,
                                )
                              }
                              className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-600 px-1 text-xs"
                            >
                              ⋮
                            </button>
                            {openMsgMenuId === msg.id && (
                              <div className="absolute right-0 top-5 bg-white border border-gray-200 rounded-lg shadow-md z-20 py-1 w-24">
                                <button
                                  onClick={() => {
                                    setEditingMessageId(msg.id);
                                    setEditText(msg.text);
                                    setOpenMsgMenuId(null);
                                  }}
                                  className="w-full text-left px-3 py-1 text-xs text-gray-700 hover:bg-gray-100"
                                >
                                  Խմբագրել
                                </button>
                                <button
                                  onClick={() => {
                                    handleDeleteMessage(msg.id);
                                    setOpenMsgMenuId(null);
                                  }}
                                  className="w-full text-left px-3 py-1 text-xs text-red-600 hover:bg-gray-100"
                                >
                                  Ջնջել
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div
                        className={`px-4 py-2 rounded-2xl max-w-[85%] break-words ${
                          isMe
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                        }`}
                      >
                        {msg.audioURL ? (
                          <audio
                            controls
                            src={msg.audioURL}
                            className="max-w-[200px] h-10 custom-audio"
                          />
                        ) : editingMessageId === msg.id ? (
                          <div className="flex flex-col gap-2">
                            <input
                              type="text"
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              className="bg-white text-gray-900 px-2 py-1 rounded text-sm focus:outline-none"
                            />
                            <div className="flex gap-1 justify-end">
                              <button
                                onClick={() => setEditingMessageId(null)}
                                className="px-2 py-0.5 text-xs bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                              >
                                Չեղարկել
                              </button>
                              <button
                                onClick={() => handleSaveEdit(msg.id)}
                                className="px-2 py-0.5 text-xs bg-blue-700 text-white rounded hover:bg-blue-800"
                              >
                                Պահպանել
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <span>{msg.text}</span>
                            {msg.edited && (
                              <span
                                className={`text-[10px] ml-1.5 ${
                                  isMe ? "text-blue-200" : "text-gray-400"
                                }`}
                              >
                                (խմբ.)
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              <MessageInput
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                sendMessage={sendMessage}
                isRecording={isRecording}
                startRecording={startRecording}
                stopRecording={stopRecording}
                user={user}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatWindow;