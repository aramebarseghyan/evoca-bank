import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
// ВАЖНО: Укажи правильный путь к твоему firebase.js
import { db } from "../../firebase";

// Картинки из assets/img (убедись, что пути правильные)
import hand1 from "../../assets/img/hand1.png";
import hand2 from "../../assets/img/hand2.png";
import shape5 from "../../assets/img/shape5.png";
import shape6 from "../../assets/img/shape6.png";

// --- ИКОНКИ (SVG) ---
const LargeQuoteIcon = () => (
  <svg
    width="44"
    height="40"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mb-4"
  >
    <path
      d="M0 0V20H11.2V9.6L7.2 0H0ZM12.8 0V20H24V9.6L20 0H12.8Z"
      fill="#6F00FF"
    />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill={filled ? "#FFD700" : "#E0E0E0"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

// Ամեն քարտի համար առանձին ֆոնային և դիզայներական ոճեր
const getAuthorCardStyle = (index) => {
  const styles = [
    // 0: Սուսաննա Վանյան
    {
      cardClass: "rounded-[50px] rounded-tr-none rounded-bl-none",
      bgElement: "bg-blue-100",
      bgShapeClass: "rounded-full",
      decorImage: hand2,
      decorClass: "w-20 -right-10 top-1/2 -translate-y-1/2",
    },
    // 1: Նոնե Գևորգյան
    {
      cardClass:
        "rounded-full aspect-square flex justify-center items-center p-8",
      bgElement: "bg-pink-100 border-dotted border-4 border-pink-300",
      bgShapeClass: "rounded-[40px] rotate-12",
      decorImage: hand1,
      decorClass: "w-20 -left-12 bottom-0",
    },
    // 2: Արամ Ազարյան
    {
      cardClass: "rotate-45 rounded-[30px]",
      innerClass: "-rotate-45",
      bgElement: "bg-purple-100",
      bgShapeClass: "rounded-[30px] -rotate-12",
      decorImage: shape5,
      decorClass: "w-20 -right-8 bottom-10",
    },
    // 3: Էլեն Վարդանյան
    {
      cardClass: "rounded-[40px]",
      bgElement: "bg-yellow-100",
      bgShapeClass: "rounded-2xl rotate-45",
      decorImage: shape6,
      decorClass: "w-16 -left-8 top-10",
    },
  ];

  return styles[index % styles.length];
};

const ReviewsList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(data);
      } catch (error) {
        console.error("Ошибка при загрузке отзывов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#f8f9fc] min-h-[400px] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6F00FF]"></div>
      </div>
    );
  }

  if (testimonials.length === 0) return null;

  return (
    <div className="bg-[#f8f9fc] py-16 w-full overflow-hidden">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-24 lg:gap-32">
          {testimonials.map((t, index) => {
            const isReverse = index % 2 !== 0;
            const cardStyle = getAuthorCardStyle(index);

            return (
              <div
                key={t.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* --- 1. Карточка Автора --- */}
                <div className="w-full lg:w-5/12 flex justify-center relative">
                  {/* Հեռացվել է -z-10, որպեսզի ֆոնը տեսանելի լինի */}
                  <div
                    className={`absolute w-64 h-64 md:w-80 md:h-80 opacity-60 ${cardStyle.bgElement} ${cardStyle.bgShapeClass} ${
                      isReverse ? "-right-4" : "-left-4"
                    } top-4`}
                  ></div>

                  {/* Белая карточка с тенью */}
                  <div
                    className={`bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center text-center w-64 h-64 md:w-80 md:h-80 relative z-10 ${
                      cardStyle.cardClass
                    }`}
                  >
                    <div className={cardStyle.innerClass || ""}>
                      <h3 className="text-[#1A1A26] text-xl font-bold mb-2">
                        {t.authorName}
                      </h3>
                      <p className="text-gray-500 text-sm max-w-[200px]">
                        {t.authorTitle}
                      </p>
                    </div>
                  </div>

                  {/* Плавающая 3D рука / фигура */}
                  {cardStyle.decorImage && (
                    <img
                      src={cardStyle.decorImage}
                      alt="decoration"
                      className={`absolute animate-float z-20 pointer-events-none drop-shadow-xl ${cardStyle.decorClass}`}
                    />
                  )}
                </div>

                {/* --- 2. Блок Текста --- */}
                <div className="w-full lg:w-7/12 flex flex-col items-start">
                  <div className="flex gap-4 items-start mb-4">
                    <LargeQuoteIcon />
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < t.rating} />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium whitespace-pre-line">
                    {t.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
