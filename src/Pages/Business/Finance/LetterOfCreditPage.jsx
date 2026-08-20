import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import LatestNews from "../../Individual/HomePage/Components/LatestNews";

import { db } from "../../../firebase";

const LetterOfCreditPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "letter_of_credit_page_config", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.warn("Document letter_of_credit_page_config/main not found!");
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
        <div className="h-32 bg-gray-100 rounded-xl mt-8"></div>
        <div className="h-48 bg-gray-100 rounded-xl mt-8"></div>
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
          </div>
        </div>

        {data.conditions && data.conditions.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              {data.conditionsTitle}
            </h2>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc pl-5">
              {data.conditions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {data.consultationText && (
          <div className="mb-12 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>{data.consultationText}</p>
          </div>
        )}

        {data.tariffsTitle && (
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-wide">
            {data.tariffsTitle}
          </h2>
        )}

        {data.tableRows && data.tableRows.length > 0 && (
          <div className="border border-purple-100 rounded-xl overflow-hidden mb-4 shadow-sm">
            {data.tableHeader && (
              <div className="bg-purple-50/50 py-3 px-4 border-b border-purple-100 font-semibold text-sm text-gray-800">
                {data.tableHeader}
              </div>
            )}
            <table className="w-full text-sm text-left text-gray-700">
              <tbody>
                {data.tableRows.map((row, index) => (
                  <tr
                    key={row.id || index}
                    className={`border-b border-purple-100 ${
                      index % 2 === 1 ? "bg-purple-50/30" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 border-r border-purple-100 text-gray-800 w-1/2 align-top">
                      {row.title}
                    </td>
                    <td className="py-4 px-6 text-gray-700 font-medium align-top">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {data.noteText && (
          <p className="text-sm text-gray-600 mb-16">
            <span className="font-semibold text-gray-900">ՆՇՈՒՄ</span> –{" "}
            {data.noteText}
          </p>
        )}
      </div>

      <div className="w-full mb-16">
        <LatestNews />
      </div>
    </div>
  );
};

export default LetterOfCreditPage;
