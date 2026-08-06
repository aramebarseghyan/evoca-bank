import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const CardDetailWindow = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const docRef = doc(db, "cards", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCardData(docSnap.data());
        } else {
          console.error("Քարտը չի գտնվել");
        }
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-lg">Բեռնվում է...</div>;
  }

  if (!cardData) {
    return <div className="text-center py-20 text-lg">Քարտը չի գտնվել:</div>;
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div className="bg-[#f8f9fa] pt-12 pb-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {cardData.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {cardData.description}
            </p>
          </div>
          {cardData.imageUrl && (
            <div className="w-full lg:w-[480px] flex justify-center">
              <img
                src={cardData.imageUrl}
                alt={cardData.title}
                className="max-w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-8 mb-8">
          <Link
            to="/cards"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium w-fit cursor-pointer shrink-0"
          >
            ← Վերադառնալ
          </Link>

          <div className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
            <Link
              to="/"
              className="hover:text-[#5D00E0] transition-colors flex items-center"
            >
              <svg
                className="w-4 h-4 text-gray-400 hover:text-[#5D00E0]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v4.875h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
            <span>/</span>
            <span>Անհատ</span>
            <span>/</span>
            <Link
              to="/cards"
              className="hover:text-[#5D00E0] transition-colors"
            >
              Քարտեր
            </Link>

            {cardData.categoryName && (
              <>
                <span>/</span>
                <Link
                  to={`/cards?category=${cardData.categoryName.toLowerCase()}`}
                  className="hover:text-[#5D00E0] transition-colors font-medium text-gray-700"
                >
                  {cardData.categoryName}
                </Link>
              </>
            )}

            <span>/</span>
            <span className="text-gray-900 font-medium">{cardData.title}</span>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-8 flex gap-8">
          <button
            onClick={() => setActiveTab("about")}
            className={`pb-4 text-base sm:text-lg font-medium transition-colors relative cursor-pointer ${
              activeTab === "about"
                ? "text-gray-900 border-b-2 border-[#5D00E0]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Քարտի մասին
          </button>
          <button
            onClick={() => setActiveTab("tariffs")}
            className={`pb-4 text-base sm:text-lg font-medium transition-colors relative cursor-pointer ${
              activeTab === "tariffs"
                ? "text-gray-900 border-b-2 border-[#5D00E0]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Սակագներ և դրույթներ
          </button>
        </div>

        {activeTab === "about" ? (
          <div className="space-y-6 max-w-4xl text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>{cardData.fullDescription || cardData.description}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
            {cardData.conditions && cardData.conditions.length > 0 ? (
              cardData.conditions.map((cond, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex justify-between items-center"
                >
                  <span className="text-gray-600">{cond.label}</span>
                  <span className="font-bold text-lg text-[#5D00E0]">
                    {cond.value}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-gray-500 py-6">
                Սակագների մասին տեղեկատվություն չկա:
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetailWindow;
