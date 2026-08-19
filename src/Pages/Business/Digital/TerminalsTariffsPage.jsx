import React from "react";
import LatestNews from "../../Individual/HomePage/Components/LatestNews";

const TerminalsTariffsPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Սակագներ
        </h1>

        {}
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-10">
          <p>
            Տերմինալը փողոցում, ինչպես նաև առևտրի կետերում վճարումների համար
            նախատեսված սարք է: Տերմինալների միջոցով Դուք նաև կարող եք կատարել
            բանկային ծառայություններ՝ առանց բանկ այցելելու՝ հեշտ և հարմար
            տարբերակով:
          </p>
          <p>
            Եթե Ձեր տարածքում չկա Evocabank-ի մասնաճյուղ, Դուք կարող եք կատարել
            Ձեր վճարումները հետևյալ տերմինալների միջոցով.
          </p>
        </div>

        {}
        <div className="mb-12 border-b border-gray-100 pb-10">
          <div className="mb-4">
            <img
              src="https://www.evoca.am/file_manager/telcell-evoca-logo.png"
              alt="Telcell"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              Telcell վճարային տերմինալների միջոցով Դուք կարող եք 24/7 ռեժիմով
              կատարել ընթացիկ և քարտային հաշիվների համալրում և վարկի մարումներ:
            </p>
            <p>
              Telcell համակարգը հասանելի է ինչպես Հայաստանի Հանրապետության
              տարածքում, այնպես էլ Արցախի Հանրապետությունում: Տերմինալների
              ցանկին և հասցեներին կարող եք ծանոթանալ{" "}
              <a
                href="#telcell-list"
                className="text-purple-600 hover:underline font-medium"
              >
                այստեղ
              </a>
              :
            </p>
            <p>
              Evocabank-ի մասնաճյուղերում տեղադրված Telcell տերմինալներից
              օգտվելիս գործում է{" "}
              <strong className="text-gray-900">0% միջնորդավճար</strong>: Այլ
              վայրերում տեղադրված Telcell տերմինալով Evocabank-ի վճարում
              կատարելիս գործում են հետևյալ միջնորդավճարները՝
            </p>
          </div>

          <div className="border border-purple-100 rounded-xl overflow-x-auto shadow-sm">
            <table className="w-full text-xs md:text-sm text-left text-gray-700 min-w-[600px]">
              <thead className="bg-purple-50 text-gray-900 font-semibold border-b border-purple-100">
                <tr>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/3">
                    Ծառայություն
                  </th>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/3">
                    Գումարի չափ
                  </th>
                  <th className="py-3 px-4 w-1/3">Միջնորդավճար</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-100 bg-white">
                  <td className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900">
                    Հաշվի համալրում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    Մինչև 100,000 դրամը ներառյալ
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="border-b border-purple-100 bg-purple-50/20">
                  <td className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900">
                    Քարտային հաշվի համալրում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    Մինչև 100,000 դրամը ներառյալ
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900">
                    Վարկի մարում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    Մինչև 100,000 դրամը ներառյալ
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {}
        <div className="mb-12 border-b border-gray-100 pb-10">
          <div className="mb-4">
            <img
              src="https://www.evoca.am/file_manager/uPay-evoca.png"
              alt="uPay"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              uPay -ի միջոցով վճարումներ կարող եք կատարել՝ ինչպես uPay
              հավելվածով, այնպես էլ այցելելով Ucom սպասարկման կետրոններ:
            </p>
            <p>
              uPay ում վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝
            </p>
          </div>

          <div className="border border-purple-100 rounded-xl overflow-x-auto shadow-sm max-w-2xl">
            <table className="w-full text-xs md:text-sm text-left text-gray-700">
              <thead className="bg-purple-50 text-gray-900 font-semibold border-b border-purple-100">
                <tr>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/2">
                    Գործարքի տեսակ
                  </th>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/4">
                    Գումարի չափ
                  </th>
                  <th className="py-3 px-4 w-1/4">Միջնորդավճար</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-100 bg-white">
                  <td
                    className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900"
                    rowSpan="2"
                  >
                    Վարկերի մարում և փոխանցում բանկային հաշիվներին
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    Մինչև 35,000 ՀՀ դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    200 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="bg-purple-50/20">
                  <td className="py-3 px-4 border-r border-purple-100">
                    35,001-ից ավելի ՀՀ դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    0.6%, բայց ոչ ավել 1,200 ՀՀ դրամ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {}
        <div className="mb-12 border-b border-gray-100 pb-10">
          <div className="mb-4">
            <img
              src="https://www.evoca.am/file_manager/mobidram-evoca.jpg"
              alt="Mobidram"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ{" "}
              <a
                href="#mobidram-list"
                className="text-purple-600 hover:underline font-medium"
              >
                այստեղ
              </a>
              :
            </p>
            <p>
              Մոբիդրամի տերմինալներով Evocabank-ի վճարում կատարելիս գործում են
              հետևյալ միջնորդավճարները՝
            </p>
          </div>

          <div className="border border-purple-100 rounded-xl overflow-x-auto shadow-sm max-w-2xl">
            <table className="w-full text-xs md:text-sm text-left text-gray-700">
              <thead className="bg-purple-50 text-gray-900 font-semibold border-b border-purple-100">
                <tr>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/2">
                    Ծառայություն
                  </th>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/4">
                    Գումարի չափ
                  </th>
                  <th className="py-3 px-4 w-1/4">Միջնորդավճար</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-100 bg-white">
                  <td
                    className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900"
                    rowSpan="2"
                  >
                    Վարկի մարում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    Մինչև 50,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    200 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="border-b border-purple-100 bg-purple-50/20">
                  <td className="py-3 px-4 border-r border-purple-100">
                    50,001 - 100,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="border-b border-purple-100 bg-white">
                  <td
                    className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900"
                    rowSpan="2"
                  >
                    Բանկային հաշիվների/քարտերի համալրում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    Մինչև 50,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    200 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="bg-purple-50/20">
                  <td className="py-3 px-4 border-r border-purple-100">
                    50,001 - 100,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {}
        <div className="mb-12 border-b border-gray-100 pb-10">
          <div className="mb-4">
            <img
              src="https://www.evoca.am/file_manager/idram-evoca.png"
              alt="iDram"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              Idram հավելվածով կարող եք կատարել գործարքներ հետևյալ
              միջնորդավճարներով՝
            </p>
          </div>

          <div className="border border-purple-100 rounded-xl overflow-x-auto shadow-sm max-w-2xl">
            <table className="w-full text-xs md:text-sm text-left text-gray-700">
              <thead className="bg-purple-50 text-gray-900 font-semibold border-b border-purple-100">
                <tr>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/2">
                    Ծառայություն
                  </th>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/4">
                    Գումարի չափ
                  </th>
                  <th className="py-3 px-4 w-1/4">Միջնորդավճար</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-100 bg-white">
                  <td
                    className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900"
                    rowSpan="3"
                  >
                    Վարկի մարում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    Մինչև 15,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    100 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="border-b border-purple-100 bg-purple-50/20">
                  <td className="py-3 px-4 border-r border-purple-100">
                    15,001 - 50,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    200 ՀՀ դրամ
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-r border-purple-100">
                    50,001 - 100,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {}
        <div className="mb-8">
          <div className="mb-4">
            <img
              src="https://www.evoca.am/file_manager/easypay-evoca.png"
              alt="EasyPay"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              2,000-ից ավել վճարային տերմինալ, որոնց ցանկին և հասցեներին կարող
              եք ծանոթանալ{" "}
              <a
                href="#easypay-list"
                className="text-purple-600 hover:underline font-medium"
              >
                այստեղ
              </a>
              :
            </p>
            <p>
              Evocabank-ի մասնաճյուղերում տեղադրված EasyPay տերմինալներից
              օգտվելիս գործում է{" "}
              <strong className="text-gray-900">0% միջնորդավճար</strong>: Այլ
              վայրերում տեղադրված EasyPay տերմինալներով Evocabank-ի վճարում
              կատարելիս գործում են հետևյալ միջնորդավճարները՝
            </p>
          </div>

          <div className="border border-purple-100 rounded-xl overflow-x-auto shadow-sm">
            <table className="w-full text-xs md:text-sm text-left text-gray-700 min-w-[600px]">
              <thead className="bg-purple-50 text-gray-900 font-semibold border-b border-purple-100">
                <tr>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/3">
                    Ծառայություն
                  </th>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/3">
                    Գումարի չափ
                  </th>
                  <th className="py-3 px-4 w-1/3">Միջնորդավճար</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-100 bg-white">
                  <td className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900">
                    Հաշվի համալրում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    1,000 - 100,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ (առավելագույնը 1,700 ՀՀ դրամ)
                  </td>
                </tr>
                <tr className="border-b border-purple-100 bg-purple-50/20">
                  <td className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900">
                    Քարտային հաշվի համալրում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    1,000 - 100,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ (առավելագույնը 1,200 ՀՀ դրամ)
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900">
                    Վարկի մարում
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100">
                    1,000 - 100,000 դրամի դեպքում
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    300 ՀՀ դրամ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <LatestNews></LatestNews>
    </div>
  );
};

export default TerminalsTariffsPage;
