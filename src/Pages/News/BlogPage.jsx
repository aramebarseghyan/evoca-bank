import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const categories = [
  "Բոլորը",
  "Ֆինանսներ",
  "Բիզնես",
  "Տեխնոլոգիաներ",
  "Խորհուրդներ",
];

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Բոլորը");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "blog"));
        const blogArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        blogArray.sort((a, b) => a.id.localeCompare(b.id));
        setPosts(blogArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-purple-700 text-xl">
        Բեռնվում է բլոգը...
      </div>
    );
  }

  const filteredPosts =
    activeCategory === "Բոլորը"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="w-full font-sans text-[#333] relative overflow-hidden pb-20">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-[48px] font-bold text-center mb-10 text-purple-900">
          Evoca Բլոգ
        </h1>

        <div className="flex items-center justify-center gap-3 overflow-x-auto whitespace-nowrap hide-scrollbar mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#5c1bb9] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            Այս կատեգորիայում դեռ գրառումներ չկան:
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 pb-4"
              >
                <div className="overflow-hidden relative h-[240px]">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: post.categoryColor }}
                    ></span>
                    <span className="text-xs font-semibold text-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="px-5 mt-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-[#5c1bb9] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-gray-400 text-sm border-t border-gray-100 pt-4">
                    <span>{post.date}</span>
                    <span className="text-[#5c1bb9] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Կարդալ ավելին →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
