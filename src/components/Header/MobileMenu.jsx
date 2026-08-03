import React, { useEffect, useState } from "react";
import evocabankLogo from "../../assets/img/evocabank.png";
import leftPhoto from "../../assets/img/left-photo.jpg";

// Ֆոնային պատկերները
import onlineBankingShape2 from "../../assets/img/online-banking__shape2.png";
import evocaBestShape2 from "../../assets/img/evoca-best-shape2.png";
import logoV from "../../assets/img/logo.png";

const menuData = {
  title: "Գլխավոր",
  links: [
    {
      name: "Անհատ",
      hasArrow: true,
      children: [
        {
          name: "Վարկեր",
          hasArrow: true,
          children: [
            { name: "Վարկեր", hasArrow: false },
            { name: "Վարկային պատմություն և սքոր", hasArrow: false },
            { name: "Կարևոր տեղեկատվություն", hasArrow: false },
          ],
        },
        {
          name: "Քարտեր",
          hasArrow: true,
          children: [
            { name: "Քարտեր", hasArrow: false },
            { name: "Քարտերի տրամադրում և սպասարկում", hasArrow: false },
            {
              name: "Սոցիալական ապահովության վճարային քարտեր",
              hasArrow: false,
            },
            { name: "Evoca Benefits", hasArrow: false },
          ],
        },
        {
          name: "Ավանդներ",
          hasArrow: true,
          children: [
            { name: "Ավանդներ", hasArrow: false },
            { name: "Կարևոր տեղեկատվություն", hasArrow: false },
          ],
        },
        {
          name: "Հաշիվներ",
          hasArrow: true,
          children: [
            { name: "Հաշիվների բացում և սպասարկում", hasArrow: false },
            { name: "Առարկայազուրկ մետաղական հաշիվներ", hasArrow: false },
            {
              name: "Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում",
              hasArrow: false,
            },
            { name: "Պահատուփեր", hasArrow: false },
          ],
        },
        { name: "Փոխանցումներ", hasArrow: true, children: [] },
        { name: "Արժեթղթեր", hasArrow: true, children: [] },
        { name: "EvocaSALARY", hasArrow: false },
        { name: "EvocaTOUCH", hasArrow: false },
        { name: "Evoca codes", hasArrow: false },
      ],
    },
    {
      name: "Բիզնես",
      hasArrow: true,
      children: [
        {
          name: "Վարկեր",
          hasArrow: true,
          children: [{ name: "Բիզնես վարկեր", hasArrow: false }],
        },
        {
          name: "Լիզինգ",
          hasArrow: true,
          children: [{ name: "Ֆինանսական լիզինգ", hasArrow: false }],
        },
        {
          name: "Հաշիվներ",
          hasArrow: true,
          children: [
            { name: "Հաշիվների բացում և սպասարկում", hasArrow: false },
            { name: "Հաշվարկային-դրամարկղային սպասարկում", hasArrow: false },
          ],
        },
        {
          name: "Ավանդներ",
          hasArrow: true,
          children: [{ name: "Դասական ավանդ", hasArrow: false }],
        },
        {
          name: "Արժեթղթերի շուկա",
          hasArrow: true,
          children: [
            { name: "Ներդրումային ծառայություններ", hasArrow: false },
            { name: "Պարտատոմսեր", hasArrow: false },
            { name: "ՀԿԴ ծառայություններ", hasArrow: false },
            { name: "Ռեպո/Հակադարձ ռեպո գործարքներ", hasArrow: false },
            { name: "EvocaINVEST", hasArrow: false },
          ],
        },
        {
          name: "Առևտրի ֆինանսավորում",
          hasArrow: true,
          children: [
            { name: "Երաշխիք", hasArrow: false },
            { name: "Ֆակտորինգային ֆինանսավորում", hasArrow: false },
            { name: "Ակրեդիտիվ", hasArrow: false },
            { name: "Ինկասո", hasArrow: false },
          ],
        },
        {
          name: "Դիջիթալ",
          hasArrow: true,
          children: [
            { name: "V-POS Տերմինալ", hasArrow: false },
            { name: "POS Տերմինալ", hasArrow: false },
            { name: "Սակագներ", hasArrow: false },
            { name: "Տերմինալի տեղադրման հայտ", hasArrow: false },
            { name: "Evoca Mobile POS՝ mPOS", hasArrow: false },
          ],
        },
        {
          name: "Այլ",
          hasArrow: true,
          children: [
            { name: "Պահատուփեր", hasArrow: false },
            { name: "Փոխանցումներ", hasArrow: false },
          ],
        },
      ],
    },
    { name: "Ակնթարթային վճարումներ", hasArrow: false },
    {
      name: "Մեր մասին",
      hasArrow: true,
      children: [
        {
          name: "Evoca-ի մասին",
          hasArrow: true,
          children: [
            { name: "Ընդհանուր", hasArrow: false },
            { name: "Կառուցվածք", hasArrow: false },
            { name: "Բաժնետերեր", hasArrow: false },
            { name: "Ղեկավարություն", hasArrow: false },
            { name: "Գործընկերներ", hasArrow: false },
            { name: "Մրցանակներ", hasArrow: false },
            { name: "Կարծիքներ", hasArrow: false },
            { name: "CSR", hasArrow: false },
          ],
        },
        {
          name: "Սակագներ",
          hasArrow: true,
          children: [
            { name: "Վարկեր ֆիզիկական անձանց", hasArrow: false },
            { name: "Վարկեր իրավաբանական անձանց", hasArrow: false },
            { name: "Միջնորդավճարների սակագները", hasArrow: false },
            { name: "Ավանդների սակագներ", hasArrow: false },
            { name: "Արխիվ", hasArrow: false },
          ],
        },
        {
          name: "Հաշվետվություններ",
          hasArrow: true,
          children: [
            { name: "Աուդիտորական եզրակացություն", hasArrow: false },
            { name: "Ֆինանսական հաշվետվություններ", hasArrow: false },
            { name: "Ներդրողների համար", hasArrow: false },
            { name: "Կիսամյակային հաշվետվություն", hasArrow: false },
            { name: "Տարեկան հաշվետվություն", hasArrow: false },
          ],
        },
        { name: "Հայտարարություններ", hasArrow: false },
      ],
    },
    { name: "Նորություններ", hasArrow: false },
    { name: "Բլոգ", hasArrow: false },
    {
      name: "Կարիերա",
      hasArrow: true,
      children: [
        {
          name: "Evoca Լայֆ",
          hasArrow: true,
          children: [
            { name: "Մշակույթ", hasArrow: false },
            { name: "Առավելություններ", hasArrow: false },
            { name: "Հաճախ տրվող հարցեր", hasArrow: false },
            {
              name: "Ինչպես ընդունվել աշխատանքի Evocabank-ում",
              hasArrow: false,
            },
          ],
        },
        {
          name: "Աշխատանք և պրակտիկա",
          hasArrow: true,
          children: [
            { name: "Աշխատանք Evoca-ում", hasArrow: false },
            { name: "Ուսումնական պրակտիկա", hasArrow: false },
            { name: "EvocaBRIDGE", hasArrow: false },
          ],
        },
      ],
    },
  ],
  bottomLinks: [
    {
      name: "Բանկի մասին",
      hasArrow: true,
      children: [
        { name: "Մեր մասին", hasArrow: false },
        { name: "Ղեկավարություն", hasArrow: false },
        { name: "Բաժնետերեր", hasArrow: false },
        { name: "Հաշվետվություններ", hasArrow: false },
        { name: "Իրավական ակտեր", hasArrow: false },
        { name: "Սակագներ", hasArrow: false },
        { name: "Օտարվող գույք", hasArrow: false },
        { name: "Կառուցապատողներ", hasArrow: false },
        { name: "Գործընկեր ավտոսրահներ", hasArrow: false },
        { name: "Սակագների արխիվ", hasArrow: false },
      ],
    },
    {
      name: "Օգտակար հղումներ",
      hasArrow: true,
      children: [
        {
          name: "Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)",
          hasArrow: false,
        },
        { name: "Հաճախորդի ռեզիդենտության չափանիշներ", hasArrow: false },
        { name: "Կարգավորում", hasArrow: false },
        { name: "Գաղտնիության քաղաքականություն", hasArrow: false },
        { name: "Ֆին. հաշտարար", hasArrow: false },
        {
          name: "Ֆինանսական հանցագործությունների կանխարգելում",
          hasArrow: false,
        },
        { name: "Հղումներ Բանկի քարտապանների համար", hasArrow: false },
      ],
    },
    {
      name: "Այլ հղումներ",
      hasArrow: true,
      children: [
        { name: "EvocaONLINE", hasArrow: false },
        { name: "Պահատուփեր", hasArrow: false },
        { name: "Հաճախ տրվող հարցեր", hasArrow: false },
        { name: "Հայտարարություններ", hasArrow: false },
        { name: "Dibrary", hasArrow: false },
        { name: "Բուկլետներ", hasArrow: false },
        { name: "Հետադարձ կապ", hasArrow: false },
        { name: "Կայքի քարտեզ", hasArrow: false },
      ],
    },
  ],
};

const MobileMenu = ({ isOpen, onClose }) => {
  const [stack, setStack] = useState([menuData]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => {
        setStack([menuData]);
        setActiveIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleForward = (link) => {
    if (link.children && link.children.length > 0) {
      setStack((prev) => [
        ...prev,
        {
          title: link.name,
          links: link.children,
          bottomLinks: link.bottomLinks,
        },
      ]);
      setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
      }, 10);
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      setTimeout(() => {
        setStack((prev) => prev.slice(0, -1));
      }, 300);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] w-full h-[100dvh] bg-[#5200e8] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* ==================================================== */}
      {/* MOBILE & TABLET LAYOUT (< lg)                        */}
      {/* ==================================================== */}
      <div className="lg:hidden flex flex-col w-full h-full relative bg-[#5200e8]">
        <div className="flex justify-between items-center px-6 py-5 shrink-0 z-10 bg-[#5200e8]">
          <img
            src={evocabankLogo}
            alt="Evocabank"
            className="h-[68px] w-auto object-contain filter brightness-0 invert relative -left-[20px]"
          />
          <button
            onClick={onClose}
            className="text-white p-1 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex-1 w-full overflow-hidden bg-[#5200e8]">
          {stack.map((menuObj, index) => {
            let translateClass = "translate-x-full";
            if (index === activeIndex) {
              translateClass = "translate-x-0";
            } else if (index < activeIndex) {
              translateClass = "-translate-x-full";
            }

            return (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full flex flex-col transition-transform duration-300 ease-in-out bg-[#5200e8] ${translateClass}`}
              >
                <div className="flex-1 overflow-y-auto flex flex-col pb-6">
                  {index > 0 && (
                    <div
                      className="px-6 py-4 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity mb-2 shrink-0"
                      onClick={handleBack}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 12H5M12 19l-7-7 7-7"
                        />
                      </svg>
                      <span className="text-white font-bold text-[18px]">
                        {menuObj.title}
                      </span>
                    </div>
                  )}

                  <ul className="flex flex-col shrink-0">
                    {menuObj.links &&
                      menuObj.links.map((link, linkIdx) => {
                        const hasValidChildren =
                          link.children && link.children.length > 0;

                        return (
                          <li
                            key={linkIdx}
                            className={`${
                              index === 0
                                ? "border-b border-white/20 py-6 sm:py-6"
                                : "py-3.5"
                            } px-6`}
                          >
                            <div
                              onClick={() => handleForward(link)}
                              className="flex justify-between items-center text-white font-bold text-[19px] sm:text-[19px] cursor-pointer"
                            >
                              <span>{link.name}</span>
                              {(link.hasArrow || hasValidChildren) && (
                                <svg
                                  className="w-5 h-5 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M5 12h14M12 5l7 7-7 7"
                                  />
                                </svg>
                              )}
                            </div>
                          </li>
                        );
                      })}
                  </ul>

                  {index === 0 && menuObj.bottomLinks && (
                    <div className="bg-[#4300c4] flex-1 flex flex-col mt-[70px] pb-10 sm:hidden">
                      {menuObj.bottomLinks.map((link, bottomIdx) => (
                        <div
                          key={`bottom-${bottomIdx}`}
                          onClick={() => handleForward(link)}
                          className="px-6 py-5 border-b border-white/10 flex justify-between items-center text-white font-bold text-[16px] cursor-pointer hover:bg-white/5 transition-colors"
                        >
                          <span>{link.name}</span>
                          {link.hasArrow && (
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================== */}
      {/* DESKTOP LAYOUT (>= lg)                               */}
      {/* ==================================================== */}
      <div className="hidden lg:flex w-full h-full flex-row overflow-hidden">
        {/* Left Side (Dark panel) */}
        {/* Added 2xl:w-[35%] for wider screens */}
        <div className="w-[45%] xl:w-[40%] 2xl:w-[35%] bg-[#1a1a1a] relative shrink-0 transition-all duration-300">
          <div
            className="absolute inset-0 z-0 bg-cover bg-left bg-no-repeat opacity-40 mix-blend-screen"
            style={{ backgroundImage: `url(${leftPhoto})` }}
          />
          <div className="absolute inset-0 z-0 bg-black/60 mix-blend-multiply" />

          <div className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar flex flex-col items-end pt-12 pr-12 2xl:pr-16">
            <div className="flex justify-end mb-16 w-full mt-4 shrink-0 pr-4">
              <img
                src={evocabankLogo}
                alt="Evocabank"
                className="h-[65px] 2xl:h-[75px] w-auto object-contain filter brightness-0 invert"
              />
            </div>

            <ul className="flex flex-col w-full mt-2 pb-16 shrink-0 items-end gap-2 2xl:gap-3">
              {menuData.links.map((link, idx) => {
                const isActive = desktopActiveIndex === idx;
                return (
                  <li
                    key={idx}
                    onClick={() => setDesktopActiveIndex(idx)}
                    className="relative w-full py-4 flex justify-end items-center cursor-pointer group pr-8"
                  >
                    <span
                      className={`text-[23px] 2xl:text-[25px] font-bold transition-colors z-20 tracking-wide text-right ${
                        isActive
                          ? "text-[#8e3df3]"
                          : "text-white group-hover:text-gray-300"
                      }`}
                    >
                      {link.name}
                    </span>

                    {isActive && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-r-[16px] border-r-[#5200e8] z-20" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Side (Purple panel with Submenus) */}
        {/* Added 2xl:w-[65%] and 2xl:px-32 to balance the columns */}
        <div className="w-[55%] xl:w-[60%] 2xl:w-[65%] bg-[#5200e8] relative flex flex-col px-12 xl:px-24 2xl:px-32 py-16 overflow-y-auto overflow-x-hidden custom-scrollbar transition-all duration-300">
          {/* Background Decor Elements */}
          <img
            src={logoV}
            alt=""
            className="absolute -bottom-10 -right-10 w-[700px] xl:w-[900px] 2xl:w-[1100px] opacity-[0.06] z-0 pointer-events-none"
          />
          <img
            src={onlineBankingShape2}
            alt=""
            className="absolute top-[45%] left-[50%] w-10 2xl:w-14 opacity-20 z-0 pointer-events-none"
          />
          <img
            src={evocaBestShape2}
            alt=""
            className="absolute bottom-[20%] right-[15%] w-10 2xl:w-14 opacity-20 z-0 pointer-events-none"
          />

          {/* Top Right Controls */}
          <div className="absolute top-10 right-10 2xl:top-14 2xl:right-14 flex items-center gap-5 z-50">
            <button
              onClick={onClose}
              className="text-white cursor-pointer hover:scale-110 transition-transform"
            >
              <svg
                className="w-8 h-8 2xl:w-10 2xl:h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          {/* Added 2xl:gap-x-24 to separate the columns nicely */}
          <div className="relative z-10 block columns-1 xl:columns-2 xl:gap-x-16 2xl:gap-x-24 mt-12 2xl:mt-16 pb-24 w-full max-w-[500px] xl:max-w-none">
            {menuData.links[desktopActiveIndex]?.children &&
            menuData.links[desktopActiveIndex].children.length > 0 ? (
              menuData.links[desktopActiveIndex].children.map(
                (section, sectionIdx) => (
                  <div
                    key={sectionIdx}
                    className="flex flex-col break-inside-avoid mb-12 2xl:mb-14"
                  >
                    {/* Section Title or Parent Link */}
                    <h3
                      className={`text-white font-bold text-[24px] 2xl:text-[26px] mb-5 tracking-wide ${
                        !section.children || section.children.length === 0
                          ? "cursor-pointer hover:text-gray-200 transition-colors"
                          : ""
                      }`}
                      onClick={() => {
                        if (
                          !section.children ||
                          section.children.length === 0
                        ) {
                          onClose();
                        }
                      }}
                    >
                      {section.name}
                    </h3>

                    {section.children && section.children.length > 0 && (
                      <ul className="flex flex-col gap-4 2xl:gap-5">
                        {section.children.map((item, i) => (
                          <li key={i}>
                            <span
                              onClick={onClose}
                              className="text-white text-[15px] 2xl:text-[16px] font-normal cursor-pointer hover:opacity-75 transition-opacity flex items-start gap-2 group max-w-full"
                            >
                              <span className="flex-1 break-words text-left">
                                {item.name}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ),
              )
            ) : (
              <div className="flex flex-col justify-center h-full pt-10">
                <button
                  onClick={onClose}
                  className="text-white font-bold text-[28px] xl:text-[32px] 2xl:text-[36px] cursor-pointer hover:text-[#d0bfff] transition-colors flex items-center gap-4 text-left group w-max"
                >
                  <span>{menuData.links[desktopActiveIndex]?.name}</span>
                  <svg
                    className="w-8 h-8 2xl:w-10 2xl:h-10 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <p className="text-white/70 text-[16px] 2xl:text-[18px] mt-3">
                  Սեղմեք՝ էջին անցնելու և մենյուն փակելու համար
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
