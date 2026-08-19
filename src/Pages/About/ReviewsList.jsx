import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";


import hand1 from "../../assets/img/hand1.png";
import hand2 from "../../assets/img/hand2.png";
import shape5 from "../../assets/img/shape5.png";
import shape6 from "../../assets/img/shape6.png";


const LargeQuoteIcon = () => (
  <svg
    width="36"
    height="32"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mb-2"
  >
    <path
      d="M0 0V20H11.2V9.6L7.2 0H0ZM12.8 0V20H24V9.6L20 0H12.8Z"
      fill="#6F00FF"
    />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#FFD700" : "#E0E0E0"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);


const getAuthorCardStyle = (index) => {
  const styles = [
    
    {
      cardClass: "rounded-[40px] rounded-tr-none rounded-bl-none",
      bgElement: "bg-blue-100",
      bgShapeClass: "rounded-full",
      decorImage: hand2,
      decorClass: "w-16 -right-8 top-1/2 -translate-y-1/2",
    },
    
    {
      cardClass:
        "rounded-full aspect-square flex justify-center items-center p-6",
      bgElement: "bg-pink-100 border-dotted border-4 border-pink-300",
      bgShapeClass: "rounded-[30px] rotate-12",
      decorImage: hand1,
      decorClass: "w-16 -left-10 bottom-0",
    },
    
    {
      cardClass: "rotate-45 rounded-[24px]",
      innerClass: "-rotate-45",
      bgElement: "bg-purple-100",
      bgShapeClass: "rounded-[24px] -rotate-12",
      decorImage: shape5,
      decorClass: "w-16 -right-6 bottom-6",
    },
    
    {
      cardClass: "rounded-[30px]",
      bgElement: "bg-yellow-100",
      bgShapeClass: "rounded-xl rotate-45",
      decorImage: shape6,
      decorClass: "w-14 -left-6 top-6",
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
        console.error("Error loading reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return null;
  }

  if (testimonials.length === 0) return null;

  return (
    <div className="bg-[#f8f9fc] py-16 w-full overflow-hidden">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-[1000px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-20 lg:gap-24">
          {testimonials.map((t, index) => {
            const isReverse = index % 2 !== 0;
            const cardStyle = getAuthorCardStyle(index);

            return (
              <div
                key={t.id}
                className={`flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {}
                <div className="w-full lg:w-4/12 flex justify-center relative">
                  {}
                  <div
                    className={`absolute w-48 h-48 md:w-56 md:h-56 opacity-60 ${cardStyle.bgElement} ${cardStyle.bgShapeClass} ${
                      isReverse ? "-right-2" : "-left-2"
                    } top-2`}
                  ></div>

                  {}
                  <div
                    className={`bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center text-center w-48 h-48 md:w-56 md:h-56 relative z-10 p-4 ${
                      cardStyle.cardClass
                    }`}
                  >
                    <div className={cardStyle.innerClass || ""}>
                      <h3 className="text-[#1A1A26] text-lg font-bold mb-1">
                        {t.authorName}
                      </h3>
                      <p className="text-gray-500 text-xs max-w-[160px]">
                        {t.authorTitle}
                      </p>
                    </div>
                  </div>

                  {}
                  {cardStyle.decorImage && (
                    <img
                      src={cardStyle.decorImage}
                      alt="decoration"
                      className={`absolute animate-float z-20 pointer-events-none drop-shadow-lg ${cardStyle.decorClass}`}
                    />
                  )}
                </div>

                {}
                <div className="w-full lg:w-7/12 flex flex-col justify-center items-start text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 mb-3 w-full">
                    <LargeQuoteIcon />
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < t.rating} />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium whitespace-pre-line w-full">
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
