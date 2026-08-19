import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Проверьте правильность путей к firebase.js

const ManagementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const docRef = doc(db, "management", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMember(docSnap.data());
        }
      } catch (error) {
        console.error("Ошибка загрузки профиля:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20 font-semibold text-gray-600">
        Բեռնվում է...
      </div>
    );
  }

  if (!member) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Անձը չի գտնվել</h2>
        <button
          onClick={() => navigate("/management")}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Վերադառնալ ղեկավարության էջ
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <button
          onClick={() => navigate("/management")}
          className="inline-flex items-center text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg mb-6 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Վերադառնալ
        </button>

        <div className="text-xs text-gray-500 mb-8 flex items-center space-x-2 flex-wrap">
          <span>Սկիզբ</span>
          <span>/</span>
          <span>Մեր մասին</span>
          <span>/</span>
          <span>Evoca-ի մասին</span>
          <span>/</span>
          <span>Ղեկավարություն</span>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{member.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center mx-auto md:mx-0">
              <svg
                className="absolute inset-0 w-full h-full text-purple-600 transition-colors duration-1000"
                viewBox="0 0 200 200"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M 12,12 Q 12,0 30,0 L 170,0 Q 188,0 188,12 L 107,192 Q 100,200 93,192 Z" />
              </svg>

              <img
                src={member.image}
                alt={member.name}
                className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full shadow-md"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/230x230?text=Evoca";
                }}
              />
            </div>
          </div>

          <div className="md:col-span-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              {member.name}
            </h1>
            <p className="text-base text-gray-600 mb-8 font-medium">
              {member.title}
            </p>

            <div className="mb-8">
              <h2 className="text-lg font-bold text-purple-700 mb-4 tracking-wide uppercase">
                ԿՐԹՈՒԹՅՈՒՆ
              </h2>
              <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                {member.education?.map((edu, idx) => (
                  <p key={idx}>{edu}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-purple-700 mb-4 tracking-wide uppercase">
                ԿԱՐԻԵՐԱ
              </h2>
              <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                {member.career?.map((car, idx) => (
                  <p key={idx}>{car}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManagementDetail;
