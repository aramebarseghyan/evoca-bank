import React from "react";
import { Link } from "react-router-dom";

const InfoCard = ({ item }) => {
  return (
    <div className="w-full font-sans py-8 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Ձախ մաս (Նկար) */}
        <div
          className={`w-full lg:w-[450px] shrink-0 h-56 sm:h-72 lg:h-[280px] rounded-3xl overflow-hidden mb-6 lg:mb-0 flex items-center justify-center p-4 ${item.imageBgColor || "bg-[#f8f9fa]"}`}
        >
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-full max-w-full object-contain drop-shadow-md"
            />
          )}
        </div>

        {/* աջ մաս (Կոնտենտ) */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              {item.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {item.description}
            </p>
          </div>

          <Link
            to={`/cards/${item.id}`}
            className="w-full sm:w-auto px-8 py-4 inline-flex items-center justify-center gap-3 bg-[#F3E5F5] text-[#5D00E0] rounded-full font-medium text-base sm:text-lg hover:bg-[#E1BEE7] transition-colors cursor-pointer"
          >
            {item.buttonText || "Մանրամասն"}
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
