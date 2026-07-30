import React, { useState, useEffect } from "react";

import face1 from "/src/assets/face1.png";
import face2 from "/src/assets/face2.png";
import face3 from "/src/assets/face3.png";

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

    // Анимация срабатывает раз в 1.8 с (1.2 с рисовка + 0.6 с пауза)
    // Лицо меняется после каждых 2-х срабатываний сетки
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
    <section className="w-full bg-white py-8 px-4 flex flex-col items-center justify-center select-none overflow-hidden">
      <div className="relative w-[330px] sm:w-[360px] h-[370px] sm:h-[400px] mx-auto flex items-center justify-center mb-4">
        <div className="absolute inset-x-0 top-8 bottom-0 rounded-full border border-dashed border-purple-200/50 pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-x-6 top-14 bottom-6 rounded-full border border-purple-100 pointer-events-none" />

        <div className="absolute bottom-1 w-[310px] sm:w-[340px] h-[260px] sm:h-[290px] z-0 flex items-center justify-center drop-shadow-md">
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

        <div className="absolute top-0 bottom-1 w-[270px] sm:w-[300px] z-10 flex items-center justify-center overflow-visible">
          {faces.map((faceUrl, index) => (
            <img
              key={index}
              src={faceUrl}
              alt={`Biometric Scan ${index + 1}`}
              className={`absolute bottom-0 w-full h-[99%] object-contain object-bottom transition-opacity duration-700 ease-in-out ${
                index === currentFaceIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}

          {/* Перезапуск анимации по ключу animKey */}
          <svg
            key={animKey}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
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

      <div className="w-full max-w-[340px] mx-auto flex flex-col items-start text-left">
        <h2 className="text-[19px] sm:text-[21px] font-bold text-gray-900 leading-snug mb-2.5">
          Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
        </h2>

        <p className="text-[13.5px] text-gray-500 leading-relaxed font-normal mb-5">
          Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր
          քո հաշիվը և ստացիր քարտը։
        </p>

        <button className="self-center w-full max-w-[280px] py-3 px-6 bg-[#6200EE] hover:bg-[#5200cc] active:scale-[0.98] text-white font-medium rounded-full text-[14px] transition-all shadow-md">
          Իմանալ ավելին
        </button>
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
