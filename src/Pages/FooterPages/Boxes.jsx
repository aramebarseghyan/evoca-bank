import React from "react";
import MobilePromo from "../Individual/HomePage/Components/MobilePromo";

const Boxes = () => {
  // Ստանդարտ սակագների տվյալները
  const standardTariffs = [
    {
      period: "14 օր",
      small: "5,000 ՀՀ դրամ",
      medium: "7,000 ՀՀ դրամ",
      large: "10,000 ՀՀ դրամ",
    },
    {
      period: "1 ամիս",
      small: "7,000 ՀՀ դրամ",
      medium: "10,000 ՀՀ դրամ",
      large: "12,000 ՀՀ դրամ",
    },
    {
      period: "3 ամիս",
      small: "10,000 ՀՀ դրամ",
      medium: "15,000 ՀՀ դրամ",
      large: "20,000 ՀՀ դրամ",
    },
    {
      period: "6 ամիս",
      small: "15,000 ՀՀ դրամ",
      medium: "20,000 ՀՀ դրամ",
      large: "25,000 ՀՀ դրամ",
    },
    {
      period: "12 ամիս",
      small: "30,000 ՀՀ դրամ",
      medium: "40,000 ՀՀ դրամ",
      large: "50,000 ՀՀ դրամ",
    },
    {
      period: "Երկարաժամկետ",
      small: "պայմանագրային",
      medium: "պայմանագրային",
      large: "պայմանագրային",
    },
  ];

  // Օտարերկրյա քաղաքացիների սակագների տվյալները
  const foreignTariffs = [
    {
      period: "14 օր",
      small: "25,000 ՀՀ դրամ",
      medium: "35,000 ՀՀ դրամ",
      large: "50,000 ՀՀ դրամ",
    },
    {
      period: "1 ամիս",
      small: "35,000 ՀՀ դրամ",
      medium: "50,000 ՀՀ դրամ",
      large: "60,000 ՀՀ դրամ",
    },
    {
      period: "3 ամիս",
      small: "50,000 ՀՀ դրամ",
      medium: "75,000 ՀՀ դրամ",
      large: "100,000 ՀՀ դրամ",
    },
  ];

  return (
    <div className="w-full text-gray-800 font-sans leading-relaxed">
      {/* 1. Հիմնական սահմանափակված բովանդակություն (Max Width Container) */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-8">
        {/* Top Banner Section */}
        <div className="flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden bg-[#F6F4F9] mb-12 shadow-sm">
          <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Անհատական պահատուփեր
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք
              արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող
              անհատական պահատուփեր:
            </p>
          </div>
          <div className="w-full md:w-1/2 min-h-[280px] bg-gray-200">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17738350520558/780x585.jpg"
              alt="Անհատական պահատուփեր"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Description Content */}
        <div className="space-y-5 text-sm sm:text-base text-gray-800 leading-relaxed mb-12">
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
            գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ
            պահատուփերի առանձնացված տարածքում կարող եք գտնվել մինչև 15 րոպե:
          </p>
          <p>
            Առաջարկում ենք 3 չափսի պահատուփեր՝{" "}
            <span className="font-medium text-gray-900">փոքր, միջին, մեծ:</span>
          </p>
          <p>
            Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ,
            իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու
            բանալիների միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալիի օրինակը
            պարտավոր եք վերադարձնել պահատուփի վարձակալության պայմանագրի
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

        {/* Table 1: Standard Tariffs */}
        <div className="mb-14">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-6">
            Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
          </h2>

          <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm text-gray-700 border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-[#FAF9FC]">
                  <th
                    rowSpan="2"
                    className="p-4 font-bold text-gray-800 border-r border-gray-100 w-1/4"
                  >
                    Ժամկետ
                  </th>
                  <th
                    colSpan="3"
                    className="p-3 text-center font-bold text-gray-800 border-b border-gray-100"
                  >
                    Պահարանի չափսը
                  </th>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FAF9FC]">
                  <th className="p-3 text-center font-bold text-gray-800 border-r border-gray-100">
                    Փոքր
                  </th>
                  <th className="p-3 text-center font-bold text-gray-800 border-r border-gray-100">
                    Միջին
                  </th>
                  <th className="p-3 text-center font-bold text-gray-800">
                    Մեծ
                  </th>
                </tr>
              </thead>
              <tbody>
                {standardTariffs.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-100 hover:bg-[#FDFCFE] transition-colors"
                  >
                    <td className="p-3.5 font-medium border-r border-gray-100">
                      {row.period}
                    </td>
                    <td className="p-3.5 text-center border-r border-gray-100">
                      {row.small}
                    </td>
                    <td className="p-3.5 text-center border-r border-gray-100">
                      {row.medium}
                    </td>
                    <td className="p-3.5 text-center">{row.large}</td>
                  </tr>
                ))}
                <tr className="border-b border-gray-100 bg-[#FAF9FC]">
                  <td className="p-3.5 font-medium border-r border-gray-100">
                    Պահարանի բանալու կորուստ կամ վնասում
                  </td>
                  <td colSpan="3" className="p-3.5 text-center font-medium">
                    20,000 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3.5 font-medium border-r border-gray-100">
                    Պահարանի վնասում
                  </td>
                  <td colSpan="3" className="p-3.5 text-center font-medium">
                    Հասցված վնասի եռապատիկը
                  </td>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FAF9FC]">
                  <td className="p-3.5 font-medium border-r border-gray-100">
                    Պայմանագրի ժամկետի ավարտին բանալին չհանձնում
                  </td>
                  <td colSpan="3" className="p-3.5 text-center font-medium">
                    Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium border-r border-gray-100">
                    Իրերը Բանկի այլ տարածքում պահպանելու վճար
                  </td>
                  <td colSpan="3" className="p-3.5 text-center font-medium">
                    1 պահի ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Foreign Citizens Tariffs */}
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-6">
            Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների
            համար
          </h2>

          <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm text-gray-700 border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-[#FAF9FC]">
                  <th
                    rowSpan="2"
                    className="p-4 font-bold text-gray-800 border-r border-gray-100 w-1/4"
                  >
                    Ժամկետ
                  </th>
                  <th
                    colSpan="3"
                    className="p-3 text-center font-bold text-gray-800 border-b border-gray-100"
                  >
                    Պահարանի չափսը
                  </th>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FAF9FC]">
                  <th className="p-3 text-center font-bold text-gray-800 border-r border-gray-100">
                    Փոքր
                  </th>
                  <th className="p-3 text-center font-bold text-gray-800 border-r border-gray-100">
                    Միջին
                  </th>
                  <th className="p-3 text-center font-bold text-gray-800">
                    Մեծ
                  </th>
                </tr>
              </thead>
              <tbody>
                {foreignTariffs.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-100 hover:bg-[#FDFCFE] transition-colors last:border-b-0"
                  >
                    <td className="p-3.5 font-medium border-r border-gray-100">
                      {row.period}
                    </td>
                    <td className="p-3.5 text-center border-r border-gray-100">
                      {row.small}
                    </td>
                    <td className="p-3.5 text-center border-r border-gray-100">
                      {row.medium}
                    </td>
                    <td className="p-3.5 text-center">{row.large}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. Full-width Section for MobilePromo */}
      <div className="w-full">
        <MobilePromo />
      </div>
    </div>
  );
};

export default Boxes;
