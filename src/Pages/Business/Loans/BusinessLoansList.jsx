import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { Link } from "react-router-dom";

import { db } from "../../../firebase"; 

const BusinessLoansList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "businessLoans"));

        const loansData = querySnapshot.docs.map((doc) => ({
          id: doc.id,

          ...doc.data(),
        }));

        setLoans(loansData);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchLoans();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col gap-8">
      {loans.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          {}

          <div className="w-full md:w-[320px] h-[200px] bg-[#F7F7F9] rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-contain p-4"
            />
          </div>

          {}

          <div className="flex-1 flex flex-col justify-between">
            <div>
              {}

              <h2 className="text-2xl sm:text-[28px] font-bold text-[#111827] leading-tight mb-3">
                {card.title}
              </h2>

              {}

              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-[700px]">
                {card.description}
              </p>

              {}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {card.metrics?.map((metric, index) => (
                  <div key={index} className="flex flex-col justify-start">
                    {metric.topLabel && (
                      <span className="text-gray-400 text-xs mb-1">
                        {metric.topLabel}
                      </span>
                    )}

                    <span className="text-2xl sm:text-[26px] font-bold text-[#6322C6] leading-none mb-2">
                      {metric.value}
                    </span>

                    {metric.bottomLabel && (
                      <span className="text-gray-400 text-xs leading-snug">
                        {metric.bottomLabel}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {}

            <div>
              <Link
                to={`/business-loans/${card.id}`}
                className="inline-flex items-center justify-center bg-[#F1EBFA] text-[#6322C6] hover:bg-[#e4d7f7] transition-colors font-medium text-sm px-6 py-2.5 rounded-full group"
              >
                <span>{card.buttonText || "Մանրամասն"}</span>

                <svg
                  className="w-4 h-4 ml-1.5 transform group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessLoansList;
