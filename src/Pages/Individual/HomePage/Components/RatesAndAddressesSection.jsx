import React from "react";
import ExchangeRates from "./ExchangeRates";
import AddressesCard from "./AddressesCard";

const RatesAndAddressesSection = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-8 lg:py-12 2xl:py-16 select-none">
      {/* На 2xl задаем max-w-[1440px], точную ширину правой колонки (380px) и комфортный отступ gap-20 */}
      <div className="max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_350px] 2xl:grid-cols-[1fr_380px] gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-start">
        {/* Левая колонка — Курсы валют */}
        <div className="w-full">
          <ExchangeRates />
        </div>

        {/* Правая колонка — Карточка адресов */}
        <div className="w-full pt-1 lg:pt-3 2xl:pt-4">
          <AddressesCard />
        </div>
      </div>
    </section>
  );
};

export default RatesAndAddressesSection;
