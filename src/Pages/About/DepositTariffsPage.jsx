import React, { useState } from "react";

const DepositTariffsPage = () => {
  const [activeTab, setActiveTab] = useState("classical");

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Боковое меню (Сайдбар) */}
        <div className="w-full lg:w-[280px] shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between text-purple-700 font-semibold mb-4 px-2">
              <span>Ավանդների սակագներ</span>
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
                <button
                  onClick={() => setActiveTab("classical")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === "classical"
                      ? "bg-purple-50 text-purple-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Դասական ավանդ
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("online")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === "online"
                      ? "bg-purple-50 text-purple-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Evoca Online Ավանդ
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("children")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === "children"
                      ? "bg-purple-50 text-purple-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Մանկական ավանդ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex-1">
          {/* 1. Դասական ավանդ */}
          {activeTab === "classical" && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Դասական ավանդ
                </h2>
              </div>

              {/* Таблица ставок Classical */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gray-50/70 border-b border-gray-200 font-semibold text-gray-500 uppercase tracking-wider">
                        <th className="py-4 px-4 w-[18%]">
                          Նվազագույն գումար և արժույթ
                        </th>
                        <th className="py-4 px-4 border-l border-gray-200 w-[22%]">
                          Տոկոսների վճարման եղանակը
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          31 - 90 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          91 - 180 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          181 - 270 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          271 - 365 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          366 - 549 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          550 - 730 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          731 - 1825 օր
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-800">
                      {/* AMD */}
                      <tr>
                        <td
                          rowSpan="3"
                          className="py-4 px-4 font-semibold text-gray-900 border-r border-gray-200 align-middle"
                        >
                          100,000 ՀՀ դրամ
                        </td>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Տոկոսները ժամկետի վերջում վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          6.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          7.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          8.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          10.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          10.50 %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Ամսական տոկոսների վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          6.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          7.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          10.00 %
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200">
                        <td className="py-3 px-4 text-gray-600">
                          Տոկոսները եռամսյա վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          6.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          7.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          10.00 %
                        </td>
                      </tr>

                      {/* USD */}
                      <tr>
                        <td
                          rowSpan="3"
                          className="py-4 px-4 font-semibold text-gray-900 border-r border-gray-200 align-middle"
                        >
                          200 ԱՄՆ դոլար
                        </td>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Տոկոսները ժամկետի վերջում վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.00 %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Ամսական տոկոսների վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.75 %
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200">
                        <td className="py-3 px-4 text-gray-600">
                          Տոկոսները եռամսյա վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.75 %
                        </td>
                      </tr>

                      {/* EUR */}
                      <tr>
                        <td
                          rowSpan="3"
                          className="py-4 px-4 font-semibold text-gray-900 border-r border-gray-200 align-middle"
                        >
                          200 Եվրո
                        </td>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Տոկոսները ժամկետի վերջում վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.35 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.00 %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Ամսական տոկոսների վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.75 %
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200">
                        <td className="py-3 px-4 text-gray-600">
                          Տոկոսները եռամսյա վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.75 %
                        </td>
                      </tr>

                      {/* RUB */}
                      <tr>
                        <td
                          rowSpan="2"
                          className="py-4 px-4 font-semibold text-gray-900 border-r border-gray-200 align-middle"
                        >
                          30,000 ՌԴ ռուբլի
                        </td>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Տոկոսները ժամկետի վերջում վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          6.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600">
                          Ամսական տոկոսների վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 2. Evoca Online Ավանդ */}
          {activeTab === "online" && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Evoca Online Ավանդ
                </h2>
                <p className="text-gray-600 text-sm">
                  Բարձր եկամտաբերություն և արագ ձևակերպում առցանց
                </p>
              </div>

              {/* Таблица ставок Evoca Online */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gray-50/70 border-b border-gray-200 font-semibold text-gray-500 uppercase tracking-wider">
                        <th className="py-4 px-4 w-[18%]">
                          Նվազագույն գումար և արժույթ
                        </th>
                        <th className="py-4 px-4 border-l border-gray-200 w-[22%]">
                          Տոկոսների վճարման եղանակը
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          31 - 90 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          91 - 180 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          181 - 270 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          271 - 365 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          366 - 549 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          550 - 730 օր
                        </th>
                        <th className="py-4 px-3 border-l border-gray-200 text-center">
                          731 - 1825 օր
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-800">
                      {/* AMD */}
                      <tr>
                        <td
                          rowSpan="3"
                          className="py-4 px-4 font-semibold text-gray-900 border-r border-gray-200 align-middle"
                        >
                          100,000 ՀՀ դրամ
                        </td>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Տոկոսները ժամկետի վերջում վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          6.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          7.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          8.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          10.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          10.75 %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Ամսական տոկոսների վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          6.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          7.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          10.25 %
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200">
                        <td className="py-3 px-4 text-gray-600">
                          Տոկոսները եռամսյա վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          6.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          7.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          9.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          10.25 %
                        </td>
                      </tr>

                      {/* USD */}
                      <tr>
                        <td
                          rowSpan="3"
                          className="py-4 px-4 font-semibold text-gray-900 border-r border-gray-200 align-middle"
                        >
                          200 ԱՄՆ դոլար
                        </td>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Տոկոսները ժամկետի վերջում վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.25 %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Ամսական տոկոսների վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.00 %
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200">
                        <td className="py-3 px-4 text-gray-600">
                          Տոկոսները եռամսյա վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          4.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          5.00 %
                        </td>
                      </tr>

                      {/* EUR */}
                      <tr>
                        <td
                          rowSpan="3"
                          className="py-4 px-4 font-semibold text-gray-900 border-r border-gray-200 align-middle"
                        >
                          200 Եվրո
                        </td>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Տոկոսները ժամկետի վերջում վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.35 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.25 %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                          Ամսական տոկոսների վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.00 %
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200">
                        <td className="py-3 px-4 text-gray-600">
                          Տոկոսները եռամսյա վճարմամբ
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 text-gray-400">
                          -
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          0.75 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.25 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          1.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.00 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          2.50 %
                        </td>
                        <td className="py-3 px-3 text-center border-l border-gray-200 font-medium">
                          3.00 %
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 3. Մանկական ավանդ */}
          {activeTab === "children" && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Մանկական ավանդ
                </h2>
              </div>

              {/* Таблица ставок для Малышового депозита */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gray-50/70 border-b border-gray-200 font-semibold text-gray-500 uppercase tracking-wider">
                        <th className="py-4 px-6 w-[50%]">Նվազագույն գումար</th>
                        <th className="py-4 px-6 border-l border-gray-200 w-[50%]">
                          Տարեկան տոկոսադրույքը
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-800">
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          100,000 ՀՀ դրամ
                        </td>
                        <td className="py-4 px-6 border-l border-gray-200 font-medium text-purple-700">
                          9.5 %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          250 ԱՄՆ դոլար
                        </td>
                        <td className="py-4 px-6 border-l border-gray-200 font-medium text-purple-700">
                          4.5 %
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Условия */}
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed px-1">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700 shrink-0">
                    1.
                  </span>
                  <p>
                    Ավանդն ընդունվում է ֆիզիկական անձանցից, հօգուտ երեխաների`
                    Ավանդ ներդնելու պայմանով 2 տարուց մինչև երեխայի 18 տարին
                    լրանալը։
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700 shrink-0">
                    2.
                  </span>
                  <p>
                    Որպես ավանդատու կարող են հանդես գալ ինչպես երեխաների
                    օրինական ներկայացուցիչները (ծնողները, խնամակալները), այնպես
                    էլ երրորդ անձիք։
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700 shrink-0">
                    3.
                  </span>
                  <p>
                    Տոկոսագումարների վճարումը կամ կապիտալացումը իրականացվում է
                    ամենամյա պարբերականությամբ։
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700 shrink-0">
                    4.
                  </span>
                  <p>
                    Ավանդը կարող է համալրվել (ավելացվել) սկսված նվազագույնը
                    40,000 ՀՀ դրամից կամ 100 ԱՄՆ դոլարից։ Մեկ ամսվա ընթացքում
                    համալրումների ընդհանուր գումարը 5,000,000 ՀՀ դրամը կամ
                    10,000 ԱՄՆ դոլարը գերազանցելու դեպքում անհրաժեշտ է Բանկի
                    Վարչության որոշումը: Ավանդային պայմանագրի գործողության
                    վերջին 3 (երեք) ամիսների ընթացքում ավանդի գումարի համալրում
                    չի թույլատրվում։
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700 shrink-0">
                    5.
                  </span>
                  <p>
                    Հօգուտ երեխաների բացված ժամկետային ավանդները տնօրինվում են
                    երեխայի օրինական ներկայացուցիչների կամ երրորդ անձանց կողմից,
                    օրենքով նախատեսված դեպքերում մինչև երեխայի 18 տարին լրանալը։
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700 shrink-0">
                    6.
                  </span>
                  <p>
                    Կնքման օրից սկսված 2 տարվա ընթացքում պայմանագիրը
                    դադարեցնելու դեպքում իրականացվում է Ավանդի տոկոսագումարների
                    վերահաշվարկ` ՀՀ դրամով 0.5%, ԱՄՆ դոլարը 0.1% տարեկան
                    տոկոսադրույքով։ 2 տարին լրանալուց հետո պահպանվում են մինչև
                    վերջին կապիտալացումը (վճարումը) հետո ընկած ժամանակահատվածի
                    համար հաշվարկված տոկոսագումարները, իսկ կապիտալացումից
                    (վճարումից) հետո ընկած ժամանակահատվածի համար կատարվում է
                    տոկոսագումարների վերահաշվարկ ՀՀ դրամ՝ 0.5%, ԱՄՆ դոլար՝ 0.1%
                    տարեկան տոկոսադրույքով։
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700 shrink-0">
                    7.
                  </span>
                  <p>
                    Պայմանագրի կնքման օրվանից 2 տարի հետո և այնուհետև
                    յուրաքանչյուր հաջորդ տարի Ավանդի տոկոսադրույքը վերանայվում
                    է՝ հիմք ընդունելով վերանայման պահին Բանկում գործող «Դասական»
                    Ավանդատեսակի 366 օր ժամկետի համար սահմանված համապատասխան
                    արժույթի տոկոսադրույքը։
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700 shrink-0">
                    8.
                  </span>
                  <p>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում։</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepositTariffsPage;
