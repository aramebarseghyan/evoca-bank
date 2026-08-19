import React from "react";
import { Link } from "react-router-dom";


import HeaderOnl from "./HeaderOnl";
import FooterOnl from "./FooterOnl";

const OnlinePayment = () => {
  
  const categories = [
    {
      title: "EVOCABANK",
      img: "https://resource.evoca.am/images/WebPayment/evoca.png",
      isLogo: true,
      path: "/evocabank",
    },
    {
      title: "Միջազգային բջջային օպերատորներ",
      img: "https://resource.evoca.am/images/WebPayment/international.png",
      path: "/evocabank", 
    },
    {
      title: "Կոմունալ վճարումներ",
      img: "https://resource.evoca.am/images/WebPayment/utility.png",
      path: "/evocabank", 
    },
    {
      title: "Ինտերնետ և TV",
      img: "https://resource.evoca.am/images/WebPayment/internettv.png",
      path: "/evocabank", 
    },
    {
      title: "ՃՈ վճարներ",
      img: "https://resource.evoca.am/images/WebPayment/roadpolice.png",
      path: "/evocabank", 
    },
    {
      title: "Վարկային կազմակերպություններ",
      img: "https://resource.evoca.am/images/WebPayment/loan.png",
      path: "/evocabank", 
    },
    {
      title: "Միջոցառումներ",
      img: "https://resource.evoca.am/images/WebPayment/event.png",
      path: "/evocabank", 
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-between">
      {}
      <HeaderOnl />

      {}
      <main className="w-full py-12 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1240px]">
          {}
          <h1 className="text-center text-[36px] lg:text-[40px] font-bold text-[#222222] mb-12">
            Գլխավոր
          </h1>

          {}
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="bg-white rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 cursor-pointer h-[260px] w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.125rem)] border border-transparent hover:border-[#6000ff] hover:bg-[#f6f0ff] group"
              >
                {}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[90px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {}
                <p
                  className={`text-[16px] font-medium leading-snug px-2 ${
                    item.isLogo
                      ? "text-[#6000ff] font-bold text-[18px]"
                      : "text-[#333333]"
                  }`}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {}
      <FooterOnl />
    </div>
  );
};

export default OnlinePayment;
