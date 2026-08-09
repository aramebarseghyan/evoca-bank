import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link

const MainOnlcomponent = () => {
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
      path: "/international-operators",
    },
    {
      title: "Կոմունալ վճարումներ",
      img: "https://resource.evoca.am/images/WebPayment/utility.png",
      path: "/utility-payments",
    },
    {
      title: "Ինտերնետ և TV",
      img: "https://resource.evoca.am/images/WebPayment/internettv.png",
      path: "/internet-tv",
    },
    {
      title: "ՃՈ վճարներ",
      img: "https://resource.evoca.am/images/WebPayment/roadpolice.png",
      path: "/traffic-fines",
    },
    {
      title: "Վարկային կազմակերպություններ",
      img: "https://resource.evoca.am/images/WebPayment/loan.png",
      path: "/loan-organizations",
    },
    {
      title: "Միջոցառումներ",
      img: "https://resource.evoca.am/images/WebPayment/event.png",
      path: "/events",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f4f5f7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Title */}
        <h1 className="text-center text-[40px] font-bold text-[#222222] mb-14">
          Գլխավոր
        </h1>

        {/* Container for Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((item, index) => (
            <Link
              key={index}
              to={item.path} // Указываем путь для перехода
              className="bg-white rounded-[24px] p-10 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer min-h-[300px] w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[320px] border border-gray-100 group"
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center mb-8">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-[100px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <p
                className={`text-[17px] font-medium leading-snug ${
                  item.isLogo ? "text-[#6000ff] font-bold" : "text-[#333333]"
                }`}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainOnlcomponent;
