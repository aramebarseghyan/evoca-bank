import React, { useState } from "react";

// Вспомогательный компонент для аккордеона с анимацией (идентичен вашему)
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
        <span className="font-bold text-[#222222] text-sm sm:text-base text-left uppercase">
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

      {/* Обертка для плавной анимации высоты */}
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

const BusinessBonds = () => {
  // Открываем первый аккордеон по умолчанию (индекс 0)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white sm:bg-transparent pt-[30px] sm:pt-[50px] pb-16">
      <div className="max-w-[1150px] mx-auto lg:ml-[300px] lg:mx-0 px-4 sm:px-6 lg:px-8">
        {/* Верхняя текстовая часть */}
        <div className="mb-12 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p className="mb-6">
            Առաջին անգամ հայաստանյան ֆինանսական համակարգում Evocabank-ը, որպես
            նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված
            պարտատոմսերի օնլայն տեղաբաշխում` EvocaTOUCH հավելվածի միջոցով:
          </p>

          <p className="mb-6">
            <a
              href="#"
              className="text-[#6000ff] font-medium underline hover:no-underline"
            >
              Պարտատոմսերը
            </a>{" "}
            պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են
            և ունեն մի շարք առավելություններ՝
          </p>

          <ul className="flex flex-col gap-3 mb-8 pl-5 list-disc text-[#333333]">
            <li>
              Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են
              երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով
              երաշխավորված է «Ավանդների հատուցումը երաշխավորող հիմնադրամի»
              կողմից:
            </li>
            <li>
              ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները
              ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝
              ապահովելով ավելի բարձր եկամտաբերություն:
            </li>
          </ul>
        </div>

        {/* Раздел: ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Аккордеоны) */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-8 uppercase tracking-wide text-center sm:text-left">
            Անհրաժեշտ տեղեկատվություն
          </h2>

          <div className="flex flex-col gap-2">
            {/* 1. ՏԱՍՆՉՈՐՍԵՐՈՐԴ ԵՎ ՏԱՍՆՀԻՆԳԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ */}
            <AccordionItem
              title="Տասնչորսերորդ և տասնհինգերորդ թողարկում"
              isOpen={openIndex === 0}
              onClick={() => toggleAccordion(0)}
            >
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-[#6000ff] text-base sm:text-lg text-center uppercase tracking-wider">
                  Թողարկվող պարտատոմսերի պայմաններ
                </h4>

                {/* Таблица параметров */}
                <div className="overflow-x-auto border border-gray-200 rounded-xl">
                  <table className="w-full text-left border-collapse text-sm sm:text-base">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 sm:p-4 font-semibold text-[#222222] bg-gray-50 w-1/2">
                          Դաս
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]">
                          Անվանական արժեկտրոնային
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 sm:p-4 font-semibold text-[#222222] bg-gray-50">
                          Անվանական արժեք
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]">
                          10,000 ՀՀ դրամ
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]">
                          100 ԱՄՆ դոլար
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 sm:p-4 font-semibold text-[#222222] bg-gray-50">
                          Ընդհանուր ծավալ
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]">
                          3,000,000,000 ՀՀ դրամ
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]">
                          15,000,000 ԱՄՆ դոլար
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 sm:p-4 font-semibold text-[#222222] bg-gray-50">
                          Թողարկվող պարտատոմսերի քանակ
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]">
                          300,000 հատ
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]">
                          150,000 հատ
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 sm:p-4 font-semibold text-[#222222] bg-gray-50">
                          Շրջանառության ժամկետ
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]" colSpan="2">
                          36 ամիս
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 sm:p-4 font-semibold text-[#222222] bg-gray-50">
                          Արժեկտրոնային տարեկան տոկոսադրույք
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]">10%</td>
                        <td className="p-3 sm:p-4 text-[#555555]">5%</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 sm:p-4 font-semibold text-[#222222] bg-gray-50">
                          Արժեկտրոնների վճարման պարբերականություն
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]" colSpan="2">
                          Եռամսյակային
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-[#222222] bg-gray-50">
                          Տեղաբաշխող
                        </td>
                        <td className="p-3 sm:p-4 text-[#555555]" colSpan="2">
                          «Էվոկաբանկ» ԲԲԸ
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs sm:text-sm text-[#666666] italic">
                  Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի
                  03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:
                </p>

                {/* Ссылки на документы внутри аккордеона */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#"
                    className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline"
                  >
                    ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ
                  </a>
                  <a
                    href="#"
                    className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline"
                  >
                    ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ
                  </a>
                  <a
                    href="#"
                    className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline"
                  >
                    ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ
                  </a>
                </div>
              </div>
            </AccordionItem>

            {/* 2. ТУПИКОВЫЕ / ПРОШЛЫЕ ВЫПУСКИ */}
            <AccordionItem
              title="Տասներկուրորդ և տասներեքերորդ"
              isOpen={openIndex === 1}
              onClick={() => toggleAccordion(1)}
            >
              <div className="flex flex-col gap-3">
                <p className="text-[#555555] text-sm sm:text-base">
                  Տվյալ թողարկման մանրամասները, պայմանները և հարակից փաստաթղթերը
                  հասանելի են ներքևում նշված հղումներով:
                </p>
                <a
                  href="#"
                  className="text-[#6000ff] text-sm sm:text-base font-medium underline hover:no-underline"
                >
                  Ծրագրային ազդագիր և պայմաններ
                </a>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Տասներորդ և տասնմեկերորդ"
              isOpen={openIndex === 2}
              onClick={() => toggleAccordion(2)}
            >
              <div className="flex flex-col gap-3">
                <p className="text-[#555555] text-sm sm:text-base">
                  Տվյալ թողարկման մանրամասները և պայմանները:
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Հաճախ տրվող հարցեր պարտատոմսերի մասին"
              isOpen={openIndex === 3}
              onClick={() => toggleAccordion(3)}
            >
              <div className="flex flex-col gap-3">
                <p className="text-[#555555] text-sm sm:text-base">
                  Այստեղ կարող եք գտնել պատասխաններ պարտատոմսերի ձեռքբերման,
                  սպասարկման և մարման հետ կապված հիմնական հարցերին:
                </p>
              </div>
            </AccordionItem>
          </div>
        </div>

        {/* Раздел: Файлы / Документы */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#222222] mb-6">
            Փաստաթղթեր
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.evoca.am/files/global_files/1/bonds-prices-usd-30-09-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors text-[#222222] font-medium text-sm sm:text-base gap-4"
            >
              <span className="text-[#6000ff] text-xl">📄</span>
              <span>
                Դոլարային պարտատոմսերի գները 30.09.2024-29.11.2024
                ժամանակահատվածի համար
              </span>
            </a>
            <a
              href="https://www.evoca.am/files/global_files/1/bonds-prices-amd-30-09-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors text-[#222222] font-medium text-sm sm:text-base gap-4"
            >
              <span className="text-[#6000ff] text-xl">📄</span>
              <span>
                Դրամային պարտատոմսերի գները 30.09.2024-29.11.2024
                ժամանակահատվածի համար
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBonds;
