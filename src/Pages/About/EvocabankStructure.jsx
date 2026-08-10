import React from "react";

const EvocabankStructure = () => {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen flex flex-col justify-between">
      <div>
        {/* Основной контент */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-20">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
            Բանկի կառուցվածքը
          </h1>

          {/* Контейнер для схемы организационной структуры с горизонтальным скроллом */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 sm:p-8">
            <div className="w-full overflow-x-auto pb-4">
              <div className="min-w-[900px] flex justify-center">
                <img
                  src="https://www.evoca.am/file_manager/structure/Organizational%20Structure-arm.png"
                  alt="Evocabank Organizational Structure"
                  className="w-full max-w-[1100px] h-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Дата обновления */}
            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end text-xs text-gray-400">
              Թարմացվել է՝ 31/10/2025 14:34
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EvocabankStructure;
