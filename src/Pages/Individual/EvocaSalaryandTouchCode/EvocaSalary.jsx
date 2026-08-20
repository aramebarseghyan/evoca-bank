import React, { useEffect } from "react";

const EvocaSalary = () => {

  useEffect(() => {
    document.title = "EVOCA Աշխատավարձային նախագիծ | Evocabank";
  }, []);

  return (
    <div className="w-full bg-white font-sans pb-20">
      <div className="max-w-[1440px] mx-auto pt-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-8 lg:px-16 mb-16 gap-6 lg:gap-0 2xl:ml-[-30px] 2xl:w-[calc(100%+30px)]">
          <div className="lg:w-[45%] bg-[#F8F6FD] rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
              EVOCA ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՆԱԽԱԳԻԾ
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Քո աշխատավարձը կարող է քեզ տալ շատ ավելին: Պարզապես պետք է ընտրել
              Evocabank-ը:
            </p>
          </div>
          <div className="lg:w-[55%] bg-[#F8F6FD] lg:bg-transparent flex items-center justify-center p-6 lg:p-0 rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png"
              alt="Evoca Salary Project"
              className="w-full h-full object-cover max-h-[450px] rounded-3xl lg:rounded-l-none lg:rounded-r-[3rem]"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto space-y-12 text-gray-700 text-sm md:text-base leading-relaxed">
          <p className="text-base md:text-lg">
            Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց
            աշխատավարձը քարտին ստանալուից բացի, ցանկանում են նաև ստանալ{" "}
            <strong className="text-[#5D00E0]">
              նոր հնարավորություններ ու առավելություններ
            </strong>
            :
          </p>

          {/* Block 1 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Բեր աշխատավարձդ Evoca, տար անվճար{" "}
              <span className="text-[#5D00E0]">Mastercard Gold</span>
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Պրեմիում դասի քարտ</li>
              <li>Հասանելի է ամբողջ աշխարհում</li>
              <li>Գումարի անվտանգության բարձր մակարդակ</li>
              <li>
                Դրական մնացորդի նկատմամբ{" "}
                <strong className="text-gray-900">
                  2% տարեկան տոկոսադրույք
                </strong>
              </li>
            </ul>
          </div>

          {/* Block 2 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Բեր աշխատավարձդ Evoca, տար{" "}
              <span className="text-[#5D00E0]">
                50% զեղչով Evoca Travel Card
              </span>
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Մինչև <strong className="text-gray-900">1.5% cashback</strong>{" "}
                արտասահմանում իրականացված վճարումների համար
              </li>
              <li>
                Անվճար <strong className="text-gray-900">6 մուտք</strong> Lounge
                Key սրահներ քեզ և հյուրերի համար
              </li>
              <li>
                Անվճար <strong className="text-gray-900">6 անգամ</strong> Fast
                track-ից օգտվելու հնարավորություն քեզ և հյուրերի համար
              </li>
              <li>Այլ ճամփորդական առավելություններ</li>
            </ul>
          </div>

          {/* Block 3 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Բեր աշխատավարձդ Evoca, տար մի շարք{" "}
              <span className="text-[#5D00E0]">բենեֆիթներ</span>
            </h2>
            <p>
              Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու{" "}
              <strong className="text-[#5D00E0]">Evoca Benefits</strong>{" "}
              նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Մինչև <strong className="text-gray-900">25% զեղչ</strong>
              </li>
              <li>
                Մինչև <strong className="text-gray-900">25% cashback</strong>
              </li>
              <li>Նվեր քարտեր</li>
            </ul>
          </div>

          {/* Block 4 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Բեր աշխատավարձդ Evoca, տար ավելի ցածր տոկոսադրույքով վարկեր
            </h2>
            <h3 className="text-lg font-bold text-gray-900 pt-2">
              Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Մինչև աշխատավարձի{" "}
                <strong className="text-gray-900">15-ապատիկի</strong> չափով
              </li>
              <li>Մինչև 10 մլն դրամ գումար</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvocaSalary;
