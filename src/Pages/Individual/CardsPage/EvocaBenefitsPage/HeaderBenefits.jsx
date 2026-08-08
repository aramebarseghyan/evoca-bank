import React from "react";
import evocaBenefitsLogo from "../../../../assets/img/evoca-benefits.png";

export default function HeaderBenefits() {
  return (
    <header className="px-4 pt-3 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto bg-white rounded-full shadow-sm border border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center cursor-pointer">
            <img
              src={evocaBenefitsLogo}
              alt="Evoca Benefits"
              className="h-7 object-contain"
            />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/cards"
            className="bg-[#5D00E0] hover:bg-purple-800 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer inline-flex items-center"
          >
            Պատվիրել քարտ
          </a>
          <button className="text-gray-800 p-2 cursor-pointer hover:text-[#5D00E0] transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
