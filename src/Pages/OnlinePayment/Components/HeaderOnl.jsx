import React from "react";
import { Link } from "react-router-dom";

const HeaderOnl = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-3 sm:py-4">
      <div className="mx-auto flex items-center justify-between w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        {/* ЛЕВАЯ ЧАСТЬ: Логотип и название раздела */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-[24px] font-bold tracking-tight text-[#222] flex items-center">
              ev<span className="text-[#6000ff]">o</span>ca
            </div>
          </Link>

          <div className="h-5 w-px bg-gray-200 hidden sm:block"></div>

          <span className="text-gray-600 text-[15px] sm:text-[16px] font-normal">
            Online payment
          </span>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Телефон, язык и кнопка истории */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Телефон */}
          <a
            href="tel:+37410605555"
            className="hidden md:block text-[14px] lg:text-[15px] font-medium text-[#6000ff] hover:opacity-80 transition-opacity"
          >
            +374 10 605555
          </a>

          {/* Иконка языка (Глобус) */}
          <button className="text-gray-700 hover:text-[#6000ff] transition-colors p-1 cursor-pointer">
            <svg
              className="w-[20px] h-[20px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"
              />
            </svg>
          </button>

          {/* Кнопка История (Պատմություն) */}
          <button className="bg-[#6000ff] hover:bg-[#5000d6] text-white text-[13px] sm:text-[14px] font-medium px-5 py-2 rounded-full transition-colors whitespace-nowrap shadow-sm cursor-pointer">
            Պատմություն
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderOnl;
