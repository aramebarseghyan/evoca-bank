import React, { useState, useEffect } from "react";
import LatestNews from "../HomePage/Components/LatestNews";

const StocksCdaServices = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const accordionData = [
    {
      title: "ՀԿԴ ծառայությունների մատուցման սակագներ և կանոններ",
      content: (
        <div className="space-y-6">
          <div>
            <a
              href="#tariffs"
              className="text-[#5D00E0] font-bold text-base md:text-lg underline hover:opacity-85 block mb-2"
            >
              Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող
              ծառայությունների միջնորդավորման գործունեության սակագներ
            </a>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Ծանոթացեք Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող
              ծառայությունների միջնորդավորման գործունեության հետ կապված
              սակագներին և միջնորդավճարներին:
            </p>
          </div>

          <div>
            <a
              href="#rules"
              className="text-[#5D00E0] font-bold text-base md:text-lg underline hover:opacity-85 block mb-2"
            >
              Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող
              ծառայությունների միջնորդավորման գործունեության կանոններ
            </a>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Այս կանոնները սահմանում են հաճախորդների սպասարկման, հաշիվների
              բացման, վարման և Հայաստանի կենտրոնական դեպոզիտարիայի հետ
              համագործակցության հիմնական դրույթները:
            </p>
          </div>
        </div>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div
      className={`w-full min-h-screen bg-white font-sans pb-20 transition-all duration-700 ease-out transform ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto pt-8 md:pt-12">
        {/* 1. Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-16 mb-16 gap-6 lg:gap-0 2xl:ml-[-30px] 2xl:w-[calc(100%+30px)]">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Հայաստանի կենտրոնական դեպոզիտարիայի (ՀԿԴ)
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Evocabank-ը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի
              Օպերատոր՝ միջնորդավորելով ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից
              մատուցվող ռեեստրավարման և արժեթղթերի պահառության հետ կապված բոլոր
              ծառայությունները:
            </p>
          </div>
          <div className="lg:w-[55%] bg-[#F8F6FD] lg:bg-transparent flex items-center justify-center p-6 lg:p-0 rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg"
              alt="Հայաստանի կենտրոնական դեպոզիտարիա"
              className="w-full h-full object-cover max-h-[450px] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* 2. Main Description Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումը իրականացնում
              է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
            </p>
            <p>
              Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքված պայմանագրի
              հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից
              մատուցվող ծառայությունները:
            </p>
            <p>
              Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և
              կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՀԱ), մատուցում
              է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց
              մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ՝
              մասնաճյուղերում:
            </p>
          </div>
        </div>

        {/* 3. Required Information (Accordion) */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="space-y-4">
            {accordionData.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-[#5D00E0] shadow-sm" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="text-lg font-bold text-gray-900">
                      {item.title}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#5D00E0] text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-white">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <LatestNews></LatestNews>
    </div>
  );
};

export default StocksCdaServices;
