import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; 
import { collection, getDocs } from "firebase/firestore";

const Booklets = () => {
  const [booklets, setBooklets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooklets = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "booklets"));
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooklets(fetchedData);
      } catch (error) {
        console.error("Error fetching booklets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooklets();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white flex justify-center items-center"></div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-10 md:ml-12">
          Բուկլետներ
        </h2>

        <div className="flex flex-col items-center gap-8">
          {booklets.map((booklet) => (
            <a
              key={booklet.id}
              href={booklet.link}
              className="flex flex-col md:flex-row items-center w-full max-w-[850px] bg-[#fbfbFC] hover:bg-[#f4f4f7] transition-colors duration-300 py-8 px-6 group cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-10">
                <img
                  src={booklet.imgSrc}
                  alt={booklet.title?.replace("\n", " ")}
                  className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start mt-6 md:mt-0 md:pl-4">
                <h3 className="text-[22px] md:text-[26px] text-[#6b2593] font-medium text-center md:text-left leading-snug whitespace-pre-line">
                  {booklet.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booklets;
