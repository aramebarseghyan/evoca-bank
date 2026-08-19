import React, { useState } from "react";

const FilterDropdown = ({ activeFilter, setActiveFilter, filters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id) => {
    setActiveFilter(id);
    setIsOpen(false);
  };

  return (
    <div className="mb-8">
      {}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 font-medium transition-all cursor-pointer"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3 0H7.5m3-6h9.75m-9.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3 0H3.75"
            />
          </svg>
          <span>Filters</span>
        </button>

        {isOpen && (
          <div className="mt-3 p-4 bg-white border border-gray-100 shadow-xl rounded-3xl grid grid-cols-2 gap-2.5">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => handleSelect(filter.id)}
                  className={`flex items-center justify-center p-3 rounded-2xl transition-all cursor-pointer text-center ${
                    isActive
                      ? "bg-[#5D00E0] text-white shadow-md font-medium"
                      : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {filter.icon ? (
                    <img
                      src={filter.icon}
                      alt={filter.id}
                      className="h-5 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-sm">{filter.label}</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {}
      <div className="hidden lg:flex items-center gap-3 overflow-x-auto py-2 scrollbar-none">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center justify-center px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap min-h-[42px] ${
                isActive
                  ? "bg-[#5D00E0] text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {filter.icon ? (
                <img
                  src={filter.icon}
                  alt={filter.id}
                  className="h-5 w-auto object-contain transition-all"
                />
              ) : (
                <span className="font-medium text-sm">{filter.label}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterDropdown;
