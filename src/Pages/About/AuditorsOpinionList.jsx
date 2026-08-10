import React from 'react';

// Иконка документа со стрелкой скачивания
const DownloadIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-purple-600 flex-shrink-0 w-6 h-6"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <path d="M12 18v-6"></path>
    <path d="M9 15l3 3 3-3"></path>
  </svg>
);

const AuditorsOpinionList = () => {
  // Генерируем массив данных от 2025 до 2006 года, как на скриншотах
  const documents = Array.from({ length: 20 }, (_, i) => {
    const year = 2025 - i;
    return {
      year: year.toString(),
      title: `${year} Աուդիտորական եզրակացություն`,
      url: "#" // Сюда можно подставить реальные ссылки на PDF
    };
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
        {documents.map((doc, index) => (
          <div key={index} className="flex flex-col">
            {/* Заголовок с годом */}
            <h2 className="text-[22px] font-bold text-gray-800 mb-4">
              {doc.year}
            </h2>
            
            {/* Карточка документа */}
            <a 
              href={doc.url} 
              className="flex items-center gap-3 bg-[#f5f2f8] px-4 py-3.5 rounded-lg hover:bg-[#ebe6f0] transition-colors duration-200 cursor-pointer"
            >
              <DownloadIcon />
              <span className="text-[15px] font-semibold text-gray-800">
                {doc.title}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditorsOpinionList;