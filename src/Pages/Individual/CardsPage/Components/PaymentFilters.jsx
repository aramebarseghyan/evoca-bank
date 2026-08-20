import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

export default function PaymentFilters({ selectedCategory, onSelectCategory }) {
  const [activeTab, setActiveTab] = useState(selectedCategory || "all");
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {

        const docRef = doc(db, "filters", "cards");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().filters) {
          setFilters(docSnap.data().filters);
        }
      } catch (error) {
        console.error("Error fetching filters from Firestore:", error);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  return (
    <div className="flex items-center gap-3 overflow-x-auto py-3 px-4 no-scrollbar">
      {filters.map((item) => {
        const isActive = activeTab === item.id;
        const itemLogo = item.icon || item.logo;

        return (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`flex items-center justify-center px-5 py-3 rounded-full transition-all duration-200 shrink-0 cursor-pointer ${
              isActive
                ? "bg-[#7f00ff] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.label && (
              <span className="font-medium text-sm">{item.label}</span>
            )}

            {itemLogo && (
              <div
                className={`h-5 flex items-center justify-center ${
                  item.label ? "ml-2" : ""
                }`}
              >
                <img
                  src={itemLogo}
                  alt={item.id}
                  className={`h-full w-auto object-contain transition-all duration-200 ${
                    isActive ? "brightness-0 invert" : ""
                  }`}
                />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
