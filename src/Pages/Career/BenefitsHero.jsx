import React from "react";


function BenefitsHero() {
  return (
    <section
      className="relative w-full h-[350px] sm:h-[450px] lg:h-[634px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16194612394395/1920x634.jpg')`,
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-32 w-full">
        <div className="bg-white rounded-[30px] p-8 md:p-12 w-full max-w-[450px] lg:max-w-[500px] shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3d3333] mb-4 tracking-wide">
            Առավելություններ
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            Միացի՛ր թիմին, որի ամենամեծ ակտիվը ներգրավված և երջանիկ
            աշխատակիցներն են։
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. ԴԻՄՈՒՄԻ ՖՈՐՄԱ (Դառնալ թիմի անդամ)
// ==========================================
function JoinTeamForm() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#6816cc] mb-4">
          Դառնալ թիմի անդամ
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Եթե ցանկանում ես միանալ{" "}
          <span className="font-bold text-[#6816cc]">EvocaTEAM</span>-ին,
          <br className="hidden sm:block" />
          կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Անուն */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            Անուն <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-[5px] p-3 focus:outline-none focus:border-[#6816cc] transition"
            />
          </div>
        </div>

        {/* Ազգանուն */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            Ազգանուն <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-[5px] p-3 focus:outline-none focus:border-[#6816cc] transition"
            />
          </div>
        </div>

        {/* Հեռախոսահամար */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            Հեռախոսահամար <span className="text-red-500">*</span>
          </label>
          <div className="flex border border-gray-300 rounded-[5px] overflow-hidden focus-within:border-[#6816cc] transition">
            <div className="bg-gray-50 px-3 flex items-center border-r border-gray-300 cursor-pointer">
              <span className="mr-2">🇦🇲</span>
              <span className="text-sm text-gray-700">+374</span>
              <svg
                className="w-3 h-3 ml-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <input type="tel" className="w-full p-3 focus:outline-none" />
          </div>
        </div>

        {/* Էլ. հասցե */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            Էլ․ հասցե
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-[5px] py-3 pl-10 pr-3 focus:outline-none focus:border-[#6816cc] transition"
            />
          </div>
        </div>

        {/* Facebook */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            Facebook սոց. կայքում անձնական էջի հղում
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <input
              type="url"
              className="w-full border border-gray-300 rounded-[5px] py-3 pl-10 pr-3 focus:outline-none focus:border-[#6816cc] transition"
            />
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            LinkedIn սոց. կայքում անձնական էջի հղում
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <input
              type="url"
              className="w-full border border-gray-300 rounded-[5px] py-3 pl-10 pr-3 focus:outline-none focus:border-[#6816cc] transition"
            />
          </div>
        </div>

        {/* Ուղեկցող նամակ */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            Ուղեկցող նամակ
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-[5px] p-3 focus:outline-none focus:border-[#6816cc] transition resize-y"
          ></textarea>
        </div>

        {/* Վերբեռնեք Ձեր ռեզյումեն */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span>
          </label>
          <div className="relative border border-dashed border-gray-300 rounded-[5px] p-4 flex justify-between items-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
            <span className="text-gray-500 text-sm">Կցել ֆայլը / Ֆայլերը</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              ></path>
            </svg>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Ստուգման ծածկագիր (Captcha) */}
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">
            Ստուգման ծածկագիր <span className="text-red-500">*</span>
          </label>
          <div className="border border-gray-300 rounded-[5px] p-4 inline-block w-full sm:w-auto bg-[#fafafa]">
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Մուտքագրեք ծածկագիրը"
                className="border border-gray-300 rounded-[5px] p-2 focus:outline-none focus:border-[#6816cc] w-full sm:w-[220px]"
              />
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-[#6816cc]"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Սիմուլյացված Capctha նկար */}
            <div className="bg-white border border-gray-200 w-[220px] h-[50px] flex items-center justify-center italic font-serif text-2xl tracking-widest text-gray-800 line-through decoration-gray-400 select-none">
              31CHMH
            </div>
          </div>
        </div>

        {/* Ուղարկելու Կոճակ */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#6816cc] hover:bg-[#5211a3] text-white font-medium py-3 px-6 rounded-full transition duration-300"
          >
            Ես ուզում եմ աշխատել Evoca-ում :)
          </button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// 3. ԳԼԽԱՎՈՐ ԷՋԸ (Միացնում է վերևի 2-ը)
// ==========================================
export default function EvocaAdvantagesPage() {
  const advantages = [
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/17431437867453/120x120.png",
      title: "Առողջության ապահովագրություն",
    },
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/1743143856123/120x120.png",
      title: "Ճամփորդական ապահովագրություն",
    },
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/17431582596354/120x120.png",
      title:
        "Evocabank-ի ծառայությունների արտոնյալ պայմաններ, ապահովագրական ծառայությունների զեղչեր",
    },
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/17431582659146/120x120.png",
      title: "Կորպորատիվ զեղչեր",
    },
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/17431581917652/120x120.png",
      title: "Տոնական և տարեվերջյան բոնուսներ",
    },
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/174314403471/120x120.png",
      title: "Պարգևատրումներ ծննդյան օրերին, ամուսնանալիս և երեխա ունենալիս",
    },
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/17431442426277/120x120.png",
      title: "Days off",
    },
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/17431443089347/120x120.png",
      title: "Սպորտային փաթեթ",
    },
    {
      icon: "https://www.evoca.am/images-cache/benefits/1/17431453776119/120x120.png",
      title:
        "Շարունակական կրթության և մասնագիտական զարգացման լայն հնարավորություն",
    },
  ];

  return (
    <div className="w-full bg-white pb-20">
      {/* Գլխավոր նկարի հատված */}
      <BenefitsHero />

      {/* Մեր առավելությունները բաժին */}
      <div className="container mx-auto px-6 md:px-12 lg:px-32 py-12 md:py-16">
        {/* Վերնագիր և գիծ */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3d3333] mb-4">
            Մեր առավելությունները
          </h2>
          <hr className="border-t border-gray-200" />
        </div>

        {/* Գրիդ (Grid) ցուցակը */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {advantages.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-[100px] h-[100px] object-contain mb-6 drop-shadow-sm"
              />
              <p className="text-gray-700 text-[15px] max-w-[280px] leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Բաժանարար գիծ նախքան ֆորման */}
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        <hr className="border-t border-gray-200" />
      </div>

      {/* Դառնալ թիմի անդամ Ֆորման */}
      <JoinTeamForm />
    </div>
  );
}
