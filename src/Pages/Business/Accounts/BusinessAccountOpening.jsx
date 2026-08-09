import React, { useState } from "react";

const BusinessAccountOpening = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    {
      title: "Անվանատիրոջ հատուկ հաշիվներ",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Անվանատիրոջ հատուկ հաշիվը կարող է օգտագործվել միայն ներդրումային
            ծառայություններ մատուցող անձի և ներդրումային ֆոնդի կառավարչի կողմից`
            ներդրումային ծառայությունների մատուցման կամ ներդրումային ֆոնդերի
            կառավարման հետ կապված գործառնությունների իրականացման համար:
          </p>
          <p className="text-gray-700 text-sm sm:text-base font-medium">
            Հաշվի տարեկան սպասարկումը 5,000 ՀՀ դրամ:
          </p>
        </div>
      ),
    },
    {
      title: "Անհրաժեշտ փաստաթղթեր",
      content: (
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Հաշիվ բացելու համար անհրաժեշտ է ներկայացնել իրավաբանական անձի կամ
          անհատ ձեռնարկատիրոջ գրանցման փաստաթղթերը, անձը հաստատող փաստաթուղթ և
          սահմանված կարգով լրացված հայտ-դիմում:
        </p>
      ),
    },
    {
      title: "Հաշիվների սպասարկում",
      content: (
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Բանկային հաշիվների սպասարկումն իրականացվում է բանկի սահմանված
          սակագներին և պայմաններին համապատասխան:
        </p>
      ),
    },
    {
      title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ",
      content: (
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Այլ դրույթները ներառում են հաշիվների կառավարման հեռավար համակարգերի
          միջոցով ծառայությունների մատուցման պայմանները:
        </p>
      ),
    },
    {
      title: "Բանկային հաշվի պայմանագրի լուծման պայմաններ",
      content: (
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Պայմանագիրը կարող է լուծվել հաճախորդի դիմումի համաձայն կամ
          օրենսդրությամբ նախատեսված այլ դեպքերում:
        </p>
      ),
    },
    {
      title:
        "Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում",
      content: (
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Բանկը հանդիսանում է FATCA-ի պահանջներին համապատասխանող ֆինանսական
          հաստատություն և իրականացնում է անհրաժեշտ հաճախորդների ստուգումներ:
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-white pt-[30px] sm:pt-[50px] pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Верхний блок с очень сильно скругленным левым нижним углом */}
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Evocabank Business"
              className="w-full h-full min-h-[250px] lg:min-h-full object-cover"
            />
          </div>
        </div>

        {/* Промежуточный текст */}
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

        {/* Заголовок секции аккордеонов */}
        <div className="mb-6">
          <h4 className="text-xl sm:text-2xl font-bold text-[#222222]">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h4>
        </div>

        {/* Блок с аккордеонами */}
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
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Рандомный текст в самом низу */}
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
    </div>
  );
};

export default BusinessAccountOpening;
