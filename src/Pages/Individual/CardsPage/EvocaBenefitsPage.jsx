import { useState, useEffect, useRef, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import HeaderBenefits from "./EvocaBenefitsPage/HeaderBenefits";
import HeroSectionBenefits from "./EvocaBenefitsPage/HeroSectionBenefits";
import FilterSidebarBenefits from "./EvocaBenefitsPage/FilterSidebarBenefits";
import BenefitCardBenefits from "./EvocaBenefitsPage/BenefitCardBenefits";
import FaqSectionBenefits from "./EvocaBenefitsPage/FaqSectionBenefits";
import FooterBenefits from "./EvocaBenefitsPage/FooterBenefits";

export default function EvocaBenefitsPage() {
  const [benefits, setBenefits] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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
        "Օֆլայն՝ խանութում, սրճարանում կամ վաճառակետում բենեֆիթներից օգտվելու համար պարզապես պետք է վճարել Ձեր Evoca քարտով...",
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
      answer: "Բենեֆիթները տրամադրվում են բոլոր Evoca քարտերի համար...",
    },
    {
      question: "Ինչպե՞ս պատվիրել Evoca քարտ:",
      answer:
        "Քարտ կարող եք պատվիրել evoca.am կայքի կամ EvocaTOUCH հավելվածի միջոցով...",
    },
    {
      question: "Ինչպե՞ս կարող է իմ բիզնեսը միանալ Evoca բենեֆիթներին:",
      answer:
        "Ձգտելով մեր հաճախորդներին տրամադրել լավագույն առաջարկներն ու լուծումները՝ մենք միշտ բաց ենք համագործակցությունների համար...",
    },
  ];

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
      <HeaderBenefits />
      <HeroSectionBenefits />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-16">
        {/* Поиск и мобильная кнопка фильтров */}
        <div className="max-w-2xl mx-auto mb-10 flex items-center gap-3">
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

        {/* Выдвижная панель мобильных фильтров */}
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
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
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

              <FilterSidebarBenefits
                openSections={openSections}
                toggleSection={toggleSection}
                cardTypesList={cardTypesList}
                locationList={locationList}
                benefitList={benefitList}
                sectorList={sectorList}
                platformList={platformList}
                selectedFilters={selectedFilters}
                handleCheckboxCategoryChange={handleCheckboxChange}
              />
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

        {/* Основная сетка: Сайдбар + Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 items-start">
          <aside className="hidden md:block md:col-span-1 lg:col-span-1 sticky top-24">
            <FilterSidebarBenefits
              openSections={openSections}
              toggleSection={toggleSection}
              cardTypesList={cardTypesList}
              locationList={locationList}
              benefitList={benefitList}
              sectorList={sectorList}
              platformList={platformList}
              selectedFilters={selectedFilters}
              handleCheckboxCategoryChange={handleCheckboxChange}
            />
          </aside>

          <div className="md:col-span-3 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {loading ? (
                <p className="text-center text-gray-500 py-12 col-span-full">
                  Բեռնվում է...
                </p>
              ) : filteredBenefits.length > 0 ? (
                filteredBenefits
                  .slice(0, visibleCount)
                  .map((item) => (
                    <BenefitCardBenefits key={item.id} item={item} />
                  ))
              ) : (
                <p className="text-center text-gray-500 py-12 col-span-full">
                  Ոչինչ չի գտնվել
                </p>
              )}
            </div>

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

        <FaqSectionBenefits faqItems={faqItems} />
      </main>

      <FooterBenefits />
    </div>
  );
}
