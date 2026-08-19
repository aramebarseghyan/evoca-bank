import React, { useState } from "react";
import MobilePromo from "../HomePage/Components/MobilePromo";

const MoneyTransfers = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordionData = [
    {
      title: "Փոխանցումներ դրամով",
      content: [
        "Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև:",
        "Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում:",
      ],
    },
    {
      title: "Միջազգային փոխանցումներ",
      content: [
        "Իրականացրեք միջազգային արագ և անվտանգ դրամական փոխանցումներ աշխարհի ցանկացած կետ արտարժույթով:",
        "Փոխանցումները կատարվում են միջազգային բանկային ստանդարտներին համապատասխան համակարգերով:",
      ],
    },
    {
      title: "Վճարային համակարգեր",
      content: [
        "Օգտվե՛ք հայտնի միջազգային վճարային համակարգերից՝ արագ փոխանցումներ ուղարկելու և ստանալու համար առանց հաշիվ բացելու անհրաժեշտության:",
      ],
    },
    {
      title: "Փոխանցման պայմանների փոփոխություն կամ չեղարկում",
      content: [
        "Դուք հնարավորություն ունեք դիմել բանկ՝ արդեն կատարված փոխանցման պայմանները փոխելու կամ այն չեղարկելու համար՝ համաձայն բանկի սակագների և գործող կանոնների:",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20 overflow-x-hidden">
      {}
      <div className="max-w-[1440px] mx-auto pt-4 md:pt-6">
        {}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-16 mb-16 gap-6 lg:gap-0 2xl:ml-[-30px] 2xl:w-[calc(100%+30px)]">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Դրամական <br className="hidden xl:block" /> փոխանցումներ
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի
              արտերկիր՝ դրամով և արտարժույթով: Փոխանցումներն իրականացվում են
              միջազգային բանկային ստանդարտներին համապատասխան համակարգերով:
            </p>
          </div>
          <div className="lg:w-[55%]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg"
              alt="Դրամական փոխանցումներ"
              className="w-full h-full object-cover min-h-[300px] bg-[#5D00E0] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ընդհանուր դրույթներ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Ձեր բանկային փոխանցումներն իրականացնում ենք՝ ղեկավարվելով «Բանկերի
              և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի
              իրավական ակտերով, ՀՀ այլ իրավական ակտերով, թղթակից բանկերի հետ
              կնքված պայմանագրերով և սպասարկման սահմանված պայմաններով:
            </p>
            <p>
              Ձեր փոխանցումները կատարում ենք վճարման հանձնարարագրերի հման վրա
              (կախված գումարի չափից, փոխանցման բնույթից և նպատակից՝ կարող են
              պահանջվել նաև այլ փաստաթղթեր):
            </p>
            <p>
              Յուրաքանչյուր աշխատանքային օրվա ընթացքում՝ մինչև ժամը 15:30
              ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային
              օրը, իսկ ժամը 15:30-ից հետո ներկայացված վճարման հանձնարարագրերը՝
              հաջորդ բանկային օրը: Մինչև ժամը 16:30 ներկայացված դրամով
              փոխանցումները (պետական և տեղական բյուջեի վճարումներ, կոմունալ կամ
              սոցիալական այլ վճարներ) կատարման ենք ընդունում նույն բանկային օրը:
            </p>
            <p>
              Դրամով և արտարժույթով բանկային փոխանցումներ իրականացնելիս Ձեզանից
              գանձում ենք{" "}
              <span className="text-[#5D00E0] font-medium underline cursor-pointer">
                միջնորդավճարներ
              </span>
              ՝ ըստ մեր դրույքաչափերի և սակագների: Կոմունալ վճարների սպասարկման
              դիմաց միջնորդավճար չենք գանձում: Արտարժույթի տոկոսային
              հարաբերակցությամբ սահմանված միջնորդավճարները գանձվում են ՀՀ
              դրամով՝ հիմք ընդունելով գանձման օրը տվյալ արտարժույթի համար մեր
              կողմից սահմանված անկանխիկ վաճառքի փոխարժեքը:
            </p>
            <p>
              Մենք պարտավոր ենք տրամադրել յուրաքանչյուր փոխանցման կատարումը
              հավաստող փաստաթուղթ, որտեղ նշված կլինեն փոխանցման գումարը,
              արժույթը, միջնորդավճարի չափը և այլ մանրամասներ:
            </p>
          </div>
        </div>
      </div>

      {}
      <div className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] h-[350px] md:h-[450px] mb-16">
        <img
          src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg"
          alt="Evoca Bank Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 text-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-[900px] leading-snug">
            Կարող եք գումարներ փոխանցել ինչպես ձեր հաշվից, այնպես էլ առանց հաշվի
            բացման:
          </h2>
        </div>
      </div>

      {}
      <div className="max-w-[1440px] mx-auto">
        {}
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
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-[#5D00E0] shadow-sm" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
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
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 space-y-3 text-sm md:text-base border-t border-gray-100 bg-white">
                      {item.content.map((paragraph, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#5D00E0] mt-2 shrink-0"></span>
                          <p>{paragraph}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Փաստաթղթեր
          </h2>

          <div className="space-y-4">
            <a
              href="#download"
              className="flex items-center justify-between p-5 bg-[#F8F6FD] hover:bg-[#f0ecfc] rounded-2xl transition-colors border border-transparent hover:border-[#5D00E0]"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#5D00E0] text-2xl">📄</span>
                <span className="text-gray-900 font-medium text-sm md:text-base">
                  Միջազգային վճարման հանձնարարականներով փոխանցումների
                  իրականացման կանոններ
                </span>
              </div>
              <span className="text-[#5D00E0] text-xl font-bold">⬇</span>
            </a>

            <a
              href="#download"
              className="flex items-center justify-between p-5 bg-[#F8F6FD] hover:bg-[#f0ecfc] rounded-2xl transition-colors border border-transparent hover:border-[#5D00E0]"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#5D00E0] text-2xl">📄</span>
                <span className="text-gray-900 font-medium text-sm md:text-base">
                  Համալիր բանկային ծառայությունների մատուցման պայմաններ
                  16.05.2025
                </span>
              </div>
              <span className="text-[#5D00E0] text-xl font-bold">⬇</span>
            </a>
          </div>
        </div>
      </div>
      <MobilePromo></MobilePromo>
    </div>
  );
};

export default MoneyTransfers;
