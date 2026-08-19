import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../firebase";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

function EvocaSlider() {
  const navigate = useNavigate();
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

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/cards");
  };

  if (loading) {
    return (
      <div className="w-full h-[580px] md:h-[540px] bg-[#121212] flex items-center justify-center text-white md:rounded-bl-[80px] md:rounded-br-[80px] xl:rounded-br-none 2xl:rounded-bl-[120px]">
        <div className="w-8 h-8 border-4 border-[#e5d5ff] border-t-[#6200EE] rounded-full animate-spin" />
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="w-full h-[580px] md:h-[540px] bg-[#121212] flex items-center justify-center text-white md:rounded-bl-[80px] md:rounded-br-[80px] xl:rounded-br-none 2xl:rounded-bl-[120px]">
        <p>No slides available.</p>
      </div>
    );
  }

  const currentSlide = slides[activeIndex] || slides[0];
  const isCurrentLight = checkIsLight(currentSlide);

  return (
    <div className="relative w-full h-[580px] md:h-[540px] overflow-hidden select-none bg-[#121212] md:rounded-bl-[80px] md:rounded-br-[80px] xl:rounded-br-none 2xl:rounded-bl-[120px]">
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
                  className={`max-w-[1200px] mx-auto w-full h-full flex flex-col md:flex-row-reverse items-center justify-center md:justify-between relative px-6 md:px-12 ${
                    slideIsLight ? "text-gray-900" : "text-white"
                  }`}
                >
                  <div
                    className="w-full md:w-1/2 h-[260px] md:h-[440px] flex justify-center items-center pt-4 md:pt-0 pb-2 px-4 overflow-hidden"
                    data-swiper-parallax="-300"
                    data-swiper-parallax-opacity="0"
                  >
                    <img
                      src={slide.imageUrl}
                      alt={slide.title || ""}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl pointer-events-none select-none md:scale-105"
                    />
                  </div>

                  <div
                    className="w-full md:w-1/2 pb-20 md:pb-0 relative z-10 text-left flex flex-col items-start"
                    data-swiper-parallax="-150"
                    data-swiper-parallax-opacity="0"
                  >
                    <h2 className="text-[22px] md:text-[36px] lg:text-[42px] font-semibold mb-3 md:mb-5 tracking-wide leading-tight">
                      {slide.title}
                    </h2>

                    {slide.description && (
                      <p className="text-[14px] md:text-[16px] lg:text-[18px] mb-5 md:mb-8 opacity-85 leading-relaxed max-w-lg">
                        {slide.description}
                      </p>
                    )}

                    <button
                      onClick={handleButtonClick}
                      className={`inline-flex items-center justify-center py-3 px-8 md:py-3.5 md:px-10 font-medium rounded-full transition-all duration-300 text-center text-[15px] md:text-[17px] tracking-wide shadow-sm active:scale-95 cursor-pointer ${
                        slideIsLight
                          ? "bg-[#6200EE] text-white hover:bg-[#5000C9] hover:shadow-md"
                          : "bg-white text-[#6200EE] hover:bg-gray-100 hover:shadow-md"
                      }`}
                    >
                      {slide.buttonText || "Իմանալ ավելին"}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex items-center justify-between xl:justify-center xl:gap-6 px-6 md:px-12 z-30 pointer-events-auto">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeIndex === 0}
          className={`p-2 -ml-2 xl:ml-0 transition active:scale-90 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
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

        <div className="flex flex-wrap items-center justify-center gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className="w-6 h-6 flex items-center justify-center cursor-pointer transition-transform active:scale-90"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? isCurrentLight
                      ? "w-2.5 h-2.5 bg-[#6200EE]"
                      : "w-2.5 h-2.5 bg-white"
                    : isCurrentLight
                      ? "w-1.5 h-1.5 bg-[#6200EE]/30"
                      : "w-1.5 h-1.5 bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeIndex === slides.length - 1}
          className={`p-2 -mr-2 xl:mr-0 transition active:scale-90 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
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
