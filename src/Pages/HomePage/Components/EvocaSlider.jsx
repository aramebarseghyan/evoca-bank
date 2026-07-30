import React, { useState, useEffect, useRef } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

function EvocaSlider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const q = query(collection(db, "slides"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const fetchedSlides = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSlides(fetchedSlides);
      } catch (error) {
        console.error("Error loading slides:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  const checkIsLight = (slide) => {
    if (!slide) return false;
    if (typeof slide.isDark === "boolean") {
      return !slide.isDark;
    }
    const bg = (slide.bgColor || "").toLowerCase();
    return (
      bg.includes("#efefef") || bg.includes("#ffffff") || bg.includes("#f3f4f6")
    );
  };

  const containerStyle =
    "w-full h-[580px] md:h-[540px] 2xl:h-[610px] bg-[#121212] md:rounded-bl-[80px] md:rounded-br-[80px] xl:rounded-br-none 2xl:rounded-bl-[160px]";

  if (loading) {
    return (
      <div
        className={`${containerStyle} flex items-center justify-center text-white`}
      >
        <div className="w-8 h-8 border-4 border-[#e5d5ff] border-t-[#6200EE] rounded-full animate-spin" />
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div
        className={`${containerStyle} flex items-center justify-center text-white`}
      >
        <p>No slides available.</p>
      </div>
    );
  }

  const currentSlide = slides[activeIndex] || slides[0];
  const isCurrentLight = checkIsLight(currentSlide);

  return (
    <div className={`relative ${containerStyle} overflow-hidden select-none`}>
      <Swiper
        modules={[Autoplay, Parallax, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        parallax={true}
        speed={700}
        loop={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        spaceBetween={0}
        grabCursor={true}
        className="w-full h-full"
      >
        {slides.map((slide) => {
          const slideIsLight = checkIsLight(slide);
          const slideBgColor =
            slide.bgColor || (slideIsLight ? "#EFEFEF" : "#121212");

          return (
            <SwiperSlide key={slide.id} className="w-full h-full">
              <div
                className="w-full h-full flex items-center justify-center transition-colors duration-500 ease-in-out"
                style={{ backgroundColor: slideBgColor }}
              >
                <div
                  className={`max-w-[1200px] 2xl:max-w-[1400px] mx-auto w-full h-full flex flex-col md:flex-row-reverse items-center justify-center md:justify-between relative px-6 md:px-12 2xl:px-16 ${
                    slideIsLight ? "text-gray-900" : "text-white"
                  }`}
                >
                  {/* Изображение слайда */}
                  <div
                    className="w-full md:w-1/2 h-[260px] md:h-[440px] 2xl:h-[500px] flex justify-center items-center pt-4 md:pt-0 pb-2 px-4 overflow-hidden 2xl:translate-x-[100px]"
                    data-swiper-parallax="-300"
                    data-swiper-parallax-opacity="0"
                  >
                    <img
                      src={slide.imageUrl}
                      alt={slide.title || ""}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl pointer-events-none select-none md:scale-105 2xl:scale-110"
                    />
                  </div>

                  {/* Текстовый блок */}
                  <div
                    className="w-full md:w-1/2 pb-20 md:pb-0 relative z-10 text-left flex flex-col items-start 2xl:-translate-x-[50px]"
                    data-swiper-parallax="-150"
                    data-swiper-parallax-opacity="0"
                  >
                    <h2 className="text-[22px] md:text-[36px] lg:text-[42px] 2xl:text-[48px] font-semibold mb-3 md:mb-5 tracking-wide leading-tight">
                      {slide.title}
                    </h2>

                    {slide.description && (
                      <p className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] mb-5 md:mb-8 opacity-85 leading-relaxed max-w-lg 2xl:max-w-xl">
                        {slide.description}
                      </p>
                    )}

                    {/* Мобильная кнопка Evocabank (w-full на мобильных, w-auto на ПК) */}
                    <a
                      href={slide.link || "#"}
                      className={`w-full md:w-auto inline-flex items-center justify-center py-3.5 px-6 md:py-3.5 md:px-10 2xl:py-4 2xl:px-12 font-medium rounded-full transition-all duration-300 text-center text-[16px] md:text-[17px] 2xl:text-[18px] tracking-wide shadow-md active:scale-95 ${
                        slideIsLight
                          ? "bg-[#6200EE] text-white hover:bg-[#5000C9]"
                          : "bg-[#6200EE] text-white md:bg-white md:text-[#6200EE] hover:bg-[#5000C9] md:hover:bg-gray-100"
                      }`}
                    >
                      {slide.buttonText || "Իմանալ ավելին"}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Панель навигации (стрелки + точки) */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex items-center justify-center gap-6 2xl:gap-10 px-6 z-30 pointer-events-auto">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeIndex === 0}
          className={`p-2 transition active:scale-90 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
            isCurrentLight ? "text-[#6200EE]" : "text-white"
          }`}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-1.5 2xl:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className="w-5 h-5 flex items-center justify-center cursor-pointer transition-transform active:scale-90"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? isCurrentLight
                      ? "w-2.5 h-2.5 bg-[#6200EE]"
                      : "w-2.5 h-2.5 bg-white"
                    : isCurrentLight
                      ? "w-1.5 h-1.5 bg-[#6200EE]/30 hover:bg-[#6200EE]/60"
                      : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeIndex === slides.length - 1}
          className={`p-2 transition active:scale-90 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
            isCurrentLight ? "text-[#6200EE]" : "text-white"
          }`}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default EvocaSlider;
