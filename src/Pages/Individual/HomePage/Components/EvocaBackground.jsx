import React, { useEffect } from "react";

import statue from "../../../../assets/img/statue.png";
import shape1 from "../../../../assets/img/shape1.png";
import shape2 from "../../../../assets/img/shape2.png";
import shape3 from "../../../../assets/img/shape3.png";
import shape4 from "../../../../assets/img/shape4.png";
import shape5 from "../../../../assets/img/shape5.png";
import shape6 from "../../../../assets/img/shape6.png";
import evocaBestShape from "../../../../assets/img/evoca-best-shape1.png";
import roundBg from "../../../../assets/img/round__bg.png";

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
  },
];

const ringOffsets = [0, 45, 90, 135, 180, 225, 270, 315];

const AnimatedShape = ({ src, alt, className, anim }) => (
  <img
    src={src}
    alt={alt}
    className={`absolute object-contain pointer-events-none z-10 ${className}`}
    style={{ animation: `${anim} ease-in-out infinite` }}
  />
);

const SvgRings = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {Array.from({ length: 8 }).map((_, i) => {
      const radius = 35 + i * 18,
        dotsCount = 10 + i * 3,
        offsetAngleRad = (ringOffsets[i] * Math.PI) / 180;
      const direction = Math.floor(i / 2) % 2 === 0 ? "normal" : "reverse";
      return (
        <g
          key={i}
          style={{
            transformOrigin: "200px 200px",
            animation: `rotate360 40s linear infinite ${direction}`,
          }}
        >
          {Array.from({ length: dotsCount }).map((_, j) => {
            const angle = (j / dotsCount) * 2 * Math.PI + offsetAngleRad;
            const cx = 200 + radius * Math.cos(angle),
              cy = 200 + radius * Math.sin(angle);
            const angleDeg = ((angle + Math.PI / 2) * 180) / Math.PI;
            return (
              <ellipse
                key={j}
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
);

const EvocaBackground = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("is-visible", e.isIntersecting),
        ),
      { rootMargin: "0px 0px -50px 0px", threshold: 0.1 },
    );
    document
      .querySelectorAll(".cards-wrapper")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const renderCard = (card, index, type) => {
    const isMobile = type === "mobile",
      isLg = type === "lg";

    const wrapCls = isMobile
      ? "w-[280px] sm:w-[270px] md:w-auto shrink-0 relative"
      : `h-full ${index >= 2 ? (isLg ? "translate-y-[70px]" : "translate-y-[80px] 2xl:translate-y-[100px]") : ""}`;
    const innerCls = `bg-[#ffffff] flex flex-col justify-between relative shadow-xl h-full w-full ${isMobile ? "rounded-[24px] p-6 shadow-sm" : isLg ? "rounded-[28px] p-7 hover:shadow-2xl transition-all duration-300 min-h-[220px]" : "rounded-[28px] p-7 2xl:p-9 hover:shadow-2xl transition-all duration-300 min-h-[260px] 2xl:min-h-[310px]"}`;
    const badgeCls = `inline-block bg-[#f2f4f7] text-[#6F00FF] font-bold rounded-lg mb-3 ${isMobile || isLg ? "text-[12px] px-3 py-1" : "text-[12px] 2xl:text-[14px] px-3 py-1 2xl:px-3.5 2xl:py-1"}`;
    const titleCls = `text-[#222222] font-extrabold leading-snug ${isMobile ? "text-[18px] mb-2" : isLg ? "text-[20px] mb-2" : "text-[20px] 2xl:text-[24px] mb-3"}`;
    const descCls = `text-[#6c747e] leading-relaxed ${isMobile ? "hidden md:block text-[13px] mt-2" : isLg ? "text-[13.5px] mt-1" : "text-[13.5px] 2xl:text-[15.5px]"}`;

    return (
      <div key={card.id} className={wrapCls}>
        <div className="scroll-animate h-full w-full">
          <div className={innerCls}>
            <div>
              <div className={badgeCls}>{card.badge}</div>
              <h3 className={titleCls}>{card.title}</h3>
              <p className={descCls}>{card.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative py-6 lg:py-10">
      {/* 1. MOBILE BLOCK */}
      <div className="lg:hidden relative w-full min-h-[360px] sm:min-h-[420px] md:min-h-[600px] bg-[#6F00FF] rounded-tl-[5rem] sm:rounded-tl-[6.5rem] md:rounded-tl-[8rem] overflow-hidden pt-12 sm:pt-12 md:pt-20 flex flex-col items-center sm:items-start md:items-center">
        <img
          src={statue}
          alt="Statue"
          className="absolute -left-16 -bottom-4 sm:-left-[100px] sm:-bottom-4 md:-left-[70px] md:-bottom-4 w-[65%] sm:w-[310px] md:w-[290px] object-contain z-10 pointer-events-none opacity-40 sm:opacity-30 md:opacity-45"
        />
        <AnimatedShape
          src={shape1}
          alt="Shape 1"
          className="top-[16px] right-[6%] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14"
          anim="moveUpRight 3s"
        />
        <AnimatedShape
          src={shape3}
          alt="Shape 3"
          className="top-[18px] left-[6%] w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13"
          anim="moveDownLeft 3.5s"
        />
        <AnimatedShape
          src={shape4}
          alt="Shape 4"
          className="top-[115px] right-[4%] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14"
          anim="moveHorizontal 2.8s"
        />
        <AnimatedShape
          src={shape5}
          alt="Shape 5"
          className="bottom-[10px] right-[8%] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14"
          anim="moveDownRight 3.2s"
        />

        <div className="relative z-20 px-6 w-full sm:px-0 sm:pl-[50px] sm:pr-6 sm:max-w-none md:max-w-[620px] md:pl-0 md:translate-x-[60px] text-left mt-[75px] sm:mt-[80px] md:-mt-[5px]">
          <h2 className="text-white text-[22px] sm:text-[26px] md:text-[34px] font-extrabold tracking-tight">
            Լավագույնը Evocabank-ից
          </h2>
        </div>

        <div className="cards-wrapper relative z-20 mt-4 md:mt-8 flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible hide-scrollbar pb-6 md:pb-16 w-full px-6 sm:px-0 sm:pl-[50px] sm:pr-0 sm:max-w-none md:max-w-[620px] md:pl-0 md:translate-x-[60px]">
          {cards.map((c, i) => renderCard(c, i, "mobile"))}
          <div className="shrink-0 w-6 sm:w-10 md:hidden" />
        </div>
      </div>

      {/* 2. LG BLOCK */}
      <div className="hidden lg:block xl:hidden relative w-full max-w-[1440px] mx-auto min-h-[820px] overflow-hidden">
        <div className="relative w-full bg-[#6F00FF] rounded-tl-[160px] rounded-br-[100px] pt-14 pb-36 px-12 min-h-[340px]">
          <div className="absolute top-[30px] left-[-30px] w-[550px] h-[550px] pointer-events-none z-20 opacity-90">
            <SvgRings />
          </div>
          <AnimatedShape
            src={shape1}
            alt="Shape 1"
            className="top-10 left-[28%] w-12 h-12"
            anim="moveUpRight 4s"
          />
          <AnimatedShape
            src={shape4}
            alt="Shape 4"
            className="top-12 right-[24%] w-14 h-14"
            anim="moveHorizontal 3.5s"
          />
          <AnimatedShape
            src={shape3}
            alt="Shape 3"
            className="top-10 right-[6%] w-12 h-12"
            anim="moveDownLeft 4.5s"
          />
          <AnimatedShape
            src={evocaBestShape}
            alt="Best Shape"
            className="top-[80px] right-[14%] w-[180px] h-[180px] opacity-80"
            anim="moveUpRight 5s"
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
          <AnimatedShape
            src={shape2}
            alt="Shape 2"
            className="bottom-8 left-[22%] w-10 h-10"
            anim="moveUpLeft 3.8s"
          />
          <AnimatedShape
            src={shape5}
            alt="Shape 5"
            className="bottom-8 right-[8%] w-14 h-14"
            anim="moveDownRight 4.2s"
          />
          <AnimatedShape
            src={shape6}
            alt="Shape 6"
            className="bottom-12 left-[10%] w-12 h-12 opacity-70"
            anim="moveHorizontal 4s"
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
          <div className="cards-wrapper grid grid-cols-2 gap-6 max-w-[960px]">
            {cards.map((c, i) => renderCard(c, i, "lg"))}
          </div>
        </div>
      </div>

      {/* 3. XL BLOCK */}
      <div className="hidden xl:block relative w-full max-w-[1440px] 2xl:max-w-full mx-auto min-h-[980px] 2xl:min-h-[1100px] overflow-hidden rounded-tl-[240px] rounded-bl-[100px] bg-[#6F00FF]">
        <div className="absolute top-[280px] 2xl:top-[340px] right-0 w-[96%] h-[460px] 2xl:h-[520px] pointer-events-none z-0">
          <img
            src={roundBg}
            alt="Round BG Shape"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="absolute left-[130px] 2xl:left-[180px] top-[40px] w-[600px] 2xl:w-[700px] h-[600px] 2xl:h-[700px] pointer-events-none z-20 opacity-90">
          <SvgRings />
        </div>
        <AnimatedShape
          src={shape1}
          alt="Shape 1"
          className="left-[36%] top-8 w-14 h-14"
          anim="moveUpRight 4s"
        />
        <AnimatedShape
          src={shape4}
          alt="Shape 4"
          className="right-[16%] top-10 w-16 h-16"
          anim="moveHorizontal 3.5s"
        />
        <AnimatedShape
          src={shape3}
          alt="Shape 3"
          className="right-[3%] top-8 w-14 h-14"
          anim="moveDownLeft 4.5s"
        />
        <AnimatedShape
          src={evocaBestShape}
          alt="Best Shape"
          className="right-[8%] top-[60px] 2xl:top-[80px] w-[230px] 2xl:w-[280px] h-[230px] 2xl:h-[280px] opacity-80"
          anim="moveUpRight 5s"
        />
        <AnimatedShape
          src={shape2}
          alt="Shape 2"
          className="left-[30%] bottom-12 w-12 h-12"
          anim="moveUpLeft 3.8s"
        />
        <AnimatedShape
          src={shape5}
          alt="Shape 5"
          className="right-[6%] bottom-10 w-16 h-16"
          anim="moveDownRight 4.2s"
        />
        <AnimatedShape
          src={shape6}
          alt="Shape 6"
          className="left-[16%] bottom-14 w-14 h-14 opacity-70"
          anim="moveHorizontal 4s"
        />

        <img
          src={statue}
          alt="Statue"
          className="absolute left-[240px] 2xl:left-[280px] top-[90px] 2xl:top-[120px] h-[640px] 2xl:h-[730px] w-auto max-w-none object-contain object-left-top z-30 pointer-events-none opacity-100"
        />

        <div className="absolute top-[180px] 2xl:top-[220px] left-0 w-full pl-[560px] 2xl:pl-[640px] pr-12 z-40">
          <h2 className="text-white text-[40px] 2xl:text-[48px] font-extrabold tracking-tight mb-8">
            Լավագույնը Evocabank-ից
          </h2>
          <div className="cards-wrapper grid grid-cols-2 gap-7 2xl:gap-5 max-w-[880px] 2xl:max-w-[1020px]">
            {cards.map((c, i) => renderCard(c, i, "xl"))}
          </div>
        </div>
      </div>

      <style>{`
        .scroll-animate { opacity: 0; transform: translateY(40px); transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); will-change: opacity, transform; }
        .cards-wrapper.is-visible .scroll-animate { opacity: 1; transform: translateY(0); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes rotate360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes moveUpRight { 0% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(12px, -14px) rotate(18deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
        @keyframes moveDownLeft { 0% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-14px, 12px) rotate(-22deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
        @keyframes moveHorizontal { 0% { transform: translateX(0) rotate(0deg); } 50% { transform: translateX(-16px) rotate(25deg); } 100% { transform: translateX(0) rotate(0deg); } }
        @keyframes moveDownRight { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(10px, 12px) scale(1.15); } 100% { transform: translate(0, 0) scale(1); } }
        @keyframes moveUpLeft { 0% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-12px, -12px) rotate(-15deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
      `}</style>
    </div>
  );
};

export default EvocaBackground;
