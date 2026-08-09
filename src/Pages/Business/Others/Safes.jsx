import React from "react";
import { Home, ChevronRight } from "lucide-react";

export default function SafeDepositBoxes() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 flex space-x-8">
          <button className="py-4 border-b-4 border-white font-medium text-sm focus:outline-none">
            Պահատուփեր
          </button>
          <button className="py-4 border-b-4 border-transparent hover:border-purple-400 text-purple-200 hover:text-white font-medium text-sm transition-colors focus:outline-none">
            Փոխանցումներ
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 space-x-2">
          <a href="#" className="hover:text-gray-700 flex items-center">
            <Home className="w-4 h-4" />
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <a href="#" className="hover:text-gray-700">
            Բիզնես
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <a href="#" className="hover:text-gray-700">
            Այլ
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-800 font-medium">Պահատուփեր</span>
        </nav>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Card */}
          <div className="lg:col-span-6 bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Պահատուփեր
            </h1>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ անձանց առաջարկում ենք արժեքավոր
              իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող անհատական
              պահատուփեր:
            </p>
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[450px]">
            <img
              src="/path-to-your-image.jpg"
              alt="Safe Deposit Boxes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
