import React from "react";
import { useAuthStore } from "../Acc/authStore";

const ProtectedRoute = ({ children }) => {
  const { user, openAuthModal } = useAuthStore();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center animate-in fade-in duration-300">
        <div className="bg-white p-8 rounded-3xl max-w-md w-full border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
          {/* Կողպեքի պատկերակ */}
          <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
            Մուտքը սահմանափակված է
          </h2>
          <p className="text-gray-500 mb-8 font-medium">
            Քարտեզը տեսնելու համար խնդրում ենք մուտք գործել կամ գրանցվել
            համակարգում։
          </p>

          <button
            onClick={openAuthModal}
            className="w-full bg-gradient-to-r from-[#6000ff] to-[#8f4dff] hover:shadow-lg hover:shadow-purple-500/30 text-white font-bold py-3.5 px-4 rounded-2xl transition-all duration-300"
          >
            Մուտք գործել
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
