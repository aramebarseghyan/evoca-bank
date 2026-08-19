import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../../../store/useFavoriteStore";

const FavoritesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { favorites, toggleFavorite } = useFavoriteStore();
  const navigate = useNavigate();

  return (
    <>
      {}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 bg-[#5D00E0] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(93,0,224,0.4)] hover:scale-105 transition-transform flex items-center justify-center cursor-pointer"
      >
        <div className="relative">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {favorites.length}
            </span>
          )}
        </div>
      </button>

      {}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#F8F6FA]">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="red"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Նախընտրած վարկեր
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              {favorites.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  Դեռ ոչ մի վարկ չեք հավանել:
                </div>
              ) : (
                <div className="space-y-4">
                  {favorites.map((loan) => (
                    <div
                      key={loan.id}
                      className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-white"
                      onClick={() => {
                        setIsOpen(false);
                        navigate(`/loans/${loan.id}`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <div
                        className={`w-16 h-16 rounded-lg flex items-center justify-center shrink-0 ${loan.imageBgColor || "bg-[#FDE047]"}`}
                      >
                        <img
                          src={loan.image}
                          alt={loan.title}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm line-clamp-2">
                          {loan.title}
                        </h4>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(loan);
                        }}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer shrink-0"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="red"
                          stroke="red"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritesWidget;
