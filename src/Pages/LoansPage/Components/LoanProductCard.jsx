import React from "react";

const LoanProductCard = ({ product }) => {
  return (
    <div className="w-full font-sans py-8 border-b border-gray-200 last:border-b-0">
      {/* Баннер карточки */}
      <div
        className={`w-full h-56 sm:h-72 md:h-96 rounded-3xl overflow-hidden mb-8 flex items-center justify-center ${product.imageBgColor}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Заголовок и описание */}
      <div className="mb-8 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {product.title}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Условия (сетка из базы Firebase) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
        {product.conditions &&
          product.conditions.map((condition, index) => (
            <div key={index} className="space-y-1">
              <span className="text-gray-500 text-sm block">
                {condition.prefix}
              </span>
              <span className="text-[#5D00E0] text-3xl sm:text-4xl font-bold block">
                {condition.value}
              </span>
              <span className="text-gray-600 text-sm block">
                {condition.label}
              </span>
            </div>
          ))}
      </div>

      {/* Кнопка подробнее */}
      <button className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 bg-[#F3E5F5] text-[#5D00E0] rounded-full font-medium text-base sm:text-lg hover:bg-[#E1BEE7] transition-colors cursor-pointer">
        {product.buttonText || "Մանրամասն"}
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
      </button>
    </div>
  );
};

export default LoanProductCard;
