import React from "react";


const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-600 flex-shrink-0 w-6 h-6"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <path d="M12 18v-6"></path>
    <path d="M9 15l3 3 3-3"></path>
  </svg>
);

const FinancialStatementsList = () => {
  
  const yearsData = [
    {
      year: "2026",
      reports: [
        { title: "1-2026", url: "#" },
        { title: "2-2026", url: "#" },
      ],
    },
    {
      year: "2025",
      reports: [
        { title: "1-2025", url: "#" },
        { title: "2-2025", url: "#" },
        { title: "3-2025", url: "#" },
        { title: "4-2025", url: "#" },
      ],
    },
    {
      year: "2024",
      reports: [
        { title: "1-2024", url: "#" },
        { title: "2-2024", url: "#" },
        { title: "3-2024", url: "#" },
        { title: "4-2024", url: "#" },
      ],
    },
    {
      year: "2023",
      reports: [
        { title: "1-2023", url: "#" },
        { title: "2-2023", url: "#" },
        { title: "3-2023", url: "#" },
        { title: "4-2023", url: "#" },
      ],
    },
    {
      year: "2022",
      reports: [
        { title: "1-2022", url: "#" },
        { title: "2-2022", url: "#" },
        { title: "3-2022", url: "#" },
        { title: "4-2022", url: "#" },
      ],
    },
    {
      year: "2021",
      reports: [
        { title: "1-2021", url: "#" },
        { title: "2-2021", url: "#" },
        { title: "3-2021", url: "#" },
        { title: "4-2021", url: "#" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">
        Ֆինանսական հաշվետվություններ
      </h1>

      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
        {yearsData.map((item) => (
          <div key={item.year} className="flex flex-col">
            {}
            <h2 className="text-[22px] font-bold text-gray-800 mb-4">
              {item.year}
            </h2>

            {}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
              {item.reports.map((report, idx) => (
                <a
                  key={idx}
                  href={report.url}
                  className="flex items-center gap-3 bg-[#f5f2f8] px-4 py-3 rounded-lg hover:bg-[#ebe6f0] transition-colors duration-200 cursor-pointer"
                >
                  <DownloadIcon />
                  <span className="text-[15px] font-semibold text-gray-800">
                    {report.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialStatementsList;
