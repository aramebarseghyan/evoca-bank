import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper стили
import "swiper/css";
import "swiper/css/navigation";

// Импорт руки
import handImg from "../../../assets/img/hand.png";

// Импорт логотипов партнеров
import adelie from "../../../assets/partners/adelie.png";
import dalma from "../../../assets/partners/dalma.png";
import dignisi from "../../../assets/partners/dignisi.png";
import early from "../../../assets/partners/early.png";
import easy from "../../../assets/partners/easy.png";
import fab from "../../../assets/partners/fab.png";
import factory from "../../../assets/partners/factory.png";
import futuris from "../../../assets/partners/futuris.png";
import hip from "../../../assets/partners/hip.png";
import imr from "../../../assets/partners/imr.png";
import indigo from "../../../assets/partners/indigo.png";
import kamo from "../../../assets/partners/kamo.png";
import nortun from "../../../assets/partners/nortun.png";
import telcell from "../../../assets/partners/telcell.png";
import wizzy from "../../../assets/partners/wizzy.png";

const partnersData = [
  { id: 1, name: "Factory", logo: factory },
  { id: 2, name: "Indigo", logo: indigo },
  { id: 3, name: "Wizzy", logo: wizzy },
  { id: 4, name: "Kamo", logo: kamo },
  { id: 5, name: "Dalma", logo: dalma },
  { id: 6, name: "Adelie", logo: adelie },
  { id: 7, name: "Dignisi", logo: dignisi },
  { id: 8, name: "Early", logo: early },
  { id: 9, name: "Easy", logo: easy },
  { id: 10, name: "Fab", logo: fab },
  { id: 11, name: "Futuris", logo: futuris },
  { id: 12, name: "Hip", logo: hip },
  { id: 13, name: "IMR", logo: imr },
  { id: 14, name: "Nortun", logo: nortun },
  { id: 15, name: "Telcell", logo: telcell },
];

const Partners = () => {
  const cardRef = useRef(null);
  const [extraWidth, setExtraWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const dist = document.documentElement.clientWidth - rect.right;
        setExtraWidth(dist > 0 ? Math.ceil(dist) : 0);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="w-full bg-white py-10 lg:py-16 2xl:py-20 px-4 sm:px-8 md:px-12 xl:px-16 2xl:px-20 overflow-visible relative">
      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row xl:items-center justify-between gap-10 xl:gap-14 2xl:gap-16 relative">
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="w-full xl:w-[38%] 2xl:w-[32%] flex flex-col justify-center relative z-20">
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] 2xl:text-[44px] font-extrabold text-[#1E1E24] tracking-tight">
              Գործընկերներ
            </h2>

            <div className="hidden md:block xl:hidden">
              <button className="px-6 py-3 bg-[#EAE2FB] hover:bg-[#E0D3F9] text-[#580BD4] font-bold rounded-full text-[14px] inline-flex items-center gap-2 transition-all active:scale-95 shadow-sm whitespace-nowrap">
                <span>Բոլոր գործընկերները</span>
                <span className="text-lg font-bold">›</span>
              </button>
            </div>
          </div>

          <div className="w-full sm:flex sm:flex-row sm:items-center sm:gap-6 md:block">
            <p className="mt-4 sm:mt-0 md:mt-4 xl:mt-6 text-[14px] sm:text-[16px] xl:text-[16px] 2xl:text-[17px] text-[#333333] leading-[1.7] font-medium sm:flex-1 md:flex-none">
              Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր
              իրականություն: Դառնալով Evoca ընտանիքի անդամ` Դուք մուտք կգործեք
              ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր
              առաջարկների ու համագործակցությունների համար:
            </p>

            <div className="pt-2 mt-4 sm:pt-0 sm:mt-0 md:pt-2 md:mt-0 xl:mt-4 block sm:flex sm:justify-end md:hidden xl:block shrink-0">
              <button className="px-7 py-3.5 2xl:px-8 2xl:py-4 bg-[#EAE2FB] hover:bg-[#E0D3F9] text-[#580BD4] font-bold rounded-full text-[15px] 2xl:text-[16px] inline-flex items-center gap-2 transition-all active:scale-95 shadow-sm">
                <span>Բոլոր գործընկերները</span>
                <span className="text-lg font-bold">›</span>
              </button>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <div className="w-full xl:w-[60%] 2xl:w-[65%] relative overflow-visible mt-4 lg:mt-8 xl:mt-0">
          {/* ВРАЩАЮЩИЕСЯ ЖЕЛТЫЕ ТОЧКИ */}
          <div className="hidden md:flex absolute -left-10 lg:-left-12 xl:-left-14 2xl:-left-14 top-1/2 -translate-y-1/2 w-[280px] lg:w-[320px] xl:w-[350px] 2xl:w-[370px] h-[280px] lg:h-[320px] xl:h-[350px] 2xl:h-[370px] items-center justify-center pointer-events-none z-0">
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full animate-spin-slow absolute inset-0 overflow-visible"
            >
              {[65, 86, 107, 128, 149, 170, 191, 212].map((r, i) => (
                <circle
                  key={i}
                  cx="250"
                  cy="250"
                  r={r}
                  fill="none"
                  stroke="#FFE500"
                  strokeWidth="3.5"
                  strokeDasharray="4 12"
                  strokeLinecap="round"
                  opacity={1 - i * 0.07}
                />
              ))}
            </svg>
          </div>

          {/* ФИОЛЕТОВАЯ КАРТОЧКА */}
          <div
            ref={cardRef}
            className="w-full bg-[#F8F3FE] rounded-l-2xl md:rounded-l-[36px] xl:rounded-l-[44px] 2xl:rounded-l-[48px] rounded-r-none py-6 sm:py-8 xl:py-12 2xl:py-14 px-4 sm:px-6 relative shadow-sm flex items-center overflow-visible z-10"
          >
            <div
              className="absolute top-0 left-full h-full bg-[#F8F3FE] -z-10 pointer-events-none"
              style={{
                width: `${extraWidth}px`,
                marginLeft: "-1px",
              }}
            ></div>

            {/* 3D-РУКА */}
            <div className="hidden md:flex absolute -left-10 lg:-left-12 xl:-left-16 2xl:-left-20 top-1/2 -translate-y-[55%] w-[160px] lg:w-[190px] xl:w-[240px] 2xl:w-[270px] h-[320px] lg:h-[380px] xl:h-[480px] 2xl:h-[520px] items-center justify-center pointer-events-none z-30">
              <img
                src={handImg}
                alt="Evocabank Hand"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            {/* Swiper слайдер */}
            <div className="w-full md:pl-[150px] lg:pl-[180px] xl:pl-[200px] 2xl:pl-[220px] relative z-20">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={2}
                navigation
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                  1536: { slidesPerView: 4 },
                }}
                className="partners-swiper py-2 px-10 sm:px-16"
              >
                {partnersData.map((partner) => (
                  <SwiperSlide
                    key={partner.id}
                    className="flex justify-center items-center"
                  >
                    <div className="h-[80px] sm:h-[100px] xl:h-[110px] 2xl:h-[120px] w-full flex items-center justify-center p-3 sm:p-4 border-r border-[#E5D7FA]">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-[38px] sm:max-h-[52px] xl:max-h-[62px] 2xl:max-h-[68px] max-w-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 35s linear infinite;
        }

        .partners-swiper .swiper-button-prev {
          left: -10px !important;
          color: #580BD4;
          font-weight: bold;
          transform: scale(0.65);
        }

        .partners-swiper .swiper-button-next {
          right: -10px !important;
          color: #580BD4;
          font-weight: bold;
          transform: scale(0.65);
        }

        .partners-swiper .swiper-button-disabled {
          opacity: 0.25;
        }
      `}</style>
    </section>
  );
};

export default Partners;
