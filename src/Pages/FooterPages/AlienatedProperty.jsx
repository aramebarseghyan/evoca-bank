import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const AlienatedProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties"));
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(fetchedData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-[36px] font-bold text-[#443f38] mb-8">
          Օտարվող գույք
        </h1>

        <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-6">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/60 text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-4 px-4 sm:px-6 w-[35%]">ՀԱՍՑԵ</th>
                <th className="py-4 px-4 sm:px-6 w-[25%]">ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ</th>
                <th className="py-4 px-4 sm:px-6 w-[15%]">ՄԱԿԵՐԵՍ</th>
                <th className="py-4 px-4 sm:px-6 w-[25%]">ՆԿԱՐ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm text-[#443f38]">
              {properties.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-5 px-4 sm:px-6 align-middle font-medium leading-relaxed">
                    {item.address}
                  </td>
                  <td className="py-5 px-4 sm:px-6 align-middle leading-relaxed">
                    {item.description}
                  </td>
                  <td className="py-5 px-4 sm:px-6 align-middle font-medium whitespace-nowrap">
                    {item.area}
                  </td>
                  <td className="py-4 px-4 sm:px-6 align-middle">
                    <div className="w-full max-w-[220px] h-[130px] rounded overflow-hidden border border-gray-100 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.address}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-right text-xs text-gray-400 font-sans">
          Թարմացվել է՝ 06/10/2025 10:00
        </div>
      </div>
    </div>
  );
};

export default AlienatedProperty;
