import React from "react";
import { Link, useLocation } from "react-router-dom";

// Импортируем логотип
import logo from "../../assets/img/evocabank.png";

const Header2 = () => {
  const location = useLocation();

  // 1. Проверяем текущий раздел по URL
  const isBusiness = location.pathname.startsWith("/business");
  const isAbout =
    location.pathname.startsWith("/about") ||
    location.pathname.includes("general-information");
  const isNews = location.pathname.startsWith("/news");
  const isBlog = location.pathname.startsWith("/blog");
  const isCareer =
    location.pathname.startsWith("/career") ||
    location.pathname.startsWith("/culture");

  // 2. Меню для раздела "Անհատ" (Физические лица)
  const individualMenu = [
    { name: "Վարկեր", path: "/loans" },
    { name: "Քարտեր", path: "/cards" },
    { name: "Ավանդներ", path: "/deposits" },
    { name: "Հաշիվներ", path: "/accounts" },
    { name: "Փոխանցումներ", path: "/transfers" },
    { name: "Արժեթղթեր", path: "/securities" },
    { name: "EvocaSALARY", path: "/evocasalary" },
    { name: "EvocaTOUCH", path: "/evocatouch" },
  ];

  // 3. Меню для раздела "Բիզնես" (Бизнес)
  const businessMenu = [
    { name: "Վարկեր", path: "/business/loans" },
    { name: "Լիզինգ", path: "/business/leasing" },
    { name: "Հաշիվներ", path: "/business/accounts" },
    { name: "Ավանդներ", path: "/business/deposits" },
    { name: "Արժեթղթերի շուկա", path: "/business/securities-market" },
    { name: "Առևտրի ֆինանսավորում", path: "/business/trade-finance" },
    { name: "Դիջիթալ", path: "/business/digital" },
    { name: "Այլ", path: "/business/other" },
  ];

  // 4. Меню для раздела "Մեր մասին" (О нас)
  const aboutMenu = [
    { name: "Evoca-ի մասին", path: "/about/general-information" },
    { name: "Սակագներ", path: "/about/tariffs" },
    { name: "Հաշվետվություններ", path: "/about/reports" },
    { name: "Հայտարարություններ", path: "/about/announcements" },
  ];

  // 5. Меню для раздела "Կարիերա" (Карьера)
  const careerMenu = [
    { name: "Evoca Լայֆ", path: "/career/life" },
    { name: "Աշխատանք և պրակտիկա", path: "/career/jobs" },
  ];

  // 6. Выбираем, какой массив рендерить
  let currentMenu = individualMenu;
  if (isBusiness) {
    currentMenu = businessMenu;
  } else if (isAbout) {
    currentMenu = aboutMenu;
  } else if (isCareer) {
    currentMenu = careerMenu;
  } else if (isNews || isBlog) {
    currentMenu = []; // В разделах Новости и Блог меню отсутствует
  }

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex items-center justify-between w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] py-4 lg:py-5">
        {/* ЛОГОТИП */}
        <Link to="/" className="shrink-0 cursor-pointer mr-8">
          <img src={logo} alt="Evocabank" className="h-16 lg:h-17" />
        </Link>

        {/* НАВИГАЦИЯ */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 w-full">
          {currentMenu.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path === "/loans" && location.pathname === "/");

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  text-[14px] xl:text-[15px] font-bold transition-colors whitespace-nowrap
                  ${
                    isActive
                      ? "text-[#6000ff]"
                      : "text-[#222222] hover:text-[#6000ff]"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* КНОПКА EvocaONLINE */}
        <div className="shrink-0 ml-auto pl-4">
          <button className="bg-[#6000ff] hover:bg-[#5000d6] text-white font-bold text-[13px] lg:text-[14px] px-5 py-2.5 rounded-full transition-colors">
            EvocaONLINE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
