import React from "react";
import { Link } from "react-router-dom";
import { Globe, EyeOff, QrCode, Phone, Mail } from "lucide-react";

const EvocaLogin = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] flex flex-col font-sans">
      {}
      <header className="flex justify-between items-center py-6 px-8 md:px-12">
        <Link
          to="/"
          className="text-[26px] tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="font-bold text-[#5c5d61]">evoca</span>
          <span className="font-light text-[#8a8a8f]">BANK</span>
        </Link>
        <button className="text-gray-700 hover:text-black transition-colors">
          <Globe size={24} strokeWidth={1.5} />
        </button>
      </header>

      {}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-10 pb-20">
        {}
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.04)] w-full max-w-[460px]">
          <h1 className="text-[22px] font-bold text-[#1d1d1f] mb-8">
            Մուտք համակարգ
          </h1>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {}
            <div>
              <input
                type="text"
                placeholder="Մուտքանուն"
                defaultValue=""
                className="w-full px-4 py-3 text-[15px] border border-[#6F1DCE] rounded-md focus:outline-none focus:ring-1 focus:ring-[#6F1DCE] text-[#1d1d1f] bg-transparent"
              />
            </div>

            {}
            <div className="relative">
              <input
                type="password"
                placeholder="Գաղտնաբառ"
                className="w-full px-4 py-3 text-[15px] border border-gray-300 rounded-md focus:outline-none focus:border-[#6F1DCE] focus:ring-1 focus:ring-[#6F1DCE] pr-12 text-[#1d1d1f]"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <EyeOff size={20} strokeWidth={1.5} />
              </button>
            </div>

            {}
            <button
              type="submit"
              className="w-full bg-[#6411C9] hover:bg-[#520fa6] text-white py-3.5 rounded-md text-[15px] font-medium transition-colors mt-2"
            >
              Մուտք
            </button>
          </form>

          {}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-[13px] text-[#5c5d61] hover:text-[#1d1d1f] transition-colors"
            >
              Մոռացե՞լ եք մուտքանունը կամ գաղտնաբառը
            </a>
          </div>
        </div>

        {}
        <div className="bg-white p-5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.04)] w-full max-w-[460px] mt-4 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-2">
            <QrCode size={20} className="text-[#6411C9]" />
            <span className="font-semibold text-[14px] text-[#1d1d1f]">
              Մուտք QR կոդով
            </span>
          </div>
        </div>

        {}
        <div className="mt-16">
          <a
            href="#"
            className="text-[13px] font-bold text-[#5c5d61] hover:text-[#1d1d1f]"
          >
            Կայքի հին տարբերակ
          </a>
        </div>
      </main>

      {}
      <footer className="px-8 py-6 md:px-12 flex flex-col xl:flex-row justify-between items-center text-[12px] text-[#8a8a8f] gap-6 xl:gap-0 pb-10">
        {}
        <div className="space-y-1.5 text-center xl:text-left">
          <p>© 2026 Էվոկաբանկ</p>
          <p>Բանկը վերահսկվում է ՀՀ Կենտրոնական բանկի կողմից</p>
          <p>Տարբերակ 8.17.3.0</p>
        </div>

        {}
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 text-[13px] text-[#5c5d61]">
          <a
            href="tel:+37410605555"
            className="flex items-center space-x-2 hover:text-black"
          >
            <Phone size={16} />
            <span>(+374 10) 60 55 55</span>
          </a>
          <a
            href="mailto:hello@evoca.am"
            className="flex items-center space-x-2 hover:text-black"
          >
            <Mail size={16} />
            <span>hello@evoca.am</span>
          </a>
        </div>

        {}
        <div className="flex items-center space-x-3">
          <button className="bg-black text-white px-2.5 py-1.5 rounded-[5px] flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] text-gray-300">Download on the</span>
              <span className="text-[13px] font-semibold">App Store</span>
            </div>
          </button>
          <button className="bg-black text-white px-2.5 py-1.5 rounded-[5px] flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] text-gray-300">GET IT ON</span>
              <span className="text-[13px] font-semibold">Google Play</span>
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default EvocaLogin;
