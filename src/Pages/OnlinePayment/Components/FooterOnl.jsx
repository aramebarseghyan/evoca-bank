import React from "react";

const FooterOnl = () => {
  return (
    <footer className="w-full font-sans flex flex-col">
      {}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-6">
          {}
          <div className="flex flex-col max-w-[250px]">
            {}
            <img
              src="https://resource.evoca.am/images/evoca_logo.svg"
              alt="Evocabank Logo"
              className="h-8 mb-4 object-left object-contain"
              onError={(e) => {
                
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            {}
            <div className="hidden mb-4 text-[28px] font-bold tracking-tight">
              <span className="text-[#696969]">evoca</span>
              <span className="text-[#a5a5a5] font-light">BANK</span>
            </div>

            <p className="text-[#333333] text-[14px] leading-[1.4] mb-3">
              Բանկը վերահսկվում է ՀՀ
              <br />
              ԿԲ-ի կողմից
            </p>
            <p className="text-[#888888] text-[12px]">
              Copyright © 1990-2026 Evocabank
            </p>
          </div>

          {}
          <div className="flex flex-col pt-2">
            <p className="text-[#555555] text-[15px] leading-relaxed">
              ք. Երևան, 0010,
              <br />
              Հանրապետության 44/2
            </p>
          </div>

          {}
          <div className="flex flex-col pt-2 gap-4">
            <a
              href="mailto:hello@evoca.am"
              className="text-[#6000ff] text-[16px] hover:underline"
            >
              hello@evoca.am
            </a>
            <a
              href="tel:+37410605555"
              className="text-[#6000ff] text-[16px] hover:underline"
            >
              +374 10 605555
            </a>
          </div>

          {}
          <div className="flex-shrink-0">
            <div className="p-2 border border-gray-100 rounded-2xl shadow-sm inline-block">
              {}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://evoca.am&color=6000ff"
                alt="QR Code"
                className="w-[100px] h-[100px] object-cover"
              />
            </div>
          </div>

          {}
          <div className="flex flex-col gap-5 pt-2">
            {}
            <div className="flex items-center gap-2">
              {[
                
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>,
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>,
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>,
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>,
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.192 0 7.451 2.986 7.451 6.969 0 4.168-2.626 7.53-6.275 7.53-1.225 0-2.378-.636-2.772-1.39l-.754 2.872c-.274 1.054-1.018 2.372-1.516 3.176 1.157.352 2.385.541 3.655.541 6.621 0 11.988-5.368 11.988-11.988 0-6.62-5.367-11.987-11.988-11.987z" />
                </svg>,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-[32px] h-[32px] bg-[#9e9e9e] text-white rounded-full flex items-center justify-center hover:bg-[#6000ff] transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>

            {}
            <div className="flex flex-col gap-2 w-max">
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10 bg-black rounded-[6px]"
                />
              </a>
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="bg-[#f0f1f3] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {}
          <div className="lg:w-3/4">
            <p className="text-[#888888] text-[11px] leading-[1.6] text-justify">
              Հարգելի' այցելու, կայքի որևէ տեղեկատվության վերաբերյալ տարբեր
              լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն
              լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք
              առաջնորդվել հայերեն տարբերակով: 'Էվոկաբանկ' ՓԲԸ-ն
              պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ
              անձանց ինտերնետային կայքերի բովանդակության ստուգության և
              արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ
              անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման
              հնարավոր հետևանքների համար:
            </p>
          </div>

          {}
          <div className="lg:w-1/4 flex flex-wrap justify-end items-center gap-3 grayscale opacity-60">
            <img
              src="https://payments.evoca.am/assets/images/cb.png"
              alt="Central Bank"
              className="h-8 object-contain mix-blend-multiply"
            />
            <img
              src="https://payments.evoca.am/assets/images/financial_systen_mediator.png"
              alt="Financial System Mediator"
              className="h-8 object-contain mix-blend-multiply"
            />
            <img
              src="https://payments.evoca.am/assets/images/abc_finance.png"
              alt="ABC Finance"
              className="h-8 object-contain mix-blend-multiply"
            />
            <img
              src="https://payments.evoca.am/assets/images/deposit_guarantee.png"
              alt="Deposit Guarantee"
              className="h-8 object-contain mix-blend-multiply"
            />
            <img
              src="https://payments.evoca.am/assets/images/arca.png"
              alt="ArCa"
              className="h-7 ml-1 object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOnl;
