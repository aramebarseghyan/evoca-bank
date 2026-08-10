import React, { useState } from "react";

const cardTypes = [
  { id: "payment-cards", title: "Վճարային քարտեր" },
  { id: "digital", title: "Visa Digital քարտեր" },
  { id: "vision", title: "Visa Vision քարտեր" },
  { id: "arca", title: "ArCa Classic քարտեր" },
  { id: "social", title: "Սոցիալական հաշվի կենսաթոշակային քարտեր" },
  { id: "mc-world", title: "Mastercard World Digital քարտեր" },
  { id: "gift", title: "Evoca Gift Card" },
  { id: "mc-digital", title: "Mastercard Digital Gift Card" },
  { id: "unionpay", title: "UnionPay քարտեր" },
  { id: "travel", title: "Evoca Travel Card" },
  { id: "4u", title: "4U.am Gift card" },
  { id: "homplex", title: "Homplex Gift card" },
  { id: "dalma", title: "Dalma Gift Card" },
  { id: "garage", title: "Garage Masters' Mall Gift Card" },
  { id: "rio", title: "Rio Gift Card" },
  { id: "myler", title: "MyLer Gift Card" },
  { id: "infinite", title: "Visa Infinite քարտեր" },
  { id: "platinum", title: "Visa Platinum վճարային քարտեր" },
];

const CardTariffsPage = () => {
  const [activeCard, setActiveCard] = useState("payment-cards");

  // Функция для генерации уникальных данных под каждый клик, чтобы таблица менялась
  const getTableData = (id) => {
    switch (id) {
      case "digital":
        return {
          subtitle: "Visa Digital քարտեր",
          issuance: "0",
          annual1: "2,000 ՀՀ դրամ",
          monthly1: "200 ՀՀ դրամ",
          annual2: "8,000 ՀՀ դրամ",
          monthly2: "800 ՀՀ դրամ",
          business: "5,000 ՀՀ դրամ",
          express: "Անδվճար (Էլեկտրոնային)",
        };
      case "vision":
        return {
          subtitle: "Visa Vision քարտեր",
          issuance: "1,000 ՀՀ դրամ",
          annual1: "4,000 ՀՀ դրամ",
          monthly1: "400 ՀՀ դրամ",
          annual2: "12,000 ՀՀ դրամ",
          monthly2: "1,200 ՀՀ դրամ",
          business: "8,000 ՀՀ դրամ",
          express: "5,000 ՀՀ դրամ",
        };
      case "arca":
        "arca";
        return {
          subtitle: "ArCa Classic քարտեր",
          issuance: "0",
          annual1: "3,000 ՀՀ դրամ",
          monthly1: "300 ՀՀ դրամ",
          annual2: "10,000 ՀՀ դրամ",
          monthly2: "1,000 ՀՀ դրամ",
          business: "6,000 ՀՀ դրամ",
          express: "4,000 ՀՀ դրամ",
        };
      case "infinite":
        return {
          subtitle: "Visa Infinite քարտեր",
          issuance: "25,000 ՀՀ դրամ",
          annual1: "120,000 ՀՀ դրամ",
          monthly1: "10,000 ՀՀ դրամ",
          annual2: "200,000 ՀՀ դրամ",
          monthly2: "18,000 ՀՀ դրամ",
          business: "150,000 ՀՀ դրամ",
          express: "20,000 ՀՀ դրամ",
        };
      default:
        return {
          subtitle:
            cardTypes.find((c) => c.id === id)?.title || "Վճարային քարտեր",
          issuance: "0",
          annual1: "5,000 ՀՀ դրամ",
          monthly1: "MasterCard Standard 500 ՀՀ դրամ",
          annual2: "15,000 ՀՀ դրամ",
          monthly2: "MasterCard Gold 1,500 ՀՀ դրամ",
          business: "10,000 ՀՀ դրամ",
          express: "10,000 ՀՀ դրամ",
        };
    }
  };

  const currentData = getTableData(activeCard);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Боковое меню (Сайдбар) */}
        <div className="w-full lg:w-[280px] shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between text-purple-700 font-semibold mb-4 px-2">
              <span>Քարտեր</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </div>

            <ul className="space-y-1 text-sm max-h-[500px] overflow-y-auto pr-1">
              {cardTypes.map((card) => {
                const isActive = activeCard === card.id;
                return (
                  <li key={card.id}>
                    <button
                      onClick={() => setActiveCard(card.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-purple-50 text-purple-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {card.title}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-1 text-sm">
              <a
                href="#transfers"
                className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
              >
                <span>Փոխանցումներ</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <a
                href="#other"
                className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
              >
                <span>Այլ</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Основной контент: Таблица тарифов */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Միջնորդավճարների սակագները և դրույքները
            </h2>
            <p className="text-gray-600">{currentData.subtitle}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <th className="py-4 px-6 w-2/5">
                      Մատուցվող ծառայություններ
                    </th>
                    <th className="py-4 px-4 border-l border-gray-200 w-1/5">
                      MasterCard Standard / Visa Classic
                    </th>
                    <th className="py-4 px-4 border-l border-gray-200 w-1/5">
                      MasterCard Gold / Visa Gold
                    </th>
                    <th className="py-4 px-4 border-l border-gray-200 w-1/5">
                      Visa Business
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-800">
                  {/* Строка 1 */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      Քարտի տրամադրում
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      {currentData.issuance}
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      {currentData.issuance}
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      {currentData.issuance}
                    </td>
                  </tr>
                  {/* Строка 2: Обслуживание */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      Քարտի սպասարկում
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200 p-0">
                      <div className="flex flex-col">
                        <div className="px-4 py-2.5 border-b border-gray-200 flex justify-between">
                          <span className="text-gray-500">Տարեկան</span>
                          <span className="font-medium">
                            {currentData.annual1}
                          </span>
                        </div>
                        <div className="px-4 py-2.5 flex justify-between">
                          <span className="text-gray-500">Ամսական</span>
                          <span className="font-medium">
                            {currentData.monthly1}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200 p-0">
                      <div className="flex flex-col">
                        <div className="px-4 py-2.5 border-b border-gray-200 flex justify-between">
                          <span className="text-gray-500">Տարեկան</span>
                          <span className="font-medium">
                            {currentData.annual2}
                          </span>
                        </div>
                        <div className="px-4 py-2.5 flex justify-between">
                          <span className="text-gray-500">Ամսական</span>
                          <span className="font-medium">
                            {currentData.monthly2}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      {currentData.business}
                    </td>
                  </tr>
                  {/* Строка 3 */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      Շտապ թողարկում
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      {currentData.express}
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      {currentData.express}
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      {currentData.express}
                    </td>
                  </tr>
                  {/* Строка 4 */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ
                      ռեզիդենտ քաղաքացիների համար:
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">-</td>
                    <td className="py-4 px-4 border-l border-gray-200">-</td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      30,000 ՀՀ դրամ
                    </td>
                  </tr>
                  {/* Строка 5 */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      Visa Business քարտի դեպքում օտարերկրյա քաղաքացիություն
                      ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերերի և
                      իրավաբանական անձանց քարտի տարեկան սպասարկում
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      15,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      45,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      30,000 ՀՀ դրամ
                    </td>
                  </tr>
                  {/* Строка 6 */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      Կից քարտի տրամադրում
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
                  </tr>
                  {/* Строка 7 */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      Կից քարտի տարեկան սպասարկում
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      5,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      10,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      7,000 ՀՀ դրամ
                    </td>
                  </tr>
                  {/* Строка 8 */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      Քարտային հաշվի նվազագույն մնացորդ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
                  </tr>
                  {/* Строка 9 */}
                  <tr>
                    <td
                      className="py-4 px-6 font-medium text-gray-900"
                      colSpan="4"
                    >
                      Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան
                      %
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-10 text-gray-600">
                      մինչև 5 մլն. ՀՀ դրամ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">0%</td>
                    <td className="py-4 px-4 border-l border-gray-200">0%</td>
                    <td className="py-4 px-4 border-l border-gray-200">0%</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-10 text-gray-600">
                      5 մլն. ՀՀ դրամից ավել
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">1%</td>
                    <td className="py-4 px-4 border-l border-gray-200">1%</td>
                    <td className="py-4 px-4 border-l border-gray-200">1%</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-10 text-gray-600">
                      արտարժույթ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">0%</td>
                    <td className="py-4 px-4 border-l border-gray-200">0%</td>
                    <td className="py-4 px-4 border-l border-gray-200">0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTariffsPage;
