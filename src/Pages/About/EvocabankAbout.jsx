import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

const EvocabankAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  // Տվյալների բեռնում Firebase-ից
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const q = query(collection(db, "about"), orderBy("year", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleYearClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Բեռնվում է...</div>;
  }

  return (
    <div className="bg-white text-gray-800 font-sans antialiased overflow-x-hidden relative">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
          Ընդհանուր տեղեկատվություն
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-[15px] leading-relaxed text-gray-700">
            <p>
              <span className="text-[#6005c5] font-bold">Evocabank</span>-ը
              արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն
              առանձնանում է տեկտատվական նորագույն տեխնոլոգիաների ակտիվ
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

      <section className="bg-[#6005c5] w-full py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            Մեր տեսլականը
          </h2>
          <div className="flex gap-4 items-start">
            <div className="w-8 sm:w-12 h-[2px] bg-white mt-2.5 shrink-0"></div>
            <p className="text-white text-base sm:text-lg font-medium max-w-3xl leading-relaxed">
              Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու
              տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն
              ծառայություններ ապահովելու համար։
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-20 sm:pb-24">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
          Մեր առաքելությունը
        </h2>

        <div className="relative w-full max-w-[946px]">
          <img
            src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg"
            alt="Evocabank Office"
            className="w-full object-cover h-[280px] sm:h-[430px]"
          />

          <div className="bg-[#f9f6fd] border-l-[3px] border-[#6005c5] p-5 sm:p-8 static lg:absolute lg:-bottom-16 lg:left-12 max-w-2xl shadow-sm mt-4 lg:mt-0">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
              Որպես human-first և խելացի ֆինտեխ ընկերություն՝ մենք
              հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ,
              բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և հասարակությանը՝
              կառուցելու ավելի լավ ապագա։
            </p>
          </div>
        </div>
      </section>

      {/* Բանկի պատմությունը (Բեռնվում է Firebase-ից) */}
      {historyData.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
            Բանկի պատմությունը
          </h2>

          <div className="flex items-center gap-1 sm:gap-4 mb-10 w-full">
            <button
              className={`p-1.5 sm:p-2 transition-colors shrink-0 ${activeIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#6005c5]"}`}
              onClick={() => {
                if (activeIndex > 0) handleYearClick(activeIndex - 1);
              }}
              disabled={activeIndex === 0}
            >
              <svg
                width="22"
                height="22"
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

            <div className="relative flex-1 overflow-x-auto scrollbar-none pt-2 px-1">
              <div className="min-w-[420px] flex flex-col gap-3">
                <div className="relative flex justify-between items-center px-3">
                  {historyData.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <span
                        key={`text-${item.year}`}
                        onClick={() => handleYearClick(index)}
                        className={`cursor-pointer transition-all duration-300 select-none text-center ${isActive ? "text-[#6005c5] font-extrabold text-base sm:text-lg" : "text-gray-700 font-bold text-sm sm:text-base hover:text-[#6005c5]"}`}
                      >
                        {item.year}
                      </span>
                    );
                  })}
                </div>

                <div className="relative w-full px-3">
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 h-[2px] bg-gray-200 z-0"></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-3 h-[2px] bg-[#6005c5] z-0 transition-all duration-500 ease-in-out"
                    style={{
                      width: `calc(${(activeIndex / (historyData.length - 1)) * 100}% - 24px)`,
                    }}
                  ></div>

                  <div className="relative flex justify-between items-center z-10">
                    {historyData.map((item, index) => {
                      const isActive = index === activeIndex;
                      const isPassed = index < activeIndex;

                      return (
                        <div
                          key={`circle-${item.year}`}
                          onClick={() => handleYearClick(index)}
                          className="cursor-pointer flex justify-center items-center bg-white p-1"
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
            </div>

            <button
              className={`p-1.5 sm:p-2 transition-colors shrink-0 ${activeIndex === historyData.length - 1 ? "text-gray-300 cursor-not-allowed" : "text-[#6005c5] hover:text-[#4a0499]"}`}
              onClick={() => {
                if (activeIndex < historyData.length - 1)
                  handleYearClick(activeIndex + 1);
              }}
              disabled={activeIndex === historyData.length - 1}
            >
              <svg
                width="22"
                height="22"
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

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full"
          >
            {historyData.map((item) => (
              <SwiperSlide key={item.year}>
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-center bg-gray-50/50 p-4 sm:p-6 rounded-lg">
                  <div className="w-full md:w-1/2 bg-gray-100 p-5 sm:p-8 rounded-lg shadow-sm min-h-[180px] sm:min-h-[220px] flex items-center">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={item.image}
                      alt={`History ${item.year}`}
                      className="max-w-full h-[240px] sm:h-[330px] object-contain rounded-md"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Մնացած սեքցիաները (Արժեքներ, Լոգո, Բրենդբուք, Գույներ, Տեսանյութ) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
          Արժեքներ և առաջնայնություններ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 sm:gap-y-10">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#6005c5] mb-3 sm:mb-4">
              Human-first
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Առաջին տեղում միշտ մարդն է՝ մեր հաճախորդը, երկրպագուն, աշխատակիցը
              և հասարակությունը: Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց
              կողմից մարդկանց համար:
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#6005c5] mb-3 sm:mb-4">
              Նորարարություն
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այստեղ միակ
              հաստատունն է: Մենք բաց ենք նորարարության համար և պատրաստակամ
              զարգանալու:
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#6005c5] mb-3 sm:mb-4">
              Դրական ազդեցություն
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն
              ավելի լավը դարձնելուն:
            </p>
          </div>

          <div className="border-t-[3px] border-[#6005c5] pt-5 sm:pt-6">
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ,
              startup-ներ:
            </p>
          </div>
          <div className="border-t-[3px] border-[#6005c5] pt-5 sm:pt-6">
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ:
            </p>
          </div>
          <div className="border-t-[3px] border-[#6005c5] pt-5 sm:pt-6">
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ:
            </p>
          </div>

          <div className="border-t-[3px] border-[#6005c5] pt-5 sm:pt-6">
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ
              հատուկ խնամքի տակ գտնվող երեխաներ:
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          Բանկի լոգոտիպը
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-4xl">
          Բանկի լոգոն կազմված է 'evolution' էվոլյուցիա բառի արմատից և նմանեցված
          է 'evoke' զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է
          կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի
          աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի
          առաջընթաց:
        </p>
        <img
          src="https://www.evoca.am/file_manager/icons/logo.png"
          alt="Evoca Bank Logo"
          className="w-48 sm:w-64 h-auto"
        />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          Բանկի բրենդբուքը
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-4xl">
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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          Բանկի կորպորատիվ գույները
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8">
          Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
        </p>

        <div className="max-w-3xl bg-gray-50 rounded-lg p-2 border border-gray-100">
          <div className="flex items-center gap-4 py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-200">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border border-gray-300 shadow-sm shrink-0"></div>
            <p className="text-gray-700 text-xs sm:text-sm">
              Սպիտակը խորհրդանշում է նորը:
            </p>
          </div>
          <div className="flex items-center gap-4 py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-200">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-500 shrink-0"></div>
            <p className="text-gray-700 text-xs sm:text-sm">
              Մոխրագույնը խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:
            </p>
          </div>
          <div className="flex items-center gap-4 py-3 sm:py-4 px-3 sm:px-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#6005c5] shrink-0"></div>
            <p className="text-gray-700 text-xs sm:text-sm">
              Մանուշակագույնը երիտասարդության, ստեղծարարության և նորարարության
              գույնն է:
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 sm:mb-24">
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
