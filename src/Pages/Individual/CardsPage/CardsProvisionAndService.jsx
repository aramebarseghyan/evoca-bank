import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const CardsProvisionAndService = () => {
  const [openSection, setOpenSection] = useState(1);
  const [sections, setSections] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const docRef = doc(db, "documents", "all");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDocuments(docSnap.data().items || []);
        }

        const sectionsSnapshot = await getDocs(collection(db, "info_sections"));
        const sectionsData = sectionsSnapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setSections(sectionsData);
      } catch (error) {
        console.error("Error loading:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#F4F7FF] flex items-center justify-center">
        <div className="text-[#6500D8] text-lg font-semibold animate-pulse">
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F4F7FF] min-h-screen py-8 font-sans">
      <div className="max-w-7xl mx-auto px-5">

        {sections.length > 0 && (
          <>
            <h2 className="text-[22px] md:text-[26px] font-bold text-[#1A1F36] mb-6 tracking-wide">
              ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
            </h2>

            {sections.map((section, index) => {
              const sectionId = section.order || index + 1;
              const isOpen = openSection === sectionId;

              return (
                <div
                  key={section.id || index}
                  className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6"
                >
                  <div
                    onClick={() => toggleSection(sectionId)}
                    className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
                  >
                    <span className="text-lg font-semibold text-[#1A1F36]">
                      {section.title}
                    </span>
                    <span
                      className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▲
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                        {section.items &&
                          section.items.map((itemText, itemIdx) => (
                            <p key={itemIdx}>
                              <span className="font-bold text-[#6500D8] mr-2">
                                {itemIdx + 1}.
                              </span>
                              {itemText}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}


        <div className="w-full max-w-4xl 2xl:max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Փաստաթղթեր
          </h2>
          <div className="space-y-3">
            {documents.map((docItem) => (
              <a
                key={docItem.id}
                href={docItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 sm:p-4 bg-purple-50/60 hover:bg-purple-100/70 active:bg-purple-200/70 rounded-xl transition-all duration-200 group shadow-sm border border-purple-100/50 gap-3"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                  <div className="text-purple-700 flex-shrink-0">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15l3 3m0 0l3-3m-3 3V9"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm md:text-base group-hover:text-purple-900 leading-snug break-words">
                    {docItem.title}
                  </span>
                </div>
                <div className="text-purple-700 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProvisionAndService;
