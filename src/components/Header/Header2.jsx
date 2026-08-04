import React from "react";
import { Link, useLocation } from "react-router-dom";
import { subNavigationGroups, normalizePath } from "../../data/navigationData";
import evocabankLogo from "../../assets/img/evocabank.png";

const Header2 = () => {
  const location = useLocation();
  const rawPath = location.pathname;
  const cleanPath = normalizePath(rawPath);

  // Ищем группу по очищенному пути
  const activeGroup = subNavigationGroups.find((g) =>
    g.paths.some((p) => cleanPath === p || cleanPath.startsWith(`${p}/`)),
  );

  // Информационные разделы (О нас / Тарифы / Отчеты)
  const aboutRelatedPaths = [
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

  const isAboutMode = aboutRelatedPaths.some(
    (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
  );

  // Разделы Карьеры
  const evocaLifePaths = [
    "/culture",
    "/advantages",
    "/faq",
    "/how-to-apply",
    "/evoca-life",
  ];
  const workPaths = [
    "/work-at-evoca",
    "/internship",
    "/evocabridge",
    "/career",
  ];

  const isCareerMode = [...evocaLifePaths, ...workPaths].some(
    (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
  );

  // Определяем режим (Бизнес / Физические лица)
  const isBusinessMode = activeGroup
    ? activeGroup.isBusiness
    : cleanPath.includes("business");

  // Пункты меню для физических лиц (Անհատ)
  const individualNavItems = [
    { label: "Վարկեր", path: "/loans", display: "flex" },
    { label: "Քարտեր", path: "/cards", display: "flex" },
    { label: "Ավանդներ", path: "/deposits", display: "flex" },
    { label: "Հաշիվներ", path: "/accounts", display: "hidden lg:flex" },
    {
      label: "Փոխանցումներ",
      path: "/money-transfers",
      display: "hidden lg:flex",
    },
    {
      label: "Արժեթղթեր",
      path: "/investment-services",
      display: "hidden xl:flex",
    },
    { label: "EvocaSALARY", path: "/evocasalary", display: "hidden xl:flex" },
    { label: "EvocaTOUCH", path: "/evocatouch", display: "hidden 2xl:flex" },
  ];

  // Пункты меню для бизнеса (Բիզնես)
  const businessNavItems = [
    { label: "Վարկեր", path: "/business-loans", display: "flex" },
    { label: "Լիզինգ", path: "/leasing-evoca", display: "flex" },
    {
      label: "Հաշիվներ",
      path: "/business-account-opening-and-services",
      display: "flex",
    },
    {
      label: "Ավանդներ",
      path: "/business-classical-deposit",
      display: "hidden lg:flex",
    },
    {
      label: "Արժեթղթերի շուկա",
      path: "/business-investment-services",
      display: "hidden lg:flex",
    },
    {
      label: "Առևտրի ֆինանսավորում",
      path: "/guarantee",
      display: "hidden xl:flex",
    },
    { label: "Դիջիթալ", path: "/v-pos-terminal", display: "hidden xl:flex" },
    {
      label: "Այլ",
      path: "/individual-safe-deposit-boxes",
      display: "hidden 2xl:flex",
    },
  ];

  // Пункты меню для раздела "О нас"
  const aboutNavItems = [
    { label: "Evoca-ի մասին", path: "/about", display: "flex" },
    { label: "Սակագներ", path: "/tariffs", display: "flex" },
    { label: "Հաշվետվություններ", path: "/auditors-opinion", display: "flex" },
    { label: "Հայտարարություններ", path: "/announcements", display: "flex" },
  ];

  // Пункты меню для раздела "Карьера"
  const careerNavItems = [
    { label: "Evoca Լայֆ", path: "/culture", display: "flex" },
    { label: "Աշխատանք և պրակտիկա", path: "/work-at-evoca", display: "flex" },
  ];

  // Выбираем правильный набор ссылок
  let currentNavItems;
  if (isAboutMode) {
    currentNavItems = aboutNavItems;
  } else if (isCareerMode) {
    currentNavItems = careerNavItems;
  } else if (isBusinessMode) {
    currentNavItems = businessNavItems;
  } else {
    currentNavItems = individualNavItems;
  }

  const isMainItemActive = (mainPath) => {
    const group = subNavigationGroups.find((g) => g.mainPath === mainPath);
    if (!group)
      return cleanPath === mainPath || cleanPath.startsWith(`${mainPath}/`);
    return group.paths.some(
      (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
    );
  };

  const getLinkClass = (path, extraClasses = "") => {
    let isActive = false;

    // Логика активности для раздела Карьеры
    if (path === "/culture") {
      isActive = evocaLifePaths.some(
        (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
      );
    } else if (path === "/work-at-evoca") {
      isActive = workPaths.some(
        (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
      );
    } else {
      isActive = isMainItemActive(path);
    }

    const textColor = isActive ? "text-[#5800EB]" : "text-[#1C1C1C]";

    return `text-[13px] lg:text-[14px] xl:text-[15px] font-bold flex items-center h-full transition-colors duration-200 whitespace-nowrap hover:text-[#5800EB] ${textColor} ${extraClasses}`;
  };

  return (
    <div className="w-full bg-white h-[60px] lg:h-[72px] select-none shadow-sm relative z-40">
      <div className="mx-auto flex items-center justify-between h-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        {/* Логотип + Меню */}
        <div className="flex items-center h-full">
          <Link
            to="/"
            className="flex items-center shrink-0 mr-8 lg:mr-10 xl:mr-14"
          >
            <img
              src={evocabankLogo}
              alt="Evocabank"
              className="h-[36px] lg:h-[44px] object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 xl:gap-8 h-full">
            {currentNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={getLinkClass(item.path, item.display)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Кнопка EvocaONLINE */}
        <div className="shrink-0">
          <button className="bg-[#5800EB] text-white px-5 py-2 lg:px-7 lg:py-2.5 rounded-full font-bold text-[12px] lg:text-[14px] hover:bg-[#4300B8] transition-colors">
            EvocaONLINE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
