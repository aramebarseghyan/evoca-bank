import React from "react";
import LatestNews from "../../Individual/HomePage/Components/LatestNews";

const LetterOfCreditPage = () => {
  const tableRows = [
    {
      id: 1,
      title: "- նախնական ծանուցում",
      value: "50,000 դրամ",
    },
    {
      id: 2,
      title: "- ծանուցում",
      value: "0,15% նվազ՝ 50,000 դրամ",
    },
    {
      id: 3,
      title: "- բացում",
      value: "0,15% նվազ՝ 50,000 դրամ",
    },
    {
      id: 4,
      title: "- հաստատում",
      value: "0,15% նվազ՝ 50,000 դրամ",
    },
    {
      id: 5,
      title: "- վճարում կամ նեգոցիացիա",
      value: "0,15% նվազ՝ 50,000 դրամ",
    },
    {
      id: 6,
      title: "- փաստաթղթերի ընդունում, ստուգում, առաքում",
      value: "0,15% նվազ՝ 50,000 դրամ",
    },
    {
      id: 7,
      title: "- պայմանների փոփոխություն",
      value: "50,000 դրամ",
    },
    {
      id: 8,
      title: "- չեղյալ համարում",
      value: "0,15% նվազ՝ 50,000 դրամ",
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed">
      {}
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        {}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ակրեդիտիվ
          </h1>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Փաստաթղթային ակրեդիտիվը (Letter of Credit կամ L/C) մեր գրավոր
              պարտավորությունն է (որը թողարկվում է գնորդի հանձնարարությամբ հօգուտ
              վաճառողի) վճարելու որոշակի գումար ապրանքը վաճառողին` վերջինիս կողմից
              ակրեդիտիվի պայմաններին համապատասխան փաստաթղթեր ներկայացնելու
              դեպքում։
            </p>
            <p>
              Ակրեդիտիվները թողարկվում են Առևտրի միջազգային պալատի մշակած
              միասնական կանոնների համաձայն (կախված առևտրային գործարքի
              պայմաններից և առանձնահատկություններից):
            </p>
          </div>
        </div>

        {}
        <div className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            Ակրեդիտիվի թողարկման հիմնական պայմանները`
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc pl-5">
            <li>
              Անհրաժեշտ է Ձեր հաշվին բացվելիք ակրեդիտիվի ծածկույթ, որն
              ամրագրվում է Ձեր հատուկ ծածկույթի հաշվին:
            </li>
            <li>
              Ձեր հատուկ ծածկույթի հաշվի ռեժիմը, հաշվի մնացորդի նկատմամբ
              հաշվարկվող տոկոսադրույքը և մյուս պայմանները սահմանվում են
              պայմանագրային կարգով:
            </li>
            <li>
              Ձեր հաշվին սեփական միջոցների մասնակի առկայության կամ բացակայության
              դեպքում դիտարկում ենք Ձեզ վարկային գիծ տրամադրելու հնարավորությունը:
            </li>
          </ul>
        </div>

        <div className="mb-12 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Փաստաթղթային ակրեդիտիվների թողարկման վերաբերյալ լրացուցիչ
            տեղեկություններ և խորհրդատվություն ստանալու համար կարող եք դիմել մեր
            Գլխամասային գրասենյակ՝ «Միջազգային և արտարժութային գործառնությունների»
            բաժին:
          </p>
        </div>

        {}
        <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-wide">
          Սակագներ
        </h2>

        {}
        <div className="border border-purple-100 rounded-xl overflow-hidden mb-4 shadow-sm">
          <div className="bg-purple-50/50 py-3 px-4 border-b border-purple-100 font-semibold text-sm text-gray-800">
            Ակրեդիտիվի`
          </div>
          <table className="w-full text-sm text-left text-gray-700">
            <tbody>
              {tableRows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`border-b border-purple-100 ${index % 2 === 1 ? "bg-purple-50/30" : "bg-white"}`}
                >
                  <td className="py-4 px-6 border-r border-purple-100 text-gray-800 w-1/2 align-top">
                    {row.title}
                  </td>
                  <td className="py-4 px-6 text-gray-700 font-medium align-top">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {}
        <p className="text-sm text-gray-600 mb-16">
          <span className="font-semibold text-gray-900">ՆՇՈՒՄ</span> – Այս
          դրույթներով և սակագներով սահմանված վճարներից բացի՝ գանձում ենք մեր
          փաստացի կատարած ծախսերի գումարը:
        </p>
      </div>

      {}
      <div className="w-full mb-16">
        <LatestNews />
      </div>
    </div>
  );
};

export default LetterOfCreditPage;