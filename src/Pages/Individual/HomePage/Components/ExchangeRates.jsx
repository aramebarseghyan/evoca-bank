import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

// Импортируем флаги
import usaFlag from "../../../../assets/partners/usaFlag.png";
import europeFlag from "../../../../assets/partners/europeFlag.webp";
import russiaFlag from "../../../../assets/partners/russiaFlag.jpg";

const ExchangeRates = () => {
  const [activeTab, setActiveTab] = useState("Կանխիկ");
  const [haveValue, setHaveValue] = useState("");
  const [getValue, setGetValue] = useState("");

  // Состояния для данных из Firebase
  const [firebaseCash, setFirebaseCash] = useState([]);
  const [firebaseNonCash, setFirebaseNonCash] = useState([]);
  const [firebaseGold, setFirebaseGold] = useState([]);
  const [rubDepositRate, setRubDepositRate] = useState("10%");

  // Загрузка данных из Firebase в реальном времени
  useEffect(() => {
    const unsubCash = onSnapshot(doc(db, "rates", "cash"), (docSnap) => {
      if (docSnap.exists()) setFirebaseCash(docSnap.data().items || []);
    });

    const unsubNonCash = onSnapshot(doc(db, "rates", "nonCash"), (docSnap) => {
      if (docSnap.exists()) setFirebaseNonCash(docSnap.data().items || []);
    });

    const unsubGold = onSnapshot(doc(db, "rates", "gold"), (docSnap) => {
      if (docSnap.exists()) setFirebaseGold(docSnap.data().items || []);
    });

    const unsubRub = onSnapshot(doc(db, "rates", "rubDeposit"), (docSnap) => {
      if (docSnap.exists() && docSnap.data().items?.[0]) {
        setRubDepositRate(docSnap.data().items[0].rate);
      }
    });

    return () => {
      unsubCash();
      unsubNonCash();
      unsubGold();
      unsubRub();
    };
  }, []);

  // Функция для подстановки флагов валютам
  const getFlag = (currency) => {
    if (currency === "USD") return usaFlag;
    if (currency === "EUR") return europeFlag;
    if (currency === "RUB") return russiaFlag;
    return usaFlag;
  };

  const rawRates = activeTab === "Անկանխիկ" ? firebaseNonCash : firebaseCash;
  const currentRates = rawRates.map((item) => ({
    ...item,
    flag: getFlag(item.currency),
  }));

  const tabsList = [
    "Կանխիկ",
    "Անկանխիկ",
    "Ոսկու փոխարժեք",
    "Ռուբլու կանխիկ մուտք",
  ];

  return (
    <div className="w-full select-none">
      {/* Текст предупреждения над табами (увеличен для xl / 2xl) */}
      <div className="mb-6 xl:mb-8">
        <p className="text-[#222222] text-[15px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[1.5] font-bold text-left">
          20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման
          դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից
          որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի
          փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը
          հաստատող փաստաթուղթ:
        </p>
      </div>

      {/* Табы сверху */}
      <div className="flex flex-col items-start gap-2 mb-4 xl:mb-6">
        {/* Первая строка табов */}
        <div className="flex flex-wrap items-center gap-2 xl:gap-3">
          {tabsList.slice(0, 3).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                textShadow:
                  activeTab === tab ? "0 1px 2px rgba(0,0,0,0.08)" : "none",
              }}
              className={`py-2 px-5 xl:py-2.5 xl:px-6 text-[15px] xl:text-[16px] 2xl:text-[18px] font-bold rounded-2xl transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-[#222222] shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  : "text-[#8c939f] hover:text-[#222222] hover:bg-white/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Вторая строка: «Ռուբլու կանխիկ մուտք» */}
        <div className="flex flex-wrap items-center gap-2 xl:gap-3">
          {tabsList.slice(3).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                textShadow:
                  activeTab === tab ? "0 1px 2px rgba(0,0,0,0.08)" : "none",
              }}
              className={`py-2 px-5 xl:py-2.5 xl:px-6 text-[15px] xl:text-[16px] 2xl:text-[18px] font-bold rounded-2xl transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-[#222222] shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  : "text-[#8c939f] hover:text-[#222222] hover:bg-white/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Основной контейнер виджета */}
      <div
        className="bg-white rounded-3xl p-5 xl:p-7 2xl:p-8 border border-[#f5f5f5]"
        style={{
          boxShadow:
            "0 10px 40px rgba(111,0,255,0.06), 0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.3fr_1fr] gap-6 xl:gap-8 items-start">
          {/* Левая колонка: Таблицы курсов */}
          <div>
            {(activeTab === "Կանխիկ" || activeTab === "Անկանխիկ") && (
              <>
                <div className="flex justify-between items-center px-1 mb-2">
                  <div className="w-[80px] xl:w-[100px]"></div>
                  <div className="flex flex-1 justify-end gap-10 xl:gap-14 2xl:gap-16 text-[13px] xl:text-[15px] 2xl:text-[16px] text-[#a8aeb7] font-medium pr-2">
                    <span>Առք</span>
                    <span>Վաճառք</span>
                  </div>
                </div>

                <div className="flex flex-col w-full border-t border-[#f0f2f5]">
                  {currentRates.map((rate, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 xl:py-5 border-b border-[#f0f2f5] hover:bg-[#fafafa] transition-colors duration-200 cursor-pointer px-1 rounded-xl"
                    >
                      <div className="flex items-center gap-3 xl:gap-4 w-[80px] xl:w-[100px]">
                        <img
                          src={rate.flag}
                          alt={rate.currency}
                          className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 rounded-full object-cover shadow-sm"
                        />
                        <span className="font-bold text-[#222222] text-[15px] xl:text-[17px] 2xl:text-[19px]">
                          {rate.currency}
                        </span>
                      </div>
                      <div className="flex flex-1 justify-end items-center gap-6 xl:gap-10 2xl:gap-12 pr-1">
                        <div className="flex items-center justify-end w-[60px] xl:w-[75px] gap-1.5">
                          <span
                            className={
                              rate.buyTrend === "down"
                                ? "text-[#FF3B30] text-[10px] xl:text-[12px]"
                                : "text-[#34C759] text-[10px] xl:text-[12px]"
                            }
                          >
                            {rate.buyTrend === "down" ? "▼" : "▲"}
                          </span>
                          <span className="font-bold text-[#222222] text-[16px] xl:text-[18px] 2xl:text-[20px]">
                            {rate.buy}
                          </span>
                        </div>
                        <div className="flex items-center justify-end w-[60px] xl:w-[75px] gap-1.5">
                          <span
                            className={
                              rate.sellTrend === "down"
                                ? "text-[#FF3B30] text-[10px] xl:text-[12px]"
                                : "text-[#34C759] text-[10px] xl:text-[12px]"
                            }
                          >
                            {rate.sellTrend === "down" ? "▼" : "▲"}
                          </span>
                          <span className="font-bold text-[#222222] text-[16px] xl:text-[18px] 2xl:text-[20px]">
                            {rate.sell}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center py-4 xl:py-5 px-1">
                  <span className="text-[13px] xl:text-[15px] 2xl:text-[16px] text-[#a8aeb7] font-medium">
                    Թարմացվել է՝ 03.08.26
                  </span>
                  <button className="text-[#6F00FF] font-bold text-[14px] xl:text-[16px] 2xl:text-[17px] hover:underline cursor-pointer">
                    Այլ արժույթներ
                  </button>
                </div>
              </>
            )}

            {activeTab === "Ոսկու փոխարժեք" && (
              <div>
                <div className="flex justify-between items-start px-1 mb-3">
                  <span className="text-[13px] xl:text-[15px] 2xl:text-[16px] text-[#a8aeb7] font-medium">
                    Հարգ
                  </span>
                  <span className="text-[13px] xl:text-[15px] 2xl:text-[16px] text-[#a8aeb7] font-medium text-right max-w-[180px] xl:max-w-[220px]">
                    Սակագին (Արժեքը ՀՀ Դրամով 1 գրամի համար)
                  </span>
                </div>
                <div className="flex flex-col w-full border-t border-[#f0f2f5]">
                  {firebaseGold.map((gold, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3.5 xl:py-4.5 border-b border-[#f0f2f5] px-1"
                    >
                      <span className="font-bold text-[#222222] text-[16px] xl:text-[18px] 2xl:text-[20px]">
                        {gold.purity}
                      </span>
                      <span className="font-bold text-[#222222] text-[16px] xl:text-[18px] 2xl:text-[20px]">
                        {gold.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Ռուբլու կանխիկ մուտք" && (
              <div>
                <div className="flex justify-between items-center px-1 mb-3">
                  <span className="text-[13px] xl:text-[15px] 2xl:text-[16px] text-[#a8aeb7] font-medium">
                    Արժույթ
                  </span>
                  <span className="text-[13px] xl:text-[15px] 2xl:text-[16px] text-[#a8aeb7] font-medium">
                    Սակագին
                  </span>
                </div>
                <div className="flex flex-col w-full border-t border-[#f0f2f5]">
                  <div className="flex items-center justify-between py-4 xl:py-5 border-b border-[#f0f2f5] px-1">
                    <span className="font-bold text-[#222222] text-[16px] xl:text-[18px] 2xl:text-[20px]">
                      RUB
                    </span>
                    <span className="font-bold text-[#222222] text-[16px] xl:text-[18px] 2xl:text-[20px]">
                      {rubDepositRate}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Правая колонка: Блок конвертера */}
          <div className="flex flex-col gap-4 xl:gap-6 border-t md:border-t-0 md:border-l border-[#f0f2f5] pt-4 md:pt-0 md:pl-6 xl:pl-8">
            <div className="flex flex-col gap-1.5 xl:gap-2">
              <span className="text-[13px] xl:text-[15px] 2xl:text-[16px] text-[#a8aeb7] font-medium">
                Ունեմ
              </span>
              <div
                className="flex items-center justify-between border border-[#e5e9f0] rounded-2xl px-4 py-3 xl:py-3.5 2xl:py-4 bg-white focus-within:border-[#6F00FF] transition-colors"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}
              >
                <input
                  type="text"
                  placeholder="0"
                  value={haveValue}
                  onChange={(e) => setHaveValue(e.target.value)}
                  className="w-full outline-none text-[16px] xl:text-[18px] 2xl:text-[20px] font-bold text-[#222222] bg-transparent"
                />
                <div className="flex items-center gap-1 text-[15px] xl:text-[17px] 2xl:text-[18px] font-bold text-[#222222] cursor-pointer pl-3 border-l border-[#e5e9f0]">
                  <span>AMD</span>
                  <span className="text-xs xl:text-sm text-[#a8aeb7]">▼</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 xl:gap-2">
              <span className="text-[13px] xl:text-[15px] 2xl:text-[16px] text-[#a8aeb7] font-medium">
                Կստանամ
              </span>
              <div
                className="flex items-center justify-between border border-[#e5e9f0] rounded-2xl px-4 py-3 xl:py-3.5 2xl:py-4 bg-white focus-within:border-[#6F00FF] transition-colors"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}
              >
                <input
                  type="text"
                  placeholder="0"
                  value={getValue}
                  onChange={(e) => setGetValue(e.target.value)}
                  className="w-full outline-none text-[16px] xl:text-[18px] 2xl:text-[20px] font-bold text-[#222222] bg-transparent"
                />
                <div className="flex items-center gap-1 text-[15px] xl:text-[17px] 2xl:text-[18px] font-bold text-[#222222] cursor-pointer pl-3 border-l border-[#e5e9f0]">
                  <span>USD</span>
                  <span className="text-xs xl:text-sm text-[#a8aeb7]">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRates;
