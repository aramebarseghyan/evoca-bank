import React from "react";
import { useLocation, Link } from "react-router-dom";
import { normalizePath, subNavigationGroups } from "../data/navigationData";

const PageHeader = () => {
  const location = useLocation();

  // Եթե գլխավոր էջն է, կամ առանձին քարտի/վարկի/ավանդի դետալային էջն է, չենք ցուցադրում
  if (
    location.pathname === "/" ||
    location.pathname === "/hy" ||
    location.pathname === "/ru" ||
    location.pathname === "/en" ||
    (location.pathname.startsWith("/cards/") &&
      location.pathname.split("/").length > 2) ||
    (location.pathname.startsWith("/loans/") &&
      location.pathname.split("/").length > 2) ||
    (location.pathname.startsWith("/deposits/") &&
      location.pathname.split("/").length > 2)
  ) {
    return null;
  }

  const cleanPath = normalizePath(location.pathname);

  const getPageDetails = (path) => {
    // Особые данные для страницы пенсионных карт (хлебные крошки и заголовок)
    if (path === "/pension-cards") {
      return {
        section: "Անհատ",
        category: "Քարտեր",
        title: "Սոցիալական ապահովության վճարային քարտեր",
      };
    }

    const group = subNavigationGroups.find((g) =>
      g.paths.some((p) => path === p || path.startsWith(`${p}/`)),
    );

    if (group) {
      let section = "Անհատ";
      let category = "";

      if (group.mainPath === "/about" || group.paths.includes("/about")) {
        section = "Մեր մասին";
        category = "Մեր մասին";
      } else if (
        group.mainPath === "/tariffs" ||
        group.paths.some((p) => p.startsWith("/tariffs"))
      ) {
        section = "Մեր մասին";
        category = "Սակագներ";
      } else if (group.mainPath === "/auditors-opinion") {
        section = "Մեր մասին";
        category = "Հաշվետվություններ";
      } else if (
        group.mainPath === "/culture" ||
        group.paths.includes("/culture")
      ) {
        section = "Կարիերա";
        category = "Evoca Լայֆ";
      } else if (
        group.mainPath === "/work-at-evoca" ||
        group.paths.includes("/work-at-evoca")
      ) {
        section = "Կարիերա";
        category = "Աշխատանք և պրակտիկա";
      } else if (group.isBusiness) {
        section = "Բիզնես";
        switch (group.mainPath) {
          case "/business-loans":
            category = "Վարկեր";
            break;
          case "/leasing-evoca":
            category = "Լիզինգ";
            break;
          case "/business-account-opening-and-services":
            category = "Հաշիվներ";
            break;
          case "/business-classical-deposit":
            category = "Ավանդներ";
            break;
          case "/business-investment-services":
            category = "Արժեթղթերի շուկա";
            break;
          case "/guarantee":
            category = "Առևտրի ֆինանսավորում";
            break;
          case "/v-pos-terminal":
            category = "Այլ";
            break;
          case "/individual-safe-deposit-boxes":
            category = "Դեպոզիտար";
            break;
          default:
            category = group.items[0]?.name || "Բիզնես";
        }
      } else {
        section = "Անհատ";
        switch (group.mainPath) {
          case "/loans":
            category = "Վարկեր";
            break;
          case "/cards":
            category = "Քարտեր";
            break;
          case "/deposits":
            category = "Ավանդներ";
            break;
          case "/accounts":
            category = "Հաշիվներ";
            break;
          case "/money-transfers":
            category = "Փոխանցումներ";
            break;
          case "/investment-services":
            category = "Արժեթղթեր";
            break;
          default:
            category = group.items[0]?.name || "Անհատ";
        }
      }

      const activeItem = group.items.find(
        (item) => path === item.path || path.startsWith(`${item.path}/`),
      );
      const title = activeItem ? activeItem.name : category;

      return { section, category, title };
    }

    return { section: "Անհատ", category: "Էջ", title: "Էջ" };
  };

  const { section, category, title } = getPageDetails(cleanPath);

  // Список путей, для которых нужно скрыть h1, но оставить хлебные крошки
  const hideH1Paths = [
    "/pension-cards",
    "/account-opening-service",
    "/unallocated-metal-accounts",
    "/remote-service-for-non-resident-clients",
    "/personal-boxes-safe",
  ];
  const shouldHideH1 = hideH1Paths.includes(cleanPath);

  const chevronIcon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400 shrink-0"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-2">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-sans overflow-x-auto whitespace-nowrap scrollbar-none 2xl:ml-[-30px]">
        <Link
          to="/"
          className="hover:text-[#5D00E0] transition-colors flex items-center shrink-0"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
        {chevronIcon}
        <span className="text-gray-500 shrink-0">{section}</span>
        {chevronIcon}
        <span className="text-gray-500 shrink-0">{category}</span>
        {chevronIcon}
        <span className="text-gray-800 font-medium shrink-0">{title}</span>
      </div>

      {!shouldHideH1 && (
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          {title}
        </h1>
      )}
    </div>
  );
};

export default PageHeader;
