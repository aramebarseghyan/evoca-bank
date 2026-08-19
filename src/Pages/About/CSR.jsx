import React from "react";

const CSRComponent = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto p-4 md:p-8 font-sans text-gray-800">
      {/* Верхний блок с заголовком и картинкой */}
      {/* Убрали overflow-hidden и скругление с главного контейнера */}
      <div className="flex flex-col md:flex-row w-full mb-12">
        {/* Левая часть */}
        {/* Добавили rounded-bl-[4rem] md:rounded-bl-[5rem] ТОЛЬКО сюда */}
        <div className="md:w-1/2 bg-[#f8f5fc] p-8 md:p-12 lg:p-16 flex flex-col justify-center rounded-bl-[4rem] md:rounded-bl-[5rem]">
          {/* Добавили break-words и подкорректировали размер шрифта для надежности */}
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-6 leading-tight break-words">
            Կորպորատիվ
            <br />
            Սոցիալական
            <br />
            Պատասխանատվություն
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
            Մենք մեծ կարևորություն ենք տալիս CSR-ին՝ ապահովելով մեր
            գործունեության դրական ազդեցությունը թե՛ հասարակության, թե՛ շրջակա
            միջավայրի վրա:
          </p>
        </div>

        {/* Правая часть (фиолетовый фон и изображение 3D-руки) */}
        <div className="md:w-1/2 bg-[#7034E4] flex items-center justify-center">
          <img
            src="https://www.evoca.am/images-cache/menu/1/17108330711252/780x585.png"
            alt="Corporate Social Responsibility"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Нижний текстовый блок */}
      <div className="max-w-4xl mx-auto md:mx-0 px-2 md:px-4 text-gray-700 text-sm md:text-[15px] leading-relaxed">
        <p className="mb-6">
          <span className="font-bold text-[#7034E4]">Evocabank</span>-ում
          Կորպորատիվ սոցիալական պատասխանատվությունը կարևորագույն արժեք է, որն
          արտացոլվում է Բանկի գրեթե բոլոր նախաձեռնություններում։ Բանկը
          շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և
          հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
        </p>

        {/* Стилизованный список */}
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7034E4] mt-2 mr-3 flex-shrink-0"></div>
            <span>Նորագույն տեխնոլոգիաների զարգացում,</span>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7034E4] mt-2 mr-3 flex-shrink-0"></div>
            <span>
              Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,
            </span>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7034E4] mt-2 mr-3 flex-shrink-0"></div>
            <span>
              Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,
            </span>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7034E4] mt-2 mr-3 flex-shrink-0"></div>
            <span>
              Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ
              հատուկ խնամքի տակ գտնվող երեխաներ:
            </span>
          </li>
        </ul>

        <p className="mb-8">
          Մեր բոլորի կողմից Կորպորատիվ սոցիալական պատասխանատվությանն ուղղված
          յուրաքանչյուր փոքրիկ քայլ վկայում է աշխարհն ավելի լուսավոր ու գեղեցիկ
          դարձնելու կարևորության մասին:
        </p>
      </div>
    </section>
  );
};

export default CSRComponent;
