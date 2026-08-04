import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header1 = ({ onOpenMenu }) => {
  const location = useLocation();

  const tabs = [
    { name: "Անհատ", path: "/loans", xlOnly: false },
    { name: "Բիզնես", path: "/business", xlOnly: false },
    {
      name: "Ակնթարթային վճարումներ",
      path: "/instant-payments",
      xlOnly: false,
    },
    { name: "Մեր մասին", path: "/about", xlOnly: false },
    { name: "Նորություններ", path: "/news", xlOnly: false },
    { name: "Բլոգ", path: "/blog", xlOnly: true },
    { name: "Կարիերա", path: "/career", xlOnly: true },
  ];

  return (
    <div className="w-full border-b border-gray-100 bg-white 2xl:mt-[10px]">
      <div className="mx-auto flex items-center justify-between w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className="hidden lg:flex items-center lg:gap-3 xl:gap-5 2xl:gap-6">
          {tabs.map((tab) => {
            // ЛОГИКА АКТИВНОСТИ
            let isActive = false;

            if (tab.name === "Անհատ") {
              // Вкладка "Անհատ" активна, если мы НЕ находимся в других главных разделах
              const isOtherSection = [
                "/business",
                "/about",
                "/instant-payments",
                "/news",
                "/blog",
                "/career",
              ].some((prefix) => location.pathname.startsWith(prefix));
              isActive = !isOtherSection;
            } else {
              // Для остальных вкладок проверяем, начинается ли путь с их URL (например, /about/tariffs -> true)
              isActive = location.pathname.startsWith(tab.path);
            }

            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`
                  ${tab.xlOnly ? "hidden xl:block" : "block"}
                  cursor-pointer pt-3 pb-3 lg:pt-3 lg:pb-4 2xl:pt-4 2xl:pb-5 
                  border-t-[3px] transition-all duration-200 -mt-px whitespace-nowrap
                  lg:text-[12px] xl:text-[13px] 2xl:text-[14px]
                  ${
                    isActive
                      ? "text-[#6000ff] font-bold border-[#6000ff]"
                      : "text-gray-700 font-medium border-transparent hover:text-[#6000ff]"
                  }
                `}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="flex items-center shrink-0 ml-auto gap-4 md:gap-5 lg:gap-6 2xl:gap-8 pt-3 pb-3 lg:pt-3 lg:pb-4 2xl:pt-4 2xl:pb-5">
          <div className="flex items-center gap-4 lg:gap-5 2xl:gap-6">
            <div className="hidden lg:flex items-center gap-1.5 cursor-pointer group">
              <p className="text-[13px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-bold text-[#6000ff] whitespace-nowrap">
                Առցանց հայտեր
              </p>
              <svg
                className="w-[12px] h-[12px] xl:w-[14px] xl:h-[14px] stroke-[#6000ff] transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex items-center gap-1.5 cursor-pointer group">
              <p className="text-[13px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-bold text-[#6000ff] whitespace-nowrap">
                Հետադարձ կապ
              </p>
              <svg
                className="w-[12px] h-[12px] xl:w-[14px] xl:h-[14px] stroke-[#6000ff] transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 2xl:gap-6 text-[#222222]">
            <svg
              className="w-[18px] h-[18px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[19px] xl:h-[19px] 2xl:w-[20px] 2xl:h-[20px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M320 64C214 64 128 148.4 128 252.6C128 371.9 248.2 514.9 298.4 569.4C310.2 582.2 329.8 582.2 341.6 569.4C391.8 514.9 512 371.9 512 252.6C512 148.4 426 64 320 64z" />
            </svg>
            <svg
              className="w-[18px] h-[18px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[19px] xl:h-[19px] 2xl:w-[20px] 2xl:h-[20px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z" />
            </svg>
            <svg
              className="w-[18px] h-[18px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[19px] xl:h-[19px] 2xl:w-[20px] 2xl:h-[20px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" />
            </svg>
            <svg
              className="w-[18px] h-[18px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[19px] xl:h-[19px] 2xl:w-[20px] 2xl:h-[20px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
            </svg>

            <svg
              onClick={onOpenMenu}
              className="w-[18px] h-[18px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[19px] xl:h-[19px] 2xl:w-[20px] 2xl:h-[20px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
