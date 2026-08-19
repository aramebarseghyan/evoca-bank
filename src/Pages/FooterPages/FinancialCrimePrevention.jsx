import React from "react";

const FinancialCrimePrevention = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 py-8 text-gray-800 font-sans leading-relaxed">
      {/* Banner Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f7f3fb] rounded-3xl overflow-hidden mb-10 items-center">
        <div className="p-8 sm:p-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Ֆինանսական հանցագործությունների կանխարգելում
          </h1>
        </div>
        <div className="h-full min-h-[250px] sm:min-h-[300px] relative">
          <img
            src="https://www.evoca.am/images-cache/menu/1/17387447069114/780x585.png"
            alt="Ֆինանսական հանցագործությունների կանխարգելում"
            className="w-full h-full object-cover rounded-3xl md:rounded-l-none md:rounded-r-3xl"
          />
        </div>
      </div>

      {/* Main Announcement Title */}
      <h2 className="text-lg sm:text-xl font-bold text-[#8A2BE2] mb-6">
        Ֆինանսական հանցագործությունների կանխարգելման մասին հայտարարություն
      </h2>

      <div className="space-y-4 text-sm sm:text-base text-gray-800 mb-8 leading-relaxed">
        <p>
          <span className="font-bold text-[#8A2BE2]">Evocabank</span>-ում մենք
          պարտավորվել ենք պայքարել ֆինանսական հանցագործությունների բոլոր ձևերի
          դեմ, ներառյալ՝ փողերի լվացման, ահաբեկչության ֆինանսավորման,
          խարդախությունների, կաշառակերության, կոռուպցիայի և պատժամիջոցներից
          խուսափելու դեպքերը: Որպես պատասխանատու ֆինանսական կազմակերպություն՝
          մենք ըմբռնումով ենք մոտենում ֆինանսական հանցագործությունների դեմ
          համընդհանուր պայքարում մեր դերին և ձեռնարկում ենք կանխարգելիչ
          միջոցներ՝ ֆինանսական համակարգի ամբողջականությունը պաշտպանելու և
          հաճախորդների վստահությունը Բանկի նկատմամբ ամրապնդելու համար:
        </p>
        <p>
          Մենք ընդունել ենք ֆինանսական հանցագործությունների կանխարգելման
          համապարփակ մոտեցում, որը ներառում է հետևյալ առանցքային տարրերը՝
        </p>
      </div>

      {/* Section 1 */}
      <div className="mb-8">
        <h3 className="text-base sm:text-lg font-bold text-[#8A2BE2] mb-4">
          1. Ճանաչիր քո հաճախորդին և Հաճախորդի պատշաճ ուսումնասիրություն
        </h3>
        <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed">
          Մենք խստորեն հետևում ենք Ճանաչիր քո հաճախորդին (KYC) և Հաճախորդի
          պատշաճ ուսումնասիրության (CDD) ընդունված գործելակերպերին՝ նպատակ
          ունենալով լիովին տեղեկացված լինել մեր հաճախորդների ինքնության, բիզնես
          գործունեության և ռիսկի մակարդակների մասին:
        </p>
        <p className="text-sm sm:text-base text-gray-800 mb-3">
          Սա ենթադրում է հետևյալը՝
        </p>
        <ul className="space-y-3 pl-1 text-sm sm:text-base text-gray-800">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Բոլոր հաճախորդներից անձնական և գործարար տեղեկությունների, այդ
              թվում՝ ֆինանսական միջոցների աղբյուրների և գործունեության բնույթի
              մասին տվյալների հավաքագրում և ստուգում,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Ռիսկերի հիման վրա յուրաքանչյուր հաճախորդի ռիսկի մակարդակի
              գնահատում՝ հաշվի առնելով այնպիսի գործոններ, ինչպիսիք են
              աշխարհագրական վայրը, հաճախորդի բիզնես մոդելը և գործարքների
              իրականացման ձևերը,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Հավելյալ պատշաճ ուսումնասիրության իրականացում բարձր ռիսկային
              հաճախորդների, այդ թվույմ՝ քաղաքական ազդեցություն ունեցող անձանց,
              բարձր ռիսկային երկրներ ներկայացնող կամ սեփականության բարդ
              կառուցվածք ունեցող հաճախորդների համար:
            </span>
          </li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h3 className="text-base sm:text-lg font-bold text-[#8A2BE2] mb-4">
          2. Փողերի լվացման դեմ պայքարի միջոցառումներ
        </h3>
        <p className="text-sm sm:text-base text-gray-800 mb-3 leading-relaxed">
          Մենք պարտավորվել ենք խստորեն հետևել փողերի լվացման դեմ գործող բոլոր
          օրենքներին և կանոնակարգերին: Փողերի լվացման դեմ պայքարի մեր միջոցները
          ներառում են հետևյալը՝
        </p>
        <ul className="space-y-3 pl-1 text-sm sm:text-base text-gray-800">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Անսովոր կամ կասկածելի գործունեության բացահայտման նպատակով
              գործարքների շարունակական դիտանցում,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Նորագույն տեխնոլոգիաների և տվյալների վերլուծության առաջադեմ
              գործիքների օգտագործում՝ փողերի լվացման հատկանիշներ ունեցող
              գործարքների բացահայտման և վերլուծության համար,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Հաճախորդների բոլոր գործարքների մանրազննին գրանցումների պահպանում և
              մշտադիտարկում՝ փողերի լվացման կամ ահաբեկչության ֆինանսավորման
              հատկանիշներ ունեցող դեպքերի բացահայտման նպատակով,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Համապատասխան կանոնակարգող մարմիններին կասկածելի գործարքների մասին
              հաշվետվության ներկայացում՝ համաձայն տեղական և միջազգային
              նորմատիվային պահանջների:
            </span>
          </li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="mb-8">
        <h3 className="text-base sm:text-lg font-bold text-[#8A2BE2] mb-4">
          3. Ահաբեկչության ֆինանսավորման դեմ պայքար
        </h3>
        <p className="text-sm sm:text-base text-gray-800 mb-3 leading-relaxed">
          Մենք խստորեն հետևում ենք ահաբեկչության ֆինանսավորման դեմ պայքարի բոլոր
          կանոնակարգերին, այդ թվում՝
        </p>
        <ul className="space-y-3 pl-1 text-sm sm:text-base text-gray-800">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Երաշխիք, որ ոչ մի ծառայություն կամ պրոդուկտ չի առաջարկվի այն
              ֆիզիկական կամ իրավաբանական անձանց, որոնք կապված են ահաբեկչական
              կազմակերպությունների կամ նման գործողությունների հետ,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Հաճախորդների պարբերական ուսումնասիրություն՝ նպատակ ունենալով
              բացահայտել ահաբեկչական ցուցակների, ՄԱԿ-ի պատժամիջոցների կամ այլ
              համապատասխան մարմինների ցուցակների հետ համընկնման դեպքերը,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Ռիսկերի վրա հիմնված մոտեցման կիրառում՝ գործարքների դիտանցման և
              ահաբեկչության ֆինանսավորման հավանական դեպքերի բացահայտման
              նպատակով:
            </span>
          </li>
        </ul>
      </div>

      {/* Section 4 */}
      <div className="mb-8">
        <h3 className="text-base sm:text-lg font-bold text-[#8A2BE2] mb-4">
          4. Պատժամիջոցներից խուսափում
        </h3>
        <p className="text-sm sm:text-base text-gray-800 mb-3 leading-relaxed">
          Evocabank-ը պարտավորվել է ապահովել լիարժեք համապատասխանություն
          պատժամիջոցների բոլոր կանոններին և կանոնակարգերին, այդ թվում նրանց,
          որոնք ուժի մեջ են դրվել՝
        </p>
        <ul className="space-y-3 pl-1 text-sm sm:text-base text-gray-800 mb-6">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Միավորված ազգերի կազմակերպության Անվտանգության խորհրդի կողմից,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              ԱՄՆ-ի Գանձապետարանի Օտարերկրյա ակտիվների վերահսկման գրասենյակի
              (OFAC) կողմից,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              ԱՄՆ-ի Առևտրի դեպարտամենտի Արդյունաբերության և անվտանգության
              բյուրոյի կողմից,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>Եվրոպական հանձնաժողովի կողմից,</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Միացյալ Թագավորության Նորին Մեծության գանձապետարանի կողմից:
            </span>
          </li>
        </ul>

        <p className="text-sm sm:text-base text-gray-800 mb-3">
          Սա ներառում է՝
        </p>
        <ul className="space-y-3 pl-1 text-sm sm:text-base text-gray-800">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Բոլոր հաճախորդների, գործարքների և գործարար հարաբերությունների
              ուսումնասիրություն՝ պատժամիջոցների վերոհիշյալ ցուցակների հետ
              համընկնումների, պատժամիջոցներին ենթակա ֆիզիկական և իրավաբանական
              անձանց և երկրների բացահայտման նպատակով,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Պատժամիջոցներից խուսափելու դեպքերի հետ կապված գործարքների կամ
              ծառայությունների կանխարգելում, ինչպես նաև պատժամիջոցների
              ցուցակներում ընդգրկված ֆիզիկական կամ իրավաբանական անձանց հետ
              գործարքների բացառում,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Մեր համակարգերի պարբերական թարմացում՝ արտացոլելով պատժամիջոցների
              ցուցակների վերջին փոփոխությունները, ինչպես նաև՝ իրական ժամանակում
              բոլոր գործարքների ուսումնասիրություն,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Բարձր ռիսկային երկրների, պատժամիջոցներից խուսափելու հատկանիշներ
              ունեցող իրավաբանական և ֆիզիկական անձանց գործարքների հավելյալ
              պատշաճ ուսումնասիրություն:
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialCrimePrevention;
