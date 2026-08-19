import React from "react";
import { useLocation } from "react-router-dom";
// Импорт логотипов партнеров (названия файлов в точности как на вашем скриншоте)
import partner1 from "../../assets/logos/partner-1.png";
import partner2 from "../../assets/logos/partner-2.png";
import partner3 from "../../assets/logos/partner-3.png";
import partner4 from "../../assets/logos/partner-4.png";
import partner5 from "../../assets/logos/partner-5-new.png";
import partner6 from "../../assets/logos/partner-6.png";
import partner7 from "../../assets/logos/partner-7.png";

const Footer2 = () => {
  const location = useLocation();
  const cleanPath = location.pathname ? location.pathname.toLowerCase() : "";

  // Հեռացնում ենք ֆուտերը /evocaLogin էջերի դեպքում
  if (cleanPath === "/evocalogin" || cleanPath.includes("evocalogin")) {
    return null;
  }

  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
  ];

  return (
    <div className="bg-[#f5f5f5] w-full pt-2 sm:pt-4 md:pt-6 pb-12 px-6 xl:px-8 border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto flex flex-col 2xl:flex-row items-center justify-between gap-6 2xl:gap-8">
        {/* Текст дисклеймера */}
        <div className="w-full 2xl:max-w-[780px]">
          <p className="text-[#999] text-[10.5px] sm:text-[11px] md:text-[12px] 2xl:text-[12.5px] leading-[1.7] md:leading-relaxed text-justify m-0">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր
            լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն
            լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք
            առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ՓԲԸ-ն պատասխանատվություն
            չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային
            կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ
            տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում
            տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
        </div>

        {/* Логотипы партнеров в одну строку для 2xl */}
        <div className="w-full 2xl:w-auto flex flex-wrap 2xl:flex-nowrap items-center justify-start 2xl:justify-end gap-4 sm:gap-5 md:gap-6 2xl:gap-5">
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-[24px] sm:h-[30px] md:h-[36px] 2xl:h-[38px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer2;
