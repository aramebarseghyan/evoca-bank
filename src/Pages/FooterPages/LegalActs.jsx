import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const LegalActs = () => {
  const [lawsData, setLawsData] = useState([]);
  const [regulationsData, setRegulationsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLegalActsData = async () => {
      try {
        const docSnap = await getDoc(doc(db, "legalActs", "main"));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setLawsData(data.lawsData || []);
          setRegulationsData(data.regulationsData || []);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchLegalActsData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Էջի կոնտեյներ */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Բաժին 1: Օրենքներ */}
        <div className="mb-12">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#443f38] mb-6">
            Օրենքներ
          </h2>
          <ul className="flex flex-col gap-4">
            {lawsData.map((law, index) => (
              <li key={index}>
                <a
                  href={law.link}
                  className="text-[#6425fe] hover:text-[#4300c4] hover:underline font-medium text-[15px] md:text-[16px] transition-colors leading-relaxed block"
                >
                  {law.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Բաժին 2: Կանոնակարգեր և այլ իրավական ակտեր */}
        <div>
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#443f38] mb-6">
            Կանոնակարգեր և այլ իրավական ակտեր
          </h2>
          <ul className="flex flex-col gap-5">
            {regulationsData.map((reg) => (
              <li key={reg.id} className="flex items-start gap-3">
                <span className="text-[#6425fe] font-medium min-w-[20px] pt-1">
                  {reg.id}.
                </span>
                <a
                  href={reg.link}
                  className="text-[#6425fe] hover:text-[#4300c4] hover:underline font-medium text-[15px] md:text-[16px] transition-colors leading-relaxed block"
                >
                  {reg.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegalActs;
