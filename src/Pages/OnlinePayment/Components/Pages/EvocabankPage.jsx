import React from "react";
import { Link } from "react-router-dom";
import HeaderOnl from "../HeaderOnl";
import FooterOnl from "../FooterOnl";

const EvocabankPage = () => {
  const evocaCards = [
    {
      title: "Վարկի մարում",
      img: "https://resource.evoca.am/images/WebPayment/loan.png",
    },
    {
      title: "Հաշվի համալրում",
      img: "https://resource.evoca.am/images/WebPayment/loan.png",
    },
    {
      title: "Քարտի համալրում",
      img: "https://resource.evoca.am/images/WebPayment/loan.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-between">
      <HeaderOnl />

      <main className="w-full py-8 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1240px]">

          <div className="text-sm text-[#6000ff] mb-8">
            <Link to="/instant-payments" className="hover:underline">
              Գլխավոր
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-600">EVOCABANK</span>
          </div>

          <h1 className="text-center text-[36px] lg:text-[40px] font-bold text-[#6000ff] mb-12">
            EVOCABANK
          </h1>

          <div className="flex flex-wrap justify-center gap-6">
            {evocaCards.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="bg-white rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 cursor-pointer h-[260px] w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] border border-transparent hover:border-[#6000ff] hover:bg-[#f6f0ff] group"
              >
                <div className="flex-1 flex items-center justify-center mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[90px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-[16px] font-medium text-[#333333]">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <FooterOnl />
    </div>
  );
};

export default EvocabankPage;
