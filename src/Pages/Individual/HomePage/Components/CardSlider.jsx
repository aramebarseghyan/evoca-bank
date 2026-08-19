import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { db } from "../../../../firebase";
import { collection, getDocs } from "firebase/firestore";

import "swiper/css";
import "swiper/css/navigation";

const CardSlider = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    transition: "transform 0.5s ease-out, filter 0.5s ease",
  });

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cards"));
        const fetchedCards = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCards(fetchedCards);
      } catch (error) {
        console.error("error cards give ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleDetailsClick = () => {
    if (cards[activeIndex]) {
      navigate(`/cards/${cards[activeIndex].id}`);
    }
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "none",
      filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.3))",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease-out, filter 0.5s ease-out",
      filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.2))",
    });
  };

  if (loading) {
    return (
      <div className="w-full bg-[#F4F7FF] min-h-[500px] flex justify-center items-center font-sans">
        <p className="text-slate-500">Բեռնվում է...</p>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="w-full bg-[#F4F7FF] min-h-[500px] flex justify-center items-center font-sans">
        <p className="text-slate-900">Քարտեր չեն գտնվել</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F4F7FF] flex flex-col pt-8 pb-12 xl:pb-4 px-5 font-sans min-h-screen xl:min-h-0 relative">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeInScale {
          from { 
            opacity: 0; 
            transform: scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        .animate-fade-in {
          animation: fadeInScale 0.5s ease-out forwards;
        }
      `}</style>

      {/* ========================================= */}
      {/* ՄՈԲԱՅԼ ԵՎ ՊԼԱՆՇԵՏՆԵՐԻ ՏԱՐԲԵՐԱԿ (<1024px) */}
      {/* ========================================= */}
      <div className="relative w-full mb-6 lg:hidden">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
          style={{
            "--swiper-navigation-color": "#5A00C8",
            "--swiper-navigation-size": "24px",
            "--swiper-navigation-sides-offset": "0px",
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                className="flex justify-center items-center px-10 py-4 cursor-pointer"
                onClick={handleDetailsClick}
              >
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full max-w-[280px] aspect-[1.58] object-contain drop-shadow-2xl rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col mt-2 px-1 lg:hidden">
        <h2 className="text-[24px] font-medium text-[#1A1F36] mb-4 text-left">
          {cards[activeIndex]?.title}
        </h2>

        {cards[activeIndex]?.description && (
          <p className="text-[#4A5568] text-[15px] leading-relaxed mb-8 text-left whitespace-pre-line">
            {cards[activeIndex].description}
          </p>
        )}

        <button
          onClick={handleDetailsClick}
          className="w-full bg-[#6500D8] active:bg-[#4E00A8] text-white py-[14px] rounded-full text-[16px] font-medium transition-colors shadow-md mt-auto relative cursor-pointer"
        >
          Մանրամասն
        </button>
      </div>

      {/* ========================================= */}
      {/* LG DESKTOP ՏԱՐԲԵՐԱԿ (≥1024px)             */}
      {/* ========================================= */}
      <div className="hidden lg:flex flex-row w-full max-w-7xl mx-auto items-center justify-between min-h-[600px] xl:min-h-[550px] gap-8 xl:gap-12 px-4 xl:px-10">
        {/* 1. Ձախ կողմ: Ուղղահայաց սլայդեր (Փոքր քարտեր) */}
        <div className="flex flex-col items-center w-[180px] xl:w-[200px] h-[550px] relative shrink-0">
          <button className="swiper-button-prev-desktop flex justify-center items-center w-full pb-4 text-[#5A00C8] cursor-pointer disabled:opacity-30 disabled:cursor-default transition-opacity z-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            direction="vertical"
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-desktop",
              nextEl: ".swiper-button-next-desktop",
            }}
            className="w-full h-[450px]"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={card.id}>
                <div
                  className={`flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 h-full ${
                    activeIndex === index
                      ? "opacity-100 scale-105"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-[120px] xl:w-[140px] aspect-[1.58] object-cover rounded-lg shadow-md"
                  />
                  <span className="text-[13px] xl:text-[14px] font-medium text-[#1A1F36] text-center px-2">
                    {card.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-next-desktop flex justify-center items-center w-full pt-4 text-[#5A00C8] cursor-pointer disabled:opacity-30 disabled:cursor-default transition-opacity z-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-180"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

        {/* 2. Մեջտեղ: Մեծ քարտը (Ինտերակտիվ 3D էֆեկտով) */}
        <div className="flex flex-1 justify-center items-center relative perspective-[1000px]">
          <div
            key={activeIndex}
            className="animate-fade-in w-full max-w-[450px] xl:max-w-[550px] flex justify-center"
          >
            <img
              ref={cardRef}
              src={cards[activeIndex]?.imageUrl}
              alt={cards[activeIndex]?.title}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleDetailsClick}
              style={tiltStyle}
              className="w-full aspect-[1.58] object-contain rounded-2xl cursor-pointer will-change-transform"
            />
          </div>
        </div>

        {/* 3. Աջ կողմ: Տեքստ և Կոճակ */}
        <div className="flex flex-col justify-center w-[300px] xl:w-[350px] shrink-0 pr-4 2xl:-translate-y-[130px]">
          <h2 className="text-[28px] xl:text-[34px] font-semibold text-[#1A1F36] mb-5 text-left leading-tight">
            {cards[activeIndex]?.title}
          </h2>

          {cards[activeIndex]?.description && (
            <p className="text-[#4A5568] text-[15px] xl:text-[16px] leading-relaxed mb-8 text-left whitespace-pre-line">
              {cards[activeIndex].description}
            </p>
          )}

          <button
            onClick={handleDetailsClick}
            className="w-[180px] bg-[#6500D8] hover:bg-[#5A00C8] active:bg-[#4E00A8] text-white py-[14px] rounded-full text-[16px] font-medium transition-colors shadow-md relative cursor-pointer"
          >
            Մանրամասն
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
