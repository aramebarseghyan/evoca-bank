import React, { useState } from "react";

export default function FaqSectionBenefits({ faqItems }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section className="mt-20 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">
        Հաճախ տրվող հարցեր
      </h2>
      <div className="flex flex-col gap-4">
        {faqItems.map((item, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                isOpen ? "border-[#5D00E0] shadow-sm" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 text-base focus:outline-none cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="pr-4">{item.question}</span>
                <div className="w-8 h-8 flex items-center justify-center shrink-0 text-[#5D00E0]">
                  {isOpen ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
