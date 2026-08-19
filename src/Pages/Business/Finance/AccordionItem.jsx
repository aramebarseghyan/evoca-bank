import React, { useState } from "react";

const GuaranteePage = () => {
  
  const [openAccordionId, setOpenAccordionId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenAccordionId((prevId) => (prevId === id ? null : id));
  };

  
  const guaranteeTypes = [
    {
      id: 1,
      title: "Կանխավճարային երաշխիք",
      subtitle: "(Advance Payment Guarantee)",
      description: (
        <>
          <p className="mb-2">
            Տրվում է այն դեպքերում, երբ գնորդը (Buyer) մատակարարին (Seller)
            տրամադրում է կանխավճար մինչև ապրանքի մատակարարումը կամ ծառայության
            մատուցումը:
          </p>
          <p>
            Երաշխիքը ապահովում է կանխավճարի վերադարձը բենեֆիցիարին, եթե դիմողը
            չի կատարում հիմնական պայմանագրով նախատեսված իր պարտավորությունները:
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Պարտավորությունների կատարման երաշխիք",
      subtitle: "(Performance Guarantee / Performance Bond)",
      description: (
        <>
          <p className="mb-2">
            Տրվում է պայմանագրով նախատեսված պարտավորությունների պատշաճ կատարումն
            ապահովելու նպատակով:
          </p>
          <p>
            Բանկը պարտավորվում է վճարել բենեֆիցիարին երաշխիքով սահմանված գումարը
            պայմանագրային պարտավորությունների չկատարման կամ ոչ պատշաճ կատարման
            դեպքում:
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Մրցութային երաշխիք",
      subtitle: "(Tender / Bid Guarantee)",
      description: (
        <p>
          Տրվում է մրցույթի մասնակցի կողմից մրցութային պայմանների խախտումը կամ
          հաղթելուց հետո պայմանագիր կնքելուց հրաժարվելը ապահովելու նպատակով:
        </p>
      ),
    },
  ];

  
  const accordionItems = [
    { id: 1, title: "Միջազգային Բանկային Երաշխիքներ" },
    { id: 2, title: "Տեղական Բանկային Երաշխիքներ" },
    {
      id: 3,
      title:
        "Առաջնակարգ ապահովվածությամբ առանց վարկունակության գնահատման Բանկային երաշխիքներ",
    },
    {
      id: 4,
      title:
        "Դրամական հոսքերով ապահովված առանց վարկունակության գնահատման Բանկային երաշխիքներ",
    },
    { id: 5, title: "Անշարժ գույքով ապահովված Բանկային երաշխիքներ" },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-800 leading-relaxed overflow-x-hidden">
      <div className="max-w-5xl mx-auto p-6 md:p-10 pt-12">
        {}
        <h1 className="text-[32px] font-bold text-gray-900 mb-10 tracking-tight">
          Երաշխիք
        </h1>

        {}
        <section className="mb-14 text-[15px]">
          <p className="mb-4">
            Բանկային երաշխիքը անկախ, անվերապահ և գրավոր պարտավորություն է, որը
            բանկը ստանձնում է իր հաճախորդի (Applicant) հանձնարարությամբ հօգուտ
            երրորդ կողմի (Beneficiary) վճարելու երաշխիքով սահմանված գումարը
            ներկայացված պահանջի դիմաց, եթե պահանջը համապատասխանում է երաշխիքի
            պայմաններին:
          </p>
          <p>
            Բանկային երաշխիքները, որպես կանոն, կարգավորվում են{" "}
            <a
              href="#"
              className="text-purple-700 hover:text-purple-900 underline transition-colors"
            >
              Միջազգային առևտրի պալատի (ICC) կողմից ընդունված URDG 758
              կանոններով
            </a>
            , եթե երաշխիքում այլ բան նախատեսված չէ:
          </p>
        </section>

        {}
        <h2 className="text-xl font-bold text-purple-800 mb-8">
          Բանկային երաշխիքների հիմնական տեսակները
        </h2>

        {}
        <div className="space-y-8 mb-16">
          {guaranteeTypes.map((guarantee) => (
            <div key={guarantee.id} className="flex flex-col">
              <div className="flex items-center mb-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mr-3 mt-1"></span>
                <h3 className="text-lg font-semibold text-purple-800">
                  {guarantee.title}
                </h3>
              </div>
              <div className="ml-5 bg-white border border-gray-50 shadow-[0_4px_20px_-4px_rgba(106,13,173,0.06)] rounded-xl p-5 md:p-6">
                <span className="block italic text-gray-500 text-sm mb-3">
                  {guarantee.subtitle}
                </span>
                <div className="text-[14px] text-gray-700">
                  {guarantee.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        <section>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="space-y-4">
            {accordionItems.map((item) => {
              const isOpen = openAccordionId === item.id;

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl transition-all duration-300 border shadow-sm
                    ${isOpen ? "border-purple-600 shadow-md" : "border-gray-200"}`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center p-5 text-left focus:outline-none"
                  >
                    <div
                      className={`mr-4 transition-transform duration-300 text-purple-700 
                      ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <span
                      className={`font-semibold text-[15px] ${isOpen ? "text-gray-900" : "text-gray-700"}`}
                    >
                      {item.title}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out 
                      ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 pt-0">
                        {}
                        <div className="border border-gray-100 rounded-lg overflow-hidden mt-2">
                          <table className="w-full text-sm text-left text-gray-600">
                            <tbody>
                              <tr className="border-b border-gray-100">
                                <td className="py-3 px-4 w-12 text-center text-gray-400">
                                  1.
                                </td>
                                <td className="py-3 px-4 border-r border-gray-100 font-medium">
                                  Արժույթ
                                </td>
                                <td className="py-3 px-4">
                                  ԱՄՆ դոլար, Եվրո, ՌԴ ռուբլի կամ Բանկի համար
                                  ընդունելի այլ արտարժույթ
                                </td>
                              </tr>
                              <tr className="border-b border-gray-100">
                                <td className="py-3 px-4 w-12 text-center text-gray-400">
                                  2.
                                </td>
                                <td className="py-3 px-4 border-r border-gray-100 font-medium">
                                  Գումարային սահմանաչափ
                                </td>
                                <td className="py-3 px-4">Պայմանագրային</td>
                              </tr>
                              <tr className="border-b border-gray-100 bg-gray-50/50">
                                <td className="py-3 px-4 w-12 text-center text-gray-400">
                                  3.
                                </td>
                                <td className="py-3 px-4 border-r border-gray-100 font-medium">
                                  Ժամկետներ
                                </td>
                                <td className="py-3 px-4">Պայմանագրային</td>
                              </tr>
                              <tr className="border-b border-gray-100">
                                <td className="py-3 px-4 w-12 text-center text-gray-400">
                                  4.
                                </td>
                                <td className="py-3 px-4 border-r border-gray-100 font-medium">
                                  Երաշխիքի թողարկում և/կամ հաստատում
                                </td>
                                <td className="py-3 px-4">Պայմանագրային</td>
                              </tr>
                              <tr className="border-b border-gray-100 bg-gray-50/50">
                                <td className="py-3 px-4 w-12 text-center text-gray-400">
                                  5.
                                </td>
                                <td className="py-3 px-4 border-r border-gray-100 font-medium">
                                  Երաշխիքի պայմանների փոփոխում
                                </td>
                                <td className="py-3 px-4">
                                  0.15%, նվազ. 50,000 ՀՀ դրամ
                                </td>
                              </tr>
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
        </section>
      </div>
    </div>
  );
};

export default GuaranteePage;
