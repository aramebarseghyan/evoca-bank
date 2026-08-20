import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Zustand store import
import { useFavoriteStore } from "../../../../store/useFavoriteStore";
import FavoritesWidget from "../FavoritesWidget";

import shape1 from "../../../../assets/img/shape1.png";
import shape2 from "../../../../assets/img/shape2.png";
import shape3 from "../../../../assets/img/shape3.png";
import shape4 from "../../../../assets/img/shape4.png";
import shape5 from "../../../../assets/img/shape5.png";
import shape6 from "../../../../assets/img/shape6.png";

const LoanDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [otherLoans, setOtherLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Վարկի մասին");

  // Zustand state
  const { toggleFavorite, isFavorite } = useFavoriteStore();

  const tabs = ["Վարկի մասին", "Պայմաններ", "Պահանջվող փաստաթղթերի ցանկ"];

  useEffect(() => {
    const fetchLoanData = async () => {
      if (!id) return;
      setLoading(true);
      try {
        // Fetching current loan
        const docRef = doc(db, "loans", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Վարկը չի գտնվել");
        }

        // Fetching other loans for slider
        const querySnapshot = await getDocs(collection(db, "loans"));
        const loansList = querySnapshot.docs
          .map((docSnapItem) => ({ id: docSnapItem.id, ...docSnapItem.data() }))
          .filter((item) => item.id !== id);

        setOtherLoans(loansList);
      } catch (error) {
        console.error("Տվյալների բեռնման սխալ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, [id]);

  if (loading) {
    return null;
  }

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <p className="text-gray-500 text-lg">Վարկը չի գտնվել:</p>
        <button
          onClick={() => navigate("/loans")}
          className="px-6 py-2.5 bg-[#5D00E0] text-white rounded-full cursor-pointer"
        >
          Վերադառնալ վարկերի ցանկ
        </button>
      </div>
    );
  }

  const defaultTerms = [
    {
      id: "1",
      title: "Վարկի տրամադրման նպատակը",
      content:
        "Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով։",
    },
    {
      id: "2",
      title: "Ովքեր կարող են դիմել",
      content:
        "18 - 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ամբողջ ընթացքում չեն բոլորի 65 տարին: Տվյալ պայմանը վերաբերում է նաև երաշխավոր ֆիզիկական անձանց:",
    },
    {
      id: "3",
      title: "Վարկավորման արժույթ",
      content: "ՀՀ դրամ",
    },
    {
      id: "4",
      title: "Վարկավորման գումար",
      subRows: [
        {
          label: "Առանց եկամուտների հիմնավորման",
          value: "1,000,000 - 3,000,000 ֏",
        },
        {
          label: "Եկամուտների հիմնավորմամբ",
          value: "1,000,000 - 10,000,000 ֏",
        },
      ],
    },
    {
      id: "5",
      title: "Վարկի մարման ժամկետը",
      content: "36 - 60 ամիս",
    },
    {
      id: "6",
      title: "Տարեկան տոկոսադրույքներ",
      tableHeader: ["", "Անվանական", "Փաստացի"],
      tableRows: [
        ["Առանց եկամուտների հիմնավորման", "21%", "23.17%"],
        ["Եկամուտների հիմնավորմամբ", "19%", "20.77%"],
      ],
    },
    {
      id: "7",
      title:
        "Վարկի գումարի կամ տոկոսագումարների՝ ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք",
      content: "Տուգանք չի կիրառվում",
    },
    {
      id: "8",
      title:
        "Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր",
      content:
        "Ժամկետանց վարկի համար՝ օրական 0.015%,\nԺամկետանց տոկոսագումարի համար օրական 0.1%:",
    },
    {
      id: "9",
      title: "Վարկի տրամադրման եղանակը",
      content: "Անկանխիկ",
    },
    {
      id: "10",
      title: "Վարկի տրամադրման միանվագ կամ ամսական սպասարկման վճարներ",
      content: "Չի սահմանվում",
    },
    {
      id: "11",
      title: "Վարկի վերադարձելիության ապահովման միջոցները",
      subRowsCustom: [
        {
          leftTitle: "Առանց եկամուտների հիմնավորման",
          leftVal: "1,000,000 ՀՀ դրամ",
          rightVal: "Նվազագույնը 1 (մեկ) անձի երաշխավորություն",
        },
        {
          leftTitle: "Առանց եկամուտների հիմնավորման",
          leftVal: "1,000,001 - 3,000,000 ՀՀ դրամ",
          rightVal: "Նվազագույնը 2 (երկու) անձի երաշխավորություն",
        },
        {
          leftTitle: "Եկամուտների հիմնավորմամբ",
          leftVal: "1,000,000 - 3,000,000 ՀՀ դրամ",
          rightVal: "Առանց երաշխավորի պահանջի",
        },
        {
          leftTitle: "Եկամուտների հիմնավորմամբ",
          leftVal: "3,000,001 - 5,000,000 ՀՀ դրամ",
          rightVal: "Նվազագույնը 1 (մեկ) անձի երաշխավորություն",
        },
      ],
    },
    {
      id: "12",
      title: "Վարկունակության գնահատում / վարկի հաստատման պայմաններ/",
      content:
        "• Անկախ վարկի գումարից և բավարար հիմնավորված եկամուտների առկայությունից՝ «ԱՔՌԱ Քրեդիտ Ռեփորթինգ» ՓԲԸ-ից ստացված տեղեկատվության համաձայն Հաճախորդի կամ երաշխավորներից որևէ մեկի FICO (սքորը) պետք է լինի 540 և բարձր։\n\n• Առանց եկամուտների վարկավորման դեպքում Հաճախորդը վերջին 1 տարվա ընթացքում չպետք է ունենա վարկային պարտավորությունների գծով դասակարգումներ և մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը։",
    },
    {
      id: "13",
      title:
        "Այլ բանկերից և վարկային կազմակերպություններից վերաֆինանսավորման դեպքում / հատուկ պայման/",
      content:
        "Այլ բանկերից և վարկային կազմակերպություններից վարկերի վերաֆինանսավորման դեպքում, եթե ակնկալվող վարկի գումարը գերազանցում է 3,000,000 ՀՀ դրամը, ապա կարող է տրամադրվել մայր գումարի մարման գծով արտոնյալ ժամանակահատված մինչև 6 ամիս ժամկետով:",
    },
    {
      id: "14",
      title:
        "Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ",
      content:
        "• Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 3 (երեք) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:\n\n• Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, վարկավորման և երաշխավորության պայմանագրերը/համաձայնագրերը կնքելուց հետո 2 (երկու) աշխատանքային օրվա ընթացքում:",
    },
    {
      id: "15",
      title: "Այլ պայմաններ",
      bullets: [
        "Վարկի համար դիմող անձի հետ փոխկապակցված անձը (ընտանիքի անդամը կամ համատեղ տնտեսություն վարող անձը) չպետք է ունենա այս վարկատեսակի գործող վարկ:",
        "Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների:",
      ],
    },
  ];

  const defaultDocuments = [
    "Վարկի տրամադրման դիմում-հայտ",
    "անձնագիր կամ նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ),",
    "տեղեկանք փաստացի բնակության վայրից",
    "տեղեկանք եկամուտների վերաբերյալ,",
    "այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում),",
    "տեղեկատվություն` երաշխավորող անձի/անձանց վերաբերյալ,",
    "անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր:",
  ];

  const termsData = product.termsTable || defaultTerms;
  const documentsList = product.documentsList || defaultDocuments;

  return (
    <div className="w-full font-sans bg-white min-h-screen pb-0 relative">
      <FavoritesWidget />

      {/* Styles for shape animations */}
      <style>{`
        @keyframes floatSlow1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-18px) translateX(12px) rotate(8deg); }
        }
        @keyframes floatSlow2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(16px) translateX(-14px) rotate(-10deg); }
        }
        @keyframes floatSlow3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-14px) translateX(-15px) rotate(12deg); }
        }
        @keyframes floatSlow4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(20px) translateX(10px) rotate(-6deg); }
        }
      `}</style>

      {/* 1. Hero Section */}
      <div className="bg-[#F8F6FA] rounded-br-[80px] lg:rounded-br-[120px] pt-12 pb-16 px-4 sm:px-8 lg:px-24 relative">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              {product.description}
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div
              className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center overflow-hidden ${
                product.imageBgColor || "bg-[#FDE047]"
              }`}
            >
              <div className="absolute left-0 top-0 w-full h-full bg-[#5D00E0] clip-triangle opacity-10"></div>
              <img
                src={product.image}
                alt={product.title}
                className="relative z-10 w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24">
        {/* 2. Navigation & Back button */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 py-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors w-fit cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Վերադառնալ
          </button>

          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-2">
            <span
              className="hover:text-gray-900 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>›</span>
            <span className="hover:text-gray-900 cursor-pointer">Անհատ</span>
            <span>›</span>
            <span
              className="hover:text-gray-900 cursor-pointer"
              onClick={() => navigate("/loans")}
            >
              Վարկեր
            </span>
            <span>›</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>

        {/* 3. Tabs */}
        <div className="relative border-b border-gray-200 mt-2">
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm sm:text-base font-bold whitespace-nowrap transition-colors relative cursor-pointer ${
                  activeTab === tab
                    ? "text-[#1A1A1A]"
                    : "text-gray-500 hover:text-gray-800 font-normal"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#5D00E0]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Tab Content */}
        <div className="pt-10 pb-16">
          {activeTab === "Վարկի մասին" && (
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start">
              <div className="lg:w-[55%] space-y-6 text-[#333333] text-base leading-relaxed">
                <p>
                  <span className="font-semibold text-[#5D00E0]">
                    Evocabank
                  </span>
                  -ն առաջարկում է մինչև 10,000,000 ՀՀ դրամ անգրավ սպառողական
                  վարկ՝ պարզ, արագ և հարմար։ Վարկը նախատեսված է Ձեր ամենատարբեր
                  ֆինանսական կարիքները հոգալու համար՝ անկախ նրանից՝ ցանկանում եք
                  իրականացնել վաղուց պլանավորված նպատակը, թե լուծել անսպասելի
                  ծախսերը։
                </p>
                <p>
                  Կախված վարկի գումարից, վարկունակությունից և ընտրված
                  պայմաններից՝ վարկը կարող է տրամադրվել առանց երաշխավորի, ինչպես
                  նաև մեկ կամ երկու անձի երաշխավորությամբ։ Այս մոտեցումը
                  հնարավորություն է տալիս ընտրել Ձեզ ամենահարմար տարբերակը։
                </p>
                <p>
                  Մենք անում ենք հնարավոր ամեն բան՝ վարկավորման գործընթացը
                  պարզեցնելու և արագացնելու համար՝ նվազագույն թղթաբանությամբ և
                  վարկի արագ ձևակերպմամբ։
                </p>
              </div>

              {/* Right conditions card */}
              <div className="lg:w-[45%] w-full">
                <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-50 overflow-hidden">
                  <div className="px-8 pt-8 pb-4">
                    <div className="w-11 h-11 bg-[#5D00E0] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      ֏
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {product.conditions && product.conditions.length > 0 ? (
                      product.conditions.map((cond, idx) => (
                        <div
                          key={idx}
                          className={`grid grid-cols-2 items-center px-8 py-5 ${idx !== product.conditions.length - 1 ? "border-b border-gray-100" : "pb-8"}`}
                        >
                          <div>
                            <div className="text-gray-400 text-xs mb-0.5">
                              {cond.prefix}
                            </div>
                            <div className="text-[#5D00E0] text-[26px] font-bold leading-none">
                              {cond.value}
                            </div>
                          </div>
                          <div className="text-[#333333] text-sm">
                            {cond.label}
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="grid grid-cols-2 items-center px-8 py-5 border-b border-gray-100">
                          <div>
                            <div className="text-gray-400 text-xs mb-0.5">
                              մինչև
                            </div>
                            <div className="text-[#5D00E0] text-[26px] font-bold leading-none">
                              10 մլն. ֏
                            </div>
                          </div>
                          <div className="text-[#333333] text-sm">Գումար</div>
                        </div>
                        <div className="grid grid-cols-2 items-center px-8 py-5 border-b border-gray-100">
                          <div>
                            <div className="text-gray-400 text-xs mb-0.5">
                              մինչև
                            </div>
                            <div className="text-[#5D00E0] text-[26px] font-bold leading-none">
                              60 ամիս
                            </div>
                          </div>
                          <div className="text-[#333333] text-sm">Ժամկետ</div>
                        </div>
                        <div className="grid grid-cols-2 items-center px-8 py-5 pb-8">
                          <div>
                            <div className="text-gray-400 text-xs mb-0.5">
                              սկսած
                            </div>
                            <div className="text-[#5D00E0] text-[26px] font-bold leading-none">
                              19%-ից
                            </div>
                          </div>
                          <div className="text-[#333333] text-sm">
                            Տոկոսադրույք
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: "Պայմաններ" */}
          {activeTab === "Պայմաններ" && (
            <div className="max-w-5xl mx-auto py-4 animate-fadeIn">
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                {termsData.map((item, index) => (
                  <div
                    key={item.id || index}
                    className={`grid grid-cols-1 md:grid-cols-12 items-stretch ${
                      index !== termsData.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="md:col-span-4 p-6 bg-[#FAFAFA] border-r border-gray-200 flex gap-4 items-start">
                      <span className="text-gray-400 font-medium shrink-0 w-6">
                        {index + 1}.
                      </span>
                      <span className="text-gray-900 font-medium text-sm leading-snug">
                        {item.title}
                      </span>
                    </div>

                    <div className="md:col-span-8 p-6 flex flex-col justify-center text-gray-700 text-sm leading-relaxed">
                      {item.content && (
                        <p className="whitespace-pre-line">{item.content}</p>
                      )}

                      {item.subRows && (
                        <div className="space-y-4 w-full">
                          {item.subRows.map((sub, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                            >
                              <span className="text-gray-600">{sub.label}</span>
                              <span className="font-semibold text-gray-900">
                                {sub.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.tableRows && (
                        <div className="w-full overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-gray-200 text-gray-400 text-xs font-medium">
                                {item.tableHeader.map((th, thIdx) => (
                                  <th
                                    key={thIdx}
                                    className="pb-3 pr-4 font-medium"
                                  >
                                    {th}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {item.tableRows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className="border-b border-gray-100 last:border-0"
                                >
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`py-3 pr-4 text-sm ${cIdx > 0 ? "font-semibold text-gray-900" : "text-gray-600"}`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {item.subRowsCustom && (
                        <div className="space-y-4">
                          {item.subRowsCustom.map((sc, scIdx) => (
                            <div
                              key={scIdx}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                            >
                              <div>
                                <div className="text-gray-500 text-xs">
                                  {sc.leftTitle}
                                </div>
                                <div className="font-semibold text-gray-900">
                                  {sc.leftVal}
                                </div>
                              </div>
                              <div className="text-gray-700 font-medium sm:text-right">
                                {sc.rightVal}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.bullets && (
                        <ul className="space-y-2">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#5D00E0] mt-2 shrink-0"></span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: "Պահանջվող փաստաթղթերի ցանկ" */}
          {activeTab === "Պահանջվող փաստաթղթերի ցանկ" && (
            <div className="max-w-4xl mx-auto py-6 animate-fadeIn text-[#333333]">
              <div className="space-y-6">
                {documentsList.map((docText, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 text-base leading-relaxed"
                  >
                    <span className="text-[#5D00E0] font-bold shrink-0 w-6 text-lg">
                      {index + 1}.
                    </span>
                    <p className="text-gray-800">{docText}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. Infinite autoplay slider */}
      {otherLoans.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 pb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Այլ վարկեր
          </h2>

          <div className="relative px-2 sm:px-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{
                prevEl: ".other-loans-prev",
                nextEl: ".other-loans-next",
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-6"
            >
              {otherLoans.map((loan) => {
                const isFav = isFavorite(loan.id);

                return (
                  <SwiperSlide key={loan.id}>
                    <div
                      onClick={() => {
                        navigate(`/loans/${loan.id}`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="cursor-pointer group flex flex-col items-center text-center gap-3 relative"
                    >
                      <div
                        className={`w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center relative ${loan.imageBgColor || "bg-[#5D00E0]"}`}
                      >
                        {/* Սրտիկ կոճակ քարտի վրա */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Որպեսզի էջը չփոխվի սեղմելիս
                            toggleFavorite(loan);
                          }}
                          className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow hover:scale-110 transition-transform cursor-pointer"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill={isFav ? "red" : "none"}
                            stroke={isFav ? "red" : "currentColor"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                        </button>

                        <img
                          src={loan.image}
                          alt={loan.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-gray-900 font-medium text-sm sm:text-base leading-snug group-hover:text-[#5D00E0] transition-colors line-clamp-2 px-1">
                        {loan.title}
                      </h3>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Arrows */}
            <button className="other-loans-prev absolute -left-3 sm:-left-8 top-[38%] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#5D00E0] text-3xl sm:text-4xl font-bold bg-transparent hover:opacity-75 transition-opacity cursor-pointer">
              ‹
            </button>
            <button className="other-loans-next absolute -right-3 sm:-right-8 top-[38%] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#5D00E0] text-3xl sm:text-4xl font-bold bg-transparent hover:opacity-75 transition-opacity cursor-pointer">
              ›
            </button>
          </div>
        </div>
      )}

      {/* 6. Purple banner with animated shapes */}
      <div
        className="relative w-full py-32 sm:py-40 px-4 sm:px-8 lg:px-24 bg-cover bg-center overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142452390653/1920x527.jpg')`,
        }}
      >
        {/* Shape 1 */}
        <img
          src={shape1}
          alt="shape"
          className="absolute top-8 left-10 sm:left-20 w-12 sm:w-16 h-12 sm:h-16 object-contain opacity-90 pointer-events-none"
          style={{ animation: "floatSlow1 7s ease-in-out infinite" }}
        />
        {/* Shape 2 */}
        <img
          src={shape2}
          alt="shape"
          className="absolute bottom-10 left-16 sm:left-32 w-10 sm:w-14 h-10 sm:h-14 object-contain opacity-80 pointer-events-none"
          style={{ animation: "floatSlow2 6s ease-in-out infinite 1s" }}
        />
        {/* Shape 3 */}
        <img
          src={shape3}
          alt="shape"
          className="absolute top-12 right-12 sm:right-24 w-14 sm:w-20 h-14 sm:h-20 object-contain opacity-90 pointer-events-none"
          style={{ animation: "floatSlow3 8s ease-in-out infinite 0.5s" }}
        />
        {/* Shape 4 */}
        <img
          src={shape4}
          alt="shape"
          className="absolute bottom-12 right-20 sm:right-40 w-12 sm:w-16 h-12 sm:h-16 object-contain opacity-85 pointer-events-none"
          style={{ animation: "floatSlow4 6.5s ease-in-out infinite 1.5s" }}
        />
        {/* Shape 5 */}
        <img
          src={shape5}
          alt="shape"
          className="absolute top-1/2 left-6 sm:left-12 -translate-y-1/2 w-8 sm:w-12 h-8 sm:h-12 object-contain opacity-75 pointer-events-none"
          style={{ animation: "floatSlow2 7.5s ease-in-out infinite 2s" }}
        />
        {/* Shape 6 */}
        <img
          src={shape6}
          alt="shape"
          className="absolute top-1/2 right-6 sm:right-16 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 object-contain opacity-80 pointer-events-none"
          style={{ animation: "floatSlow1 8.5s ease-in-out infinite 0.8s" }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
            Լավագույն գաղափարներդ կյանքի́ կոչիր Evocabank-ի հետ ու պատրաստ եղիր
            նոր իրադարձությունների:
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoanDetailsPage;
