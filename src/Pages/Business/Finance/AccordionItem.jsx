import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const GuaranteePage = () => {
  const [openAccordionId, setOpenAccordionId] = useState(1);
  const [guaranteeTypes, setGuaranteeTypes] = useState([]);
  const [accordionItems, setAccordionItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "guarantee_page_config", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.guaranteeTypes) setGuaranteeTypes(data.guaranteeTypes);
          if (data.accordionItems) setAccordionItems(data.accordionItems);
        } else {
          console.warn("Document guarantee_page_config/main not found!");
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (id) => {
    setOpenAccordionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-800 leading-relaxed overflow-x-hidden">
      <div className="max-w-5xl mx-auto p-6 md:p-10 pt-12">

        <h1 className="text-[32px] font-bold text-gray-900 mb-10 tracking-tight">
          Երաշխիք
        </h1>


        <section className="mb-14 text-[15px]">
          <p className="mb-4">
            Բանկային երաշխիքը անկախ, անվերապահ և գրավոր պարտավորություն է, որը
            բանկը ստանձնում է իր հաճախորդի (Applicant) հանձնարարությամբ հօգուտ
            երրորդ կողմի (Beneficiary) վճարելու երաշխիքով սահմանված գումարը
            ներկայացված պահանջի դիմաց, եթե պահանջը համապատասխանում է երաշխիքի
            պայմաններին:
          </p>
          <p>
            Բանկային երաշխիքները, որպես կանոն, կարգավորվում են{" "}
            <a
              href="#"
              className="text-purple-700 hover:text-purple-900 underline transition-colors"
            >
              Միջազգային առևտրի պալատի (ICC) կողմից ընդունված URDG 758
              կանոններով
            </a>
            , եթե երաշխիքում այլ բան նախատեսված չէ:
          </p>
        </section>


        <h2 className="text-xl font-bold text-purple-800 mb-8">
          Բանկային երաշխիքների հիմնական տեսակները
        </h2>


        {loading ? (
          <div className="space-y-6 mb-16 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-28 bg-gray-100 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="space-y-8 mb-16">
            {guaranteeTypes.map((guarantee) => (
              <div key={guarantee.id} className="flex flex-col">
                <div className="flex items-center mb-3">
                  <span className="w-2 h-2 rounded-full bg-purple-700 mr-3 mt-1"></span>
                  <h3 className="text-lg font-semibold text-purple-800">
                    {guarantee.title}
                  </h3>
                </div>
                <div className="ml-5 bg-white border border-gray-50 shadow-[0_4px_20px_-4px_rgba(106,13,173,0.06)] rounded-xl p-5 md:p-6">
                  <span className="block italic text-gray-500 text-sm mb-3">
                    {guarantee.subtitle}
                  </span>
                  <div className="text-[14px] text-gray-700 space-y-2">
                    {guarantee.paragraphs?.map((pText, pIdx) => (
                      <p key={pIdx}>{pText}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}


        <section>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          {loading ? (
            <div className="space-y-4 animate-pulse">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-14 bg-gray-100 rounded-xl"></div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {accordionItems.map((item) => {
                const isOpen = openAccordionId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-xl transition-all duration-300 border shadow-sm
                      ${isOpen ? "border-purple-600 shadow-md" : "border-gray-200"}`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center p-5 text-left focus:outline-none cursor-pointer"
                    >
                      <div
                        className={`mr-4 transition-transform duration-300 text-purple-700 
                        ${isOpen ? "rotate-180" : "rotate-0"}`}
                      >
                        <svg
                          width="14"
                          height="9"
                          viewBox="0 0 14 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L7 7L13 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <span
                        className={`font-semibold text-[15px] ${
                          isOpen ? "text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out 
                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-5 pt-0">

                          {item.tableRows && item.tableRows.length > 0 && (
                            <div className="border border-gray-100 rounded-lg overflow-hidden mt-2">
                              <table className="w-full text-sm text-left text-gray-600">
                                <tbody>
                                  {item.tableRows.map((row, rIdx) => (
                                    <tr
                                      key={row.id || rIdx}
                                      className={`border-b border-gray-100 ${
                                        rIdx % 2 === 1 ? "bg-gray-50/50" : ""
                                      }`}
                                    >
                                      <td className="py-3 px-4 w-12 text-center text-gray-400">
                                        {rIdx + 1}.
                                      </td>
                                      <td className="py-3 px-4 border-r border-gray-100 font-medium">
                                        {row.name}
                                      </td>
                                      <td className="py-3 px-4">{row.value}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default GuaranteePage;