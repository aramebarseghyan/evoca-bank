import React, { useState, useEffect } from "react";
import LoanProductCard from "./LoanProductCard";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

// --- 1. СПИСОК ФИЛЬТРОВ ---
const mockFilters = [
  { id: "all", label: "Բոլորը" },
  { id: "secured", label: "Գրավով ապահովված սպառողական վարկեր" },
  { id: "unsecured", label: "Անգրավ սպառողական վարկեր" },
  { id: "mortgage", label: "Հիփոթեքային վարկեր" },
  { id: "auto", label: "Ավտոմեքենաների ձեռքբերման ֆինանսավորում" },
  { id: "credit", label: "Ապառիկ" },
  { id: "online", label: "Օնլայն վարկեր" },
];

// --- 2. КОМПОНЕНТ ФИЛЬТРОВ ---
const FilterDropdown = ({ activeFilter, setActiveFilter }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleFilterSelect = (id) => {
    setActiveFilter(id);
    setIsOpen(false);
  };

  return (
    <div className="w-full font-sans bg-white mb-8">
      <div className="flex justify-end mb-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 bg-[#f2f2f2] text-gray-800 py-2 px-6 rounded-full font-medium text-[16px] hover:bg-gray-200 active:bg-gray-300 transition-colors cursor-pointer"
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
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          Ֆիլտրեր
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 max-h-[800px] scale-100"
            : "opacity-0 max-h-0 scale-95"
        }`}
      >
        <div className="flex flex-wrap gap-x-3 gap-y-4 pb-4">
          {mockFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterSelect(filter.id)}
              className={`text-left px-5 py-3 rounded-[24px] text-[14px] leading-snug transition-colors duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[#5D00E0] text-white"
                  : "bg-[#f2f2f2] text-gray-700 hover:bg-gray-200 active:bg-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. ГЛАВНЫЙ КОМПОНЕНТ СТРАНИЦЫ ---
const LoansPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "loans"));
        const loansList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(loansList);
      } catch (error) {
        console.error("Ошибка при загрузке данных из Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "all") return true;
    if (product.type === activeFilter || product.categoryId === activeFilter)
      return true;

    const title = (product.title || "").toLowerCase();

    if (activeFilter === "online" && title.includes("օնլայն")) return true;
    if (
      activeFilter === "mortgage" &&
      (title.includes("հիփոթեք") || title.includes("հիփոթեքային"))
    )
      return true;
    if (
      activeFilter === "auto" &&
      (title.includes("ավտո") || title.includes("մեքենա"))
    )
      return true;
    if (activeFilter === "secured" && title.includes("գրավով")) return true;
    if (activeFilter === "unsecured" && title.includes("անգրավ")) return true;
    if (activeFilter === "credit" && title.includes("ապառիկ")) return true;

    return false;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10">
      <FilterDropdown
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="w-full space-y-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-500 text-lg">Загрузка данных...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-500 text-lg">
              Այս կատեգորիայում դեռ վարկեր չկան.
            </p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <LoanProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default LoansPage;
