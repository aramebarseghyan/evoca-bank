import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
const LeasingPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "leasing_page_config", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.warn("Document leasing_page_config/main not found!");
        }
      } catch (error) {
        console.error("Error loading data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="w-full bg-gray-50 pt-[30px] sm:pt-[50px] pb-4 min-h-screen">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-16 bg-white border border-gray-200 rounded-2xl"></div>
          <div className="h-16 bg-white border border-gray-200 rounded-2xl"></div>
          <div className="h-16 bg-white border border-gray-200 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="w-full bg-gray-50 pt-[30px] sm:pt-[50px] pb-4">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h4 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-[#222222]">
            {data.pageTitle || "ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ"}
          </h4>
        </div>

        <div className="space-y-4">
          {data.accordions?.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-[#6000ff]/30 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-[#6000ff]/5 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base lg:text-lg text-[#222222] pr-4">
                    {item.title}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#6000ff]/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#6000ff] text-white"
                        : "text-[#6000ff]"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="p-5 sm:p-6 pt-0 border-t border-gray-100">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            {item.data?.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="border-b border-gray-100 hover:bg-gray-50/50"
                              >
                                <td className="py-3 pr-4 font-semibold text-gray-700 text-xs sm:text-sm w-1/3">
                                  {row.label}
                                </td>
                                <td className="py-3 pl-4 text-gray-600 text-xs sm:text-sm whitespace-pre-line w-2/3">
                                  {row.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeasingPage;
