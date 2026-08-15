import React from "react";

const ChatHeader = ({
  activeChat,
  showDeletedView,
  setActiveChat,
  onClose,
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
  );
};

export default ChatHeader;
