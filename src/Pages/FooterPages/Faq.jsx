import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("bonds");
  const [openIndex, setOpenIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const docSnap = await getDoc(doc(db, "faq", "main"));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setCategories(data.categories || []);
          setFaqData(data.faqData || []);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchFAQData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return null;
  }

  const currentCategoryLabel =
    categories.find((cat) => cat.id === activeCategory)?.label || "Պարտատոմսեր";

  return (
    <div className="w-full bg-[#FAFAFC] min-h-screen py-10 px-4 sm:px-8 font-sans">
      <div className="max-w-[1280px] mx-auto">
        {/* Վերնագիր */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Հաճախ տրվող հարցեր
        </h1>

        {/* Հիմնական layout՝ 2 սյունակով */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Ձախ կողային մենյու (Sidebar) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm sticky top-6">
            <nav className="flex flex-col space-y-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? "text-[#5D00E0] font-bold bg-[#F5F0FF] border-l-4 border-[#5D00E0]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-normal"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Աջ կողմի բովանդակություն (FAQ list) */}
          <div className="lg:col-span-9">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              {currentCategoryLabel}
            </h2>

            <div className="space-y-3">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-200 bg-white overflow-hidden ${
                      isOpen
                        ? "border-2 border-[#5D00E0] shadow-sm"
                        : "border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Ակորդեոնի վերնագիր */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5D00E0"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>

                    {/* Ակորդեոնի բովանդակություն */}
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-gray-50">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
