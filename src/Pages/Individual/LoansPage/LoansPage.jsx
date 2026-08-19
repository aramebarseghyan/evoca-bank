import React, { useState } from "react";
import FilterDropdown from "./Components/FilterDropdown";
import LoanList from "./Components/LoanList";
import FavoritesWidget from "./FavoritesWidget";

const LoansPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-10 relative">
      <FilterDropdown
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <LoanList activeFilter={activeFilter} />

      {}
      <FavoritesWidget />
    </div>
  );
};

export default LoansPage;
