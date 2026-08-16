import React from "react";

const ChatHeader = ({
  activeChat,
  showDeletedView,
  setActiveChat,
  onClose,
  onCall, // <-- Добавили новый пропс для функции звонка
}) => {
  return (
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

      {/* Обернули кнопки справа в flex-контейнер */}
      <div className="flex items-center space-x-2">
        {/* Кнопка звонка (показывается только в личных чатах) */}
        {activeChat && activeChat !== "group" && (
          <button
            onClick={onCall}
            title="Զանգահարել"
            className="hover:bg-blue-700 p-1.5 rounded transition-colors"
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </button>
        )}

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
    </div>
  );
};

export default ChatHeader;
