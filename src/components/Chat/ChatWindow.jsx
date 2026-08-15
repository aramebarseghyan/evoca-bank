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
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthStore } from "../../Pages/Acc/authStore";

const ChatWindow = ({ isOpen, onClose }) => {
  const user = useAuthStore((state) => state.user);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  // State՝ բացված մենյուի ID-ն պահելու համար
  const [openMenuId, setOpenMenuId] = useState(null);

  // State՝ ջնջված չաթերի ժամանակը պահելու համար
  const [deletedTimestamps, setDeletedTimestamps] = useState({});

  // State՝ ամրացված (pinned) չաթերի ցանկը պահելու համար
  const [pinnedChats, setPinnedChats] = useState({});

  // State՝ ջնջված չաթերի ցանկը ցույց տալու համար
  const [showDeletedView, setShowDeletedView] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, deletedTimestamps]);

  // Փակել մենյուն, երբ սեղմում ենք դրանից դուրս
  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Երբ պատուհանը փակվում է, վերականգնել սկզբնական վիճակը
  useEffect(() => {
    if (!isOpen) {
      setShowDeletedView(false);
    }
  }, [isOpen]);

  // Բեռնել տվյալ օգտատիրոջ ջնջված և ամրացված չաթերի ինֆորմացիան
  useEffect(() => {
    if (!isOpen || !user) return;

    // Բեռնել ջնջված չաթերը
    const qDeleted = query(collection(db, `users/${user.uid}/deletedChats`));
    const unsubscribeDeleted = onSnapshot(qDeleted, (snapshot) => {
      const timestamps = {};
      snapshot.docs.forEach((doc) => {
        timestamps[doc.id] = doc.data().deletedAt?.toMillis() || Date.now();
      });
      setDeletedTimestamps(timestamps);
    });

    // Բեռնել ամրացված (pinned) չաթերը
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

  // Բեռնել բոլոր օգտատերերին
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

  // Բեռնել հաղորդագրությունները
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

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    if (!user) {
      alert("Խնդրում ենք մուտք գործել՝ հաղորդագրություններ ուղարկելու համար։");
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
      console.error("Սխալ հաղորդագրությունն ուղարկելիս. ", error);
    }
  };

  // Չաթը ամրացնելու/ապամրացնելու ֆունկցիա
  const handleTogglePinChat = async (userId) => {
    if (!user) return;
    setOpenMenuId(null);

    try {
      const pinRef = doc(db, `users/${user.uid}/pinnedChats`, userId);

      if (pinnedChats[userId]) {
        // Եթե արդեն ամրացված է, հեռացնում ենք (Ապամրացնել)
        await deleteDoc(pinRef);
        console.log("Չաթն ապամրացվեց", userId);
      } else {
        // Եթե ամրացված չէ, ավելացնում ենք (Ամրացնել)
        await setDoc(pinRef, {
          pinnedAt: serverTimestamp(),
        });
        console.log("Չաթն ամրացվեց", userId);
      }
    } catch (error) {
      console.error("Սխալ չաթը ամրացնելիս: ", error);
    }
  };

  // Չաթը ջնջելու ֆունկցիա
  const handleDeleteChat = async (userId) => {
    if (!user) return;
    setOpenMenuId(null);

    try {
      await setDoc(doc(db, `users/${user.uid}/deletedChats`, userId), {
        deletedAt: serverTimestamp(),
      });
      // Եթե ջնջվում է, նաև ապամրացնում ենք
      if (pinnedChats[userId]) {
        await deleteDoc(doc(db, `users/${user.uid}/pinnedChats`, userId));
      }
      console.log("Չաթը ջնջվեց", userId);
      if (activeChat?.id === userId) {
        setActiveChat(null);
      }
    } catch (error) {
      console.error("Սխալ չաթը ջնջելիս: ", error);
    }
  };

  // Չաթը վերականգնելու ֆունկցիա
  const handleRestoreChat = async (userId) => {
    if (!user) return;

    try {
      await deleteDoc(doc(db, `users/${user.uid}/deletedChats`, userId));
      console.log("Չաթը վերականգնվեց", userId);
    } catch (error) {
      console.error("Սխալ չաթը վերականգնելիս: ", error);
    }
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

  // Ստանում ենք ջնջված օգտատերերի ցանկը
  const deletedUsers = allUsers.filter(
    (u) => deletedTimestamps[u.id] && u.id !== user?.uid,
  );

  // Ստանում ենք ակտիվ (չջնջված) օգտատերերի ցանկը և սորտավորում՝ ամրացվածները վերևում
  const activeUsers = allUsers
    .filter((u) => !deletedTimestamps[u.id] && u.id !== user?.uid)
    .sort((a, b) => {
      const isAPinned = pinnedChats[a.id] ? 1 : 0;
      const isBPinned = pinnedChats[b.id] ? 1 : 0;
      return isBPinned - isAPinned; // ամրացվածները կհայտնվեն ավելի վերևում
    });

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white shadow-2xl sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[350px] sm:h-[500px] sm:rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200">
      {/* HEADER */}
      <div className="flex items-center justify-between bg-blue-600 px-4 py-3 text-white">
        <div className="flex items-center space-x-2">
          {activeChat && (
            <button
              onClick={() => setActiveChat(null)}
              className="hover:bg-blue-700 p-1 rounded transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}
          <h3 className="font-semibold text-lg line-clamp-1">
            {!activeChat
              ? showDeletedView
                ? "Ջնջված չաթեր"
                : "Հաղորդագրություններ"
              : activeChat === "group"
                ? "Ընդհանուր չաթ"
                : activeChat.displayName || activeChat.email?.split("@")[0]}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="hover:bg-blue-700 p-1 rounded transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* BODY */}
      <div className="flex-1 bg-gray-50 overflow-y-auto relative flex flex-col">
        {!activeChat ? (
          showDeletedView ? (
            // --- ՋՆՋՎԱԾ ՉԱԹԵՐԻ ԴԻՏՈՒՄ ---
            <div className="flex-1 p-2 space-y-2 flex flex-col">
              <button
                onClick={() => setShowDeletedView(false)}
                className="flex items-center text-sm text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                    clipRule="evenodd"
                  />
                </svg>
                Վերադառնալ
              </button>

              <div className="pt-2 pb-1 px-2">
                <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Արխիվ
                </h5>
              </div>

              {deletedUsers.map((u) => {
                const displayName =
                  u.displayName || u.email?.split("@")[0] || "Անանուն օգտատեր";
                return (
                  <div
                    key={u.id}
                    className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center flex-1 overflow-hidden mr-2">
                      {u.photoURL ? (
                        <img
                          src={u.photoURL}
                          alt={displayName}
                          className="w-10 h-10 rounded-full mr-3 object-cover border border-gray-200"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg mr-3 uppercase min-w-[40px]">
                          {displayName[0]}
                        </div>
                      )}
                      <h4 className="font-medium text-gray-800 truncate">
                        {displayName}
                      </h4>
                    </div>

                    <button
                      onClick={() => handleRestoreChat(u.id)}
                      className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
                    >
                      Վերականգնել
                    </button>
                  </div>
                );
              })}

              {deletedUsers.length === 0 && (
                <p className="text-center text-sm text-gray-400 py-6">
                  Ջնջված չաթեր չկան
                </p>
              )}
            </div>
          ) : (
            // --- ՀԻՄՆԱԿԱՆ ԴԻՏՈՒՄ ---
            <div className="flex-1 flex flex-col p-2">
              <div className="space-y-2 flex-1">
                {/* Գրուպ չաթ */}
                <div
                  onClick={() => setActiveChat("group")}
                  className="flex items-center p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-100 shadow-sm border border-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mr-3">
                    🌍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Evoca ընդհանուր չաթ
                    </h4>
                    <p className="text-sm text-gray-500">
                      Բոլոր հաճախորդների շփումը
                    </p>
                  </div>
                </div>

                <div className="pt-2 pb-1 px-2 flex justify-between items-center">
                  <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Օգտատերեր
                  </h5>
                </div>

                {/* Օգտատերերի ցանկ */}
                {activeUsers.map((u) => {
                  const displayName =
                    u.displayName ||
                    u.email?.split("@")[0] ||
                    "Անանուն օգտատեր";

                  const isPinned = pinnedChats[u.id];

                  return (
                    <div
                      key={u.id}
                      className="relative flex items-center justify-between bg-white rounded-lg hover:bg-gray-100 shadow-sm border border-gray-100 transition-colors"
                    >
                      <div
                        onClick={() => setActiveChat(u)}
                        className="flex items-center flex-1 p-3 cursor-pointer overflow-hidden"
                      >
                        {u.photoURL ? (
                          <img
                            src={u.photoURL}
                            alt={displayName}
                            className="w-10 h-10 rounded-full mr-3 object-cover border border-gray-200"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg mr-3 uppercase">
                            {displayName[0]}
                          </div>
                        )}
                        <div className="overflow-hidden flex items-center">
                          <h4 className="font-medium text-gray-800 truncate mr-2">
                            {displayName}
                          </h4>
                          {/* Եթե ամրացված է՝ ցույց ենք տալիս icon */}
                          {isPinned && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-blue-500 flex-shrink-0"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.112 1.348c-.287-.204-.652-.284-1.002-.218l-3.328.624a1.5 1.5 0 0 0-.973.743L5.275 5.378a1.5 1.5 0 0 0-.156.91l.86 5.161-2.483 2.98a1.5 1.5 0 0 0-.301 1.488c.241.677.893 1.108 1.614 1.108h3.366l3.528 5.645a1.5 1.5 0 0 0 2.658-.168l1.782-3.565 3.564-1.783a1.5 1.5 0 0 0 .168-2.657l-5.644-3.529V7.575c0-.72-.431-1.373-1.108-1.614a1.5 1.5 0 0 0-1.488.3l-2.98 2.483-5.161-.86a1.5 1.5 0 0 0-.91.156L8.5 4.542a1.5 1.5 0 0 0 .743-.972l.624-3.329c.066-.35.014-.715-.19-.1002Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div className="relative p-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuId(openMenuId === u.id ? null : u.id);
                          }}
                          className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            />
                          </svg>
                        </button>

                        {openMenuId === u.id && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute right-8 top-8 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden"
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTogglePinChat(u.id);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-100"
                            >
                              {isPinned ? "Ապամրացնել չաթը" : "Ամրացնել չաթը"}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteChat(u.id);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                              Ջնջել չաթը
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {activeUsers.length === 0 && (
                  <p className="text-center text-sm text-gray-400 py-4">
                    Այլ օգտատերեր չկան
                  </p>
                )}
              </div>

              {/* Ջնջված չաթեր դիտելու կոճակը (Ամբողջ ցանկի ներքևում) */}
              {deletedUsers.length > 0 && (
                <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
                  <button
                    onClick={() => setShowDeletedView(true)}
                    className="w-full flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-100 shadow-sm border border-gray-100 transition-colors text-gray-600"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      <span className="font-medium text-sm">Ջնջված չաթեր</span>
                    </div>
                    <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
                      {deletedUsers.length}
                    </span>
                  </button>
                </div>
              )}
            </div>
          )
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {filteredMessages.map((msg) => {
                const isMe = user && msg.uid === user.uid;
                const msgName =
                  msg.displayName || msg.email?.split("@")[0] || "Անանուն";

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                  >
                    <span className="text-xs text-gray-400 mb-1 ml-1">
                      {isMe ? "Դուք" : msgName}
                    </span>
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-[80%] break-words ${isMe ? "bg-blue-600 text-white rounded-br-none" : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"}`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={sendMessage}
              className="p-3 bg-white border-t border-gray-200 flex gap-2"
            >
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={
                  user
                    ? "Մուտքագրեք հաղորդագրությունը..."
                    : "Մուտք գործեք՝ գրելու համար"
                }
                disabled={!user}
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!user || !newMessage.trim()}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 transform rotate-[-45deg] ml-1 mb-1"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
