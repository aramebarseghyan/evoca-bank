import React from "react";

const Regulation = () => {
  const laws = [
    "«Հայաստանի Հանրապետության Քաղաքացիական օրենսգիրք»,",
    "«Բանկային գաղտնիքի մասին»,",
    "«Բանկային ավանդների ներգրավման մասին»,",
    "«Վճարման հանձնարարականով միջոցների փոխանցումների մասին»,",
    "«Արժութային կարգավորման և արժութային վերահսկողության մասին»,",
    "«Արժեթղթերի շուկայի մասին»,",
    "«Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին»,",
    "«Վճարահաշվարկային համակարգերի և վճարահաշվարկային կազմակերպությունների մասին»,",
    "«Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին»,",
    "«Սպառողական կրեդիտավորման մասին»,",
    "«Բնակարանային հիփոթեքային կրեդիտավորման մասին»,",
    "«Պետական կենսաթոշակների մասին»,",
    "«Ֆինանսական համակարգի հաշտարարի մասին»,",
    "«Պետական նպաստների մասին»,",
    "«Բանկերի և բանկային գործունեության մասին»:",
  ];

  const cbRegulations = [
    "Կանոնակարգ 8/01 «Տարեկան փաստացի տոկոսադրույքի հաշվարկման բացատրություններ և օրինակներ»,",
    "Կանոնակարգ 8/02 «Բանկային ավանդների տարեկան տոկոսային եկամտաբերության հաշվարկումը»,",
    "Կանոնակարգ 8/03 «Ֆինանսական կազմակերպությունների և ֆինանսական խմբերի կողմից տեղեկությունների հրապարակումը»,",
    "Կանոնակարգ 8/04 «Հաճախորդների բողոքների քննության գործընթացը կարգավորող ներքին իրավական ակտերին ներկայացվող նվազագույն պայմաններ և սկզբունքներ»,",
    "Կանոնակարգ 8/05 «Ֆինանսական կազմակերպությունների գործարար վարվելակերպի կանոնները»,",
    "Կանոնակարգ 9 «ՀՀ տարածքում գործող բանկերում կանխիկ դրամով կատարվող գործառնությունները»:",
  ];

  const documents = [
    {
      title:
        "«Անցանկալի հաճախորդների հետ հարաբերությունների կառավարման» ընթացակարգ (Ուժի մեջ է 30.04.2026թ.-ից)",
      url: "https://www.evoca.am/files/global_files/1/unwanted-customer-relationship-management-30-04-26.pdf",
    },
    {
      title: "Բնապահպանական և սոցիալական կառավարման համակարգ",
      url: "https://www.evoca.am/files/global_files/1/esms-procedure-arm.pdf",
    },
    {
      title: "Հաճախորդների սպասարկման գործելակարգ 15.03.2022թ.",
      url: "https://www.evoca.am/files/global_files/1/customer-service-policy.pdf",
    },
    {
      title:
        "Տեղեկատվական անվտանգության քաղաքականություն (Ուժի մեջ է 25.12.2025թ.-ից)",
      url: "https://www.evoca.am/files/global_files/1/information-security-policy-25-12-25.pdf",
    },
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16 py-8 text-gray-800 font-sans leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Կարգավորում
      </h1>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        Բանկի կողմից ծառայությունների մատուցումը կարգավորվում է ՝
      </h2>

      {/* Section 1: ՀՀ Օրենքներով */}
      <div className="mb-6">
        <div className="flex items-start gap-2 text-sm sm:text-base font-bold text-gray-900 mb-3">
          <span className="text-[#8A2BE2] font-extrabold text-lg leading-none">
            •
          </span>
          <span>ՀՀ Օրենքներով՝</span>
        </div>
        <ul className="pl-6 space-y-2 text-sm sm:text-base text-gray-800">
          {laws.map((law, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-gray-400 font-bold select-none">-</span>
              <span>{law}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: ՀՀ Կենտրոնական Բանկի Նորմատիվ իրավական ակտերով */}
      <div className="mb-6">
        <div className="flex items-start gap-2 text-sm sm:text-base font-bold text-gray-900 mb-3">
          <span className="text-[#8A2BE2] font-extrabold text-lg leading-none">
            •
          </span>
          <span>ՀՀ Կենտրոնական Բանկի Նորմատիվ իրավական ակտերով՝</span>
        </div>
        <ul className="pl-6 space-y-2 text-sm sm:text-base text-gray-800">
          {cbRegulations.map((reg, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-gray-400 font-bold select-none">-</span>
              <span>{reg}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 3: Բանկի Խորհրդի կողմից հաստատված... */}
      <div className="mb-12">
        <div className="flex items-start gap-2 text-sm sm:text-base font-bold text-gray-900">
          <span className="text-[#8A2BE2] font-extrabold text-lg leading-none">
            •
          </span>
          <span>
            Բանկի Խորհրդի կողմից հաստատված ներքին իրավական ակտերով
            (կանոնակարգեր, կարգեր, ընթացակարգեր և այլն):
          </span>
        </div>
      </div>

      {/* Section 4: Փաստաթղթեր */}
      <div className="mt-12">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Փաստաթղթեր
        </h3>
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#f6f2fb] hover:bg-[#efe7f8] transition-colors rounded-xl group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e8dbf7] flex items-center justify-center shrink-0 text-[#8A2BE2] group-hover:bg-[#dcbbf3] transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <polyline points="9 15 12 18 15 15" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-[#8A2BE2] transition-colors">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Regulation;
