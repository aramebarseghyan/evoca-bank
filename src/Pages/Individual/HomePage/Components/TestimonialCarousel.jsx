import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";


import hand1 from "../../../../assets/img/hand1.png";
import hand2 from "../../../../assets/img/hand2.png";
import shape5 from "../../../../assets/img/shape5.png";
import shape6 from "../../../../assets/img/shape6.png";


import "swiper/css";
import "swiper/css/pagination";


const QuoteIcon = ({ color = "#6F00FF", className = "" }) => (
  <svg
    className={className}
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0V20H11.2V9.6L7.2 0H0ZM12.8 0V20H24V9.6L20 0H12.8Z"
      fill={color}
    />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill={filled ? "#FFD700" : "#E0E0E0"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const TestimonialCard = ({ testimonial }) => {
  const { rating, text, authorName, authorTitle } = testimonial;

  return (
    <div className="text-center px-1 pb-1 flex flex-col justify-between h-full items-center">
      {}
      <div className="flex justify-center gap-1 mb-2.5 xl:mb-2">
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
      </div>

      {}
      <div className="relative py-2 flex items-center justify-between w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] mx-auto px-2">
        <QuoteIcon className="shrink-0 w-5 lg:w-6 xl:w-7 h-auto self-start mt-1" />

        <p className="text-[#424242] text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[17px] leading-[1.4] lg:leading-[1.6] font-medium font-sans text-center px-3 sm:px-4 flex-1 m-0">
          {text}
        </p>

        <QuoteIcon className="shrink-0 rotate-180 w-5 lg:w-6 xl:w-7 h-auto self-end mb-1" />
      </div>

      {}
      <div className="mt-3 xl:mt-2 flex flex-col justify-center items-center">
        <h3 className="text-[#1A1A26] text-[16px] sm:text-[17px] lg:text-[18px] font-bold m-0 leading-tight">
          {authorName}
        </h3>
        <p className="text-[#7A7A8C] text-[13px] sm:text-[14px] lg:text-[15px] mt-0.5 m-0 leading-tight">
          {authorTitle}
        </p>
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
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
        console.error("Error loading reviews from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return null;
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#F7F6F9] py-6 lg:py-8 xl:py-6 pb-8 lg:pb-10 xl:pb-10 w-full flex justify-center overflow-hidden">
      <style>
        {`
          @keyframes float-left {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(-6deg); }
          }
          @keyframes float-right {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-14px) rotate(8deg); }
          }
          @keyframes shape-bounce {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-8px) scale(1.1); }
          }
          @keyframes shape-rotate {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(20deg); }
          }
          
          .animate-hand-left {
            animation: float-left 2.8s ease-in-out infinite;
          }
          .animate-hand-right {
            animation: float-right 2.5s ease-in-out infinite 0.3s;
          }
          .animate-shape-1 {
            animation: shape-bounce 2.2s ease-in-out infinite 0.1s;
          }
          .animate-shape-2 {
            animation: shape-rotate 3s ease-in-out infinite 0.4s;
          }
        `}
      </style>

      {}
      <div className="relative w-full max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] xl:max-w-[1250px] 2xl:max-w-[1400px] flex justify-center items-center px-4 lg:px-10 xl:px-16">
        {}
        <img
          src={hand2}
          alt="Hand OK"
          className="animate-hand-left hidden md:block absolute md:-left-4 lg:left-0 xl:-left-6 2xl:-left-12 top-[2%] xl:top-[0%] w-28 lg:w-34 xl:w-28 2xl:w-32 pointer-events-none select-none z-10"
        />
        <img
          src={shape5}
          alt="Decorative Shape"
          className="animate-shape-1 hidden md:block absolute md:left-2 lg:left-12 xl:left-16 2xl:left-24 bottom-2 xl:bottom-2 w-8 lg:w-10 xl:w-10 2xl:w-12 pointer-events-none select-none z-10"
        />

        {}
        <div
          className="
            bg-transparent 
            px-4 lg:px-8 xl:px-0 pt-2 pb-2 
            relative w-full max-w-[450px] md:max-w-[550px] lg:max-w-[750px] xl:max-w-[900px]
            
            [&_.swiper-pagination]:!relative 
            [&_.swiper-pagination]:!mt-4 
            xl:[&_.swiper-pagination]:!mt-5
            
            [&_.swiper-pagination-bullet]:w-2 
            [&_.swiper-pagination-bullet]:h-2 
            [&_.swiper-pagination-bullet]:bg-[#E0E0E0] 
            [&_.swiper-pagination-bullet]:opacity-100 
            [&_.swiper-pagination-bullet]:transition-all 
            [&_.swiper-pagination-bullet]:duration-300
            [&_.swiper-pagination-bullet-active]:bg-[#6F00FF] 
            [&_.swiper-pagination-bullet-active]:scale-[1.3]
          "
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {}
        <img
          src={hand1}
          alt="Hand Like"
          className="animate-hand-right hidden md:block absolute md:-right-4 lg:right-0 xl:-right-6 2xl:-right-12 top-[6%] xl:top-[4%] w-28 lg:w-36 xl:w-30 2xl:w-34 pointer-events-none select-none z-10"
        />
        <img
          src={shape6}
          alt="Decorative Shape"
          className="animate-shape-2 hidden md:block absolute md:right-2 lg:right-12 xl:right-16 2xl:right-24 bottom-4 xl:bottom-4 w-10 lg:w-14 xl:w-12 2xl:w-14 pointer-events-none select-none z-10"
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
