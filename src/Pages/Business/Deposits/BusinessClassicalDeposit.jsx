import React from "react";
import MobilePromo from "../../Individual/HomePage/Components/MobilePromo";

const BusinessClassicalDeposit = () => {
  // Օգնական կոմպոնենտներ ցուցակի կետերի համար
  const PurpleDot = () => (
    <div className="w-1.5 h-1.5 rounded-full bg-[#6000ff] mt-2.5 mr-4 shrink-0" />
  );

  const PurpleDash = () => (
    <div className="w-2.5 h-[2px] bg-[#6000ff] mt-3 mr-4 shrink-0" />
  );

  return (
    <div className="w-full bg-white sm:bg-transparent pt-[30px] sm:pt-[50px] pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Հերոս բաժին (Hero Section) */}
        <div className="flex flex-col lg:flex-row w-full mb-16 lg:min-h-[440px]">
          <div className="lg:w-[40%] bg-[#f8f6fa] p-8 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center lg:rounded-bl-[70px]">
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#222222] mb-5 leading-[1.3]">
              Դասական ավանդ
            </h1>
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              Դասական ավանդը կայուն բարձր եկամտաբերությամբ ավելացրեք ձեր
              խնայողությունները: Դասական ժամկետային ավանդն ընդունում ենք
              ֆիզիկական և իրավաբանական անձանցից: Ավանդ ներդնելիս ձեզ տրամադրում
              ենք անվճար միջազգային քարտ:
            </p>
          </div>
          <div className="lg:w-[60%] bg-pink-50">
            <img
              src="https://www.evoca.am/images-cache/menu/1/1615568375393/780x585.jpg"
              alt="Evocabank Classical Deposit"
              className="w-full h-full min-h-[250px] lg:min-h-full object-cover"
            />
          </div>
        </div>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
        <div className="max-w-[1000px] mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-8 uppercase tracking-wide">
            Անհրաժեշտ տեղեկատվություն
          </h2>

          {/* Ընդհանուր տեղեկատվություն */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#6000ff] mb-4">
              Ընդհանուր տեղեկատվություն
            </h3>
            <ul className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
              <li className="flex items-start">
                <PurpleDot />
                <div className="w-full">
                  <span className="block mb-2">
                    Ժամկետային ավանդներն ընդունում ենք ֆիզիկական (այդ թվում՝
                    անհատ ձեռնարկատեր) և իրավաբանական անձ հաճախորդներից
                    (ռեզիդենտ, ոչ ռեզիդենտ)՝ դրամով, դոլարով, եվրոյով և ռուբլով,
                  </span>
                  <ul className="space-y-2 ml-2 sm:ml-4 mt-2">
                    <li className="flex items-start">
                      <PurpleDash />
                      <span>կանխիկ և անկանխիկ տարբերակով:</span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Ավանդներն ընդունում ենք մեր կողմից հաստատված պայմաններով և
                  տոկոսադրույքներով:
                </span>
              </li>

              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Ավանդների ընդունման և վերադարձման գործընթացում ղեկավարվում ենք
                  Օրենսդրությամբ, Կենտրոնական բանկի որոշումներով և այլ իրավական
                  ակտերով:
                </span>
              </li>

              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Մենք, օրենսդրական ակտերի համաձայն, ապահովում ենք ավանդի
                  ներդրման և դրա հետ կապված այլ գործառնությունների
                  գաղտնիությունը: Ավանդի վերաբերյալ տեղեկատվության տրամադրումը
                  երրորդ անձանց կատարվում է բացառապես «Բանկային գաղտնիքի մասին»
                  օրենքով սահմանված դեպքերում և ընթացակարգով:
                </span>
              </li>

              <li className="flex items-start">
                <PurpleDot />
                <span className="text-gray-700 bg-[#f8f6fa] p-4 rounded-xl block border-l-4 border-[#6000ff]">
                  <strong>Ուշադրություն.</strong> Մեր կողմից պարբերաբար
                  անցկացվող ավանդային ակցիաների պայմանները տարբերվում են մեր
                  համակարգում ավանդների ներգրավման ընդհանուր պայմաններից և
                  գործում են միայն պաշտոնապես հրապարակված ակցիայի շրջանակում
                  ներգրավված ավանդների նկատմամբ:
                </span>
              </li>
            </ul>
          </div>

          {/* Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգը */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#6000ff] mb-4">
              Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգը
            </h3>
            <ul className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Տոկոսագումարները հաշվում ենք ավանդի փաստացի մնացորդի նկատմամբ՝
                  օրական կտրվածքով, պարզ եղանակով, ավանդային պայմանագրի ամբողջ
                  ժամկետի համար: Ավանդի յուրաքանչյուր օրվա տոկոսադրույքը հաշվում
                  ենք սահմանված տոկոսադրույքի 1/365, իսկ նահանջ տարվա համար՝
                  1/366 հարաբերակցությամբ:
                </span>
              </li>

              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Տոկոսագումարները հաշվում ենք ավանդը բանկ մուտք լինելու օրվանից
                  մինչև այն վերադարձնելու կամ ավանդային հաշվից այլ հիմքերով
                  դուրս գրելու օրվան նախորդող օրն ընկած ժամանակահատվածի
                  օրացույցային օրերի համար:
                </span>
              </li>

              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Ավանդների դիմաց հաշվեգրվող տոկոսագումարները վճարում ենք կանխիկ
                  և անկանխիկ եղանակով՝ ավանդատուի ցանկությամբ տոկոսագումարները
                  կարող են վճարվել այն արտարժույթով, որով ներգրավվել է ավանդը,
                  ինչպես նաև ՀՀ դրամով` հիմք ընդունելով վճարման օրը տվյալ
                  արտարժույթի համար մեր կողմից սահմանված անկանխիկ առքի
                  փոխարժեքը:
                </span>
              </li>

              <li className="flex items-start">
                <PurpleDot />
                <div className="w-full">
                  <span className="block mb-2">
                    Ձեր ընտրությամբ տոկոսագումարները վճարում ենք հետևյալ
                    տարբերակներով՝
                  </span>
                  <ul className="space-y-2 ml-2 sm:ml-4">
                    <li className="flex items-start">
                      <PurpleDash />
                      <span>
                        <strong>Տոկոսագումարների պարբերաբար վճարումով</strong>,
                        որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները ձեզ
                        վճարում ենք երկկողմանի համաձայնեցված ժամանակացույցով,
                        կամ՝
                      </span>
                    </li>
                    <li className="flex items-start">
                      <PurpleDash />
                      <span>
                        <strong>
                          Տոկոսագումարների վճարմամբ՝ պայմանագրի ժամկետի վերջում
                        </strong>
                        , որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները
                        վճարում ենք պայմանագրի գործողության ավարտին
                        (վերադարձնում ենք ավանդի գումարի հետ միասին):
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start">
                <PurpleDot />
                <span className="text-gray-700 bg-[#f8f6fa] p-4 rounded-xl block border-l-4 border-[#6000ff] w-full">
                  <strong>Ուշադրություն՝</strong> Ձեր հաշվին առկա միջոցների
                  նկատմամբ տոկոսագումարները հաշվում ենք ԱՆՎԱՆԱԿԱՆ տոկոսադրույքի
                  հիման վրա, իսկ տարեկան ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է
                  տալիս, թե որքան եկամուտ կստանայիք դուք, եթե ձեր ավանդի դիմաց
                  ստացված տոկոսագումարները վերաներդնեիք ավանդի տեսքով: Տարեկան
                  տոկոսային եկամտաբերության հաշվարկման կարգին (Կանոնակարգ 8-02)
                  կարող եք ծանոթանալ{" "}
                  <a
                    href="https://www.cba.am"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6000ff] underline"
                  >
                    www.cba.am
                  </a>{" "}
                  կայքում:
                </span>
              </li>
            </ul>
          </div>

          {/* Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#6000ff] mb-4">
              Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն
            </h3>
            <ul className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Պայմանագրի գործողության ընթացքում պարտավոր ենք առնվազն 30-օրյա
                  պարբերականությամբ ձեզ տրամադրել յուրաքանչյուր ավանդային հաշվի
                  վերաբերյալ համապատասխան քաղվածք:
                </span>
              </li>
              <li className="flex items-start">
                <PurpleDot  />
                <span>
                  Քաղվածքները ձեզ տրամադրում ենք գրավոր՝ փոստային կապի միջոցով,
                  բացառությամբ այն դեպքի, երբ դուք գրավոր, այդ թվում՝
                  էլեկտրոնային դիմումի հիման վրա հրաժարվել եք հաշվի քաղվածքները
                  փոստային կապի միջոցով ստանալու իրավունքից՝ դրանք էլեկտրոնային
                  կամ կապի այլ միջոցներով, կամ մեր տարածքում առձեռն ստանալու
                  պայմանով։ Հաշվի քաղվածքների տրամադրման եղանակն ամրագրվում է
                  Ավանդային պայմանագրով:
                </span>
              </li>
              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Ավանդային հաշվի վերաբերյալ քաղվածքների կրկնօրինակների կամ այլ
                  տեղեկատվության (հաշվի վերաբերյալ տեղեկանքներ) տրամադրման դիմաց
                  ձեզանից գանձվում է միջնորդավճար՝ ըստ մեր սակագների, որոնք
                  ներկայացված են Ընթացիկ հաշիվներ բաժնում:
                </span>
              </li>
            </ul>
          </div>

          {/* Այլ պայմաններ */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#6000ff] mb-4">
              Այլ պայմաններ
            </h3>
            <ul className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Եթե պայմանագրի ժամկետի ավարտից հետո չեք պահանջում վճարել
                  ժամկետային ավանդի գումարը կամ պայմանագրով նախատեսված
                  հանգամանքները երևան գալուց հետո վերադարձնել այլ պայմաններով
                  ներդրված ավանդի գումարը, ապա ավանդային պայմանագիրը համարվում է
                  երկարաձգված ցպահանջ ավանդի պայմաններով, եթե այլ բան նախատեսված
                  չէ պայմանագրով:
                </span>
              </li>
              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Մենք չենք կարող միակողմանի նվազեցնել պայմանագրով որոշված
                  ավանդի տոկոսագումարների չափը, որը դուք ներդրել եք որոշակի
                  ժամկետի ավարտից կամ պայմանագրով նախատեսված հանգամանքները վրա
                  հասնելուց հետո այն հետ ստանալու պայմանով, եթե այլ բան
                  նախատեսված չէ օրենքով:
                </span>
              </li>
              <li className="flex items-start">
                <PurpleDot />
                <span>
                  Օրենսդրությամբ սահմանված կարգով՝ դուք իրավունք ունեք ավանդ
                  ներդնել երրորդ անձանց անունով:
                </span>
              </li>
            </ul>
          </div>

          {/* Երաշխավորված ավանդների սահմանաչափերը */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#6000ff] mb-4">
              Երաշխավորված ավանդների սահմանաչափերը
            </h3>
            <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-4">
              Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը
              երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային,
              ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական
              միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված
              ավանդները հատուցում է Ավանդների հատուցումը երաշխավորող հիմնադրամը:
              Եթե դուք անվճարունակ բանկում ունեք՝
            </p>
            <ul className="space-y-3 text-[#333333] text-sm sm:text-base leading-relaxed">
              <li className="flex items-start">
                <PurpleDash />
                <span>
                  <strong>Միայն դրամային ավանդ</strong> ապա երաշխավորված ավանդի
                  չափը 16 միլիոն դրամ է:
                </span>
              </li>
              <li className="flex items-start">
                <PurpleDash />
                <span>
                  <strong>Միայն արտարժութային ավանդ</strong> ապա երաշխավորված
                  ավանդի չափը 7 միլիոն դրամ է:
                </span>
              </li>
              <li className="flex items-start">
                <PurpleDash />
                <span>
                  <strong>Դրամային ու արտարժութային ավանդներ</strong>, և
                  դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է
                  միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:
                </span>
              </li>
              <li className="flex items-start">
                <PurpleDash />
                <span>
                  <strong>Դրամային ու արտարժութային բանկային ավանդներ</strong>,
                  և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա
                  երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային
                  ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի
                  տարբերության չափով:
                </span>
              </li>
            </ul>
            <p className="text-gray-600 text-xs sm:text-sm mt-4 bg-gray-50 p-3 rounded-lg">
              <strong>Ծանոթագրություն.</strong> Նույն բանկում ունեցած ձեր բոլոր
              դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային
              ավանդները՝ մեկ ավանդ: Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի
              քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր
              բանկում`առավելագույն սահմանաչափով։
            </p>
          </div>
        </div>

        {/* ՊԱՅՄԱՆՆԵՐ ԵՎ ՍԱԿԱԳՆԵՐ */}
        <div className="max-w-[1000px] mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-8 uppercase tracking-wide">
            Պայմաններ և սակագներ
          </h2>

          {/* Աղյուսակ 1 */}
          <div className="overflow-x-auto mb-8 border border-gray-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#f8f6fa] text-[#222222] text-xs sm:text-sm font-bold border-b border-gray-200">
                  <th className="p-4 sm:p-5 w-[30%]">
                    Ներգրավվող գումարների սահմանաչափեր ըստ արժույթի
                  </th>
                  <th className="p-4 sm:p-5 text-center" colSpan="5">
                    Տարեկան տոկոսադրույք ըստ ժամկետների
                  </th>
                </tr>
                <tr className="bg-white text-[#555555] text-xs sm:text-sm border-b border-gray-200">
                  <th className="p-4 sm:p-5"></th>
                  <th className="p-3 text-center">91 - 180 օր</th>
                  <th className="p-3 text-center">181 - 365 օր</th>
                  <th className="p-3 text-center">366 - 545 օր</th>
                  <th className="p-3 text-center">546 - 730 օր</th>
                  <th className="p-3 text-center">731 - 1095 օր</th>
                </tr>
              </thead>
              <tbody className="text-sm text-[#333333] divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 font-medium">
                    200,000 - 25,000,000 ՀՀ դրամ
                  </td>
                  <td className="p-4 text-center">6 %</td>
                  <td className="p-4 text-center">8 %</td>
                  <td className="p-4 text-center">9.5 %</td>
                  <td className="p-4 text-center">10 %</td>
                  <td className="p-4 text-center">10.5 %</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 font-medium">500 - 50,000 ԱՄՆ դոլար</td>
                  <td className="p-4 text-center">2 %</td>
                  <td className="p-4 text-center">3 %</td>
                  <td className="p-4 text-center">4 %</td>
                  <td className="p-4 text-center">4.5 %</td>
                  <td className="p-4 text-center">5 %</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 font-medium">500 - 40,000 Եվրո</td>
                  <td className="p-4 text-center">1 %</td>
                  <td className="p-4 text-center">1.5 %</td>
                  <td className="p-4 text-center">2 %</td>
                  <td className="p-4 text-center">2.5 %</td>
                  <td className="p-4 text-center">3 %</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 font-medium">
                    30,000 - 3,000,000 ՌԴ ռուբլի
                  </td>
                  <td className="p-4 text-center">5 %</td>
                  <td className="p-4 text-center">5.5 %</td>
                  <td className="p-4 text-center">6 %</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Կետեր պայմանների տակ */}
          <div className="space-y-4 text-sm sm:text-base text-[#333333] leading-relaxed mb-10">
            <div className="flex items-start">
              <span className="font-bold text-[#6000ff] mr-3">1.</span>
              <span>
                Ավանդն ընդունվում է ֆիզիկական և իրավաբանական անձանցից, ինչպես
                Բանկի գործունեության վայրում, այնպես էլ` «EvocaTouch» կամ
                «EvocaOnline» հեռակառավարման համակարգերի միջոցով:
              </span>
            </div>

            <div className="flex items-start">
              <span className="font-bold text-[#6000ff] mr-3">2.</span>
              <span>
                Տոկոսագումարների պարբերաբար (ամենամսյա, եռամսյակային,
                կիսամյակային, տարեկան) վճարման դեպքում ՀՀ դրամով ավանդների համար
                սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով
                պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով
                ավանդների համար սահմանվում է վերոհիշյալ սանդղակի
                տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք:
              </span>
            </div>

            <div className="flex items-start">
              <span className="font-bold text-[#6000ff] mr-3">3.</span>
              <span>
                Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած
                նվազագույնը 200.000 ՀՀ դրամից, 500 ԱՄՆ դոլարից, 500 Եվրոյից կամ
                30,000 ՌԴ ռուբլուց: Ավելացման հնարավորությամբ ավանդ ներդնելու
                դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ
                սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ
                դոլարով, Եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է
                վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս
                տոկոսադրույք: Կատարված բոլոր համալրումների հանրագումարը չի կարող
                գերազանցել Ավանդի ներդրման սկզբնական գումարը: Ավանդային
                պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում
                Ավանդի գումարի համալրում չի թույլատրվում:
              </span>
            </div>

            <div className="flex items-start">
              <span className="font-bold text-[#6000ff] mr-3">4.</span>
              <div className="w-full">
                <span className="block mb-3">
                  Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ
                  լուծելու դեպքում Բանկը իրականացնում է Ավանդի տոկոսագումարների
                  վերահաշվարկ հետևյալ դրույքաչափերով՝
                </span>

                <div className="overflow-x-auto border border-gray-200 rounded-xl mt-4">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-[#f8f6fa] text-[#222222] text-xs sm:text-sm font-bold border-b border-gray-200">
                        <th className="p-3">Ավանդի արժույթ</th>
                        <th className="p-3 text-center" colSpan="2">
                          Տարեկան տոկոսադրույք ըստ ժամկետների
                        </th>
                      </tr>
                      <tr className="bg-white text-[#555555] text-xs sm:text-sm border-b border-gray-200">
                        <th className="p-3"></th>
                        <th className="p-3 text-center">Մինչև 365 օր</th>
                        <th className="p-3 text-center">366 - 1095 օր</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-[#333333] divide-y divide-gray-100">
                      <tr>
                        <td className="p-3 font-medium">ՀՀ դրամ</td>
                        <td className="p-3 text-center">0.5 %</td>
                        <td className="p-3 text-center">8.5 %</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">ԱՄՆ դոլար</td>
                        <td className="p-3 text-center">0.1 %</td>
                        <td className="p-3 text-center">3.5 %</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Եվրո</td>
                        <td className="p-3 text-center">0.1 %</td>
                        <td className="p-3 text-center">1.5 %</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">ՌԴ ռուբլի</td>
                        <td className="p-3 text-center">0.1 %</td>
                        <td className="p-3 text-center">5 %</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex items-start pt-2">
              <span className="font-bold text-[#6000ff] mr-3">5.</span>
              <span>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:</span>
            </div>
          </div>
        </div>

        {/* ԼՐԱՑՈՒՑԻՉ ՊԱՅՄԱՆՆԵՐ (ՔԱՐՏԵՐ) */}
        <div className="max-w-[1000px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-6 uppercase tracking-wide">
            Լրացուցիչ պայմաններ
          </h2>
          <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-6">
            1. Ավանդատուի ցանկության դեպքում, Բանկը կարող է տրամադրել վճարային
            քարտ առանց տարեկան սպասարկման վճարի գանձման:
          </p>
          <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-4">
            2. Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի
            սահմանվում է ստորև.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#f8f6fa] text-[#222222] text-xs sm:text-sm font-bold border-b border-gray-200">
                  <th className="p-4 sm:p-5">Ավանդի արժույթ / Քարտի տեսակ</th>
                  <th className="p-4 sm:p-5 text-center">
                    Mastercard Standard / Visa Classic
                  </th>
                  <th className="p-4 sm:p-5 text-center">
                    Mastercard Gold / Visa Gold
                  </th>
                  <th className="p-4 sm:p-5 text-center">VISA Infinite</th>
                </tr>
              </thead>
              <tbody className="text-sm text-[#333333] divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-medium">ՀՀ դրամ</td>
                  <td className="p-4 text-center">500,000 – 25,000,000</td>
                  <td className="p-4 text-center">25,000,001 – 50,000,000</td>
                  <td className="p-4 text-center">50,000,001 և ավել</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">ԱՄՆ դոլար</td>
                  <td className="p-4 text-center">1,000 – 50,000</td>
                  <td className="p-4 text-center">50,001 – 100,000</td>
                  <td className="p-4 text-center">100,001 և ավել</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Եվրո</td>
                  <td className="p-4 text-center">1,000 – 40,000</td>
                  <td className="p-4 text-center">40,001 – 100,000</td>
                  <td className="p-4 text-center">100,001 և ավել</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">ՌԴ ռուբլի</td>
                  <td className="p-4 text-center">60,000 – 3,000,000</td>
                  <td className="p-4 text-center">3,000,001 – 7,000,000</td>
                  <td className="p-4 text-center">7,000,001 և ավել</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <MobilePromo></MobilePromo>
    </div>
  );
};

export default BusinessClassicalDeposit;
