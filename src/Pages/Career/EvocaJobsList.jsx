import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

const EvocaJobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobsList);
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="w-full bg-white min-h-screen font-sans">
      {}
      <div
        className="relative text-white overflow-hidden py-16 md:py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.evoca.am/images-cache/menu/1/16194611253542/1920x634.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="bg-white text-[#333333] p-8 md:p-12 rounded-[24px] shadow-2xl max-w-lg w-full mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Աշխատանք Evoca-ում
            </h1>
          </div>
        </div>
      </div>

      {}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333333] mb-12">
          Ինչպիսի թիմակից ենք մենք փնտրում ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
            <img
              src="https://www.evoca.am/images-cache/applicant_features/1/16194199747856/120x120.png"
              alt="Մոտիվացված"
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="font-bold text-[#333333] text-lg">Մոտիվացված</h3>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
            <img
              src="https://www.evoca.am/images-cache/applicant_features/1/16194205883017/120x120.png"
              alt="Նպատակասլաց"
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="font-bold text-[#333333] text-lg">Նպատակասլաց</h3>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
            <img
              src="https://www.evoca.am/images-cache/applicant_features/1/16194206332591/120x120.png"
              alt="Արագ և ճկուն"
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="font-bold text-[#333333] text-lg">Արագ և ճկուն</h3>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow sm:col-span-1 md:col-span-1 md:translate-x-1/2">
            <img
              src="https://www.evoca.am/images-cache/applicant_features/1/16194207496218/120x120.png"
              alt="Իր աշխատանքը շա-տ սիրող"
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="font-bold text-[#333333] text-lg">
              Իր աշխատանքը շա-տ սիրող
            </h3>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow sm:col-span-1 md:col-span-1 md:translate-x-1/2">
            <img
              src="https://www.evoca.am/images-cache/applicant_features/1/16194208269015/120x120.png"
              alt="Նորարարական և կրեատիվ լուծումներ գտնող"
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="font-bold text-[#333333] text-lg">
              Նորարարական և կրեատիվ լուծումներ գտնող
            </h3>
          </div>
        </div>
      </div>

      {}
      <div className="bg-[#fafafa] py-16 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl md:text-[28px] font-bold text-[#333333] mb-2">
              Բաց մի թող քո նոր հնարավորությունը
            </h2>
            <p className="text-[#888888] text-sm font-medium">
              {jobs.length} աշխատատեղ
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6 md:p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-6">
                  {job.title}
                </h3>

                <div className="flex flex-col w-full text-[13px] md:text-[14px]">
                  <div className="flex flex-col md:flex-row md:items-center py-3 border-b border-gray-100/70">
                    <span className="text-[#888888] md:w-1/3 mb-1 md:mb-0">
                      Փաստաթղթերի ներկայացման վերջնաժամկետ
                    </span>
                    <span className="text-[#333333] font-semibold md:w-2/3">
                      {job.deadline}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center py-3">
                    <span className="text-[#888888] md:w-1/3 mb-1 md:mb-0">
                      Աշխատանքի վայր
                    </span>
                    <span className="text-[#333333] font-semibold md:w-2/3">
                      {job.location}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/work-at-evoca/${job.id}`)}
                  className="mt-4 self-start md:self-end bg-[#5c1bb9] hover:bg-[#4a1599] transition-colors text-white text-sm font-medium py-2.5 px-6 rounded-full cursor-pointer"
                >
                  Տեսնել մանրամասն և դիմել
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvocaJobsList;