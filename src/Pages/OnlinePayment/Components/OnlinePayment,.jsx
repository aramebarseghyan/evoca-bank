import React from "react";
import { Link } from "react-router-dom";
// Импортируем ваши специфичные шапку и футер для онлайн-платежей
import HeaderOnl from "./HeaderOnl"; // Укажите правильный путь к вашему HeaderOnl
import FooterOnl from "./FooterOnl"; // Укажите правильный путь к вашему FooterOnl

const EvocabankPage = () => {
  // Массив с данными для внутренних карточек (с вашими ссылками на картинки)
  const services = [
    {
      title: "Վարկի մարում",
      img: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png",
      path: "/evocabank/loan-repayment",
    },
    {
      title: "Հաշվի համալրում",
      img: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png",
      path: "/evocabank/account-replenishment",
    },
    {
      title: "Քարտի համալրում",
      img: "https://resource.evoca.am/images/webPayment/cardtocard.png",
      path: "/evocabank/card-replenishment",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-between">
      {/* Шапка онлайн-платежей */}
      <HeaderOnl />

      {/* Основной контент страницы */}
      <main className="w-full py-12 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-[1240px] mx-auto">
          {/* Хлебные крошки (Breadcrumbs) */}
          <div className="flex items-center gap-3 mb-10 text-[16px]">
            <Link to="/" className="text-[#6000ff] hover:underline">
              Գլխավոր
            </Link>
            <span className="text-[#a5a5a5]">/</span>
            <span className="text-[#a5a5a5]">EVOCABANK</span>
          </div>

          {/* Заголовок */}
          <h1 className="text-center text-[40px] font-bold text-[#6000ff] mb-14 uppercase">
            EVOCABANK
          </h1>

          {/* Контейнер с карточками */}
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="bg-white rounded-[24px] p-10 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer min-h-[300px] w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[320px] border border-gray-100 group"
              >
                {/* Картинка */}
                <div className="flex-1 flex items-center justify-center mb-8">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Текст */}
                <p className="text-[18px] font-medium text-[#333333] leading-snug">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Подвал онлайн-платежей */}
      <FooterOnl />
    </div>
  );
};

export default EvocabankPage;
