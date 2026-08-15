import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase"; // Путь к твоему firebase.js
import { useAuthStore } from "../../Pages/Acc/authStore"; // Путь к твоему authStore

const ChatWindow = ({ isOpen, onClose }) => {
  const user = useAuthStore((state) => state.user); // Текущий авторизованный пользователь
  const [activeChat, setActiveChat] = useState(null); // null - список чатов, 'group' - открыт групповой чат
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const messagesEndRef = useRef(null);

  // Автоскролл вниз при новых сообщениях
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Загрузка сообщений в реальном времени из Firebase
  useEffect(() => {
    if (activeChat === "group") {
      const q = query(
        collection(db, "group_chat"),
        orderBy("createdAt", "asc"),
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const msgs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(msgs);
      });

      return () => unsubscribe(); // Очистка слушателя при закрытии
    }
  }, [activeChat]);

  // Отправка сообщения
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    if (!user) {
      alert("Пожалуйста, войдите в аккаунт, чтобы писать сообщения.");
      return;
    }

    const messageText = newMessage;
    setNewMessage(""); // Сразу очищаем инпут для удобства

    try {
      await addDoc(collection(db, "group_chat"), {
        text: messageText,
        uid: user.uid,
        email: user.email,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Ошибка при отправке: ", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white shadow-2xl sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[350px] sm:h-[500px] sm:rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200">
      {/* HEADER ЧАТА */}
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
          <h3 className="font-semibold text-lg">
            {activeChat === "group" ? "Общий чат" : "Сообщения"}
          </h3>
        </div>

        {/* Кнопка закрытия */}
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

      {/* BODY - СПИСОК ЧАТОВ ИЛИ САМ ЧАТ */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {!activeChat ? (
          // СПИСОК ЧАТОВ
          <div className="p-2 space-y-2">
            <div
              onClick={() => setActiveChat("group")}
              className="flex items-center p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-100 shadow-sm border border-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mr-3">
                🌍
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Общий чат Evoca</h4>
                <p className="text-sm text-gray-500">Общение всех клиентов</p>
              </div>
            </div>
          </div>
        ) : (
          // ОКНО ПЕРЕПИСКИ
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((msg) => {
                const isMe = user && msg.uid === user.uid;
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                  >
                    <span className="text-xs text-gray-400 mb-1 ml-1">
                      {isMe ? "Вы" : msg.email?.split("@")[0] || "Аноним"}
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

            {/* ИНПУТ ОТПРАВКИ СООБЩЕНИЯ */}
            <form
              onSubmit={sendMessage}
              className="p-3 bg-white border-t border-gray-200 flex gap-2"
            >
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={
                  user ? "Введите сообщение..." : "Войдите, чтобы писать"
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
