import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const TransferPaymentSystems = () => {
  const [systems, setSystems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSystems = async () => {
      try {
        const docRef = doc(db, "transfers_config", "payment_systems");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSystems(docSnap.data().systems || []);
        }
      } catch (error) {
        console.error("Error fetching payment systems:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSystems();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500 font-medium text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      <div className="max-w-[1440px] mx-auto pt-4 md:pt-6 px-4 sm:px-8 lg:px-16">
        {/* Sub-navigation tabs */}
        <div className="flex border-b border-gray-200 mb-12">
          <a
            href="/money-transfers"
            className="pb-4 px-6 text-gray-500 font-medium hover:text-[#5D00E0] transition-colors"
          >
            Դրամական փոխանցումներ
          </a>
          <a
            href="/transfer-payment-systems"
            className="pb-4 px-6 text-[#5D00E0] font-bold border-b-2 border-[#5D00E0]"
          >
            Վճարային համակարգեր
          </a>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((sys, idx) => (
            <div
              key={sys.id || idx}
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={sys.logo}
                    alt="Payment System Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">
                  {sys.description}
                </p>
              </div>

              {sys.phone && (
                <div className="border-t border-gray-100 pt-4 mt-auto text-center">
                  <p className="text-xs md:text-sm font-bold text-[#5D00E0] mb-1">
                    {sys.phoneLabel}
                  </p>
                  <p className="text-gray-900 font-bold text-base md:text-lg">
                    {sys.phone}
                  </p>
                  {sys.scheduleTitle && (
                    <div className="mt-3">
                      <p className="text-xs md:text-sm font-bold text-[#5D00E0]">
                        {sys.scheduleTitle}
                      </p>
                      <p className="text-gray-700 text-xs md:text-sm whitespace-pre-line mt-1">
                        {sys.schedule}
                      </p>
                    </div>
                  )}
                  {sys.languages && (
                    <p className="text-gray-700 text-xs md:text-sm whitespace-pre-line mt-2">
                      {sys.languages}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferPaymentSystems;
