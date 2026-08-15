import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthStore } from "../../Pages/Acc/authStore";

const ChatWindow = ({ isOpen, onClose }) => {
  const user = useAuthStore((state) => state.user);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;

    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllUsers(usersList.filter((u) => u.uid !== user?.uid));
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

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    if (!user) {
      alert("Խնդրում ենք մուտք գործել՝ հաղորդագրություններ ուղարկելու համար։");
      return;
    }

    const messageText = newMessage;
    setNewMessage("");

    // Формируем данные сообщения с именем и аватаркой
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

  if (!isOpen) return null;

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
              ? "Հաղորդագրություններ"
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
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {!activeChat ? (
          <div className="p-2 space-y-2">
            {/* Групповой чат */}
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

            <div className="pt-2 pb-1 px-2">
              <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Օգտատերեր
              </h5>
            </div>

            {/* Список пользователей с аватарками */}
            {allUsers.map((u) => {
              const displayName =
                u.displayName || u.email?.split("@")[0] || "Անանուն օգտատեր";

              return (
                <div
                  key={u.id}
                  onClick={() => setActiveChat(u)}
                  className="flex items-center p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-100 shadow-sm border border-gray-100 transition-colors"
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
                  <div className="overflow-hidden">
                    <h4 className="font-medium text-gray-800 truncate">
                      {displayName}
                    </h4>
                  </div>
                </div>
              );
            })}

            {allUsers.length === 0 && (
              <p className="text-center text-sm text-gray-400 py-4">
                Այլ օգտատերեր չկան
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((msg) => {
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
                      className={`px-4 py-2 rounded-2xl max-w-[80%] break-words ${
                        isMe
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                      }`}
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
