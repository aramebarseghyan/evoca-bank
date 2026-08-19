import React from "react";


const DocumentIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H14"
      stroke="#8c32ff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20V14"
      stroke="#8c32ff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 13H12"
      stroke="#8c32ff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 17H10"
      stroke="#8c32ff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 9H16"
      stroke="#8c32ff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle
      cx="18"
      cy="18"
      r="5"
      fill="#f8f6fa"
      stroke="#8c32ff"
      strokeWidth="1.5"
    />
    <path
      d="M18 15.5V20.5M18 20.5L16.5 19M18 20.5L19.5 19"
      stroke="#8c32ff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AnnualReports = () => {
  
  const reports = [
    "2021 Տարեկան հաշվետվություն",
    "2020 Տարեկան հաշվետվություն",
    "2022 Տարեկան հաշվետվություն",
    "2023 Տարեկան հաշվետվություն",
    "2024 Տարեկան հաշվետվություն",
    "2024 Տարեկան հաշվետվություն",
    "2025 տարեկան հաշվետվություն",
  ];

  return (
    <div className="w-full bg-white flex justify-center py-12">
      <div className="w-full max-w-[850px] px-4 md:px-6">
        {}
        <h2 className="text-xl md:text-[22px] font-extrabold text-[#1a1a26] mb-6">
          Փաստաթղթեր
        </h2>

        {}
        <div className="flex flex-col gap-3">
          {reports.map((report, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-4 bg-[#f8f6fa] hover:bg-[#efebf5] transition-colors duration-200 py-3.5 px-5 rounded-md cursor-pointer group"
            >
              <DocumentIcon />
              <span className="text-[14px] md:text-[15px] font-bold text-[#1a1a26] group-hover:text-[#6F00FF] transition-colors">
                {report}
              </span>
            </a>
          ))}
        </div>

        {}
        <div className="w-full mt-16 pt-4 border-t border-gray-100 flex justify-end">
          <span className="text-[11px] md:text-[12px] text-gray-400 font-medium">
            Թարմացվել է՝ 08/07/2026 10:27
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnualReports;
