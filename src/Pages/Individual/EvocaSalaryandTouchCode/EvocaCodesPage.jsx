import React from "react";

const EvocaCodesPage = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 font-sans text-gray-800">
      <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-[1100px] 2xl:max-w-[1150px] mx-auto xl:ml-[70px] 2xl:ml-[70px] space-y-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Evoca codes
        </h1>

        <div className="flex flex-col space-y-4 pt-4 text-base sm:text-lg">
          <a
            href="https://www.evoca.am/file_manager/Evoca%20codes/RU%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5D00E0] hover:underline font-medium w-fit"
          >
            RU
          </a>
          <a
            href="https://www.evoca.am/file_manager/Evoca%20codes/UAE%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5D00E0] hover:underline font-medium w-fit"
          >
            UAE
          </a>
          <a
            href="https://www.evoca.am/file_manager/PDF-FILES/file.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5D00E0] hover:underline font-medium w-fit"
          >
            Addresses
          </a>
          <a
            href="https://www.evoca.am/file_manager/other/Evoca%20Brandbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5D00E0] hover:underline font-medium w-fit"
          >
            EvocaBrandbook
          </a>
        </div>

        <div className="text-xs sm:text-sm text-gray-400 pt-12">
          Թարմացվել է՝ 08/08/2026 05:32
        </div>
      </div>
    </div>
  );
};

export default EvocaCodesPage;
