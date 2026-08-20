import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Ճիշտ ներմուծում Firebase-ից

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const docRef = doc(db, "jobs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setJob({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return null;
  }

  if (!job) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-gray-500 font-medium">Աշխատատեղը չի գտնվել</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen pb-20 font-sans">
      {/* 1. Hero Section */}
      <div
        className="relative text-white overflow-hidden py-16 md:py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.evoca.am/images-cache/menu/1/16194611253542/1920x634.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white text-[#333333] p-8 md:p-10 rounded-[24px] shadow-2xl max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
              {job.title}
            </h1>
          </div>
        </div>
      </div>

      {/* 2. Content Details Section */}
      <div className="max-w-4xl mx-auto px-4 mt-10">
        {/* Վերջնաժամկետ և Աշխատանքի վայր բլոկ */}
        <div className="bg-[#fcfbfe] rounded-[20px] p-6 md:p-8 border border-purple-100/60 flex flex-col md:flex-row gap-6 mb-12 shadow-sm">
          <div className="flex-1 border-b md:border-b-0 md:border-r border-purple-100 pb-4 md:pb-0 md:pr-6">
            <p className="text-xs text-[#888888] mb-1 font-medium">
              Փաստաթղթերի ներկայացման վերջնաժամկետ
            </p>
            <p className="font-bold text-[#333333] text-base">{job.deadline}</p>
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#888888] mb-1 font-medium">
              Աշխատանքի վայր
            </p>
            <p className="font-bold text-[#333333] text-base">{job.location}</p>
          </div>
        </div>

        {/* Տեքստային բովանդակություն */}
        <div className="text-[#333333] space-y-10">
          {job.description && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#5c1bb9] mb-4">
                Աշխատատեղի նկարագրություն`
              </h2>
              <div className="prose max-w-none text-[15px] leading-relaxed whitespace-pre-line text-[#333333]">
                {job.description}
              </div>
            </div>
          )}

          {job.responsibilities && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#5c1bb9] mb-4">
                Աշխատանքային պարտականություններ`
              </h2>
              <div className="prose max-w-none text-[15px] leading-relaxed whitespace-pre-line text-[#333333]">
                {job.responsibilities}
              </div>
            </div>
          )}

          {job.requirements && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#5c1bb9] mb-4">
                Ներկայացվող պահանջներ`
              </h2>
              <div className="prose max-w-none text-[15px] leading-relaxed whitespace-pre-line text-[#333333]">
                {job.requirements}
              </div>
            </div>
          )}

          {job.benefits && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#5c1bb9] mb-4">
                Ի՞նչ արտոնություններ կստանաք Դուք`
              </h2>
              <div className="prose max-w-none text-[15px] leading-relaxed whitespace-pre-line text-[#333333]">
                {job.benefits}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
