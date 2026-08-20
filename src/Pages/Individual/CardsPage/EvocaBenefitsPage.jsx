import { useState, useEffect, useRef, useMemo } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

import HeaderBenefits from "./EvocaBenefitsPage/HeaderBenefits";
import HeroSectionBenefits from "./EvocaBenefitsPage/HeroSectionBenefits";
import FilterSidebarBenefits from "./EvocaBenefitsPage/FilterSidebarBenefits";
import BenefitCardBenefits from "./EvocaBenefitsPage/BenefitCardBenefits";
import FaqSectionBenefits from "./EvocaBenefitsPage/FaqSectionBenefits";
import FooterBenefits from "./EvocaBenefitsPage/FooterBenefits";

export default function EvocaBenefitsPage() {
  const [benefits, setBenefits] = useState([]);
  const [filtersConfig, setFiltersConfig] = useState({
    cardTypesList: [],
    locationList: [],
    benefitList: [],
    sectorList: [],
    platformList: [],
  });
  const [faqItems, setFaqItems] = useState([]);

  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [openSections, setOpenSections] = useState({
    cardType: true,
    location: false,
    benefit: false,
    sector: false,
    platform: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    cardType: {},
    location: {},
    benefit: {},
    sector: {},
    platform: {},
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const filtersSnap = await getDoc(doc(db, "benefits_config", "filters"));
        if (filtersSnap.exists()) {
          setFiltersConfig(filtersSnap.data());
        }

        const faqSnap = await getDoc(doc(db, "benefits_config", "faq"));
        if (faqSnap.exists() && faqSnap.data().items) {
          setFaqItems(faqSnap.data().items);
        }

        const querySnapshot = await getDocs(collection(db, "evoca_benefits"));
        const data = querySnapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setBenefits(data);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (category, id) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [id]: !prev[category][id],
      },
    }));
  };

  useEffect(() => {
    setVisibleCount(9);
  }, [selectedFilters, searchQuery]);

  const filteredBenefits = useMemo(() => {
    return benefits.filter((item) => {
      const isAnyActive = (category) =>
        Object.values(selectedFilters[category] || {}).some(Boolean);

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

      const searchMatch =
        !searchQuery.trim() ||
        item.title?.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        item.name?.toLowerCase().includes(searchQuery.toLowerCase().trim());

      return (
        cardTypeMatch &&
        locationMatch &&
        benefitMatch &&
        sectorMatch &&
        platformMatch &&
        searchMatch
      );
    });
  }, [benefits, selectedFilters, searchQuery]);

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="min-h-screen bg-white font-sans relative pb-0 overflow-x-hidden">
      <HeaderBenefits />
      <HeroSectionBenefits />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-16">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Որոնել"
              className="bg-transparent border-none outline-none ml-3 w-full text-base text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>

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
                cardTypesList={filtersConfig.cardTypesList}
                locationList={filtersConfig.locationList}
                benefitList={filtersConfig.benefitList}
                sectorList={filtersConfig.sectorList}
                platformList={filtersConfig.platformList}
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

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 items-start">
          <aside className="hidden md:block md:col-span-1 lg:col-span-1 sticky top-24">
            <FilterSidebarBenefits
              openSections={openSections}
              toggleSection={toggleSection}
              cardTypesList={filtersConfig.cardTypesList}
              locationList={filtersConfig.locationList}
              benefitList={filtersConfig.benefitList}
              sectorList={filtersConfig.sectorList}
              platformList={filtersConfig.platformList}
              selectedFilters={selectedFilters}
              handleCheckboxCategoryChange={handleCheckboxChange}
            />
          </aside>

          <div className="md:col-span-3 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {loading ? (
                <div className="col-span-full text-center py-12 text-[#5D00E0] font-semibold animate-pulse">
                  Բեռնում...
                </div>
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
