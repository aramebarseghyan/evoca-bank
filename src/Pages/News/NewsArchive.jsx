import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase"; // Проверьте путь к вашему файлу firebase.js

// Категории в точности как на вашем скриншоте
const CATEGORIES = [
  "Բոլորը",
  "Գլխավոր",
  "Բանկային",
  "Հարցազրույցներ",
  "Պրոդուկտներ",
  "Նորարարություններ",
  "Կենսակերպ",
  "Մրցանակներ",
  "CSR",
  "Այլ",
];

const NewsArchive = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Բոլորը");

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "news"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Загруженные новости из Firebase:", items); // Для проверки в консоли браузера (F12)
        setNewsList(items);
      } catch (error) {
        console.error("Ошибка при загрузке новостей из Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  // Фильтрация новостей с учетом возможных пробелов или регистра
  const filteredNews = newsList.filter((news) => {
    if (activeCategory === "Բոլորը") return true;

    // Сравнение категорий (приводим к строке и убираем лишние пробелы на всякий случай)
    const newsCat = (news.category || "").trim();
    const selectedCat = activeCategory.trim();

    return newsCat === selectedCat;
  });

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center bg-white text-[#a8aeb7]">
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-8 md:py-12 min-h-screen">
      <div className="max-w-[1520px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-12">
        {/* Блок фильтров (Категории + визуальный Date Picker) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          {/* Кнопки категорий */}
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-[13px] lg:text-[14px] font-bold transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-[#6F00FF] text-white" // Активная категория (фиолетовая)
                    : "bg-[#F3F4F6] text-[#222222] hover:bg-[#E5E7EB]" // Неактивная (серая)
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 bg-[#F3F4F6] rounded-full px-5 py-2.5 cursor-pointer hover:bg-[#E5E7EB] transition-colors">
            <svg
              className="w-5 h-5 text-[#a8aeb7]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="text-[#a8aeb7] text-[13px] font-medium">
              Սկսած - Մինչև
            </span>
          </div>
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredNews.map((news) => (
              <Link
                to={`/news/${news.id}`}
                key={news.id}
                className="group block cursor-pointer"
              >
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden mb-4 rounded-xl">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Evocabank";
                    }}
                  />
                </div>

                {/* Текст */}
                <div>
                  <h3 className="text-[15px] xl:text-[16px] font-extrabold text-[#222222] leading-snug mb-2 group-hover:text-[#6F00FF] transition-colors duration-300 line-clamp-3">
                    {news.title}
                  </h3>
                  <span className="text-[#a8aeb7] text-[13px] font-medium block mt-1">
                    {news.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Если в выбранной категории нет новостей */
          <div className="w-full py-20 text-center text-[#a8aeb7] text-[16px]">
            Այս կատեգորիայում նորություններ չկան
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsArchive;
