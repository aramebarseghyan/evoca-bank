import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const BusinessLoanTariffsPage = () => {
  const [sidebarItems, setSidebarItems] = useState([]);
  const [activeProduct, setActiveProduct] = useState("");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSidebarAndDefault = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "businessLoans"));
        const items = querySnapshot.docs.map((docSnap) => {
          const docData = docSnap.data();
          return {
            id: docSnap.id,
            title: docData.title || docData.name || "Անհայտ վարկ",
            data:
              docData.tableData ||
              docData.rows ||
              docData.parameters ||
              docData.items ||
              [],
          };
        });

        if (items.length > 0) {
          setSidebarItems(items);
          setActiveProduct(items[0].title);
          setTableData(items[0].data);
        }
      } catch (error) {
        console.error("Error fetching business loans data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSidebarAndDefault();
  }, []);

  const handleProductClick = (item) => {
    setActiveProduct(item.title);
    setTableData(item.data);
  };

  if (loading) {
    return <div className="text-center py-20">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
        <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-8 leading-snug">
          Վարկեր իրավաբանական անձանց
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <div className="w-full lg:w-[320px] bg-white border border-gray-100 rounded-lg shadow-sm flex-shrink-0 overflow-hidden py-4">
            <div className="px-5 mb-2">
              <h3 className="font-bold text-[#7034E4] text-[15px] border-l-4 border-[#7034E4] pl-3 leading-tight">
                Վարկեր իրավաբանական
                <br />
                անձանց
              </h3>
            </div>

            <ul className="flex flex-col text-[14px] mt-4">
              {sidebarItems.map((item, index) => {
                const isActive = activeProduct === item.title;
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
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Table Content */}
          <div className="flex-1 w-full overflow-hidden">
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-6 leading-snug">
              {activeProduct}
            </h2>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {tableData.length > 0 ? (
                <table className="w-full border-collapse text-left text-[14px]">
                  <tbody>
                    {tableData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-[#faf8fd]"}
                      >
                        <td className="w-[35%] py-4 px-5 text-gray-700 font-medium border-b border-r border-gray-200 align-top">
                          {row.parameter || row.key || row.name || "Բնութագիր"}
                        </td>
                        <td className="w-[65%] py-4 px-5 text-gray-800 border-b border-gray-200 align-top leading-relaxed">
                          {row.value || row.description || row.text || ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  Այս վարկատեսակի համար տվյալներ դեռևս ավելացված չեն
                  Firebase-ում:
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoanTariffsPage;
