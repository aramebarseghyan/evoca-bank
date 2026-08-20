import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { subNavigationGroups, normalizePath } from "../../data/navigationData";
import { useAuthStore } from "../../store/authStore";

const Header1 = ({ onOpenMenu }) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const { user, openAuthModal } = useAuthStore();

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
    { name: "Բլոգ", path: "/blog", xlOnly: true, prefixes: ["/blog"] },
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

  if (cleanPath === "/evocaLogin" || cleanPath.includes("evocalogin")) {
    return null;
  }
  return (
    <div className="w-full border-b border-gray-200 bg-white shadow-sm z-[100] relative">
      <div className="mx-auto flex items-center justify-between w-full px-4 sm:px-6 md:px-5 lg:px-7 xl:px-10 2xl:px-12 md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        {/* LEFT SECTION: Tabs */}
        <div className="hidden lg:flex items-center lg:gap-5 xl:gap-6 2xl:gap-8">
          {tabs.map((tab) => {
            const isActive = tab.prefixes.some((prefix) => {
              if (cleanPath === prefix || cleanPath.startsWith(`${prefix}/`))
                return true;
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

            const commonClassName = `
              ${tab.xlOnly ? "hidden xl:block" : "block"}
              cursor-pointer py-4 lg:py-5 border-b-[3px] transition-all duration-300 whitespace-nowrap
              lg:text-[13px] xl:text-[14px] 2xl:text-[15px] -mb-[1px]
              ${isActive ? "text-[#6000ff] font-bold border-[#6000ff]" : "text-gray-600 font-medium border-transparent hover:text-[#6000ff]"}
            `;

            if (tab.path === "/instant-payments") {
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

        {/* RIGHT SECTION: Links and Icons */}
        <div className="flex items-center shrink-0 ml-auto gap-5 lg:gap-7 2xl:gap-9 py-4 lg:py-5">
          {/* Dropdown Menus */}
          <div className="flex items-center gap-5 lg:gap-6" ref={dropdownRef}>
            {/* 1. Առցանց հայտեր */}
            <div className="relative hidden lg:block">
              <div
                className="flex items-center gap-1.5 cursor-pointer group"
                onClick={() => toggleDropdown("applications")}
              >
                <p className="text-[13px] xl:text-[14px] font-bold text-[#6000ff] whitespace-nowrap transition-colors">
                  Առցանց հայտեր
                </p>
                <svg
                  className={`w-4 h-4 stroke-[#6000ff] transition-transform duration-300 ${activeDropdown === "applications" ? "rotate-180" : "group-hover:translate-y-0.5"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div
                className={`absolute top-full right-0 mt-4 bg-white shadow-xl rounded-2xl border border-gray-100 min-w-[220px] z-50 transition-all duration-300 origin-top flex flex-col py-2 overflow-hidden ${activeDropdown === "applications" ? "opacity-100 scale-100 pointer-events-auto translate-y-0" : "opacity-0 scale-95 pointer-events-none -translate-y-2"}`}
              >
                {[
                  "ՓՄՁ վարկավորում",
                  "Visa Infinite",
                  "MasterCard Gold",
                  "Visa Gold",
                ].map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="px-5 py-3 text-[14px] text-right text-gray-700 font-medium hover:text-[#6000ff] hover:bg-[#6000ff]/5 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. Հետադարձ կապ */}
            <div className="relative hidden md:block">
              <div
                className="flex items-center gap-1.5 cursor-pointer group"
                onClick={() => toggleDropdown("contact")}
              >
                <p className="text-[13px] xl:text-[14px] font-bold text-[#6000ff] whitespace-nowrap transition-colors">
                  Հետադարձ կապ
                </p>
                <svg
                  className={`w-4 h-4 stroke-[#6000ff] transition-transform duration-300 ${activeDropdown === "contact" ? "rotate-180" : "group-hover:translate-y-0.5"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div
                className={`absolute top-full right-0 mt-4 bg-white shadow-xl rounded-2xl border border-gray-100 min-w-[200px] z-50 transition-all duration-300 origin-top flex flex-col py-2 overflow-hidden ${activeDropdown === "contact" ? "opacity-100 scale-100 pointer-events-auto translate-y-0" : "opacity-0 scale-95 pointer-events-none -translate-y-2"}`}
              >
                {[
                  { text: "+374 10 605555", href: "tel:+37410605555" },
                  { text: "+374 98 205555", href: "tel:+37498205555" },
                  { text: "+374 99 605555", href: "tel:+37499605555" },
                  { text: "8444", href: "tel:8444" },
                ].map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="px-5 py-2.5 text-[14px] text-right text-gray-700 font-medium hover:text-[#6000ff] hover:bg-[#6000ff]/5 transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
                <div className="h-px bg-gray-100 my-1 mx-4"></div>
                <button className="px-5 py-2.5 text-[14px] text-right text-gray-700 font-bold hover:text-[#6000ff] hover:bg-[#6000ff]/5 transition-colors">
                  Պատվիրել զանգ
                </button>
              </div>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4 lg:gap-5 text-gray-700">
            {/* Location / Live Map */}
            <Link to="/live-map" title="Live Map">
              <svg
                className="w-5 h-5 cursor-pointer hover:text-[#6000ff] transition-colors"
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
            </Link>

            {/* Help */}
            <svg
              className="w-5 h-5 cursor-pointer hover:text-[#6000ff] transition-colors hidden sm:block"
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

            {/* Profile / Login */}
            <div className="relative flex items-center justify-center">
              {user ? (
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  title="Պրոֆիլ"
                  referrerPolicy="no-referrer"
                  onClick={openAuthModal}
                  className="w-6 h-6 rounded-full cursor-pointer border border-gray-200 hover:border-[#6000ff] shadow-sm transition-all object-cover"
                />
              ) : (
                <svg
                  onClick={openAuthModal}
                  title="Մուտք"
                  className="w-5 h-5 cursor-pointer hover:text-[#6000ff] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              )}
            </div>

            {/* Search */}
            <svg
              className="w-5 h-5 cursor-pointer hover:text-[#6000ff] transition-colors"
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

            {/* Burger Menu */}
            <svg
              onClick={onOpenMenu}
              className="w-6 h-6 cursor-pointer hover:text-[#6000ff] transition-colors lg:hidden"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
