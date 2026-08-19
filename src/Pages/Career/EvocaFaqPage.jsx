import React, { useState } from "react";




function FaqHero() {
  return (
    <section
      className="relative w-full h-[350px] sm:h-[450px] lg:h-[634px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16194612949534/1920x634.jpg')`,
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-32 w-full">
        {}
        <div className="bg-white rounded-[30px] p-8 md:p-12 w-full max-w-[450px] lg:max-w-[500px] shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3d3333] tracking-wide">
            Հաճախ տրվող հարցեր
          </h1>
        </div>
      </div>
    </section>
  );
}





function JobApplicationForm() {
  const [captchaText, setCaptchaText] = useState("7J5AJT");
  const [captchaInput, setCaptchaInput] = useState("");
  const [fileName, setFileName] = useState("");

  
  const regenerateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captchaText) {
      alert("Ստուգման ծածկագիրը (Captcha) սխալ է լրացված:");
      return;
    }
    alert("Դիմումը հաջողությամբ ուղարկվեց:");
  };

  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-32 py-16">
      <div className="max-w-4xl mx-auto bg-white">
        {}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#6816cc] mb-3">
            Դառնալ թիմի անդամ
          </h2>
          <p className="text-gray-600 text-sm md:text-[15px]">
            Եթե ցանկանում եք միանալ{" "}
            <span className="font-semibold text-gray-800">EvocaTEAM</span>-ին,
            կարող եք ուղարկել դիմում` կցելով ինքնակենսագրականը:
          </p>
        </div>

        {}
        <form onSubmit={handleSubmit} className="space-y-6">
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Անուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
              placeholder=""
            />
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ազգանուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
              placeholder=""
            />
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Հեռախոսահամար <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg text-sm text-gray-700 gap-1 select-none">
                <span>🇦🇲</span>
                <span className="font-medium">+374</span>
              </div>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-r-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
                placeholder=""
              />
            </div>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Էլ. հասցե
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
              placeholder=""
            />
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook սոց. կայքում անձնական էջի հղում
            </label>
            <input
              type="url"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
              placeholder=""
            />
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn սոց. կայքում անձնական էջի հղում
            </label>
            <input
              type="url"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
              placeholder=""
            />
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ուղեկցող նամակ
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm resize-y"
            ></textarea>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span>
            </label>
            <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-6 h-6 mb-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <p className="text-sm text-gray-500">
                  {fileName ? (
                    <span className="text-[#6816cc] font-semibold">
                      {fileName}
                    </span>
                  ) : (
                    "Կցել ֆայլ / ֆայլերը"
                  )}
                </p>
              </div>
              <input
                type="file"
                required
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {}
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ստուգման ծածկագիր <span className="text-red-500">*</span>
            </label>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 space-y-3">
              <input
                type="text"
                required
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Մուտքագրեք ծածկագիրը"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-[#6816cc] text-sm"
              />
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg border border-gray-200">
                <span className="font-mono text-lg tracking-widest font-bold line-through text-gray-600 select-none">
                  {captchaText}
                </span>
                <button
                  type="button"
                  onClick={regenerateCaptcha}
                  className="text-gray-500 hover:text-[#6816cc] transition-colors focus:outline-none"
                  title="Թարմացնել ծածկագիրը"
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
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-[#6816cc] hover:bg-[#5710aa] text-white font-semibold rounded-full shadow-md transition-colors text-sm md:text-base"
            >
              Ես ուզում եմ աշխատել Evoca-ում :)
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}




export default function EvocaFaqPage() {
  
  const [openIndex, setOpenIndex] = useState(0);

  
  const faqData = [
    {
      question: "Կարո՞ղ եմ միաժամանակ դիմել տարբեր աշխատատեղերի համար:",
      answer:
        "Մեկ օգտատիրոջ կողմից ներկայացվող դիմումների քանակն անսահմանափակ է, սակայն խնդրում ենք դիմել միայն այն աշխատանքների համար, որում նշված պահանջներին և հմտություններին համապատասխանում եք:",
    },
    {
      question:
        "Դիմումը ներկայացնելուց որքա՞ն ժամանակ հետո ինձ կհրավիրեն հարցազրույցի:",
      answer:
        "Եթե Դուք դիմել եք հայտարարված ազատ աշխատատեղի համար և հայտնվել եք նախնական ընտրված թեկնածուների շարքում, ապա մեր թիմը կապ կհաստատի Ձեզ հետ հայտարարության ժամկետի ավարտից հետո`մեկ ամսվա ընթացքում:",
    },
    {
      question: "Հարցազրույցի ընթացքում լինելո՞ւ է թեստավորում:",
      answer:
        "Աշխատանքի ընդունման մեր գործընթացը մի քանի փուլից է կազմված: Առաջին փուլում թեստավորում չի իրականացվում: Հետագա փուլերի մասին ինֆորմացիան կարող եք գտնել «Ինչպես ընդունվել աշխատանքի Evocabank-ում» բաժնում:",
    },
  ];

  
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white pb-24">
      {}
      <FaqHero />

      {}
      <div className="container mx-auto px-6 md:px-12 lg:px-32 py-12 md:py-20 flex justify-center">
        <div className="w-full max-w-4xl">
          {}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d3333] mb-4">
              Հարցերի ցանկ
            </h2>
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
              Բացահայտիր, թե ինչն է Evoca-ն դարձնում այսքան յուրահատուկ:
              Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ
              փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին:
            </p>
          </div>

          {}
          <div className="flex flex-col space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-[#6816cc]" : "border-gray-200"
                  }`}
                >
                  {}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center px-5 py-4 bg-white text-left focus:outline-none"
                  >
                    {}
                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 text-[#6816cc] mr-4 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>

                    <span
                      className={`font-semibold text-[15px] md:text-base ${
                        isOpen
                          ? "text-[#3d3333]"
                          : "text-gray-700 hover:text-[#6816cc] transition-colors"
                      }`}
                    >
                      {item.question}
                    </span>
                  </button>

                  {}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-14 pb-5 pt-1 text-gray-600 text-sm md:text-[15px] leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {}
      <JobApplicationForm />
    </div>
  );
}
