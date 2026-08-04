import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header1 = ({ onOpenMenu }) => {
  const location = useLocation();

  const tabs = [
    { name: "Անհատ", path: "/loans", xlOnly: false },
    { name: "Բիզնես", path: "/business-loans", xlOnly: false },
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

  const isBusinessActive =
    location.pathname.startsWith("/business-") ||
    location.pathname === "/leasing-evoca" ||
    location.pathname === "/v-pos-terminal" ||
    location.pathname === "/individual-safe-deposit-boxes";

  const otherSections = [
    "/business-",
    "/leasing-evoca",
    "/v-pos-terminal",
    "/individual-safe-deposit-boxes",
    "/about",
    "/instant-payments",
    "/news",
    "/blog",
    "/career",
  ];

  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex items-center justify-between w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        {/* ՁԱԽ ՄԱՍ. Հեռացվել է "hidden lg:flex", ավելացվել է "overflow-x-auto" փոքր էկրանների համար */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-3 xl:gap-5 2xl:gap-6 overflow-x-auto custom-scrollbar flex-1 mr-4">
          {tabs.map((tab) => {
            let isActive = false;

            if (tab.name === "Անհատ") {
              const isOtherSectionActive = otherSections.some((prefix) =>
                location.pathname.startsWith(prefix),
              );
              isActive = !isOtherSectionActive;
            } else if (tab.name === "Բիզնես") {
              isActive = isBusinessActive;
            } else {
              isActive = location.pathname.startsWith(tab.path);
            }

            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`
                  ${tab.xlOnly ? "hidden xl:block" : "block"}
                  cursor-pointer py-3 lg:py-4
                  border-t-[3px] transition-all duration-200 whitespace-nowrap
                  text-[12px] xl:text-[13px] 2xl:text-[14px]
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

        {/* ԱՋ ՄԱՍ */}
        <div className="flex items-center shrink-0 ml-auto gap-4 md:gap-5 lg:gap-6 2xl:gap-8 py-3 lg:py-4">
          {/* Հեռացվել է "hidden lg:flex" - այժմ կերևա նաև mobile-ում */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-5 2xl:gap-6">
            <div className="flex items-center gap-1.5 cursor-pointer group">
              <p className="text-[12px] xl:text-[13px] 2xl:text-[14px] font-bold text-[#6000ff] whitespace-nowrap">
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
              <p className="text-[12px] xl:text-[13px] 2xl:text-[14px] font-bold text-[#6000ff] whitespace-nowrap">
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
              onClick={onOpenMenu}
              className="w-[18px] h-[18px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[19px] xl:h-[19px] 2xl:w-[20px] 2xl:h-[20px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
