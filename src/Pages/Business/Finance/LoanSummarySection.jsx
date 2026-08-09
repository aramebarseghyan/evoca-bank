import React from "react";
import LatestNews from "../../Individual/HomePage/Components/LatestNews";

const FactoringPage = () => {
  const tableRows = [
    {
      id: 1,
      title: "Ֆակտորինգի սահմանաչափ",
      value: "5,000,000 - 1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ",
    },
    {
      id: 2,
      title: "Հաճախորդները",
      value:
        "ՀՀ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս:",
    },
    {
      id: 3,
      title: "Ֆակտորինգային սահմանաչափի գործողության ժամկետ",
      value: "Մինչև 24 ամիս",
    },
    {
      id: 4,
      title: "Ֆինանսավորման ժամկետ",
      value: (
        <>
          <p className="mb-2">Մինչև 120 օր,</p>
          <p>
            «Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ
            համագործակցության պայմանագրի շրջանակներում - մինչև 250 օր:
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: "Ֆինանսավորման չափ",
      value: "Ներկայացված հաշիվ ապրանքագրի մինչև 90%",
    },
    {
      id: 6,
      title:
        "Ֆինանսավորման գումարի և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր",
      value: (
        <>
          <p className="mb-2">ժամկետանց գումարի համար` օրական 0.015%,</p>
          <p>ժամկետանց տոկոսագումարի համար` օրական 0.1%:</p>
        </>
      ),
    },
    {
      id: 7,
      title: "Վաղաժամկետ մարում",
      value: "Վաղաժամկետ մարման տույժեր չեն կիրառվում",
    },
    {
      id: 8,
      title: "Սահմանաչափի հաստատման վճար",
      value:
        "Սահմանաչափի 0.20% նվազագույնը 10,000 ՀՀ դրամ առավելագույնը 200,000 ՀՀ դրամ",
    },
    {
      id: 9,
      title: "Գործող սահմանաչափի ավելացում",
      value: "Ավելացվող մասի 0.20% նվազագույնը 10,000 ՀՀ դրամ",
    },
    {
      id: 10,
      title: "Սպասարկման միջնորդավճար",
      value: "0.5-3%, min 10,000 դրամ",
    },
    {
      id: 11,
      title: "Ձևակերպման վայր",
      value:
        "Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (Բացառությամբ «Հանրապետության», «Երևան Մոլ», «Էրեբունի» մասնաճյուղերի)",
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed">
      {/* Основной контент страницы */}
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        {/* Заголовок и вводный текст */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ֆակտորինգային ֆինանսավորում
          </h1>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Եթե ցանկանում եք լինել շուկայում ավելի մրցունակ, Evocabank-ը կօգնի
              Ձեզ՝ առաջարկում ենք ֆակտորինգային ֆինանսավորում:
            </p>
            <p>
              Evocabank-ն իրականացնում է ֆակտորինգային ֆինանսավորում նաև
              «Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ
              համագործակցության պայմանագրի շրջանակում:
            </p>
            <p className="font-medium text-gray-900">
              Ֆակտորինգ կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և
              ցանկացած մասնաճյուղում (Բացառությամբ «Հանրապետության», «Երևան
              Մոլ», «Էրեբունի» մասնաճյուղերի):
            </p>
          </div>
        </div>

        {/* Заголовок таблицы условий */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-wide">
          Պայմաններ և սակագներ
        </h2>

        {/* Таблица */}
        <div className="border border-purple-100 rounded-xl overflow-hidden mb-12 shadow-sm">
          <table className="w-full text-sm text-left text-gray-700">
            <tbody>
              {tableRows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`border-b border-purple-100 ${index % 2 === 1 ? "bg-purple-50/30" : "bg-white"}`}
                >
                  <td className="py-4 px-4 w-16 text-center text-gray-500 font-medium border-r border-purple-100 align-top">
                    {row.id}.
                  </td>
                  <td className="py-4 px-6 border-r border-purple-100 font-medium text-gray-800 w-1/2 align-top">
                    {row.title}
                  </td>
                  <td className="py-4 px-6 text-gray-700 align-top">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Секция Документы */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-wide">
            Փաստաթղթեր
          </h2>

          <a
            href="https://www.evoca.am"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-[#f4f2f8] hover:bg-[#ece8f5] transition-colors rounded-xl border border-purple-100 group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 text-purple-700 rounded-lg group-hover:bg-purple-200 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 15L12 18L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-semibold text-gray-900 text-sm md:text-base">
                Տեղեկատվական ամփոփագիր (Ֆակտորինգային ծառայություններ)
              </span>
            </div>
            <div className="text-purple-700 p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3V15M12 15L7 10M12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </section>
      </div>

      {/* Секция последних новостей на полную ширину (Full Width) */}
      <div className="w-full mb-16">
        <LatestNews />
      </div>
    </div>
  );
};

export default FactoringPage;
