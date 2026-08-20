import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";

const Awards = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "awards"));
        const awardsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));


        awardsList.sort((a, b) => parseInt(b.year) - parseInt(a.year));

        setAwards(awardsList);
      } catch (error) {
        console.error("Error fetching awards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="bg-[#f8f9fc] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-[20px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between min-h-[180px]"
            >

              <div>
                <h3 className="text-[#6c2bd9] font-bold text-2xl mb-2">
                  {award.year} թ.
                </h3>
                <p className="text-gray-900 font-bold text-lg leading-snug">
                  {award.title}
                </p>
              </div>


              <div className="flex justify-between items-end mt-6">
                <span className="text-gray-500 text-sm font-medium">
                  {award.issuer}
                </span>


                {award.image ? (
                  <img
                    src={award.image}
                    alt={award.issuer}
                    className="h-10 object-contain"
                  />
                ) : (
                  <div className="h-10 w-24 bg-gray-100 rounded-md animate-pulse flex items-center justify-center text-xs text-gray-400">
                    Logo
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
