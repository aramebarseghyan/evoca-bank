import React, { useState } from "react";

const Header2 = () => {
  const [activeTab, setActiveTab] = useState("Վարկեր");

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

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex items-center justify-between w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 py-3 md:py-4 lg:py-1 xl:py-2 2xl:py-3 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <div className="shrink-0 flex items-center">
          <img
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png"
            alt="Evocabank"
            className="w-[120px] sm:w-[150px] md:w-[210px] md:h-[45px] lg:w-[170px] lg:h-auto xl:w-[220px] 2xl:w-[240px] object-contain cursor-pointer"
          />
        </div>

        <nav className="hidden md:flex items-center md:gap-x-6 lg:gap-x-8 xl:gap-x-7 2xl:gap-x-8 md:mr-16 lg:mr-24 xl:mr-20 2xl:mr-24">
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

        <button className="bg-[#6000ff] text-white font-bold text-[11px] sm:text-[12px] px-4 py-2 md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] md:py-2.5 md:px-7 lg:py-3 lg:px-9 xl:py-3 xl:px-9 2xl:py-3.5 2xl:px-10 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer">
          EvocaONLINE
        </button>
      </div>
    </header>
  );
};

export default Header2;
