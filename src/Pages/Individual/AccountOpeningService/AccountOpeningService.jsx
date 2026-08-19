import React, { useState } from "react";
import MobilePromo from "../HomePage/Components/MobilePromo";

const AccountOpeningService = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordionData = [
    {
      title: "Անհրաժեշտ փաստաթղթեր",
      content: (
        <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base marker:text-[#5D00E0]">
          <li>Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն:</li>
          <li>
            Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ
            միայն նույնականացման քարտ:
          </li>
          <li>Մեր պահանջով այլ փաստաթղթեր:</li>
        </ul>
      ),
    },
    {
      title: "Հաշիվ բացելու ընթացակարգ",
      content: (
        <div className="space-y-4 text-gray-700 text-sm md:text-base">
          <p>
            Ընթացիկ հաշիվ կարող եք բացել դրամով, դոլարով, եվրոյով, ռուբլով,
            կանադական դոլարով, ֆրանկով և ֆունտ ստեռլինգով (այլ արտարժույթներով
            ընթացիկ հաշիվներ կարող եք բացել միայն մեզ հետ համաձայնեցված կարգով):
          </p>
          <p>
            Նախքան հաշվի բացումը մեր աշխատակիցները ձեզ տեղեկացնում են հաշիվների
            բացման ու սպասարկման պայմանների, սակագների, պահանջվող փաստաթղթերի և
            այլ մանրամասների մասին: Եթե հաշվի բացման և վարման պայմաններն
            ընդունելի են, ապա լրացնում եք դիմում և ներկայացնում պահանջվող
            փաստաթղթերը:
          </p>
          <p>
            «Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին» ՀՀ
            օրենքի պահանջներից ելնելով` կարող ենք պահանջել լրացուցիչ փաստաթղթեր
            կամ ներկայացված փաստաթղթերը լրացուցիչ ուսումնասիրել: Ներկայացված
            փաստաթղթերի իսկությունն ու վավերականությունը ստուգելուց հետո ձեզ հետ
            կնքում ենք «Բանկային հաշվի սպասարկման պայմանագիրը» և հաշիվ բացում 1
            (մեկ) աշխատանքային օրվա ընթացքում: Կնքված պայմանագրի օրինակի հետ ձեզ
            ենք հանձնում նաև Ավանդների հատուցման երաշխավորման պայմանների և կարգի
            մասին ծանուցում:
          </p>
          <p>
            Հաշիվները կարող եք բացել ինչպես մեր գործունեության վայրում, այնպես
            էլ հեռակառավարման համակարգերի միջոցով: Հեռակառավարման համակարգերով
            հաշիվները բացում ենք մեր կայքի կամ բջջային հավելվածի միջոցով
            ներկայացված էլեկտրոնային հայտ/դիմում-ի հիման վրա, որի համար
            կիրառվում են Համալիր բանկային ծառայությունների մատուցման պայմաններով
            սահմանված՝ ձեր հավաստագրման և նույնականացման միջոցները:
          </p>
          <p>
            Հաշիվ բացելուց հետո կարող եք իրականացնել ՀՀ օրենսդրությամբ չարգելված
            ցանկացած գործառնություն:
          </p>
        </div>
      ),
    },
    {
      title: "Բանկային հաշիվների սպասարկում",
      content: (
        <div className="space-y-4 text-gray-700 text-sm md:text-base">
          <p>
            Ձեր բանկային հաշիվների սպասարկումը կարգավորվում է ՀՀ օրենսդրությամբ,
            ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, մեր և ձեր միջև կնքված
            բանկային հաշվի սպասարկման պայմանագրով: Բանկային հաշիվների
            սպասարկումն իրականացնում են մեր գլխամասային գրասենյակը և
            մասնաճյուղերը (հաճախորդների սպասարկման համապատասխան
            ստորաբաժանումների միջոցով): Հաշիվները սպասարկում ենք մեր սահմանած
            գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման: Ձեր
            հաշիվներով իրականացվող գործառնությունների դիմաց գանձում ենք
            համապատասխան միջնորդավճարներ՝ մեր Սակագների համաձայն: Բանկային
            հաշիվների վարման սպասարկումն անվճար է: Հաշվի չնվազող մնացորդի պահանջ
            սահմանված չէ:
          </p>
          <p>
            Ձեր բանկային հաշիվներով կարող եք կատարել ՀՀ օրենսդրական ակտերով
            չարգելված ցանկացած գործառնություն (կանխիկ կամ անկանխիկ)՝ մեզ
            ներկայացնելով ՀՀ իրավական նորմերին համապատասխանող փաստաթղթային
            հանձնարարական: Բանկային հաշվով կարող եք կատարել հետևյալ
            գործառնությունները՝
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#5D00E0]">
            <li>բացված հաշվին մուտքագրել դրամական միջոցներ,</li>
            <li>կատարել հաշվից փոխանցումներ,</li>
            <li>հաշվից գումարներ ստանալ,</li>
            <li>
              ընթացիկ հաշվի մնացորդը փոխարկել արտարժույթի (գործարքի կատարման
              դրությամբ մեր սահմանած` արտարժույթների առք ու վաճառքի
              փոխարժեքներով),
            </li>
            <li>ընթացիկ հաշվից մարել վարկեր:</li>
          </ul>
          <p>
            Կարող եք նաև հեռակառավարել ձեր հաշիվները՝ բանկային հաշիվների
            հեռակառավարման (online) մեր համակարգերի միջոցով:
          </p>
          <p>
            Բանկային հաշիվների բոլոր գործառնությունները (դրամական միջոցների
            շարժ, գանձված միջնորդավճարներ, ստացված եկամուտներ) արտացոլվում են
            քաղվածքներում: Մեր և ձեր միջև ձեռք բերված համաձայնության հիման վրա
            քաղվածքները կարող են տրամադրվել առձեռն, փոստային կամ էլեկտրոնային
            կապի միջոցներով: Քաղվածքների կրկնօրինակների և/կամ հաշիվների
            վերաբերյալ այլ տեղեկությունների (տեղեկանքների) տրամադրման դիմաց
            գանձում ենք միջնորդավճարներ՝ մեր սակագների համաձայն:
          </p>
          <p className="font-semibold mt-4">
            Ձեր հաշվին դրամական միջոցների մուտքագրման/ելքագրման ժամկետները՝
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#5D00E0]">
            <li>
              Ձեր օգտին ստացված դրամական միջոցները մուտքագրվում են ոչ ուշ, քան
              մուտքագրումը հաստատող փաստաթղթերի ստացման հաջորդող բանկային օրը:
              Հաշվի կանխիկ համալրման դեպքում՝ դրամական միջոցները մուտքագրվում են
              նույն բանկային օրը:
            </li>
            <li>
              Ձեր հաշվից դրամական միջոցների ելքագրումը (փոխանցումների
              իրականացումը) կատարվում է՝ ձեր կողմից մեզ ներկայացված վճարման
              հանձնարարագրերի հիմքերով, ընդ որում՝ մինչև ժամը 15:30-ը
              ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային
              օրը:
            </li>
          </ul>
          <p className="font-semibold mt-4">
            Բանկային հաշիվների սպասարկմանն առնչվող այլ պայմաններին կարող եք
            ծանոթանալ հետևյալ հղումներով՝
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#5D00E0]">
            <li>
              Ձեր հաշիվներով իրականացվող փոխանցումների և կանխիկ
              գործառնությունների պայմաններին՝ Բանկային ծառայություններ բաժնի
              Դրամական փոխանցումներ ենթաբաժնում և Սակագներ բաժնի Դրամարկղային
              գործառնություններ ենթաբաժնում:
            </li>
            <li>
              Հաճախորդների ընթացիկ հաշիվների մնացորդների դիմաց հաշվարկվող
              տոկոսադրույքներին՝ Սակագներ բաժնի Ընթացիկ հաշիվներ ենթաբաժնում:
              Նշում. մենք իրավունք ունենք փոփոխելու բանկային հաշվին եղած
              դրամական միջոցների համար վճարվող տոկոսների չափը, եթե հաշվի
              սպասարկման պայմանագրով այլ բան նախատեսված չէ:
            </li>
            <li>
              Հաճախորդի պահանջով՝ Հայաստանում կամ Հայաստանի տարածքից դուրս
              կատարված գործարքների վերաբերյալ հարցման սակագներին՝ Սակագներ բաժնի
              Բանկային փոխանցումներ ենթաբաժնում:
            </li>
          </ul>
          <p>
            Բանկի կողմից Վճարման հանձնարարականի դրոշմակնիքումը հաստատում է այն
            փաստը, որ վճարման հանձնարարականն ընդունվել է Բանկի կողմից ի
            կատարման: Այն դեպքերում, երբ ընդունված վճարման հանձնարարականի
            կատարման ժամանակ ի հայտ են գալիս ցանկացած տեսակի
            անհամապատասխանություններ, այդ թվում՝ Հաճախորդի հաշվի անբավարար
            մնացորդ, ապա Բանկն իրավունք ունի չակցեպտավորել վճարման
            հանձնարարականը և այն համարել չեղյալացված: Սույն գործողության
            արդյունքում Հաճախորդին պատճառված վնասի համար Բանկը
            պատասխանատվություն չի կրում:
          </p>
        </div>
      ),
    },
    {
      title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ",
      content: (
        <div className="space-y-4 text-gray-700 text-sm md:text-base">
          <p>
            Բանկային հաշվին առկա դրամական միջոցները տնօրինելու ձեր իրավունքները
            չենք սահմանափակում:
          </p>
          <p>
            Հաշվետիրոջ ձեր իրավունքները կարող են սահմանափակվել դատարանի վճռով,
            դատական ակտերի հարկադիր կատարումն ապահովող մարմինների կամ հարկային
            մարմինների կողմից ներկայացված հայտի հիման վրա: Առանց ձեր
            կարգադրության՝ հաշվից դրամական միջոցները կարող են բռնագանձվել
            դատարանի վճռով հարկադիր կատարումն ապահովող մարմինների և հարկային
            մարմինների ներկայացրած հայտի հիման վրա: Այս դեպքերում մենք
            պարտավորություն չենք կրում ձեր հանդեպ, ձեր հաշիվների և դրամական
            միջոցների նկատմամբ ՀՀ օրենսդրական կարգով կիրառվող իրավական
            սանկցիաների մասին տեղեկացնելու համար: Նման տեղեկատվություն կարող ենք
            տրամադրել միայն համապատասխան սանկցիաները կիրառելուց հետո՝ հեռախոսի
            կամ այլ կապի միջոցներով (էլեկտրոնային/փոստային):
          </p>
        </div>
      ),
    },
    {
      title: "Բանկային հաշվի պայմանագրի լուծման պայմաններ",
      content: (
        <p className="text-gray-700 text-sm md:text-base">
          Հաճախորդն իրավունք ունի ցանկացած ժամանակ լուծել բանկային հաշվի
          սպասարկման պայմանագիրը՝ այդ մասին գրավոր տեղեկացնելով Բանկին:
          Պայմանագիրը լուծելիս հաշվի մնացորդը վերադարձվում է հաճախորդին կամ նրա
          հանձնարարությամբ փոխանցվում այլ հաշիվ ոչ ուշ, քան պայմանագրի լուծման
          հայտը ստանալուց հետո հաջորդ աշխատանքային օրը:
        </p>
      ),
    },
    {
      title: "Երաշխավորված ավանդների սահմանաչափերը",
      content: (
        <p className="text-gray-700 text-sm md:text-base">
          Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորվում է
          Ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից: Միայն ՀՀ դրամով
          ավանդների դեպքում երաշխավորված չափը կազմում է 16 միլիոն ՀՀ դրամ, իսկ
          արտարժույթով ավանդների դեպքում՝ 7 միլիոն ՀՀ դրամ կամ համարժեք
          արտարժույթ:
        </p>
      ),
    },
    {
      title: "ՈՒՇԱԴՐՈՒԹՅՈՒՆ",
      content: (
        <p className="text-gray-700 text-sm md:text-base">
          Հարգելի հաճախորդ, տեղեկացնում ենք, որ բանկային հաշիվներում առկա
          դրամական միջոցների նկատմամբ տոկոսները հաշվարկվում են անվանական
          տոկոսադրույքի հիման վրա, իսկ տարեկան տոկոսային եկամտաբերությունը ցույց
          է տալիս, թե որքան եկամուտ կստանայիք դուք, եթե ձեր ավանդի դիմաց ստացված
          տոկոսագումարները վերաներդնեիք:
        </p>
      ),
    },
    {
      title:
        "Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում",
      content: (
        <p className="text-gray-700 text-sm md:text-base">
          FATCA-ն (Foreign Account Tax Compliance Act) ԱՄՆ օրենք է, որի նպատակն
          է կանխել ԱՄՆ հարկատուների կողմից հարկերից խուսափումը օտարերկրյա
          ֆինանսական հաստատությունների միջոցով:
        </p>
      ),
    },
  ];

  const documents = [
    {
      title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26",
      url: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf",
    },
    {
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      url: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf",
    },
    {
      title: "Բանկային հաշիվների բացման սակագներ և դրույթներ 01.07.2026թ.",
      url: "https://www.evoca.am/files/global_files/1/accounts-information-pdf.pdf",
    },
  ];

  const handleToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-16">
        {}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-24 mb-12 lg:mb-16 gap-6 lg:gap-0">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              Հաշիվների բացում և <br className="hidden xl:block" /> սպասարկում
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային
              հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների
              համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ
              ռեզիդենտ ֆիզիկական անձինք:
            </p>
          </div>
          <div className="lg:w-[55%]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg"
              alt="Հաշիվների բացում և սպասարկում"
              className="w-full h-full object-cover min-h-[300px] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-24 mb-16">
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base font-medium">
            Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են
            ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ, որը
            հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված
            այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք
            ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից
            օգտվելու հայտ/դիմում: <br className="hidden sm:block" />
            Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք
            ծանոթանալ{" "}
            <a
              href="#"
              className="text-[#5D00E0] font-bold underline hover:text-purple-800 transition-colors"
            >
              այստեղ
            </a>
            :
          </p>
        </div>
      </div>

      {}
      <div
        className="relative w-full h-[350px] sm:h-[450px] bg-cover bg-center flex items-center justify-center mb-16"
        style={{
          backgroundImage:
            "url('https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4 sm:px-8 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug drop-shadow-md">
            Հաշիվներ բացելու նպատակով կարող եք{" "}
            <br className="hidden lg:block" />
            դիմել մեր Գլխամասային գրասենյակ կամ{" "}
            <br className="hidden lg:block" />
            ցանկացած մասնաճյուղ (բացառությամբ <br className="hidden lg:block" />
            «Էրեբունի» -ի):
          </h2>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto">
        {}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-24 mb-16">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 uppercase mb-8">
            Անհրաժեշտ տեղեկատվություն
          </h3>

          <div className="flex flex-col gap-4">
            {accordionData.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-colors duration-300 ${
                    isOpen
                      ? "border-[#5D00E0] bg-white shadow-sm"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-[#5D00E0]" : "rotate-0 text-gray-400"}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                      <span
                        className={`font-bold text-sm md:text-base ${isOpen ? "text-black" : "text-gray-500"}`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 pt-0 md:p-6 md:pt-0 md:pl-[3.25rem]">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-24">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 uppercase mb-6">
            Փաստաթղթեր
          </h3>

          <div className="flex flex-col gap-4">
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-[#F8F6FD] hover:bg-[#F0ECFA] border border-transparent hover:border-[#5D00E0]/30 rounded-xl p-4 md:p-5 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  {}
                  <div className="relative text-[#5D00E0]">
                    <svg
                      width="28"
                      height="32"
                      viewBox="0 0 24 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.89543 2 4 2.89543 4 4V24C4 25.1046 4.89543 26 6 26H18C19.1046 26 20 25.1046 20 24V8L14 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 2V8H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12V19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 16L12 19L15 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900 text-sm md:text-base group-hover:text-[#5D00E0] transition-colors">
                    {doc.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <MobilePromo></MobilePromo>
    </div>
  );
};

export default AccountOpeningService;
