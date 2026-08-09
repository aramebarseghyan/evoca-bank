import React from "react";

const PersonalBoxesSafe = () => {
  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed pb-16">
      {/* 1. Վերնագիր և նկարով գլխավոր բլոկ */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Պահատուփեր
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ անձանց առաջարկում ենք արժեքավոր
              իրերը պահպանելու հուսալի և անվտանգ միջոց` ձริհվቂվող անհատական
              պահատուփեր:
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16697156723793/780x585.png"
              alt="Safe deposit boxes"
              className="w-full max-w-lg h-auto object-contain rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* 2. Հիմնական տեքստային բաժին */}
        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-5xl mb-16">
          <p>
            Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանցում կարող են
            պահել ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր,
            թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և
            տեսաժապավեններ, մագնիսական կրիչներ և այլն):
          </p>
          <p>
            Պահատուփերը գտնվում են առանձնացված տարածքում` շուրջօրյա հսկողության
            ներքո: Դրանք զինված են միջազգային չափանիշներին համապատասխան
            անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական
            գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ
            պահատուփերի առանձնացված տարածքում կարող են գտնվել մինչև 15 րոպե:
          </p>
          <p className="font-semibold text-gray-900">
            Առաջարկում ենք 3 չափսի պահատուփեր` փոքր, միջին, մեծ:
          </p>
          <p>
            Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ,
            իսկ մյուսը պահում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու
            բանալիների միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալիի օրինակը
            պարտավոր եք վերադարձնել` պահատուփի վարձակալության պայմանագրի
            գործողության ժամկետի վերջում:
          </p>
        </div>

        {/* 3. Սակագների բաժին */}
        <div className="text-center mb-10">
          <p className="text-sm md:text-base text-gray-600 mb-2">
            Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և
            ժամերին:
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ձրիհվቂվող անհատական պահարանների վարձակալման սակագներ
          </h2>
        </div>

        {/* Աղյուսակ 1: Ռեզիդենտների համար */}
        <div className="mb-14 overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-sm md:text-base">
            <thead>
              <tr className="bg-purple-900 text-white text-center">
                <th rowSpan="2" className="border border-purple-800 p-3">
                  Ժամկետ
                </th>
                <th colSpan="3" className="border border-purple-800 p-3">
                  Պահարանի չափերը
                </th>
              </tr>
              <tr className="bg-purple-800 text-white text-center">
                <th className="border border-purple-700 p-2">փոքր</th>
                <th className="border border-purple-700 p-2">միջին</th>
                <th className="border border-purple-700 p-2">մեծ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  14 օր
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  5,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  7,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  10,000 ՀՀ դրամ
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">
                  1 ամիս
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  7,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  10,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  12,000 ՀՀ դրամ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  3 ամիս
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  10,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  15,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  20,000 ՀՀ դրամ
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">
                  6 ամիս
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  15,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  20,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  25,000 ՀՀ դրամ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  12 ամիս
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  30,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  40,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  50,000 ՀՀ դրամ
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">
                  Երկարաժամկետ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  պայմանագրային
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  պայմանագրային
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  պայմանագրային
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  Պահարանի բանալու կորուստ կամ վնասում
                </td>
                <td
                  colSpan="3"
                  className="border border-gray-200 p-3 text-center font-semibold"
                >
                  20,000 ՀՀ դրամ
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">
                  Պահարանի վնասում
                </td>
                <td
                  colSpan="3"
                  className="border border-gray-200 p-3 text-center"
                >
                  Հասցված վնասի եռապատիկը
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  Պայմանագրի ժամկետի ավարտին բանալին չհանձնում
                </td>
                <td
                  colSpan="3"
                  className="border border-gray-200 p-3 text-center"
                >
                  Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">
                  Իրերը Բանկի այլ տարածքում պահպանելու վճար
                </td>
                <td
                  colSpan="3"
                  className="border border-gray-200 p-3 text-center"
                >
                  Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Աղյուսակ 2: Օտարերկրյա քաղաքացիների համար */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Ձրիհվቂվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների
            համար
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-sm md:text-base">
            <thead>
              <tr className="bg-purple-900 text-white text-center">
                <th rowSpan="2" className="border border-purple-800 p-3">
                  Ժամկետ
                </th>
                <th colSpan="3" className="border border-purple-800 p-3">
                  Պահարանի չափերը
                </th>
              </tr>
              <tr className="bg-purple-800 text-white text-center">
                <th className="border border-purple-700 p-2">փոքր</th>
                <th className="border border-purple-700 p-2">միջին</th>
                <th className="border border-purple-700 p-2">մեծ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  14 օր
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  25,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  35,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  50,000 ՀՀ դրամ
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">
                  1 ամիս
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  35,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  50,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  60,000 ՀՀ դրամ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  3 ամիս
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  50,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  75,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  100,000 ՀՀ դրամ
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">
                  6 ամիս
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  75,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  100,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  125,000 ՀՀ դրամ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  12 ամիս
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  100,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  125,000 ՀՀ դրամ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  150,000 ՀՀ դրամ
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">
                  Երկարաժամկետ
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  պայմանագրային
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  պայմանագրային
                </td>
                <td className="border border-gray-200 p-3 text-center">
                  պայմանագրային
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">
                  Պահարանի բանալու կորուստ կամ վնասում
                </td>
                <td
                  colSpan="3"
                  className="border border-gray-200 p-3 text-center font-semibold"
                >
                  20,000 ՀՀ դրամ
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonalBoxesSafe;
