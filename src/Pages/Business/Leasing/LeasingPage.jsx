import React, { useState } from "react";

const LeasingPage = () => {
  // Состояние открытого аккордеона: 0 означает, что первая шторка открыта по умолчанию
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Данные для таблиц
  const generalLeasingConditions = [
    { label: "Արժույթը", value: "ՀՀ դրամ, ԱՄՆ դոլար, Եվրո" },
    {
      label: "Լիզինգառուները",
      value:
        "ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձִք և անհատ ձեռնարկատերեր",
    },
    {
      label: "Լիզինգի առարկայի ձեռքբերման հնարավորությունները",
      value:
        "Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից` առաջնային և երկրորդային շուկաներից",
    },
    {
      label: "Լիզինգի սահմանաչափերը",
      value: "5,000,001-1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ",
    },
    { label: "Կանխավճար", value: "Նվազագույնը` 10%" },
    {
      label: "Մարման ժամկետը",
      value: "6-72 ամիս` կախված ձեռքբերվող Լիզինգի առարկայից",
    },
    {
      label: "Մարման եղանակը",
      value: "Անուիտետային, Զսպանակաձև, Պայմանագրային",
    },
    {
      label: "Տարեկան տոկոսադրույքը",
      value:
        "ՀՀ դրամ՝ սկսած 10.5%-ից\nԱՄՆ դոլար՝ սկսած 8%-ից\nԵվրո՝ սկսած 6%-ից",
    },
    { label: "Ժամկետանց մայր գումարի տույժ", value: "Օրական 0.015%-ի չափով" },
    { label: "Ժամկետանց տոկոսագումարների տույժ", value: "Օրական 0.1%-ի չափով" },
    {
      label: "Ժամկետից շուտ մարելու տուգանք",
      value:
        "Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարձավճարից ավելին մարելու դեպքում վճարվում է տուգանք` մարումների ժամանակացույցով սահմանված ամսական Լիզինգի մայր գումարի չափը գերազանցող գումարի 5%-ի չափով",
    },
    {
      label: "Ապահովվածություն",
      value:
        "Երաշխավորություններ` ըստ պահանջի, Գույքի/իրավունքի գրավ` ըստ պահանջի",
    },
    {
      label: "Լիզինգային հայտի ուսումնասիրման միանվագ վճար",
      value: "20,000 ՀՀ դրամ",
    },
    {
      label: "Լիզինգի գումարից միանվագ գանձվող միջնորդավճար",
      value: "0.4-1%, ոչ ավել քան 500,000 ՀՀ դրամ",
    },
    {
      label: "Սեփականության իրավունքի փոխանցման վճար",
      value: "10,000 ՀՀ դրամ",
    },
  ];

  const modernizationConditions = [
    { label: "Ֆինանսավորում", value: "Լիզինգ" },
    { label: "Արժույթ", value: "ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո" },
    {
      label: "Լիզինգառու",
      value: "ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր",
    },
    {
      label: "Նպատակ",
      value:
        "Նոր (չօգտագործված) մեքենասարքավորումների գնում կամ ներմուծում, կապիտալ շինարարություն, թվային ծրագրերի ձեռքբերում, խորհրդատվական ծառայություններ",
    },
    { label: "Մարման ժամկետ", value: "Մինչև 120 ամիս" },
    {
      label: "Տարեկան տոկոսադրույք",
      value: "ՀՀ դրամ` 9%-14%, ԱՄՆ դոլար, Եվրո` 6%-10%",
    },
    { label: "Կանխավճար", value: "Լիզինգի առարկայի արժեքի նվազագույնը` 10%" },
    {
      label: "Տոկոսադրույքի սուբսիդավորում",
      value: "ՀՀ դրամ` 8%, ԱՄՆ դոլար, Եվրո` 6%",
    },
    { label: "Մայր գումարի արտոնյալ ժամանակաշրջան", value: "Մինչև 6 ամիս" },
  ];

  const agricultureConditions = [
    { label: "Արժույթ", value: "ՀՀ դրամ" },
    { label: "Լիզինգառու", value: "Իրավաբանական անձ, Անհատ ձեռնարկատեր" },
    { label: "Գործունեության ոլորտ", value: "Գյուղատնտեսություն" },
    {
      label: "Նպատակ",
      value:
        "Գյուղատնտեսական տեխնիկայի ձեռքբերում (տրակտորներ, կոմբայներ, հավաքիչ-մամլիչներ և այլն)",
    },
    { label: "Լիզինգի սահմանաչափ", value: "5,100,000 - 500,000,000 ՀՀ դրամ" },
    { label: "Կանխավճար", value: "Լիզինգի առարկայի արժեքի 20 %" },
    { label: "Մարման ժամկետ", value: "36-120 ամիս" },
    {
      label: "Տարեկան տոկոսադրույք",
      value:
        "Մինչև 14% (սուբսիդավորվում է այնպես, որ Լիզինգառուի համար կազմի 2% կամ 0% սահմանամերձ/կոոպերատիվների համար)",
    },
    { label: "Հայտի ուսումնասիրության վճար", value: "Միանվագ 20,000 ՀՀ դրամ" },
  ];

  const accordions = [
    {
      title: "Ընդհանուր լիզինգային պայմաններ և սակագներ",
      data: generalLeasingConditions,
    },
    {
      title:
        "ՀՀ կառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)",
      data: modernizationConditions,
    },
    {
      title: "Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով",
      data: agricultureConditions,
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-[90px] sm:pt-[110px] pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок страницы */}
        <div className="mb-8">
          <h4 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-[#222222]">
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
                {/* Кнопка аккордеона */}
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

                {/* Выпадающий контент с плавной анимацией */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="p-5 sm:p-6 pt-0 border-t border-gray-100">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            {item.data.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="border-b border-gray-100 hover:bg-gray-50/50"
                              >
                                <td className="py-3 pr-4 font-semibold text-gray-700 text-xs sm:text-sm w-1/3">
                                  {row.label}
                                </td>
                                <td className="py-3 pl-4 text-gray-600 text-xs sm:text-sm whitespace-pre-line w-2/3">
                                  {row.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeasingPage;
