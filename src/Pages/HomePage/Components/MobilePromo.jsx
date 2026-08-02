import React, { useState } from "react";
import macbook from "../../../assets/macbook.png";
import notPhoto from "../../../assets/notPhoto.jpg";
import iPhone from "../../../assets/iPhone.png";
import phoneImg from "../../../assets/phoneImg.jpg";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import shape3 from "../../../assets/shape3.png";
import shape4 from "../../../assets/shape4.png";
import shape5 from "../../../assets/shape5.png";
import shape6 from "../../../assets/shape6.png";
import dotsRectangle from "../../../assets/dots_rectangle.png";
import evocaBestShape2 from "../../../assets/evoca-best-shape2.png";

const MobilePromo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="w-full bg-[#580BD4] rounded-tl-[60px] sm:rounded-tl-[80px] md:rounded-tl-[100px] xl:rounded-tl-[200px] 2xl:rounded-tl-[240px] text-white font-sans relative overflow-hidden shadow-2xl mt-10 md:mt-16 py-12 px-6 sm:px-10 md:px-16 2xl:px-20">
      {/* 3D Декоративные фигуры */}
      <div
        className="hidden md:block absolute top-12 right-20 xl:right-36 z-0 opacity-80 pointer-events-none"
        style={{ animation: "float1 6s ease-in-out infinite" }}
      >
        <img
          src={shape1}
          alt="Shape 1"
          className="w-10 h-10 xl:w-16 xl:h-16 object-contain"
          style={{ animation: "spin3D 15s linear infinite" }}
        />
      </div>

      <div
        className="hidden md:block absolute top-10 left-12 xl:left-24 z-0 opacity-80 pointer-events-none"
        style={{ animation: "float2 5s ease-in-out infinite" }}
      >
        <img
          src={shape2}
          alt="Shape 2"
          className="w-12 h-12 xl:w-20 xl:h-20 object-contain"
          style={{ animation: "spin3D_reverse 12s linear infinite" }}
        />
      </div>

      <div
        className="hidden md:block absolute bottom-12 left-[8%] z-0 opacity-80 pointer-events-none"
        style={{ animation: "float1 7s ease-in-out infinite" }}
      >
        <img
          src={shape3}
          alt="Shape 3"
          className="w-12 h-12 xl:w-16 xl:h-16 object-contain"
          style={{ animation: "spin3D 18s linear infinite" }}
        />
      </div>

      <div
        className="hidden md:block absolute bottom-16 right-[12%] z-0 opacity-80 pointer-events-none"
        style={{ animation: "float2 6s ease-in-out infinite" }}
      >
        <img
          src={shape4}
          alt="Shape 4"
          className="w-10 h-10 xl:w-14 xl:h-14 object-contain"
          style={{ animation: "spin3D_reverse 14s linear infinite" }}
        />
      </div>

      <div
        className="hidden md:block absolute top-8 left-[48%] z-0 opacity-60 pointer-events-none"
        style={{ animation: "float1 8s ease-in-out infinite" }}
      >
        <img
          src={shape5}
          alt="Shape 5"
          className="w-8 h-8 xl:w-12 xl:h-12 object-contain"
        />
      </div>

      <div
        className="hidden md:block absolute top-1/2 right-6 z-0 opacity-70 pointer-events-none"
        style={{ animation: "float2 5.5s ease-in-out infinite" }}
      >
        <img
          src={shape6}
          alt="Shape 6"
          className="w-12 h-12 xl:w-16 xl:h-16 object-contain"
          style={{ animation: "spin3D 20s linear infinite" }}
        />
      </div>

      <img
        src={evocaBestShape2}
        alt="Triangle Shape"
        className="hidden md:block absolute top-[20%] right-[42%] z-0 w-8 xl:w-12 object-contain opacity-70 pointer-events-none"
      />

      <img
        src={dotsRectangle}
        alt="Dots Background"
        className="hidden md:block absolute left-4 bottom-2 z-0 w-32 xl:w-44 opacity-60 pointer-events-none"
      />

      {/* Внутренний контентный контейнер (предотвращает наложение при широком экране) */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 2xl:gap-16 relative z-10">
        {/* Левый блок: Ноутбук + Телефон */}
        <div className="w-full xl:w-1/2 flex justify-center items-center relative min-h-[260px] sm:min-h-[340px] md:min-h-[440px] xl:min-h-[460px]">
          {/* Макбук */}
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] xl:max-w-[540px] 2xl:max-w-[600px] pr-8 sm:pr-12">
            <div className="relative w-full">
              {/* Экран видео */}
              <div className="absolute top-[5.2%] left-[7%] w-[79.5%] h-[80.2%] z-20 overflow-hidden rounded-[2px] sm:rounded-[4px] bg-black">
                {!isVideoPlaying ? (
                  <div
                    className="w-full h-full relative cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <img
                      src={notPhoto}
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 hover:bg-black/30 transition-all">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/40 border-2 border-[#00FFFF] flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[10px] sm:border-l-[14px] md:border-l-[18px] border-l-[#00FFFF] border-b-[6px] sm:border-b-[8px] md:border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/KwAgMHEx8ys?si=rAbi2I62Ph20Lohc&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <img
                src={macbook}
                alt="Macbook"
                className="w-full h-auto relative z-10 drop-shadow-xl pointer-events-none"
              />
            </div>
          </div>

          {/* Телефон (аккуратно перекрывает правый нижний угол ноутбука) */}
          <div className="absolute right-2 sm:right-4 md:right-8 xl:right-4 bottom-0 w-[24%] max-w-[130px] sm:max-w-[150px] md:max-w-[160px] 2xl:max-w-[170px] z-30 drop-shadow-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="relative w-full">
              <div className="absolute top-[3.2%] left-[6%] w-[67%] h-[93.5%] z-10 overflow-hidden rounded-[6px] sm:rounded-[10px]">
                <img
                  src={phoneImg}
                  alt="App Screen"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <img
                src={iPhone}
                alt="iPhone"
                className="w-full h-auto relative z-20 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Правый блок: Текст, Кнопка, QR и Store иконки */}
        <div className="w-full xl:w-1/2 flex flex-col items-start space-y-5 sm:space-y-6">
          <h2 className="text-[26px] sm:text-[34px] md:text-[42px] xl:text-[44px] 2xl:text-[48px] font-extrabold leading-[1.2] tracking-tight">
            Օնլայն և մոբայլ բանկինգ
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[17px] 2xl:text-[18px] leading-[1.6] text-white/90 font-medium max-w-[550px]">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է,
            որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ
            կիրառմամբ:
          </p>

          <button className="px-8 sm:px-10 py-3.5 bg-white text-[#580BD4] font-bold rounded-full text-[15px] sm:text-[16px] hover:bg-gray-100 transition-all shadow-md active:scale-95">
            Դառնալ հաճախորդ
          </button>

          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="hidden sm:block bg-white p-2 rounded-xl flex-shrink-0 shadow-sm">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://evocabank.am"
                alt="QR Code"
                className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] object-contain"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[13px] sm:text-[14px] font-semibold text-white/90">
                Ներբեռնել հավելվածները՝
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-85 transition-opacity">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-[36px] sm:h-[40px] w-auto"
                  />
                </a>
                <a href="#" className="hover:opacity-85 transition-opacity">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-[36px] sm:h-[40px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -12px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-12px, 12px); }
        }
        @keyframes spin3D {
          from { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        @keyframes spin3D_reverse {
          from { transform: rotateX(0deg) rotateY(360deg) rotateZ(0deg); }
          to { transform: rotateX(-360deg) rotateY(0deg) rotateZ(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default MobilePromo;
