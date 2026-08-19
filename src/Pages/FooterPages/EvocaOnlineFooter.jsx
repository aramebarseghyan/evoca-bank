import React, { useState } from "react";

const EvocaOnlinefooter = () => {
  const [openAccordion, setOpenAccordion] = useState(0); // По умолчанию открыта "Անվտանգությունը"

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Անվտանգությունը",
      bullets: [
        "Համակարգն առավել անվտանգ դարձնելու նպատակով մեր EvocaOnline համակարգի օգտատերերին առաջարկում ենք Vasco Token Digipass GO-6 սարք:",
        "Vasco Token Digipass GO-6 անվտանգության սարքը մեր սեփականությունն է, որը տրամադրում ենք ձեզ EvocaOnline համակարգ մուտք գործելու անվտանգության համապատասխան գաղտնաբառերի գենեռացման համար:",
        "Տվյալների գաղտնագրման համար օգտագործվում է Secure Socket Layer (SSL) տեխնոլոգիան:",
      ],
    },
    {
      title: "Ակտիվացման կարգը",
      bullets: [
        "Հավելվածը մեր հաճախորդներին տրամադրում ենք «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:",
        "Մեր և ձեր միջև բանկային ծառայությունների մատուցման որևէ պայմանագիր կնքելու դեպքում (հաշիվների բացում, վարկերի տրամադրում, ավանդների ներգրավում և այլն), հավելվածն ակտիվանում է ավտոմատ կերպով՝ «Միայն դիտելու» հնարավորությամբ: Համակարգեր մուտք գործելու տվյալները (Login, Password) առկա են ծառայությունների մատուցման պայմանագրերում: Պայմանագրերում առկա է նաև QR կոդի տեսքով հղում՝ հավելվածը App Store-ից կամ Play-Store-ից ներբեռնելու համար:",
        "Ցանկության դեպքում կարող եք ակտիվացնել հավելվածը՝ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:",
        "Եթե արդեն օգտվում եք մեր ծառայություններից,ապա կարող եք դիմել մեզ և ակտիվացնել հավելվածը՝ «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:",
      ],
    },
  ];

  const documents = [
    {
      id: 1,
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      link: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf",
    },
    {
      id: 2,
      title: "SWIFT Transfers (20.03.2026)",
      link: "#",
    },
    {
      id: 3,
      title: "SWIFT переводы в РФ (20.03.2026)",
      link: "#",
    },
  ];

  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 py-8 text-gray-800 font-sans leading-relaxed">
      {/* Top Main Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        EvocaONLINE
      </h1>

      {/* Section Description & Features */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Նկարագիրը և հնարավորությունները
        </h2>

        <p className="text-sm sm:text-base text-gray-800 mb-6 leading-relaxed">
          EvocaOnline-ը բանկային հաշիվների հեռակառավարման ինտերնետ բանկ համակարգ
          է, որի միջոցով կարող եք հեռակառավարել ձեր բանկային հաշիվները:
          EvocaOnline-ից կարող եք օգտվել մեր կայքի համապատասխան հղման միջոցով:
          Համակարգի միջոցով կարող եք՝
        </p>

        {/* Outer Bullet Category 1 */}
        <div className="mb-6">
          <div className="flex items-start gap-2.5 mb-3 text-sm sm:text-base font-bold text-[#8A2BE2]">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>Դիտել տարաբնույթ տեղեկատվություն.</span>
          </div>
          <ul className="pl-6 space-y-2 text-sm sm:text-base text-gray-800">
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>բանկային հաշիվների մնացորդներն ու գործառնությունները,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>
                հաշիվների, վճարային քարտերի, վարկերի, ավանդների քաղվածքները,
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>վճարային քարտերի օնլայն մնացորդները,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>
                վարկերի մասին ամբողջ տեղեկատվությունն ու մարման ժամանակացույցը,
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>ավանդների մասին ամբողջ տեղեկատվությունը,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>արտարժույթի փոխարժեքները:</span>
            </li>
          </ul>
        </div>

        {/* Outer Bullet Category 2 */}
        <div>
          <div className="flex items-start gap-2.5 mb-3 text-sm sm:text-base font-bold text-[#8A2BE2]">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>Կատարել գործարքներ.</span>
          </div>
          <ul className="pl-6 space-y-2 text-sm sm:text-base text-gray-800">
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>
                փոխանցումներ միջազգային և Հայաստանի տարածքում (նաև խմբային),
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>արտարժույթի փոխանակումներ,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>վարկի մարումներ,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>ավանդի բացում և համալրումներ,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>կոմունալ վճարումներ (նաև խմբային),</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>բյուջետային փոխանցումներ,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>գույքահարկի վճարումներ,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>կանխիկացումներ,</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8A2BE2] shrink-0">–</span>
              <span>փաստաթղթերի չեղարկում:</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Offer Note */}
      <p className="text-sm sm:text-base text-gray-800 mb-12 leading-relaxed">
        Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են{" "}
        <span className="font-bold">
          ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ
        </span>
        , որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված
        այն պահից, երբ անձամբ կամ հեռակառավարման համակարգերի միջոցով մեզ եք
        ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից
        օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման
        պայմաններին կարող եք ծանոթանալ այստեղ:
      </p>

      {/* Accordion Section */}
      <div className="mb-14">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        <div className="space-y-4">
          {accordionData.map((item, index) => {
            const isOpen = openAccordion === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#8A2BE2] shadow-sm"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 focus:outline-none"
                >
                  <span className="text-base sm:text-lg">{item.title}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-[#8A2BE2] transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 border-t border-gray-100">
                    <ul className="space-y-3 text-sm sm:text-base text-gray-800">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Documents Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Փաստաթղթեր</h2>
        <div className="space-y-3">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 bg-[#F6F4F9] hover:bg-[#EFE9F5] p-4 rounded-xl transition-colors duration-200 group"
            >
              <div className="shrink-0 text-[#8A2BE2]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-900">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvocaOnlinefooter;
