import React, { useState } from "react";

// ==========================================
// 1. HERO ՀԱՏՎԱԾ
// ==========================================
function WorkHero() {
  return (
    <section
      className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage:
          "url('https://www.evoca.am/images-cache/menu/1/16194613464502/1920x634.jpg')",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-32 w-full">
        <div className="bg-white rounded-[30px] p-8 md:p-12 w-full max-w-[450px] lg:max-w-[500px] shadow-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d3333] tracking-wide leading-snug">
            Ինչպես ընդունվել աշխատանքի Evocabank-ում
          </h1>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. ԴԻՄՈՒՄԻ ՀԱՅՏԻ ԲԱՂԱԴՐԻՉ (JobApplicationForm)
// ==========================================
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
    <section className="container mx-auto px-6 md:px-12 lg:px-32 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Անուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ազգանուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
            />
          </div>

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
                placeholder="XX XXXXXX"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Էլ. հասցե
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook սոց. կայքում անձնական էջի հղում
            </label>
            <input
              type="url"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn սոց. կայքում անձնական էջի հղում
            </label>
            <input
              type="url"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ուղեկցող նամակ
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6816cc] transition-colors text-sm resize-y"
            ></textarea>
          </div>

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
                    <span className="text-[#6816cc] font-semibold">{fileName}</span>
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

// ==========================================
// 3. ԳԼԽԱՎՈՐ ԷՋԸ (WorkAtEvocaPage)
// ==========================================
export default function WorkAtEvocaPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const stepsData = [
    {
      title: "Առաջին փուլ` Դիմում",
      content:
        "Evocabank-ում աշխատանքի դիմելիս թեկնածուի ճանապարհը սկսվում է հայտի ներկայացումից, որն իրականացվում է կամ ներքոնշյալ հայտը լրացնելով կամ cv@evocabank.am էլ. հասցեին Ձեր ինքնակենսագրականն ուղարկելով:",
    },
    {
      title: "Հեռախոսային հարցազրույց",
      content:
        "Եթե ինքնակենսագրականում նշված Ձեր փորձը համապատասխանել է պահանջներին, ապա Evocabank-ի հարցազրուցավարը կապ կհաստատի Ձեզ հետ: Սովորաբար, Evoca-ում հարցազրույցների գործընթացն անցնում է երեք փուլով:\n\nԱռաջին փուլը հեռախոսային հարցազրույց է: Այս փուլում Դուք կստանաք ավելի մանրամասն ինֆորմացիա այն աշխատանքի մասին, որի համար դիմել եք: Կներկայացնենք Ձեզ Evocabank-ը, և, թե ինչպիսին է աշխատանքը մեր թիմում: Նաև մի քանի հարցեր կլինեն Ձեր մասնագիտական փորձի վերաբերյալ:",
    },
    {
      title: "Առերես հարցազրույց",
      content:
        "Երկրորդ փուլը առերես հարցազրույց է հարցազրուցավարի և հավաքագրման ղեկավարի հետ: Այս փուլի նպատակն է գնահատել Ձեր հետաքրքրվածությունը և կարողությունները իրականացնելու ամենօրյա աշխատանքն ու պարտականությունները:",
    },
    {
      title: "Հարցազրույց թիմի հետ",
      content:
        "Երրորդ փուլը հարցազրույց է թիմի անդամների, ղեկավարների և բոլոր այն մարդկանց հետ, ում հետ Դուք հնարավոր է հետագայում աշխատեք:",
    },
    {
      title: "Գնահատում և ստուգումներ",
      content:
        "Թեստավորումից և հարցազրույցների ավարտից հետո այն մարդիկ, ում հետ զրուցել եք, իրենց կարծիքն են հայտնում Ձեր հետ ունեցած հարցազրույցի արդյունքների վերաբերյալ, և մենք գնահատում ենք, թե արդյոք հաջողակ կլինեք տվյալ դերում:\n\nԱշխատանքի պայմանական առաջարկ կատարելուց հետո, Evoca-ն իրականացնում է դիմորդի վերաբերյալ պարտադիր ստուգումներ: Կատարվում են 4 հիմնական տեսակների ստուգումներ` քրեական պատմության, կրթության, աշխատանքային պատմության և referral ստուգումներ:",
    },
    {
      title: "Աշխատանքի առաջարկ և ձևակերպում",
      content:
        "Ստուգումների դրական արդյունքներ ստանալուց հետո մեր թիմը կապ կհաստատի Ձեզ հետ և կներկայացնի աշխատանքի առաջարկ: Ձեր կողմից այն ընդունվելուց հետո կիրականացվենի փաստաթղթային ձևակերպումները և կամփոփվեն այլ մանրամասներ: Բարի գալուստ Evocabank!",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      <WorkHero />

      <div className="container mx-auto px-6 md:px-12 lg:px-32 py-12 md:py-20 flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d3333] mb-4">
              Աշխատանքի ընդունվելու փուլեր
            </h2>
          </div>

          <div className="flex flex-col space-y-4">
            {stepsData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-[#6816cc]" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center justify-between px-6 py-5 bg-white text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#6816cc] text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span
                        className={`font-semibold text-[15px] md:text-base ${
                          isOpen
                            ? "text-[#3d3333]"
                            : "text-gray-700 hover:text-[#6816cc] transition-colors"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 text-[#6816cc] ml-4 ${
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
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-1 text-gray-600 text-sm md:text-[15px] leading-relaxed whitespace-pre-line pl-16">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <JobApplicationForm />
    </div>
  );
}