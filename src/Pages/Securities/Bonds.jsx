import React, { useState, useEffect } from "react";

const Bonds = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Данные выпусков облигаций (аккордеоны)
  const bondsData = [
    {
      title: "ՏԱՍՆԵՐԿՈՒՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ",
      table: {
        headers: ["Դաս", "Անվանական արժեկտրոնային"],
        rows: [
          ["Անվանական արժեք", "10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"],
          ["Ընդհանուր ծավալ", "3,000,000,000 ՀՀ դրամ", "15,000,000 ԱՄՆ դոլար"],
          ["Թողարկվող պարտատոմսերի քանակ", "300,000 հատ", "150,000 հատ"],
          ["Շրջանառության ժամկետ", "36 ամիս", "36 ամիս"],
          ["Արժեկտրոնային տարեկան տոկոսադրույք", "10%", "5%"],
          [
            "Արժեկտրոնների վճարման պարբերականություն",
            "Եռամսյակային",
            "Եռամսյակային",
          ],
          ["Տեղաբաշխող", "«Էվոկաբանկ» ԲԲԸ", ""],
        ],
      },
      textInfo:
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:",
    },
    {
      title: "ՏԱՍՆԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ",
      table: {
        headers: ["Դաս", "Անվանական արժեկտրոնային"],
        rows: [
          ["Անվանական արժեք", "10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"],
          ["Ընդհանուր ծավալ", "2,500,000,000 ՀՀ դրամ", "12,000,000 ԱՄՆ դոլար"],
          ["Թողարկվող պարտատոմսերի քանակ", "250,000 հատ", "120,000 հատ"],
          ["Շրջանառության ժամկետ", "36 ամիս", "36 ամիս"],
          ["Արժեկտրոնային տարեկան տոկոսադրույք", "10.5%", "5.2%"],
          [
            "Արժեկտրոնների վճարման պարբերականություն",
            "Եռամսյակային",
            "Եռամսյակային",
          ],
          ["Տեղաբաշխող", "«Էվոկաբանկ» ԲԲԸ", ""],
        ],
      },
      textInfo:
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:",
    },
    {
      title: "ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      table: {
        headers: ["Դաս", "Անվանական արժեկտրոնային"],
        rows: [
          ["Անվանական արժեք", "10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"],
          ["Ընդհանուր ծավալ", "2,000,000,000 ՀՀ դրամ", "10,000,000 ԱՄՆ դոլար"],
          ["Թողարկվող պարտատոմսերի քանակ", "200,000 հատ", "100,000 հատ"],
          ["Շրջանառության ժամկետ", "30 ամիս", "30 ամիս"],
          ["Արժեկտրոնային տարեկան տոկոսադրույք", "10%", "5%"],
          [
            "Արժեկտրոնների վճարման պարբերականություն",
            "Եռամսյակային",
            "Եռամսյակային",
          ],
          ["Տեղաբաշխող", "«Էվոկաբանկ» ԲԲԸ", ""],
        ],
      },
      textInfo:
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:",
    },
    {
      title: "ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      table: {
        headers: ["Դաս", "Անվանական արժեկտրոնային"],
        rows: [
          ["Անվանական արժեք", "10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"],
          ["Ընդհանուր ծավալ", "2,000,000,000 ՀՀ դրամ", "10,000,000 ԱՄՆ դոլար"],
          ["Թողարկվող պարտատոմսերի քանակ", "200,000 հատ", "100,000 հատ"],
          ["Շրջանառության ժամկետ", "30 ամիս", "30 ամիս"],
          ["Արժեկտրոնային տարեկան տոկոսադրույք", "11%", "5%"],
          [
            "Արժեկտրոնների վճարման պարբերականություն",
            "Եռամսյակային",
            "Եռամսյակային",
          ],
          ["Տեղաբաշխող", "«Էվոկաբանկ» ԲԲԸ", ""],
        ],
      },
      textInfo:
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:",
    },
    {
      title: "ԵՐՐՈՐԴ ԵՎ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      table: {
        headers: ["Դաս", "Անվանական արժեկտրոնային"],
        rows: [
          ["Անվանական արժեք", "10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"],
          ["Ընդհանուր ծավալ", "1,500,000,000 ՀՀ դրամ", "5,000,000 ԱՄՆ դոլար"],
          ["Թողարկվող պարտատոմսերի քանակ", "150,000 հատ", "50,000 հատ"],
          ["Շրջանառության ժամկետ", "24 ամիս", "24 ամիս"],
          ["Արժեկտրոնային տարեկան տոկոսադրույք", "10%", "5.5%"],
          [
            "Արժեկտրոնների վճարման պարբերականություն",
            "Եռամսյակային",
            "Եռամսյակային",
          ],
          ["Տեղաբաշխող", "«Էվոկաբանկ» ԲԲԸ", ""],
        ],
      },
      textInfo:
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:",
    },
    {
      title: "ԱՌԱՋԻՆ ԵՎ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      table: {
        headers: ["Դաս", "Անվանական արժեկտրոնային"],
        rows: [
          ["Անվանական արժեք", "10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"],
          ["Ընդհանուր ծավալ", "1,000,000,000 ՀՀ դրամ", "3,000,000 ԱՄՆ դոլար"],
          ["Թողարկվող պարտատոմսերի քանակ", "100,000 հատ", "30,000 հատ"],
          ["Շրջանառության ժամկետ", "12 ամիս", "12 ամիս"],
          ["Արժեկտրոնային տարեկան տոկոսադրույք", "9.5%", "5%"],
          [
            "Արժեկտրոնների վճարման պարբերականություն",
            "Եռամսյակային",
            "Եռամսյակային",
          ],
          ["Տեղաբաշխող", "«Էվոկաբանկ» ԲԲԸ", ""],
        ],
      },
      textInfo:
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:",
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
        {/* 1. Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-16 mb-16 gap-6 lg:gap-0 2xl:ml-[-30px] 2xl:w-[calc(100%+30px)]">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Պարտատոմսեր
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Evocabank-ն հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և
              ստանալ բարձր եկամուտներ: Մենք ցանկանում ենք դառնալ ձեր բարեկեցիկ
              ապագայի մի մասնիկը:
            </p>
          </div>
          <div className="lg:w-[55%] bg-[#F8F6FD] lg:bg-transparent flex items-center justify-center p-6 lg:p-0 rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg"
              alt="Պարտատոմսեր"
              className="w-full h-full object-cover max-h-[450px] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* 2. Main Description Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Առաջին անգամ հայկական ֆինանսական համակարգում{" "}
              <strong className="text-gray-900 font-bold">Evocabank</strong>-ը,
              որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից
              թողարկված պարտատոմսերի օնլայն տեղաբաշխում EvocaTOUCH հավելվածի
              միջոցով:
            </p>
            <p>
              <strong className="text-gray-900 font-bold">Պարտատոմսերը</strong>{" "}
              պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով
              են և ունեն բարձր եկամտաբերություն:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում
                են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված
                չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող
                հիմնադրամ»-ի կողմից:
              </li>
              <li>
                ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված
                եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի
                շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Required Information / Active Bonds Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="border border-[#5D00E0] rounded-2xl p-6 sm:p-8 shadow-sm bg-white mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Պարտատոմսերի թողարկում
              </h3>
              <span className="w-8 h-8 rounded-full bg-[#5D00E0] text-white flex items-center justify-center font-bold">
                ▲
              </span>
            </div>

            <h4 className="text-center text-[#5D00E0] font-bold text-lg md:text-xl mb-6">
              ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
            </h4>

            {/* Table */}
            <div className="overflow-x-auto mb-8 border border-gray-100 rounded-xl">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-600 font-medium w-1/3">Դաս</td>
                    <td className="p-4 text-gray-900 font-bold" colSpan="2">
                      Անվանական արժեկտրոնային
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 text-gray-600 font-medium">
                      Անվանական արժեք
                    </td>
                    <td className="p-4 text-gray-900">10,000 ՀՀ դրամ</td>
                    <td className="p-4 text-gray-900">100 ԱՄՆ դոլար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-600 font-medium">
                      Ընդհանուր ծավալ
                    </td>
                    <td className="p-4 text-gray-900">3,000,000,000 ՀՀ դրամ</td>
                    <td className="p-4 text-gray-900">15,000,000 ԱՄՆ դոլար</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 text-gray-600 font-medium">
                      Թողարկվող պարտատոմսերի քանակ
                    </td>
                    <td className="p-4 text-gray-900">300,000 հատ</td>
                    <td className="p-4 text-gray-900">150,000 հատ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-600 font-medium">
                      Շրջանառության ժամկետ
                    </td>
                    <td className="p-4 text-gray-900">36 ամիս</td>
                    <td className="p-4 text-gray-900">36 ամիս</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 text-gray-600 font-medium">
                      Արժեկտրոնային տարեկան տոկոսադրույք
                    </td>
                    <td className="p-4 text-gray-900">10%</td>
                    <td className="p-4 text-gray-900">5%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-600 font-medium">
                      Արժեկտրոնների վճարման պարբերականություն
                    </td>
                    <td className="p-4 text-gray-900">Եռամսյակային</td>
                    <td className="p-4 text-gray-900">Եռամսյակային</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-600 font-medium">
                      Տեղաբաշխող
                    </td>
                    <td className="p-4 text-gray-900 font-medium" colSpan="2">
                      «Էվոկաբանկ» ԲԲԸ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-sm md:text-base mb-8">
              Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի
              11.03.2022թ. թիվ 1/106 Ա որոշմամբ:
            </p>

            {/* Document Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              <a
                href="#prospectus"
                className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-[#5D00E0] hover:shadow-md transition-all group text-center"
              >
                <span className="text-[#5D00E0] font-bold text-sm mb-4 block group-hover:underline">
                  ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ
                </span>
                <img
                  src="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds.png"
                  alt="Ծրագրային ազդագիր"
                  className="w-20 h-24 object-contain"
                />
              </a>

              <a
                href="#terms-amd"
                className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-[#5D00E0] hover:shadow-md transition-all group text-center"
              >
                <span className="text-[#5D00E0] font-bold text-sm mb-4 block group-hover:underline">
                  ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ
                </span>
                <img
                  src="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds-amd.png"
                  alt="Պայմաններ ՀՀ դրամով"
                  className="w-20 h-24 object-contain"
                />
              </a>

              <a
                href="#terms-usd"
                className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-[#5D00E0] hover:shadow-md transition-all group text-center"
              >
                <span className="text-[#5D00E0] font-bold text-sm mb-4 block group-hover:underline">
                  ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ
                </span>
                <img
                  src="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds-dollar.png"
                  alt="Պայմաններ ԱՄՆ դոլարով"
                  className="w-20 h-24 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Accordions for Previous Issues */}
          <div className="space-y-4">
            {bondsData.map((item, index) => {
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
                        <h4 className="text-center text-[#5D00E0] font-bold text-base md:text-lg mb-6 pt-4">
                          ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
                        </h4>

                        <div className="overflow-x-auto mb-6 border border-gray-100 rounded-xl">
                          <table className="w-full text-left border-collapse text-sm sm:text-base">
                            <tbody>
                              {item.table.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className={`border-b border-gray-100 ${rIdx % 2 === 1 ? "bg-gray-50/50" : ""}`}
                                >
                                  <td className="p-4 text-gray-600 font-medium w-1/3">
                                    {row[0]}
                                  </td>
                                  <td className="p-4 text-gray-900">
                                    {row[1]}
                                  </td>
                                  <td className="p-4 text-gray-900">
                                    {row[2]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <p className="text-gray-700 text-sm md:text-base mb-6">
                          {item.textInfo}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                          <a
                            href="#prospectus"
                            className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-[#5D00E0] hover:shadow-md transition-all group text-center"
                          >
                            <span className="text-[#5D00E0] font-bold text-sm mb-4 block group-hover:underline">
                              ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ
                            </span>
                            <img
                              src="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds.png"
                              alt="Ծրագրային ազդագիր"
                              className="w-20 h-24 object-contain"
                            />
                          </a>

                          <a
                            href="#terms-amd"
                            className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-[#5D00E0] hover:shadow-md transition-all group text-center"
                          >
                            <span className="text-[#5D00E0] font-bold text-sm mb-4 block group-hover:underline">
                              ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ
                            </span>
                            <img
                              src="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds-amd.png"
                              alt="Պայմաններ ՀՀ դրամով"
                              className="w-20 h-24 object-contain"
                            />
                          </a>

                          <a
                            href="#terms-usd"
                            className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-[#5D00E0] hover:shadow-md transition-all group text-center"
                          >
                            <span className="text-[#5D00E0] font-bold text-sm mb-4 block group-hover:underline">
                              ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ
                            </span>
                            <img
                              src="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds-dollar.png"
                              alt="Պայմաններ ԱՄՆ դոլարով"
                              className="w-20 h-24 object-contain"
                            />
                          </a>
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
    </div>
  );
};

export default Bonds;
