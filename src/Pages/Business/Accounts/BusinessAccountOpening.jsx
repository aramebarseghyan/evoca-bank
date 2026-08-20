import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import MobilePromo from "../../Individual/HomePage/Components/MobilePromo";

const BusinessAccountOpening = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [accordions, setAccordions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "business_account_opening_config", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.accordions) {
            setAccordions(data.accordions);
          }
        } else {
          console.warn(
            "Document business_account_opening_config/main not found!",
          );
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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white pt-[30px] sm:pt-[50px] pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row w-full mb-12 lg:min-h-[440px]">
          <div className="lg:w-[40%] bg-[#f5f5f5] p-8 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center lg:rounded-bl-[70px]">
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#222222] mb-5 leading-[1.3]">
              Հաշիվների բացում և սպասարկում
            </h1>
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձանց ու անհատ
              ձեռնարկատերերին առաջարկում ենք մեզ մոտ բացել դրամային և
              արտարժույթային բանկային ընթացիկ հաշիվներ:
            </p>
          </div>
          <div className="lg:w-[60%]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16116367969264/780x585.jpg"
              alt="Evocabank Business"
              className="w-full h-full min-h-[250px] lg:min-h-full object-cover"
            />
          </div>
        </div>


        <div className="space-y-6 mb-12 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Հաշիվների սպասարկումն իրականացնում ենք մեր{" "}
            <a
              href="#tariffs"
              className="text-[#6000ff] font-semibold underline hover:text-[#5000cc]"
            >
              Ընթացիկ հաշիվների սպասարկման սակագների համաձայն
            </a>
            : Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և
            ցանկացած մասնաճյուղ:
          </p>
          <p>
            <span className="font-bold text-[#6000ff]">Ուշադրություն. </span>
            <a
              href="#metal"
              className="text-[#6000ff] font-semibold underline hover:text-[#5000cc]"
            >
              Առարկայազուրկ մետաղական հաշիվների
            </a>
            , Ավանդային և Քարտային հաշիվների սպասարկման պայմաններին կարող եք
            ծանոթանալ Առարկայազուրկ մետաղական հաշիվներ, Վճարային քարտեր
            ենթաբաժիններում և Իրավաբանական անձանց բանկային ծառայությունների
            Ավանդներ բաժնում:
          </p>
        </div>


        <div className="mb-6">
          <h4 className="text-xl sm:text-2xl font-bold text-[#222222]">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h4>
        </div>


        {loading ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-16 bg-gray-100 rounded-2xl border border-gray-200"
              ></div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {accordions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white border border-[#6000ff]/30 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-[#6000ff]/5 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base lg:text-lg text-[#222222] pr-4">
                      {item.title}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#6000ff]/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#6000ff] text-white"
                          : "text-[#6000ff]"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 mt-2">
                        {item.paragraphs ? (
                          <div className="space-y-4">
                            {item.paragraphs.map((p, pIdx) => (
                              <p
                                key={pIdx}
                                className={
                                  p.className ||
                                  "text-gray-700 text-sm sm:text-base leading-relaxed"
                                }
                              >
                                {p.text}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {item.text}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}


        <div className="mt-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <h5 className="font-bold text-base text-[#222222] mb-2">
            Լրացուցիչ ծանուցում և պայմաններ
          </h5>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Բանկն իրավունք է ունի միակողմանիորեն փոփոխել սակագները՝
            օրենսդրությամբ և պայմանագրով սահմանված կարգով հաճախորդներին նախօրոք
            տեղեկացնելով այդ մասին: Ցանկացած հարցի դեպքում կարող եք դիմել
            շուրջօրյա աջակցման կենտրոն:
          </p>
        </div>
      </div>
      <MobilePromo />
    </div>
  );
};

export default BusinessAccountOpening;
