import React from "react";

const FilterDropdown = ({ activeFilter, setActiveFilter, filters }) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto py-2 scrollbar-none mb-8">
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
  );
};

export default FilterDropdown;
