import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const MemberCard = ({ id, name, title, image }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/management/${id}`)}
      className="flex flex-col items-center text-center bg-white p-4 group cursor-pointer"
    >
      <div className="relative w-52 h-52 mb-4 flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full text-gray-100 group-hover:text-purple-600 transition-colors duration-1000 ease-in-out"
          viewBox="0 0 200 200"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M 12,12 Q 12,0 30,0 L 170,0 Q 188,0 188,12 L 107,192 Q 100,200 93,192 Z" />
        </svg>

        <img
          src={image}
          alt={name}
          className="relative z-10 w-36 h-36 object-cover rounded-full shadow-sm"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/230x230?text=Evoca";
          }}
        />
      </div>

      <h3 className="font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-1000 text-sm sm:text-base mb-1 tracking-tight">
        {name}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 max-w-xs leading-snug">
        {title}
      </p>
    </div>
  );
};

const EvocabankManagement = () => {
  const [categories, setCategories] = useState({
    supervisoryBoard: [],
    managementBoard: [],
    internalAudit: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "management"));
        const supervisoryBoard = [];
        const managementBoard = [];
        const internalAudit = [];

        querySnapshot.forEach((docSnap) => {
          const item = { id: docSnap.id, ...docSnap.data() };
          if (item.category === "supervisoryBoard") supervisoryBoard.push(item);
          if (item.category === "managementBoard") managementBoard.push(item);
          if (item.category === "internalAudit") internalAudit.push(item);
        });

        setCategories({ supervisoryBoard, managementBoard, internalAudit });
      } catch (error) {
        console.error("Error loading data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
          Ղեկավարություն
        </h1>

        <section className="mb-12">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            Բանկի խորհուրդ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.supervisoryBoard.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            Բանկի վարչություն
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.managementBoard.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            Բանկի ներքին աուդիտ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.internalAudit.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EvocabankManagement;
