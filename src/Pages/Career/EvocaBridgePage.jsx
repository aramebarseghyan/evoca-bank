import React from "react";

export default function EvocaBridgePage() {
  const programBenefits = [
    "Երկամսյա խորացված ուսումնական ծրագիր:",
    "Ծանոթացում նորարար բանկային միջավայրին ներսից:",
    "Գործնական կապերի հաստատում:",
    "Ամսական 180.000 ՀՀ դրամ վարձատրություն` ներառյալ հարկերը և այլ պարտադիր վճարումները:",
    "Անմիջապես ծրագրի ավարտից հետո աշխատանքի անցնելու հնարավորություն:",
  ];

  const requirements = [
    "Սովորում ես համալսարանի 4-րդ կուրսում, մագիստրատուրայում կամ մինչև 1 տարի է՝ ինչ ավարտել ես համալսարանը:",
    "Ունես բարձր առաջադիմություն:",
    "Հետաքրքրասեր ես, ակտիվ ու նպատակասլաց:",
    "Սիրում ես բացահայտել նորը, սովորել ու զարգանալ:",
  ];

  const applicationDocs = [
    "Ինքնակենսագրական,",
    "ՄՈԳ-ի ցուցանիշը հաստատող տեղեկանք,",
    "«Նամակ ապագային» այն մասին, թե ինչպես ես ամենամեծ 2 նպատակները դարձրել հաջողված նախագիծ:",
  ];

  const programStages = [
    {
      title: "Փուլ 1: Տեսական",
      description:
        "Տեսական ուսուցման ընթացքում մասնակիցներն ունենում են հանդիպումներ Բանկի մի շարք ստորաբաժանումների ղեկավարների հետ, ստանում խորացված գիտելիքներ բանկային պրոդուկտների, ծառայությունների և մի շարք գործընթացների վերաբերյալ:",
    },
    {
      title: "Փուլ 2: Գործնական",
      description:
        "Գործնական փուլի շրջանակում մասնակիցները հնարավորություն են ունենում տեսական և գործնական գիտելիքները կիրառել պրակտիկ միջավայրում: Այս փուլի ընթացքում մասնակիցները նաև ներգրավվում են նախագծերի մշակման և ներկայացման հետաքրքիր գործընթացում:",
    },
    {
      title: "Փուլ 3: Ամփոփում",
      description:
        "Տեսական և գործնական փուլերի ավարտից հետո իրականացվում է թեստավորում և ավարտական նախագծերի հանձնում։ Լավագույն արդյունք ցուցաբերած մասնակիցները ստանում են աշխատանքի առաջարկ Evocabank-ից և սկսում իրենց մասնագիտական ուղին։",
    },
  ];

  const checkIcon = (
    <svg
      className="w-5 h-5 text-[#6816cc] shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <div className="w-full bg-white pb-20">
      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "url('https://www.evoca.am/images-cache/menu/1/17377293888049/1920x634.jpg')",
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-32 w-full">
          <div className="bg-white rounded-[30px] p-8 md:p-10 w-full max-w-[550px] lg:max-w-[620px] shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-[#3d3333] mb-2">
              EvocaBRIDGE
            </h1>
            <p className="text-gray-600 text-sm md:text-[15px] font-medium">
              EvocaBRIDGE: Bridging Ideas, Shaping The Future
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-32 pt-16 max-w-6xl">
        {/* Intro subtitle */}
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-8 leading-snug">
          Չունե՞ս աշխատանքային փորձ, բայց փնտրո՞ւմ ես աշխատանք, ուրեմն
          EvocaBRIDGE ծրագիրը քեզ համար է!
        </h2>

        {/* Benefits List */}
        <ul className="space-y-4 mb-12">
          {programBenefits.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
            >
              {checkIcon}
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Requirements Section */}
        <div className="mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#6816cc] mb-4 flex items-center gap-2">
            <span>💼 EvocaBRIDGE-ին կարող ես մասնակցել, եթե...</span>
          </h3>
          <ul className="space-y-4">
            {requirements.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
              >
                {checkIcon}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Application Docs Section */}
        <div className="mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#6816cc] mb-4">
            💼 EvocaBRIDGE-ին մասնակցելու համար{" "}
            <a
              href="mailto:evocabridge@evoca.am"
              className="underline hover:text-purple-800"
            >
              evocabridge@evoca.am
            </a>{" "}
            էլեկտրոնային հասցեին ուղարկիր.
          </h3>
          <ul className="space-y-4">
            {applicationDocs.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
              >
                {checkIcon}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Note */}
        <div className="mb-16 text-gray-700 text-sm md:text-base leading-relaxed">
          Նախնական ընտրությունն անցած թեկնածուների հետ կիրականացվեն անհատական
          հարցազրույցներ, որի արդյունքում կընտրվեն ծրագրի մասնակիցները:
        </div>

        {/* Program Details Section */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#6816cc] mb-4">
            Ծրագրի մանրամասներ․
          </h3>
          <p className="text-gray-800 font-medium mb-8 text-base">
            EvocaBRIDGE-ն իրականացվում է 3 փուլերով:
          </p>

          <div className="space-y-6">
            {programStages.map((stage, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg md:text-xl font-bold text-[#6816cc] mb-3">
                  {stage.title}
                </h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
