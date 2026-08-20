import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import MobilePromo from "../HomePage/Components/MobilePromo";

const RemoteServiceNonResident = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [accordionsData, setAccordionsData] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docSnap = await getDoc(
          doc(db, "remoteServiceNonResident", "main"),
        );
        if (docSnap.exists()) {
          const data = docSnap.data();
          setAccordionsData(data.accordionsData || []);
          setDocuments(data.documents || []);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  if (loading) {
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-24 mb-16 gap-6 lg:gap-0">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Ոչ ռեզիդենտ <br className="hidden xl:block" /> հաճախորդների
              հեռավար <br className="hidden xl:block" /> սպասարկում
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Բանկ այցելելն այլևս պարտադիր չէ։ Անգամ եթե չեք բնակվում ՀՀ-ում,
              Evocabank-ի հետ Դուք կարող եք բացել հաշիվներ օնլայն եղանակով՝
              աշխարհի ցանկացած կետից և ցանկացած պահի:
            </p>
          </div>
          <div className="lg:w-[55%]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png"
              alt="Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում"
              className="w-full h-full object-cover min-h-[300px] bg-gray-100 rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* Main Content & Features */}
        <div className="px-4 sm:px-8 lg:px-24 max-w-[1200px] mx-auto">
          <div className="space-y-6 text-gray-700 text-sm md:text-base mb-12">
            <p>
              24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն
              աշխարհի ցանկացած կետից, փաստաթղթերի անվճար առաքում Ձեր գտնվելու
              վայր: Բոլոր մանրուքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը,
              շեղվեք կարևոր գործերից և, իհարկե, օգտվեք prime սպասարկումից:
            </p>
            <p className="font-medium text-gray-900">
              Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք Ձեր
              հաշիվը՝ առանց Բանկ այցելելու:
            </p>
          </div>

          {/* Highlights Box */}
          <div className="bg-[#F8F6FD] rounded-3xl p-6 md:p-8 mb-12 border border-[#eae3fd]">
            <div className="space-y-6">
              <div>
                <h3 className="text-[#5D00E0] font-bold text-lg mb-1">
                  • Հեռավար սպասարկում
                </h3>
                <p className="text-gray-700 text-sm md:text-base pl-4">
                  Ծառայությունների հասանելիություն առցանց՝ աշխարհի ցանկացած
                  կետից։
                </p>
              </div>
              <div>
                <h3 className="text-[#5D00E0] font-bold text-lg mb-1">
                  • Փաստաթղթերի անվճար առաքում
                </h3>
                <p className="text-gray-700 text-sm md:text-base pl-4">
                  Առաքում անմիջապես Ձեր գտնվելու վայր, Ձեզ հարմար պահին՝ արագ և
                  անվճար:
                </p>
              </div>
            </div>
          </div>

          {/* Accordions Section */}
          <div className="space-y-4 mb-16">
            {accordionsData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm md:text-base">{item.title}</span>
                  <svg
                    className={`w-5 h-5 text-[#5D00E0] transition-transform duration-300 ${
                      openAccordion === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openAccordion === index && (
                  <div className="px-5 pb-5 text-gray-700 text-sm md:text-base whitespace-pre-line leading-relaxed border-t border-gray-100 pt-4">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Documents Section */}
          {documents.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Փաստաթղթեր
              </h3>
              <div className="flex flex-col gap-4">
                {documents.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-[#F8F6FD] hover:bg-[#f0ecfc] transition-colors p-4 md:p-5 rounded-2xl group shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative text-[#5D00E0]">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        <div className="absolute -bottom-1 -right-1 bg-[#5D00E0] text-white rounded-full p-0.5">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-900 font-medium text-sm md:text-base group-hover:text-[#5D00E0] transition-colors">
                        {doc.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <MobilePromo />
    </div>
  );
};

export default RemoteServiceNonResident;
