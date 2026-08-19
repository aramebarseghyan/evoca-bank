import React, { useState } from "react";


import arcaLogo from "./assets/arca.svg";
import visaLogo from "./assets/visa.svg";
import mastercardLogo from "./assets/mastercard.svg";
import unionpayLogo from "./assets/unionpay.svg";

const filters = [
  { id: "all", label: "Բոլորը" },
  { id: "premium", label: "Պրեմիում" },
  { id: "gift", label: "Նվեր քարտեր" },
  { id: "digital", label: "Թվային քարտեր" },
  { id: "arca", logo: arcaLogo },
  { id: "visa", logo: visaLogo },
  { id: "mastercard", logo: mastercardLogo },
  { id: "unionpay", logo: unionpayLogo },
];

export default function PaymentFilters() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex items-center gap-3 overflow-x-auto py-3 px-4">
      {filters.map((item) => {
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center justify-center px-5 py-3 rounded-full transition-all duration-200 shrink-0 ${
              isActive
                ? "bg-[#7f00ff] text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200" 
            }`}
          >
            {item.label ? (
              <span className="font-medium text-sm">{item.label}</span>
            ) : (
              <div className="h-5 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt="payment logo"
                  className={`h-full w-auto object-contain transition-all duration-200 ${
                    isActive ? "brightness-0 invert" : ""
                  }`}
                />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
