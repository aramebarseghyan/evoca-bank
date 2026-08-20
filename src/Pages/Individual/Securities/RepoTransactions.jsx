import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const RepoTransactions = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [accordionData, setAccordionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);

    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "repo_transactions_config", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.accordionData) {
            setAccordionData(data.accordionData);
          }
        } else {
          console.warn("Document repo_transactions_config/main not found!");
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div
      className={`w-full min-h-screen bg-white font-sans pb-20 transition-all duration-700 ease-out transform ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto pt-8 md:pt-12">
        {/* 1. Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-16 mb-16 gap-6 lg:gap-0 2xl:ml-[-30px] 2xl:w-[calc(100%+30px)]">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Ռեպո/Հակադարձ Ռեպո գործարքներ
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Կարճաժամկետ դրամական միջոցների ներգրավման և տեղաբաշխման նպատակով
              Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ:
              Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ Բանկը կատարում է
              կարճաժամկետ իրացվելիության կառավարում:
            </p>
          </div>
          <div className="lg:w-[55%] bg-[#F8F6FD] lg:bg-transparent flex items-center justify-center p-6 lg:p-0 rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg"
              alt="Ռեպո/Հակադարձ Ռեպո գործարքներ"
              className="w-full h-full object-cover max-h-[450px] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* 2. Main Description Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի
              Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված,
              մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային
              ընկերություններ, Ներդրումային ֆոնդեր, Վարկային
              կազմակերպություններ, Ապահովագրական ընկերություններ):
            </p>
            <p>
              Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից
              թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային
              կազմակերպությունների կողմից թողարկված և Հայաստանի ֆոնդային
              բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով:
            </p>
            <p>
              Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների
              արդյունքում:
            </p>
          </div>
        </div>

        {/* 3. Required Information (Accordion) */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          {loading ? (
            <div className="space-y-4 animate-pulse">
              {[1].map((i) => (
                <div
                  key={i}
                  className="h-20 bg-gray-100 rounded-2xl border border-gray-200"
                ></div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {accordionData.map((item, index) => {
                const isOpen = openAccordion === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen ? "border-[#5D00E0] shadow-sm" : "border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-lg font-bold text-gray-900">
                        {item.title}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#5D00E0] text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-white">
                          {item.sections ? (
                            <div className="space-y-6">
                              {item.sections.map((sec, secIdx) => (
                                <div key={secIdx}>
                                  {sec.linkText && (
                                    <a
                                      href={sec.linkHref || "#"}
                                      className="text-[#5D00E0] font-bold text-base md:text-lg underline hover:opacity-85 block mb-2"
                                    >
                                      {sec.linkText}
                                    </a>
                                  )}
                                  {sec.text && (
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                      {sec.text}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                              {item.text}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoTransactions;