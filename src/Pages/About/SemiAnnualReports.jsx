import React from "react";

// Данные для полугодовых отчетов
const documentsData = [
  {
    id: "doc-1",
    title: "Կիսամյակային հաշվետվություն (2025 առաջին կիսամյակ)",
    fileUrl: "#",
  },
  {
    id: "doc-2",
    title: "Կիսամյակային հաշվետվություն (2024 առաջին կիսամյակ)",
    fileUrl: "#",
  },
  {
    id: "doc-3",
    title: "Կիսամյակային հաշվետվություն (2023 առաջին կիսամյակ)",
    fileUrl: "#",
  },
  {
    id: "doc-4",
    title: "Կիսամյակային հաշվետվություն (2022 առաջին կիսամյակ)",
    fileUrl: "#",
  },
  {
    id: "doc-5",
    title: "Կիսամյակային հաշվետվություն (2021 առաջին կիսամյակ)",
    fileUrl: "#",
  },
];

export default function SemiAnnualReports() {
  return (
    <div className="w-full bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <h2 className="text-[26px] font-bold text-[#202020] mb-8">
          Փաստաթղթեր
        </h2>

        {/* Список документов */}
        <div className="flex flex-col gap-4">
          {documentsData.map((doc) => (
            <a
              key={doc.id}
              href={doc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center bg-[#F8F6FA] hover:bg-[#F2EFF5] transition-colors rounded-xl px-6 py-4 w-full cursor-pointer shadow-sm"
            >
              {/* Иконка файла со стрелкой скачивания */}
              <div className="flex-shrink-0 mr-4 text-[#7B1FA2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                  <polyline points="9 14 12 17 15 14" />
                </svg>
              </div>

              {/* Название документа */}
              <span className="text-[15px] font-medium text-gray-800 group-hover:text-black">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
