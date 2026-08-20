import React, { useState } from "react";


const ChevronIcon = ({ isOpen }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`flex-shrink-0 transition-transform duration-300 ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
  >
    <path
      d="M2.5 5L7 9.5L11.5 5"
      stroke="#6F00FF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const announcementsData = [
  {
    id: 1,
    title: "«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով",
    date: "27.05.2026",
  },
  {
    id: 2,
    title: "Գործարքների արգելափակում ֆունկցիոնալ",
    date: "26.06.2026",
  },
  {
    id: 3,
    title: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով",
    date: "04.06.2025",
  },
  {
    id: 4,
    title: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով",
    date: "28.03.2025",
  },
  {
    id: 5,
    title: "Արտաքին աուդիտի մրցույթի հայտարարություն",
    date: "30.12.2024",
  },
  {
    id: 6,
    title:
      "Բանկի ներսում նույն արժույթով քարտերի միջև փոխանցման սակագինը սահմանվել է 0%",
    date: "12.11.2024",
  },
];


const DummyArmenianContent = () => {
  return (
    <div className="pt-2 pb-6 pl-2 pr-6 flex flex-col gap-5">
      <p className="text-[#333333] text-[14px] leading-[1.6]">
        Հուլիսի 1-ից{" "}
        <span className="text-[#6F00FF] font-medium">EvocaTOUCH</span>{" "}
        հավելվածում ու{" "}
        <span className="text-[#6F00FF] font-medium">EvocaONLINE</span>{" "}
        համակարգում հասանելի կլինի նոր՝ Գործարքների արգելափակում ֆունկցիոնալը։
      </p>

      <p className="text-[#333333] text-[14px] leading-[1.6]">
        Այն հնարավորություն է տալիս ինքնուրույն՝ ընդամենը 1 կոճակով,
        ժամանակավորապես արգելափակել առանձին կամ բոլոր հեռավար բանկային
        ծառայությունները՝ ապահովելով հաշիվների անվտանգության բարձր մակարդակը:
        Գործարքների ապաարգելափակման համար անհրաժեշտ կլինի մոտենալ Բանկի ցանկացած
        մասնաճյուղ:
      </p>

      <p className="text-[#555555] text-[13px] leading-[1.6] italic">
        Ուշադրություն. «Գործարքների արգելափակում» գործիքը նախատեսված է Ձեր
        միջոցների և տվյալների անվտանգությունն ապահովելու համար: Խնդրում ենք
        չկիրառել այն փորձարկման նպատակով, քանի որ արգելափակման դեպքում ընտրված
        ծառայությունները կդառնան անհասանելի, իսկ դրանց ապաարգելափակման համար
        անհրաժեշտ կլինի մոտենալ Բանկի մասնաճյուղ:
      </p>
    </div>
  );
};

const Announcements = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f4f5f9] min-h-screen relative overflow-hidden font-sans pt-8">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          <div className="w-full lg:w-4/12 flex justify-center lg:justify-start pt-6">
            <div className="relative w-[320px] h-[340px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#d1c4e9_2px,transparent_2px)] [background-size:16px_16px] rounded-full opacity-70"></div>

              <div className="w-[185px] h-[245px] bg-[#6F00FF] rounded-[24px] relative rotate-[-6deg] shadow-xl flex justify-center pt-5 z-10">
                <div className="w-[155px] h-[210px] bg-white rounded-[16px] flex flex-col p-3 overflow-hidden">
                  <div className="w-12 h-3.5 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <div className="space-y-2">
                    <div className="w-full h-1.5 bg-gray-100 rounded"></div>
                    <div className="w-5/6 h-1.5 bg-gray-100 rounded"></div>
                    <div className="w-4/6 h-1.5 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-yellow-400 rotate-12 z-20"></div>
              <div className="absolute bottom-16 left-2 w-4 h-4 bg-purple-400 rounded-sm rotate-45 z-20"></div>
              <div className="absolute top-2 right-12 text-purple-400 font-bold text-xl tracking-tighter z-20">
                /\/\/
              </div>
              <div className="absolute bottom-4 right-10 w-3.5 h-3.5 bg-yellow-400 rounded-full z-20"></div>
              <div className="absolute -bottom-4 left-6 grid grid-cols-4 gap-1.5">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-gray-300 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>


          <div className="w-full lg:w-8/12 flex flex-col">
            <div className="flex flex-col gap-3">
              {announcementsData.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 border border-transparent hover:border-purple-100"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-[#1a1a26] text-[15px] leading-snug">
                          {item.title}
                        </h3>
                        <span className="text-[#a0a0a0] text-[11px] font-medium tracking-wide">
                          {item.date}
                        </span>
                      </div>
                      <ChevronIcon isOpen={isOpen} />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out px-6 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <DummyArmenianContent />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>


            <div className="flex items-center justify-center gap-1.5 mt-12 mb-8">
              <button className="w-8 h-8 flex items-center justify-center mr-2 opacity-30 cursor-not-allowed">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="#1a1a26"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-[13px] font-bold transition-colors ${
                    num === 1
                      ? "bg-[#6F00FF] text-white"
                      : "text-gray-500 hover:text-[#6F00FF]"
                  }`}
                >
                  {num}
                </button>
              ))}

              <button className="w-8 h-8 flex items-center justify-center ml-2 cursor-pointer group">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#6F00FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
