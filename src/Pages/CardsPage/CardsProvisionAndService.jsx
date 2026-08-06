import React, { useState } from "react";
const documentsData = [
  {
    id: 1,
    title: "Կենսաթոշակային քարտեր",
    link: "https://www.evoca.am/files/global_files/1/pention-cards.pdf",
  },
  {
    id: 2,
    title: "Evoca Gift քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/evoca-gift-tariffs.pdf",
  },
  {
    id: 3,
    title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26",
    link: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf",
  },
  {
    id: 4,
    title: "Visa Digital քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf",
  },
  {
    id: 5,
    title:
      "«ԷՎՈԿԱԲԱՆԿ» ԲԸ վճարային քարտերի կիրառմամբ EvocaTouch բջջային հավելվածով թվայնացված քարտեր",
    link: "https://www.evoca.am/files/global_files/1/digital-cards-terms-and-conditions.pdf",
  },
  {
    id: 6,
    title: "Visa Infinite քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/visa-infinite-2026.pdf",
  },
  {
    id: 7,
    title: "UnionPay Business Platinum քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/union-pay-17-03-26.pdf",
  },
  {
    id: 8,
    title: "UnionPay UPI Gold քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/union-pay-gold-17-03-26.pdf",
  },
  {
    id: 9,
    title: "Visa Vision քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/union-pay-gold-17-03-26.pdf",
  },
  {
    id: 10,
    title: "Mastercard World Digital (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/vision-03-2026.pdf",
  },
  {
    id: 11,
    title: "Dalma Gift քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/dalma-gift-cards.pdf",
  },
  {
    id: 12,
    title: "Garage Masters' Mall Gift քարտեր",
    link: "https://www.evoca.am/files/global_files/1/garage-master-mall-gifts.pdf",
  },
  {
    id: 13,
    title: "Digital Gift քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/card-operation-procedure-2026.pdf",
  },
  {
    id: 14,
    title: "Rio Gift քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/pention-cards.pdf",
  },
  {
    id: 15,
    title: "MBG Gift քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/evoca-gift-tariffs.pdf",
  },
  {
    id: 16,
    title: "Վճարային քարտերի տրամադրման և սպասարկման պայմաններ 01.02.2026թ",
    link: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf",
  },
  {
    id: 17,
    title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
    link: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf",
  },
  {
    id: 18,
    title: "Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026",
    link: "https://www.evoca.am/files/global_files/1/digital-cards-terms-and-conditions.pdf",
  },
  {
    id: 19,
    title: "Evoca Travel (Տեղեկատվական ամփոփագիր) 17.03.2026",
    link: "https://www.evoca.am/files/global_files/1/visa-infinite-2026.pdf",
  },
  {
    id: 20,
    title: "Visa Platinum քարտեր (Տեղեկատվական ամփոփագիր)",
    link: "https://www.evoca.am/files/global_files/1/union-pay-17-03-26.pdf",
  },
  {
    id: 21,
    title: "USSD և 3D Secure ծառայություն",
    link: "https://www.evoca.am/files/global_files/1/union-pay-gold-17-03-26.pdf",
  },
];
const CardsProvisionAndService = () => {
  const [openSection, setOpenSection] = useState(1);

  return (
    <div className="w-full bg-[#F4F7FF] min-h-screen py-8 font-sans">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-[22px] md:text-[26px] font-bold text-[#1A1F36] mb-6 tracking-wide">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        {/* ԲԼՈԿ 1: Քարտի տրամադրում և ակտիվացում */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 1 ? null : 1)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Քարտի տրամադրում և ակտիվացում
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 1 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 1
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Բանկը հաճախորդներին տրամադրում է Հաշվարկային կամ Վարկային`
                  «ArCa» լոկալ, «Visa», «Mastercard» և «UnionPay» միջազգային
                  վճարային համակարգերի քարտեր:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Քարտային հաշիվները բացվում և վարվում են ՀՀ դրամով, ԱՄՆ
                  դոլարով, ԵՎՐՈ-ով և ՌԴ ռուբլով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Արագ փոխանցման համակարգերով ստացված գումարներ հաճախորդի
                  կարգադրությամբ կարող են հաշվեգրվել նաև հաճախորդի Բանկում
                  ունեցած այլ Քարտային հաշվին:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Բանկը դիմումի համաձայն Քարտապանի կողմից լիազորված անձանց կարող
                  է տրամադրել Լրացուցիչ քարտեր: Քարտային հաշիվը տնօրինում է
                  հիմնական Քարտի Քարտապանը: Հիմնական Քարտի Քարտապանը
                  պատասխանատվություն է կրում տրամադրված բոլոր Լրացուցիչ Քարտերով
                  իրականացված գործարքների համար: Լրացուցիչ քարտը կարող է
                  տրամադրվել անմիջականորեն այն օգտագործողին միայն հիմնական
                  Քարտապանի նախապես ներկայացված գրավոր համաձայնության դեպքում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Բանկը Քարտապանի Քարտային հաշվի դրական մնացորդի նկատմամբ
                  հաշվեգրում է տոկոսագումարներ, տոկոսադրույքի չափը սահմանվում է
                  Բանկի սակագներով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  Վճարային Քարտը Քարտապանին է տրամադրվում Բանկի գլխամասային
                  գրասենյակում, մասնաճյուղերում, ինչպես նաև առաքման միջոցով`
                  Վճարային քարտի ստացման դիմումը ներկայացնելուն հաջորդող 7 (յոթ)
                  աշխատանքային օրվա ընթացքում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">7.</span>
                  Քարտապանը Վճարային քարտը ստանալիս պետք է ներկայացնի անձը
                  հաստատող այն փաստաթուղթը, որով դիմել է քարտի համար (անձնագիր
                  կամ նույնականացման քարտ):
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">8.</span>
                  Բանկը Քարտապանին Վճարային Քարտը կարող է տրամադրել PIN
                  ծածկագրով կամ առանց PIN ծածկագրի: Վճարային Քարտը և PIN
                  ծածկագիրը Քարտապանին տրամադրվում են առանձին փակ ծրարներով:
                  Վճարային Քարտը առանց PIN ծածկագրի տրամադրման դեպքում քարտի
                  ակտիվացումը և Հաճախորդի կողմից PIN ծածկագրի սահմանումը
                  կատարվում է Հաճախորդի համար Բանկում գրանցված հեռախոսահամարին
                  ստացված OTP գաղտնաբառի միջոցով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">9.</span>
                  Քարտը և PIN ծածկագիրը ստանալուն պես Քարտապանը պետք է ստուգի
                  ծրարի փակ և անվնաս լինելը, քարտի և PIN-ծածկագրի առկայությունը
                  ծրարում, համապատասխանությունը քարտի պատվիրման հայտին, ինչպես
                  նաև քարտի վրա նշված տվյալների ճշտությունը:
                  Անհամապատասխանությունների դեպքում Քարտապանը պետք է անմիջապես
                  տեղեկացնի Բանկին:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">10.</span>
                  Վճարային Քարտը ստանալուն պես Քարտապանը պարտավոր է անմիջապես
                  ստորագրել Վճարային Քարտի հակառակ կողմի վրա ստորագրության համար
                  նախատեսված մասում: Վճարային Քարտի հակառակ կողմում
                  ստորագրության բացակայությունը կամ դրա անհամապատասխանությունը
                  օրինական հիմք է քարտի սպասարկումը մերժելու և այն առգրավելու
                  համար:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">11.</span>
                  Բանկի կողմից Վճարային Քարտերը տրամադրվում են մինչև 5 (հինգ)
                  տարի ժամկետով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">12.</span>
                  Հաճախորդի ներկայացրած դիմումի հիման վրա Բանկը կարող է
                  վարկավորել Հաճախորդի Քարտային հաշիվը` վերջինիս հետ կնքելով
                  համապատասխան վարկային սահմանաչափի տրամադրման պայմանագիր:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">13.</span>
                  Եթե Հաճախորդը Վճարային քարտը պատվիրելուց հետո 30 օրացուցային
                  օրվա ընթացքում չի դիմում Բանկ Վճարային քարտը ստանալու համար,
                  ապա Բանկը կարող է ոչնչացնել Վճարային քարտը` փակելով քարտային
                  հաշիվը, և չվերադարձնել գանձված միջնորդավճարները:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 2: Վճարային քարտի վճարներ և գանձումներ */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 2 ? null : 2)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Վճարային քարտի վճարներ և գանձումներ
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 2 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 2
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Քարտապանը վճարում է Բանկին Վճարային Քարտի սպասարկման հետ
                  կապված Բանկի սակագներով սահմանված միջնորդավճարներ, եթե Բանկի և
                  Քարտապանի միջև այլ համաձայնություն չի կայացվել:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Վճարային Քարտի սպասարկման միջնորդավճարի առաջին վճարումը
                  Քարտապանը կատարում է քարտը պատվիրելիս, իսկ հաջորդ վճարումները՝
                  Բանկի սակագներով սահմանված պարբերականությամբ՝ կանխավճարային
                  կարգով: Վճարային Քարտի գործողությունը վաղաժամկետ դադարելու
                  դեպքում գանձված սպասարկման վճարը չի վերադարձվում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Վճարային Քարտի սպասարկման միջնորդավճարի գծով չմարված
                  պարտավորության դեպքում մինչև Հաճախորդի կողմից պարտավորության
                  լրիվ մարումը Բանկի կողմից Վճարային քարտը բլոկավորվում է:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Վճարային Քարտով գործարքների իրականացման, ինչպես նաև Բանկի
                  կողմից Վճարային Քարտի սպասարկման հետ կապված վճարների գանձման
                  արդյունքում քարտի վճարային սահմանաչափը գերազանցելու դեպքում
                  Քարտային հաշվին ձևավորվում է Գերածախս: Բանկի սակագներով կարող
                  է սահմանվել Գերածախսի գծով տուժանք: Բանկին վճարման ենթակա
                  Գերածախսի գումարները Քարտապանը պարտավոր է մարել անմիջապես:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Բանկի սակագներով Վճարային Քարտի համար սահմանված
                  միջնորդավճարները և Վճարային Քարտի սպասարկման հետ կապված այլ
                  վճարները՝ ներառյալ Քարտային հաշվին ձևավորված Գերածախսը,
                  պարտավորությունները կազմող գումարները Բանկի կողմից գանձվում են
                  անակցեպտ եղանակով՝ առանց Քարտապանի հանձնարարականի: Գանձումն
                  առաջնահերթ կատարվում է Քարտային հաշվից, իսկ Քարտային հաշվին
                  միջոցների բացակայության դեպքում, Քարտապանի՝ Բանկում ունեցած
                  այլ հաշիվներից: Ընդ որում, Քարտապանը պարտավոր է ապահովել
                  համապատասխան դրամական միջոցների առկայությունը իր բանկային
                  հաշիվ(ներ)ին:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  Չեղարկված գործարքի գումարը առևտրի/սպասարկման կետի կողմից
                  վերադարձվելուց հետո Բանկը մուտքագրում է Քարտային հաշվին՝
                  նվազեցնելով չեղարկման համար պահումները (առկայության դեպքում):
                  Անկախ չեղարկված գործարքի գումարի վերադարձման հանգամանքից և
                  ժամկետից՝ Քարտապանը պետք է Բանկին վճարի կատարված գործարքի
                  արդյունքում Բանկի նկատմամբ ձևավորված պարտավորությունները:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">7.</span>
                  Բանկը պատասխանատվություն չի կրում առևտրի/սպասարկման կետի
                  կողմից մատուցված որևէ ծառայության դիմաց գանձված և Քարտապանի
                  Քարտային հաշվից ելքագրված վճարի համար:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 3: Վճարային քարտի անվտանգ օգտագործման կանոններ */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 3 ? null : 3)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Վճարային քարտի անվտանգ օգտագործման կանոններ
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 3 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 3
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Նախքան Վճարային Քարտն օգտագործելը Քարտապանը պարտավոր է ստուգել
                  տվյալ քարտը սպասարկող սարքի կամ սարքավորման միջոցով Վճարային
                  Քարտով իրականացվող գործարքների տեսակները (կանխիկի տրամադրում,
                  կանխիկի մուտքագրում, վճարումներ և այլն), ինչպես նաև Վճարային
                  Քարտը սպասարկող վճարահաշվարկային համակարգերով (ArCa,
                  MasteCard, VISA և այլն) սպասարկելու հնարավորությունը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Վճարային Քարտի, PIN ծածկագրի, CVV/CVC կոդի և Բանկի կողմից
                  տրամադրված գաղտնաբառի օգտագործման հետ կապված ամբողջ ռիսկը
                  կրում է Քարտապանը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  PIN ծածկագիրը Քարտապանը պետք է պահպանի գաղտնի և այն հասանելի
                  չդարձնի այլ անձանց: Բանկը պատասխանատվություն չի կրում
                  Քարտապանի կողմից իր PIN ծածկագիրը երրորդ անձանց հասանելի
                  դառնալու հետևանքով Վճարային Քարտի ոչ օրինական և Քարտապանի
                  կողմից չարտոնված օգտագործման համար:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Քարտապանը կարող է իր հայեցողությամբ փոխել PIN ծածկագիրը`
                  համապատասխան հնարավորությամբ բանկոմատի միջոցով: PIN ծածկագրի
                  փոփոխման համար անհրաժեշտ է մուտքագրել գործող PIN ծածկագիրը և
                  նոր PIN ծածկագիրը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Քարտապանն իրավունք չունի փոխանցել Վճարային Քարտը, հայտնել PIN
                  ծածկագիրը, CVV/CVC կոդը, գաղտնաբառը այլ անձանց: Քարտապանը
                  պարտավոր է ձեռնարկել միջոցներ, որպեսզի Վճարային Քարտը,
                  PIN-կոդը, CVV/CVC կոդը, գաղտնաբառը, քարտի վրա նշված
                  տեղեկատվությունը տեսանելի կամ այլ կերպ հասանելի չլինեն այլ
                  անձանց:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  Արգելվում է գրել PIN ծածկագիրը Վճարային Քարտի վրա, ինչպես նաև
                  Վճարային Քարտը և PIN ծածկագիրը պահել միասին:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">7.</span>
                  Վճարային Քարտը օգտագործելիս PIN ծածկագիրը անհրաժեշտ է հավաքել
                  այնպես, որ տեսանելի չլինի այլ անձանց համար և չտեսագրվի որևէ
                  տեսաձայնագրող սարքի միջոցով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">8.</span>
                  Վճարային Քարտով գործարքների իրականացման ժամանակ Քարտապանը պետք
                  է մուտքագրի PIN ծածկագիրը, եթե գործարքի կատարման համար
                  օգտագործվող սարքավորման միջոցով տվյալ տեսակի քարտով գործարքի
                  իրականացման համար պահանջվում է PIN ծածկագրի մուտքագրում: PIN
                  ծածկագրի մուտքագրումն անհրաժեշտ է նաև NFC վճարումների ժամանակ`
                  առանց PIN ծածկագրի մուտքագրման շեմի գերազանցման դեպքում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">9.</span>
                  Ինտերնետ միջավայրում (վիրտուալ առևտրի կետերում) քարտով
                  գործարքների իրականացման ժամանակ PIN ծածկագրի փոխարեն կարող է
                  պահանջվել CVV/CVC կոդի մուտքագրում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">10.</span>
                  Արգելվում է ինտերնետ միջավայրում (վիրտուալ առևտրի կետերում)
                  մուտքագրել (հայտնել) PIN ծածկագիրը: PIN ծածկագիրը հայտնելու
                  դեպքում անհրաժեշտ է անմիջապես դադարեցնել գործարքը, տեղեկացնել
                  Բանկին և բլոկավորել քարտը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">11.</span>
                  Ինտերնետ միջավայրում քարտով գործարք կատարելիս Քարտապանը պետք է
                  նախապատվություն տա ապահով վճարում նախատեսող կայքերին
                  (secure-payment website): Առցանց խաղատները, բուքմեյքերական
                  գրասենյակները համարվում են առավել ռիսկային:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">12.</span>
                  Քարտապանը պետք է առավել ուշադիր լինի այն գործարքների մասով,
                  որոնք իրականացվում են ժամանցի և նմանատիպ այլ վայրերում:
                  Խորհուրդ է տրվում Վճարային Քարտը չվստահել այլ անձանց և թույլ
                  չտալ Վճարային Քարտի օգտագործումը Քարտապանի տեսադաշտից դուրս:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">13.</span>
                  Չի կարելի օգտվել այն բանկոմատներից, կանխիկացման և
                  առևտրի/սպասարկման կետերից և սարքավորումներից, որոնք Քարտապանի
                  կարծիքով վստահելի չեն կամ կասկած են առաջացնում, ինչպես նաև,
                  եթե դրանց քարտ ընթերցող սարքին, ստեղնաշարին կամ կանխիկի
                  տրամադրման պատուհանին միացված են լրացուցիչ սարքավորումներ,
                  հաղորդալարեր, կպչուն ժապավեններ և այլ կասկածելի իրեր։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">14.</span>
                  Սույն պայմաններով սահմանված կանոնների և պահանջների խախտումով
                  Վճարային Քարտով կատարված գործարքների, ինչպես նաև քարտի,
                  PIN-ծածկագրի, գաղտնաբառի, Վճարային քարտի վրա նշված
                  տեղեկատվության (Վճարային քարտի համար, CVV/CVC կոդ, վավերության
                  ժամկետ), OTP գաղտնաբառի օգտագործման, երրորդ անձանց տրամադրման
                  կամ հայտնի դառնալու հետևանքով Քարտապանի կրած վնասների համար
                  Բանկը որևէ պատասխանատվություն չի կրում:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 4: Վճարային քարտով գործարքների արժույթ և փոխարկում */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 4 ? null : 4)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Վճարային քարտով գործարքների արժույթ և փոխարկում
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 4 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 4
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Վճարային Քարտով գործարքները հնարավոր է իրականացնել ինչպես
                  Քարտային հաշվի արժույթով, այնպես էլ Քարտային հաշվի արժույթից
                  տարբերվող արժույթով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Հաշվի արժույթով կատարված գործարքի դեպքում գործարքի գումարը
                  Քարտային հաշվից գանձվում առանց փոխարկման՝ նույն արժույթով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Եթե Քարտով կատարված գործարքի արժույթը տարբեր է Քարտային հաշվի
                  արժույթից, ապա գործարքի ձևակերպման ժամանակ գործարքի գումարը
                  փոխարկվում է Քարտային հաշվի արժույթի:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  ԱրՔա պրոցեսինգային կենտրոնի շրջանակներում, եթե քարտով
                  կատարվում է գործարք, որի արժույթը տարբերվում է քարտային հաշվի
                  արժույթից, ապա այդ գործարքի փոխարկումն իրականացվում է հետևյալ
                  կարգով՝ Գործարքի կատարման պահին (օնլայն գործարքի պահին)
                  փոխարկման համար հիմք է հանդիսանում ՀՀ Կենտրոնական բանկի կողմից
                  հրապարակված արժութային շուկայում ձևավորված գործարքի գումարի
                  առքի կամ վաճառքի փոխարժեքը՝ նվազեցվելով կամ ավելացվելով ԱրՔա
                  պրոցեսինգային կենտրոնի կողմից տվյալ արժույթի համար սահմանված
                  տոկոսային շեղումը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Գործարքի հաշվեգրման պահին (հետագա փաստացի գանձման ժամանակ).
                  Կատարվում է գործարքի վերահաշվարկ՝ հաշվի առնելով հաշվեգրման
                  օրվան նախորդող աշխատանքային օրվա դրությամբ Բանկի կողմից
                  սահմանված առքի կամ վաճառքի վերջին փոխարժեքները, որոնք
                  կիրառվում են Բանկի կողմից քարտային գործարքների համար։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  ԱրՔա պրոցեսինգային կենտրոնի շրջանակներից դուրս՝ Visa,
                  Mastercard և UnionPay վճարային համակարգերում իրականացված
                  գործարքների դեպքում արժույթի փոխարկումները կատարվում են
                  հետևյալ հաջորդականությամբ․ Հավաստագրում — Քարտային հաշվի
                  արժույթից տարբերվող արժույթով կատարված գործարքի գումարը
                  փոխարկվում է Քարտի արժույթով՝ հիմք ընդունելով ՀՀ Կենտրոնական
                  բանկի կողմից գործարքի օրվա դրությամբ սահմանված փոխարժեքները՝
                  նվազեցվելով կամ ավելացվելով ԱրՔա պրոցեսինգային կենտրոնի կողմից
                  տվյալ արժույթի համար սահմանված տոկոսային շեղումը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">7.</span>
                  Հաշվանցում — Այն դեպքերում, երբ միջազգային վճարահաշվարկային
                  համակարգերի միջոցով կատարված գործարքի արժույթը տարբերվում է
                  ԱՄՆ դոլարից (Visa համակարգի դեպքում՝ նաև եվրոյից), գործարքի
                  հաշվանցման ժամանակ իրականացվում է հետևյալ փոխարկումը․ Գործարքի
                  գումարը նախ վերահաշվարկվում է ԱՄՆ դոլարի՝ տվյալ
                  վճարահաշվարկային համակարգի (Visa, Mastercard, UnionPay և այլն)
                  կողմից գործարքի օրվա դրությամբ սահմանված փոխարժեքով։ Արժույթի
                  փոխարկման արդյունքում՝ գործարքի գումարը ԱՄՆ դոլարի փոխարկելու
                  համար գանձվում է միջնորդավճար, որը կազմում է գործարքի գումարի
                  2 (երկու) տոկոսի չափով։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">8.</span>
                  Քարտային հաշվից ելքագրում — Վճարային համակարգերից ստացված
                  գործարքի գումարը, որն արտահայտված է ԱՄՆ դոլարով (Visa
                  համակարգի դեպքում՝ նաև եվրոյով), փոխարկվում է Քարտային հաշվի
                  արժույթով և ելքագրվում է Քարտային հաշվից՝ հաշվի առնելով
                  գործարքի հաշվեգրման օրվան նախորդող աշխատանքային օրվա դրությամբ
                  Բանկի կողմից քարտային գործարքների համար սահմանված առքի կամ
                  վաճառքի վերջին փոխարժեքները:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">9.</span>
                  Գործարքների հաշվանցման ընթացքում իրականացված արժութային
                  փոխարկումների արդյունքում առաջացած փոխարժեքների
                  տարբերություններից պատճառված հնարավոր վնասների համար Բանկը
                  պատասխանատվություն չի կրում։
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 5: Վճարային քարտի առգրավում բանկոմատի կողմից */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 5 ? null : 5)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Վճարային քարտի առգրավում բանկոմատի կողմից
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 5 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 5
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Քարտապանի կողմից Վճարային Քարտը սխալ օգտագործելու դեպքում
                  (օրինակ` 3 անգամ սխալ PIN ծածկագիրը հավաքելու կամ Քարտը
                  Բանկոմատում մոռանալու և այլ դեպքերում) այն կարող է առգրավվել
                  բանկոմատի կողմից:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Եթե Բանկոմատի միջոցով քարտով գործարք կատարելիս Վճարային Քարտը
                  Բանկոմատում առգրավվել է, և Վճարային Քարտի առգրավման պատճառի
                  մասին որևէ հաղորդագրություն չի արտացոլվում էկրանին կամ
                  անդորրագրի վրա, Քարտապանը պետք է անմիջապես զանգահարի Բանկ և
                  համոզվի, որ քարտը բլոկավորվել է։ Եթե քարտը չի բլոկավորվել,
                  անհրաժեշտ է անհապաղ բլոկավորել այն։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Վճարային քարտը Բանկոմատի կողմից առգրավվելու դեպքում անհրաժեշտ
                  է դիմել Բանկ SMS հաղորդագրություն ստանալուց հետո:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Առգրավված Վճարային Քարտը բլոկավորված չլինելու դեպքում,
                  Քարտապանը մոտենում է Բանկ և ներկայացնելով անձը հաստատող
                  փաստաթուղթ (անձնագիր կամ նույնականացման քարտ)` ստանում է
                  Վճարային Քարտը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Վճարային Քարտը բլոկավորված լինելու դեպքում, Քարտապանը
                  ներկայացնում է ապաբլոկավորման դիմում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  Բանկը բռնագանձում է Վճարային Քարտը, եթե հայտնաբերի Վճարային
                  Քարտի գողացած լինելու, Քարտապանի կողմից այն անօրինական
                  օգտագործելու փաստը կամ Քարտապանի կողմից Քարտային պայմանագրի
                  դրույթների և այլ օրինական պահանջների խախտման դեպքում:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 6: Վճարային քարտի բլոկավորում և կորուստ */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 6 ? null : 6)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Վճարային քարտի բլոկավորում և կորուստ
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 6 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 6
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Քարտապանը կարող է բլոկավորել իր Վճարային Քարտը՝ Վճարային Քարտը
                  գողանալու, կորստի, վնասվելու և այլ դեպքերում, այցելելով Բանկ
                  կամ զանգահարելով Բանկի (+374 10) 605555 կամ «Արմենիան Քարդ»
                  պրոցեսինգային կենտրոնի (+374 10) 592222 հեռախոսահամարներով`
                  հայտնելով Վճարային Քարտի ստացման հայտ-պայմանագրի/դիմումի մեջ
                  իր կողմից նշված գաղտնաբառը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Քարտապանը կարող է բլոկավորել կամ ապաբլոկավորել իր Վճարային
                  Քարտը «EvocaTouch» հավելվածի միջոցով` ներկայացնելով
                  համապատասխան հայտ:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Բանկը պատասխանատվություն չի կրում Քարտապանին հասցրած այն վնասի
                  համար, որը կատարվել է քարտը կորցնելու և այդ մասին Բանկին
                  հայտնելու միջև ընկած ժամանակահատվածում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Վճարային Քարտի կորստի, գողության, զեղծարարության (կամ կասկածի)
                  մասին Բանկին տեղեկացնելուց հետո քարտով իրականացված՝
                  հավաստագրում չպահանջող գործարքների, այդ թվում՝ ինտերնետ
                  միջավայրում կատարված գործարքների համար պատասխանատվությունը
                  կրում է Քարտապանը: Առանց հավաստագրման կատարված գործարքների
                  բողոքարկումը հնարավոր դարձնելու համար Քարտապանի համապատասխան
                  դիմումի հիման վրա Բանկը տվյալ վճարահաշվարկային համակարգի
                  կանոններով սահմանված ժամկետում քարտը ներառում է առաջիկա
                  Stop-ցուցակում՝ համաձայն Բանկի սակագների:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Քարտապանը պարտավոր է հատուցել Վճարային Քարտի կորստի,
                  գողության, զեղծարարության (կամ կասկածի) մասին Բանկին
                  չտեղեկացնելու, ինչպես նաև մինչև Բանկին տեղեկացնելը երրորդ
                  անձանց կողմից քարտի օգտագործման հետևանքով Բանկի կրած ծախսերը,
                  կորուստները և վնասները:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  Վճարային Քարտի կորստի, գողության, զեղծարարության (կամ կասկածի)
                  դեպքում խորհուրդ է տրվում վերաթողարկել քարտը: Եթե Քարտապանը
                  ցանկանում է շարունակել օգտագործել նման քարտը, ապա պետք է Բանկ
                  ներկայացնի քարտի ապաբլոկավորման դիմում: Այս դեպքում քարտի
                  օգտագործման հետ կապված հնարավոր կորուստների և վնասների համար
                  պատասխանատվությունը կրում է Քարտապանը:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 7: Վճարային քարտի վերաթողարկում */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 7 ? null : 7)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Վճարային քարտի վերաթողարկում
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 7 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 7
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Վճարային քարտի օգտագործման ժամկետը լրանալուց առաջ քարտապանը
                  դիմումի համաձայն կարող է վերաթողարկել այն:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Վճարային քարտի ժամկետի ավարտից հետո այն չի վերաթողարկվում, եթե
                  քարտի գործողության ժամկետի լրացմանը նախորդող 10 (տաս) օրվա
                  ընթացքում քարտապանը չի տեղեկացրել իր վճարային քարտը
                  վերաթողարկելու ցանկության մասին:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Վերաթողարկված քարտը քարտապանին է տրամադրվում ոչ ուշ, քան հին
                  քարտի ժամկետի ավարտից 5 (հինգ) աշխատանքային օրվա ընթացքում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Վերաթողարկում իրականացվում է նաև վճարային քարտի կամ PIN
                  ծածկագրի կորստի, վնասվելու և քարտապանի ցանկությամբ այլ
                  դեպքերում՝ համաձայն դիմումի:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 8: Քարտային գործարքների բողոքարկում */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 8 ? null : 8)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Քարտային գործարքների բողոքարկում
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 8 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 8
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Վճարային Քարտով կամ դրա ռեկվիզիտների կիրառմամբ ցանկացած
                  գործարքի կատարման և գործարքի հետ կապված խնդիրների (վճարային
                  քարտի չվերադարձ, թղթադրամի չտրամադրում և այլն) առաջացման
                  դեպքում Քարտապանը կարող է բողոքարկել` համաձայն դիմումի:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Քարտապանը Բանկին քարտային գործառնության վերաբերյալ իր բողոքը
                  կարող է ներկայացնել Վճարային Քարտի քաղվածքը ստանալուց հետո, 30
                  օրվա ընթացքում՝ ներկայացնելով քարտով կատարված գործարքները
                  հիմնավորող փաստաթղթեր: Նշված ժամկետում գործարքի/ների դիմաց
                  բողոքարկում չստանալու դեպքում այդ գործարքը/ները համարվում են
                  Քարտապանի կողմից ընդունված և այլևս բողոքարկման ենթակա չեն:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Ներկայացված դիմումը Բանկի կողմից ուսումնասիրվում է
                  առավելագույնը 5 (հինգ) աշխատանքային օրվա ընթացքում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Դիմումի հիման վրա Բանկը իրականացնում է հետգանձման գործընթաց,
                  որի արդյունքում բավարարում է Քարտապանի բողոքարկման դիմումը,
                  եթե այն արդարացի է: Բանկը այլ բանկից հատուցում ստանալուց հետո՝
                  առավելագույնը 4 (չորս) աշխատանքային օրվա ընթացքում
                  իրականացնում է Քարտապանի հաշվի մնացորդի վերականգնում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Եթե Քարտապանը համաձայն չէ Բանկի կայացրած որոշման հետ, ապա
                  գործընթացն իրականացվում է համաձայն Բանկում գործող
                  «Հաճախորդների կողմից ներկայացված բողոքների կառավարման» կարգի
                  պահանջների:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  Քարտապանի կողմից Բանկին անհիմն Գործարքի բողոքարկման դիմումների
                  ներկայացման համար Բանկի սակագներով կարող են սահմանվել
                  տուգանքներ:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 9: Տեղեկատվության տրամադրում և SMS/USSD ծառայություններ */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 9 ? null : 9)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Տեղեկատվության տրամադրում և SMS/USSD ծառայություններ
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 9 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 9
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Քարտապանին տեղեկատվություն տրամադրվում է հեռախոսազանգերի
                  միջոցով (նախապես Գաղտնաբառի միջոցով նույնականացնելով նրան),
                  ինչպես նաև Քարտային հաշվի քաղվածքի միջոցով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Վճարային Քարտով իրականացվող գործառնությունների վերաբերյալ
                  Քարտային հաշվի քաղվածքը Բանկը տրամադրում է Քարտապանի կողմից
                  նախընտրելի եղանակով (էլեկտրոնային փոստով, նշված հասցեով կամ
                  Բանկի տարածքում առձեռն), նվազագույնը մեկամսյա
                  պարբերականությամբ:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Քարտային հաշվի քաղվածքը չի ներառում հավաստագրված կամ
                  չհավաստագրված դեռևս Բանկի կողմից չհաշվանցված գործարքը:
                  Արդյունքում հնարավոր է տարբերություն իրական մնացորդի և
                  քաղվածքում ներկայացված մնացորդի միջև:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Քարտապանի ցանկության դեպքում Քարտային հաշվի մնացորդի
                  վերաբերյալ կարող է տրամադրվել տեղեկանք: Տեղեկանքը տրամադրվում
                  է հայտի ներկայացման նույն օրը, սակայն տեղեկանքում նշվում է
                  հայտի ներկայացմանը նախորդող գործառնական օրվա ավարտի դրությամբ
                  հաշվի մնացորդը: Եթե Քարտապանը ցանկանում է ստանալ Քարտային
                  հաշվի մնացորդի վերաբերյալ տեղեկանք հայտի ներկայացման օրվա
                  դրությամբ, ապա տեղեկանքը տրամադրվում է հայտի ներկայացման
                  հաջորդ օրը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Քարտապանի կողմից Վճարային քարտի պատվիրման Հայտ-պայմանագրով SMS
                  տեղեկացումների վերաբերյալ նշում չկատարելը Բանկի կողմից
                  դիտարկվում է որպես դրանց ստացման համար տրված համաձայնություն:
                  Քարտապանն իրավունք ունի հրաժարվել SMS տեղեկացումների
                  ծառայությունից համաձայն դիմումի: SMS տեղեկացման ծառայությունը
                  թույլ է տալիս Քարտապանին ցանկացած հավաստագրման մասին ստանալ
                  SMS հաղորդագրություն: Հաշվի առնելով այն, որ Վճարային քարտերով
                  գործառնությունների մեծամասնությունն իրականացվում է
                  հավաստագրում ստանալուց հետո, Քարտապանը հնարավորություն ունի
                  արդյունավետ կերպով և ժամանակի իրական ռեժիմում տեղեկանալ
                  ցանկացած հավաստագրվող գործարքի իրականացման մասին:
                  Ծառայությունը հատկապես կարևոր է Վճարային Քարտի զեղծարար
                  օգտագործումը կանխելու համար: Քարտային հաշվով
                  գործառնությունների վերաբերյալ SMS տեղեկացման ծառայությունը
                  թույլ է տալիս նաև վերահսկել անմիջապես Քարտապանի Քարտային
                  հաշիվը: Ծառայության միջոցով Քարտապանը կարող է տեղեկանալ
                  Քարտային հաշվի մնացորդի, Քարտային հաշվի ելքերի և մուտքերի
                  մասին: SMS տեղեկացման ծառայության ակտիվացման դեպքում գործում է
                  ինտերնետի միջոցով գործարքներ կատարելու առավել անվտանգ՝ 3D
                  Secure համակարգը: Այն նվազեցնում է online վճարումների
                  կայքերում քարտով զեղծարարություններ կատարելու ռիսկերը:
                  Քարտապանը համաձայն դիմումի կարող է ակտիվացնել
                  USSD-ծառայությունը, որը հնարավորություն է տալիս Քարտապանին`
                  iOS կամ Android օպերացիոն համակարգով գործող սմարթֆոնի միջոցով
                  իրականացնել մնացորդի հարցում, մինի-քաղվածքի հարցում (մինչև 4-5
                  վերջին գործարքներ), քարտի բլոկավորում (Lost Card կարգավիճակ):
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 10: Վճարային քարտի փակում */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 10 ? null : 10)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Վճարային քարտի փակում
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 10 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 10
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Վճարային Քարտի փակումն իրականացվում է, եթե Քարտապանը ցանկանում
                  է Վճարային Քարտի գործողության ժամկետը լրանալուց շուտ փակել իր
                  Վճարային Քարտը՝ համաձայն դիմումի կամ Վճարային Քարտի ժամկետի
                  ավարտի (եթե Քարտապանը չի ցանկանում այն երկարաձգել կամ Վճարային
                  Քարտը վերաթողարկել) և սույն պայմանների 6.8.2 կետի երկրորդ
                  պարբերությամբ սահմանված դեպքում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Առանձին դեպքերում Վճարային քարտի փակման համար կարող է
                  սահմանվել սակագին համաձայն Բանկի սակագների և դրույքների:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Պայմանագրի դադարեցման դեպքում հաճախորդը պարտավորություն է
                  կրում նաև այն գործարքների հետևանքով պարտավորությունների
                  առաջացման դեպքում վճարման համար, որոնք կատարվել են նախքան
                  Պայմանագրի դադարեցումը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Վճարային քարտը հանդիսանում է Բանկի սեփականությունը: Վճարային
                  քարտի փակման դեպքում Քարտապանը պարտավոր է վերադարձնել այն
                  Բանկ:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 11: Հարկային համապատասխանություն (FATCA) */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 11 ? null : 11)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Հարկային համապատասխանություն (FATCA)
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 11 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 11
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Հարգելի Հաճախորդ, «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ն Հայաստանի Հանրապետության և
                  Ամերիկայի Միացյալ Նահանգների միջև «Օտարերկրյա հաշիվների
                  հարկային համապատասխանության ակտի» կիրարկմանն օժանդակելու
                  համագործակցության մասին համաձայնագրի պահանջներից ելնելով
                  իրավասու է հաճախորդներից պահանջել լրացուցիչ տեղեկատվություն,
                  մասնավորապես հաճախորդներից պահանջվում է լրացնել վերջիններիս
                  ԱՄՆ անձ կարգավիճակի նույնականացման համար պահանջվող հետևյալ
                  ձևաթղթերը՝ Իրավաբանական անձ հաճախորդների ինքնահայտարարագրման
                  ձև` Մոդել 2-ի համաձայն (FATCA) կամ Ֆիզիկական անձ (ներառյալ
                  անհատ ձեռնարկատեր) հաճախորդների ինքնահայտարարագրման ձև FATCA
                  նպատակների համար:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 12: Բանկի մոնիտորինգ և պատասխանատվության սահմանափակումներ */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 12 ? null : 12)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Բանկի մոնիտորինգ և պատասխանատվության սահմանափակումներ
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 12 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 12
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Բանկն իրավունք ունի հնարավոր զեղծարարությունների բացահայտման
                  համար իրականացնել Քարտապանի քարտային գործարքների մոնիտորինգ։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Բանկն իրավունք ունի հնարավոր զեղծարարությունների կանխարգելման
                  նպատակով լրացուցիչ տեղեկատվություն կամ հավաստիացում ստանալու
                  նպատակով իրականացնել հեռախոսազանգեր Քարտապանին։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Բանկը պատասխանատվություն չի կրում՝ Հաճախորդի անհասանելիության
                  կամ հաճախորդի կողմից տեղեկատվություն չտրամադրելու հետևանքով
                  վերջինիս կրած վնասների համար։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Երրորդ անձանց կողմից մատուցվող և շահագործվող կապուղիների կամ
                  ցանցերի, էլեկտրամատակարարման համակարգերի կամ սարքավորումների
                  խափանումների հետևանքով Քարտապանի կրած վնասների համար:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Առևտրային կետերի կողմից առանց PIN-ծածկագրի մուտքագրման
                  գործարքների մերժման հետևանքով Քարտապանի կրած վնասների համար:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  Առևտրային կամ սպասարկման կետերի կողմից քարտով իրականացվող
                  գործարքի իրավաչափության ստուգման նպատակով կատարված
                  գործողությունների հետևանքով Քարտապանի կրած վնասների համար:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">7.</span>
                  Քարտով իրականացված գործարքների գծով երրորդ անձանց կողմից
                  կիրառված միջնորդավճարների համար:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">8.</span>
                  Առևտրային և սպասարկման կետերի կողմից գործարքների գծով
                  սահմանված լրացուցիչ անվտանգային սահմանաչափերի կիրառման
                  հետևանքով Քարտապանի կրած վնասների համար:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">9.</span>
                  NFC հնարավորությամբ քարտերի կիրառման հետևանքով քարտի տվյալները
                  երրորդ անձանց հայտնի դառնալու հետևանքով Քարտապանի կրած
                  կորուստների համար:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 13: Մոբայլ (NFC) վճարումներ */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden mb-6">
          <div
            onClick={() => setOpenSection(openSection === 13 ? null : 13)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Մոբայլ (NFC) վճարումներ
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 13 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 13
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Մոբայլ (NFC) վճարումները Բանկի բջջային հավելվածի (այսուհետ`
                  Հավելված) կամ մոբայլ սարքի վրա տեղադրված այլ ընկերության
                  կողմից տրամադրվող համակարգի (այսուհետ` Համակարգ, օրինակ` Apple
                  Pay, Google Pay) միջոցով անհպում վճարումներ են, որոնց
                  իրականացման համար անհրաժեշտ է Հավելվածում կամ Համակարգում կցել
                  քարտը` ստեղծելով քարտի թոքենացված համարժեքը (այսուհետ`
                  թոքենացված քարտ):
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Հաճախորդը միևնույն քարտը կարող է թոքենացնել տարբեր մոբայլ
                  սարքերի վրա տեղադրված Հավելվածներում (ստեղծելով մեկից ավելի
                  թոքեն) կամ Համակարգերում` նույն քարտի համար ստեղծելով
                  առավելագույնը 10 թոքեն:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Հավելվածում քարտի թոքենացումը հնարավոր է բացառապես այն
                  դեպքում, եթե մոբայլ սարքն ունի ապաբլոկավորման ակտիվացված
                  պաշտպանիչ որևէ հնարավորություն (մատնահետք, դեմքով
                  նույնականացում, PIN կամ այլ):
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Համակարգը գործում է IOS օգտատերերի` IOS13 և բարձր օպերացիոն
                  համակարգերով մոբայլ սարքերի համար, և Android օգտատերերի` 10.2
                  և բարձր օպերացիոն համակարգերով մոբայլ սարքերի համար, որոնք
                  ունեն NFC տեխնոլոգիայի կիրառման հնարավորություն:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Քարտի թոքենացման գործընթացում հաճախորդի քարտի տվյալների
                  անվտանգությունը երաշխավորված է` համապատասխան վճարային
                  համակարգի կողմից սահմանված կանոնների համաձայն։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">6.</span>
                  Հնարավոր է թոքենիզացնել Բանկի կողմից թողարկված Visa տեսակի
                  բոլոր քարտերը, ինչպես նաև Mastercard տեսակի քարտերը`
                  բացառությամբ Cirrus Maestro տեսակի։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">7.</span>
                  Մոբայլ (NFC) վճարումները կարող են իրականացվել աշխարհի բոլոր
                  առևտրի կետերում, որտեղ սպասարկվում են համապատասխան վճարային
                  համակարգի քարտեր և որտեղ տեղադրված են անհպում սպասարկող POS
                  տերմինալներ:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">8.</span>
                  Մոբայլ (NFC) վճարում կատարելու համար անհրաժեշտ է ապաբլոկավորել
                  հեռախոսը` օգտագործելով հեռախոսի ապաբլոկավորման պաշտպանիչ
                  մեթոդը (մատնահետք, դեմքով նույնականացում, PIN կամ այլ) և
                  սմարթֆոնը մոտեցնել POS տերմինալին:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">9.</span>
                  Թոքենացված քարտով կատարված գործարքները հավասարազոր են
                  ֆիզիկապես քարտով կատարված գործարքներին, և Քարտապանը իր կողմից
                  թոքենացված քարտով կատարված վճարումների համար կրում է սույն
                  Պայմաններով սահմանված նույն պատասխանատվությունը, ինչը գործում
                  է ֆիզիկապես քարտով կատարված գործարքների համար։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">10.</span>
                  Մինչև քարտի թոքենացումը Հավելվածում կամ Համակարգում Քարտապանը
                  պարտավոր է համոզվել, որ մոբայլ սարքում կամ Հավելվածում
                  գրանցված են միայն իր նույնականացման տվյալները (մատնահետք,
                  դեմքով նույնականացում, PIN կամ այլ), քանի որ միայն վերջիններս
                  են հաշվի առնվելու թոքենացված քարտով կատարվող գործարքների
                  հաստատման համար:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">11.</span>
                  Հավելվածը գործում է նաև առանց ինտերնետի հասանելիության`
                  պայմանով, որ կատարված է թոքենացված քարտի բանալիների
                  փոխանակում: Ինտերնետի հասանելիության առկայության յուրաքանչյուր
                  27-րդ (քսանյոթերորդ) օրը ինքնաշխատ կերպով կատարվում է
                  թոքենացված քարտի բանալիների փոխանակում (թոքենների համարների
                  վերալիցքավորում): Ուստի թոքենացված քարտով վճարումներ
                  իրականացնելու համար անհրաժեշտ է առնվազն 27 (քսանյոթ) օրը մեկ
                  ունենալ ինտերնետին հասանելիություն:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">12.</span>
                  Թոքենացված քարտով կատարված գործարքների բողոքարկման կարգը
                  նույնն է, ինչ սույն պայմաններով սահմանված` ֆիզիկական քարտով
                  կատարված գործարքների դեպքում։
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">13.</span>
                  Թոքենիզացված քարտերի տվյալներով սարքը կորցնելու,
                  նույնականացման (աուտենտիֆիկացման) կամ թոքենացված քարտի
                  տվյալները գողանալու կամ այլ անձանց հասանելի դառնալու դեպքում
                  թոքենացված քարտի բլոկավորման նպատակով անհրաժեշտ է անհապաղ կապ
                  հաստատել Բանկի հետ։ Ընդ որում, նշված պահանջը չկատարելու
                  դեպքում թոքենացված քարտերով կատարված գործարքների համար Բանկը
                  որևէ պատասխանատվություն չի կրում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">14.</span>
                  Եթե ֆիզիկական քարտը բլոկավորված է Բանկի կողմից, ապա այդ քարտի
                  թոքենացված քարտով գործարք հնարավոր չէ իրականացնել: Այն
                  դեպքերում, երբ քարտը բլոկավորվում է քարտապանի կողմից, տվյալ
                  քարտի թոքենիզացված քարտով գործարքների իրականացումը հնարավոր է:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">15.</span>
                  Քարտապանի կողմից թոքենացված քարտի բլոկավորման դեպքում
                  ֆիզիկական քարտը չի բլոկավորվում:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">16.</span>
                  Սույն պայմանների թոքենացված քարտին վերաբերող դրույթները
                  կիրառվում են միայն Քարտապանի կողմից քարտի թոքենացման և
                  թոքենացված քարտի կիրառման առումով: Մոբայլ սարքի և Համակարգի
                  մատակարարը, բջջային օպերատորը և Համակարգին միացված այլ կայքերը
                  և ծառայություն մատուցող երրորդ անձինք ունեն իրենց սեփական
                  պայմանագրերը և պայմանները, որոնց Քարտապանը պետք է հետևի և
                  միայն այդ պայմանների և պայմանագրերով սահմանված կարգավորումների
                  ընդունելի լինելու պարագայում այդ անձանց տրամադրի անձնական
                  տվյալներ, օգտվի դրանց ծառայություններից կամ այցելի
                  համապատասխան կայքեր:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">17.</span>
                  Քարտապանը պարտավոր է մինչև Համակարգում քարտի թոքենացումը
                  ծանոթանալ ներգրավված երրորդ անձանց հետ պայմանագրերի
                  պայմաններին:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ԲԼՈԿ 14: Քարտային անվտանգության լրացուցիչ խորհուրդներ */}
        <div className="bg-white border-2 border-[#6500D8] rounded-2xl shadow-md overflow-hidden">
          <div
            onClick={() => setOpenSection(openSection === 14 ? null : 14)}
            className="flex justify-between items-center p-6 bg-white cursor-pointer select-none transition-colors hover:bg-slate-50"
          >
            <span className="text-lg font-semibold text-[#1A1F36]">
              Քարտային անվտանգության լրացուցիչ խորհուրդներ
            </span>
            <span
              className={`text-[#6500D8] text-xl font-bold transition-transform duration-300 ${
                openSection === 14 ? "rotate-180" : ""
              }`}
            >
              ▲
            </span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openSection === 14
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 pt-2 text-[#4A5568] text-[15px] leading-relaxed space-y-4 border-t border-slate-100">
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">1.</span>
                  Մի՛ տեղադրեք Ձեր քարտի տվյալները կասկածելի կայքերում:
                  Սոցիալական ցանցերում հղումները ավտոմատ տանում են մի տեղ, որտեղ
                  մեկ հպումով/քլիկով կարող եք նրանց տրամադրել Ձեր անձնական ողջ
                  տեղեկատվությունը: Օգտվե՛ք այնպիսի կայքերից, որոնք սկսվում են
                  https:// գրառումով, քանզի վերջին s տառը կայքի ապահովության
                  երաշխիքն է (secure): Ստուգե՛ք, ապա նոր վստահեք:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">2.</span>
                  Մի՛ տրամադրեք այլ անձանց Ձեր անձնական (անուն, ազգանուն,
                  ծննդյան օր, ամսաթիվ և/կամ հասցե) կամ քարտի, (այդ թվում՝
                  PIN-կոդը) տվյալները: Եթե ​​Ձեզ զանգահարող անձը ներկայանում է
                  որպես բանկի աշխատող, ապա նրա հետ ստուգե՛ք Ձեր հաշվի վերաբերյալ
                  տեղեկությունները:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">3.</span>
                  Երբեք մի՛ պատասխանեք կասկածելի sms հաղորդագրություններին:
                  Ստուգե՛ք հեռախոսահամարը, որից եկել է հաղորդագրությունը: Եթե
                  ​​դա Բանկից է՝ զանգահարե՛ք Բանկի շուրջօրյա գործող
                  կոմունիկացիոն կենտրոն 010-605555 հեռախոսահամարով և պարզաբանե՛ք
                  Ձեզ հուզող հարցերը:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">4.</span>
                  Խուսափե՛ք անհայտ անձանց կամ անծանոթ կազմակերպություններին
                  անձնական տվյալներ տրամադրելուց. ո՛չ հեռախոսազանգով, ո՛չ
                  նամակով կամ էլ. փոստով, ո՛չ սոցիալական ցանցերով:
                </p>
                <p>
                  <span className="font-bold text-[#6500D8] mr-2">5.</span>
                  Զերծ մնացե՛ք միջնորդ կազմակերպությունների կամ անհատների կողմից
                  մատուցվող ծառայությունների օգնությունից, մի՛ տրամադրեք Ձեր
                  անձնական տվյալները, անձը հաստատող փաստաթղթերը, մոբայլ
                  հավելվածի տվյալները երրորդ անձանց կամ կազմակերպություններին`
                  ձեր փոխարեն լրացնելու վարկային հայտեր կամ ձեռք բերելու
                  բանկային ծառայություններ` հեռահար հաղորդակցության միջոցների
                  կիրառմամբ:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Փաստաթղթեր
        </h2>
        <div className="space-y-3">
          {documentsData.map((doc) => (
            <a
              key={doc.id}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 sm:p-4 bg-purple-50/60 hover:bg-purple-100/70 active:bg-purple-200/70 rounded-xl transition-all duration-200 group shadow-sm border border-purple-100/50 gap-3"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="text-purple-700 flex-shrink-0">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15l3 3m0 0l3-3m-3 3V9"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-xs sm:text-sm md:text-base group-hover:text-purple-900 leading-snug break-words">
                  {doc.title}
                </span>
              </div>
              <div className="text-purple-700 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsProvisionAndService;
