import React, { useState, useEffect, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function EvocaBenefitsPage() {
  const [benefits, setBenefits] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);

  // Состояние для аккордеона FAQ: 0 означает, что первый пункт открыт с самого начала
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Ссылка для автоматического фокуса на поле поиска
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const faqItems = [
    {
      question: "Ի՞նչ է Evoca Benefits-ը:",
      answer:
        "Evoca Benefits-ը նոր նախագիծ է, որի շրջանակում Evoca բոլոր քարտապանները ստանում են բենեֆիթներ` զեղչեր, քեշբեքեր կամ այլ առավելություններ՝ 100-ից ավել գործընկերների մոտ՝ պարզապես վճարելով իրենց Evoca քարտերով:",
    },
    {
      question: "Ի՞նչ բենեֆիթներից կարող են օգտվել Բանկի քարտապանները:",
      answer:
        "Բենեֆիթներն են՝\n• Զեղչ, որը կստանաք տեղում՝ վճարելով Ձեր Evoca քարտով:\n• Cashback, որը տվյալ ամսվա բոլոր գնումների համար հանրագումարային կփոխանցվի Ձեր քարտին մինչև հաջորդ ամսվա 20-ը։\n• Նվեր քարտ, որը կարող եք օգտագործել տեղում կամ Ձեր հաջորդ գնման ժամանակ։",
    },
    {
      question: "Ինչպե՞ս օգտվել բենեֆիթներից:",
      answer:
        "Օֆլայն՝ խանութում, սրճարանում կամ վաճառակետում բենեֆիթներից օգտվելու համար պարզապես պետք է վճարել Ձեր Evoca քարտով: Վճարելուց առաջ պետք է զգուշացնել, որ Դուք վճարելու եք Evoca քարտով, որպեսզի աշխատակիցը կիրառի զեղչը՝ նախքան վճարումը։ Ի դեպ, կարող եք վճարել ֆիզիկական քարտով կամ Ձեր օնլայն դրամապանակին՝ Apple Pay-ին, Google Pay-ին կցված Evoca քարտով։\n\nՕնլայն՝ կայքերում կամ հավելվածներում բենեֆիթներից օգտվելու համար հարկավոր է կայքի վճարման էջում մուտքագրել Ձեր Evoca քարտի տվյալները, և բենեֆիթն ավտոմատ կգործի։ Գնման ժամանակ կայքում Դուք կտեսնեք ապրանքի կամ ծառայության ամբողջական արժեքը, սակայն քարտից կգանձվի արդեն զեղչված գինը։\n\nԵթե վճարելիս առաջացել է որևէ խնդիր, կարող եք կապ հաստատել մեզ հետ +37443010340 հեռախոսահամարով:",
    },
    {
      question: "Քանի՞ անգամ է հնարավոր օգտվել Evoca բենեֆիթներից:",
      answer:
        "Evoca բենեֆիթներից կարող եք օգտվել անսահմանափակ՝ ընդամենը վճարելով Ձեր Evoca քարտով։",
    },
    {
      question:
        "Եթե տվյալ գործընկերոջ մոտ արդեն գործում են զեղչեր, դրանք գումարվո՞ւմ են Evoca բենեֆիթներին:",
      answer:
        "Բենեֆիթները տարբեր են, յուրաքանչյուր գործընկերոջ պայմանները կարող եք տեսնել վերևում՝ տվյալ գործընկերոջ նկարագրությունում։",
    },
    {
      question: "Evocabank-ի ո՞ր քարտերին ունեն բենեֆիթներ:",
      answer:
        "Բենեֆիթները տրամադրվում են բոլոր Evoca քարտերի համար: Էջի վերևում` Քարտատեսակ բաժնից, կարող եք ընտրել քարտի տեսակը և տեսնել հենց Ձեր քարտին տրամադրվող բենեֆիթները.",
    },
    {
      question: "Ինչպե՞ս պատվիրել Evoca քարտ:",
      answer:
        "Քարտ կարող եք պատվիրել evoca.am կայքի կամ EvocaTOUCH հավելվածի միջոցով, ինչպես նաև մոտենալով Evocabank-ի ցանկացած գրասենյակ։ Բանկի հասցեներին և աշխատանքային ժամերին կարող եք ծանոթանալ մեր պաշտոնական կայքից.",
    },
    {
      question: "Ինչպե՞ս կարող է իմ բիզնեսը միանալ Evoca բենեֆիթներին:",
      answer:
        "Ձգտելով մեր հաճախորդներին տրամադրել լավագույն առաջարկներն ու լուծումները՝ մենք միշտ բաց ենք համագործակցությունների համար։ Միանալու համար կարող եք կապ հաստատել մեր թիմի հետ՝\n📞 +37443010340\n📧 benefits@evoca.am\nՄեր մասնագետները սիրով կպատասխանեն Ձեր բոլոր հարցերին և կներկայացնեն համագործակցության հնարավոր տարբերակները.",
    },
  ];

  // Загрузка данных из Firebase Firestore
  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "evoca_benefits"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBenefits(data);
      } catch (error) {
        console.error("Ошибка при загрузке бенефитов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefits();
  }, []);

  // Функция добавления еще 5 карточек по клику
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="min-h-screen bg-white font-sans relative pb-24 overflow-x-hidden">
      {/* 1. Кастомная шапка */}
      <header className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50">
        <div className="w-8 h-8 flex items-center justify-center text-[#5D00E0]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 21L3 6h4.5L12 15l4.5-9H21L12 21z" />
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#5D00E0] hover:bg-purple-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
            Պատվիրել քարտ
          </button>
          <button className="text-gray-800 p-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* 2. Блок Hero с плавающими иконками */}
      <section className="relative py-12 px-4 max-w-md mx-auto text-center flex flex-col items-center justify-center min-h-[250px]">
        <h1 className="text-xl sm:text-2xl font-bold text-[#5D00E0] leading-snug relative z-10 max-w-[280px]">
          Բացահայտիր Evoca քարտերի բենեֆիթները
        </h1>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-10 transform -rotate-12 bg-white shadow-md rounded border border-gray-100 px-2 py-1">
            <div className="flex items-center w-8 h-5">
              <div className="w-3 h-3 bg-red-500 rounded-full opacity-80 -mr-1"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-80"></div>
            </div>
          </div>
          <div className="absolute top-8 right-6 transform rotate-12 text-green-500">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 6h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm0 2v8h14V8H5zm7 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
            </svg>
          </div>
          <div className="absolute bottom-16 left-4 bg-white shadow-md rounded-[20px] border border-gray-100 px-4 py-1.5 flex items-center justify-center">
            <span className="text-[#1434CB] font-bold italic text-sm">
              VISA
            </span>
          </div>
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full border border-red-400 px-4 py-1.5 flex items-center justify-center gap-1">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full opacity-90 -mr-1.5 z-10"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-90"></div>
            </div>
            <span className="text-[10px] font-bold ml-1">mastercard</span>
          </div>
          <div className="absolute bottom-16 right-4 bg-white shadow-md rounded-[20px] border border-[#A1D135] px-4 py-1.5 flex items-center justify-center">
            <span className="text-[#184F90] font-bold text-sm">
              ar<span className="text-[#A1D135]">ca</span>
            </span>
          </div>
          <div className="absolute bottom-4 left-10 bg-white shadow-sm rounded border border-gray-100 px-2 py-0.5">
            <span className="text-[#184F90] font-bold text-[10px]">
              ar<span className="text-[#A1D135]">ca</span>
            </span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-sm rounded-[20px] border border-red-500 px-3 py-1 flex items-center justify-center">
            <span className="text-red-500 font-bold text-[10px]">UnionPay</span>
          </div>
          <div className="absolute bottom-0 right-10 transform -rotate-12 bg-[#1434CB] shadow-md rounded px-3 py-1 flex items-center justify-center">
            <span className="text-white font-bold italic text-xs">VISA</span>
          </div>
        </div>
      </section>

      {/* 3. Строка поиска */}
      <div className="px-4 mt-8 flex items-center gap-3 max-w-lg mx-auto">
        <button className="text-gray-800 shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="flex-1 bg-[#F5F5F5] rounded-full flex items-center px-4 py-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Որոնել"
            className="bg-transparent border-none outline-none ml-2 w-full text-sm text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>

      {/* 4. Сетка карточек бенефитов */}
      <div className="p-4 mt-6 max-w-lg mx-auto grid grid-cols-1 gap-4">
        {loading ? (
          <p className="text-center text-gray-500 py-4">Բեռնվում է...</p>
        ) : (
          benefits.slice(0, visibleCount).map((item) => {
            const firstSpaceIndex = item.title.indexOf(" ");
            const percent =
              firstSpaceIndex !== -1
                ? item.title.substring(0, firstSpaceIndex)
                : item.title;
            const name =
              firstSpaceIndex !== -1
                ? item.title.substring(firstSpaceIndex + 1)
                : "";

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white pb-4"
              >
                <div className="h-[180px] bg-[#111] flex items-center justify-center relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 pt-4">
                  <h3 className="font-bold text-gray-900 text-lg">
                    <span className="text-[#5D00E0]">{percent}</span> {name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    {item.discountType}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-md text-gray-700 font-medium">
                      {item.category}
                    </span>
                    {item.socials?.instagram && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Кнопка "Загрузить еще" (+5 карточек) */}
      {!loading && visibleCount < benefits.length && (
        <div className="flex justify-center mt-4 mb-10">
          <button
            onClick={loadMore}
            className="flex items-center gap-2 text-[#5D00E0] font-bold text-sm px-4 py-2 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer"
          >
            Բեռնել ավելին
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* 5. Блок FAQ (Аккордеон) */}
      <section className="px-4 mt-12 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">
          Հաճախ տրվող հարցեր
        </h2>
        <div className="flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen ? "border-[#5D00E0] shadow-sm" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-900 text-sm sm:text-base focus:outline-none cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="pr-2">{item.question}</span>
                  <div className="w-7 h-7 flex items-center justify-center shrink-0 text-[#5D00E0]">
                    {isOpen ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Плавающая кнопка чата внизу (Sticky) */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center px-4 pb-0 pointer-events-none z-50">
        <button className="bg-gradient-to-r from-[#8A2BE2] to-[#9400D3] text-white px-6 py-3.5 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.1)] w-full max-w-[320px] pointer-events-auto flex items-center justify-between group cursor-pointer">
          <span className="font-semibold text-sm">
            Գրեք մեզ, մենք օնլայն ենք !
          </span>
          <div className="w-6 h-6 bg-green-500 rounded-full rounded-tr-none transform group-hover:scale-105 transition-transform"></div>
        </button>
      </div>
    </div>
  );
}
