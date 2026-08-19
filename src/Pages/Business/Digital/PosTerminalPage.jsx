import React from "react";
import LatestNews from "../../Individual/HomePage/Components/LatestNews";

const PosTerminalPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed">
      {}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {}
        <div className="bg-[#f8f6fc] rounded-tr-[100px] lg:rounded-tr-[140px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl mb-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
          {}
          <div className="flex-1 p-8 md:p-12 lg:pr-4 space-y-6 max-w-xl z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              POS Տերմինալ
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <strong className="text-gray-900">POS-ը</strong> (point of sale)
              վճարային համակարգ է, որն օգտագործվում է անկանխիկ վճարումներ
              ընդունելու համար: Արագ և տեղում վճարումներ կատարելն այսօր կարևոր
              նախապայման է Ձեր գնորդների համար:
            </p>
          </div>

          {}
          <div className="w-full lg:w-[55%] flex justify-end">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://www.evoca.am/images-cache/menu/1/16158085302978/780x585.jpg"
                alt="POS Տերմինալ"
                className="w-full h-auto lg:h-[420px] object-cover object-left"
              />
            </div>
          </div>
        </div>

        {}
        <div className="max-w-5xl mx-auto space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-10 px-2">
          <p>
            Ձեր գնորդները կկարողանան գնումներ կատարել իրենց միջազգային{" "}
            <strong className="text-gray-900">VISA, Mastercard</strong> և
            տեղական <strong className="text-gray-900">ArCa</strong> վճարային
            քարտերով:
          </p>
          <p>
            POS-ը հասանելի կլինի ինչպես Ձեր կայքում, այնպես էլ՝ մոբայլ
            հավելվածում:
          </p>
        </div>

        {}
        <div className="max-w-5xl mx-auto mb-12 px-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Իսկ ինչո՞ւ տեղադրել Evocabank-ի POS տերմինալ։
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm md:text-base pl-5 list-disc leading-relaxed mb-8">
            <li>
              Evocabank-ը POS-ով կատարված վաճառքներից կգանձի{" "}
              <strong className="text-gray-900">
                նվազագույն միջնորդավճարներ
              </strong>
              ՝ հատուկ Ձեր բիզնեսի համար։ Սպասարկման կետի գրանցման համար
              անհրաժեշտ{" "}
              <strong className="text-gray-900">
                POS, ՀՊՄ-POS, mPOS, VENDISTA
              </strong>{" "}
              տերմինալների տեղադրման{" "}
              <a
                href="#tariffs"
                className="text-purple-600 hover:underline font-medium"
              >
                ստանդարտ սակագներ ու պայմաններ
              </a>
              ։
            </li>
          </ul>

          {}
          <div className="mb-6 pl-4 border-l-2 border-purple-300">
            <p className="text-gray-700 text-sm md:text-base mb-4 font-medium">
              • Եթե վաճառակետի գործունեության տեսակը չի համընկնում ԿԲ կողմից
              ներկայացված տեսակի կոդին կամ գերազանցում է տարեկան 150.000.000 ՀՀ
              դրամի իրացման շրջանառության շեմը՝
            </p>

            {}
            <div className="border border-purple-100 rounded-xl overflow-x-auto mb-4 shadow-sm">
              <table className="w-full text-xs md:text-sm text-left text-gray-700 min-w-[700px]">
                <thead className="bg-purple-50 text-gray-900 font-semibold border-b border-purple-100">
                  <tr>
                    <th className="py-3 px-4 border-r border-purple-100 w-1/5">
                      Գործարքի տեսակ
                    </th>
                    <th className="py-3 px-4 border-r border-purple-100 w-1/5">
                      Արքա /ArCa/ վճարային համակարգի քարտերով կատարված
                      գործարքների դեպքում
                    </th>
                    <th className="py-3 px-4 border-r border-purple-100 w-1/5">
                      Արքա համակարգի ներքո թողարկված MasterCard, Visa, UPay
                      քարտերի դեպքում
                    </th>
                    <th className="py-3 px-4 border-r border-purple-100 w-1/5">
                      Ոչ Արքա համակարգի ներքո թողարկված MasterCard, Visa, UPay
                      քարտերի դեպքում
                    </th>
                    <th className="py-3 px-4 w-1/5">
                      QR կոդով վճարման դեպքում
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-100 bg-white">
                    <td className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900">
                      Վճարվող գումարի չափ
                    </td>
                    <td className="py-3 px-4 border-r border-purple-100 text-center font-medium">
                      1.5 %
                    </td>
                    <td className="py-3 px-4 border-r border-purple-100 text-center font-medium">
                      1.7 %
                    </td>
                    <td className="py-3 px-4 border-r border-purple-100 text-center font-medium">
                      3.0 %
                    </td>
                    <td className="py-3 px-4 text-center font-medium">1 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {}
            <div className="border border-purple-100 rounded-xl overflow-x-auto mb-4 shadow-sm bg-white">
              <table className="w-full text-xs md:text-sm text-left text-gray-700">
                <tbody>
                  <tr className="border-b border-purple-100">
                    <td className="py-3 px-4 border-r border-purple-100 w-3/4 font-medium text-gray-900">
                      Յուրաքանչյուր տերմինալից գանձվող ամսական միջնորդավճարի
                      նվազագույն չափ (ՀՀ դրամ)
                    </td>
                    <td className="py-3 px-4 space-y-2">
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Բանկի կողմից տրամադրված POS տերմինալ</span>
                        <span className="font-semibold text-gray-900">
                          10,000
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Բանկի կողմից տրամադրված ՀՊՄ-POS</span>
                        <span className="font-semibold text-gray-900">
                          7,000
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Տնտեսվարողի ՀՊՄ POS տերմինալ</span>
                        <span className="font-semibold text-gray-900">
                          3,000
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              mPOS և VENDISTA տերմինալների մասով ամսական միջնորդավճարների
              նվազագույն չափ չի սահմանվում:
            </p>
          </div>

          {}
          <div className="mb-8 pl-4 border-l-2 border-purple-300">
            <p className="text-gray-700 text-sm md:text-base mb-4 font-medium">
              • Եթե վաճառակետի գործունեության տեսակը համընկնում է ԿԲ կողմից
              ներկայացված տեսակի կոդին և չի գերազանցում տարեկան 150.000.000 ՀՀ
              դրամի իրացման շրջանառության շեմը, և 50.000 ՀՀ դրամ քարտային
              շրջանառության շեմը չգերազանցելու դեպքում յուրաքանչյուր տերմինալից
              գանձվող ամսական ընդհանուր միջնորդավճարների նվազագույն սահմանաչափ
              (ՀՀ դրամ)՝
            </p>

            {}
            <div className="border border-purple-100 rounded-xl overflow-x-auto mb-4 shadow-sm max-w-xl">
              <table className="w-full text-xs md:text-sm text-left text-gray-700">
                <tbody>
                  <tr className="border-b border-purple-100 bg-white">
                    <td className="py-2.5 px-4 border-r border-purple-100 font-medium text-gray-900">
                      Երևան
                    </td>
                    <td className="py-2.5 px-4 text-center font-semibold text-gray-900">
                      4,600
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="py-2.5 px-4 border-r border-purple-100 font-medium text-gray-900">
                      Մարզային քաղաքներ
                    </td>
                    <td className="py-2.5 px-4 text-center font-semibold text-gray-900">
                      3,000
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-4 border-r border-purple-100 font-medium text-gray-900">
                      Գյուղեր
                    </td>
                    <td className="py-2.5 px-4 text-center font-semibold text-gray-900">
                      1,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              mPOS և VENDISTA տերմինալների մասով ամսական միջնորդավճարների
              նվազագույն չափ չի սահմանվում:
            </p>
          </div>

          {}
          <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc pl-5 leading-relaxed mb-8">
            <li>
              Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն{" "}
              <strong className="text-gray-900">1 քայլով</strong>.
            </li>
            <li>
              Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում Բանկի
              մասնագետների կողմից։
            </li>
            <li>Անհատական մոտեցում Ձեր բիզնեսին ու կայքին:</li>
          </ul>

          {}
          <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-6 md:p-8 space-y-4">
            <p className="text-gray-900 font-bold text-base md:text-lg">
              1. POS տերմինալ տեղադրելու համար{" "}
              <a href="#apply" className="text-purple-600 hover:underline">
                լրացրեք հայտն հենց հիմա
              </a>
              :
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Մեր մասնագետը 1 աշխատանքային օրում կապ կհաստատի Ձեզ հետ,
              կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի
              գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:
            </p>
            <p className="text-purple-900 font-semibold text-base pt-2">
              Կառուցեք Ձեր ապագան Evocabank-ի հետ:
            </p>
          </div>
        </div>
      </div>

      {}
      <div className="w-full mb-16">
        <LatestNews />
      </div>
    </div>
  );
};

export default PosTerminalPage;
