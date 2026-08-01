import React from "react";

import statue from "../../../assets/statue.png";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import shape3 from "../../../assets/shape3.png";
import shape4 from "../../../assets/shape4.png";
import shape5 from "../../../assets/shape5.png";
import shape6 from "../../../assets/shape6.png";
import evocaBestShape from "../../../assets/evoca-best-shape1.png";
import roundBg from "../../../assets/round__bg.png";

const EvocaBackground = () => {
  const cards = [
    {
      id: 1,
      badge: "Թվային քարտեր",
      title: "Evoca Digital քարտ",
      desc: "Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:",
    },
    {
      id: 2,
      badge: "Նվեր քարտեր",
      title: "Evoca Gift Card",
      desc: "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:",
    },
    {
      id: 3,
      badge: "Նոր հավելված",
      title: "EvocaTOUCH 2",
      desc: "EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:",
    },
    {
      id: 4,
      badge: "Օնլայն վճարումներ",
      title: "Արագ online վճարումներ",
      desc: "Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով պարզ և արագ: Այն հասանելի է 24/7:",
      hasIcon: true,
    },
  ];

  const ringOffsets = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div className="w-full relative py-6 lg:py-10">
      {/* ========================================================
          MOBILE, SM & MD LAYOUT
         ======================================================== */}
      <div className="lg:hidden relative w-full min-h-[360px] sm:min-h-[420px] md:min-h-[600px] bg-[#6F00FF] rounded-tl-[5rem] sm:rounded-tl-[6.5rem] md:rounded-tl-[8rem] overflow-hidden pt-12 sm:pt-12 md:pt-20 flex flex-col items-center sm:items-start md:items-center">
        <img
          src={statue}
          alt="Statue"
          className="absolute -left-16 -bottom-4 sm:-left-[100px] sm:-bottom-4 md:-left-[70px] md:-bottom-4 w-[65%] sm:w-[310px] md:w-[290px] object-contain z-10 pointer-events-none opacity-40 sm:opacity-30 md:opacity-45"
        />

        <img
          src={shape1}
          alt="Shape 1"
          className="absolute top-[16px] right-[6%] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain z-10 pointer-events-none"
          style={{ animation: "moveUpRight 3s ease-in-out infinite" }}
        />
        <img
          src={shape3}
          alt="Shape 3"
          className="absolute top-[18px] left-[6%] w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 object-contain z-10 pointer-events-none"
          style={{ animation: "moveDownLeft 3.5s ease-in-out infinite" }}
        />
        <img
          src={shape4}
          alt="Shape 4"
          className="absolute top-[115px] right-[4%] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain z-10 pointer-events-none"
          style={{ animation: "moveHorizontal 2.8s ease-in-out infinite" }}
        />
        <img
          src={shape5}
          alt="Shape 5"
          className="absolute bottom-[10px] right-[8%] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain z-10 pointer-events-none"
          style={{ animation: "moveDownRight 3.2s ease-in-out infinite" }}
        />

        <div className="relative z-20 px-6 w-full sm:px-0 sm:pl-[50px] sm:pr-6 sm:max-w-none md:max-w-[620px] md:pl-0 md:translate-x-[60px] text-left mt-[75px] sm:mt-[80px] md:-mt-[5px]">
          <h2 className="text-white text-[22px] sm:text-[26px] md:text-[34px] font-extrabold tracking-tight">
            Լավագույնը Evocabank-ից
          </h2>
        </div>

        <div className="relative z-20 mt-4 md:mt-8 flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible hide-scrollbar pb-6 md:pb-16 w-full px-6 sm:px-0 sm:pl-[50px] sm:pr-0 sm:max-w-none md:max-w-[620px] md:pl-0 md:translate-x-[60px]">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[280px] sm:w-[270px] md:w-auto shrink-0 bg-[#ffffff] rounded-[24px] p-6 flex flex-col justify-between relative shadow-sm"
            >
              <div>
                <div className="inline-block bg-[#f2f4f7] text-[#6F00FF] text-[12px] font-bold px-3 py-1 rounded-lg mb-3">
                  {card.badge}
                </div>
                <h3 className="text-[#222222] font-extrabold text-[18px] leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="hidden md:block text-[#6c747e] text-[13px] leading-relaxed mt-2">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-6 sm:w-10 md:hidden" />
        </div>
      </div>

      {/* ========================================================
          LG DESKTOP LAYOUT (до 1280px)
         ======================================================== */}
      <div className="hidden lg:block xl:hidden relative w-full max-w-[1440px] mx-auto min-h-[820px] overflow-hidden">
        <div className="relative w-full bg-[#6F00FF] rounded-tl-[160px] rounded-br-[100px] pt-14 pb-36 px-12 min-h-[340px]">
          <div className="absolute top-[30px] left-[-30px] w-[550px] h-[550px] pointer-events-none z-20 opacity-90">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {Array.from({ length: 8 }).map((_, ringIndex) => {
                const radius = 35 + ringIndex * 18;
                const dotsCount = 10 + ringIndex * 3;
                const offsetAngleRad = (ringOffsets[ringIndex] * Math.PI) / 180;
                const direction =
                  Math.floor(ringIndex / 2) % 2 === 0 ? "normal" : "reverse";
                return (
                  <g
                    key={ringIndex}
                    style={{
                      transformOrigin: "200px 200px",
                      animation: `rotate360 40s linear infinite ${direction}`,
                    }}
                  >
                    {Array.from({ length: dotsCount }).map((_, dotIndex) => {
                      const angle =
                        (dotIndex / dotsCount) * 2 * Math.PI + offsetAngleRad;
                      const cx = 200 + radius * Math.cos(angle);
                      const cy = 200 + radius * Math.sin(angle);
                      const angleDeg = ((angle + Math.PI / 2) * 180) / Math.PI;
                      return (
                        <ellipse
                          key={dotIndex}
                          cx={cx}
                          cy={cy}
                          rx={3.6}
                          ry={2.6}
                          transform={`rotate(${angleDeg}, ${cx}, ${cy})`}
                          fill="#3b82f6"
                        />
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>
          <img
            src={shape1}
            alt="Shape 1"
            className="absolute top-10 left-[28%] w-12 h-12 object-contain pointer-events-none z-10"
            style={{ animation: "moveUpRight 4s ease-in-out infinite" }}
          />
          <img
            src={shape4}
            alt="Shape 4"
            className="absolute top-12 right-[24%] w-14 h-14 object-contain pointer-events-none z-10"
            style={{ animation: "moveHorizontal 3.5s ease-in-out infinite" }}
          />
          <img
            src={shape3}
            alt="Shape 3"
            className="absolute top-10 right-[6%] w-12 h-12 object-contain pointer-events-none z-10"
            style={{ animation: "moveDownLeft 4.5s ease-in-out infinite" }}
          />
          <img
            src={evocaBestShape}
            alt="Evoca Best Shape"
            className="absolute top-[80px] right-[14%] w-[180px] h-[180px] object-contain pointer-events-none z-10 opacity-80"
            style={{ animation: "moveUpRight 5s ease-in-out infinite" }}
          />
        </div>

        <div className="h-[240px] w-full relative pointer-events-none overflow-hidden flex justify-end">
          <img
            src={roundBg}
            alt="Round BG"
            className="w-full h-full object-fill pointer-events-none"
          />
        </div>

        <div className="relative w-full bg-[#6F00FF] rounded-bl-[100px] rounded-tr-[100px] pt-36 pb-16 px-12 min-h-[310px]">
          <img
            src={shape2}
            alt="Shape 2"
            className="absolute bottom-8 left-[22%] w-10 h-10 object-contain pointer-events-none z-10"
            style={{ animation: "moveUpLeft 3.8s ease-in-out infinite" }}
          />
          <img
            src={shape5}
            alt="Shape 5"
            className="absolute bottom-8 right-[8%] w-14 h-14 object-contain pointer-events-none z-10"
            style={{ animation: "moveDownRight 4.2s ease-in-out infinite" }}
          />
          <img
            src={shape6}
            alt="Shape 6"
            className="absolute bottom-12 left-[10%] w-12 h-12 object-contain pointer-events-none z-10 opacity-70"
            style={{ animation: "moveHorizontal 4s ease-in-out infinite" }}
          />
        </div>

        <img
          src={statue}
          alt="Statue"
          className="absolute -left-[170px] top-[75px] h-[480px] w-auto max-w-none object-contain object-left-top z-30 pointer-events-none opacity-100"
        />

        <div className="absolute top-[170px] left-0 w-full pl-[140px] pr-8 z-40">
          <h2 className="text-white text-[34px] font-extrabold tracking-tight mb-6">
            Լավագույնը Evocabank-ից
          </h2>
          <div className="grid grid-cols-2 gap-6 max-w-[960px]">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`bg-[#ffffff] rounded-[28px] p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[220px] relative ${index >= 2 ? "translate-y-[70px]" : ""}`}
              >
                <div>
                  <div className="inline-block bg-[#f2f4f7] text-[#6F00FF] text-[12px] font-bold px-3 py-1 rounded-lg mb-3">
                    {card.badge}
                  </div>
                  <h3 className="text-[#222222] font-extrabold text-[20px] leading-snug mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#6c747e] text-[13.5px] leading-relaxed mt-1">
                    {card.desc}
                  </p>
                </div>
                {card.hasIcon && (
                  <div className="absolute bottom-5 right-5 w-10 h-10 bg-[#EFE8FF] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E2D5FF] transition-colors">
                    <svg
                      className="w-4 h-4 text-[#6F00FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          XL & 2XL DESKTOP LAYOUT (от 1280px и выше)
         ======================================================== */}
      <div className="hidden xl:block relative w-full max-w-[1440px] 2xl:max-w-[1650px] mx-auto min-h-[980px] 2xl:min-h-[1100px] overflow-hidden rounded-tl-[240px] rounded-bl-[100px] bg-[#6F00FF]">
        {/* ФОН */}
        <div className="absolute top-[280px] 2xl:top-[340px] right-0 w-[96%] h-[460px] 2xl:h-[520px] pointer-events-none z-0">
          <img
            src={roundBg}
            alt="Round BG Shape"
            className="w-full h-full object-fill"
          />
        </div>

        {/* ԿԵՏԻԿՆԵՐԻ ՇՐՇԱՆ (SVG) */}
        <div className="absolute left-[130px] 2xl:left-[180px] top-[40px] w-[600px] 2xl:w-[700px] h-[600px] 2xl:h-[700px] pointer-events-none z-20 opacity-90">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {Array.from({ length: 8 }).map((_, ringIndex) => {
              const radius = 35 + ringIndex * 18;
              const dotsCount = 10 + ringIndex * 3;
              const offsetAngleRad = (ringOffsets[ringIndex] * Math.PI) / 180;
              const direction =
                Math.floor(ringIndex / 2) % 2 === 0 ? "normal" : "reverse";
              return (
                <g
                  key={ringIndex}
                  style={{
                    transformOrigin: "200px 200px",
                    animation: `rotate360 40s linear infinite ${direction}`,
                  }}
                >
                  {Array.from({ length: dotsCount }).map((_, dotIndex) => {
                    const angle =
                      (dotIndex / dotsCount) * 2 * Math.PI + offsetAngleRad;
                    const cx = 200 + radius * Math.cos(angle);
                    const cy = 200 + radius * Math.sin(angle);
                    const angleDeg = ((angle + Math.PI / 2) * 180) / Math.PI;
                    return (
                      <ellipse
                        key={dotIndex}
                        cx={cx}
                        cy={cy}
                        rx={3.6}
                        ry={2.6}
                        transform={`rotate(${angleDeg}, ${cx}, ${cy})`}
                        fill="#3b82f6"
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Фигуры поверх фона */}
        <img
          src={shape1}
          alt="Shape 1"
          className="absolute left-[36%] top-8 w-14 h-14 object-contain pointer-events-none z-10"
          style={{ animation: "moveUpRight 4s ease-in-out infinite" }}
        />
        <img
          src={shape4}
          alt="Shape 4"
          className="absolute right-[16%] top-10 w-16 h-16 object-contain pointer-events-none z-10"
          style={{ animation: "moveHorizontal 3.5s ease-in-out infinite" }}
        />
        <img
          src={shape3}
          alt="Shape 3"
          className="absolute right-[3%] top-8 w-14 h-14 object-contain pointer-events-none z-10"
          style={{ animation: "moveDownLeft 4.5s ease-in-out infinite" }}
        />
        <img
          src={evocaBestShape}
          alt="Evoca Best Shape"
          className="absolute right-[8%] top-[60px] 2xl:top-[80px] w-[230px] 2xl:w-[280px] h-[230px] 2xl:h-[280px] object-contain pointer-events-none z-10 opacity-80"
          style={{ animation: "moveUpRight 5s ease-in-out infinite" }}
        />
        <img
          src={shape2}
          alt="Shape 2"
          className="absolute left-[30%] bottom-12 w-12 h-12 object-contain pointer-events-none z-10"
          style={{ animation: "moveUpLeft 3.8s ease-in-out infinite" }}
        />
        <img
          src={shape5}
          alt="Shape 5"
          className="absolute right-[6%] bottom-10 w-16 h-16 object-contain pointer-events-none z-10"
          style={{ animation: "moveDownRight 4.2s ease-in-out infinite" }}
        />
        <img
          src={shape6}
          alt="Shape 6"
          className="absolute left-[16%] bottom-14 w-14 h-14 object-contain pointer-events-none z-10 opacity-70"
          style={{ animation: "moveHorizontal 4s ease-in-out infinite" }}
        />

        {/* Արձան */}
        <img
          src={statue}
          alt="Statue"
          className="absolute left-[240px] 2xl:left-[280px] top-[90px] 2xl:top-[120px] h-[640px] 2xl:h-[730px] w-auto max-w-none object-contain object-left-top z-30 pointer-events-none opacity-100"
        />

        {/* Քարտերի կոնտեյներ + Վերնագիր */}
        <div className="absolute top-[180px] 2xl:top-[220px] left-0 w-full pl-[560px] 2xl:pl-[640px] pr-12 z-40">
          <h2 className="text-white text-[40px] 2xl:text-[48px] font-extrabold tracking-tight mb-8">
            Լավագույնը Evocabank-ից
          </h2>

          {/* Увеличенная ширина всей сетки (max-w-[880px] / 2xl:max-w-[1020px]) для более широких карточек */}
          <div className="grid grid-cols-2 gap-7 2xl:gap-9 max-w-[880px] 2xl:max-w-[1020px]">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`bg-[#ffffff] rounded-[28px] p-7 2xl:p-9 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[260px] 2xl:min-h-[310px] relative ${index >= 2 ? "translate-y-[80px] 2xl:translate-y-[100px]" : ""}`}
              >
                <div>
                  <div className="inline-block bg-[#f2f4f7] text-[#6F00FF] text-[12px] 2xl:text-[14px] font-bold px-3 py-1 2xl:px-3.5 2xl:py-1 rounded-lg mb-3">
                    {card.badge}
                  </div>
                  <h3 className="text-[#222222] font-extrabold text-[20px] 2xl:text-[24px] leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#6c747e] text-[13.5px] 2xl:text-[15.5px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                {card.hasIcon && (
                  <div className="absolute bottom-6 right-6 2xl:bottom-7 2xl:right-7 w-10 h-10 2xl:w-12 2xl:h-12 bg-[#EFE8FF] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E2D5FF] transition-colors">
                    <svg
                      className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#6F00FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes moveUpRight {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(12px, -14px) rotate(18deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes moveDownLeft {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-14px, 12px) rotate(-22deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes moveHorizontal {
          0% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(-16px) rotate(25deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }

        @keyframes moveDownRight {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, 12px) scale(1.15); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes moveUpLeft {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-12px, -12px) rotate(-15deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default EvocaBackground;
