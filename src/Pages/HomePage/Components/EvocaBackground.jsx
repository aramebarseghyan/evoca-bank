import React from "react";

import statue from "../../../assets/statue.png";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import shape3 from "../../../assets/shape3.png";
import shape4 from "../../../assets/shape4.png";

const EvocaBackground = () => {
  const cards = [
    { id: 1, badge: "Թվային քարտեր", title: "Evoca Digital քարտ" },
    { id: 2, badge: "Նվեր քարտեր", title: "Evoca Gift Card" },
    { id: 3, badge: "Նոր հավելված", title: "EvocaTOUCH 2" },
    { id: 4, badge: "Օնլայն վճարումներ", title: "Արագ online վճարումներ" },
  ];

  return (
    <div className="relative w-full min-h-[360px] bg-[#6F00FF] rounded-tl-[3.5rem] overflow-hidden pt-16">
      <img
        src={statue}
        alt="Statue"
        className="absolute -left-22 -bottom-2 w-[69%] max-w-[340px] object-contain z-0 pointer-events-none opacity-40"
      />

      <img
        src={shape1}
        alt="Shape"
        className="absolute top-4 left-[10%] w-14 h-14 object-contain z-0 pointer-events-none"
        style={{ animation: "pathOne 8s ease-in-out infinite" }}
      />
      <img
        src={shape2}
        alt="Shape"
        className="absolute top-10 right-6 w-16 h-16 object-contain z-0 pointer-events-none"
        style={{ animation: "pathTwo 7s ease-in-out infinite" }}
      />
      <img
        src={shape3}
        alt="Shape"
        className="absolute bottom-6 right-[35%] w-20 h-20 object-contain z-0 pointer-events-none"
        style={{ animation: "pathThree 9s ease-in-out infinite" }}
      />
      <img
        src={shape4}
        alt="Shape"
        className="absolute top-[45%] left-[28%] w-6 h-6 object-contain z-0 pointer-events-none"
        style={{ animation: "pathFour 5s ease-in-out infinite" }}
      />

      <div className="relative z-10 mt-11 px-6">
        <h2 className="text-white text-[22px] font-extrabold tracking-tight whitespace-nowrap">
          Լավագույնը Evocabank-ից
        </h2>
      </div>

      <div className="relative z-20 mt-6 flex gap-4 overflow-x-auto hide-scrollbar pb-4 [&>div:first-child]:ml-6 [&>div:last-child]:mr-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[290px] shrink-0 bg-white rounded-[20px] p-5 pb-[39px] cursor-pointer flex flex-col"
          >
            <div className="self-start bg-[#f2f4f7] text-[#4A148C] text-[12px] font-bold px-3 py-1 rounded-md">
              {card.badge}
            </div>
            <h3 className="text-[#333333] font-extrabold text-[17px] leading-tight mt-3">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes pathOne {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(40px, -30px) rotate(35deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        
        @keyframes pathTwo {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-45px, 35px) rotate(-30deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }

        @keyframes pathThree {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-50px, -40px) rotate(45deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }

        @keyframes pathFour {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: translate(35px, 30px) scale(1.3) rotate(25deg); opacity: 1; }
          100% { transform: translate(0px, 0px) scale(1) rotate(0deg); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default EvocaBackground;
