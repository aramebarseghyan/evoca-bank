import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { subNavigationGroups, normalizePath } from "../../data/navigationData";

const Header1 = ({ onOpenMenu }) => {
  const location = useLocation();

  // Состояние для управления выпадающими меню (может быть 'applications', 'contact' или null)
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menuName) => {
    // Если кликаем по уже открытому меню — закрываем его, иначе открываем новое
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const tabs = [
    {
      name: "Անհատ",
      path: "/loans",
      xlOnly: false,
      prefixes: [
        "/loans",
        "/cards",
        "/deposits",
        "/accounts",
        "/money-transfers",
        "/investment-services",
        "/evocasalary",
        "/evocatouch",
      ],
    },
    {
      name: "Բիզնես",
      path: "/business-loans",
      xlOnly: false,
      prefixes: [
        "/business",
        "/business-loans",
        "/leasing-evoca",
        "/business-account-opening-and-services",
        "/business-classical-deposit",
        "/business-investment-services",
        "/guarantee",
        "/v-pos-terminal",
        "/individual-safe-deposit-boxes",
      ],
    },
    {
      name: "Ակնթարթային վճարումներ",
      path: "/instant-payments",
      xlOnly: false,
      prefixes: ["/instant-payments"],
    },
    {
      name: "Մեր մասին",
      path: "/about",
      xlOnly: false,
      prefixes: [
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
      ],
    },
    {
      name: "Նորություններ",
      path: "/news",
      xlOnly: false,
      prefixes: ["/news"],
    },
    {
      name: "Բլոգ",
      path: "/blog",
      xlOnly: true,
      prefixes: ["/blog"],
    },
    {
      name: "Կարիերա",
      path: "/culture",
      xlOnly: true,
      prefixes: [
        "/culture",
        "/advantages",
        "/faq",
        "/how-to-apply",
        "/evoca-life",
        "/work-at-evoca",
        "/internship",
        "/evocabridge",
        "/career",
      ],
    },
  ];

  const cleanPath = normalizePath
    ? normalizePath(location.pathname)
    : location.pathname;

  return (
    <div className="w-full border-b border-gray-100 bg-white 2xl:mt-[10px]">
      <div className="mx-auto flex items-center justify-between w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        {/* ЛЕВАЯ ЧАСТЬ: Вкладки */}
        <div className="hidden lg:flex items-center lg:gap-3 xl:gap-5 2xl:gap-6">
          {tabs.map((tab) => {
            const isActive = tab.prefixes.some((prefix) => {
              if (cleanPath === prefix || cleanPath.startsWith(`${prefix}/`)) {
                return true;
              }
              if (subNavigationGroups) {
                const group = subNavigationGroups.find(
                  (g) => g.mainPath === prefix || g.paths.includes(prefix),
                );
                if (group && group.paths) {
                  return group.paths.some(
                    (p) => cleanPath === p || cleanPath.startsWith(`${p}/`),
                  );
                }
              }
              return false;
            });

            const isInstantPayment = tab.path === "/instant-payments";

            const commonClassName = `
              ${tab.xlOnly ? "hidden xl:block" : "block"}
              cursor-pointer pt-3 pb-3 lg:pt-3 lg:pb-4 2xl:pt-4 2xl:pb-5 
              border-t-[3px] transition-all duration-200 -mt-px whitespace-nowrap
              lg:text-[12px] xl:text-[13px] 2xl:text-[14px]
              ${
                isActive
                  ? "text-[#6000ff] font-bold border-[#6000ff]"
                  : "text-gray-700 font-medium border-transparent hover:text-[#6000ff]"
              }
            `;

            if (isInstantPayment) {
              return (
                <a
                  key={tab.name}
                  href={tab.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClassName}
                >
                  {tab.name}
                </a>
              );
            }

            return (
              <Link key={tab.name} to={tab.path} className={commonClassName}>
                {tab.name}
              </Link>
            );
          })}
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Ссылки и Иконки */}
        <div className="flex items-center shrink-0 ml-auto gap-4 md:gap-5 lg:gap-6 2xl:gap-8 pt-3 pb-3 lg:pt-3 lg:pb-4 2xl:pt-4 2xl:pb-5">
          {/* Контейнер с рефом для отслеживания клика снаружи */}
          <div
            className="flex items-center gap-4 lg:gap-5 2xl:gap-6"
            ref={dropdownRef}
          >
            {/* 1. АКТИВНОЕ МЕНЮ: Առցանց հայտեր (Онлайн заявки) */}
            <div className="relative hidden lg:block">
              <div
                className="flex items-center gap-1.5 cursor-pointer group py-2"
                onClick={() => toggleDropdown("applications")}
              >
                <p className="text-[13px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-bold text-[#6000ff] whitespace-nowrap">
                  Առցանց հայտեր
                </p>
                <svg
                  className={`w-[12px] h-[12px] stroke-[#6000ff] transition-transform duration-300 ${
                    activeDropdown === "applications"
                      ? "rotate-180"
                      : "group-hover:translate-y-0.5"
                  }`}
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

              {/* Выпадающий список (Шторка) */}
              <div
                className={`absolute top-full right-[-10px] mt-2 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-b-xl border border-gray-50 min-w-[200px] z-50 transition-all duration-300 origin-top flex flex-col py-3 overflow-hidden ${
                  activeDropdown === "applications"
                    ? "scale-y-100 opacity-100 pointer-events-auto"
                    : "scale-y-0 opacity-0 pointer-events-none"
                }`}
              >
                <Link
                  to="#"
                  className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors"
                >
                  ՓՄՁ վարկավորում
                </Link>
                <Link
                  to="#"
                  className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors"
                >
                  Visa Infinite
                </Link>
                <Link
                  to="#"
                  className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors"
                >
                  MasterCard Gold
                </Link>
                <Link
                  to="#"
                  className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors"
                >
                  Visa Gold
                </Link>
              </div>
            </div>

            {/* 2. АКТИВНОЕ МЕНЮ: Հետադարձ կապ (Обратная связь) */}
            <div className="relative">
              <div
                className="flex items-center gap-1.5 cursor-pointer group py-2"
                onClick={() => toggleDropdown("contact")}
              >
                <p className="text-[13px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-bold text-[#6000ff] whitespace-nowrap">
                  Հետադարձ կապ
                </p>
                <svg
                  className={`w-[12px] h-[12px] stroke-[#6000ff] transition-transform duration-300 ${
                    activeDropdown === "contact"
                      ? "rotate-180"
                      : "group-hover:translate-y-0.5"
                  }`}
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

              {/* Выпадающий список (Шторка) */}
              <div
                className={`absolute top-full right-[-10px] mt-2 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-b-xl border border-gray-50 min-w-[200px] z-50 transition-all duration-300 origin-top flex flex-col py-3 overflow-hidden ${
                  activeDropdown === "contact"
                    ? "scale-y-100 opacity-100 pointer-events-auto"
                    : "scale-y-0 opacity-0 pointer-events-none"
                }`}
              >
                <a
                  href="tel:+37410605555"
                  className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors"
                >
                  +374 10 605555
                </a>
                <a
                  href="tel:+37498205555"
                  className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors"
                >
                  +374 98 205555
                </a>
                <a
                  href="tel:+37499605555"
                  className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors"
                >
                  +374 99 605555
                </a>
                <a
                  href="tel:8444"
                  className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors"
                >
                  8444
                </a>
                <button className="px-5 py-2.5 text-[14px] text-right text-gray-800 font-medium hover:text-[#6000ff] hover:bg-gray-50 transition-colors">
                  Պատվիրել զանգ
                </button>
              </div>
            </div>
          </div>

          {/* Аккуратные темные контурные иконки */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 2xl:gap-6 text-[#222222]">
            {/* 1. Локация */}
            <svg
              className="w-[19px] h-[19px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            {/* 2. Помощь */}
            <svg
              className="w-[19px] h-[19px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17h.01"
              />
            </svg>

            {/* 3. Глобус */}
            <svg
              className="w-[19px] h-[19px] cursor-pointer hover:text-[#6000ff] transition-colors"
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

            {/* 4. Поиск */}
            <svg
              className="w-[19px] h-[19px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            {/* 5. Бургер меню */}
            <svg
              onClick={onOpenMenu}
              className="w-[19px] h-[19px] cursor-pointer hover:text-[#6000ff] transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
