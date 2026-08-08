import React from "react";
import mapImg from "../../../../assets/img/addresses.png";
import pinImg from "../../../../assets/img/addresses-pin.png";

const AddressesCard = () => {
  return (
    <div className="group w-full flex flex-col items-start text-left sm:items-center sm:text-center lg:items-start lg:text-left gap-5 sm:gap-6 xl:gap-8 cursor-pointer">
      {/* 
        Встроенные стили для быстрой и плавной анимации.
        - Время анимации уменьшено до 1.2s (стало быстрее).
        - scale в shadow-pulse увеличен (тень становится больше).
      */}
      <style>{`
        @keyframes pin-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes shadow-pulse {
          0%, 100% { transform: scale(1.1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 0.25; }
        }
        @media (min-width: 1280px) {
          .group:hover .custom-float {
            animation: pin-float 1.2s ease-in-out infinite;
          }
          .group:hover .custom-shadow {
            animation: shadow-pulse 1.2s ease-in-out infinite;
          }
        }
      `}</style>

      {/* Текст заголовка и подзаголовка */}
      <div className="w-full">
        <h2 className="text-[#1A1A26] text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-bold mb-2 sm:mb-3">
          Մեր հասցեները
        </h2>
        <p className="text-[#7A7A8C] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[1.4] font-medium">
          Բանկի հասցեները, աշխատաժամերը,
          <br className="hidden sm:inline lg:hidden 2xl:inline" /> բանկոմատները
        </p>
      </div>

      {/* Блок с картой, пином и тенью */}
      <div className="relative flex justify-start sm:justify-center lg:justify-start items-center py-2 w-full">
        <div className="relative w-[240px] sm:w-[270px] lg:w-[260px] xl:w-[300px] 2xl:w-[340px]">
          {/* Фоновая карта */}
          <img
            src={mapImg}
            alt="Map background"
            className="w-full h-auto object-contain drop-shadow-sm"
          />

          {/* 
            Фиолетовая тень под пином.
            На смартфонах она чуть сжимается (group-hover:scale-75), 
            а на экранах xl и выше подхватывает CSS-анимацию "shadow-pulse" 
            и становится заметно больше.
          */}
          <div className="absolute w-[38px] h-[12px] sm:w-[44px] sm:h-[14px] xl:w-[52px] xl:h-[16px] 2xl:w-[58px] 2xl:h-[18px] bg-[#6F00FF]/35 rounded-[50%] blur-[2px] z-0 -bottom-2 left-3.5 sm:left-5 lg:left-3.5 xl:left-4 2xl:left-5 transition-all duration-300 ease-out group-hover:scale-75 group-hover:opacity-50 custom-shadow" />

          {/* Маркер (пин) */}
          <div className="absolute z-10 -bottom-3 left-2 sm:left-4 lg:left-2 2xl:left-3 transition-transform duration-300 ease-out group-hover:-translate-y-3 xl:group-hover:-translate-y-4 2xl:group-hover:-translate-y-5">
            <img
              src={pinImg}
              alt="Map pin"
              className="w-[50px] sm:w-[58px] lg:w-[56px] xl:w-[68px] 2xl:w-[76px] h-auto drop-shadow-md transition-transform duration-300 custom-float"
            />
          </div>
        </div>
      </div>

      {/* Кнопка */}
      <button className="w-full sm:w-auto px-7 py-3.5 xl:px-9 xl:py-4 bg-[#F4ECFC] hover:bg-[#EBDDF9] active:bg-[#E2CEF6] text-[#6F00FF] font-bold text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-[18px] rounded-full flex justify-center items-center gap-2.5 transition-colors duration-200 cursor-pointer mt-1">
        Դիտել քարտեզը
        <svg
          className="w-2 h-3.5 xl:w-2.5 xl:h-4"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6.5 7L1 12.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddressesCard;
