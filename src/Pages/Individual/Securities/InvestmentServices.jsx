import React, { useState, useEffect } from "react";
import LatestNews from "../HomePage/Components/LatestNews";

const InvestmentServices = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const accordionData = [
    {
      title: "Ներդրումային ծառայությունների մատուցման կանոններ",
      content: (
        <div className="space-y-6">
          <div>
            <a
              href="#rules1"
              className="text-[#5D00E0] font-bold text-base md:text-lg underline hover:opacity-80 block mb-2"
            >
              Արժեթղթերի շուկայում բրոքերային ծառայությունների մատուցման
              կանոններ
            </a>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված
              արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման,
              հաճախորդների հետ կապի իրականացման, հաճախորդի հաշվին արժեթղթերով
              գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում
              գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի
              վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են
              Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ
              օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին
              համապատասխան:
            </p>
          </div>

          <div>
            <a
              href="#rules2"
              className="text-[#5D00E0] font-bold text-base md:text-lg underline hover:opacity-80 block mb-2"
            >
              Արժեթղթերի պահառության գործունեության կանոններ
            </a>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող
              գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման
              կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները,
              ինչպես նաև պահառության աշխատանքների կանոնները: Կանոնները մշակված
              են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին»
              ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական
              այլ ակտերին (այդ թվում՝ Հայաստանի կենտրոնական դեպոզիտարիայի
              կանոնների պահանջներին) համապատասխան:
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Ծառայությունների մատուցման սակագներ",
      content: (
        <div className="text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Ներդրումային և բրոքերային ծառայությունների մատուցման մանրամասն
            սակագներին և միջնորդավճարներին կարող եք ծանոթանալ բանկի կողմից
            սահմանված պաշտոնական փաստաթղթերում:
          </p>
        </div>
      ),
    },
    {
      title: "Լրացուցիչ տեղեկատվություն",
      content: (
        <div className="text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Լրացուցիչ տեղեկությունների, հաշիվների բացման և անհրաժեշտ փաստաթղթերի
            ցանկի համար կարող եք դիմել բանկի գլխամասային գրասենյակ կամ
            զանգահարել նշված հեռախոսահամարներով:
          </p>
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
        {}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-16 mb-16 gap-6 lg:gap-0 2xl:ml-[-30px] 2xl:w-[calc(100%+30px)]">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Ներդրումային <br className="hidden xl:block" /> ծառայություններ
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս
              եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և
              ցանկություններին համապատասխան:
            </p>
          </div>
          <div className="lg:w-[55%] bg-[#F8F6FD] lg:bg-transparent flex items-center justify-center p-6 lg:p-0 rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg"
              alt="Ներդրումային ծառայություններ"
              className="w-full h-full object-cover max-h-[450px] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում
              ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում։ Բանկի կողմից
              առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական
              անձ հանդիսացող հաճախորդներին:
            </p>

            <div>
              <h3 className="text-[#5D00E0] font-bold text-lg md:text-xl mb-3">
                Ինչպե՞ս դառնալ հաճախորդ.
              </h3>
              <p className="mb-3">
                Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է
                Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար
                պահանջվող փաստաթղթերին կարող եք ծանոթանալ{" "}
                <a
                  href="#account"
                  className="text-[#5D00E0] underline font-medium"
                >
                  այստեղ
                </a>
                ։
              </p>
              <p>
                Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի
                գլխամասային գրասենյակ:
              </p>
            </div>

            <div>
              <h3 className="text-[#5D00E0] font-bold text-lg md:text-xl mb-2">
                Հասցե՝
              </h3>
              <p className="text-gray-900 font-medium">
                Երևան, Հանրապետության 44/2
              </p>
            </div>

            <div>
              <h3 className="text-[#5D00E0] font-bold text-lg md:text-xl mb-2">
                Հետադարձ կապ՝
              </h3>
              <p className="mb-2">
                Հեռ.՝{" "}
                <span className="text-gray-900 font-bold">374 33 777 453</span>,{" "}
                <span className="text-gray-900 font-bold">374 33 603 055</span>
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="#whatsapp"
                  className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg"
                >
                  WA
                </a>
                <a
                  href="#telegram"
                  className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold text-lg"
                >
                  TG
                </a>
                <a
                  href="#viber"
                  className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg"
                >
                  VB
                </a>
              </div>
              <p className="mt-4">
                Էլ. հասցե՝{" "}
                <a
                  href="mailto:investsecurities@evoca.am"
                  className="text-[#5D00E0] underline font-medium"
                >
                  investsecurities@evoca.am
                </a>
              </p>
            </div>

            <div className="bg-[#FFF8F8] border-l-4 border-red-500 p-6 rounded-r-2xl mt-8">
              <h4 className="text-red-600 font-bold text-base md:text-lg mb-2 uppercase">
                Ուշադրություն
              </h4>
              <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
                Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ
                ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները,
                եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի
                արդյունքում:
              </p>
            </div>
          </div>
        </div>

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

export default InvestmentServices;
