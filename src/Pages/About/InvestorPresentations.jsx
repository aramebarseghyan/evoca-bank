import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3_mGAyawhU5fZwKsg1CQLu-0MAGbZTY",
  authDomain: "evoca-app-cdeac.firebaseapp.com",
  projectId: "evoca-app-cdeac",
  storageBucket: "evoca-app-cdeac.firebasestorage.app",
  messagingSenderId: "197478671668",
  appId: "1:197478671668:web:5661f415d8b4445649f161",
  measurementId: "G-N469K2446L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function InvestorPresentations() {
  const [presentationsData, setPresentationsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPresentations = async () => {
      try {
        const docRef = doc(db, "investorPresentations", "presentations_data");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().presentationsData) {
          setPresentationsData(docSnap.data().presentationsData);
        }
      } catch (error) {
        console.error("Error fetching investor presentations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPresentations();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {loading ? (
          <div className="py-12 text-center text-gray-500 text-lg">
            Բեռնվում է...
          </div>
        ) : presentationsData.length === 0 ? (
          <div className="py-12 text-center text-gray-500 text-lg">
            Ներկայացումներ չեն գտնվել:
          </div>
        ) : (
          presentationsData.map((section) => (
            <div key={section.year} className="mb-12">
              <h2 className="text-[26px] font-bold text-[#202020] mb-6">
                {section.year}
              </h2>

              <div className="bg-[#F8F6FA] w-full py-10 px-8">
                <div className="flex flex-wrap gap-8">
                  {section.items.map((item) => (
                    <a
                      key={item.id}
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col group w-full sm:w-[310px] cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                      />

                      <span className="mt-4 text-[13px] font-bold text-gray-800 uppercase">
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
