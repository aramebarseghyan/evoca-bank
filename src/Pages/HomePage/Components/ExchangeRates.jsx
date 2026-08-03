import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

// Импортируем флаги
import usaFlag from "../../../assets/partners/usaFlag.png";
import europeFlag from "../../../assets/partners/europeFlag.webp";
import russiaFlag from "../../../assets/partners/russiaFlag.jpg";

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
    <section className="w-full bg-[#fcfcfc] py-6 px-4 select-none">
      {/* Текст предупреждения */}
      <div className="mb-6">
        <p className="text-[#222222] text-[15px] sm:text-[16px] leading-[1.6] font-medium text-left">
          20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման
          դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից
          որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի
          փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը
          հաստատող փաստաթուղթ:
        </p>
      </div>

      {/* Табы сверху: перенос «Ռուբլու կանխիկ մուտք» на следующую строку */}
      <div className="flex flex-col items-start gap-2 mb-4">
        {/* Первая строка табов */}
        <div className="flex flex-wrap items-center gap-2">
          {tabsList.slice(0, 3).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                textShadow:
                  activeTab === tab ? "0 1px 2px rgba(0,0,0,0.08)" : "none",
              }}
              className={`py-2 px-5 text-[15px] font-bold rounded-2xl transition-all duration-300 cursor-pointer ${
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
        <div className="flex flex-wrap items-center gap-2">
          {tabsList.slice(3).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                textShadow:
                  activeTab === tab ? "0 1px 2px rgba(0,0,0,0.08)" : "none",
              }}
              className={`py-2 px-5 text-[15px] font-bold rounded-2xl transition-all duration-300 cursor-pointer ${
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

      {/* Основной контейнер виджета: на md и выше снова включаем grid в 2 колонки */}
      <div
        className="bg-white rounded-3xl p-5 border border-[#f5f5f5]"
        style={{
          boxShadow:
            "0 10px 40px rgba(111,0,255,0.06), 0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-start">
          {/* Левая колонка: Таблицы курсов */}
          <div>
            {(activeTab === "Կանխիկ" || activeTab === "Անկանխիկ") && (
              <>
                <div className="flex justify-between items-center px-1 mb-2">
                  <div className="w-[80px]"></div>
                  <div className="flex flex-1 justify-end gap-10 text-[13px] text-[#a8aeb7] font-medium pr-2">
                    <span>Առք</span>
                    <span>Վաճառք</span>
                  </div>
                </div>

                <div className="flex flex-col w-full border-t border-[#f0f2f5]">
                  {currentRates.map((rate, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-[#f0f2f5] hover:bg-[#fafafa] transition-colors duration-200 cursor-pointer px-1 rounded-xl"
                    >
                      <div className="flex items-center gap-3 w-[80px]">
                        <img
                          src={rate.flag}
                          alt={rate.currency}
                          className="w-6 h-6 rounded-full object-cover shadow-sm"
                        />
                        <span className="font-bold text-[#222222] text-[15px]">
                          {rate.currency}
                        </span>
                      </div>
                      <div className="flex flex-1 justify-end items-center gap-6 pr-1">
                        <div className="flex items-center justify-end w-[60px] gap-1.5">
                          <span
                            className={
                              rate.buyTrend === "down"
                                ? "text-[#FF3B30] text-[10px]"
                                : "text-[#34C759] text-[10px]"
                            }
                          >
                            {rate.buyTrend === "down" ? "▼" : "▲"}
                          </span>
                          <span className="font-bold text-[#222222] text-[16px]">
                            {rate.buy}
                          </span>
                        </div>
                        <div className="flex items-center justify-end w-[60px] gap-1.5">
                          <span
                            className={
                              rate.sellTrend === "down"
                                ? "text-[#FF3B30] text-[10px]"
                                : "text-[#34C759] text-[10px]"
                            }
                          >
                            {rate.sellTrend === "down" ? "▼" : "▲"}
                          </span>
                          <span className="font-bold text-[#222222] text-[16px]">
                            {rate.sell}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center py-4 px-1">
                  <span className="text-[13px] text-[#a8aeb7] font-medium">
                    Թարմացվել է՝ 03.08.26
                  </span>
                  <button className="text-[#6F00FF] font-bold text-[14px] hover:underline cursor-pointer">
                    Այլ արժույթներ
                  </button>
                </div>
              </>
            )}

            {activeTab === "Ոսկու փոխարժեք" && (
              <div>
                <div className="flex justify-between items-start px-1 mb-3">
                  <span className="text-[13px] text-[#a8aeb7] font-medium">
                    Հարգ
                  </span>
                  <span className="text-[13px] text-[#a8aeb7] font-medium text-right max-w-[180px]">
                    Սակագին (Արժեքը ՀՀ Դրամով 1 գրամի համար)
                  </span>
                </div>
                <div className="flex flex-col w-full border-t border-[#f0f2f5]">
                  {firebaseGold.map((gold, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3.5 border-b border-[#f0f2f5] px-1"
                    >
                      <span className="font-bold text-[#222222] text-[16px]">
                        {gold.purity}
                      </span>
                      <span className="font-bold text-[#222222] text-[16px]">
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
                  <span className="text-[13px] text-[#a8aeb7] font-medium">
                    Արժույթ
                  </span>
                  <span className="text-[13px] text-[#a8aeb7] font-medium">
                    Սակագին
                  </span>
                </div>
                <div className="flex flex-col w-full border-t border-[#f0f2f5]">
                  <div className="flex items-center justify-between py-4 border-b border-[#f0f2f5] px-1">
                    <span className="font-bold text-[#222222] text-[16px]">
                      RUB
                    </span>
                    <span className="font-bold text-[#222222] text-[16px]">
                      {rubDepositRate}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Правая колонка: Блок конвертера */}
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-[#f0f2f5] pt-4 md:pt-0 md:pl-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-[13px] text-[#a8aeb7] font-medium">
                Ունեմ
              </span>
              <div
                className="flex items-center justify-between border border-[#e5e9f0] rounded-2xl px-4 py-3 bg-white focus-within:border-[#6F00FF] transition-colors"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}
              >
                <input
                  type="text"
                  placeholder="0"
                  value={haveValue}
                  onChange={(e) => setHaveValue(e.target.value)}
                  className="w-full outline-none text-[16px] font-bold text-[#222222] bg-transparent"
                />
                <div className="flex items-center gap-1 text-[15px] font-bold text-[#222222] cursor-pointer pl-3 border-l border-[#e5e9f0]">
                  <span>AMD</span>
                  <span className="text-xs text-[#a8aeb7]">▼</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[13px] text-[#a8aeb7] font-medium">
                Կստանամ
              </span>
              <div
                className="flex items-center justify-between border border-[#e5e9f0] rounded-2xl px-4 py-3 bg-white focus-within:border-[#6F00FF] transition-colors"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}
              >
                <input
                  type="text"
                  placeholder="0"
                  value={getValue}
                  onChange={(e) => setGetValue(e.target.value)}
                  className="w-full outline-none text-[16px] font-bold text-[#222222] bg-transparent"
                />
                <div className="flex items-center gap-1 text-[15px] font-bold text-[#222222] cursor-pointer pl-3 border-l border-[#e5e9f0]">
                  <span>USD</span>
                  <span className="text-xs text-[#a8aeb7]">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;
