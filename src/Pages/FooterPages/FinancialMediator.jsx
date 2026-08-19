import React from "react";

const FinancialMediator = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16 py-8 text-gray-800 font-sans leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Ֆին. հաշտարար
      </h1>

      {/* Intro */}
      <p className="font-bold italic text-sm sm:text-base mb-4 text-gray-900 leading-relaxed">
        <span className="not-italic font-bold">
          Ֆինանսական համակարգի հաշտարարի
        </span>{" "}
        գրասենյակն անկախ կառավարման համակարգով կառույց է, որի հիմնադիրն է ՀՀ
        կենտրոնական բանկը: Հաշտարարի գրասենյակը կոչված է լուծելու ֆիզիկական անձ
        սպառողների և ֆինանսական կազմակերպությունների միջև ծագած գույքային
        վեճերը:
      </p>

      <p className="text-sm sm:text-base mb-6 text-gray-800">
        Հաշտարարի ծառայություններն անվճար են:
      </p>

      {/* Goals */}
      <div className="mb-8">
        <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-4">
          Ֆինանսական համակարգի հաշտարարի գործունեության նպատակներն են՝
        </h2>
        <ul className="space-y-3 pl-1 text-sm sm:text-base text-gray-800">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Ֆինանսական ոլորտում սպառողների իրավունքների ու շահերի
              պաշտպանությունը,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Սպառողների պահանջների արագ, արդյունավետ և անվճար քննությունը,
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 shrink-0"></span>
            <span>
              Ֆինանսական համակարգի նկատմամբ հանրության վստահության բարձրացումը:
            </span>
          </li>
        </ul>
      </div>

      {/* Office Details */}
      <div className="mb-8">
        <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-4">
          Ֆինանսական համակարգի հաշտարարի գրասենյակ՝
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-gray-800">
          <p>
            Ֆինանսական համակարգի գլխավոր հաշտարար, Գրասենյակի կառավարիչ՝ Վազգեն
            Մնացականյան
          </p>
          <p>Հաշտարար՝ Փիրուզ Սարգսյան</p>
          <p>
            Հասցե՝ ՀՀ, 0010, ք. Երևան, Մ. Խորենացու փող., 15, «Էլիտ Պլազա»
            բիզնես կենտրոն 7-րդ հարկ
          </p>
          <p>
            Հեռ.`{" "}
            <a
              href="tel:+37460701111"
              className="hover:text-[#8A2BE2] transition-colors"
            >
              +374 60 70-11-11
            </a>
          </p>
          <p>Ֆաքս` +374 10 58-24-21</p>
          <p>
            Էլ. հասցե՝{" "}
            <a
              href="mailto:info@fsm.am"
              className="text-[#8A2BE2] underline hover:opacity-80 transition-opacity font-medium"
            >
              info@fsm.am
            </a>
          </p>
          <p>
            Պաշտոնական կայք՝{" "}
            <a
              href="https://www.fsm.am"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A2BE2] underline hover:opacity-80 transition-opacity font-medium"
            >
              www.fsm.am
            </a>
          </p>
        </div>
      </div>

      {/* Work Schedule */}
      <div className="mb-8">
        <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-3">
          Աշխատանքային ժամեր՝
        </h2>
        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
          Ֆինանսական համակարգի հաշտարարի գրասենյակը աշխատում է ամեն օր ժամը
          09:00 - 18:00 (ընդմիջման ժամ՝ 13:00-ից 14:00), բացի հանգստյան և տոն
          օրերից:
        </p>
      </div>
    </div>
  );
};

export default FinancialMediator;
