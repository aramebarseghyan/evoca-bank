import React, { useState, useEffect, useRef, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import evocaBenefitsLogo from "../../assets/img/evoca-benefits.png";

export default function EvocaBenefitsPage() {
  const [benefits, setBenefits] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);

  // Состояние для открытия мобильного меню/фильтров
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Состояние для аккордеона FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Состояния раскрытия секций фильтров в сайдбаре
  const [openSections, setOpenSections] = useState({
    cardType: true,
    location: false,
    benefit: false,
    sector: false,
    platform: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Полные списки фильтров из техзадания
  const cardTypesList = [
    { id: "visaInfinite", label: "Visa Infinite", count: 113 },
    { id: "evocaVisaPlatinum", label: "Evoca Visa Platinum", count: 88 },
    { id: "evocaTravelCard", label: "Evoca Travel Card", count: 103 },
    { id: "wilcoVisaInfinite", label: "Wilco Visa Infinite", count: 3 },
    { id: "visaVision", label: "Visa Vision", count: 89 },
    { id: "mastercardGold", label: "Mastercard Gold", count: 97 },
    { id: "visaGold", label: "Visa Gold", count: 97 },
    { id: "mastercardStandard", label: "Mastercard Standard", count: 89 },
    { id: "visaClassic", label: "Visa Classic", count: 89 },
    {
      id: "mastercardWorldDigital",
      label: "Mastercard World Digital",
      count: 88,
    },
    { id: "visaDigital", label: "Visa Digital", count: 45 },
    { id: "arcaClassic", label: "Arca Classic", count: 32 },
    { id: "visaBusiness", label: "Visa Business", count: 19 },
    { id: "evocaGiftCard", label: "Evoca Gift Card", count: 12 },
    {
      id: "unionPayBusinessPlatinum",
      label: "UnionPay Business Platinum",
      count: 8,
    },
    { id: "unionPayGold", label: "UnionPay Gold", count: 15 },
  ];

  const locationList = [
    { id: "armenia", label: "Հայաստան" },
    { id: "abroad", label: "Արտերկիր" },
  ];

  const benefitList = [
    { id: "cashback", label: "Cashback" },
    { id: "discount", label: "Զեղչ" },
    { id: "giftCard", label: "Նվեր-քարտ" },
  ];

  const sectorList = [
    { id: "cafes", label: "Սրճարաններ" },
    { id: "gifts", label: "Նվերներ" },
    { id: "interior", label: "Ինտերիեր" },
    { id: "lifestyle", label: "Կենսակերպ" },
    { id: "tech", label: "Տեխնիկա" },
    { id: "fashion", label: "Նորաձևություն" },
    { id: "health", label: "Առողջություն" },
    { id: "beauty", label: "Գեղեցկություն" },
    { id: "sport", label: "Սպորտ" },
    { id: "accessories", label: "Աքսեսուարներ" },
    { id: "rest", label: "Հանգիստ" },
  ];

  const platformList = [
    { id: "online", label: "Օնլայն" },
    { id: "offline", label: "Օֆլայն" },
  ];

  // Состояния чекбоксов фильтров
  const [selectedFilters, setSelectedFilters] = useState({
    cardType: {},
    location: {},
    benefit: {},
    sector: {},
    platform: {},
  });

  const handleCheckboxChange = (category, id) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [id]: !prev[category][id],
      },
    }));
  };

  // Логика фильтрации карточек
  const filteredBenefits = useMemo(() => {
    return benefits.filter((item) => {
      const isAnyActive = (category) =>
        Object.values(selectedFilters[category]).some(Boolean);

      const cardTypeMatch =
        !isAnyActive("cardType") || selectedFilters.cardType[item.cardType];
      const locationMatch =
        !isAnyActive("location") || selectedFilters.location[item.location];
      const benefitMatch =
        !isAnyActive("benefit") || selectedFilters.benefit[item.benefitType];
      const sectorMatch =
        !isAnyActive("sector") || selectedFilters.sector[item.sector];
      const platformMatch =
        !isAnyActive("platform") || selectedFilters.platform[item.platform];

      return (
        cardTypeMatch &&
        locationMatch &&
        benefitMatch &&
        sectorMatch &&
        platformMatch
      );
    });
  }, [benefits, selectedFilters]);

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

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="min-h-screen bg-white font-sans relative pb-0 overflow-x-hidden">
      {/* 1. Шапка */}
      <header className="px-4 pt-3 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto bg-white rounded-full shadow-sm border border-gray-100 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center cursor-pointer">
              <img
                src={evocaBenefitsLogo}
                alt="Evoca Benefits"
                className="h-7 object-contain"
              />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/cards"
              className="bg-[#5D00E0] hover:bg-purple-800 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer inline-flex items-center"
            >
              Պատվիրել քարտ
            </a>
            <button className="text-gray-800 p-2 cursor-pointer hover:text-[#5D00E0] transition-colors">
              <svg
                width="20"
                height="20"
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
        </div>
      </header>

      {/* Hero секция с заголовком и платежными системами */}
      <div className="text-center mt-6 mb-10 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#5D00E0] mb-6">
          Բացահայտիր Evoca քարտերի բենեֆիթները
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
          {/* VISA */}
          <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center">
            <span className="font-black italic tracking-wider text-[#1434CB] text-lg">
              VISA
            </span>
          </div>
          {/* Mastercard */}
          <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2">
            <div className="flex -space-x-1.5">
              <div className="w-4 h-4 rounded-full bg-[#EB001B]"></div>
              <div className="w-4 h-4 rounded-full bg-[#F79E1B] mix-blend-multiply"></div>
            </div>
            <span className="font-bold text-xs tracking-tight text-gray-800">
              mastercard
            </span>
          </div>
          {/* ArCa */}
          <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm flex items-center">
            <span className="font-extrabold text-[#004B87] text-base">arc</span>
            <span className="font-extrabold text-[#8DC63F] text-base">a</span>
          </div>
          {/* UnionPay */}
          <div className="px-3.5 py-2 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2">
            <div className="bg-[#E60012] text-white px-2 py-0.5 rounded-[4px] font-bold text-xs tracking-tight flex items-center">
              UnionPay
            </div>
            <span className="text-xs text-gray-600 font-bold tracking-wider">
              INTERNATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* Основной контейнер */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-16">
        {/* Строка поиска с гамбургер-кнопкой для мобильных */}
        <div className="max-w-2xl mx-auto mb-10 flex items-center gap-3">
          {/* Кнопка гамбургер-меню (только на мобильных/планшетах) */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden bg-[#F5F5F5] p-3.5 rounded-full flex items-center justify-center shadow-inner cursor-pointer hover:bg-gray-200 transition-colors shrink-0"
            aria-label="Open Filters"
          >
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Поле поиска */}
          <div className="flex-1 bg-[#F5F5F5] rounded-full flex items-center px-5 py-3.5 shadow-inner">
            <svg
              width="20"
              height="20"
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
              className="bg-transparent border-none outline-none ml-3 w-full text-base text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Выдвижная плавная панель фильтров для мобильных устройств */}
        <div
          className={`fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
            mobileFiltersOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`w-full max-w-xs bg-white h-full p-6 overflow-y-auto shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
              mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Ֆիլտրներ</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Сортировка */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Դասավորել
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none appearance-none cursor-pointer focus:border-[#5D00E0]">
                    <option>Ըստ հանրաճանաչության</option>
                    <option>Զեղչի չափի (նվազման)</option>
                    <option>Այբբենական</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* 1. Քարտատեսակ */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">
                <button
                  onClick={() => toggleSection("cardType")}
                  className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
                >
                  <span>Քարտատեսակ</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-gray-500 transition-transform ${openSections.cardType ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {openSections.cardType && (
                  <div className="space-y-3 pt-1 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                    {cardTypesList.map((card) => (
                      <label
                        key={card.id}
                        className="flex items-center justify-between cursor-pointer group select-none"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={!!selectedFilters.cardType[card.id]}
                            onChange={() =>
                              handleCheckboxChange("cardType", card.id)
                            }
                            className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                          />
                          <span className="text-sm text-gray-700">
                            {card.label}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          {card.count}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Վայր */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">
                <button
                  onClick={() => toggleSection("location")}
                  className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
                >
                  <span>Վայր</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-gray-500 transition-transform ${openSections.location ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {openSections.location && (
                  <div className="space-y-3 pt-1">
                    {locationList.map((loc) => (
                      <label
                        key={loc.id}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        <input
                          type="checkbox"
                          checked={!!selectedFilters.location[loc.id]}
                          onChange={() =>
                            handleCheckboxChange("location", loc.id)
                          }
                          className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">
                          {loc.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Բենեֆիթ */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">
                <button
                  onClick={() => toggleSection("benefit")}
                  className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
                >
                  <span>Բենեֆիթ</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-gray-500 transition-transform ${openSections.benefit ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {openSections.benefit && (
                  <div className="space-y-3 pt-1">
                    {benefitList.map((ben) => (
                      <label
                        key={ben.id}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        <input
                          type="checkbox"
                          checked={!!selectedFilters.benefit[ben.id]}
                          onChange={() =>
                            handleCheckboxChange("benefit", ben.id)
                          }
                          className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">
                          {ben.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Ոլորտ */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">
                <button
                  onClick={() => toggleSection("sector")}
                  className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
                >
                  <span>Ոլորտ</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-gray-500 transition-transform ${openSections.sector ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {openSections.sector && (
                  <div className="space-y-3 pt-1 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                    {sectorList.map((sec) => (
                      <label
                        key={sec.id}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        <input
                          type="checkbox"
                          checked={!!selectedFilters.sector[sec.id]}
                          onChange={() =>
                            handleCheckboxChange("sector", sec.id)
                          }
                          className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">
                          {sec.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. Հարթակ */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">
                <button
                  onClick={() => toggleSection("platform")}
                  className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
                >
                  <span>Հարթակ</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-gray-500 transition-transform ${openSections.platform ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {openSections.platform && (
                  <div className="space-y-3 pt-1">
                    {platformList.map((plat) => (
                      <label
                        key={plat.id}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        <input
                          type="checkbox"
                          checked={!!selectedFilters.platform[plat.id]}
                          onChange={() =>
                            handleCheckboxChange("platform", plat.id)
                          }
                          className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">
                          {plat.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-6">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-[#5D00E0] text-white py-3 rounded-xl font-bold text-sm cursor-pointer hover:bg-purple-800 transition-colors"
              >
                Կիրառել ֆիլտրները
              </button>
            </div>
          </div>
          <div
            className="flex-1"
            onClick={() => setMobileFiltersOpen(false)}
          ></div>
        </div>

        {/* Двухколоночный макет: Слева фильтры, Справа сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 items-start">
          {/* Левый сайдбар с фильтрами */}
          <aside className="hidden md:block md:col-span-1 lg:col-span-1 space-y-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900">Ֆիլտրներ</h2>

            {/* Сортировка */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Դասավորել
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none appearance-none cursor-pointer focus:border-[#5D00E0]">
                  <option>Ըստ հանրաճանաչության</option>
                  <option>Զեղչի չափի (նվազման)</option>
                  <option>Այբբենական</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* 1. Քարտատեսակ */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
              <button
                onClick={() => toggleSection("cardType")}
                className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
              >
                <span>Քարտատեսակ</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-gray-500 transition-transform ${openSections.cardType ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {openSections.cardType && (
                <div className="space-y-3 pt-1 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                  {cardTypesList.map((card) => (
                    <label
                      key={card.id}
                      className="flex items-center justify-between cursor-pointer group select-none"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={!!selectedFilters.cardType[card.id]}
                          onChange={() =>
                            handleCheckboxChange("cardType", card.id)
                          }
                          className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                          {card.label}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {card.count}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Վայր */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
              <button
                onClick={() => toggleSection("location")}
                className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
              >
                <span>Վայր</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-gray-500 transition-transform ${openSections.location ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {openSections.location && (
                <div className="space-y-3 pt-1">
                  {locationList.map((loc) => (
                    <label
                      key={loc.id}
                      className="flex items-center gap-3 cursor-pointer group select-none"
                    >
                      <input
                        type="checkbox"
                        checked={!!selectedFilters.location[loc.id]}
                        onChange={() =>
                          handleCheckboxChange("location", loc.id)
                        }
                        className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                        {loc.label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Բենեֆիթ */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
              <button
                onClick={() => toggleSection("benefit")}
                className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
              >
                <span>Բենեֆիթ</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-gray-500 transition-transform ${openSections.benefit ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {openSections.benefit && (
                <div className="space-y-3 pt-1">
                  {benefitList.map((ben) => (
                    <label
                      key={ben.id}
                      className="flex items-center gap-3 cursor-pointer group select-none"
                    >
                      <input
                        type="checkbox"
                        checked={!!selectedFilters.benefit[ben.id]}
                        onChange={() => handleCheckboxChange("benefit", ben.id)}
                        className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                        {ben.label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Ոլորտ */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
              <button
                onClick={() => toggleSection("sector")}
                className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
              >
                <span>Ոլորտ</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-gray-500 transition-transform ${openSections.sector ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {openSections.sector && (
                <div className="space-y-3 pt-1 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                  {sectorList.map((sec) => (
                    <label
                      key={sec.id}
                      className="flex items-center gap-3 cursor-pointer group select-none"
                    >
                      <input
                        type="checkbox"
                        checked={!!selectedFilters.sector[sec.id]}
                        onChange={() => handleCheckboxChange("sector", sec.id)}
                        className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                        {sec.label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Հարթակ */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
              <button
                onClick={() => toggleSection("platform")}
                className="w-full flex items-center justify-between font-bold text-gray-900 text-base cursor-pointer focus:outline-none"
              >
                <span>Հարթակ</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-gray-500 transition-transform ${openSections.platform ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {openSections.platform && (
                <div className="space-y-3 pt-1">
                  {platformList.map((plat) => (
                    <label
                      key={plat.id}
                      className="flex items-center gap-3 cursor-pointer group select-none"
                    >
                      <input
                        type="checkbox"
                        checked={!!selectedFilters.platform[plat.id]}
                        onChange={() =>
                          handleCheckboxChange("platform", plat.id)
                        }
                        className="w-4 h-4 rounded border-gray-300 text-[#5D00E0] focus:ring-[#5D00E0] cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-[#5D00E0] transition-colors">
                        {plat.label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Правая часть: Сетка карточек с размером lg:grid-cols-2 для меньших карточек в ряд */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {loading ? (
                <p className="text-center text-gray-500 py-12 col-span-full">
                  Բեռնվում է...
                </p>
              ) : filteredBenefits.length > 0 ? (
                filteredBenefits.slice(0, visibleCount).map((item) => {
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
                      className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white pb-4 hover:shadow-md transition-shadow"
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
                          <span className="text-[#5D00E0]">{percent}</span>{" "}
                          {name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                          {item.discountType}
                        </p>
                        <div className="flex items-center justify-between mt-4">
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
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-gray-500 py-12 col-span-full">
                  Ոչինչ չի գտնվել
                </p>
              )}
            </div>

            {/* Кнопка "Загрузить еще" */}
            {!loading && visibleCount < filteredBenefits.length && (
              <div className="flex justify-center mt-10 mb-12">
                <button
                  onClick={loadMore}
                  className="flex items-center gap-2 text-[#5D00E0] font-bold text-sm px-6 py-3 hover:bg-purple-50 rounded-xl transition-colors cursor-pointer border border-purple-100"
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
          </div>
        </div>

        {/* FAQ Секция */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">
            Հաճախ տրվող հարցեր
          </h2>
          <div className="flex flex-col gap-4">
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
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 text-base focus:outline-none cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="pr-4">{item.question}</span>
                    <div className="w-8 h-8 flex items-center justify-center shrink-0 text-[#5D00E0]">
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
                    <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white border-t border-purple-100 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Левая часть: Логотип, Заголовок и Контакты */}
            <div className="space-y-4 w-full md:w-auto">
              <a href="/" className="flex items-center cursor-pointer">
                <img
                  src={evocaBenefitsLogo}
                  alt="Evoca Benefits"
                  className="h-7 object-contain"
                />
              </a>
              <h3 className="text-sm font-bold text-gray-900">
                Կոնտակտային տվյալներ
              </h3>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1">
                <a
                  href="tel:+37410605555"
                  className="flex items-center gap-2 text-gray-800 hover:text-[#5D00E0] transition-colors cursor-pointer text-sm font-medium"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+374 10 605555</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-gray-800 hover:text-[#5D00E0] transition-colors cursor-pointer text-sm font-medium"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Կապ մեզ հետ</span>
                </a>
              </div>
            </div>

            {/* Правая часть: Приложение и бейджи магазинов */}
            <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
              <span className="text-sm font-bold text-[#5D00E0]">
                Ներբեռնել EvocaTouch հավելվածը
              </span>
              <div className="flex items-center gap-3">
                {/* App Store Badge */}
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-3.5 py-2 rounded-lg flex items-center gap-2.5 hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.65-.79 1.09-1.89.97-2.99-.94.04-2.08.63-2.74 1.42-.58.68-1.1 1.79-.96 2.88 1.05.08 2.12-.52 2.73-1.31z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] text-gray-300">
                      Download on the
                    </div>
                    <div className="text-xs font-semibold tracking-wide">
                      App Store
                    </div>
                  </div>
                </a>

                {/* Google Play Badge */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-3.5 py-2 rounded-lg flex items-center gap-2.5 hover:opacity-90 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.86-1.35V3.164a1.5 1.5 0 0 1 .859-1.35z"
                      fill="#EA4335"
                    />
                    <path
                      d="M17.5 15.708l-3.708-3.708L3.61 22.186a1.5 1.5 0 0 0 2.155.122l11.735-6.6z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M17.5 8.292L5.765 1.692a1.5 1.5 0 0 0-2.155.122L13.792 12 17.5 8.292z"
                      fill="#34A853"
                    />
                    <path
                      d="M17.5 8.292l-3.792 3.708 3.792 3.708 3.322-1.868a1.5 1.5 0 0 0 0-3.68L17.5 8.292z"
                      fill="#4285F4"
                    />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] text-gray-300">GET IT ON</div>
                    <div className="text-xs font-semibold tracking-wide">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
