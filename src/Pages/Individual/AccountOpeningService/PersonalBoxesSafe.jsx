import React from "react";
import MobilePromo from "../HomePage/Components/MobilePromo";

const PersonalBoxesSafe = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-24 mb-16 gap-6 lg:gap-0">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Անհատական <br className="hidden xl:block" /> պահատուփեր
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք
              արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող
              անհատական պահատուփեր:
            </p>
          </div>
          <div className="lg:w-[55%]">
            <img
              // Вы можете заменить ссылку на актуальную картинку с сайта Evoca
              src="https://www.evoca.am/images-cache/menu/1/17793417530511/780x585.jpg"
              alt="Անհատական պահատուփեր"
              className="w-full h-full object-cover min-h-[300px] bg-[#5D00E0] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* Main Text Content */}
        <div className="px-4 sm:px-8 lg:px-24 max-w-[1200px] mx-auto space-y-6 text-gray-700 text-sm md:text-base mb-16">
          <p>
            Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանցում կարող եք
            պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր,
            թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և
            տեսաժապավեններ, մագնիսական կրիչներ և այլն):
          </p>
          <p>
            Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության
            ներքո: Դրանք զինված են միջազգային չափանիշներին համապատասխան
            անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական
            գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ,
            պահատուփերի առանձնացված տարածքում կարող եք գտնվել մինչև 15 րոպե:
          </p>
          <p>Առաջարկում ենք 3 չափսի պահատուփեր՝ փոքր, միջին, մեծ:</p>
          <p>
            Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ,
            իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու
            բանալիների միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալիի օրինակը
            պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի
            գործողության ժամկետի վերջում:
          </p>
          <p>
            Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման
            վրա, ձեր նախընտրած վարձակալության ժամկետով: Վարձակալման գինը կախված
            է պահարանի չափից և ժամկետից՝ ըստ մեր սակագների:
          </p>
          <p>
            12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները
            սահմանվում են պայմանագրային կարգով:
          </p>
          <p>
            Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և
            ժամերին:
          </p>
        </div>

        {/* Tariffs Tables Section */}
        <div className="px-4 sm:px-8 lg:px-24 max-w-[1200px] mx-auto">
          {/* Table 1: Standard Tariffs */}
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse bg-white text-sm md:text-base border border-[#f0ecfc] rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#F8F6FD] text-gray-900 border-b border-[#f0ecfc]">
                    <th
                      rowSpan="2"
                      className="py-4 px-6 text-left font-semibold align-middle border-r border-[#f0ecfc] w-1/4"
                    >
                      Ժամկետ
                    </th>
                    <th
                      colSpan="3"
                      className="py-3 px-6 text-center font-semibold border-b border-[#f0ecfc]"
                    >
                      Պահարանի չափերը
                    </th>
                  </tr>
                  <tr className="bg-[#F8F6FD] text-gray-900 border-b border-[#f0ecfc]">
                    <th className="py-3 px-6 text-center font-medium border-r border-[#f0ecfc] w-1/4">
                      փոքր
                    </th>
                    <th className="py-3 px-6 text-center font-medium border-r border-[#f0ecfc] w-1/4">
                      միջին
                    </th>
                    <th className="py-3 px-6 text-center font-medium w-1/4">
                      մեծ
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      14 օր
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      5,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      7,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">10,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      1 ամիս
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      7,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      10,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">12,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      3 ամիս
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      10,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      15,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">20,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      6 ամիս
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      15,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      20,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">25,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      12 ամիս
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      30,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      40,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">50,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      Երկարաժամկետ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      պայմանագրային
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      պայմանագրային
                    </td>
                    <td className="py-4 px-6 text-center">պայմանագրային</td>
                  </tr>
                  {/* Additional Condition Rows */}
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      Պահարանի բանալու կորուստ կամ վնասում
                    </td>
                    <td colSpan="3" className="py-4 px-6">
                      20,000 ՀՀ դրամ
                    </td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      Պահարանի վնասում
                    </td>
                    <td colSpan="3" className="py-4 px-6">
                      Հասցված վնասի եռապատիկը
                    </td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      Պայմանագրի ժամկետի ավարտին բանալու չհանձնում
                    </td>
                    <td colSpan="3" className="py-4 px-6">
                      Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      Իրերը Բանկի այլ տարածքում պահպանելու վճար
                    </td>
                    <td colSpan="3" className="py-4 px-6">
                      Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: Foreign Citizens Tariffs */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա
              քաղաքացիների համար
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse bg-white text-sm md:text-base border border-[#f0ecfc] rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#F8F6FD] text-gray-900 border-b border-[#f0ecfc]">
                    <th
                      rowSpan="2"
                      className="py-4 px-6 text-left font-semibold align-middle border-r border-[#f0ecfc] w-1/4"
                    >
                      Ժամկետ
                    </th>
                    <th
                      colSpan="3"
                      className="py-3 px-6 text-center font-semibold border-b border-[#f0ecfc]"
                    >
                      Պահարանի չափերը
                    </th>
                  </tr>
                  <tr className="bg-[#F8F6FD] text-gray-900 border-b border-[#f0ecfc]">
                    <th className="py-3 px-6 text-center font-medium border-r border-[#f0ecfc] w-1/4">
                      փոքր
                    </th>
                    <th className="py-3 px-6 text-center font-medium border-r border-[#f0ecfc] w-1/4">
                      միջին
                    </th>
                    <th className="py-3 px-6 text-center font-medium w-1/4">
                      մեծ
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      14 օր
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      25,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      35,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">50,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      1 ամիս
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      35,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      50,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">60,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      3 ամիս
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      50,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      75,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">100,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-[#f0ecfc] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      6 ամիս
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      75,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      100,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">125,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-r border-[#f0ecfc]">
                      12 ամիս
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      100,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center border-r border-[#f0ecfc]">
                      125,000 ՀՀ դրամ
                    </td>
                    <td className="py-4 px-6 text-center">150,000 ՀՀ դրամ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <MobilePromo></MobilePromo>
    </div>
  );
};

export default PersonalBoxesSafe;
