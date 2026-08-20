import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const BlogArchive = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "blog"));
        const blogArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setBlogs(blogArray.reverse());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog archive:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="w-full font-sans text-[#333] pb-20">
      <div className="max-w-[1200px] mx-auto px-4 pt-10 pb-8">
        

        <div className="flex items-center gap-3 mb-8 text-sm font-medium">
          <Link to="/blog" className="text-[#6a00ff] hover:underline">
            Բլոգ
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500">Արխիվ</span>
        </div>
        

        <h1 className="text-4xl md:text-[42px] font-extrabold text-[#2a1b54] mb-12">
          Բլոգի Արխիվ
        </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogs.map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="overflow-hidden mb-4 relative">
                 <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
             
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-1 h-4"
                  style={{ backgroundColor: item.categoryColor }}
                ></span>
                <span className="text-sm font-semibold text-[#2a1b54]">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400 ml-auto border-l border-gray-200 pl-2">
                  {item.date}
                </span>
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-[#2a1b54] group-hover:text-[#6a00ff] transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-auto">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogArchive;