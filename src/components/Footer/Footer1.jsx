import React from "react";
import { useLocation } from "react-router-dom";
import evocaLogo from "../../assets/img/evocaLogo.png";

// --- ИКОՆԿԻ СОЦСЕТЕЙ (SVG) ---
const FacebookIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#b3b3b3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.35C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 0.593 23.407 0 22.675 0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#b3b3b3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const PinterestIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#b3b3b3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.397.165-1.485-.69-2.413-2.855-2.413-4.593 0-3.743 2.719-7.182 7.842-7.182 4.122 0 7.323 2.938 7.323 6.87 0 4.101-2.589 7.404-6.184 7.404-1.207 0-2.343-.627-2.734-1.364l-.745 2.839c-.27 1.033-1.002 2.328-1.493 3.119C9.57 23.81 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#b3b3b3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#b3b3b3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Footer1 = () => {
  const location = useLocation();
  const cleanPath = location.pathname ? location.pathname.toLowerCase() : "";

  // Հեռացնում ենք ֆուտերը /evocaLogin էջերի դեպքում
  if (cleanPath === "/evocalogin" || cleanPath.includes("evocalogin")) {
    return null;
  }

  return (
    <footer className="bg-white py-10 sm:py-12 2xl:py-20 border-t border-[#eee]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 xl:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-8 2xl:gap-12 items-start">
          {/* 1. Левый блок: Логотип, адрес, копирайт */}
          <div className="flex flex-col gap-5 sm:gap-6 2xl:gap-10">
            <div className="flex items-center">
              <img
                src={evocaLogo}
                alt="Evocabank Logo"
                className="h-[36px] xl:h-[65px] 2xl:h-[75px] w-auto object-contain"
              />
            </div>

            <div className="flex flex-col gap-3.5 sm:gap-4 2xl:gap-6">
              <p className="text-[#333] text-[13px] sm:text-[12.5px] xl:text-[13px] 2xl:text-[14px] font-normal leading-relaxed m-0">
                ք. Երևան, 0010, <br /> Հանրապետության 44/2
              </p>
              <p className="text-[#555] text-[13px] sm:text-[12.5px] xl:text-[13px] 2xl:text-[14px] leading-relaxed m-0">
                Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական
                բանկի կողմից
              </p>
              <p className="text-[#999] text-[11px] sm:text-[10.5px] xl:text-[11px] 2xl:text-[12px] m-0 mt-1 uppercase tracking-wide">
                1990 - 2026, © ԲՈԼՈՐ <br />
                ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </p>
            </div>
          </div>

          {/* 2. Второй блок: Բանկի մասին */}
          <div className="hidden xl:flex flex-col gap-3 sm:gap-4 2xl:gap-6">
            <h3 className="text-[#111] font-bold text-[15px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px]">
              Բանկի մասին
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-3.5 2xl:gap-5 m-0 p-0 list-none">
              <li>
                <a
                  href="/about"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Մեր մասին
                </a>
              </li>
              <li>
                <a
                  href="/management"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Ղեկավարություն
                </a>
              </li>
              <li>
                <a
                  href="/shareholders"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Բաժնետերեր
                </a>
              </li>
              <li>
                <a
                  href="/auditors-opinion"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Հաշվետվություններ
                </a>
              </li>
              <li>
                <a
                  href="/legal-acts"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Իրավական ակտեր
                </a>
              </li>
              <li>
                <a
                  href="/tariffs/loans-to-individuals"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Սակագներ
                </a>
              </li>
              <li>
                <a
                  href="/alienated-property"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Օտարվող գույք
                </a>
              </li>
              <li>
                <a
                  href="/construction-companies"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Կառուցապատողներ
                </a>
              </li>
              <li>
                <a
                  href="/partner-car-dealerships"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Գործընկեր ավտոսրահներ
                </a>
              </li>
              <li>
                <a
                  href="/tariffs/archive"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Սակագների արխիվ
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Третий блок: Օգտակար հղումներ */}
          <div className="hidden xl:flex flex-col gap-3 sm:gap-4 2xl:gap-6">
            <h3 className="text-[#111] font-bold text-[15px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px]">
              Օգտակար հղումներ
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-3.5 2xl:gap-5 m-0 p-0 list-none">
              <li>
                <a
                  href="/customer-rights"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors leading-relaxed block"
                >
                  Հաճախորդի իրավունքները <br />
                  (Բողոքների ներկայացման կանոններ)
                </a>
              </li>
              <li>
                <a
                  href="/customer-residency-criteria"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors leading-relaxed block"
                >
                  Հաճախորդի ռեզիդենտության <br />
                  չափանիշներ
                </a>
              </li>
              <li>
                <a
                  href="/regulation"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Կարգավորում
                </a>
              </li>
              <li>
                <a
                  href="/customer-rights#privacy"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Գաղտնիության քաղաքականություն
                </a>
              </li>
              <li>
                <a
                  href="/financial-mediator"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Ֆին. հաշտարար
                </a>
              </li>
              <li>
                <a
                  href="/financial-crime-prevention"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors leading-relaxed block"
                >
                  Ֆինանսական հանցագործությունների <br />
                  կանխարգելում
                </a>
              </li>
              <li>
                <a
                  href="/Links-for-the-Banks-Cardholders"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors leading-relaxed block"
                >
                  Հղումներ Բանկի քարտապանների <br />
                  համար
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Четвертый блок - Այլ հղումներ */}
          <div className="hidden xl:flex flex-col gap-3 sm:gap-4 2xl:gap-6">
            <h3 className="text-[#111] font-bold text-[15px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px]">
              Այլ հղումներ
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-3.5 2xl:gap-5 m-0 p-0 list-none">
              <li>
                <a
                  href="/digital-services-evocaonline-online-banking"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  EvocaONLINE
                </a>
              </li>
              <li>
                <a
                  href="/personal-safe-boxes"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Պահատուփեր
                </a>
              </li>
              <li>
                <a
                  href="/frequently-asked-questions/faq-bonds"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Հաճախ տրվող հարցեր
                </a>
              </li>
              <li>
                <a
                  href="/announcements"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Հայտարարություններ
                </a>
              </li>
              <li>
                <a
                  href="/evoca-dibrary"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Dlibrary
                </a>
              </li>
              <li>
                <a
                  href="/booklets"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Բուլետիններ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Հետադարձ կապ
                </a>
              </li>
              <li>
                <a
                  href="/live-map"
                  className="text-[#444] text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:text-[#7100FF] transition-colors block"
                >
                  Կայքի քարտեզ
                </a>
              </li>
            </ul>
          </div>

          {/* 5. Пятый блок - Соцсети, маркеты, контакты */}
          <div className="flex flex-col gap-6 sm:gap-8 2xl:gap-10 xl:mt-[2px]">
            {/* Иконки соцсетей */}
            <div className="flex items-center gap-4 sm:gap-3.5 2xl:gap-5">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="hover:opacity-85 transition-opacity"
              >
                <FacebookIcon />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="hover:opacity-85 transition-opacity"
              >
                <InstagramIcon />
              </a>
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="hover:opacity-85 transition-opacity"
              >
                <PinterestIcon />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="hover:opacity-85 transition-opacity"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="hover:opacity-85 transition-opacity"
              >
                <LinkedInIcon />
              </a>
            </div>

            {/* Бейджи приложений */}
            <div className="flex items-center gap-3 sm:gap-2.5 2xl:gap-3.5">
              <a
                href="#appstore"
                className="block hover:opacity-95 transition-opacity"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-[34px] sm:h-[32px] 2xl:h-[36px] w-auto"
                />
              </a>
              <a
                href="#googleplay"
                className="block hover:opacity-95 transition-opacity"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-[34px] sm:h-[32px] 2xl:h-[36px] w-auto"
                />
              </a>
            </div>

            {/* Ссылки и контакты */}
            <div className="flex flex-col gap-3.5 sm:gap-4 2xl:gap-6">
              <a
                href="#branches"
                className="text-[#7100FF] font-medium text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:underline leading-relaxed"
              >
                Բանկի հասցեները և աշխատաժամերը
              </a>
              <a
                href="#contact"
                className="text-[#7100FF] font-medium text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:underline"
              >
                Կապ մեզ հետ
              </a>
              <a
                href="tel:+37410605555"
                className="text-[#7100FF] font-medium text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:underline mt-1 2xl:mt-2"
              >
                +374 10 605555
              </a>
              <a
                href="tel:8444"
                className="text-[#7100FF] font-medium text-[13.5px] sm:text-[13px] 2xl:text-[14px] hover:underline"
              >
                8444
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
