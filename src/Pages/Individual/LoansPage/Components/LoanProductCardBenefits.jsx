import React from "react";
import { useNavigate } from "react-router-dom";

const LoanProductCardBenefits = ({ product }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {

    navigate(`/loans/${product.id}`);
  };

  return (
    <div className="w-full font-sans py-8 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">

        <div
          className={`w-full lg:w-[450px] shrink-0 h-56 sm:h-72 lg:h-[320px] rounded-3xl overflow-hidden mb-6 lg:mb-0 flex items-center justify-center ${
            product.imageBgColor || "bg-yellow-300"
          }`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>


        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              {product.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
            {product.conditions &&
              product.conditions.map((condition, index) => (
                <div key={index} className="space-y-1">
                  <span className="text-gray-500 text-sm block">
                    {condition.prefix}
                  </span>
                  <span className="text-[#5D00E0] text-2xl sm:text-3xl lg:text-3xl font-bold block">
                    {condition.value}
                  </span>
                  <span className="text-gray-600 text-sm block">
                    {condition.label}
                  </span>
                </div>
              ))}
          </div>

          <button
            onClick={handleDetailsClick}
            className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 bg-[#F3E5F5] text-[#5D00E0] rounded-full font-medium text-base sm:text-lg hover:bg-[#E1BEE7] transition-colors cursor-pointer"
          >
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
      </div>
    </div>
  );
};

export default LoanProductCardBenefits;
