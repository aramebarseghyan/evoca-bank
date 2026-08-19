import React, { useState } from "react";

const FAQ = () => {
  // Ակտիվ կատեգորիայի state
  const [activeCategory, setActiveCategory] = useState("bonds");
  // Բացված ակորդեոնի ինդեքսը (լռելյայն առաջինը բաց է)
  const [openIndex, setOpenIndex] = useState(0);

  // Կողային մենյուի կատեգորիաները
  const categories = [
    { id: "bonds", label: "Պարտատոմսեր" },
    { id: "career", label: "Կարիերա" },
    { id: "mortgage", label: "Հիփոթեքային վարկեր" },
    { id: "consumer", label: "Սպառողական վարկեր" },
    { id: "evocatouch", label: "EvocaTouch" },
    { id: "transfers", label: "Փոխանցումներ" },
    { id: "cards", label: "Քարտեր" },
    { id: "deposits", label: "Ավանդներ" },
    { id: "other", label: "Այլ" },
  ];

  // Պարտատոմսերի հարցերն ու պատասխանները
  const faqData = [
    {
      question: "Ի՞նչ է պարտատոմսը:",
      answer:
        "Պարտատոմսը (լատիներեն՝ obligation - պարտավորություն) պարտքային արժեթուղթ է, որը հավաստում է դրա տիրապետողի իրավունքը՝ դրանում նշված ժամկետում պարտատոմս թողարկած անձից ստանալ պարտատոմսի անվանական արժեքը, ինչպես նաև տոկոս:",
    },
    {
      question:
        "Ի՞նչ կլինի, եթե պարտատոմսերում ներդրված գումարն ինձ անհրաժեշտ լինի մինչև մարման ժամկետը:",
      answer:
        "Դուք կարող եք վաճառել Ձեր պարտատոմսերը երկրորդային շուկայում ցանկացած աշխատանքային օր՝ պահպանելով մինչ այդ կուտակված տոկոսագումարը:",
    },
    {
      question: "Ինչո՞ւ պետք է գնեմ պարտատոմսեր՝ ավանդ ներդնելու փոխարեն:",
      answer:
        "Պարտատոմսերն ապահովում են ավելի բարձր եկամտաբերություն, ինչպես նաև ազատ շրջանառության և երկրորդային շուկայում վաճառելու հնարավորություն:",
    },
    {
      question:
        "Իմ ավանդները երաշխավորված են ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից, իսկ պարտատոմսե՞րը:",
      answer:
        "Բանկի կողմից թողարկված դրամային և արտարժութային պարտատոմսերը նույնպես երաշխավորված են Ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից:",
    },
    {
      question: "Ինչպե՞ս կարող եմ գնել Evocabank-ի պարտատոմսեր:",
      answer:
        "Պարտատոմսեր կարող եք ձեռք բերել EvocaTOUCH հավելվածի միջոցով առանց բանկ այցելելու կամ մոտենալով Բանկի ցանկացած մասնաճյուղ:",
    },
    {
      question:
        "Կարո՞ղ եմ արդյոք անհրաժեշտության դեպքում պարտատոմսերի գրավով վարկ վերցնել:",
      answer:
        "Այո, Դուք կարող եք ստանալ վարկ՝ գրավադրելով Ձեր պարտատոմսերը արտոնյալ պայմաններով և ցածր տոկոսադրույքով:",
    },
    {
      question: "Կարո՞ղ եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու:",
      answer:
        "Այո, բրոքերային հաշիվը կարող եք բացել առանց մասնաճյուղ այցելելու՝ EvocaINVEST հավելվածի միջոցով ընդամենը 1 րոպեում:",
    },
    {
      question:
        "Ո՞ր շուկաներին և գործիքներին է EvocaINVEST-ըապահովում հասանելիություն:",
      answer:
        "EvocaINVEST-ը ապահովում է հասանելիություն միջազգային առաջատար բորսաներին (NYSE, NASDAQ, LSE) և տեղական ֆինանսական շուկային:",
    },
    {
      question: "Կարո՞ղ եմ միաժամանակունենալ տարբեր տեսակի արժեթղթեր:",
      answer:
        "Այո, Ձեր ներդրումային պորտֆելում կարող եք համատեղել ինչպես պետական ու կորպորատիվ պարտատոմսեր, այնպես էլ բաժնետոմսեր:",
    },
    {
      question: "Ինչպե՞ս գտնել և գնել կոնկրետ արժեթուղթ:",
      answer:
        "Հավելվածի որոնման բաժնում կարող եք մուտքագրել ընկերության անվանումը կամ Ticker-ը և կատարել գնում անմիջապես Ձեր հաշվից:",
    },
    {
      question: "Ո՞րն է տարբերությունը լիմիտային և շուկայական պատվերների միջև:",
      answer:
        "Շուկայական պատվերը կատարվում է տվյալ պահին առկա լավագույն գնով, իսկ լիմիտային պատվերը՝ միայն Ձեր նշած կոնկրետ գնով կամ ավելի լավ պայմանով:",
    },
    {
      question: "Ի՞նչ է ticker-ը:",
      answer:
        "Ticker-ը տվյալ արժեթղթի կամ ընկերության կարճ նույնականացման կոդն է բորսայում (օրինակ՝ AAPL, GOOGL):",
    },
    {
      question: "Ի՞նչ է դիվիդենտը:",
      answer:
        "Դիվիդենտը (շահաբաժինը) ընկերության զուտ շահույթի այն մասն է, որը բաշխվում է բաժնետերերի միջև:",
    },
    {
      question: "Ինչո՞ւ է կարևոր դիվերսիֆիկացիան:",
      answer:
        "Դիվերսիֆիկացիան նվազեցնում է ռիսկերը՝ ներդրումները տարբեր ակտիվների, ոլորտների և տարածաշրջանների միջև բաշխելու միջոցով:",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FAFAFC] min-h-screen py-10 px-4 sm:px-8 font-sans">
      <div className="max-w-[1280px] mx-auto">
        {/* Վերնագիր */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Հաճախ տրվող հարցեր
        </h1>

        {/* Հիմնական layout՝ 2 սյունակով */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Ձախ կողային մենյու (Sidebar) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm sticky top-6">
            <nav className="flex flex-col space-y-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? "text-[#5D00E0] font-bold bg-[#F5F0FF] border-l-4 border-[#5D00E0]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-normal"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Աջ կողմի բովանդակություն (FAQ list) */}
          <div className="lg:col-span-9">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Պարտատոմսեր
            </h2>

            <div className="space-y-3">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-200 bg-white overflow-hidden ${
                      isOpen
                        ? "border-2 border-[#5D00E0] shadow-sm"
                        : "border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Ակորդեոնի վերնագիր */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5D00E0"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>

                    {/* Ակորդեոնի բովանդակություն */}
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-gray-50">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
