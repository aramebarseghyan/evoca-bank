import React from "react";

const ChatList = ({
  activeUsers,
  deletedUsers,
  pinnedChats,
  openMenuId,
  setOpenMenuId,
  setActiveChat,
  setShowDeletedView,
  handleTogglePinChat,
  handleDeleteChat,
}) => {
  return (
    <div className="flex-1 flex flex-col p-2 overflow-y-auto">
      <div
        onClick={() => setActiveChat("group")}
        className="flex items-center p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-100 shadow-sm border border-gray-100 transition-colors mb-2"
      >
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mr-3">
          🌍
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Evoca ընդհանուր չաթ</h4>
        </div>
      </div>

      {activeUsers.map((u) => {
        const displayName =
          u.displayName || u.email?.split("@")[0] || "Անանուն";
        const isPinned = pinnedChats[u.id];
        return (
          <div
            key={u.id}
            className="relative flex items-center justify-between bg-white rounded-lg hover:bg-gray-100 shadow-sm border border-gray-100 mb-2"
          >
            <div
              onClick={() => setActiveChat(u)}
              className="flex items-center flex-1 p-3 cursor-pointer overflow-hidden"
            >
              <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg mr-3 uppercase">
                {displayName[0]}
              </div>
              <h4 className="font-medium text-gray-800 truncate mr-2">
                {displayName}
              </h4>
              {isPinned && <span className="text-blue-500 text-lg">📌</span>}
            </div>
            <div className="relative p-2" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setOpenMenuId(openMenuId === u.id ? null : u.id)}
                className="p-1.5 text-gray-400 hover:text-gray-700"
              >
                ⚙️
              </button>
              {openMenuId === u.id && (
                <div className="absolute right-8 top-8 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                  <button
                    onClick={() => handleTogglePinChat(u.id)}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {isPinned ? "Ապամրացնել" : "Ամրացնել"}
                  </button>
                  <button
                    onClick={() => handleDeleteChat(u.id)}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-gray-50"
                  >
                    Ջնջել
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {deletedUsers.length > 0 && (
        <button
          onClick={() => setShowDeletedView(true)}
          className="mt-4 p-3 bg-white rounded-lg text-gray-600 text-sm font-medium border border-gray-100 hover:bg-gray-50 transition-colors"
        >
          Ջնջված չաթեր ({deletedUsers.length})
        </button>
      )}
    </div>
  );
};

export default ChatList;
