import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { subNavigationGroups, normalizePath } from "../../data/navigationData";
import logo from "../../assets/img/evocabank.png";

const ScrollHeader = ({ onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Очищаем путь
  const rawPath = location.pathname;
  const cleanPath = normalizePath ? normalizePath(rawPath) : rawPath;

  // 1. Новости и Блог (совсем минималистичные — без вкладок)
  const minimalHeaderPages = ["/news", "/blog"];
  const isMinimalHeader = minimalHeaderPages.some(
    (prefix) => cleanPath === prefix || cleanPath.startsWith(`${prefix}/`),
  );

  // 2. Раздел Карьеры и Культуры (вкладки: Evoca Լայֆ, Աշխատանք և պրակտիկա)
  const careerPrefixes = [
    "/culture",
    "/career",
    "/advantages",
    "/faq",
    "/how-to-apply",
    "/evoca-life",
    "/work-at-evoca",
    "/internship",
    "/evocabridge",
  ];
  const isCareerMode = careerPrefixes.some(
    (prefix) => cleanPath === prefix || cleanPath.startsWith(`${prefix}/`),
  );

  // 3. Корпоративный раздел "О нас" (вкладки: Evoca-ի մասին, Սակագներ и т.д.)
  const aboutPrefixes = [
    "/about",
    "/structure",
    "/shareholders",
    "/management",
    "/partners",
    "/awards",
    "/reviews",
    "/csr",
    "/tariffs",
    "/reports",
    "/announcements",
    "/auditors-opinion",
    "/financial-statements",
    "/for-investors",
    "/semi-annual-reports",
    "/annual-reports",
  ];
  const isCorporateMode = aboutPrefixes.some(
    (prefix) => cleanPath === prefix || cleanPath.startsWith(`${prefix}/`),
  );

  // 4. Бизнес-режим
  const isBusinessMode =
    cleanPath.startsWith("/business-") ||
    cleanPath === "/leasing-evoca" ||
    cleanPath === "/v-pos-terminal" ||
    cleanPath === "/guarantee" ||
    cleanPath === "/individual-safe-deposit-boxes";

  // Навигация для Физлиц
  const individualNavItems = [
    { label: "Վարկեր", path: "/loans", showOn: "md" },
    { label: "Քարտեր", path: "/cards", showOn: "md" },
    { label: "Ավանդներ", path: "/deposits", showOn: "md" },
    { label: "Հաշիվներ", path: "/accounts", showOn: "lg" },
    { label: "Փոխանցումներ", path: "/transfers", showOn: "lg" },
    { label: "Արժեթղթեր", path: "/securities", showOn: "xl" },
    { label: "EvocaSALARY", path: "/evocasalary", showOn: "xl" },
    { label: "EvocaTOUCH", path: "/evocatouch", showOn: "2xl" },
  ];

  // Навигация для Бизнеса
  const businessNavItems = [
    { label: "Վարկեր", path: "/business-loans", showOn: "md" },
    { label: "Լիզինգ", path: "/leasing-evoca", showOn: "md" },
    {
      label: "Հաշիվներ",
      path: "/business-account-opening-and-services",
      showOn: "md",
    },
    { label: "Ավանդներ", path: "/business-classical-deposit", showOn: "lg" },
    {
      label: "Արժեթղթերի շուկա",
      path: "/business-investment-services",
      showOn: "lg",
    },
    {
      label: "Առևտրի ֆինանսավորում",
      path: "/business-trade-finance",
      showOn: "xl",
    },
    { label: "Դիջիթալ", path: "/v-pos-terminal", showOn: "xl" },
    { label: "Այլ", path: "/individual-safe-deposit-boxes", showOn: "2xl" },
  ];

  // Корпоративная навигация ("О нас")
  const corporateNavItems = [
    { label: "Evoca-ի մասին", path: "/about", showOn: "md" },
    { label: "Սակագներ", path: "/tariffs", showOn: "md" },
    { label: "Հաշվետվություններ", path: "/reports", showOn: "md" },
    { label: "Հայտարարություններ", path: "/announcements", showOn: "md" },
  ];

  // Навигация для Карьеры
  const careerNavItems = [
    { label: "Evoca Լայֆ", path: "/evoca-life", showOn: "md" },
    { label: "Աշխատանք և պրակտիկա", path: "/career", showOn: "md" },
  ];

  // Выбираем нужный массив пунктов меню
  let navItems = individualNavItems;
  if (isCareerMode) {
    navItems = careerNavItems;
  } else if (isCorporateMode) {
    navItems = corporateNavItems;
  } else if (isBusinessMode) {
    navItems = businessNavItems;
  }

  // Функция определения активности пункта меню
  const isMainItemActive = (mainPath) => {
    if (mainPath === "/about") {
      const aboutSubPaths = [
        "/about",
        "/structure",
        "/shareholders",
        "/management",
        "/partners",
        "/awards",
        "/reviews",
        "/csr",
        "/tariffs",
        "/reports",
        "/announcements",
        "/auditors-opinion",
        "/financial-statements",
        "/for-investors",
        "/semi-annual-reports",
        "/annual-reports",
      ];
      if (
        aboutSubPaths.some(
          (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
        )
      ) {
        return true;
      }
    }

    if (mainPath === "/evoca-life" || mainPath === "/career") {
      const careerSubPaths = [
        "/culture",
        "/career",
        "/advantages",
        "/faq",
        "/how-to-apply",
        "/evoca-life",
        "/work-at-evoca",
        "/internship",
        "/evocabridge",
      ];
      if (
        careerSubPaths.some(
          (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
        )
      ) {
        // Дополнительно разведем подсветку между Evoca Life и Career
        if (
          mainPath === "/evoca-life" &&
          (cleanPath === "/evoca-life" ||
            cleanPath === "/culture" ||
            cleanPath === "/advantages" ||
            cleanPath === "/faq")
        ) {
          return true;
        }
        if (
          mainPath === "/career" &&
          (cleanPath === "/career" ||
            cleanPath === "/work-at-evoca" ||
            cleanPath === "/internship" ||
            cleanPath === "/evocabridge" ||
            cleanPath === "/how-to-apply")
        ) {
          return true;
        }
      }
    }

    if (subNavigationGroups) {
      const group = subNavigationGroups.find((g) => g.mainPath === mainPath);
      if (group && group.paths) {
        return group.paths.some(
          (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
        );
      }
    }
    return cleanPath === mainPath || cleanPath.startsWith(`${mainPath}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
        isScrolled
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-white -z-10" />

      <div className="flex items-center justify-between mx-auto w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 h-[60px] sm:h-[70px] md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <div className="flex items-center gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="shrink-0 flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Evocabank"
                className="h-[36px] sm:h-[40px] md:h-[45px] lg:h-[48px] w-auto object-contain cursor-pointer transition-all"
              />
            </Link>
          </div>

          {/* Навигация скрыта только для минималистичных страниц (новости, блог) */}
          {!isMinimalHeader && (
            <nav className="hidden md:flex items-center md:gap-x-5 lg:gap-x-6 xl:gap-x-7 2xl:gap-x-8">
              {navItems.map((item, index) => {
                let isActive = isMainItemActive(item.path);

                if (
                  !isBusinessMode &&
                  !isCorporateMode &&
                  !isCareerMode &&
                  item.path === "/loans" &&
                  cleanPath === "/"
                ) {
                  isActive = true;
                }

                const rootPaths = [
                  "/business",
                  "/about",
                  "/loans",
                  "/instant-payments",
                  "/career",
                  "/culture",
                ];
                if (index === 0 && rootPaths.includes(cleanPath)) {
                  isActive = true;
                }

                const displayClass =
                  item.showOn === "lg"
                    ? "hidden lg:block"
                    : item.showOn === "xl"
                      ? "hidden xl:block"
                      : item.showOn === "2xl"
                        ? "hidden 2xl:block"
                        : "";

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`font-bold transition-colors cursor-pointer md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] ${displayClass} ${
                      isActive
                        ? "text-[#6000ff]"
                        : "text-[#222222] hover:text-[#6000ff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>

        <div className="flex items-center shrink-0 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <button className="bg-[#6000ff] text-white font-bold text-[11px] sm:text-[12px] lg:text-[13px] py-[7px] px-[14px] sm:py-[8px] sm:px-[18px] lg:py-[10px] lg:px-[24px] rounded-full hover:opacity-90 transition-all whitespace-nowrap cursor-pointer tracking-wide">
            EvocaONLINE
          </button>

          <button
            onClick={onOpenMenu}
            className="flex flex-col justify-center items-center gap-[4px] lg:gap-[5px] w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] cursor-pointer"
          >
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
