import React from "react";
import { useSearchParams } from "react-router-dom";
import FilterDropdown from "./Components/FilterDropdown";
import InfoList from "./Components/InfoList";

const mockCardFilters = [
  { id: "all", label: "Քարտեր" },
  { id: "premium", label: "Պրեմիում" },
  { id: "gift", label: "Նվեր քարտեր" },
  { id: "digital", label: "Թվային քարտեր" },
  {
    id: "arca",
    label: "ArCa",
    icon: "https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png",
  },
  {
    id: "visa",
    label: "Visa",
    icon: "https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png",
  },
  {
    id: "mastercard",
    label: "Mastercard",
    icon: "https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png",
  },
  {
    id: "unionpay",
    label: "UnionPay",
    icon: "https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png",
  },
];

const CardsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("category") || "all";

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
      <FilterDropdown
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filters={mockCardFilters}
      />
      <InfoList activeFilter={activeFilter} collectionName="cards" />
    </div>
  );
};

export default CardsPage;
