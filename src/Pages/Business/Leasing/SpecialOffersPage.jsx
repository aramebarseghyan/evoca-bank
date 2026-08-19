import React, { useState } from "react";

const SpecialOffersPage = () => {
  
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  const logicGroupTable = [
    { amd: "5.0%", usd: "0.0%", eur: "0.0%", term: "12" },
    { amd: "8.5%", usd: "5.0%", eur: "4.0%", term: "24" },
    { amd: "10.0%", usd: "6.0%", eur: "5.0%", term: "36" },
    { amd: "10.75%", usd: "7.0%", eur: "6.0%", term: "48" },
    { amd: "11.50%", usd: "7.5%", eur: "7.0%", term: "60" },
  ];

  const accordions = [
    {
      title: "Լոջիք Գրուպ ՍՊԸ",
      type: "table",
      intro: (
        <>
          Արտադրողականության խթանման նպատակային ծրագրից չօգտվող հաճախորդների
          համար <span className="text-[#6000ff] font-medium">Evocabank</span>-ը
          ներկայացնում է նոր առաջարկ, ըստ որի կտրամադրվեն լիզինգներ հետևյալ
          պայմաններով`
        </>
      ),
      tableData: logicGroupTable,
    },
    {
      title: "Ավտո Գելլերի ՓԲԸ",
      type: "list",
      intro: (
        <>
          Արտադրողականության խթանման նպատակային ծրագրի շրջանակում`{" "}
          <span className="text-[#6000ff] font-medium">Evocabank</span>-ը և իր
          գործընկեր «Ավտո Գելլերի» ՓԲԸ-ն համատեղ ներկայացնում են նոր առաջարկ,
          ըստ որի կտրամադրվեն լիզինգներ`
        </>
      ),
      listItems: [
        "0.1% տարեկան տոկոսադրույքով",
        "մինչև 36 ամիս մարման ժամկետով",
        "5% կանխավճարով",
      ],
      footerTexts: [
        "Առաջարկը գործում է միայն բեռնատար ավտոմեքենաների համար:",
        "Շտապիր օգտվել այս բացառիկ առաջարկից և ձեռք բերել ամենահարմար ու մատչելի պայմաններով լիզինգը հենց այսօր:",
      ],
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-4 sm:py-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="space-y-4">
          {accordions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-[#6000ff]/30 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                {}
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

                {}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 mt-2">
                      <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                        {item.intro}
                      </p>

                      {item.type === "table" ? (
                        <div className="overflow-x-auto mt-4">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-gray-200 text-xs sm:text-sm font-bold text-gray-700 bg-gray-50/80">
                                <th className="py-3 px-4">AMD</th>
                                <th className="py-3 px-4">USD</th>
                                <th className="py-3 px-4">EUR</th>
                                <th className="py-3 px-4">ժամկետ ամիս</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.tableData.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className="border-b border-gray-100 hover:bg-gray-50/50 text-xs sm:text-sm text-gray-600"
                                >
                                  <td className="py-3 px-4 font-medium text-gray-800">
                                    {row.amd}
                                  </td>
                                  <td className="py-3 px-4">{row.usd}</td>
                                  <td className="py-3 px-4">{row.eur}</td>
                                  <td className="py-3 px-4">{row.term}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base pl-2">
                            {item.listItems.map((li, lIdx) => (
                              <li key={lIdx}>{li}</li>
                            ))}
                          </ul>
                          {item.footerTexts.map((fText, fIdx) => (
                            <p
                              key={fIdx}
                              className="text-gray-700 text-sm sm:text-base leading-relaxed"
                            >
                              {fText}
                            </p>
                          ))}
                        </div>
                      )}
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

export default SpecialOffersPage;
