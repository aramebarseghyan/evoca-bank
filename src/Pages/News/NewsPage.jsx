import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const categories = [
  "Գլխավոր",
  "Բանկային",
  "Հարցազրույցներ",
  "Պրոդուկտներ",
  "Նորարարություններ",
  "Կենսակերպ",
  "Մրցանակներ",
];

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "news"));
        const newsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNews(newsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return null;
  if (news.length < 10)
    return (
      <div className="text-center py-20">
        Տվյալները բավարար չեն։ Գործարկեք նորությունների ավելացման սկրիպտը։
      </div>
    );

  const topHero = news.find((n) => n.id === "news-01") || news[0];
  const middleLarge = news.find((n) => n.id === "news-02") || news[1];
  const middleSmall = news.filter((n) =>
    ["news-03", "news-04", "news-05", "news-06"].includes(n.id),
  );
  const bottomHero = news.find((n) => n.id === "news-07") || news[6];
  const bottomGrid = news.filter((n) =>
    ["news-08", "news-09", "news-10"].includes(n.id),
  );

  return (
    <div className="w-full font-sans text-[#333] relative overflow-hidden pb-20">
      {}
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div
            className="flex items-center justify-between w-full overflow-x-auto gap-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {}
            <style>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className="px-4 md:px-5 py-2 rounded-full text-[13px] md:text-sm font-medium bg-[#f4f5f7] text-[#555555] hover:bg-[#e2e4e8] transition-colors whitespace-nowrap shrink-0"
                >
                  {cat}
                </button>
              ))}
            </div>

            {}
            <Link
              to="/news/archive"
              className="px-5 md:px-6 py-2 rounded-full text-sm font-bold bg-[#f2e6ff] text-[#6a00ff] flex items-center gap-2 hover:bg-[#e8d4ff] transition-colors shrink-0 ml-auto"
            >
              Բոլորը <span className="text-lg leading-none">›</span>
            </Link>
          </div>
        </div>
      </div>

      <section className="relative w-full mb-16 pt-8">
        <div className="absolute top-0 left-0 w-[90%] lg:w-[75%] h-full bg-[#f8f6fb] rounded-br-[100px] -z-10"></div>

        <Link
          to={`/news/${topHero.id}`}
          className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12 group cursor-pointer block"
        >
          <div className="md:w-[45%]">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-4"
                style={{ backgroundColor: topHero.categoryColor }}
              ></span>
              <span className="text-sm font-bold text-[#333]">
                {topHero.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-[42px] font-bold leading-tight mb-6 text-[#2a1b54] group-hover:text-purple-700 transition-colors">
              {topHero.title}
            </h1>
            <p className="text-gray-600 mb-8 max-w-md text-sm md:text-base leading-relaxed">
              {topHero.description}
            </p>
            <p className="text-gray-400 text-sm">{topHero.date}</p>
          </div>

          <div className="md:w-[55%] relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-[5px] border-l-[5px] border-[#5c1bb9] z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 border-b-[5px] border-l-[5px] border-[#5c1bb9] z-10"></div>

            <img
              src={topHero.imageUrl}
              alt={topHero.title}
              className="w-full h-auto object-cover relative z-0"
            />
          </div>
        </Link>
      </section>

      <section className="relative max-w-[1200px] mx-auto px-4 py-12 mb-16">
        <div className="absolute top-[-20px] left-[-20px] text-[8rem] md:text-[12rem] font-bold text-gray-100 -z-10 select-none whitespace-nowrap opacity-70 pointer-events-none">
          Բաց մի թող
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Link
            to={`/news/${middleLarge.id}`}
            className="group cursor-pointer block"
          >
            <div className="relative mb-4">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-[4px] border-l-[4px] border-[#5c1bb9] z-10 transition-transform group-hover:scale-110"></div>
              <img
                src={middleLarge.imageUrl}
                alt={middleLarge.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="flex items-center gap-2 mb-3 mt-6">
              <span
                className="w-1 h-4"
                style={{ backgroundColor: middleLarge.categoryColor }}
              ></span>
              <span className="text-sm font-semibold text-[#e6c300]">
                {middleLarge.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-[#2a1b54] group-hover:text-purple-700 transition-colors">
              {middleLarge.title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              {middleLarge.description}
            </p>
            <p className="text-gray-400 text-sm">{middleLarge.date}</p>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {middleSmall.map((item) => (
              <Link
                to={`/news/${item.id}`}
                key={item.id}
                className="group cursor-pointer flex flex-col"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[180px] object-cover mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-1 h-4"
                    style={{ backgroundColor: item.categoryColor }}
                  ></span>
                  <span className="text-sm font-semibold text-gray-500">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-md mb-auto text-[#2a1b54] group-hover:text-purple-700 transition-colors line-clamp-3">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="text-gray-400 text-sm mt-3">{item.date}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative max-w-[1200px] mx-auto px-4 py-16">
        <div className="absolute top-[30%] left-[20%] text-[8rem] md:text-[12rem] font-bold text-gray-100 -z-10 select-none whitespace-nowrap opacity-70 pointer-events-none">
          Կարևոր
        </div>

        <Link
          to={`/news/${bottomHero.id}`}
          className="flex flex-col-reverse md:flex-row items-center gap-12 group cursor-pointer block"
        >
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -right-4 w-10 h-10 border-t-[5px] border-r-[5px] border-[#7dc242] z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-[5px] border-r-[5px] border-[#7dc242] z-10"></div>

            <img
              src={bottomHero.imageUrl}
              alt={bottomHero.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-4"
                style={{ backgroundColor: bottomHero.categoryColor }}
              ></span>
              <span className="text-sm font-bold text-[#333]">
                {bottomHero.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-[42px] font-bold leading-tight mb-6 text-[#2a1b54] group-hover:text-purple-700 transition-colors">
              {bottomHero.title}
            </h2>
            <p className="text-gray-600 mb-8 max-w-md text-sm md:text-base leading-relaxed">
              {bottomHero.description}
            </p>
            <p className="text-gray-400 text-sm">{bottomHero.date}</p>
          </div>
        </Link>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bottomGrid.map((item) => (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              className="group cursor-pointer block"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[240px] object-cover mb-4"
              />
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-1 h-4"
                  style={{ backgroundColor: item.categoryColor }}
                ></span>
                <span className="text-sm font-semibold text-gray-500">
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#2a1b54] group-hover:text-purple-700 transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
