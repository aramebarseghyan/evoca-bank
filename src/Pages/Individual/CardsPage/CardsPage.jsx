import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterDropdown from "./Components/FilterDropdown";
import InfoList from "./Components/InfoList";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

const CardsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeFilter = searchParams.get("category") || "all";

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "filters", "cards");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFilters(docSnap.data().filters || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, []);

  const setActiveFilter = (filterId) => {
    if (filterId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", filterId);
    }
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-10">
      {!loading && (
        <FilterDropdown
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filters={filters}
        />
      )}

      <InfoList activeFilter={activeFilter} collectionName="cards" />
    </div>
  );
};

export default CardsPage;
