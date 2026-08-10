import React from "react";

// Пример данных по годам для презентаций инвесторам (Investor Presentations)
const presentationsData = [
  {
    year: "2026",
    items: [
      {
        id: "2026-q1",
        title: "Q1 2026",
        image:
          "https://www.evoca.am/images-cache/presentations/1/178056974111/310x249.jpg",
        pdfUrl: "#",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        id: "2025-q1",
        title: "Q1 2025",
        image:
          "https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png",
        pdfUrl: "#",
      },
      {
        id: "2025-q2",
        title: "Q2 2025",
        image:
          "https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg",
        pdfUrl: "#",
      },
      {
        id: "2025-q3",
        title: "Q3 2025",
        image:
          "https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png",
        pdfUrl: "#",
      },
      {
        id: "2025-q4",
        title: "Q4 2025",
        image:
          "https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg",
        pdfUrl: "#",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        id: "2024-q1",
        title: "Q1 2024",
        image:
          "https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png",
        pdfUrl: "#",
      },
      {
        id: "2024-q2",
        title: "Q2 2024",
        image:
          "https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg",
        pdfUrl: "#",
      },
      {
        id: "2024-q3",
        title: "Q3 2024",
        image:
          "https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png",
        pdfUrl: "#",
      },
      {
        id: "2024-q4",
        title: "Q4 2024",
        image:
          "https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg",
        pdfUrl: "#",
      },
    ],
  },
];

export default function InvestorPresentations() {
  return (
    <div className="w-full bg-white min-h-screen pb-16 font-sans">
      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {presentationsData.map((section) => (
          <div key={section.year} className="mb-12">
            <h2 className="text-[26px] font-bold text-[#202020] mb-6">
              {section.year}
            </h2>

            {/* Светло-серый/сиреневый фон, оборачивающий карточки года */}
            <div className="bg-[#F8F6FA] w-full py-10 px-8">
              <div className="flex flex-wrap gap-8">
                {section.items.map((item) => (
                  <a
                    key={item.id}
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col group w-full sm:w-[310px] cursor-pointer"
                  >
                    {/* Изображение презентации */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                    />

                    {/* Текст под изображением */}
                    <span className="mt-4 text-[13px] font-bold text-gray-800 uppercase">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
