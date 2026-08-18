import React from "react";

const CardholderLinks = () => {
  const documents = [
    {
      id: 1,
      title: "Ինչ անել, եթե բողոք ունեք (30.04.2026թ.)",
      link: "https://www.evoca.am/files/global_files/1/What-to-do-if-you-have-a-complaint.pdf",
    },
    {
      id: 2,
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      link: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf",
    },
  ];

  return (
    <section className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 py-12 font-sans text-gray-800">
      {/* Главный заголовок */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
        Հղումներ Բանկի քարտապանների համար
      </h2>

      {/* Подзаголовок */}
      <h3 className="text-lg font-bold text-gray-900 mb-4 max-w-[650px] mx-auto">
        Փաստաթղթեր
      </h3>

      {/* Список документов */}
      <div className="space-y-3 max-w-[650px] mx-auto mb-12">
        {documents.map((doc) => (
          <a
            key={doc.id}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 bg-[#F6F4F9] hover:bg-[#EFE9F5] p-4 rounded-xl transition-colors duration-200 group"
          >
            {/* Иконка PDF/Download */}
            <div className="shrink-0 text-[#8A2BE2] group-hover:scale-105 transition-transform duration-200">
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="m9 15 3 3 3-3" />
              </svg>
            </div>

            {/* Название документа */}
            <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
              {doc.title}
            </span>
          </a>
        ))}
      </div>

      {/* Дата обновления */}
      <div className="text-right text-xs text-gray-400 border-t border-gray-100 pt-4">
        Թարմացվել է` 06/08/2026 11:03
      </div>
    </section>
  );
};

export default CardholderLinks;
