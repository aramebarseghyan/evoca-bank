import React from 'react';
import mapImg from '../../../assets/img/addresses.png';
import pinImg from '../../../assets/img/addresses-pin.png';

const AddressesCard = () => {
  return (
    <div className="mx-auto flex flex-col gap-6 sm:gap-8 max-w-sm sm:max-w-3xl md:max-w-full sm:items-center md:items-start">
      
      {/* Текст */}
      <div className="w-full text-left sm:text-center md:text-left">
        <h2 className="text-[#1A1A26] text-[22px] sm:text-[26px] font-bold mb-2 sm:mb-3">
          Մեր հասցեները
        </h2>
        <p className="text-[#7A7A8C] text-[15px] sm:text-[16px] leading-snug">
          Բանկի հասցեները, աշխատաժամերը,
          <br className="sm:hidden md:block" />
          բանկոմատները
        </p>
      </div>

      {/* Блок с картой и пином */}
      <div className="relative w-full flex justify-center md:justify-start items-center py-2 sm:max-w-xl md:max-w-md">
        <img 
          src={mapImg} 
          alt="Map background" 
          className="w-full h-auto object-contain drop-shadow-sm"
        />
        <img 
          src={pinImg} 
          alt="Map pin" 
          className="absolute w-14 sm:w-16 h-auto drop-shadow-xl z-10 
                     top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] 
                     md:top-auto md:bottom-2 md:left-[15%] md:translate-x-0 md:translate-y-0"
        />
      </div>

      {/* Кнопка */}
      <button className="w-full sm:w-auto sm:px-10 bg-[#F4ECFC] hover:bg-[#EBDDF9] active:bg-[#E2CEF6] text-[#5F12D2] font-semibold text-[16px] py-4 rounded-full flex justify-center items-center gap-2 transition-colors duration-200">
        Դիտել քարտեզը
        <svg 
          width="8" 
          height="14" 
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