import React, { useEffect, useState } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";

import { doc, getDoc, collection, getDocs } from "firebase/firestore";

import { db } from "../../../firebase";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/navigation";

import MobilePromo from "../../Individual/HomePage/Components/MobilePromo";

const BusinessLoanDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loan, setLoan] = useState(null);

  const [otherLoans, setOtherLoans] = useState([]);

  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("about");

  const [currency, setCurrency] = useState("AMD");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "businessLoans", id);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLoan({ id: docSnap.id, ...docSnap.data() });
        }

        const querySnapshot = await getDocs(collection(db, "businessLoans"));

        const loansData = querySnapshot.docs

          .map((d) => ({ id: d.id, ...d.data() }))

          .filter((d) => d.id !== id);

        setOtherLoans(loansData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || !loan) {
    return <div className="min-h-[500px] bg-white"></div>;
  }

  const currencies = [
    { symbol: "֏", code: "AMD" },

    { symbol: "$", code: "USD" },

    { symbol: "€", code: "EUR" },
  ];

  return (
    <div className="w-full bg-white">
      <div className="bg-[#F7F7F9] w-full pt-12 pb-16 relative overflow-hidden rounded-bl-[60px]">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 z-10">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#111827] leading-tight mb-4">
              {loan.title}
            </h1>

            <p className="text-gray-500 text-base max-w-md">
              {loan.description}
            </p>
          </div>

          <div className="md:w-1/2 flex justify-end z-10">
            <img
              src={loan.imageUrl}
              alt={loan.title}
              className="max-w-full h-auto object-contain drop-shadow-xl"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-0 md:pb-8">
        <div className="flex items-center gap-6 mb-10 text-sm text-gray-500 overflow-x-auto py-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow hover:bg-gray-50 transition-all text-[#111827] font-medium shrink-0 cursor-pointer"
          >
            <span className="mr-2 text-base">←</span> Վերադառնալ
          </button>

          <div className="hidden sm:flex items-center gap-2 whitespace-nowrap">
            <Link
              to="/"
              className="text-gray-400 hover:text-[#6322C6] transition-colors flex items-center"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>

            <span className="text-gray-300">›</span>

            <span className="hover:text-[#6322C6] cursor-pointer transition-colors">
              Բիզնես
            </span>

            <span className="text-gray-300">›</span>

            <span className="hover:text-[#6322C6] cursor-pointer transition-colors">
              Վարկեր
            </span>

            <span className="text-gray-300">›</span>

            <Link
              to="/business-loans"
              className="hover:text-[#6322C6] transition-colors"
            >
              Բիզնես վարկեր
            </Link>

            <span className="text-gray-300">›</span>

            <span className="text-gray-800 font-medium">{loan.title}</span>
          </div>
        </div>

        <div className="flex gap-8 border-b border-gray-200 mb-10">
          <button
            onClick={() => setActiveTab("about")}
            className={`pb-4 text-[17px] font-bold transition-colors cursor-pointer ${
              activeTab === "about"
                ? "border-b-2 border-[#6322C6] text-[#111827]"
                : "border-b-2 border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            Վարկի մասին
          </button>

          <button
            onClick={() => setActiveTab("conditions")}
            className={`pb-4 text-[17px] font-bold transition-colors cursor-pointer ${
              activeTab === "conditions"
                ? "border-b-2 border-[#6322C6] text-[#111827]"
                : "border-b-2 border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            Պայմաններ
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 text-[#4B5563] text-[15px] leading-relaxed">
            {activeTab === "about" ? (
              <div className="space-y-6">
                <p>
                  Evocabank-ի {loan.title}-ը այն բիզնեսների համար է, որոնք
                  ցանկանում են արագ ներդրումներ՝ առանց ավելորդ
                  փաստաթղթաշրջանառության և բարդ ընթացակարգերի։
                </p>

                <p>
                  <strong className="text-[#6322C6] text-base">
                    {loan.title}ը հարմար է՝
                  </strong>
                </p>

                <ul className="space-y-3 pl-2">
                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    շրջանառու միջոցների համալրման,
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    հիմնական միջոցների ձեռքբերման,
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    ընթացիկ ծախսերի ֆինանսավորման,
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    կրեդիտորական պարտքերի մարման,
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    և այլ բիզնես նպատակների համար։
                  </li>
                </ul>

                <p className="mt-8">
                  <strong className="text-[#111827] text-base">
                    Վարկը/վարկային գիծը տրամադրվում է՝
                  </strong>
                </p>

                <ul className="space-y-3 pl-2">
                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>

                    <span>
                      <strong className="text-[#6322C6]">ԱՌԱՆՑ</strong>{" "}
                      ֆինանսական վերլուծության,
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>

                    <span>
                      <strong className="text-[#6322C6]">ԱՌԱՆՑ</strong> գրավի
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>

                    <span>
                      <strong className="text-[#6322C6]">ԱՌԱՆՑ</strong> հայտի
                      ուսումնասիրության վճարի
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#6322C6] mr-3 mt-1.5 text-xs">
                      ●
                    </span>

                    <span>
                      <strong className="text-[#6322C6]">ՄԻԱՅՆ</strong>{" "}
                      երաշխավորությամբ
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <p>Այստեղ կլինեն վարկի պայմանները...</p>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[400px]">
            <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 sticky top-24">
              <div className="flex gap-3 mb-8">
                {currencies.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => setCurrency(curr.code)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all cursor-pointer ${
                      currency === curr.code
                        ? "bg-[#6322C6] text-white shadow-md"
                        : "bg-[#F7F7F9] text-[#6322C6] hover:bg-[#EBE5F7]"
                    }`}
                  >
                    {curr.symbol}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-5">
                {loan.metrics?.map((metric, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col">
                      {metric.topLabel && (
                        <span className="text-gray-400 text-xs mb-1 uppercase tracking-wide">
                          {metric.topLabel}
                        </span>
                      )}

                      <span className="text-[28px] font-bold text-[#6322C6] leading-none mb-1">
                        {metric.value}
                      </span>

                      {metric.bottomLabel && (
                        <span className="text-[#4B5563] text-[13px]">
                          {metric.bottomLabel}
                        </span>
                      )}
                    </div>

                    {idx < loan.metrics.length - 1 && (
                      <hr className="border-gray-100" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {otherLoans.length > 0 && (
          <div className="mt-12 md:mt-24 mb-0 md:mb-16">
            <h3 className="text-[28px] font-bold text-[#111827] mb-8">
              Այլ վարկեր
            </h3>

            <div className="relative px-8">
              <button className="swiper-button-prev-custom absolute left-[-16px] top-[90px] -translate-y-1/2 z-10 text-[#6322C6] hover:text-[#4B1996] cursor-pointer transition-colors outline-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",

                  nextEl: ".swiper-button-next-custom",
                }}
                loop={true}
                spaceBetween={24}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                  320: { slidesPerView: 1 },

                  640: { slidesPerView: 2 },

                  1024: { slidesPerView: 3 },

                  1280: { slidesPerView: 4 },
                }}
                className="mySwiper"
              >
                {otherLoans.map((other) => (
                  <SwiperSlide key={other.id}>
                    <Link
                      to={`/business-loans/${other.id}`}
                      className="group flex flex-col w-full outline-none"
                    >
                      <div className="w-full h-[180px] bg-[#F1F3F5] rounded-[16px] overflow-hidden mb-4 flex items-center justify-center">
                        <img
                          src={other.imageUrl}
                          alt={other.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="px-2">
                        <h4 className="text-[#111827] font-semibold text-[15px] leading-relaxed text-center group-hover:text-[#6322C6] transition-colors">
                          {other.title}
                        </h4>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="swiper-button-next-custom absolute right-[-16px] top-[90px] -translate-y-1/2 z-10 text-[#6322C6] hover:text-[#4B1996] cursor-pointer transition-colors outline-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <MobilePromo></MobilePromo>
    </div>
  );
};

export default BusinessLoanDetails;
