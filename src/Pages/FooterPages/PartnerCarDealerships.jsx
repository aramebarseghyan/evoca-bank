import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const PartnerCarDealerships = () => {
  const [dealershipsData, setDealershipsData] = useState([]);
  const [openId, setOpenId] = useState("eco-motors");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDealershipsData = async () => {
      try {
        const docSnap = await getDoc(doc(db, "dealerships", "main"));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDealershipsData(data.dealershipsData || []);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchDealershipsData();
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return null;
  }

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800">
      {/* Վերնագիր և նկարագրություն */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Գործընկեր ավտոսրահներ
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Պետք է ավտովարկ և որոշել ես դիմել{" "}
          <span className="font-semibold text-[#5D00E0]">Evoca</span>-ին,
          իմացիր՝ արդեն ունես արտոնյալ պայմաններ:
        </p>

        <h2 className="text-lg font-bold text-[#5D00E0] mb-3">
          Նոր մեքենա, ցածր տոկոսադրույք
        </h2>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base space-y-4">
          Դու գիտես, որ Evoca-ում ավտոմեքենա կարող ես ձեռք բերել ինչպես
          առաջնային, այնպես էլ երկրորդային շուկայից:{" "}
          <span className="font-medium text-gray-900">
            Առաջնային շուկայի դեպքում`
          </span>{" "}
          Evoca-ն համագործակցում է մի շարք ավտոսրահների հետ և առաջարկում
          վարկավորման արտոնյալ պայմաններ:
        </p>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-3">
          Վարկավորման արտոնյալ պայմանները հերիք չի, դու նաև ունես տեղում
          վարկային հայտ ներկայացնելու հնարավորություն: Հայտը ներկայացնելուց հետո
          հարցման պատասխանը ստանում ես րոպեների ընթացքում: Կարող ես տեղում կնքել
          վարկային պայմանագիրը և դու ունես նոր ավտոմեքենա՝ հատուկ պայմաններով:
          Օնլայն վարկավորման դեպքում՝ ավտովարկը տրամադրվում է առանց սպասարկման
          վճարների, իսկ ԿԱՍԿՈ ապահովագրությունը վարկի մայր գումարի մնացորդի
          չափով յուրաքանչյուր տարի մինչև վարկի մարման վերջնաժամկետը կնքվում է
          Բանկի կողմից և Բանկի հաշվին:
        </p>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-3">
          <span className="font-semibold text-[#5D00E0]">Evoca</span>-ի
          գործընկեր ավտոսրահների կողմից առաջարկվող պայմաններին մանրամասն կարող
          ես ծանոթանալ ստորև.
        </p>
      </div>

      {/* Բաժնի վերնագիր */}
      <h3 className="text-[#5D00E0] font-bold text-lg tracking-wider mb-6 uppercase">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h3>

      {/* Ակորդեոնների ցանկ */}
      <div className="space-y-3">
        {dealershipsData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`border transition-all duration-200 rounded-2xl overflow-hidden bg-white ${
                isOpen
                  ? "border-[#5D00E0] shadow-sm ring-1 ring-[#5D00E0]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Ակորդեոնի Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-gray-800 text-base sm:text-lg focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className={`w-4 h-4 text-[#5D00E0] transform transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>{item.name}</span>
                </div>
              </button>

              {/* Ակորդեոնի բովանդակություն */}
              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-sm text-gray-700 space-y-3 border-t border-gray-100">
                  {item.amount && (
                    <p>
                      <strong className="font-bold text-[#5D00E0]">
                        Գումար`
                      </strong>{" "}
                      {item.amount}
                    </p>
                  )}

                  {item.duration && (
                    <p>
                      <strong className="font-bold text-[#5D00E0]">
                        Ժամկետ`
                      </strong>{" "}
                      {item.duration}
                    </p>
                  )}

                  {item.rate && (
                    <p>
                      <strong className="font-bold text-[#5D00E0]">
                        Տոկոսադրույք`
                      </strong>{" "}
                      {item.rate}
                    </p>
                  )}

                  {item.cars && (
                    <p>
                      <strong className="font-bold text-[#5D00E0]">
                        Ավտոմեքենաներ`
                      </strong>{" "}
                      {item.cars}
                    </p>
                  )}

                  {item.kasko && (
                    <p>
                      <strong className="font-bold text-[#5D00E0]">
                        {item.kasko}
                      </strong>
                    </p>
                  )}

                  {item.addresses && item.addresses.length > 0 && (
                    <div className="space-y-1">
                      <strong className="font-bold text-[#5D00E0] block mb-1">
                        Սրահի հասցե`
                      </strong>
                      {item.addresses.map((addr, idx) => (
                        <p key={idx} className="text-gray-600 pl-2">
                          {addr}
                        </p>
                      ))}
                    </div>
                  )}

                  {item.contacts && (
                    <p>
                      <strong className="font-bold text-[#5D00E0]">
                        Կոնտակտային տվյալներ`
                      </strong>{" "}
                      {item.contacts}
                    </p>
                  )}

                  {item.website && (
                    <p>
                      <strong className="font-bold text-[#5D00E0]">
                        Կայք`
                      </strong>{" "}
                      <a
                        href={`https://${item.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#5D00E0] underline hover:opacity-80"
                      >
                        {item.website}
                      </a>
                    </p>
                  )}

                  {/* Նկարների ցանց (Image Grid) */}
                  {item.images && item.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                      {item.images.map((imgUrl, i) => (
                        <div
                          key={i}
                          className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden border border-gray-200"
                        >
                          <img
                            src={imgUrl}
                            alt={`${item.name} car ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Ներքևի հղումը */}
                  <div className="pt-4 text-xs sm:text-sm">
                    Ավտովարկի մանրամասներին կարող եք ծանոթանալ{" "}
                    <a
                      href="/loans/auto-loan"
                      className="text-[#5D00E0] font-bold underline hover:opacity-80"
                    >
                      այստեղ
                    </a>
                    :
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerCarDealerships;
