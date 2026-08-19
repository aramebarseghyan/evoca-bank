import React from "react";
import TestimonialCarousel from "../../Individual/HomePage/Components/TestimonialCarousel";

const BusinessMetalAccounts = () => {
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
        <div className="flex flex-col lg:flex-row w-full mb-16 lg:min-h-[440px]">
          <div className="lg:w-[40%] bg-[#f8f6fa] p-8 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center lg:rounded-bl-[70px]">
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#222222] mb-5 leading-[1.3]">
              Առարկայազուրկ մետաղական հաշիվներ
            </h1>
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք
              նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ
              հաշիվները հնարավորություն են ընձեռնում խնայողություններ կատարել
              անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում
              ոսկու գնի բարձրացման շնորհիվ:
            </p>
          </div>
          <div className="lg:w-[60%] bg-pink-50">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16154599304948/780x585.jpg"
              alt="Evocabank Metal Accounts"
              className="w-full h-full min-h-[250px] lg:min-h-full object-cover"
            />
          </div>
        </div>

        {/* Սեկցիա: Հիմնական պայմաններ */}
        <div className="max-w-[1000px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-8">
            Հիմնական պայմաններ
          </h2>

          <ul className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
            <li className="flex items-start">
              <PurpleDot />
              <span>
                Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար,
                միայն 999.9 հարգի ոսկով, առանց նվազագույն մնացորդի պահանջի: Մեզ
                մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած 31 գրամից (ոսկու
                գնանշումը կատարվում է գրամով): Մեր կայքում հրապարակվում են ոսկու
                գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային
                շուկաներում ոսկու գնից:
              </span>
            </li>

            <li className="flex items-start">
              <PurpleDot />
              <span>
                Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով` ՀՀ Կենտրոնական
                բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային)
                արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝
                0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է
                31.10348 գրամի):
              </span>
            </li>

            <li className="flex items-start">
              <PurpleDot />
              <span>
                Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ,
                ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին
                իրավական ակտերով:
              </span>
            </li>

            <li className="flex items-start">
              <PurpleDot />
              <span>
                Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ
                և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման,
                գործառնությունների կատարման սակագներին և պայմաններին կարող եք
                ծանոթանալ{" "}
                <a
                  href="#"
                  className="text-[#6000ff] underline hover:text-[#5000cc]"
                >
                  այստեղ
                </a>
                :
              </span>
            </li>

            <li className="flex items-start">
              <PurpleDot />
              <div className="w-full">
                <span className="block mb-3">
                  Այս հաշիվներով կարող ենք իրականացնել հետևյալ
                  գործառնությունները՝
                </span>
                <ul className="space-y-3 ml-2 sm:ml-4">
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      հաշվի համալրում՝ բանկից անկանխիկ ոսկի գնելու և այն հաշվին
                      մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում
                      կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի
                      փոխանցելու միջոցով,
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      հաշվի ելքագրում՝ հաշվին առկա անկանխիկ ոսկին բանկին
                      վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ
                      այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու
                      միջոցով:
                    </span>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex items-start">
              <PurpleDot />
              <span>Մետաղական հաշիվները կարող են գրավադրվել:</span>
            </li>

            <li className="flex items-start">
              <PurpleDot />
              <div className="w-full">
                <span className="block mb-4 font-bold text-[#222222]">
                  Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝
                </span>

                <span className="block font-bold text-[#444444] mb-3">
                  Իրավաբանական անձանց դեպքում`
                </span>
                <ul className="space-y-3 ml-2 sm:ml-4 mb-6">
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>Դիմում՝ մեր ձևանմուշի համաձայն:</span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Կանոնադրություն (ոչ ռեզիդենտների դեպքում՝ կանոնադրություն
                      կամ փոխարինող այլ փաստաթուղթ):
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների
                      դեպքում՝ տվյալ երկրի գրանցող պետական մարմնի կողմից տրված
                      վկայական և գրանցման երկրի համապատասխան մարմնի կողմից տրված
                      հարկային մարմիններում հաշվառված փաստաթուղթ):
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական
                      ռեգիստրի վկայականում:
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Գործադիր մարմնի ղեկավար/ների, գլխավոր հաշվապահի անձնագրերը
                      կամ նույնականացման քարտերը, ինչպես նաև քաղվածքներ
                      պաշտոնների նշանակման հրամաններից, եթե պետական ռեգիստրի
                      գրանցման վկայականում ղեկավարի վերաբերյալ տվյալները
                      բացակայում են (ոչ ռեզիդենտների դեպքում՝ գործադիր մարմնի
                      ղեկավար/ների, անձնագիր/ները և իրավասու մարմնի կողմից
                      պաշտոնների նշանակման վերաբերյալ որոշումները):
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Հաշվի կարգադրիչների անձնագրերը կամ նույնականացման քարտերը:
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Կանոնադրական կապիտալում 10% և ավելի բաժնեմաս ունեցող
                      անձանց/իրական շահառուների նույնականացման համար անհրաժեշտ
                      են՝ Եթե իրական շահառուն ֆիզիկական անձ է, ապա անձնագրի կամ
                      նույնականացման քարտի պատճենները: Եթե իրական շահառուն
                      իրավաբանական անձ է, ապա տվյալ իրավաբանական անձի այս
                      տեղեկատվության 2-րդ, 3-րդ և 4-րդ կետերով պահանջվող
                      փաստաթղթերի (ոչ ռեզիդենտների դեպքում՝ միայն 2-րդ և 3-րդ
                      կետերով պահանջվող փաստաթղթերի) պատճենները:
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>Մեր պահանջով այլ փաստաթղթեր:</span>
                  </li>
                </ul>

                <span className="block font-bold text-[#444444] mb-3">
                  Անհատ ձեռնարկատերի դեպքում`
                </span>
                <ul className="space-y-3 ml-2 sm:ml-4">
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>Դիմում՝ մեր ձևանմուշի համաձայն:</span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>Անձնագիր կամ նույնականացման քարտ:</span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Պետական ռեգիստրի գրանցման վկայական (բացակայության դեպքում՝
                      քաղվածք պետական ռեգիստրից):
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական
                      ռեգիստրի վկայականում:
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PurpleDash />
                    <span>
                      Ստորագրության նմուշի քարտ: Առանց կնիքի գործող անհատ
                      ձեռնարկատերի դեպքում, ստորագրության և նմուշի քարտում
                      կատարվում է համապատասխան գրառում՝ կնիքի բացակայության
                      վերաբերյալ:
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span>Մեր պահանջով այլ փաստաթղթեր:</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <TestimonialCarousel></TestimonialCarousel>
    </div>
  );
};

export default BusinessMetalAccounts;
