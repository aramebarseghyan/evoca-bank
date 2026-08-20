import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import InfoCard from "./InfoCard";

export default function InfoList({ activeFilter = "all", collectionName = "cards" }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 18;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const itemsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsList);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [collectionName]);

  const filteredItems = items.filter((item) => {
    if (activeFilter === "all") return true;

    const itemCategoryName = (item.categoryName || "").toLowerCase();

    if (
      item.type === activeFilter ||
      item.categoryId === activeFilter ||
      item.category === activeFilter ||
      item.brand === activeFilter ||
      item.paymentSystem === activeFilter ||
      itemCategoryName === activeFilter
    ) {
      return true;
    }

    const title = (item.title || "").toLowerCase();
    const description = (item.description || "").toLowerCase();

    if (activeFilter === "premium") {
      if (
        item.isPremium === true ||
        item.category === "premium" ||
        item.type === "premium" ||
        title.includes("պրեմիում") ||
        title.includes("premium") ||
        description.includes("պրեմիում") ||
        description.includes("premium")
      ) {
        return true;
      }
    }

    if (activeFilter === "gift") {
      if (
        item.isGift === true ||
        item.category === "gift" ||
        title.includes("նվեր") ||
        title.includes("gift") ||
        description.includes("նվեր")
      ) {
        return true;
      }
    }

    if (activeFilter === "digital") {
      if (
        item.isDigital === true ||
        item.category === "digital" ||
        title.includes("թվային") ||
        title.includes("digital") ||
        description.includes("թվային")
      ) {
        return true;
      }
    }

    if (
      activeFilter === "general" &&
      (title.includes("ընդհանուր") || description.includes("ընդհանուր"))
    )
      return true;
    if (
      activeFilter === "tariffs" &&
      (title.includes("սակագն") || title.includes("սակագներ"))
    )
      return true;
    if (
      activeFilter === "rules" &&
      (title.includes("կանոն") || title.includes("պայման"))
    )
      return true;

    if (["arca", "visa", "mastercard", "unionpay"].includes(activeFilter)) {
      if (
        item.paymentSystem === activeFilter ||
        title.includes(activeFilter) ||
        description.includes(activeFilter)
      ) {
        return true;
      }
    }

    return false;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const validCurrentPage = Math.min(currentPage, totalPages);
  const indexOfLastItem = validCurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    searchParams.set("page", pageNumber);
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  if (loading) {
    return null;
  }

  return (
    <div>
      <div className="w-full space-y-6">
        {currentItems.length > 0 ? (
          currentItems.map((item) => <InfoCard key={item.id} item={item} />)
        ) : (
          <div className="text-center py-12 text-gray-500 text-lg">
            Այս կատեգորիայում տեղեկատվություն չկա:
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => handlePageChange(validCurrentPage - 1)}
            disabled={validCurrentPage === 1}
            className="disabled:opacity-30 cursor-pointer text-lg font-bold"
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-10 h-10 rounded-full font-bold transition-colors cursor-pointer ${
                  validCurrentPage === pageNum
                    ? "bg-[#5D00E0] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(validCurrentPage + 1)}
            disabled={validCurrentPage === totalPages}
            className="disabled:opacity-30 cursor-pointer text-lg font-bold"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}