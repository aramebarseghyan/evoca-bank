import React from "react";

const Header2 = () => {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex items-center justify-between w-full md:max-w-[770px] lg:max-w-[1024px] md:px-5 lg:px-7 md:py-4 lg:py-1">
        <div className="shrink-0 flex items-center">
          <img
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png"
            alt="Evocabank"
            className="md:w-[210px] md:h-[45px] lg:w-[170px] lg:h-auto object-contain cursor-pointer"
          />
        </div>

        <nav className="hidden md:flex items-center md:gap-x-6 lg:gap-x-8 md:mr-25 lg:mr-32.5">
          <a
            href="#"
            className="font-bold text-[#222222] md:text-[12px] lg:text-[13px] hover:text-[#6000ff] transition-colors cursor-pointer"
          >
            Վարկեր
          </a>
          <a
            href="#"
            className="font-bold text-[#222222] md:text-[12px] lg:text-[13px] hover:text-[#6000ff] transition-colors cursor-pointer"
          >
            Քարտեր
          </a>
          <a
            href="#"
            className="font-bold text-[#222222] md:text-[12px] lg:text-[13px] hover:text-[#6000ff] transition-colors cursor-pointer"
          >
            Ավանդներ
          </a>
          <a
            href="#"
            className="hidden lg:block font-bold text-[#222222] lg:text-[13px] hover:text-[#6000ff] transition-colors cursor-pointer"
          >
            Հաշիվներ
          </a>
          <a
            href="#"
            className="hidden lg:block font-bold text-[#222222] lg:text-[13px] hover:text-[#6000ff] transition-colors cursor-pointer"
          >
            Փոխանցումներ
          </a>
        </nav>

        <button className="bg-[#6000ff] text-white font-bold md:text-[12px] lg:text-[13px] md:py-2.5 md:px-7 lg:py-3 lg:px-9 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer">
          EvocaONLINE
        </button>
      </div>
    </header>
  );
};

export default Header2;
