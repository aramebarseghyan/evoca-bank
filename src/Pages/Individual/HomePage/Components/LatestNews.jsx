import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../../../firebase";

const LatestNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Տվյալների բեռնում
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "news"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNewsList(items);
      } catch (error) {
        console.error("Սխալ նորությունները Firebase-ից բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // 2. IntersectionObserver անիմացիայի համար
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("is-visible", e.isIntersecting),
        ),
      { rootMargin: "0px 0px -50px 0px", threshold: 0.1 },
    );

    document
      .querySelectorAll(".news-wrapper")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return null;
  }

  return (
    <section className="w-full bg-[#f6f8fb] py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] 2xl:text-[36px] font-extrabold text-[#222222]">
            Վերջին նորությունները
          </h2>

          <Link
            to="/news"
            className="hidden lg:inline-flex items-center gap-2 bg-[#E9E3FA] hover:bg-[#DDD4F8] text-[#6F00FF] font-bold text-[14px] 2xl:text-[15px] px-5 py-2.5 2xl:px-6 2xl:py-3 rounded-full transition-colors duration-200"
          >
            Բոլոր նորությունները
            <svg
              className="w-4 h-4 2xl:w-5 2xl:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>

        {/* 
          1. flex and overflow-x-auto work on mobile/sm/md 
          2. Starting at lg (desktop), the grid-cols-3 layout is enabled and scrolling is disabled
        */}
        <div className="news-wrapper flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-3 gap-4 md:gap-6 2xl:gap-8 pb-6 pt-2 snap-x snap-mandatory lg:snap-none hide-scrollbar">
          {newsList.map((news, index) => (
            <div
              /* 
                1. Mobile width: w-[270px], sm, md... and lg:w-full (the grid sets the size)
                2. If the index is > 2 (the fourth card and onward), hide it on desktop with lg:hidden 
              */
              className={`scroll-animate flex-shrink-0 w-[270px] sm:w-[calc(50%-8px)] md:w-[320px] lg:w-full snap-start ${
                index > 2 ? "lg:hidden" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                to={`/news/${news.id}`}
                className="block w-full h-full bg-white rounded-2xl 2xl:rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400x250?text=Evocabank";
                    }}
                  />
                </div>

                <div className="p-5 2xl:p-6 flex flex-col justify-between min-h-[160px] 2xl:min-h-[180px]">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-[3px] h-[14px] bg-[#6F00FF] rounded-full"></div>
                      <span className="text-[13px] 2xl:text-[14px] font-extrabold text-[#222222]">
                        {news.category}
                      </span>
                    </div>

                    <h3 className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[16px] 2xl:text-[18px] font-extrabold text-[#222222] leading-[1.4] line-clamp-3">
                      {news.title}
                    </h3>
                  </div>

                  <span className="text-[#a8aeb7] text-[13px] 2xl:text-[14px] mt-4 block font-medium">
                    {news.date}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scroll-animate { 
          opacity: 0; 
          transform: translateY(40px); 
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); 
          will-change: opacity, transform; 
        }
        
        .news-wrapper.is-visible .scroll-animate { 
          opacity: 1; 
          transform: translateY(0); 
        }


        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default LatestNews;
