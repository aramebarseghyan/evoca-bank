import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function ConstructionCompanies() {
  const [contractorsData, setContractorsData] = useState([]);
  const [openId, setOpenId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContractors = async () => {
      try {
        const docSnap = await getDoc(doc(db, "contractors", "main"));
        if (docSnap.exists()) {
          setContractorsData(docSnap.data().contractors || []);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchContractors();
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800">
      <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-900 mb-4">
        ԿԱՌՈՒՑԱՊԱՏՈՂՆԵՐ
      </h1>

      <div className="text-sm text-gray-600 space-y-2 mb-8 leading-relaxed">
        <p>
          Ձեռք բերեք Ձեր նորակառույց և հարմարավետ բնակարանը{" "}
          <span className="text-[#6C1C97] font-semibold">Evocabank</span>-ի հետ։
        </p>
        <p>
          Ծանոթացեք մեզ հետ համագործակցող կառուցապատող կազմակերպությունների
          ցանկին և անհրաժեշտ տեղեկատվությանը ստորև։
        </p>
      </div>

      <h2 className="text-base font-bold uppercase tracking-wide text-gray-900 mb-4">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      <div className="space-y-4">
        {contractorsData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                isOpen ? "border-[#6C1C97]" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center px-6 py-4 text-left font-semibold text-sm text-gray-700 hover:bg-gray-50 focus:outline-none transition-colors"
              >
                <span
                  className={`mr-4 text-xs transform transition-transform duration-300 text-[#6C1C97] ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
                {item.title}
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2 sm:pl-12">
                    <div className="space-y-1 text-sm text-gray-700 mb-5">
                      <p>
                        <strong className="text-[#6C1C97] font-bold">
                          Կառուցապատող՝{" "}
                        </strong>
                        {item.developer}
                      </p>
                      <p>
                        <strong className="text-[#6C1C97] font-bold">
                          Հեռ.՝{" "}
                        </strong>
                        {item.phone}
                      </p>
                      <p>
                        <strong className="text-[#6C1C97] font-bold">
                          Հասցե՝{" "}
                        </strong>
                        {item.address}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.images.map((imgSrc, idx) => (
                        <img
                          key={idx}
                          src={imgSrc}
                          alt={`${item.title} ${idx + 1}`}
                          className="w-full h-auto rounded-xl border border-gray-100 object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
