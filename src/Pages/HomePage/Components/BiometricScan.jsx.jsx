import React, { useState, useEffect } from "react";

import face1 from "/src/assets/face1.png";
import face2 from "/src/assets/face2.png";
import face3 from "/src/assets/face3.png";
import qrCode from "/src/assets/biometric-section-QR-Code.png";

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
    <section className="w-full bg-white py-10 md:py-14 xl:py-16 2xl:py-24 px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20 flex flex-col items-start xl:flex-row xl:items-center justify-center xl:justify-between max-w-[1200px] 2xl:max-w-[1440px] mx-auto select-none overflow-hidden gap-10 xl:gap-14 2xl:gap-24">
      {/* 1. Блок биометрического сканирования */}
      <div className="relative w-[300px] sm:w-[350px] md:w-[380px] xl:w-[460px] 2xl:w-[520px] h-[330px] sm:h-[380px] md:h-[410px] xl:h-[470px] 2xl:h-[530px] self-center xl:self-auto xl:mx-0 flex items-center justify-center shrink-0">
        {/* Анимированные пунктирные круги на фоне */}
        <div className="absolute inset-x-0 top-0 bottom-4 2xl:bottom-6 rounded-full border border-dashed border-purple-200/60 pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-x-6 top-6 bottom-10 2xl:bottom-12 rounded-full border border-purple-100 pointer-events-none" />

        {/* Фиолетовый треугольник */}
        <div className="absolute top-6 sm:top-7 md:top-8 xl:top-10 2xl:top-12 w-[270px] sm:w-[310px] md:w-[350px] xl:w-[410px] 2xl:w-[460px] h-[220px] sm:h-[260px] md:h-[290px] xl:h-[340px] 2xl:h-[380px] z-0 flex items-center justify-center drop-shadow-md">
          <svg
            viewBox="0 0 300 270"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 22 20 C 10 20 2 30 8 43 L 138 255 C 144 265 156 265 162 255 L 292 43 C 298 30 290 20 278 20 Z"
              fill="#6200EE"
            />
          </svg>
        </div>

        {/* Контейнер с лицом и SVG-сеткой */}
        <div className="absolute top-1 sm:top-2 md:top-3 xl:top-4 2xl:top-5 w-[220px] sm:w-[255px] md:w-[290px] xl:w-[340px] 2xl:w-[385px] h-[92%] z-10 flex items-center justify-center overflow-visible">
          {faces.map((faceUrl, index) => (
            <img
              key={index}
              src={faceUrl}
              alt={`Biometric Scan ${index + 1}`}
              className={`absolute top-0 w-full h-full object-contain object-top transition-all duration-700 ease-in-out ${
                index === currentFaceIndex
                  ? "opacity-100 scale-100 translate-y-3 sm:translate-y-4 md:translate-y-5 xl:translate-y-6"
                  : "opacity-0 scale-105 translate-y-3 sm:translate-y-4 md:translate-y-5 xl:translate-y-6"
              }`}
            />
          ))}

          {/* SVG-сетка поверх лица */}
          <svg
            key={animKey}
            className="absolute inset-0 w-full h-full pointer-events-none z-20 translate-y-3 sm:translate-y-4 md:translate-y-5 xl:translate-y-6"
            viewBox="0 0 200 200"
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

      {/* 2. Текстовый блок и QR-код */}
      {/* Ավելացվել են max-w-[340px] sm:max-w-[440px] md:max-w-[500px] սահմանափակումները */}
      <div className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] xl:max-w-[520px] 2xl:max-w-[600px] flex flex-col items-start text-left shrink-0 self-start">
        <h2 className="text-[21px] sm:text-[25px] md:text-[27px] xl:text-[31px] 2xl:text-[38px] font-bold text-[#1c1d21] leading-[1.25] mb-3 xl:mb-4 2xl:mb-6">
          Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
        </h2>

        <p className="text-[13.5px] sm:text-[14.5px] md:text-[16px] xl:text-[15px] 2xl:text-[18px] text-[#6c747e] leading-[1.6] font-normal mb-6 xl:mb-8 2xl:mb-10">
          Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր
          քո հաշիվը և ստացիր քարտ
        </p>

        {/* Кнопка (Mobile/Tablet) */}
        <button className="xl:hidden self-start min-w-[210px] sm:min-w-[230px] py-2.5 px-10 md:px-12 bg-[#6200EE] hover:bg-[#5200cc] active:scale-[0.98] text-white font-medium rounded-full text-[14px] md:text-[15px] transition-all shadow-md">
          Իմանալ ավելին
        </button>

        {/* QR + Кнопка (Desktop) */}
        <div className="hidden xl:flex items-end justify-between w-full max-w-[460px] 2xl:max-w-[520px] pt-1">
          <img
            src={qrCode}
            alt="EvocaTOUCH QR Code"
            className="w-[125px] h-[125px] 2xl:w-[150px] 2xl:h-[150px] object-contain shrink-0"
          />
          <button className="py-3 px-10 2xl:py-3.5 2xl:px-12 bg-[#6200EE] hover:bg-[#5200cc] active:scale-[0.98] text-white font-medium rounded-full text-[15px] 2xl:text-[17px] transition-all shadow-md mb-1">
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
