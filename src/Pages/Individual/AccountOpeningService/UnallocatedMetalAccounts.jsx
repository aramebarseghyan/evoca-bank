import React from "react";
import MobilePromo from "../HomePage/Components/MobilePromo";

const UnallocatedMetalAccounts = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-24 mb-16 gap-6 lg:gap-0">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Առարկայազուրկ <br className="hidden xl:block" /> մետաղական
              հաշիվներ
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք
              նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ
              հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել
              անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում
              ոսկու գնի բարձրացման շնորհիվ:
            </p>
          </div>
          <div className="lg:w-[55%]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png"
              alt="Առարկայազուրկ մետաղական հաշիվներ"
              className="w-full h-full object-cover min-h-[300px] bg-gray-100 rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* Main Conditions Section */}
        <div className="px-4 sm:px-8 lg:px-24 max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center md:text-left">
            Հիմնական պայմաններ
          </h2>

          <ul className="list-disc pl-5 space-y-6 text-gray-700 text-sm md:text-base marker:text-[#5D00E0]">
            <li>
              Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար,
              միայն{" "}
              <span className="text-[#5D00E0] font-medium">
                999.9 հարգի ոսկով
              </span>
              , առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել
              անկանխիկ ոսկի՝ սկսած{" "}
              <span className="text-[#5D00E0] font-medium">31 գրամից</span>{" "}
              (ոսկու գնանշումը կատարվում է գրամով): Մեր կայքում հրապարակվում են
              ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված
              միջազգային շուկաներում ոսկու գնից:
            </li>
            <li>
              Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով` ՀՀ Կենտրոնական
              բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային)
              արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝
              0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է
              31.10348 գրամի):
            </li>
            <li>
              Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ
              Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին
              իրավական ակտերով:
            </li>
            <li>
              <span className="text-[#5D00E0] font-medium">
                Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները՝
              </span>
              <ul className="list-none pl-2 mt-4 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-700">-</span>
                  <span>
                    հաշվի համալրում՝ բանկից անկանխիկ ոսկի գնելու և այն հաշվին
                    մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ
                    այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու
                    միջոցով,
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-700">-</span>
                  <span>
                    հաշվի ելքագրում՝ հաշվին առկա անկանխիկ ոսկին բանկին
                    վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ
                    այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու
                    միջոցով:
                  </span>
                </li>
              </ul>
            </li>
            <li>Մետաղական հաշիվները կարող են գրավադրվել:</li>
            <li>
              <span className="text-[#5D00E0] font-medium">
                Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝
              </span>
              <ul className="list-none pl-2 mt-4 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-700">-</span>
                  <span>Դիմում՝ մեր ձևանմուշի համաձայն:</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-700">-</span>
                  <span>
                    Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին
                    տեղեկանք, կամ միայն նույնականացման քարտ:
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-700">-</span>
                  <span>Մեր պահանջով այլ փաստաթղթեր:</span>
                </li>
              </ul>
            </li>
          </ul>

          {/* Additional Information Blocks */}
          <div className="mt-10 space-y-6 text-gray-700 text-sm md:text-base">
            <p>
              Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և
              ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման,
              գործառնությունների կատարման սակագներին և պայմաններին կարող եք
              ծանոթանալ{" "}
              <a
                href="https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5D00E0] underline hover:no-underline"
              >
                այստեղ
              </a>
              :
            </p>
            <p>
              Evocabank-ում նաև կարող եք ձեռք բերել ոսկու գրավով վարկեր՝
              ամենահարմար պայմաններով։ Ոսկու գրավով վարկը տրամադրվում է ոսկյա
              իրերի գրավադրմամբ անձնական, ընտանեկան, տնային կամ այլ օգտագործման
              համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված,
              ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ
              ձեռքբերման նպատակով:
            </p>
            <p className="font-semibold text-gray-900">
              Ուշադրություն. Ավանդների հատուցումը երաշխավորող հիմնադրամը չի
              հատուցում մետաղական հաշիվները:
            </p>
          </div>

          {/* Documents Section (Стилизовано под скриншот) */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Փաստաթղթեր
            </h3>
            <div className="flex flex-col gap-4">
              {/* Document Item 1 */}
              <a
                href="https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#F8F6FD] hover:bg-[#f0ecfc] transition-colors p-4 md:p-5 rounded-2xl group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="relative text-[#5D00E0]">
                    {/* Иконка файла с бейджем скачивания */}
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    <div className="absolute -bottom-1 -right-1 bg-[#5D00E0] text-white rounded-full p-0.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-900 font-medium text-sm md:text-base group-hover:text-[#5D00E0] transition-colors">
                    Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26
                  </span>
                </div>
              </a>

              {/* Document Item 2 */}
              <a
                href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#F8F6FD] hover:bg-[#f0ecfc] transition-colors p-4 md:p-5 rounded-2xl group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="relative text-[#5D00E0]">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    <div className="absolute -bottom-1 -right-1 bg-[#5D00E0] text-white rounded-full p-0.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-900 font-medium text-sm md:text-base group-hover:text-[#5D00E0] transition-colors">
                    Համալիր բանկային ծառայությունների մատուցման պայմաններ
                    16.05.2025
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <MobilePromo></MobilePromo>
    </div>
  );
};

export default UnallocatedMetalAccounts;
