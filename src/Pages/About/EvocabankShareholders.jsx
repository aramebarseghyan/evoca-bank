import React, { useState } from "react";

const EvocabankShareholders = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-20">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
          Բաժնետերեր
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png"
              alt="Մարետա Գևորգյան"
              className="w-64 md:w-full rounded-xl object-cover shadow-sm border border-gray-100 select-none"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x400?text=Marieta+Gevorgyan";
              }}
            />
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-900">
              Մարետա Գևորգյան
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Մարետա Գևորգյանը միանձնյա տիրապետում է Evocabank-ի բաժնետոմսերի
              100%-ին:
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Նա ծնվել է Դիլիջանում, ավարտել Դիլիջանի միջնակարգ դպրոցը,
              այնուհետև՝ Երևանի պետական մանկավարժական ակադեմիան:
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              2008 թվականից բնակվելով Շվեյցարիայում՝ նա ակտիվորեն ներգրավված է
              բանկային, տարածքային զարգացման և սոցիալական նախաձեռնություններում՝
              նպաստելով Հայաստանի կայուն զարգացմանը:
            </p>
            <div className="pt-2 text-xs sm:text-sm text-gray-500">
              <span className="font-bold text-gray-800">ՆՇՈՒՄ.</span> Բանկն
              աննշանակալից մասնակից չունի: Լրացուցիչ տեղեկատվություն հասանելի
              չէ, տվյալները թարմացման փուլում են:
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h3>

          <div className="border border-purple-200 rounded-xl p-5 sm:p-8 bg-white shadow-sm space-y-4">
            <h4 className="font-bold text-gray-900">Ուշադրություն.</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700 list-disc pl-5">
              <li>
                «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի յուրաքանչյուր բաժնետեր, համաձայն «Բանկերի և
                բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի
                43-րդ հոդվածի 4-րդ մասի, իրավունք ունի ստանալու մեր վերջին
                տարեկան հաշվետվության և արտաքին աուդիտի եզրակացության
                պատճենները:
              </li>
              <li>
                «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի տեղաբաշխված քվեարկող բաժնետոմսերի 2%-ին և
                ավվելին տիրապետող յուրաքանչյուր բաժնետեր իրավունք ունի ստանալու
                «Բանկերի և բանկային գործունեության մասին» Հայաստանի
                Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ և 5-րդ մասերով
                սահմանված տեղեկությունները:
              </li>
              <li>
                Վերոհիշյալ տեղեկությունները տրամադրում ենք ԱՆՎՃԱՐ՝ բաժնետիրոջ
                գրավոր դիմումը ստանալուց հետո 3 (երեք) աշխատանքային օրվա
                ընթացքում: Գրավոր դիմումը կարող է ներկայացվել առձեռն՝ մեր
                Գլխամասային գրասենյակում, ցանկացված մասնաճյուղում կամ
                ներկայացուցչությունում, էլեկտրոնային հասցեով՝ hello@evoca.am կամ
                փոստով՝ ՀՀ, 0010, ք. Երևան, Հանրապետության 44/2 հասցեով:
              </li>
              <li>
                Շահութաբաժինների բաշխումը կատարվում է ՀՀ օրենսդրական ակտերի
                համաձայն և Բանկի կանոնադրությամբ սահմանված կարգով:
                Անհրաժեշտության դեպքում տրամադրվում են հավելյալ պարզաբանումներ:
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 mb-12">
          <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm bg-white">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium text-gray-900 hover:bg-purple-50/50 transition-colors"
            >
              <span>
                Տեղեկատվություն մեր կանոնադրական կապիտալի փոփոխության վերաբերյալ
              </span>
              <svg
                className={`w-5 h-5 text-purple-700 transform transition-transform duration-300 ${openAccordion === 1 ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === 1 ? "max-h-96 opacity-100 p-5 pt-0 border-t border-gray-100" : "max-h-0 opacity-0 px-5"}`}
            >
              <p className="text-gray-600 text-sm sm:text-base">
                Բանկի կանոնադրական կապիտալի մեծության, դրա ձևավորման և
                փոփոխությունների վերաբերյալ մանրամասն տեղեկատվությունը հասանելի
                է համապատասխան իրավական ակտերում և բանկի գլխամասային
                գրասենյակում: Լրացուցիչ տվյալները տրամադրվում են ըստ պահանջի:
              </p>
            </div>
          </div>

          <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm bg-white">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium text-gray-900 hover:bg-purple-50/50 transition-colors"
            >
              <span>Տեղեկատվություն շահաբաժինների բաշխման վերաբերյալ</span>
              <svg
                className={`w-5 h-5 text-purple-700 transform transition-transform duration-300 ${openAccordion === 2 ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === 2 ? "max-h-96 opacity-100 p-5 pt-0 border-t border-gray-100" : "max-h-0 opacity-0 px-5"}`}
            >
              <p className="text-gray-600 text-sm sm:text-base">
                Շահաբաժինների հայտարարման և բաշխման կարգը, ժամկետները և
                պայմանները սահմանվում են բանկի ներքին իրավական ակտերով և ՀՀ
                օրենսդրության պահանջներին համապատասխան: Համապատասխան
                ուղեցույցները հասանելի են պաշտոնական կայքում:
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
            Փաստաթղթեր
          </h3>

          <div className="space-y-3">
            <a
              href="#statutes"
              className="flex items-center justify-between p-4 border border-purple-100 rounded-xl hover:border-purple-300 hover:bg-purple-50/30 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  Կանոնադրություն
                </span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-purple-700 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <a
              href="#license"
              className="flex items-center justify-between p-4 border border-purple-100 rounded-xl hover:border-purple-300 hover:bg-purple-50/30 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  Բանկային գործունեության լիցենզիա
                </span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-purple-700 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <a
              href="#certificate"
              className="flex items-center justify-between p-4 border border-purple-100 rounded-xl hover:border-purple-300 hover:bg-purple-50/30 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  Բանկի Գրանցման վկայականը
                </span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-purple-700 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EvocabankShareholders;
