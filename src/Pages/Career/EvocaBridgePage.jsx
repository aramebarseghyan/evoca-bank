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

export default function EvocaBridgePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "evoca_bridge_page_config", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.warn("error!");
        }
      } catch (error) {
        console.error("error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-[#6816cc] font-medium text-lg">
          Loading...
        </div>
      </div>
    );
  }

  if (!data) return null;

  const checkIcon = (
    <svg
      className="w-5 h-5 text-[#6816cc] shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <div className="w-full bg-white pb-20">
      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "url('https://www.evoca.am/images-cache/menu/1/17377293888049/1920x634.jpg')",
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-32 w-full">
          <div className="bg-white rounded-[30px] p-8 md:p-10 w-full max-w-[550px] lg:max-w-[620px] shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-[#3d3333] mb-2">
              {data.heroTitle}
            </h1>
            <p className="text-gray-600 text-sm md:text-[15px] font-medium">
              {data.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-32 pt-16 max-w-6xl">
        {/* Intro subtitle */}
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-8 leading-snug">
          {data.introText}
        </h2>

        {/* Benefits List */}
        <ul className="space-y-4 mb-12">
          {data.programBenefits?.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
            >
              {checkIcon}
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Requirements Section */}
        <div className="mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#6816cc] mb-4 flex items-center gap-2">
            <span>{data.requirementsTitle}</span>
          </h3>
          <ul className="space-y-4">
            {data.requirements?.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
              >
                {checkIcon}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Application Docs Section */}
        <div className="mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#6816cc] mb-4">
            💼 EvocaBRIDGE-ին մասնակցելու համար{" "}
            <a
              href="mailto:evocabridge@evoca.am"
              className="underline hover:text-purple-800"
            >
              evocabridge@evoca.am
            </a>{" "}
            էլեկտրոնային հասցեին ուղարկիր.
          </h3>
          <ul className="space-y-4">
            {data.applicationDocs?.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
              >
                {checkIcon}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Note */}
        <div className="mb-16 text-gray-700 text-sm md:text-base leading-relaxed">
          {data.footerNote}
        </div>

        {/* Program Details Section */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#6816cc] mb-4">
            {data.programStagesTitle}
          </h3>
          <p className="text-gray-800 font-medium mb-8 text-base">
            {data.programStagesSubtitle}
          </p>

          <div className="space-y-6">
            {data.programStages?.map((stage, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg md:text-xl font-bold text-[#6816cc] mb-3">
                  {stage.title}
                </h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
