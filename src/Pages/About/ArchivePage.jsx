import React, { useState } from "react";

const archiveData = [
  {
    id: "cash",
    title: "Կանխիկի մուտքի համար Բանկի կողմից սահմանված դրույքաչափեր",
    years: [
      {
        year: "2024",
        items: [
          {
            text: "Կանխիկի մուտքի համար Բանկի կողմից սահմանված դրույքաչափեր (ՌԴ ռուբլի RUB, Բրիտանական ֆունտ GBP, Շվեյցարական ֆրանկ CHF)",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: "complex",
    title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ",
    years: [
      {
        year: "2025",
        items: [
          {
            text: "16.05.2025 - Համալիր բանկային ծառայությունների մատուցման պայմաններ",
            link: "#",
          },
        ],
      },
      {
        year: "2023",
        items: [
          {
            text: "01.11.2023 - Համալիր բանկային ծառայությունների մատուցման պայմաններ",
            link: "#",
          },
          {
            text: "10.04.2023 - Համալիր բանկային ծառայությունների մատուցման պայմաններ",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: "loans",
    title: "Վարկավորման պայմաններ և սակագներ",
    years: [
      {
        year: "2026",
        items: [
          { text: "01.07.2026 - Վարկավորման պայմաններ և սակագներ", link: "#" },
          { text: "09.06.2026 - Վարկավորման պայմաններ և սակագներ", link: "#" },
        ],
      },
    ],
  },
  {
    id: "deposits",
    title: "Ավանդների ներգրավման պահմաններ և սակագներ",
    years: [
      {
        year: "2026",
        items: [
          { text: "Ավանդների ընդհանուր պայմաններ և դրույքաչափեր", link: "#" },
        ],
      },
    ],
  },
  {
    id: "cards",
    title: "Վճարային քարտերի տրամադրման և օգտագործման պայմաններ",
    years: [
      {
        year: "2026",
        items: [{ text: "Քարտերի թողարկման և սպասարկման սակագներ", link: "#" }],
      },
    ],
  },
  {
    id: "tariffs",
    title: "Սակագներ և դրույթներ",
    years: [
      {
        year: "2026",
        items: [{ text: "Ընդհանուր սակագներ և դրույթներ", link: "#" }],
      },
    ],
  },
];

const ArchivePage = () => {
  
  const [openId, setOpenId] = useState("loans");

  const toggleAccordion = (id) => {
    
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 font-sans">
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4 tracking-wide uppercase">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        {archiveData.map((section) => {
          const isOpen = openId === section.id;
          return (
            <div
              key={section.id}
              className={`border rounded-xl transition-all duration-300 ${
                isOpen
                  ? "border-purple-600 shadow-md ring-1 ring-purple-600"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleAccordion(section.id)}
                className="w-full flex items-center justify-between p-5 text-left bg-white transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base sm:text-lg">
                  {section.title}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-purple-700" : "text-gray-500"
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              {}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.4s ease-out",
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-white space-y-6">
                    {section.years.map((yearBlock, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-purple-700 font-bold text-lg">
                          {yearBlock.year}
                        </h3>
                        <ul className="space-y-2.5">
                          {yearBlock.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <a
                                href={item.link}
                                className="text-purple-700 hover:text-purple-900 hover:underline text-sm sm:text-base inline-block transition-colors"
                              >
                                {item.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-bold text-gray-900 mb-4 tracking-wide uppercase">
          Փաստաթղթեր
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-purple-700">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </div>
            <a
              href="#"
              className="text-gray-800 hover:text-purple-700 font-medium text-sm sm:text-base"
            >
              Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 07.04.2026
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
