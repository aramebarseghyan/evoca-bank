import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import MobilePromo from "../HomePage/Components/MobilePromo";


const tableColumns = [
  "31 - 90\nօր",
  "91 - 180\nօր",
  "181 - 270\nօր",
  "271 - 365\nօր",
  "366 - 549\nօր",
  "550 - 730\nօր",
  "731 - 1825\nօր",
];

const ratesData = [
  {
    currency: "100,000 ՀՀ դրամ",
    rows: [
      {
        method: "Տոկոսները ժամկետի վերջում վճարմամբ",
        rates: [
          "4.50 %",
          "6.00 %",
          "7.00 %",
          "8.00 %",
          "9.50 %",
          "10.00 %",
          "10.50 %",
        ],
      },
      {
        method: "Ամենամսյա տոկոսների վճարմամբ",
        rates: [
          "4.00 %",
          "5.50 %",
          "6.50 %",
          "7.50 %",
          "9.00 %",
          "9.50 %",
          "10.00 %",
        ],
      },
      {
        method: "Տոկոսները եռամսյա վճարմամբ",
        rates: [
          "-",
          "5.50 %",
          "6.50 %",
          "7.50 %",
          "9.00 %",
          "9.50 %",
          "10.00 %",
        ],
      },
    ],
  },
  {
    currency: "200 ԱՄՆ դոլար",
    rows: [
      {
        method: "Տոկոսները ժամկետի վերջում վճարմամբ",
        rates: [
          "0.75 %",
          "2.00 %",
          "2.50 %",
          "3.00 %",
          "4.00 %",
          "4.50 %",
          "5.00 %",
        ],
      },
      {
        method: "Ամենամսյա տոկոսների վճարմամբ",
        rates: [
          "0.50 %",
          "1.75 %",
          "2.25 %",
          "2.75 %",
          "3.75 %",
          "4.25 %",
          "4.75 %",
        ],
      },
      {
        method: "Տոկոսները եռամսյա վճարմամբ",
        rates: [
          "-",
          "1.75 %",
          "2.25 %",
          "2.75 %",
          "3.75 %",
          "4.25 %",
          "4.75 %",
        ],
      },
    ],
  },
  {
    currency: "200 Եվրո",
    rows: [
      {
        method: "Տոկոսները ժամկետի վերջում վճարմամբ",
        rates: [
          "0.35 %",
          "1.00 %",
          "1.50 %",
          "1.75 %",
          "2.00 %",
          "2.50 %",
          "3.00 %",
        ],
      },
      {
        method: "Ամենամսյա տոկոսների վճարմամբ",
        rates: [
          "0.25 %",
          "0.75 %",
          "1.25 %",
          "1.50 %",
          "1.75 %",
          "2.25 %",
          "2.75 %",
        ],
      },
      {
        method: "Տոկոսները եռամսյա վճարմամբ",
        rates: [
          "-",
          "0.75 %",
          "1.25 %",
          "1.50 %",
          "1.75 %",
          "2.25 %",
          "2.75 %",
        ],
      },
    ],
  },
  {
    currency: "30,000 ՌԴ Ռուբլի",
    rows: [
      {
        method: "Տոկոսները ժամկետի վերջում վճարմամբ",
        rates: ["4.00 %", "5.00 %", "5.25 %", "5.50 %", "6.00 %", "-", "-"],
      },
      {
        method: "Ամենամսյա տոկոսների վճարմամբ",
        rates: ["3.75 %", "4.75 %", "5.00 %", "5.25 %", "5.75 %", "-", "-"],
      },
      {
        method: "Տոկոսները եռամսյա վճարմամբ",
        rates: ["-", "4.75 %", "5.00 %", "5.25 %", "5.75 %", "-", "-"],
      },
    ],
  },
];

const DepositDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deposit, setDeposit] = useState(null);
  const [otherDeposits, setOtherDeposits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Ավանդի մասին");
  const [selectedCurrency, setSelectedCurrency] = useState("֏");

  const sliderRef = useRef(null);

  const tabs = ["Ավանդի մասին", "Պայմաններ և սակագներ"];
  const currencies = [
    { symbol: "֏", label: "AMD" },
    { symbol: "$", label: "USD" },
    { symbol: "€", label: "EUR" },
    { symbol: "₽", label: "RUB" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "deposits", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDeposit({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Ավանդը չի գտնվել");
        }

        const querySnapshot = await getDocs(collection(db, "deposits"));
        const allDepositsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredDeposits = allDepositsList.filter(
          (item) => item.id !== id,
        );

        if (filteredDeposits.length > 0) {
          let repeatedList = [];
          for (let i = 0; i < 50; i++) {
            repeatedList = [...repeatedList, ...filteredDeposits];
          }
          setOtherDeposits(repeatedList);
        }
      } catch (error) {
        console.error("Error fetching deposits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (otherDeposits.length > 0 && sliderRef.current) {
      const timeoutId = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2;
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [otherDeposits]);

  const slideLeft = () => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const cardWidth = sliderRef.current.children[0].offsetWidth;
      const gap = 24;
      sliderRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const slideRight = () => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const cardWidth = sliderRef.current.children[0].offsetWidth;
      const gap = 24;
      sliderRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  };

  if (loading) {
    return null;
  }

  if (!deposit) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <p className="text-gray-500 text-lg">Ավանդը չի գտնվել</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#5D00E0] text-white rounded-full text-sm cursor-pointer"
        >
          Հետ գնալ
        </button>
      </div>
    );
  }

  return (
    <div className="w-full font-sans bg-white min-h-screen pb-16">
      {}
      <div className="bg-[#F8F9FA] py-12 px-4 sm:px-8 lg:px-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {deposit.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {deposit.description}
            </p>
          </div>

          <div
            className={`w-full lg:w-[420px] h-64 rounded-2xl flex items-center justify-center overflow-hidden shrink-0 shadow-sm ${
              deposit.imageBgColor || "bg-purple-100"
            }`}
          >
            <img
              src={deposit.image}
              alt={deposit.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 pt-6">
        <div className="flex flex-wrap items-center gap-4 mb-8 xl:-ml-[100px]">
          <button
            onClick={() => navigate("/deposits")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>Վերադառնալ</span>
          </button>

          <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
            <span>Անհատ</span>
            <span>/</span>
            <span>Ավանդներ</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">{deposit.title}</span>
          </div>
        </div>
      </div>

      {}
      <div className="border-b border-gray-200 px-4 sm:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm sm:text-base font-medium transition-colors relative cursor-pointer ${
                activeTab === tab
                  ? "text-[#5D00E0] border-b-2 border-[#5D00E0] font-bold"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 pt-8">
        {activeTab === "Ավանդի մասին" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6 text-[#333333] leading-relaxed text-sm sm:text-xl font-medium xl:-ml-[100px]">
              <p>
                <span className="text-[#5D00E0] font-semibold">
                  Դասական ժամկետային ավանդն
                </span>{" "}
                ընդունվում է և՛ ֆիզիկական, և՛ իրավաբանական անձանցից: Այն կայուն
                բարձր եկամտաբերությամբ կավելացնի Ձեր խնայած գումարը: Կուտակված
                տոկոսագումարները կարող եք ստանալ ինչպես ժամկետի վերջում, այնպես
                էլ Ձեր նախընտրած պարբերականությամբ: Որպես Բանկի ավանդատու՝ Դուք
                կստանաք նաև միջազգային քարտ՝ բացարձակապես անվճար, որին
                ցանկության դեպքում կփոխանցվեն Ձեր ավանդի տոկոսագումարները:
              </p>
              <p>
                Ավանդը ձևակերպվում է շատ արագ՝ Բանկի Գլխամասային գրասենյակում և
                բոլոր մասնաճյուղերում{" "}
                <span className="text-[#5D00E0] font-semibold">
                  /բացառությամբ Էրեբունի մասնաճյուղի/
                </span>
                :
              </p>
              <p>
                Խնայելը{" "}
                <span className="text-[#5D00E0] font-semibold">Evocabank</span>
                -ի հետ դառնում է ավելի արդյունավետ և հաճելի:
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-3xl shadow-sm space-y-6">
              <div className="flex bg-gray-100 p-1 rounded-full justify-between">
                {currencies.map((curr) => (
                  <button
                    key={curr.symbol}
                    onClick={() => setSelectedCurrency(curr.symbol)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${
                      selectedCurrency === curr.symbol
                        ? "bg-[#5D00E0] text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {curr.symbol}
                  </button>
                ))}
              </div>

              <div className="space-y-4 pt-2">
                {deposit.metrics?.map((metric, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-100 pb-4 last:border-none"
                  >
                    {metric.prefix && (
                      <div className="text-gray-400 text-xs mb-1">
                        {metric.prefix}
                      </div>
                    )}
                    <div className="text-[#5D00E0] text-2xl font-bold">
                      {metric.value.includes("֏")
                        ? metric.value.replace("֏", selectedCurrency)
                        : metric.value}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {}
        {activeTab === "Պայմաններ և սակագներ" && (
          <div className="space-y-10 animate-fade-in text-gray-800">
            {}
            <div className="w-full overflow-x-auto rounded-xl border border-[#F0E6FF] shadow-sm">
              <table className="w-full min-w-[900px] border-collapse bg-white text-sm text-center">
                <thead className="text-gray-800 font-semibold bg-gray-50/30">
                  <tr>
                    <th
                      rowSpan={2}
                      className="p-4 border-r border-b border-[#F0E6FF] align-middle w-32"
                    >
                      Նվազագույն
                      <br />
                      գումար և<br />
                      արժույթ
                    </th>
                    <th
                      rowSpan={2}
                      className="p-4 border-r border-b border-[#F0E6FF] align-middle w-48"
                    >
                      Տոկոսների
                      <br />
                      վճարման եղանակը
                    </th>
                    <th colSpan={7} className="p-4 border-b border-[#F0E6FF]">
                      Ընդունման ժամկետներն ըստ օրերի քանակի
                    </th>
                  </tr>
                  <tr>
                    {tableColumns.map((col, idx) => (
                      <th
                        key={idx}
                        className="p-3 border-r last:border-r-0 border-b border-[#F0E6FF] font-semibold whitespace-pre-line"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {ratesData.map((group, groupIdx) => (
                    <React.Fragment key={groupIdx}>
                      {group.rows.map((row, rowIdx) => (
                        <tr
                          key={rowIdx}
                          className="hover:bg-gray-50/50 transition-colors"
                        >
                          {rowIdx === 0 && (
                            <td
                              rowSpan={group.rows.length}
                              className="p-4 border-r border-b border-[#F0E6FF] font-medium text-gray-800 bg-white align-middle"
                            >
                              {group.currency}
                            </td>
                          )}
                          <td className="p-4 border-r border-b border-[#F0E6FF] text-left">
                            {row.method}
                          </td>
                          {row.rates.map((rate, rateIdx) => (
                            <td
                              key={rateIdx}
                              className="p-4 border-r last:border-r-0 border-b border-[#F0E6FF] whitespace-nowrap"
                            >
                              {rate}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {}
            <div className="space-y-6 mt-8">
              <div className="flex gap-3 text-sm sm:text-base leading-relaxed text-[#333333]">
                <span className="text-[#5D00E0] font-bold">1.</span>
                <p>
                  <span className="text-[#5D00E0] underline underline-offset-4 decoration-1 font-medium cursor-pointer">
                    Ավանդն
                  </span>{" "}
                  ընդունվում է ֆիզիկական և իրավաբանական անձանցից, ինչպես Բանկի
                  գործունեության վայրում, այնպես էլ՝ «EvocaTouch» կամ
                  «EvocaOnline» հեռակառավարման համակարգերի միջոցով։
                </p>
              </div>

              <div className="flex gap-3 text-sm sm:text-base leading-relaxed text-[#333333]">
                <span className="text-[#5D00E0] font-bold">2.</span>
                <p>
                  Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը
                  սկսած նվազագույնը 40,000 ՀՀ դրամից, 100 ԱՄՆ դոլարից, 100
                  Եվրոյից կամ 10,000 ՌԴ ռուբլուց։ Ավելացման հնարավորությամբ
                  ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է
                  վերոնշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս
                  տոկոսադրույք, իսկ ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով ավանդների
                  համար սահմանվում է վերոնշյալ սանդղակի տոկոսադրույքներից 0.25
                  %-ով պակաս տոկոսադրույք։ Կատարված բոլոր համալրումների
                  հանրագումարը չի կարող գերազանցել Ավանդի ներդրման սկզբնական
                  գումարը։ Ավանդային պայմանագրի գործողության վերջին 3 (երեք)
                  ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում։
                </p>
              </div>

              <div className="flex gap-3 text-sm sm:text-base leading-relaxed text-[#333333]">
                <span className="text-[#5D00E0] font-bold">3.</span>
                <p>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում։</p>
              </div>

              <div className="flex gap-3 text-sm sm:text-base leading-relaxed text-[#333333]">
                <span className="text-[#5D00E0] font-bold">4.</span>
                <p>
                  Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ
                  լուծելու դեպքում Բանկը ...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {}
      {otherDeposits.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 mt-20 pt-10 border-t border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Այլ ավանդներ
          </h2>

          <div className="relative flex items-center">
            {}
            <button
              onClick={slideLeft}
              className="absolute -left-4 md:-left-8 w-10 h-10 flex items-center justify-center text-[#5D00E0] hover:text-purple-900 z-10 cursor-pointer bg-white rounded-full shadow-sm"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory w-full px-2 py-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: `::-webkit-scrollbar { display: none; }`,
                }}
              />

              {otherDeposits.map((dep, index) => (
                <div
                  key={`${dep.id}-${index}`}
                  className="w-[260px] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start cursor-pointer group flex flex-col items-center"
                  onClick={() => {
                    navigate(`/deposits/${dep.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div
                    className={`w-full h-40 rounded-xl overflow-hidden mb-4 ${dep.imageBgColor || "bg-gray-100"}`}
                  >
                    <img
                      src={dep.image}
                      alt={dep.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-center text-gray-900 font-medium text-sm sm:text-base">
                    {dep.title}
                  </h3>
                </div>
              ))}
            </div>

            {}
            <button
              onClick={slideRight}
              className="absolute -right-4 md:-right-8 w-10 h-10 flex items-center justify-center text-[#5D00E0] hover:text-purple-900 z-10 cursor-pointer bg-white rounded-full shadow-sm"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {}
      <MobilePromo />
    </div>
  );
};

export default DepositDetail;
