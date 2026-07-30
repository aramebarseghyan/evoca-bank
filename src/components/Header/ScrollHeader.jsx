import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const ScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const navItems = [
    { label: "Վարկեր", showOn: "md" },
    { label: "Քարտեր", showOn: "md" },
    { label: "Ավանդներ", showOn: "md" },
    { label: "Հաշիվներ", showOn: "lg" },
    { label: "Փոխանցումներ", showOn: "lg" },
    { label: "Արժեթղթեր", showOn: "xl" },
    { label: "EvocaSALARY", showOn: "xl" },
    { label: "EvocaTOUCH", showOn: "2xl" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300
        ${isScrolled ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex items-center justify-between mx-auto w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 h-[60px] sm:h-[70px] md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        {/* ЛЕВАЯ ЧАСТЬ: Логотип + Ссылки сразу рядом */}
        <div className="flex items-center gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          {/* Логотип V */}
          <div className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Evocabank"
              className="h-[36px] sm:h-[40px] md:h-[45px] lg:h-[48px] w-auto object-contain cursor-pointer transition-all"
            />
          </div>

          {/* Навигационные ссылки слева (рядом с логотипом) */}
          <nav className="hidden md:flex items-center md:gap-x-5 lg:gap-x-6 xl:gap-x-7 2xl:gap-x-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.label;

              const displayClass =
                item.showOn === "lg"
                  ? "hidden lg:block"
                  : item.showOn === "xl"
                    ? "hidden xl:block"
                    : item.showOn === "2xl"
                      ? "hidden 2xl:block"
                      : "";

              return (
                <a
                  key={item.label}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.label);
                  }}
                  className={`font-bold transition-colors cursor-pointer md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] ${displayClass} ${
                    isActive
                      ? "text-[#6000ff]"
                      : "text-[#222222] hover:text-[#6000ff]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Кнопка EvocaONLINE и бургер-меню */}
        <div className="flex items-center shrink-0 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <button className="bg-[#6000ff] text-white font-bold text-[11px] sm:text-[12px] lg:text-[13px] py-[7px] px-[14px] sm:py-[8px] sm:px-[18px] lg:py-[10px] lg:px-[24px] rounded-full hover:opacity-90 transition-all whitespace-nowrap cursor-pointer tracking-wide">
            EvocaONLINE
          </button>

          <button className="flex flex-col justify-center items-center gap-[4px] lg:gap-[5px] w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] cursor-pointer">
            <span className="w-[18px] sm:w-[20px] lg:w-[24px] h-[2px] bg-[#1a1a1a] block rounded-full transition-all"></span>
            <span className="w-[18px] sm:w-[20px] lg:w-[24px] h-[2px] bg-[#1a1a1a] block rounded-full transition-all"></span>
            <span className="w-[18px] sm:w-[20px] lg:w-[24px] h-[2px] bg-[#1a1a1a] block rounded-full transition-all"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollHeader;
