import React, { useState } from "react";

const LoanTariffsTablePage = () => {
  // Структура меню (категории и подкатегории)
  const sidebarCategories = [
    {
      id: "consumer",
      title: "Սպառողական վարկեր",
      items: [
        "Վերանորոգման վարկ EvocaHOME",
        "Անհատական վարկ «Ներդրումային»",
        "Գույքի գրավով ապահովված վարկ",
      ],
    },
    {
      id: "mortgage",
      title: "Հիփոթեքային վարկեր",
      items: [
        "Հիփոթեքային վարկ «Երիտասարդ ընտանիքին` մատչելի բնակարան»",
        "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին",
        "Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին",
        "Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին",
        "Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր",
        "Հիփոթեքային վարկեր Զինծառայողներին",
        "Հողամասի ձեռքբերման վարկ",
        "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով",
      ],
    },
    {
      id: "auto",
      title: "Ավտովարկեր",
      items: [
        "Առաջնային շուկայից ավտոմեքենայի ձեռքբերում",
        "Երկրորդային շուկա",
      ],
    },
    {
      id: "leasing",
      title: "Լիզինգ",
      items: ["Մեքենաների լիզինգ", "Սարքավորումների լիզինգ"],
    },
    {
      id: "online",
      title: "Օնլայն վարկեր",
      items: ["EvocaONLINE վարկ", "Ապառիկ տեղում"],
    },
  ];

  // Генератор случайных данных для таблицы
  const generateRandomData = () => {
    const randomRowCount = Math.floor(Math.random() * 5) + 4; // От 4 до 8 строк
    const newData = [];

    for (let i = 1; i <= randomRowCount; i++) {
      newData.push({
        id: i,
        parameter: `Պատահական պարամետր № ${Math.floor(Math.random() * 1000)}`,
        value: `Սա պատահական գեներացված տեքստ է, արժեքը՝ ${Math.floor(
          Math.random() * 100000,
        )} ՀՀ դրամ կամ ${Math.floor(Math.random() * 20) + 5}% տոկոսադրույք:`,
      });
    }
    return newData;
  };

  // Состояния компонента
  const [expandedCategory, setExpandedCategory] = useState("mortgage"); // По умолчанию открыта Ипотека
  const [activeProduct, setActiveProduct] = useState(
    sidebarCategories[1].items[4], // Активный продукт по умолчанию (как на скрине)
  );
  const [tableData, setTableData] = useState(generateRandomData());

  // Обработчик клика по категории (свернуть/развернуть)
  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Обработчик клика по конкретному продукту
  const handleProductClick = (productName) => {
    setActiveProduct(productName);
    setTableData(generateRandomData()); // Генерируем новые случайные данные при клике
  };

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
        {/* Главный заголовок страницы */}
        <h1 className="text-xl md:text-2xl lg:text-[26px] font-bold text-gray-900 mb-8 leading-snug">
          Ֆիզիկական անձանց տրամադրվող անհատական վարկեր ըստ պրոդուկտների /
          Պայմաններ և սակագներ /
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Левый сайдбар (Аккордеон) */}
          <div className="w-full lg:w-[320px] bg-white border border-gray-200 rounded-lg shadow-sm flex-shrink-0 overflow-hidden">
            {sidebarCategories.map((category) => (
              <div
                key={category.id}
                className="border-b border-gray-100 last:border-0"
              >
                {/* Заголовок категории */}
                <div
                  onClick={() => toggleCategory(category.id)}
                  className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-800 text-sm select-none">
                    {category.title}
                  </span>
                  {/* Иконка стрелочки (меняется в зависимости от состояния) */}
                  <svg
                    className={`w-4 h-4 text-[#7034E4] transition-transform duration-200 ${
                      expandedCategory === category.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Список подкатегорий (Анимацию высоты можно добавить через framer-motion или CSS) */}
                {expandedCategory === category.id && (
                  <ul className="flex flex-col text-[13px] pb-2">
                    {category.items.map((item, index) => {
                      const isActive = activeProduct === item;
                      return (
                        <li
                          key={index}
                          onClick={() => handleProductClick(item)}
                          className={`px-4 py-3 cursor-pointer pl-6 pr-4 transition-all leading-relaxed ${
                            isActive
                              ? "text-[#7034E4] font-bold border-l-4 border-[#7034E4] bg-[#fcfaff]"
                              : "text-gray-600 hover:text-gray-900 border-l-4 border-transparent hover:bg-gray-50"
                          }`}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Правая часть: Контент с заголовком продукта и таблицей */}
          <div className="flex-1 w-full overflow-hidden">
            {/* Заголовок меняется динамически на выбранный продукт */}
            <h2 className="text-xl md:text-xl font-bold text-[#7034E4] mb-6 leading-snug">
              {activeProduct}
            </h2>

            {/* Таблица условий */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr
                      key={row.id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#faf8fd]"}
                    >
                      <td className="w-12 py-3 px-4 text-gray-400 font-medium border-b border-r border-gray-200 text-center align-top">
                        {row.id}.
                      </td>
                      <td className="w-1/3 py-3 px-4 font-semibold text-gray-700 border-b border-r border-gray-200 align-top">
                        {row.parameter}
                      </td>
                      <td className="py-3 px-4 text-gray-800 border-b border-gray-200 align-top leading-relaxed">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTariffsTablePage;
