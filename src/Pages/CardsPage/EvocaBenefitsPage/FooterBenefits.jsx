import React from "react";
import evocaBenefitsLogo from "../../../assets/img/evoca-benefits.png";

export default function FooterBenefits() {
  return (
    <footer className="mt-20 bg-white border-t border-purple-100 pt-10 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4 w-full md:w-auto">
            <a href="/" className="flex items-center cursor-pointer">
              <img
                src={evocaBenefitsLogo}
                alt="Evoca Benefits"
                className="h-7 object-contain"
              />
            </a>
            <h3 className="text-sm font-bold text-gray-900">
              Կոնտակտային տվյալներ
            </h3>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1">
              <a
                href="tel:+37410605555"
                className="flex items-center gap-2 text-gray-800 hover:text-[#5D00E0] transition-colors cursor-pointer text-sm font-medium"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+374 10 605555</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-gray-800 hover:text-[#5D00E0] transition-colors cursor-pointer text-sm font-medium"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Կապ մեզ հետ</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
            <span className="text-sm font-bold text-[#5D00E0]">
              Ներբեռնել EvocaTouch հավելվածը
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-3.5 py-2 rounded-lg flex items-center gap-2.5 hover:opacity-90 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.65-.79 1.09-1.89.97-2.99-.94.04-2.08.63-2.74 1.42-.58.68-1.1 1.79-.96 2.88 1.05.08 2.12-.52 2.73-1.31z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] text-gray-300">
                    Download on the
                  </div>
                  <div className="text-xs font-semibold tracking-wide">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-3.5 py-2 rounded-lg flex items-center gap-2.5 hover:opacity-90 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.86-1.35V3.164a1.5 1.5 0 0 1 .859-1.35z"
                    fill="#EA4335"
                  />
                  <path
                    d="M17.5 15.708l-3.708-3.708L3.61 22.186a1.5 1.5 0 0 0 2.155.122l11.735-6.6z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M17.5 8.292L5.765 1.692a1.5 1.5 0 0 0-2.155.122L13.792 12 17.5 8.292z"
                    fill="#34A853"
                  />
                  <path
                    d="M17.5 8.292l-3.792 3.708 3.792 3.708 3.322-1.868a1.5 1.5 0 0 0 0-3.68L17.5 8.292z"
                    fill="#4285F4"
                  />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] text-gray-300">GET IT ON</div>
                  <div className="text-xs font-semibold tracking-wide">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
