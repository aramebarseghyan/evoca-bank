import React, { useState } from "react";
import MobilePromo from "../HomePage/Components/MobilePromo";

const DepositsImportantInfo = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full font-sans bg-white min-h-screen pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 pb-2">
            Ընդհանուր դրույթներ
          </h2>

          <div className="space-y-5 text-gray-800 text-sm sm:text-base leading-relaxed">
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">1.</span>
              <p>
                «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ն (այսուհետ՝ Բանկ) իրականացնում է իրավաբանական և
                ֆիզիկական անձանցից (ռեզիդենտ, ոչ ռեզիդենտ) ժամկետային ավանդների
                (այսուհետ՝ Ավանդ) ներգրավում:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">2.</span>
              <p>
                Ավանդները ներգրավվում են՝ ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ
                ռուբլով:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">3.</span>
              <div>
                <p>
                  Ավանդներն ընդունվում են ինչպես կանխիկ, այնպես էլ անկանխիկ
                  եղանակով:
                </p>
                <p className="mt-1">
                  Ավանդների դիմաց հաշվեգրվող տոկոսագումարների վճարումն
                  իրականացվում է ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">4.</span>
              <p>
                Ֆիզիկական անձ հաճախորդի կողմից Ավանդի ներդրումը ձևակերպվում է
                Բանկի կողմից սահմանված ձևի Հայտ-պայմանագիրը ստորագրելով և/կամ
                էլեկտրոնային հայտ ներկայացնելով: Հայտ-պայմանագրում/էլ. հայտում
                նշվում է Ավանդի տեսակը, գումարը, արժույթը, ժամկետը,
                տոկոսադրույքը և ըստ անհրաժեշտության այլ պայմաններ:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">5.</span>
              <div className="w-full">
                <p className="mb-3">
                  Ավանդների ներդրման համար գործառնական օր է համարվում՝
                </p>
                <div className="space-y-3 pl-2 sm:pl-4">
                  <div className="flex gap-4">
                    <span className="text-[#5D00E0] font-bold shrink-0">
                      1.
                    </span>
                    <p>
                      Գլխամասում և մասնաճյուղերում ներդրվող ավանդների գծով`
                      տվյալ ստորաբաժանման Հաճախորդների սպասարկման համար
                      սահմանված ժամերը,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#5D00E0] font-bold shrink-0">
                      2.
                    </span>
                    <p>
                      Հեռակառավարման համակարգերի միջոցով ներդրվող ավանդների
                      համար` տվյալ օրացուցային օրվա 24-ժամյա ժամանակահատվածը:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">6.</span>
              <p>
                Ավանդների ներդրման և համալրման համար տվյալ գործառնական օրվա
                ընթացքում ներկայացված հայտերը կատարվում են միևնույն գործառնական
                օրվա ընթացքում։
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">7.</span>
              <p>
                Ֆիզիկական անձ հանդիսացող Ավանդատուների ավանդները երաշխավորվում
                են համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը
                երաշխավորելու մասին» ՀՀ օրենքի: Երաշխավորված ավանդների չափերին
                Հաճախորդները կարող են ծանոթանալ Բանկի ինտերնետային կայքում,
                Ավանդների տեղեկատվական ամփոփագրում, ինչպես նաև Ավանդ ներդնելու
                դեպքում վերջինիս տրամադրվող ծանուցման միջոցով:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">8.</span>
              <p>
                Ավանդի գումարի վերադարձը կատարվում է Ավանդի պայմանագրի վերջին
                օրը, իսկ եթե տվյալ օրը ոչ աշխատանքային է, ապա հաջորդ
                աշխատանքային օրը:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">9.</span>
              <p>
                Հաշվեգրված տոկոսների վճարումը իրականացվում է համաձայն Հաճախորդի
                կողմից Հայտ-պայմանագրում/Պայմանագրում նշված տոկոսների վճարման
                պարբերականության:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">10.</span>
              <p>
                Ավանդների հետ կապված կանխիկ գործառնությունների միջնորդավճարները
                սահմանվում են Բանկի «Սակագներով և դրույքներով»
                (TRM14-0002-02/1)-ով սահմանված դրամարկղային գործառնությունների
                սակագներով, բացառությամբ ՌԴ ռուբլով ավանդների: Կանխիկ ՌԴ ռուբլով
                ներդրված Ավանդը վերադարձվում է կանխիկ ՌԴ ռուբլով, իսկ անկանխիկ
                ՌԴ ռուբլով ներդրված Ավանդը վերադարձվում է անկանխիկ ՌԴ ռուբլով՝
                առանց միջնորդավճարների գանձման:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">11.</span>
              <p>
                Անկանխիկ ՌԴ ռուբլով ներդրված Ավանդը կանխիկ ՌԴ ռուբլով
                վերադարձնելու դեպքում գանձվում է վերադարձման օրը ՌԴ ռուբլու
                կանխիկացման համար սահմանված միջնորդավճարը:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">12.</span>
              <p>
                Կանխիկ ՌԴ ռուբլով ներդրված Ավանդը անկանխիկ ՌԴ ռուբլով
                վերադարձնելու դեպքում գանձվում է վերադարձման օրը կանխիկ ՌԴ
                ռուբլու մուտքագրման համար սահմանված միջնորդավճարը:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">13.</span>
              <p>
                Արտարժույթով ներդրված ավանդների դիմաց հաշվեգրված
                տոկոսագումարները ավանդատուի ցանկությամբ կարող են վճարվել այն
                արտարժույթով, որով ներգրավվել է ավանդը, ինչպես նաև ՀՀ դրամով`
                հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար Բանկի կողմից
                սահմանված անկանխիկ առքի փոխարժեքը:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">14.</span>
              <p>
                Հաճախորդը կարող է ավանդ ներդնել ինչպես «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ
                գործունեության վայրում, այնպես էլ Բանկի հեռակառավարման
                համակարգերի (EvocaMobile, EvocaTouch) միջոցով։
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">15.</span>
              <p>
                Հեռակառավարման համակարգերի միջոցով ավանդ ներդնելու համար
                Հաճախորդը պետք է նախապես հանդիսանա Բանկի հաշվետեր հաճախորդ և
                Բանկից ստացած լինի նշված համակարգեր մուտք գործելու գաղտնաբառերը։
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">16.</span>
              <p>
                Ավանդ ներդնելու համար անհրաժեշտ է ներկայացնել անձը հաստատող
                փաստաթուղթ և սոցիալական քարտ (նույնականացման քարտի առկայության
                դեպքում սոցիալական քարտ չի պահանջվում)։
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">17.</span>
              <p>
                Բանկը, հաշվի առնելով Հաճախորդի կողմից ներկայացված
                տեղեկատվությունը և օրենսդրական պահանջները («Փողերի լվացման և
                ահաբեկչության ֆինանսավորման դեմ պայքարի մասին» ՀՀ օրենք, FATCA և
                այլն), կարող է պահանջել լրացուցիչ փաստաթղթեր կամ
                տեղեկատվություն։
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">18.</span>
              <p>
                Ավանդի ներդրման համար Հաճախորդի համար բացվում է ավանդի արժույթով
                ընթացիկ հաշիվ, որի համար սպասարկման միջնորդավճար չի գանձվում և
                որը պետք է օգտագործվի միայն տվյալ Ավանդի գծով գործարքների
                կատարման համար։
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">19.</span>
              <p>
                Արտարժույթով ավանդների ներդրման դեպքում արտարժույթի փոխարժեքի
                տատանումների ռիսկը կրում է Հաճախորդը։
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">20.</span>
              <p>
                25,000,000 ՀՀ դրամից, 50,000 ԱՄՆ դոլարից, 40,000 Եվրոյից և
                3,000,000 ՌԴ ռուբլուց ավել գումար ներդնելու դեպքում սահմանվում
                են պայմանագրային տոկոսադրույքներ:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">21.</span>
              <p>
                Ավանդատուն կարող է իր ներդրված ավանդի մինչև 90 % չափով ստանալ
                վարկ կամ օվերդրաֆտ` իր ժամկետային ավանդի ապահովվածությամբ՝
                ավանդի տոկոսադրույք գումարած 2 % տարեկան տոկոսադրույքով:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">22.</span>
              <p>
                Ավանդատուն ավանդի և հաշվեգրված տոկոսների տնօրինման իրավունքը
                կարող է լիազորել այլ անձի՝ նոտարական կարգով վավերացված
                լիազորագրի հիման վրա։
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">23.</span>
              <p>
                Եթե Ավանդատուն Ավանդի ժամկետի ավարտից հետո չի պահանջում վճարել
                Ավանդի գումարը, ապա Բանկն այն փոխանցում է Ավանդատուի ընթացիկ
                հաշվին:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">24.</span>
              <p>
                Հաճախորդը կարող է ներդնել Ավանդ հօգուտ երրորդ անձի՝ համաձայն ՀՀ
                օրենսդրության և Բանկի ներքին իրավական ակտերի:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">25.</span>
              <p>
                Ավանդի գաղտնիությունը երաշխավորվում է ՀՀ օրենսդրությամբ
                սահմանված կարգով:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">26.</span>
              <p>
                Գործառնական օրից դուրս ներկայացված էլեկտրոնային ավանդային
                հայտերի դեպքում ավանդային պայմանագիրը կնքված է համարվում հաջորդ
                գործառնական օրը:
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">27.</span>
              <p>
                Հեռակառավարման համակարգերի միջոցով Բանկը Հաճախորդին ուղարկում է
                ավանդի ձևակերպումը հաստատող կամ մերժելու մասին հաղորդագրություն
                (SMS, PUSH, E-mail և այլն):
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#5D00E0] font-bold shrink-0">28.</span>
              <p>
                Հաճախորդն իրավունք ունի Բանկի գործունեության վայրում թղթային
                ձևով ստանալ Հեռակառավարման համակարգերով ներդրված Ավանդի
                մուտքագրումը հավաստող փաստաթղթերի օրինակները, ինչպես նաև
                ավանդային հաշիվների քաղվածքները:
              </p>
            </div>
          </div>
        </div>

        {}
        <div className="space-y-4 pt-6 border-t border-gray-100">
          {}
          <div className="border border-[#E9D7FE] rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>Ավանդների տոկոսագումարների հաշվարկման և վճարման կարգը</span>
              <span
                className={`transform transition-transform text-[#5D00E0] ${openAccordion === 1 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === 1 && (
              <div className="p-6 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 border-t border-gray-100 mt-2">
                <p>
                  Ավանդի դիմաց տոկոսագումարների հաշվարկը կատարվում է դրա փաստացի
                  մնացորդի նկատմամբ` օրական կտրվածքով: Ներդրված ավանդի
                  յուրաքանչյուր օրվա տոկոսադրույքը հաշվարկվում է սահմանված
                  տոկոսադրույքի 1/365 հարաբերակցությամբ, իսկ նահանջ տարվա համար
                  1/366 հարաբերակցությամբ:
                </p>
                <p>
                  Տոկոսագումարները հաշվարկվում են ավանդը ներդնելու օրվանից
                  սկսած՝ մինչև ավանդը վերադարձնելու օրվան նախորդող օրը:
                  Ավանդադրման օր է համարվում Ավանդատուի անվամբ բացված ավանդային
                  հաշվին դրամական միջոցների փաստացի մուտքագրման օրը:
                </p>
                <p>
                  Ավանդների դիմաց հաշվեգրված տոկոսագումարները վճարվում են կանխիկ
                  և անկանխիկ եղանակով: Եթե վճարման օրը հանդիսանում է ոչ
                  աշխատանքային օր, ապա վճարումը կատարվում է դրան հաջորդող
                  աշխատանքային օրը:
                </p>
              </div>
            )}
          </div>

          {}
          <div className="border border-[#E9D7FE] rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն</span>
              <span
                className={`transform transition-transform text-[#5D00E0] ${openAccordion === 2 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === 2 && (
              <div className="p-6 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 border-t border-gray-100 mt-2">
                <p>
                  Պայմանագրի գործողության ընթացքում առնվազն երեսնօրյա
                  պարբերականությամբ Բանկը Ավանդատուի կողմից նախընտրելի
                  հաղորդակցման եղանակով վերջինիս կտրամադրի յուրաքանչյուր
                  ավանդային հաշվի վերաբերյալ համապատասխան քաղվածք:
                </p>
                <p>
                  Այլ դեպքերում Ավանդատուի պահանջով Բանկը կտրամադրի քաղվածք,
                  քաղվածքի կրկնօրինակ կամ այլ տեղեկատվության՝ համաձայն Բանկի
                  կողմից սահմանված սակագների։
                </p>
              </div>
            )}
          </div>

          {}
          <div className="border border-[#E9D7FE] rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>Երաշխավորված ավանդների չափերը</span>
              <span
                className={`transform transition-transform text-[#5D00E0] ${openAccordion === 3 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === 3 && (
              <div className="p-6 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 border-t border-gray-100 mt-2">
                <p>
                  Ավանդի գումարի հատուցումը և հատուցման չափերը երաշխավորված են
                  «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու
                  մասին» ՀՀ օրենքով: Երաշխավորվող սահմանաչափերն են.
                </p>

                <div className="w-full overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-gray-900 font-semibold border-b border-gray-200">
                        <th className="p-3 border-r border-gray-200">
                          Ավանդի արժութային կառուցվածքը
                        </th>
                        <th className="p-3">
                          Ավանդի երաշխավորման առավելագույն չափը
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 border-r border-gray-200 font-medium">
                          Եթե նույն բանկում ունեք միայն դրամային ավանդ
                        </td>
                        <td className="p-3 font-bold text-[#5D00E0]">
                          16 միլիոն ՀՀ դրամ
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-r border-gray-200 font-medium">
                          Եթե նույն բանկում ունեք միայն արտարժութային ավանդ
                        </td>
                        <td className="p-3 font-bold text-[#5D00E0]">
                          7 միլիոն ՀՀ դրամ
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-r border-gray-200 font-medium">
                          Եթե նույն բանկում ունեք և ՀՀ դրամով, և արտարժույթով
                          ավանդ (եթե դրամային ավանդը 7 միլիոն դրամից ավելի է)
                        </td>
                        <td className="p-3 font-bold text-[#5D00E0]">
                          16 միլիոն ՀՀ դրամ (երաշխավորվում է միայն դրամային
                          ավանդը)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-r border-gray-200 font-medium">
                          Եթե նույն բանկում ունեք և ՀՀ դրամով, և արտարժույթով
                          ավանդ (եթե դրամային ավանդը 7 միլիոն դրամից պակաս է)
                        </td>
                        <td className="p-3 font-bold text-[#5D00E0]">
                          7 միլիոն ՀՀ դրամ (դրամայինն ամբողջությամբ և
                          արտարժութայինը՝ մնացորդի չափով)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Բանկում Հաճախորդի ունեցած բոլոր դրամային ավանդները համարվում
                  են մեկ ավանդ.
                </p>
              </div>
            )}
          </div>

          {}
          <div className="border border-[#E9D7FE] rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(4)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>Ավանդատուներին անվճար տրամադրվող վճարային քարտեր</span>
              <span
                className={`transform transition-transform text-[#5D00E0] ${openAccordion === 4 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === 4 && (
              <div className="p-6 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 mt-2">
                <p>
                  Որպես Բանկի ավանդատու՝ Դուք ստանում եք միջազգային քարտ
                  բացարձակապես անվճար, որին ցանկության դեպքում կարող են
                  փոխանցվել Ձեր ավանդի տոկոսագումարները։
                </p>
              </div>
            )}
          </div>

          {}
          <div className="border border-[#E9D7FE] rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(5)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>
                Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ
              </span>
              <span
                className={`transform transition-transform text-[#5D00E0] ${openAccordion === 5 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === 5 && (
              <div className="p-6 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 mt-2">
                <p>
                  Տոկոսագումարների հաշվարկման և օրինակների մանրամասները հասանելի
                  են Բանկի կողմից տրամադրվող պաշտոնական տեղեկատվական
                  ամփոփագրերում և հաշվիչներում։
                </p>
              </div>
            )}
          </div>

          {}
          <div className="border border-[#E9D7FE] rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(6)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>
                Ավանդի տարեկան տոկոսային եկամտաբերության չափը (1% - 10.5%)
              </span>
              <span
                className={`transform transition-transform text-[#5D00E0] ${openAccordion === 6 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === 6 && (
              <div className="p-6 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 mt-2">
                <p>
                  Տարեկան տոկոսային եկամտաբերությունը (APR) հաշվարկվում է ՀՀ
                  կենտրոնական բանկի սահմանած կարգով՝ հիմք ընդունելով փաստացի
                  եկամտաբերությունը և վճարման պարբերականությունը։
                </p>
              </div>
            )}
          </div>

          {}
          <div className="border border-[#E9D7FE] rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(7)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>
                Բանկի կողմից առաջարկվող ավանդատեսակների տարեկան տոկոսային
                եկամտաբերության աղյուսակներ
              </span>
              <span
                className={`transform transition-transform text-[#5D00E0] ${openAccordion === 7 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === 7 && (
              <div className="p-6 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 mt-2">
                <p>
                  Աղյուսակները ներառում են բոլոր գործող ժամկետային
                  ավանդատեսակների եկամտաբերության սանդղակները ըստ արժույթների
                  (AMD, USD, EUR, RUB)։
                </p>
              </div>
            )}
          </div>

          {}
          <div className="border border-[#E9D7FE] rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(8)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <span>
                Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA)
                ծանուցում
              </span>
              <span
                className={`transform transition-transform text-[#5D00E0] ${openAccordion === 8 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === 8 && (
              <div className="p-6 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 mt-2">
                <p>
                  «Evocabank»-ը հանդիսանում է FATCA-ի պահանջներին համապատասխանող
                  ֆինանսական հաստատություն և ապահովում է անհրաժեշտ
                  տեղեկատվության փոխանակման կանոնների պահպանումը։
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <MobilePromo />
    </div>
  );
};

export default DepositsImportantInfo;
