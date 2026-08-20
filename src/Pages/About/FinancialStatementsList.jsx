import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3_mGAyawhU5fZwKsg1CQLu-0MAGbZTY",
  authDomain: "evoca-app-cdeac.firebaseapp.com",
  projectId: "evoca-app-cdeac",
  storageBucket: "evoca-app-cdeac.firebasestorage.app",
  messagingSenderId: "197478671668",
  appId: "1:197478671668:web:5661f415d8b4445649f161",
  measurementId: "G-N469K2446L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
  const [yearsData, setYearsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const docRef = doc(db, "financialStatements", "reports_data");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().yearsData) {
          setYearsData(docSnap.data().yearsData);
        }
      } catch (error) {
        console.error("Error fetching financial statements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">
        Ֆինանսական հաշվետվություններ
      </h1>

      {loading ? (
        <div className="py-12 text-center text-gray-500 text-lg">
          Բեռնվում է...
        </div>
      ) : yearsData.length === 0 ? (
        <div className="py-12 text-center text-gray-500 text-lg">
          Հաշվետվություններ չեն գտնվել:
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {yearsData.map((item) => (
            <div key={item.year} className="flex flex-col">
              <h2 className="text-[22px] font-bold text-gray-800 mb-4">
                {item.year}
              </h2>

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
      )}
    </div>
  );
};

export default FinancialStatementsList;
