import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { subNavigationGroups, normalizePath } from "../../data/navigationData";

const SubHeader = () => {
  // 1. ԲՈԼՈՐ HOOK-ԵՐԸ ԳՐՈՒՄ ԵՆՔ ԱՄԵՆԱՎԵՐԵՎՈՒՄ
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const rawPath = location.pathname;
  const cleanPath = normalizePath(rawPath);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Այս Hook-ն արդեն ապահով տեղում է

  // 2. ՄՆԱՑԱԾ ՏՐԱՄԱԲԱՆՈՒԹՅՈՒՆՆ ՈՒ RETURN-ՆԵՐԸ ԳՐՈՒՄ ԵՆՔ ՆԵՐՔԵՎՈՒՄ
  // Скрываем SubHeader на странице объявлений и новостей
  if (
    cleanPath === "/announcements" ||
    cleanPath.startsWith("/announcements/") ||
    cleanPath === "/news" ||
    cleanPath.startsWith("/news/")
  ) {
    return null;
  }

  const activeGroup = subNavigationGroups.find((group) =>
    group.paths.some((p) => cleanPath === p || cleanPath.startsWith(`${p}/`)),
  );

  if (!activeGroup) {
    return null;
  }

  return (
    <div className="hidden md:block w-full h-[50px] lg:h-[56px]">
      <div
        className={`w-full bg-[#5800EB] text-white select-none transition-all duration-300 ${
          isScrolled
            ? "fixed top-[60px] sm:top-[70px] left-0 z-40 shadow-md"
            : "relative z-40"
        }`}
      >
        <div className="mx-auto flex items-stretch w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] overflow-x-auto custom-scrollbar h-[50px] lg:h-[56px]">
          {activeGroup.items.map((item) => {
            const isActive =
              cleanPath === item.path || cleanPath.startsWith(`${item.path}/`);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-6 lg:px-8 font-bold 
                  whitespace-nowrap transition-colors duration-200
                  text-[12px] lg:text-[13px] xl:text-[14px]
                  ${
                    isActive
                      ? "bg-[#3A009A] text-white"
                      : "text-white hover:bg-black/10"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
