import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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

const LoanTariffsTablePage = () => {
  const [sidebarCategories, setSidebarCategories] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeProduct, setActiveProduct] = useState("");
  const [tableData, setTableData] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);

  // 1. Բեռնում ենք կատեգորիաները Firebase-ից
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const docRef = doc(db, "settings", "loanCategories");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().categories) {
          const cats = docSnap.data().categories;
          setSidebarCategories(cats);

          if (cats.length > 0 && cats[0].items.length > 0) {
            setExpandedCategory(cats[0].id);
            setActiveProduct(cats[0].items[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching loan categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // 2. Երբ փոխվում է ակտիվ պրոդուկտը, բեռնում ենք դրա տվյալները Firebase-ից
  useEffect(() => {
    if (!activeProduct) return;

    const fetchProductData = async () => {
      setLoadingTable(true);
      try {
        const docId = encodeURIComponent(activeProduct);
        const docRef = doc(db, "loanTariffs", docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().rows) {
          setTableData(docSnap.data().rows);
        } else {
          setTableData([]);
        }
      } catch (error) {
        console.error("Error fetching product tariffs:", error);
        setTableData([]);
      } finally {
        setLoadingTable(false);
      }
    };

    fetchProductData();
  }, [activeProduct]);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleProductClick = (productName) => {
    setActiveProduct(productName);
  };

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
        <h1 className="text-xl md:text-2xl lg:text-[26px] font-bold text-gray-900 mb-8 leading-snug">
          Ֆիզիկական անձանց տրամադրվող անհատական վարկեր ըստ պրոդուկտների /
          Պայմաններ և սակագներ /
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <div className="w-full lg:w-[320px] bg-white border border-gray-200 rounded-lg shadow-sm flex-shrink-0 overflow-hidden">
            {loadingCategories ? (
              <div className="p-6 text-center text-sm text-gray-500">
                Բեռնվում է ցանկը...
              </div>
            ) : (
              sidebarCategories.map((category) => (
                <div
                  key={category.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <div
                    onClick={() => toggleCategory(category.id)}
                    className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-800 text-sm select-none">
                      {category.title}
                    </span>

                    <svg
                      className={`w-4 h-4 text-[#7034E4] transition-transform duration-200 ${
                        expandedCategory === category.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {expandedCategory === category.id && (
                    <ul className="flex flex-col text-[13px] pb-2">
                      {category.items.map((item, index) => {
                        const isActive = activeProduct === item;
                        return (
                          <li
                            key={index}
                            onClick={() => handleProductClick(item)}
                            className={`px-4 py-3 cursor-pointer pl-6 pr-4 transition-all leading-relaxed ${
                              isActive
                                ? "text-[#7034E4] font-bold border-l-4 border-[#7034E4] bg-[#fcfaff]"
                                : "text-gray-600 hover:text-gray-900 border-l-4 border-transparent hover:bg-gray-50"
                            }`}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Table Content */}
          <div className="flex-1 w-full overflow-hidden">
            <h2 className="text-xl md:text-xl font-bold text-[#7034E4] mb-6 leading-snug">
              {activeProduct}
            </h2>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {loadingTable ? (
                    <tr>
                      <td
                        colSpan="3"
                        className="py-12 text-center text-gray-500"
                      >
                        Տվյալները բեռնվում են...
                      </td>
                    </tr>
                  ) : tableData.length === 0 ? (
                    <tr>
                      <td
                        colSpan="3"
                        className="py-12 text-center text-gray-500"
                      >
                        Տվյալներ չեն գտնվել այս պրոդուկտի համար:
                      </td>
                    </tr>
                  ) : (
                    tableData.map((row, idx) => (
                      <tr
                        key={row.id || idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-[#faf8fd]"}
                      >
                        <td className="w-12 py-3 px-4 text-gray-400 font-medium border-b border-r border-gray-200 text-center align-top">
                          {idx + 1}.
                        </td>
                        <td className="w-1/3 py-3 px-4 font-semibold text-gray-700 border-b border-r border-gray-200 align-top">
                          {row.parameter}
                        </td>
                        <td className="py-3 px-4 text-gray-800 border-b border-gray-200 align-top leading-relaxed">
                          {row.value}
                        </td>
                      </tr>
                    ))
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

export default LoanTariffsTablePage;
