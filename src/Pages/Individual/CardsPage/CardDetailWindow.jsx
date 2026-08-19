import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import MobilePromo from "../HomePage/Components/MobilePromo";

const CardDetailWindow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [otherCards, setOtherCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");

  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "cards", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCardData(docSnap.data());
        } else {
          console.error("Քարտը չի գտնվել");
        }

        const querySnapshot = await getDocs(collection(db, "cards"));
        const cardsList = querySnapshot.docs
          .map((docSnapItem) => ({ id: docSnapItem.id, ...docSnapItem.data() }))
          .filter((card) => card.id !== id);
        setOtherCards(cardsList);
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  const scrollNext = () => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.children[0]?.offsetWidth || 300;
    const gap = 24;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.children[0]?.offsetWidth || 300;
    const gap = 24;
    const { scrollLeft } = sliderRef.current;

    if (scrollLeft <= 10) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollWidth,
        behavior: "smooth",
      });
    } else {
      sliderRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (otherCards.length === 0) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [otherCards.length]);

  if (loading) return null;

  if (!cardData) {
    return <div className="text-center py-20 text-lg">Քարտը չի գտնվել:</div>;
  }

  const advantagesList = [
    {
      title: "Անվճար մուտք Lounge Key սրահներ",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      text: "Տարեկան 6 անվճար մուտք ավելի քան 1,200 օդանավակայանի Lounge Key սրահներ քեզ և հյուրերիդ համար։ Մանրամասներին կարող եք ծանոթանալ այստեղ:",
      steps: [
        "Գտնել բիզնես սրահը, մուտք գործելիս նշել, որ օգտվում եք Lounge Key սրահների ծառայություններից,",
        "Տեղադրել քարտը սարքում կամ հավելվածում և գեներացված QR կոդի միջոցով անցնել նույնականացում,",
        "Վայելել բիզնես սրահի առավելությունները,",
        "Քարտին անհրաժեշտ է ունենալ դրական մնացորդ,",
        "Բիզնես սրահի մուտք այցելությունը տրամադրվում է հաշվետու տարվա համար:",
      ],
    },
    {
      title: "Fast track",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.38 5.84h4.8m1.18-5.81a14.92 14.92 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.239a4.5 4.5 0 106.364-6.364 4.5 4.5 0 00-6.364 6.364z"
          />
        </svg>
      ),
      text: "Հնարավորություն անցնելու անվտանգության, միգրացիոն, մաքսային ստուգման գործընթացները 100-ից ավելի միջազգային օդանավակայանում, այդ թվում՝ Զվարթնոցում տարեկան 6 անգամ քեզ և հյուրերիդ համար։",
      steps: [
        "Անհրաժեշտ է Mastercard Travel Pass (MTP) հավելվածի միջոցով (IOS, Android) գեներացնել Fast Track անցաթուղթ` պարզապես ընտրելով օդանավակայանը, ճամփորդողների թիվը և ցանկալի ժամանակահատվածը,",
        "Fast Track անցաթուղթը գեներացվում է հավելվածում կամ էլ. փոստի միջոցով, որից հետո անհրաժեշտ է մոտենալ տերմինալի Fast Track գոտի,",
        "Մուտք գործելու համար՝ անհրաժեշտ է ներկայացնել Fast Track անցաթուղթը,",
        "Fast Track ծառայության հասանելիությունը տրամադրվում է հաշվետու տարվա համար,",
        "Քարտին անհրաժեշտ է ունենալ դրական մնացորդ,",
        "Fast Track անցաթուղթը հարկավոր է ակտիվացնել օգտվելուց առնվազն 1 ժամ առաջ։",
      ],
    },
    {
      title: "Միջազգային ապահովագրություն",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
      text: "30 օր 1 տարվա ընթացքում, բազմաթիվ ուղևորությունների համար:",
      steps: [
        "Քարտապանի էլ. հասցեին ուղարկվելու է պրոմո կոդ Նաիրի Ինշուրանս ՍՊԸ-ի կայքում կամ հավելվածում՝ պայմանագիրն անվճար ձևակերպելու համար,",
        "Ապահովագրությունը հատուցելու է`",
        "Անհետաձգելի (շտապ) բժշկական ծառայության ծախսերը,",
        "Դժբախտ պատահարներից ապահովագրություն,",
        "Ապահովագրական պատահարի ժամանակ առաջացած բուժտրանսպորտային ծառայությունների ծախսերը,",
        "Հայրենադարձության (այդ թվում՝ մահվան դեպքում) հետ կապված ծախսերը,",
        "Ապահովագրական պատահարի մասին Աջակցող ընկերությանը տեղեկացնելիս իրականացված ծախսեր,",
        "Իրավաբանական խորհրդատվության ծախսեր։",
      ],
    },
    {
      title: "Կոնսիերժ ծառայություն",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      ),
      text: "Անձնական օգնական, որն աշխարհի որ կետում էլ լինեք, օրվա որ ժամին էլ անհրաժեշտ լինի, պատրաստ է 24/7 տեկեկություն տրամադրել մի շարք ծառայությունների մասին և նույնիսկ ամրագրել դրանք։ Եվ այդ ամենն՝ անվճար: Մանրամասներին կարող եք ծանոթանալ այստեղ:",
      steps: [],
    },
    {
      title: "Ինտերնետ ռոումինգ",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.25m0 0A11.936 11.936 0 0112 16.5c-3.162 0-6.033-1.23-8.164-3.25m0 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.25m0 0h17.432"
          />
        </svg>
      ),
      text: "1 GB անվճար ինտերնետ, ինչպես նաև 15% զեղչ տրամադրած ծավալը սպառելուց հետո։",
      steps: [
        "Ներբեռնել Flexiroam հավելվածը,",
        "Ընտրել քարտի, մուտագրել քարտի 16 նիշանոց համարը և էլ. հասցեն՝ հաշիվ ստեղծելու համար,",
        "Սեղմել «Redeem Starter Plan» և ակտիվացնել էլեկտրոնային SIM քարտը,",
        "Հեռախոսի կարգավորումներ բաժնում ակտիվացնել Flexiroam Data Roaming-ը:",
      ],
    },
    {
      title: "Արտարժույթի արտոնյալ կուրս",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      ),
      text: "ԱՄՆ Դոլար (USD) և եվրո (EURO) արժույթների համար արտոնյալ փոխարժեքի տրամադրում։ Մինչև 5 մլն ՀՀ դրամին համարժեք գործարքների դեպքում՝ գործող փոխարժեքից 0.5 դրամ արտոնյալ պայմաններ։",
      steps: [],
    },
    {
      title: "Պահատուփեր",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      text: "50% զեղչ Evocabank-ում չհրկիզվող պահատուփերի համար:",
      steps: [],
    },
    {
      title: "Cashback",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
      ),
      text: "Շահավետ հետվճարումներ․",
      steps: [
        "1.5% cashback արտասահմանում հյուրանոց, ավիատոմս, տուրիստական գործակալություններ, ավտովարձույթ իրականացնելու, գնացքի տոմսեր գնելու համար,",
        "0.5% cashback արտասահմանում իրականացրած անկանխիկ գործարքների համար,",
        "ամսական առավելագույնը 20,000 դրամի չափով,",
        "Cashback փոխանցվում է յուրաքանչյուր ամսվա 15-ը, նախորդ ամսվա ընթացքում կատարված և հաշվառված գործարքների համար:",
      ],
    },
    {
      title: "Հատուկ առաջարկ",
      icon: (
        <svg
          className="w-8 h-8 text-[#5D00E0]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m-6 5.25h12m-6 3h12"
          />
        </svg>
      ),
      text: "Պարբերաբար թարմացվող զեղչեր, ակցիաներ և այլ արտոնություններ Evocabank-ի և Mastercard-ի կողմից։ Առաջարկների կարող եք ծանոթանալ հղմամբ՝ benefits.evoca.am",
      steps: [],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      {}
      <div className="bg-[#f8f9fa] pt-12 pb-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {cardData.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {cardData.description}
            </p>
          </div>
          {cardData.imageUrl && (
            <div className="w-full lg:w-[480px] flex justify-center">
              <img
                src={cardData.imageUrl}
                alt={cardData.title}
                className="max-w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          )}
        </div>
      </div>

      {}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-8 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium w-fit cursor-pointer shrink-0"
          >
            ← Վերադառնալ
          </button>

          <div className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
            <Link
              to="/"
              className="hover:text-[#5D00E0] transition-colors flex items-center"
            >
              <svg
                className="w-4 h-4 text-gray-400 hover:text-[#5D00E0]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v4.875h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
            <span>/</span>
            <span>Անհատ</span>
            <span>/</span>
            <Link
              to="/cards"
              className="hover:text-[#5D00E0] transition-colors"
            >
              Քարտեր
            </Link>
            {cardData.categoryName && (
              <>
                <span>/</span>
                <Link
                  to={`/cards?category=${cardData.categoryName.toLowerCase()}`}
                  className="hover:text-[#5D00E0] transition-colors font-medium text-gray-700"
                >
                  {cardData.categoryName}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-gray-900 font-medium">{cardData.title}</span>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-12 flex gap-8">
          <button
            onClick={() => setActiveTab("about")}
            className={`pb-4 text-base sm:text-lg font-medium transition-colors relative cursor-pointer ${
              activeTab === "about"
                ? "text-gray-900 border-b-2 border-[#5D00E0]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Քարտի մասին
          </button>
          <button
            onClick={() => setActiveTab("tariffs")}
            className={`pb-4 text-base sm:text-lg font-medium transition-colors relative cursor-pointer ${
              activeTab === "tariffs"
                ? "text-gray-900 border-b-2 border-[#5D00E0]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Սակագներ և դրույթներ
          </button>
        </div>

        {activeTab === "about" ? (
          <div className="space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                  Որտեղ ես ուզում լինել վաղը. Փարիզում, Դուբայում, թե քեզ համար
                  նոր, արկածներով լի վայրում:
                </h2>
                <p>{cardData.fullDescription || cardData.description}</p>
                <p>
                  Ձեռք բերելով{" "}
                  <span className="font-semibold text-gray-900">
                    {cardData.title}
                  </span>{" "}
                  դու դառնում ես Evocabank-ի պրեմիում քարտապան և ստանում մի շարք
                  արտոնություններ ոչ միայն Հայաստանում, այլ նաև ամբողջ
                  աշխարհում՝ միջազգային ճանապարհորդական ապահովագրություն,
                  կոնսիերժ ծառայություն, անվճար մուտք օդանավակայանների բիզնես
                  սպասասրահներ, Fast track, արտարժույթի արտոնյալ կուրս և այլն:
                </p>
              </div>

              <div className="lg:col-span-5 bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#5D00E0] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    ֏
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#5D00E0] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    $
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#5D00E0] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    €
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {cardData.conditions && cardData.conditions.length > 0 ? (
                    cardData.conditions.map((cond, idx) => (
                      <div
                        key={idx}
                        className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
                      >
                        <div className="sm:col-span-5 flex flex-col">
                          {cond.topLabel && (
                            <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                              {cond.topLabel}
                            </span>
                          )}
                          <span className="text-2xl sm:text-3xl font-bold text-[#5D00E0]">
                            {cond.value}
                          </span>
                        </div>
                        <div className="sm:col-span-7 text-sm text-gray-700 leading-snug">
                          {cond.description || cond.label}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-center py-6">
                      Պայմաններ առկա չեն
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Քարտի առավելությունները
              </h2>
              {advantagesList.map((adv, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-gray-200 pb-12 last:border-b-0 items-start"
                >
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div className="shrink-0 mt-1">{adv.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      {adv.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {adv.text}
                    </p>
                    {adv.steps && adv.steps.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-900">
                          Օգտվելու համար անհրաժեշտ է`
                        </p>
                        <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
                          {adv.steps.map((step, sIdx) => (
                            <li key={sIdx}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-bold text-gray-900 text-lg">
              {cardData.title}
            </div>
            <div className="divide-y divide-gray-200">
              {cardData.conditions && cardData.conditions.length > 0 ? (
                cardData.conditions.map((cond, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 items-center hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="sm:col-span-8 text-gray-700 text-sm sm:text-base pr-4">
                      {cond.label}
                    </div>
                    <div className="sm:col-span-4 text-gray-900 font-medium text-sm sm:text-base sm:text-right mt-1 sm:mt-0">
                      {cond.value}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-gray-500">
                  Սակագների տվյալները թարմացման փուլում են:
                </div>
              )}
            </div>
          </div>
        )}

        {}
        {otherCards.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Այլ քարտեր
            </h2>
            <div className="relative max-w-7xl mx-auto px-12 sm:px-16">
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#5D00E0] hover:bg-purple-50 rounded-full transition-colors z-10 cursor-pointer shadow-sm bg-white border border-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory py-4 px-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {otherCards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => navigate(`/cards/${card.id}`)}
                    className="cursor-pointer bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] transition-transform hover:shadow-md duration-300"
                  >
                    {card.imageUrl && (
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full h-auto object-contain drop-shadow-md mb-6 transition-transform hover:scale-105 duration-300"
                      />
                    )}
                    <h3 className="text-xl font-bold text-gray-900 text-center">
                      {card.title}
                    </h3>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#5D00E0] hover:bg-purple-50 rounded-full transition-colors z-10 cursor-pointer shadow-sm bg-white border border-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {}
      <div className="mt-16 w-full">
        <MobilePromo />
      </div>
    </div>
  );
};

export default CardDetailWindow;
