import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
const SpecialOffersPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docSnap = await getDoc(
          doc(db, "special_offers_page_config", "main"),
        );
        if (docSnap.exists()) setData(docSnap.data());
      } catch (err) {
        console.error("Loading error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-10 animate-pulse">Loading...</div>;

  return (
    <div className="w-full bg-gray-50 py-4 sm:py-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {data?.accordions.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#6000ff]/30 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#6000ff]/5"
              >
                <span className="font-bold text-[#222222]">{item.title}</span>
                <div
                  className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 border-t border-gray-100">
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {item.intro}
                    </p>
                    {item.type === "table" ? (
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b text-xs text-gray-700 bg-gray-50">
                            {item.tableHeaders.map((h, i) => (
                              <th key={i} className="py-2 px-2">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.tableData.map((row, i) => (
                            <tr
                              key={i}
                              className="border-b text-sm text-gray-600"
                            >
                              <td className="py-2 px-2">{row.amd}</td>
                              <td className="py-2 px-2">{row.usd}</td>
                              <td className="py-2 px-2">{row.eur}</td>
                              <td className="py-2 px-2">{row.term}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className="space-y-3">
                        <ul className="list-disc list-inside text-sm text-gray-700 pl-2">
                          {item.listItems.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                        {item.footerTexts.map((f, i) => (
                          <p key={i} className="text-sm text-gray-700">
                            {f}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersPage;
