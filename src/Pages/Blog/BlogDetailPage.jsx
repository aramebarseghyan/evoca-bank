import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const db = getFirestore();
        
        const docRef = doc(db, "blog", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlogPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Հոդվածը չի գտնվել (Document not found)!");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return null;
  }

  if (!blogPost) {
    return (
      <div className="text-center py-20 text-gray-500">
        Տվյալ հոդվածը չի գտնվել:
      </div>
    );
  }

  return (
    <div className="w-full font-sans text-[#333] pb-20">
      <div className="max-w-[900px] mx-auto px-4 pt-10">
        {}
        <button
          onClick={() => navigate(-1)}
          className="text-[#6a00ff] font-bold mb-8 flex items-center gap-2 hover:underline transition-all"
        >
          <span className="text-2xl leading-none mb-1">‹</span> Վերադառնալ
        </button>

        {}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: blogPost.categoryColor }}
          ></span>
          <span className="text-sm font-bold text-[#2a1b54] tracking-wide uppercase">
            {blogPost.category}
          </span>
          <span className="text-gray-400 text-sm ml-4 font-medium border-l border-gray-300 pl-4">
            {blogPost.date}
          </span>
        </div>

        {}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2a1b54] mb-10 leading-tight">
          {blogPost.title}
        </h1>

        {}
        <div className="relative w-full mb-12">
          {}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[5px] border-l-[5px] border-[#2a1b54] z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-[5px] border-r-[5px] border-[#2a1b54] z-10"></div>

          <img
            src={blogPost.imageUrl}
            alt={blogPost.title}
            className="w-full max-h-[500px] object-cover relative z-0"
          />
        </div>

        {}
        <div className="text-lg leading-relaxed text-gray-700 space-y-6">
          <p className="font-semibold text-xl md:text-2xl text-[#2a1b54] mb-6">
            {blogPost.description}
          </p>
          <p className="text-justify">{blogPost.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
