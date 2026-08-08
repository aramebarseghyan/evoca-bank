import React, { useState } from "react";

const mockFilters = [
  { id: "all", label: "Բոլորը" },
  { id: "secured", label: "Գրավով ապահովված սպառողական վարկեր" },
  { id: "unsecured", label: "Անգրավ սպառողական վարկեր" },
  { id: "mortgage", label: "Հիփոթեքային վարկեր" },
  { id: "auto", label: "Ավտոմեքենաների ձեռքբերման ֆինանսավորում" },
  { id: "credit", label: "Ապառիկ" },
  { id: "online", label: "Օնլայն վարկեր" },
];

const FilterDropdown = ({ activeFilter, setActiveFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterSelect = (id) => {
    setActiveFilter(id);
    setIsOpen(false);
  };

  return (
    <div className="w-full font-sans bg-white mb-8">
      {/* Filter button: hidden on xl and 2xl */}
      <div className="flex justify-end mb-5 xl:hidden 2xl:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 bg-[#f2f2f2] text-gray-800 py-2 px-6 rounded-full font-medium text-[16px] hover:bg-gray-200 active:bg-gray-300 transition-colors cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          Ֆիլտրեր
        </button>
      </div>

      {/* Filter list: always open on xl and 2xl */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 max-h-[800px] scale-100"
            : "opacity-0 max-h-0 scale-95 xl:opacity-100 xl:max-h-[800px] xl:scale-100 2xl:opacity-100 2xl:max-h-[800px] 2xl:scale-100"
        }`}
      >
        <div className="flex flex-wrap justify-start items-center gap-x-3 gap-y-4 pb-4">
          {mockFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterSelect(filter.id)}
              className={`text-left px-5 py-3 rounded-[24px] text-[14px] leading-snug transition-colors duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[#5D00E0] text-white"
                  : "bg-[#f2f2f2] text-gray-700 hover:bg-gray-200 active:bg-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
