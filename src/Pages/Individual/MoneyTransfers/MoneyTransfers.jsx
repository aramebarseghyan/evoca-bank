import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import MobilePromo from "../HomePage/Components/MobilePromo";
import { db } from "../../../firebase";

const MoneyTransfers = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const docRef = doc(db, "transfers_config", "money_transfers");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPageData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  if (loading || !pageData) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500 font-medium text-lg">Loading...</div>
      </div>
    );
  }

  const { hero, generalProvisions, banner, accordion, documents } = pageData;

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto pt-4 md:pt-6">
        {/* 1. Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-16 mb-16 gap-6 lg:gap-0 2xl:ml-[-30px] 2xl:w-[calc(100%+30px)]">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight whitespace-pre-line">
              {hero?.title}
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {hero?.description}
            </p>
          </div>
          <div className="lg:w-[55%]">
            <img
              src={hero?.imageUrl}
              alt={hero?.title}
              className="w-full h-full object-cover min-h-[300px] bg-[#5D00E0] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* 2. General Provisions */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {generalProvisions?.title}
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            {generalProvisions?.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Full-width Banner */}
      <div className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] h-[350px] md:h-[450px] mb-16">
        <img
          src={banner?.imageUrl}
          alt="Evoca Bank Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 text-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-[900px] leading-snug">
            {banner?.text}
          </h2>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto">
        {/* 4. Required Information (Accordion) */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {accordion?.title}
          </h2>

          <div className="space-y-4">
            {accordion?.items?.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-[#5D00E0] shadow-sm" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-900">
                      {item.title}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#5D00E0] text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 space-y-3 text-sm md:text-base border-t border-gray-100 bg-white">
                      {item.content.map((paragraph, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#5D00E0] mt-2 shrink-0"></span>
                          <p>{paragraph}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Documents Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {documents?.title}
          </h2>

          <div className="space-y-4">
            {documents?.items?.map((docItem) => (
              <a
                key={docItem.id}
                href={docItem.link}
                className="flex items-center justify-between p-5 bg-[#F8F6FD] hover:bg-[#f0ecfc] rounded-2xl transition-colors border border-transparent hover:border-[#5D00E0]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#5D00E0] text-2xl">📄</span>
                  <span className="text-gray-900 font-medium text-sm md:text-base">
                    {docItem.title}
                  </span>
                </div>
                <span className="text-[#5D00E0] text-xl font-bold">⬇</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <MobilePromo />
    </div>
  );
};

export default MoneyTransfers;
