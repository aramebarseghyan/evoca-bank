import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Firebase կարգավորումներ
const firebaseConfig = {
  apiKey: "AIzaSyBJ3_mGAyawhU5fZwKsg1CQLu-0MAGbZTY",
  authDomain: "evoca-app-cdeac.firebaseapp.com",
  projectId: "evoca-app-cdeac",
  storageBucket: "evoca-app-cdeac.firebasestorage.app",
  messagingSenderId: "197478671668",
  appId: "1:197478671668:web:5661f415d8b4445649f161",
  measurementId: "G-N469K2446L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CardTariffsPage = () => {
  const [cardTypes, setCardTypes] = useState([]);
  const [activeCard, setActiveCard] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [loadingTariffs, setLoadingTariffs] = useState(false);

  // 1. Բեռնում ենք քարտերի ցանկը Firebase-ից (settings -> cardTypes)
  useEffect(() => {
    const fetchCardTypes = async () => {
      try {
        const docRef = doc(db, "settings", "cardTypes");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().list) {
          const list = docSnap.data().list;
          setCardTypes(list);
          if (list.length > 0) {
            setActiveCard(list[0].id); // Ավտոմատ ընտրում ենք առաջինը
          }
        }
      } catch (error) {
        console.error("Error fetching card types:", error);
      } finally {
        setLoadingTypes(false);
      }
    };

    fetchCardTypes();
  }, []);

  // 2. Բեռնում ենք ընտրված քարտի սակագները Firebase-ից (cardTariffs -> activeCard)
  useEffect(() => {
    if (!activeCard) return;

    const fetchCardData = async () => {
      setLoadingTariffs(true);
      try {
        const docRef = doc(db, "cardTariffs", activeCard);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCurrentData(docSnap.data());
        } else {
          setCurrentData(null);
        }
      } catch (error) {
        console.error("Error fetching card tariff data:", error);
        setCurrentData(null);
      } finally {
        setLoadingTariffs(false);
      }
    };

    fetchCardData();
  }, [activeCard]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
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

            {loadingTypes ? (
              <div className="py-4 text-center text-sm text-gray-500">
                Բեռնվում է ցանկը...
              </div>
            ) : (
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
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Միջնորդավճարների սակագները և դրույքները
            </h2>
            <p className="text-gray-600">
              {loadingTariffs
                ? "Բեռնվում է..."
                : currentData?.subtitle ||
                  cardTypes.find((c) => c.id === activeCard)?.title}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <th className="py-4 px-6 w-2/5">
                      {currentData?.headers?.service ||
                        "Մատուցվող ծառայություններ"}
                    </th>
                    {currentData?.headers?.cols?.map((colTitle, idx) => (
                      <th
                        key={idx}
                        className="py-4 px-4 border-l border-gray-200 w-1/5"
                      >
                        {colTitle}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-800">
                  {loadingTariffs ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="py-8 text-center text-gray-500"
                      >
                        Տվյալները բեռնվում են...
                      </td>
                    </tr>
                  ) : !currentData || !currentData.rows ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="py-8 text-center text-gray-500"
                      >
                        Տվյալներ չեն գտնվել այս քարտի համար Firebase-ում:
                      </td>
                    </tr>
                  ) : (
                    currentData.rows.map((row, index) => {
                      if (row.isHeader) {
                        return (
                          <tr key={index}>
                            <td
                              className="py-4 px-6 font-medium text-gray-900 bg-gray-50/50"
                              colSpan={4}
                            >
                              {row.title}
                            </td>
                          </tr>
                        );
                      }

                      return (
                        <tr key={index}>
                          <td
                            className={`py-4 px-6 font-medium text-gray-900 ${
                              row.isSubItem
                                ? "pl-10 text-gray-600 font-normal"
                                : ""
                            }`}
                          >
                            {row.title}
                          </td>

                          {row.values?.map((val, vIdx) => (
                            <td
                              key={vIdx}
                              className="py-4 px-4 border-l border-gray-200"
                            >
                              {typeof val === "object" && val !== null ? (
                                <div className="flex flex-col">
                                  <div className="px-4 py-2.5 border-b border-gray-200 flex justify-between">
                                    <span className="text-gray-500">
                                      Տարեկան
                                    </span>
                                    <span className="font-medium">
                                      {val.annual || "-"}
                                    </span>
                                  </div>
                                  <div className="px-4 py-2.5 flex justify-between">
                                    <span className="text-gray-500">
                                      Ամսական
                                    </span>
                                    <span className="font-medium">
                                      {val.monthly || "-"}
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                val || "-"
                              )}
                            </td>
                          ))}
                        </tr>
                      );
                    })
                  )}
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
