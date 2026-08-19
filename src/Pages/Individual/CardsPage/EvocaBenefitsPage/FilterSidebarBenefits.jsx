import React from "react";

export default function FilterSidebarBenefits({
  openSections,
  toggleSection,
  cardTypesList,
  locationList,
  benefitList,
  sectorList,
  platformList,
  selectedFilters,
  handleCheckboxCategoryChange,
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Ֆիլտրներ</h2>

      {}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Դասավորել
        </label>
        <div className="relative">
          <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none appearance-none cursor-pointer focus:border-[#5D00E0]">
            <option>Ըստ հանրաճանաչության</option>
            <option>Զեղչի չափի (նվազման)</option>
            <option>Այբբենական</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
        <button
          onClick={() => toggleSection("cardType")}
          className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
        >
          <span>Քարտատեսակ</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-500 transition-transform ${openSections.cardType ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {openSections.cardType && (
          <div className="space-y-3 pt-1 max-h-60 overflow-y-auto pr-1">
            {cardTypesList.map((card) => (
              <label key={card.id} className="flex items-center justify-between cursor-pointer group select-none">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={!!selectedFilters.cardType[card.id]}
                    onChange={() => handleCheckboxCategoryChange("cardType", card.id)}
                    className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                    {card.label}
                  </span>
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {card.count}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
        <button
          onClick={() => toggleSection("location")}
          className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
        >
          <span>Վայր</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-500 transition-transform ${openSections.location ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {openSections.location && (
          <div className="space-y-3 pt-1">
            {locationList.map((loc) => (
              <label key={loc.id} className="flex items-center gap-3 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={!!selectedFilters.location[loc.id]}
                  onChange={() => handleCheckboxCategoryChange("location", loc.id)}
                  className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                  {loc.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
        <button
          onClick={() => toggleSection("benefit")}
          className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
        >
          <span>Բենեֆիթ</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-500 transition-transform ${openSections.benefit ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {openSections.benefit && (
          <div className="space-y-3 pt-1">
            {benefitList.map((ben) => (
              <label key={ben.id} className="flex items-center gap-3 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={!!selectedFilters.benefit[ben.id]}
                  onChange={() => handleCheckboxCategoryChange("benefit", ben.id)}
                  className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                  {ben.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
        <button
          onClick={() => toggleSection("sector")}
          className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
        >
          <span>Ոլորտ</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-500 transition-transform ${openSections.sector ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {openSections.sector && (
          <div className="space-y-3 pt-1 max-h-60 overflow-y-auto pr-1">
            {sectorList.map((sec) => (
              <label key={sec.id} className="flex items-center gap-3 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={!!selectedFilters.sector[sec.id]}
                  onChange={() => handleCheckboxCategoryChange("sector", sec.id)}
                  className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                  {sec.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
        <button
          onClick={() => toggleSection("platform")}
          className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
        >
          <span>Հարթակ</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-500 transition-transform ${openSections.platform ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {openSections.platform && (
          <div className="space-y-3 pt-1">
            {platformList.map((plat) => (
              <label key={plat.id} className="flex items-center gap-3 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={!!selectedFilters.platform[plat.id]}
                  onChange={() => handleCheckboxCategoryChange("platform", plat.id)}
                  className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                  {plat.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}