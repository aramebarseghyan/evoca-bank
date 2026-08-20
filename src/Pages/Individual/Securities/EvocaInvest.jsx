import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase"; 

const EvocaInvest = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openVideoAccordion, setOpenVideoAccordion] = useState(true);


  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "EvocaINVEST | Ներդրումային հարթակ";

    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "evoca_invest_config", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.faqData) {
            setFaqData(data.faqData);
          }
        } else {
          console.warn("Document evoca_invest_config/main not found!");
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full bg-white font-sans pb-20">
      <div className="max-w-[1440px] mx-auto pt-8">
        {/* 1. Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-16 mb-16 gap-6 lg:gap-0 2xl:ml-[-30px] 2xl:w-[calc(100%+30px)]">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Կատարիր ներդրումներ և ստացիր եկամուտ EvocaINVEST հավելվածով
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              EvocaINVEST հավելվածի միջոցով կարող ես կատարել ներդրումներ մի շարք
              միջազգային ֆինանսական շուկաներում:
            </p>
          </div>
          <div className="lg:w-[55%] bg-[#F8F6FD] lg:bg-transparent flex items-center justify-center p-6 lg:p-0 rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17812682689927/780x585.png"
              alt="EvocaINVEST"
              className="w-full h-full object-cover max-h-[450px] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* 2. Intro Text Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16 space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Apple, Tesla, Google, Amazon, թե՞ Nike:
          </h2>
          <p>
            <strong className="text-[#5D00E0]">EvocaINVEST</strong>-ի միջոցով
            դու կարող ես ներդրումներ կատարել միջազգային և տեղական կապիտալի
            շուկաներում: Իսկ բրոքերային հաշիվ կարող ես բացել ընդամենը մի քանի
            րոպեում՝ անմիջապես{" "}
            <strong className="text-[#5D00E0]">EvocaTOUCH</strong> հավելվածից:
          </p>
          <p className="font-bold text-gray-900">
            Գնի՛ր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարի՛ր պորտֆոլիոդ մեկ
            հարթակից:
          </p>
        </div>

        {/* 3. Instruments Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16 space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">
            Քո ներդրումային գործիքները
          </h2>
          <p>
            <strong className="text-[#5D00E0]">EvocaINVEST</strong>-ը
            հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և
            ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարություն:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-gray-900">Բաժնետոմսեր՝</strong>{" "}
              ներդրումներ համաշխարհային առաջատար ընկերություններում
            </li>
            <li>
              <strong className="text-gray-900">
                Պարտատոմսեր և եվրապարտատոմսեր՝
              </strong>{" "}
              ավելի կանխատեսելի ներդրումներ և կայուն եկամտի հնարավորություն
            </li>
            <li>
              <strong className="text-gray-900">ETF-ներ՝</strong>{" "}
              դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով
            </li>
          </ul>
        </div>

        {/* 4. Steps Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Բացի՛ր բրոքերային հաշիվ 3 պարզ քայլով
          </h2>
          <img
            src="https://www.evoca.am/file_manager/other/invest%20steps%20(1).png"
            alt="Investment Steps"
            className="w-full rounded-2xl shadow-sm"
          />
        </div>

        {/* 5. Benefits Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16 space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">
            Ինչո՞ւ ընտրել EvocaINVEST ներդրումային հարթակը
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                24/7 պատվերներ
              </h3>
              <p>
                Տեղադրի՛ր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի
                ավտոմատ՝ բորսայի բացվելուն պես:
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                Մրցակցային սակագներ
              </h3>
              <p>
                Մրցակցային և թափանցիկ միջնորդավճարներ: Ամբողջական սակագներին
                ծանոթանում ես նախքան գործարքը հաստատելը:
              </p>
            </div>
          </div>
        </div>

        {/* 6. Required Info Header */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>
        </div>

        {/* 7. Video Accordion Section with 5 Stacked Videos */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-12">
          <div
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              openVideoAccordion
                ? "border-[#5D00E0] shadow-sm"
                : "border-gray-200"
            }`}
          >
            <button
              onClick={() => setOpenVideoAccordion(!openVideoAccordion)}
              className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-base sm:text-lg font-bold text-gray-900">
                EvocaINVEST օգտակար նյութեր
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ml-4 ${
                  openVideoAccordion
                    ? "rotate-180 bg-[#5D00E0] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openVideoAccordion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-white space-y-6">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 max-w-[900px] mx-auto"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/wax5BjEOAGQ?si=h8F7Mme1uxDHCmzg"
                        title={`YouTube video player ${item}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Dynamic FAQ Accordions Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          {loading ? (
            <div className="space-y-4 animate-pulse">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 bg-gray-100 rounded-2xl border border-gray-200"
                ></div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {faqData.map((item, index) => {
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
                      <span className="text-base sm:text-lg font-bold text-gray-900">
                        {item.title}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ml-4 ${
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
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-white text-gray-700 text-sm md:text-base leading-relaxed">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EvocaInvest;