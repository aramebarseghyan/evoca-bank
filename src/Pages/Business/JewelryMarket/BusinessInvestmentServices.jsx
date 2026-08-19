import React, { useState } from "react";


const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div
      className={`mb-4 rounded-xl border transition-colors duration-300 bg-white ${
        isOpen ? "border-[#6000ff]" : "border-gray-200"
      }`}
    >
      <button
        className="w-full flex justify-between items-center p-5 focus:outline-none"
        onClick={onClick}
      >
        <span className="font-bold text-[#222222] text-sm sm:text-base text-left">
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-[#6000ff] shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

const BusinessInvestmentServices = () => {
  
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white sm:bg-transparent pt-[30px] sm:pt-[50px] pb-16">
      <div className="max-w-[1150px] mx-auto lg:ml-[300px] lg:mx-0 px-4 sm:px-6 lg:px-8">
        {}
        <div className="mb-12 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p className="mb-6">
            Բանկն իր հաճախորդներին Ներդրումային ծառայություններ է մատուցում
            ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից
            առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ
            հանդիսացող հաճախորդներին:
          </p>

          <h3 className="text-lg font-bold text-[#6000ff] mb-3">
            Ինչպե՞ս դառնալ հաճախորդ:
          </h3>
          <p className="mb-4">
            Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում
            ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող
            փաստաթղթերին կարող եք ծանոթանալ{" "}
            <a href="#" className="text-[#6000ff] underline hover:no-underline">
              այստեղ
            </a>
            :
          </p>
          <p className="mb-8">
            Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային
            գրասենյակ:
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#222222] mb-1">Հասցե՝</h3>
            <p>Երևան, Հանրապետության 44/2</p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#222222] mb-1">
              Հետադարձ կապ՝
            </h3>
            <p>Հեռ.՝ 374 10 205555</p>
            <p>
              Էլ. հասցե՝{" "}
              <a
                href="mailto:invest@evoca.am"
                className="text-[#6000ff] underline hover:no-underline"
              >
                invest@evoca.am
              </a>
            </p>
          </div>

          <p className="uppercase text-sm sm:text-base text-[#333333]">
            <strong>ՈՒՇԱԴՐՈՒԹՅՈՒՆ.</strong> Ֆինանսական շուկաներում գործարքների
            իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ
            ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի
            կողմից անբարեխիղճ վարքագծի արդյունքում:
          </p>
        </div>

        {}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-8 uppercase tracking-wide text-center sm:text-left">
            Անհրաժեշտ տեղեկատվություն
          </h2>

          <div className="flex flex-col gap-2">
            {}
            <AccordionItem
              title="Ներդրումային ծառայությունների մատուցման կանոններ"
              isOpen={openIndex === 0}
              onClick={() => toggleAccordion(0)}
            >
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline"
                >
                  Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման
                  կանոններ
                </a>
                <p className="text-[#555555] text-sm sm:text-base w-[90%]">
                  Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման
                  կանոններ Այս կանոնները սահմանում են մեր հաճախորդների կողմից
                  մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների
                  ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման,
                  հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու
                  պայմանները, ինչպես նաև տրամադրում գործառնությունների
                  իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական
                  տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական
                  օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ <br /> <br />
                  Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին
                  համապատասխան: Արժեթղթերի Պահառության գործունեության կանոններ
                  Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող
                  գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման
                  կարգն ու պայմանները, պահառության հետ կապված
                  հարաբերությունները, ինչպես նաև պահառուի աշխատանքների
                  կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական
                  օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և
                  պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին
                  (այդ թվում` Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների
                  պահանջներին) համապատասխան: Թարմացվել
                </p>
              </div>
            </AccordionItem>

            {}
            <AccordionItem
              title="Ծառայությունների մատուցման սակագներ"
              isOpen={openIndex === 1}
              onClick={() => toggleAccordion(1)}
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline block"
                >
                  Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման
                  սակագներ
                </a>
                <a
                  href="#"
                  className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline block"
                >
                  Միջազգային շուկաներում ծառայությունների մատուցման սակագներ
                </a>
              </div>
            </AccordionItem>

            {}
            <AccordionItem
              title="Լրացուցիչ տեղեկատվություն"
              isOpen={openIndex === 2}
              onClick={() => toggleAccordion(2)}
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline block"
                >
                  «Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման
                  և կատարման» ընթացակարգ
                </a>
                <a
                  href="#"
                  className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline block"
                >
                  «Շահերի բախման սահմանափակման» ընթացակարգ
                </a>
                <a
                  href="#"
                  className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline block"
                >
                  Ֆոնդային բորսաներ
                </a>
                <a
                  href="#"
                  className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline block"
                >
                  Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ
                </a>
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInvestmentServices;
