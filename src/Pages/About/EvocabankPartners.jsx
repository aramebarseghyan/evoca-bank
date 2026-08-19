import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const EvocabankPartners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "partners"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPartners(data);
      } catch (error) {
        console.error("Ошибка загрузки партнеров:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 font-semibold text-gray-600">
        Բեռնվում է...
      </div>
    );
  }

  const totalPages = Math.ceil(partners.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPartners = partners.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
          Գործընկերներ
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-200 mb-8">
          {currentPartners.map((partner) => (
            <div
              key={partner.id}
              className="h-44 sm:h-52 flex items-center justify-center p-6 border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
            >
              <img
                src={partner.image}
                alt="Partner logo"
                className="max-h-24 max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/200x100?text=Evoca";
                }}
              />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="text-gray-400 hover:text-gray-700 disabled:opacity-30"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-8 h-8 rounded-full font-semibold text-sm transition-colors ${
                  currentPage === num
                    ? "bg-purple-700 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="text-gray-400 hover:text-gray-700 disabled:opacity-30"
            >
              →
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default EvocabankPartners;
