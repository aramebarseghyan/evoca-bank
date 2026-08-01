import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

import "swiper/css";
import "swiper/css/navigation";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.error("Ошибка при получении данных: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleDetailsClick = () => {
    if (cards[activeIndex]) {
      console.log(`Переход к: ${cards[activeIndex].title}`);
    }
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
    <div className="w-full bg-[#F4F7FF] flex flex-col pt-8 pb-12 px-5 font-sans min-h-screen">
      <div className="relative w-full mb-6">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true} // <-- ДОБАВИЛИ БЕСКОНЕЧНУЮ ПРОКРУТКУ
          spaceBetween={10}
          slidesPerView={1}
          // Используем realIndex вместо activeIndex, чтобы тексты не сбивались
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
              <div className="flex justify-center items-center px-10 py-4">
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

      <div className="flex flex-col mt-2 px-1">
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
          className="w-full bg-[#6500D8] active:bg-[#4E00A8] text-white py-[14px] rounded-full text-[16px] font-medium transition-colors shadow-md mt-auto relative"
        >
          Մանրամասն
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
