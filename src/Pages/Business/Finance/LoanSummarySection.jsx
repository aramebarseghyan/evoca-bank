import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import LatestNews from "../../Individual/HomePage/Components/LatestNews";

import { db } from "../../../firebase";

const FactoringPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "factoring_page_config", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.warn("Document factoring_page_config/main not found!");
        }
      } catch (error) {
        console.error("Error loading data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white font-sans min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        <div className="h-64 bg-gray-100 rounded-xl mt-8"></div>
        <div className="h-20 bg-gray-100 rounded-xl mt-8"></div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed">
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {data.title}
          </h1>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            {data.introParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {data.locationNotice && (
              <p className="font-medium text-gray-900">{data.locationNotice}</p>
            )}
          </div>
        </div>

        {data.termsTitle && (
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-wide">
            {data.termsTitle}
          </h2>
        )}

        {data.tableRows && data.tableRows.length > 0 && (
          <div className="border border-purple-100 rounded-xl overflow-hidden mb-12 shadow-sm">
            <table className="w-full text-sm text-left text-gray-700">
              <tbody>
                {data.tableRows.map((row, index) => (
                  <tr
                    key={row.id || index}
                    className={`border-b border-purple-100 ${
                      index % 2 === 1 ? "bg-purple-50/30" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-4 w-16 text-center text-gray-500 font-medium border-r border-purple-100 align-top">
                      {row.id || index + 1}.
                    </td>
                    <td className="py-4 px-6 border-r border-purple-100 font-medium text-gray-800 w-1/2 align-top">
                      {row.title}
                    </td>
                    <td className="py-4 px-6 text-gray-700 align-top">
                      {Array.isArray(row.value)
                        ? row.value.map((v, vIdx) => (
                            <p
                              key={vIdx}
                              className={
                                vIdx < row.value.length - 1 ? "mb-2" : ""
                              }
                            >
                              {v}
                            </p>
                          ))
                        : row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {data.documentName && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-wide">
              {data.documentsTitle || "Փաստաթղթեր"}
            </h2>

            <a
              href={data.documentLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#f4f2f8] hover:bg-[#ece8f5] transition-colors rounded-xl border border-purple-100 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 text-purple-700 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2V8H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 15L12 18L15 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900 text-sm md:text-base">
                  {data.documentName}
                </span>
              </div>
              <div className="text-purple-700 p-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3V15M12 15L7 10M12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </section>
        )}
      </div>

      <div className="w-full mb-16">
        <LatestNews />
      </div>
    </div>
  );
};

export default FactoringPage;
