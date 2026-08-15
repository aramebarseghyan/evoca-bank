import React from "react";

const DeletedChatsView = ({
  deletedUsers,
  setShowDeletedView,
  handleRestoreChat,
}) => {
  return (
    <div className="flex-1 p-2 space-y-2 flex flex-col overflow-y-auto">
      <button
        onClick={() => setShowDeletedView(false)}
        className="flex items-center text-sm text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors w-fit"
      >
        Վերադառնալ
      </button>
      {deletedUsers.map((u) => (
        <div
          key={u.id}
          className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm border border-gray-100"
        >
          <h4 className="font-medium text-gray-800 truncate">
            {u.displayName || u.email?.split("@")[0]}
          </h4>
          <button
            onClick={() => handleRestoreChat(u.id)}
            className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors"
          >
            Վերականգնել
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeletedChatsView;
