import React from "react";
import { Link } from "react-router-dom";
import { useFavoriteStore } from "../../../../store/useFavoriteStore";

const LoanProductCard = ({ product }) => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  // ИСПРАВЛЕНИЕ: Надежное сравнение через String()
  const liked = favorites.some((fav) => String(fav.id) === String(product.id));

  return (
    <div className="w-full font-sans py-8 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
        <div
          className={`w-full lg:w-[450px] shrink-0 h-56 sm:h-72 lg:h-[320px] rounded-3xl overflow-hidden mb-6 lg:mb-0 flex items-center justify-center relative ${
            product.imageBgColor || "bg-yellow-300"
          }`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />

          <button
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10 flex items-center justify-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(product);
            }}
          >
            {liked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-red-500"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </button>
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

          <Link
            to={product.id ? `/loans/${product.id}` : "#"}
            className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 bg-[#F3E5F5] text-[#5D00E0] rounded-full font-medium text-base sm:text-lg hover:bg-[#E1BEE7] transition-colors cursor-pointer inline-flex"
            onClick={() => {
              if (!product.id) alert("Սխալ՝ վարկի ID-ն բացակայում է:");
            }}
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanProductCard;
