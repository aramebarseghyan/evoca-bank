import React, { useState } from "react";

const CardTariffsPage = () => {
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
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#payment-cards"
                  className="block px-3 py-2 rounded-lg bg-purple-50 text-purple-700 font-medium"
                >
                  Վճարային քարտեր
                </a>
              </li>
              <li>
                <a
                  href="#digital"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Visa Digital քարտեր
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Visa Vision քարտեր
                </a>
              </li>
              <li>
                <a
                  href="#arca"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  ArCa Classic քարտեր
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Սոցիալական հաշվի կենսաթոշակային քարտեր
                </a>
              </li>
              <li>
                <a
                  href="#mc-world"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Mastercard World Digital քարտեր
                </a>
              </li>
              <li>
                <a
                  href="#gift"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Evoca Gift Card
                </a>
              </li>
              <li>
                <a
                  href="#mc-digital"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Mastercard Digital Gift Card
                </a>
              </li>
              <li>
                <a
                  href="#unionpay"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  UnionPay քարտեր
                </a>
              </li>
              <li>
                <a
                  href="#travel"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Evoca Travel Card
                </a>
              </li>
              <li>
                <a
                  href="#4u"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  4U.am Gift card
                </a>
              </li>
              <li>
                <a
                  href="#homplex"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Homplex Gift card
                </a>
              </li>
              <li>
                <a
                  href="#dalma"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Dalma Gift Card
                </a>
              </li>
              <li>
                <a
                  href="#garage"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Garage Masters' Mall Gift Card
                </a>
              </li>
              <li>
                <a
                  href="#rio"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Rio Gift Card
                </a>
              </li>
              <li>
                <a
                  href="#myler"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  MyLer Gift Card
                </a>
              </li>
              <li>
                <a
                  href="#infinite"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Visa Infinite քարտեր
                </a>
              </li>
              <li>
                <a
                  href="#platinum"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Visa Platinum վճարային քարտեր
                </a>
              </li>
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
            <p className="text-gray-600">Վճարային քարտեր</p>
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
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
                    <td className="py-4 px-4 border-l border-gray-200">0</td>
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
                          <span className="font-medium">5,000 ՀՀ դրամ</span>
                        </div>
                        <div className="px-4 py-2.5 flex justify-between">
                          <span className="text-gray-500">Ամսական</span>
                          <span className="font-medium">
                            MasterCard Standard 500 ՀՀ դրամ
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200 p-0">
                      <div className="flex flex-col">
                        <div className="px-4 py-2.5 border-b border-gray-200 flex justify-between">
                          <span className="text-gray-500">Տարեկան</span>
                          <span className="font-medium">15,000 ՀՀ դրամ</span>
                        </div>
                        <div className="px-4 py-2.5 flex justify-between">
                          <span className="text-gray-500">Ամսական</span>
                          <span className="font-medium">
                            MasterCard Gold 1,500 ՀՀ դրամ
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      10,000 ՀՀ դրամ
                    </td>
                  </tr>
                  {/* Строка 3 */}
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      Շտապ թողարկում
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      10,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      10,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-4 border-l border-gray-200">
                      10,000 ՀՀ դրամ
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
