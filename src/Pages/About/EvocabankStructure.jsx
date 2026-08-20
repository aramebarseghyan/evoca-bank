import React from "react";

const EvocabankStructure = () => {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen">
      <main className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 mb-20">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          Բանկի կառուցվածքը
        </h1>


        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
          <div className="w-full flex justify-center items-center">
            <img
              src="https://www.evoca.am/file_manager/structure/Organizational%20Structure-arm.png"
              alt="Evocabank Organizational Structure"
              className="w-full h-auto max-h-[60vh] sm:max-h-[750px] object-contain block select-none"
            />
          </div>


          <div className="mt-4 sm:mt-8 pt-4 border-t border-gray-100 flex justify-end text-xs text-gray-400">
            Թարմացվել է՝ 31/10/2025 14:34
          </div>
        </div>
      </main>
    </div>
  );
};

export default EvocabankStructure;
