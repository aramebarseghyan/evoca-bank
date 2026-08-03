import React from "react";
import ExchangeRates from "./ExchangeRates";
import AddressesCard from "./AddressesCard";

const RatesAndAddressesSection = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-6 items-start">
        <div className="w-full">
          <ExchangeRates />
        </div>

        <div className="w-full flex justify-center lg:block">
          <AddressesCard />
        </div>
      </div>
    </section>
  );
};

export default RatesAndAddressesSection;
