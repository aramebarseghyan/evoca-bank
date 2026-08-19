import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  limit,
  getDocs,
} from "firebase/firestore";

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newsItem, setNewsItem] = useState(null);
  const [otherNews, setOtherNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const db = getFirestore();

        const docRef = doc(db, "news", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNewsItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Նորությունը չի գտնվել!");
        }

        const q = query(collection(db, "news"), limit(4));
        const querySnapshot = await getDocs(q);

        const others = [];
        querySnapshot.forEach((doc) => {
          if (doc.id !== id && others.length < 3) {
            others.push({ id: doc.id, ...doc.data() });
          }
        });
        setOtherNews(others);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching news detail:", error);
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) {
    return null;
  }

  if (!newsItem) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-2xl font-bold mb-4">Նորությունը չի գտնվել</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-purple-700 underline"
        >
          Վերադառնալ հետ
        </button>
      </div>
    );
  }

  return (
    <div className="w-full font-sans text-[#333] pb-20">
      <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-wrap items-center gap-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg leading-none mb-[2px]">←</span> Վերադառնալ
        </button>

        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
          <Link to="/" className="hover:text-purple-700 transition-colors">
            Նորություններ
          </Link>
          <span>›</span>
          <span className="hover:text-purple-700 cursor-pointer transition-colors">
            {newsItem.category}
          </span>
          <span>›</span>
          <span className="truncate max-w-[150px] md:max-w-[300px]">
            {newsItem.title}
          </span>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row bg-[#f8f6fb] rounded-[40px] md:rounded-[60px] overflow-hidden">
          <div className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-4 h-4"
                style={{ backgroundColor: newsItem.categoryColor || "#5c1bb9" }}
              ></span>
              <span className="text-sm font-bold text-[#333]">
                {newsItem.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-[40px] font-bold leading-tight text-[#2a1b54] mb-6">
              {newsItem.title}
            </h1>

            <p className="text-gray-600 font-medium mb-10 leading-relaxed">
              {newsItem.description}
            </p>

            <p className="text-gray-400 text-sm mt-auto">{newsItem.date}</p>
          </div>

          <div className="md:w-1/2 min-h-[300px]">
            <img
              src={newsItem.imageUrl}
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-4 relative mb-20">
        <div className="hidden lg:flex flex-col gap-3 absolute -left-16 top-0 text-gray-400">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:text-purple-700 hover:bg-purple-100 transition-all">
            f
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:text-purple-700 hover:bg-purple-100 transition-all">
            in
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:text-purple-700 hover:bg-purple-100 transition-all">
            P
          </button>
        </div>

        <div className="prose prose-lg prose-purple max-w-none text-gray-700 leading-relaxed space-y-6">
          {newsItem.content ? (
            <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
          ) : (
            <p>Այստեղ կլինի հոդվածի ամբողջական տեքստը...</p>
          )}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 border-t border-gray-100 pt-16">
        <h2 className="text-3xl font-bold text-[#2a1b54] mb-10">
          Այլ նորություններ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {otherNews.map((item) => (
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
                  style={{ backgroundColor: item.categoryColor || "#5c1bb9" }}
                ></span>
                <span className="text-sm font-semibold text-gray-500">
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#2a1b54] group-hover:text-purple-700 transition-colors line-clamp-2">
                {item.title}
              </h3>
              {item.date && (
                <p className="text-gray-400 text-sm mt-3">{item.date}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsDetailPage;
