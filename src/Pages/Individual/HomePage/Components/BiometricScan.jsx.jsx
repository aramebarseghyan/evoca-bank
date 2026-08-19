import React, { useState, useEffect } from "react";

import face1 from "../../../../assets/img/face1.png";
import face2 from "../../../../assets/img/face2.png";
import face3 from "../../../../assets/img/face3.png";
import qrCode from "../../../../assets/img/biometric-section-QR-Code.png";

const faces = [face1, face2, face3];

const POINTS = [
  { cx: 100, cy: 55 },
  { cx: 82, cy: 62 },
  { cx: 118, cy: 62 },
  { cx: 75, cy: 80 },
  { cx: 125, cy: 80 },
  { cx: 100, cy: 92 },
  { cx: 100, cy: 115 },
  { cx: 65, cy: 105 },
  { cx: 135, cy: 105 },
  { cx: 78, cy: 132 },
  { cx: 122, cy: 132 },
  { cx: 100, cy: 162 },
];

const MESH_PATH = `
  M82 62 L100 55 L118 62
  M82 62 L75 80 L100 92 L118 62 L125 80
  M75 80 L65 105 L78 132 L100 162
  M125 80 L135 105 L122 132 L100 162
  M100 92 L100 115 L100 162
  M65 105 L100 115 L135 105
  M78 132 L100 162 L122 132
`;

function BiometricSection() {
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (faces.length <= 1) return;

    const interval = setInterval(() => {
      setAnimKey((prev) => {
        const next = prev + 1;
        if (next % 2 === 0) {
          setCurrentFaceIndex((fIndex) => (fIndex + 1) % faces.length);
        }
        return next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-20 2xl:py-28 px-4 sm:px-6 md:px-10 lg:px-10 xl:px-16 2xl:px-20 flex flex-col items-center lg:flex-row lg:items-center justify-center lg:justify-between xl:justify-center max-w-[1240px] 2xl:max-w-[1480px] mx-auto select-none overflow-hidden gap-10 md:gap-6 lg:gap-10 xl:gap-16 2xl:gap-24">
      {/* 1. Դեմքի բլոկ */}
      <div className="relative w-[340px] sm:w-[400px] md:w-[500px] lg:w-[480px] xl:w-[540px] 2xl:w-[600px] h-[360px] sm:h-[420px] md:h-[520px] lg:h-[510px] xl:h-[570px] 2xl:h-[630px] self-center lg:self-auto lg:mx-0 flex items-center justify-center shrink-0 xl:order-1">
        <div className="absolute inset-x-0 top-0 bottom-4 2xl:bottom-6 rounded-full border border-dashed border-purple-200/60 pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-x-6 top-6 bottom-10 lg:bottom-12 rounded-full border border-purple-100 pointer-events-none" />

        <div className="absolute top-6 sm:top-7 md:top-8 lg:top-10 2xl:top-12 w-[300px] sm:w-[350px] md:w-[440px] lg:w-[430px] xl:w-[490px] 2xl:w-[540px] h-[250px] sm:h-[290px] md:h-[360px] lg:h-[360px] xl:h-[410px] 2xl:h-[460px] z-0 flex items-center justify-center drop-shadow-md">
          <svg
            viewBox="0 0 300 270"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 22 20 C 10 20 2 30 8 43 L 138 255 C 144 265 156 265 162 255 L 292 43 C 298 30 290 20 278 20 Z"
              fill="#6000ff"
            />
          </svg>
        </div>

        {/* Դեմքի և SVG ցանցի միասնական կոնտեյներ */}
        <div className="absolute top-1 sm:top-2 md:top-4 lg:top-4 w-[240px] sm:w-[280px] md:w-[360px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] h-[92%] z-10 flex items-center justify-center overflow-visible translate-y-3 sm:translate-y-4 md:translate-y-6 lg:translate-y-6">
          {faces.map((faceUrl, index) => (
            <img
              key={index}
              src={faceUrl}
              alt={`Biometric Scan ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain object-top transition-all duration-700 ease-in-out ${
                index === currentFaceIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}

          {/* SVG-ցանց */}
          <svg
            key={animKey}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMin meet"
            fill="none"
          >
            <path
              d={MESH_PATH}
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-[drawMesh_1.2s_ease-out_forwards]"
            />

            {POINTS.map((pt, i) => (
              <circle
                key={i}
                cx={pt.cx}
                cy={pt.cy}
                r="2.6"
                fill="#FFFFFF"
                className="animate-[fadeInPoint_0.3s_ease-out_forwards]"
                style={{ animationDelay: `${i * 0.03}s` }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* 2. Տեքստային բլոկ և QR-կոդ (Поднят выше для md: md:-mt-[80px]) */}
      <div className="w-full max-w-[360px] sm:max-w-[460px] md:max-w-full lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] flex flex-col items-start text-left shrink-0 self-center sm:self-start lg:self-center lg:pr-4 xl:order-2 -mt-[110px] md:-mt-[80px] lg:mt-0 relative z-10">
        {/* Վերնագիրը (h2) */}
        <h2 className="text-[22px] sm:text-[26px] md:text-[34px] lg:text-[28px] xl:text-[34px] 2xl:text-[42px] font-bold text-[#1c1d21] leading-[1.25] md:leading-[1.3] mb-4 md:mb-6 lg:mb-5 2xl:mb-7">
          Դարձիր Evocabank-ի հաճախորդ
          <br className="hidden xl:block" /> բիոմետրիկ նույնականացմամբ
        </h2>

        {/* Նկարագրությունը (p) */}
        <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[15px] xl:text-[16.5px] 2xl:text-[20px] text-[#6c747e] leading-[1.6] md:leading-[1.7] font-normal mb-7 md:mb-10 lg:mb-9 2xl:mb-12">
          Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH
          <br className="hidden xl:block" /> հարմարավետ հավելվածը, ստեղծիր քո
          հաշիվը և<br className="hidden xl:block" /> ստացիր քարտ
        </p>

        {/* Մոբայլ կոճակ */}
        <button className="md:hidden w-full sm:w-auto self-start sm:min-w-[230px] py-1.5 px-12 bg-[#6000ff] hover:bg-[#5200cc] active:scale-[0.98] text-white font-medium rounded-full text-[13px] transition-all shadow-md">
          Իմանալ ավելին
        </button>

        {/* Контейнер QR + Кнопка */}
        <div className="hidden md:flex md:items-end lg:items-center justify-start gap-6 md:gap-8 lg:gap-12 w-full pt-2 xl:-mt-10 2xl:-mt-10">
          <img
            src={qrCode}
            alt="EvocaTOUCH QR Code"
            className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[125px] lg:h-[125px] xl:w-[145px] xl:h-[145px] 2xl:w-[170px] 2xl:h-[170px] object-contain shrink-0"
          />
          <button className="py-2 px-12 md:py-3 md:px-14 lg:py-2.5 lg:px-16 xl:py-3 xl:px-20 2xl:py-3.5 2xl:px-24 bg-[#6000ff] hover:bg-[#5200cc] active:scale-[0.98] text-white font-medium rounded-full text-[13px] md:text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] transition-all shadow-md md:mb-1.5 lg:mb-0">
            Իմանալ ավելին
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawMesh {
          from {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
            opacity: 0;
          }
          to {
            stroke-dasharray: 600;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes fadeInPoint {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default BiometricSection;
