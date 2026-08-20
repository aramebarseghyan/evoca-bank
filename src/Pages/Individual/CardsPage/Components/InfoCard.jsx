import React from "react";
import { Link } from "react-router-dom";

const InfoCard = ({ item = {} }) => {
  const isLoan = item.type === "loan" || item.category === "loan";

  return (
    <div className="w-full font-sans py-8 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Ձախ մաս (Նկար) */}
        <div
          className={`w-full lg:w-[450px] shrink-0 h-56 sm:h-72 lg:h-[280px] rounded-3xl overflow-hidden mb-6 lg:mb-0 flex items-center justify-center p-4 ${
            item.imageBgColor || "bg-[#f8f9fa]"
          }`}
        >
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title || "card image"}
              className="max-h-full max-w-full object-contain drop-shadow-md"
            />
          )}
        </div>

        {/* Աջ մաս (Կոնտենտ) */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              {item.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              {item.description}
            </p>


            {!isLoan && item.conditions && item.conditions.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                {item.conditions.map((cond, idx) => (
                  <div key={idx} className="flex flex-col">
                    {cond.topLabel && (
                      <span className="text-sm text-gray-500 mb-1">
                        {cond.topLabel}
                      </span>
                    )}
                    <span className="text-2xl sm:text-3xl font-bold text-[#5D00E0] mb-1">
                      {cond.value}
                    </span>
                    {(cond.description || cond.label) && (
                      <span className="text-xs sm:text-sm text-gray-600 leading-snug">
                        {cond.description || cond.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
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