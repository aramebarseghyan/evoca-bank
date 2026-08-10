import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const historyData = [
  {
    year: 2026,
    text: "Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art էջը:",
    image:
      "https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png",
  },
  {
    year: 2025,
    text: "Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ ՓԲԸ-ից ԲԲԸ-ի: Evoca-ն և EBRD-ն ստորագրեցին համագործակցության համաձայնագիր: Ներկայացվեց Evoca Travel Card-ը: Մեկնարկեցին Evoca Partners Club-ը և Evoca Benefits նախագիծը:",
    image:
      "https://www.evoca.am/images-cache/histories/1/17574211752061/450x330.png",
  },
  {
    year: 2024,
    text: "Evocabank-ը ձեռք է բերել նոր միջազգային գործընկերներ, այդ թվում՝ EIB Global-ը, հովանավորել մի շարք նախագծեր, ներկայացրել իր նոր EvocaHOME օվերդրաֆտը, ինչպես նաև արժանացել միջազգային մրցանակների:",
    image:
      "https://www.evoca.am/images-cache/histories/1/17240707281875/450x330.png",
  },
  {
    year: 2023,
    text: "Evocabank-ը թողարկել է նոր, գերժամանակակից EvocaTOUCH 2 և EvocaINVEST հավելվածները: Գործընկերներին է ներկայացրել Evoca Digital քարտը, Action օնլայն վարկը, էլեկտրոնային ստորագրության e-Sign համակարգը:",
    image:
      "https://www.evoca.am/images-cache/histories/1/17001230844576/450x330.jpg",
  },
  {
    year: 2022,
    text: "Evoca-ն համալրել է կանոնադրական կապիտալը 3 մլրդ դրամով: Թողարկել է պարտատոմսեր: Ներկայացրել է Visa Vision քարտը: ՀայՓոստի հետ սկսել է համագործակցություն՝ հարմարավետ և հասանելի ֆինտեխ ծառայությունների գծով: Գործարկել է Evoca mobile POS-ը:",
    image:
      "https://www.evoca.am/images-cache/histories/1/16542512333235/450x330.png",
  },
  {
    year: 2021,
    text: "Evoca-ի նոր, կրատիվ լուծումներով կայքը Awwwards թիմի կողմից արժանացել է 2 մրցանակի: Բանկը ներկայացրել է իր Evoca Gift Card-ը: Բանկը 2 փուլով թողարկել է պարտատոմսեր, այդ թվում՝ online տարբերակով:",
    image:
      "https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png",
  },
];

const EvocabankAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleYearClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans antialiased overflow-x-hidden relative">
      {/* 1. Общая информация */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Ընդհանուր տեղեկատվություն
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 space-y-6 text-[15px] leading-relaxed text-gray-700">
            <p>
              <span className="text-[#6005c5] font-bold">Evocabank</span>-ը
              արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն
              առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ
              կիրառմամբ։
            </p>
            <p>
              Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների
              զարգացմանը։
            </p>
            <p>
              Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր
              ծառայություն նախագծելիս նախևառաջ հաշվի ենք առնում դրա՝ հավելվածով
              օգտագործման հարմարավետությունը։
            </p>
            <p>Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան։</p>
          </div>

          <div className="lg:w-1/2 w-full">
            <img
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png"
              alt="Evoca Bank 3D Logo"
              className="w-full h-auto shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 2. Наше видение */}
      <section className="bg-[#6005c5] w-full py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Մեր տեսլականը
          </h2>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-[2px] bg-white mt-3 shrink-0"></div>
            <p className="text-white text-lg font-medium max-w-3xl leading-relaxed">
              Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու
              տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն
              ծառայություններ ապահովելու համար։
            </p>
          </div>
        </div>
      </section>

      {/* 3. Наша миссия */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-24">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Մեր առաքելությունը
        </h2>

        <div className="relative w-full max-w-[946px]">
          <img
            src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg"
            alt="Evocabank Office"
            className="w-full object-cover h-[430px]"
          />

          <div className="bg-[#f9f6fd] border-l-[3px] border-[#6005c5] p-6 md:p-8 absolute -bottom-12 md:-bottom-16 left-4 md:left-12 max-w-2xl shadow-sm">
            <p className="text-gray-700 leading-relaxed font-medium">
              Որպես human-first և խելացի ֆինտեխ ընկերություն՝ մենք
              հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ,
              բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և հասարակությանը՝
              կառուցելու ավելի լավ ապագա։
            </p>
          </div>
        </div>
      </section>

      {/* 4. История банка (Интерактивный слайдер с исправленной линией) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Բանկի պատմությունը
        </h2>

        {/* Интерактивный таймлайн-навигатор */}
        <div className="flex items-center gap-2 md:gap-6 mb-12 w-full">
          {/* Левая стрелка (к 2026 году) */}
          <button
            className={`p-2 transition-colors ${activeIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#6005c5]"}`}
            onClick={() => {
              if (activeIndex > 0) handleYearClick(activeIndex - 1);
            }}
            disabled={activeIndex === 0}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative flex-1 flex flex-col gap-4 pt-2">
            {/* Текст годов */}
            <div className="relative flex justify-between items-center">
              {historyData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <span
                    key={`text-${item.year}`}
                    onClick={() => handleYearClick(index)}
                    className={`cursor-pointer transition-all duration-300 select-none text-center ${isActive ? "text-[#6005c5] font-extrabold text-[17px] md:text-lg" : "text-gray-700 font-bold text-[15px] md:text-base hover:text-[#6005c5]"}`}
                  >
                    {item.year}
                  </span>
                );
              })}
            </div>

            {/* Линия времени и кружочки */}
            <div className="relative w-full">
              {/* Серая фоновая линия */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-gray-200 z-0"></div>

              {/* Фиолетовая заполняющаяся линия */}
              <div
                className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-[#6005c5] z-0 transition-all duration-500 ease-in-out"
                style={{
                  width: `${(activeIndex / (historyData.length - 1)) * 100}%`,
                }}
              ></div>

              {/* Кружочки */}
              <div className="relative flex justify-between items-center z-10">
                {historyData.map((item, index) => {
                  const isActive = index === activeIndex;
                  const isPassed = index < activeIndex;

                  return (
                    <div
                      key={`circle-${item.year}`}
                      onClick={() => handleYearClick(index)}
                      className="cursor-pointer flex justify-center items-center bg-white px-2 py-1"
                    >
                      <div
                        className={`rounded-full transition-all duration-500 ease-in-out ${
                          isActive
                            ? "w-3 h-3 bg-[#6005c5] ring-[5px] ring-[#6005c5]/25"
                            : isPassed
                              ? "w-3 h-3 bg-white border-[2.5px] border-[#6005c5]"
                              : "w-3 h-3 bg-white border-[2px] border-gray-300"
                        }`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Правая стрелка (к 2021 году) */}
          <button
            className={`p-2 transition-colors ${activeIndex === historyData.length - 1 ? "text-gray-300 cursor-not-allowed" : "text-[#6005c5] hover:text-[#4a0499]"}`}
            onClick={() => {
              if (activeIndex < historyData.length - 1)
                handleYearClick(activeIndex + 1);
            }}
            disabled={activeIndex === historyData.length - 1}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Слайдер с контентом истории */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={50}
          slidesPerView={1}
          className="w-full"
        >
          {historyData.map((item) => (
            <SwiperSlide key={item.year}>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50/50 p-6 rounded-lg">
                <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-sm min-h-[220px] flex items-center">
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    {item.text}
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={item.image}
                    alt={`History ${item.year}`}
                    className="max-w-full h-[330px] object-contain rounded-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 5. Ценности и приоритеты */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Արժեքներ և առաջնայնություններ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          <div>
            <h3 className="text-xl font-bold text-[#6005c5] mb-4">
              Human-first
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Առաջին տեղում միշտ մարդն է՝ մեր հաճախորդը, երկրպագուն, աշխատակիցը
              և հասարակությունը: Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց
              կողմից մարդկանց համար:
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#6005c5] mb-4">
              Նորարարություն
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այստեղ միակ
              հաստատունն է: Մենք բաց ենք նորարարության համար և պատրաստակամ
              զարգանալու:
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#6005c5] mb-4">
              Դրական ազդեցություն
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն
              ավելի լավը դարձնելուն:
            </p>
          </div>

          <div className="border-t-[3px] border-[#6005c5] pt-6">
            <p className="text-gray-800 font-medium">
              Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ,
              startup-ներ:
            </p>
          </div>
          <div className="border-t-[3px] border-[#6005c5] pt-6">
            <p className="text-gray-800 font-medium">
              Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ:
            </p>
          </div>
          <div className="border-t-[3px] border-[#6005c5] pt-6">
            <p className="text-gray-800 font-medium">
              Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ:
            </p>
          </div>

          <div className="border-t-[3px] border-[#6005c5] pt-6">
            <p className="text-gray-800 font-medium">
              Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ
              հատուկ խնամքի տակ գտնվող երեխաներ:
            </p>
          </div>
        </div>
      </section>

      {/* 6. Логотип банка */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Բանկի լոգոտիպը
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
          Բանկի լոգոն կազմված է 'evolution' էվոլյուցիա բառի արմատից և նմանեցված
          է 'evoke' զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է
          կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի
          աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի
          առաջընթաց:
        </p>
        <img
          src="https://www.evoca.am/file_manager/icons/logo.png"
          alt="Evoca Bank Logo"
          className="w-64 h-auto"
        />
      </section>

      {/* 7. Брендбук */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Բանկի բրենդբուքը
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
          Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային
          գույները, տառատեսակները և բրենդի այլ ատրիբուտներ:
          <br />
          Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի
          բրենդ կառուցելու համար:
        </p>
        <div className="w-full cursor-pointer hover:opacity-95 transition">
          <img
            src="https://www.evoca.am/file_manager/other/52.png"
            alt="Evocabank Brandbook"
            className="w-full max-w-4xl h-auto rounded-sm"
          />
        </div>
      </section>

      {/* 8. Корпоративные цвета */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Բանկի կորպորատիվ գույները
        </h2>
        <p className="text-gray-700 mb-8">
          Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
        </p>

        <div className="max-w-3xl bg-gray-50 rounded-lg p-2 border border-gray-100">
          <div className="flex items-center gap-4 py-4 px-4 border-b border-gray-200">
            <div className="w-6 h-6 rounded-full bg-white border border-gray-300 shadow-sm shrink-0"></div>
            <p className="text-gray-700 text-sm">
              Սպիտակը խորհրդանշում է նորը:
            </p>
          </div>
          <div className="flex items-center gap-4 py-4 px-4 border-b border-gray-200">
            <div className="w-6 h-6 rounded-full bg-gray-500 shrink-0"></div>
            <p className="text-gray-700 text-sm">
              Մոխրագույնը խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:
            </p>
          </div>
          <div className="flex items-center gap-4 py-4 px-4">
            <div className="w-6 h-6 rounded-full bg-[#6005c5] shrink-0"></div>
            <p className="text-gray-700 text-sm">
              Մանուշակագույնը երիտասարդության, ստեղծարարության և նորարարության
              գույնն է:
            </p>
          </div>
        </div>
      </section>

      {/* 9. Видео */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
        <div
          className="relative w-full max-w-4xl"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
            src="https://www.youtube.com/embed/QTuqGz3USRE?si=20YyUhvsKa3bXCPT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default EvocabankAbout;
