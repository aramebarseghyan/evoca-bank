import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const CardDetailWindow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      {/* Верхний серый блок с заголовком и картинкой */}
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
        {/* Кнопка возврата и хлебные крошки */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-8 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium w-fit cursor-pointer shrink-0"
          >
            ← Վերադառնալ
          </button>

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

        {/* Вкладки (Tabs) */}
        <div className="border-b border-gray-200 mb-12 flex gap-8">
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

        {/* Контент вкладок */}
        {activeTab === "about" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Левая часть: Подробный текст */}
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                Որտեղ ես ուզում լինել վաղը. Փարիզում, Դուբայում, թե քեզ համար
                նոր, արկածներով լի վայրում:
              </h2>
              <p>{cardData.fullDescription || cardData.description}</p>
              <p>
                Ձեռք բերելով{" "}
                <span className="font-semibold text-gray-900">
                  {cardData.title}
                </span>{" "}
                դու դառնում ես Evocabank-ի պրեմիում քարտապան և ստանում մի շարք
                արտոնություններ ոչ միայն Հայաստանում, այլ նաև ամբողջ աշխարհում՝
                միջազգային ճանապարհորդական ապահովագրություն, կոնսիերժ
                ծառայություն, անվճար մուտք օդանավակայանների բիզնես սպասասրահներ,
                Fast track, արտարժույթի արտոնյալ կուրս և այլն:
              </p>
            </div>

            {/* Правая часть: Карточка условий с иконками валют */}
            <div className="lg:col-span-5 bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#5D00E0] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  ֏
                </div>
                <div className="w-10 h-10 rounded-full bg-[#5D00E0] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  $
                </div>
                <div className="w-10 h-10 rounded-full bg-[#5D00E0] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  €
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {cardData.conditions && cardData.conditions.length > 0 ? (
                  cardData.conditions.map((cond, idx) => (
                    <div
                      key={idx}
                      className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
                    >
                      <div className="sm:col-span-5 flex flex-col">
                        {cond.topLabel && (
                          <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                            {cond.topLabel}
                          </span>
                        )}
                        <span className="text-2xl sm:text-3xl font-bold text-[#5D00E0]">
                          {cond.value}
                        </span>
                      </div>
                      <div className="sm:col-span-7 text-sm text-gray-700 leading-snug">
                        {cond.description || cond.label}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-center py-6">
                    Պայմաններ առկա չեն
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Таблица сакагнеров, берущая данные из conditions */
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-bold text-gray-900 text-lg">
              {cardData.title}
            </div>
            <div className="divide-y divide-gray-200">
              {cardData.conditions && cardData.conditions.length > 0 ? (
                cardData.conditions.map((cond, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 items-center hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="sm:col-span-8 text-gray-700 text-sm sm:text-base pr-4">
                      {cond.label}
                    </div>
                    <div className="sm:col-span-4 text-gray-900 font-medium text-sm sm:text-base sm:text-right mt-1 sm:mt-0">
                      {cond.value}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-gray-500">
                  Սակագների տվյալները թարմացման փուլում են:
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetailWindow;
