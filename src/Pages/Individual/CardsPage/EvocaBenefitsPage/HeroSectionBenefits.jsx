import React from "react";

export default function HeroSectionBenefits() {
  return (
    <div className="text-center mt-6 mb-10 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#5D00E0] mb-6">
        Բացահայտիր Evoca քարտերի բենեֆիթները
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
        {/* VISA */}
        <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center">
          <span className="font-black italic tracking-wider text-[#1434CB] text-lg">
            VISA
          </span>
        </div>
        {/* Mastercard */}
        <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2">
          <div className="flex -space-x-1.5">
            <div className="w-4 h-4 rounded-full bg-[#EB001B]"></div>
            <div className="w-4 h-4 rounded-full bg-[#F79E1B] mix-blend-multiply"></div>
          </div>
          <span className="font-bold text-xs tracking-tight text-gray-800">
            mastercard
          </span>
        </div>
        {/* ArCa */}
        <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm flex items-center">
          <span className="font-extrabold text-[#004B87] text-base">arc</span>
          <span className="font-extrabold text-[#8DC63F] text-base">a</span>
        </div>
        {/* UnionPay */}
        <div className="px-3.5 py-2 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2">
          <div className="bg-[#E60012] text-white px-2 py-0.5 rounded-[4px] font-bold text-xs tracking-tight flex items-center">
            UnionPay
          </div>
          <span className="text-xs text-gray-600 font-bold tracking-wider">
            INTERNATIONAL
          </span>
        </div>
      </div>
    </div>
  );
}
