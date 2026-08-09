import React from "react";
import LatestNews from "../../Individual/HomePage/Components/LatestNews";
import MobilePromo from "../../Individual/HomePage/Components/MobilePromo";

const VPosTerminalPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed">
      {/* Основной контейнер страницы */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Секция (Точная копия стиля Evocabank) */}
        <div className="bg-[#f4eeff] rounded-bl-[100px] lg:rounded-bl-[140px] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Левая часть: Заголовок и текст */}
            <div className="flex-1 space-y-6 max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                V-POS Տերմինալ
              </h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <strong className="text-gray-900">V-POS-ը</strong> (virtual
                point of sale) վիրտուալ վճարային համակարգ է, որը հարմարավետ,
                ապահով և հեշտ լուծում է օնլայն առևտրով զբաղվող բիզնեսների համար։
                Արագ և տեղում օնլայն վճարումներ կատարելն այսօր կարևոր նախապայման
                է Ձեր գնորդների համար։
              </p>
            </div>

            {/* Правая часть: Точное изображение с сервера Evocabank */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden">
                <img
                  src="https://www.evoca.am/images-cache/menu/1/16158111599306/780x585.jpg"
                  alt="V-POS Տերմինալ"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительный текст описания */}
        <div className="max-w-5xl mx-auto space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-10 px-2">
          <p>
            Evocabank-ը կապահովի Ձեր կայքում V-POS տերմինալի տեղադրումը: Այն
            հնարավորություն կտա Ձեզ խուսափել լրացուցիչ ծրագրային ծախսերից,
            սերտիֆիկացումից և հետագա ծրագրային ապահովումից:
          </p>
          <p>
            Ձեր գնորդները կկարողանան գնումներ կատարել Ձեր կայքից ու վճարել դրանց
            համար իրենց միջազգային VISA, Mastercard և տեղական ArCa վճարային
            քարտերով:
          </p>
          <p>
            V-POS-ը հասանելի կլինի ինչպես{" "}
            <strong className="text-gray-900">
              Ձեր կայքում, այնպես էլ՝ մոբայլ հավելվածում
            </strong>
            :
          </p>
        </div>

        {/* Секция: Իսկ ինչո՞ւ տեղադրել Evocabank-ի V-POS տերմինալ */}
        <div className="max-w-5xl mx-auto mb-12 px-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Իսկ ինչո՞ւ տեղադրել Evocabank-ի V-POS տերմինալ։
          </h2>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base pl-5 list-disc leading-relaxed mb-8">
            <li>
              Օնլայն վաճառքների շնորհիվ{" "}
              <strong className="text-gray-900">կաճեն Ձեր եկամուտները</strong>:
            </li>
            <li>
              Evocabank-ը V-POS-ով կատարված վաճառքներից կգանձի{" "}
              <strong className="text-gray-900">
                նվազագույն միջնորդավճարներ
              </strong>
              ՝ հատուկ Ձեր բիզնեսի համար։ Սպասարկման կետի գրանցման համար
              անհրաժեշտ V-POS տերմինալների տեղադրման ստանդարտ սակագներն են՝
            </li>
          </ul>

          {/* Таблица тарифов */}
          <div className="border border-purple-100 rounded-xl overflow-x-auto mb-6 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left text-gray-700 min-w-[700px]">
              <thead className="bg-purple-50 text-gray-900 font-semibold border-b border-purple-100">
                <tr>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/5">
                    Գործարքի տեսակ
                  </th>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/5">
                    Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների
                    դեպքում
                  </th>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/5">
                    ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard,
                    Visa, քարտերի դեպքում
                  </th>
                  <th className="py-3 px-4 border-r border-purple-100 w-1/5">
                    Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa,
                    քարտերի դեպքում
                  </th>
                  <th className="py-3 px-4 w-1/5">QR կոդով վճարման դեպքում</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-100 bg-white">
                  <td className="py-3 px-4 border-r border-purple-100 font-medium text-gray-900">
                    Վճարվող գումարի չափ <sup>[1]</sup>
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100 text-center font-medium">
                    1.50%
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100 text-center font-medium">
                    1.90%
                  </td>
                  <td className="py-3 px-4 border-r border-purple-100 text-center font-medium">
                    3.00%
                  </td>
                  <td className="py-3 px-4 text-center font-medium">1%</td>
                </tr>
                <tr className="border-b border-purple-100 bg-purple-50/30">
                  <td
                    className="py-3 px-4 border-r border-purple-100 text-gray-800"
                    colSpan="3"
                  >
                    200,000 (երկու հարյուր հազար) ՀՀ դրամը չգերազանցող
                    շրջանառության պարագայում
                  </td>
                  <td
                    className="py-3 px-4 border-r border-purple-100 text-center font-medium"
                    colSpan="2"
                  >
                    3000 <sup>[2]</sup>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    className="py-3 px-4 border-r border-purple-100 text-gray-800"
                    colSpan="3"
                  >
                    Վճարային էջի ստանդարտից դուրս դիզայնի պատվիրման պարագայում
                  </td>
                  <td className="py-3 px-4 text-center font-medium" colSpan="2">
                    70000 <sup>[3]</sup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Сноски к таблице */}
          <div className="space-y-1 text-xs text-gray-500 mb-8">
            <p>
              [1] Կախված ոլորտի առանձնահատկություններից և շրջանառությունից՝
              սակագները կարող են փոխվել։
            </p>
            <p>[2] Ներառյալ կիրառելի բոլոր հարկերը</p>
            <p>[3] Ներառյալ կիրառելի բոլոր հարկերը</p>
          </div>

          {/* Преимущества пунктами */}
          <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc pl-5 leading-relaxed">
            <li>
              Վճարումներն անվտանգ են, գործում են{" "}
              <strong className="text-gray-900">3D Secure Code</strong>{" "}
              անվտանգության համակարգերը։
            </li>
            <li>
              Վճարման պարզ գործընթաց. ձեր գնորդները վճարում կկատարեն{" "}
              <strong className="text-gray-900">1 քայլով</strong>։
            </li>
            <li>
              Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում Բանկի
              մասնագետների կողմից։
            </li>
            <li>Անհատական մոտեցում Ձեր բիզնեսին ու կայքին:</li>
          </ul>
        </div>

        {/* Секция: Обеспечение кредита и Овердрафт */}
        <div className="max-w-5xl mx-auto space-y-6 mb-12 border-t border-purple-100 pt-8 px-2">
          <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>Որպես վարկի ապահովման միջոց կարող են հանդիսանալ՝</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>POS տերմինալի շրջանառություն</li>
              <li>
                Անհրաժեշտության դեպքում ֆիզիկական և/կամ իրավաբանական անձի
                երաշխավորություն
              </li>
            </ul>
          </div>

          <p className="text-gray-700 text-sm md:text-base">
            Օգտվեք մեր կողմից տրվող հնարավորությունից և գրանցեք Ձեր նոր բիզնես
            հաջողությունները։
          </p>

          <p className="text-gray-700 text-sm md:text-base">
            Վարկի պայմաններին կարող եք ծանոթանալ{" "}
            <a
              href="#terms"
              className="text-purple-600 hover:underline font-medium"
            >
              այստեղ
            </a>
            :
          </p>

          <div className="pt-6">
            <h2 className="text-lg md:text-xl font-bold text-purple-900 mb-4">
              Բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              Evocabank-ում կարող եք ձեռք բերել բիզնես օվերդրաֆտ՝ առանց ավելորդ
              թղթաբանության և ժամանակի կորուստի։ Եթե կան կարճաժամկետ ֆինանսական
              խնդիրներ կամ պարզապես ցանկանում եք ավելի զարգացնել բիզնեսը, ապա
              մեզ մոտ շատ արագ և պարզ տարբերակով կարող եք ձևակերպել բիզնես
              օվերդրաֆտ։
            </p>

            <div className="space-y-3 text-gray-700 text-sm md:text-base mb-6">
              <p className="font-semibold text-gray-900">
                Վարկի համար կարող են դիմել՝
              </p>
              <ul className="space-y-2 list-disc pl-5 leading-relaxed">
                <li>
                  ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր
                  գրանցված գործունեություն են ծավալում առնվազն 12 ամիս
                </li>
                <li>
                  Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS
                  տերմինալի համագործակցության առնվազն 6 ամսվա պայմանագիր
                </li>
              </ul>
            </div>

            <div className="space-y-2 text-gray-700 text-sm md:text-base">
              <p>
                Օվերդրաֆտի պայմաններին կարող եք ծանոթանալ{" "}
                <a
                  href="#overdraft"
                  className="text-purple-600 hover:underline font-medium"
                >
                  այստեղ
                </a>
                :
              </p>
              <p>
                Մեր մյուս բիզնես վարկերին կարող եք ծանոթանալ{" "}
                <a
                  href="#loans"
                  className="text-purple-600 hover:underline font-medium"
                >
                  այստեղ
                </a>
                :
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Секция последних новостей на полную ширину */}
      <div className="w-full mb-16">
        <MobilePromo></MobilePromo>
      </div>
    </div>
  );
};

export default VPosTerminalPage;
