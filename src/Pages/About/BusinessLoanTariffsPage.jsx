import React, { useState } from "react";

const BusinessLoanTariffsPage = () => {
  // Список продуктов для левого меню
  const sidebarItems = [
    "Բիզնես վարկ",
    "Վարկային գիծ",
    "Փոքր և միջին բիզնեսի վարկավորում",
    "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
    "Հաշվի վարկավորում",
    "Վարկեր ԳԳՀ - ԷԱ ՓՄՁ-ների համար ծրագրի...",
    "Պարզ բիզնես վարկ",
    "Վարկ՝ ուղղված տնտեսության արդիականացման նպատակային ծրագրի շրջանակում",
    "Evoca GO",
    "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
    "Բանկային երաշխիքներ",
    "Ֆակտորինգային ֆինանսավորում",
    "Աշխատավարձային նախագծի պայմաններ",
    "KFW բանկի կողմից ֆինանսավորվող «Միկրո...»",
    "Փոքր և միջին բիզնեսի վարկավորում Լիզինգ +",
    "Լիզինգ",
  ];

  // Хардкод данных для первой (дефолтной) вкладки, чтобы в точности совпадало со скриншотом
  const defaultBusinessLoanData = [
    {
      parameter: "Արժույթը",
      value: "ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո",
    },
    {
      parameter: "Վարկառուն",
      value:
        "Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք",
    },
    {
      parameter: "Նպատակը",
      value:
        "Բիզնեսի զարգացման, կապիտալ ներդրումների իրականացման, շրջանառու կապիտալում միանվագ ներդրումներ իրականացնելու և այլ նպատակներով",
    },
    {
      parameter: "Սահմանաչափերը ըստ ոլորտների",
      value: (
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
            <ul className="flex-1 list-disc pl-5 space-y-2 text-[#7034E4] marker:text-[#7034E4] pr-4">
              <li>
                <span className="text-gray-800">Արդյունաբերություն</span>
              </li>
              <li>
                <span className="text-gray-800">Շինարարություն</span>
              </li>
              <li>
                <span className="text-gray-800">Տրանսպորտ և կապ</span>
              </li>
              <li>
                <span className="text-gray-800">Առևտուր</span>
              </li>
              <li>
                <span className="text-gray-800">
                  Հանրային սննդի կազմակերպում
                </span>
              </li>
            </ul>
            <div className="flex-1 md:border-l md:border-gray-200 md:pl-4 flex items-center text-gray-800 mt-4 md:mt-0">
              Մինչև 1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ
            </div>
          </div>
          <div className="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
            <ul className="flex-1 list-disc pl-5 space-y-2 text-[#7034E4] marker:text-[#7034E4] pr-4">
              <li>
                <span className="text-gray-800">Գյուղատնտեսություն</span>
              </li>
            </ul>
            <div className="flex-1 md:border-l md:border-gray-200 md:pl-4 flex items-center text-gray-800 mt-4 md:mt-0">
              Մինչև 350,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <ul className="flex-1 list-disc pl-5 space-y-2 text-[#7034E4] marker:text-[#7034E4] pr-4">
              <li>
                <span className="text-gray-800">Այլ ճյուղեր</span>
              </li>
            </ul>
            <div className="flex-1 md:border-l md:border-gray-200 md:pl-4 flex items-center text-gray-800 mt-4 md:mt-0">
              Մինչև 500,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ
            </div>
          </div>
        </div>
      ),
    },
    {
      parameter: "Տրամադրման եղանակը",
      value: (
        <ul className="list-disc pl-5 space-y-2 text-[#7034E4] marker:text-[#7034E4]">
          <li>
            <span className="text-gray-800">Անկանխիկ</span>
          </li>
          <li>
            <span className="text-gray-800">
              Վարկերը կարող են տրամադրվել միանվագ կամ փուլերով
            </span>
          </li>
        </ul>
      ),
    },
    {
      parameter: "Մարման ժամկետ",
      value:
        "Մինչև 10 տարի (վարկավորման ժամկետները սահմանվում են ըստ վարկատեսակների, ինչպես նաև՝ հաշվի առնելով բիզնես գործունեության ոլորտը և վարկավորման նպատակը)",
    },
    {
      parameter: "Մարման եղանակ",
      value: (
        <ul className="list-disc pl-5 space-y-2 text-[#7034E4] marker:text-[#7034E4]">
          <li>
            <span className="text-gray-800">Անուիտետային</span>
          </li>
          <li>
            <span className="text-gray-800">Զսպանակաձև</span>
          </li>
        </ul>
      ),
    },
    {
      parameter: "Արտոնյալ ժամանակաշրջան",
      value: (
        <ul className="list-disc pl-5 space-y-2 text-[#7034E4] marker:text-[#7034E4]">
          <li>
            <span className="text-gray-800">
              Սահմանվում է բիզնեսի առանձնահատկություններից ելնելով
            </span>
          </li>
        </ul>
      ),
    },
    {
      parameter: "Տարեկան տոկոսադրույքը",
      value: (
        <ul className="list-disc pl-5 space-y-2 text-[#7034E4] marker:text-[#7034E4]">
          <li>
            <span className="text-gray-800">
              ՀՀ դրամ՝ սկսած 12%-ից, ԱՄՆ դոլար՝ սկսած 7.5%-ից, Եվրո՝ սկսած 6%-ից
            </span>
          </li>
          <li>
            <span className="text-gray-800">
              Մեկ տարուց ավելի մեր հաճախորդ իրավաբանական անձանց (այդ թվում՝
              ԱՁ-ին) կարող ենք տրամադրել կարճաժամկետ առևտրային վարկեր՝
              աշխատավարձի վճարման, պարտքերի նկատմամբ պարտավորությունների մարման,
              ներմուծված ապրանքների մաքսազերծման նպատակով՝ սկսած 8%
              տոկոսադրույքով, մինչև 180 օր մարման ժամկետով:
            </span>
          </li>
        </ul>
      ),
    },
    {
      parameter:
        "Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր",
      value: (
        <ul className="list-disc pl-5 space-y-2 text-[#7034E4] marker:text-[#7034E4]">
          <li>
            <span className="text-gray-800">
              Ժամկետանց վարկի դեպքում՝ օրական 0.015%-ի չափով
            </span>
          </li>
          <li>
            <span className="text-gray-800">
              Ժամկետանց տոկոսագումարի դեպքում՝ օրական 0.1%-ի չափով
            </span>
          </li>
        </ul>
      ),
    },
  ];

  // Генератор случайных данных (для остальных вкладок при клике)
  const generateRandomData = () => {
    const randomRowCount = Math.floor(Math.random() * 5) + 4;
    const newData = [];
    for (let i = 1; i <= randomRowCount; i++) {
      newData.push({
        parameter: `Պարամետր № ${Math.floor(Math.random() * 1000)}`,
        value: `Պատահական գեներացված տվյալներ՝ արժեքը ${Math.floor(
          Math.random() * 1000000,
        )} ՀՀ դրամ կամ ${Math.floor(Math.random() * 20) + 5}% տարեկան տոկոսադրույք:`,
      });
    }
    return newData;
  };

  const [activeProduct, setActiveProduct] = useState(sidebarItems[0]); // По умолчанию "Բիզնես վարկ"
  const [tableData, setTableData] = useState(defaultBusinessLoanData);

  const handleProductClick = (productName) => {
    setActiveProduct(productName);
    // Если кликнули на первую вкладку - возвращаем красивый дефолтный стейт, иначе генерируем рандомный текст
    if (productName === sidebarItems[0]) {
      setTableData(defaultBusinessLoanData);
    } else {
      setTableData(generateRandomData());
    }
  };

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
        {/* Главный заголовок страницы (H1) */}
        <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-8 leading-snug">
          Վարկեր իրավաբանական անձանց
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Левый сайдбар */}
          <div className="w-full lg:w-[320px] bg-white border border-gray-100 rounded-lg shadow-sm flex-shrink-0 overflow-hidden py-4">
            {/* Заголовок сайдбара */}
            <div className="px-5 mb-2">
              <h3 className="font-bold text-[#7034E4] text-[15px] border-l-4 border-[#7034E4] pl-3 leading-tight">
                Վարկեր իրավաբանական
                <br />
                անձանց
              </h3>
            </div>

            {/* Список продуктов */}
            <ul className="flex flex-col text-[14px] mt-4">
              {sidebarItems.map((item, index) => {
                const isActive = activeProduct === item;
                return (
                  <li
                    key={index}
                    onClick={() => handleProductClick(item)}
                    className={`px-5 py-3 cursor-pointer pl-9 pr-4 transition-all leading-relaxed ${
                      isActive
                        ? "text-[#7034E4] font-bold bg-[#fcfaff]"
                        : "text-gray-600 hover:text-[#7034E4] hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Правая часть: Заголовок выбранного продукта и таблица */}
          <div className="flex-1 w-full overflow-hidden">
            {/* Динамический заголовок продукта (H2) */}
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-6 leading-snug">
              {activeProduct}
            </h2>

            {/* Таблица */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <table className="w-full border-collapse text-left text-[14px]">
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#faf8fd]"}
                    >
                      {/* Левая колонка - Название параметра */}
                      <td className="w-[35%] py-4 px-5 text-gray-700 font-medium border-b border-r border-gray-200 align-top">
                        {row.parameter}
                      </td>
                      {/* Правая колонка - Значение (может содержать HTML/React Node) */}
                      <td className="w-[65%] py-4 px-5 text-gray-800 border-b border-gray-200 align-top leading-relaxed">
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
};

export default BusinessLoanTariffsPage;
