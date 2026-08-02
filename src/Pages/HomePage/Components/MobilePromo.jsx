import React, { useState } from "react";
import macbook from "../../../assets/macbook.png";
import notPhoto from "../../../assets/notPhoto.jpg";
import iPhone from "../../../assets/iPhone.png";
import phoneImg from "../../../assets/phoneImg.jpg";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";

const MobilePromo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="mt-75 w-full max-w-[640px] mx-auto bg-[#580BD4] rounded-tl-[40px] sm:rounded-[30px] p-6 sm:p-8 text-white font-sans relative overflow-hidden flex flex-col">
      
      <div 
        className="absolute top-6 left-4 sm:left-6 z-0 opacity-90 drop-shadow-lg"
        style={{ animation: "float2 5s ease-in-out infinite", perspective: "800px" }}
      >
        <img
          src={shape2}
          alt="Shape 2"
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          style={{ animation: "spin3D_reverse 12s linear infinite" }}
        />
      </div>
      
      <div 
        className="absolute top-8 right-4 sm:right-6 z-0 opacity-90 drop-shadow-lg"
        style={{ animation: "float1 6s ease-in-out infinite", perspective: "800px" }}
      >
        <img
          src={shape1}
          alt="Shape 1"
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          style={{ animation: "spin3D 15s linear infinite" }}
        />
      </div>

      <div className="relative w-full mt-4 mb-8 z-10 flex justify-start items-center h-[280px] sm:h-[320px]">
        <div className="absolute left-0 w-[85%] sm:w-[80%] h-full flex items-center justify-center">
          <div className="relative w-full">
            
            <div className="absolute top-[5.2%] left-[7%] w-[79.5%] h-[80.2%] z-30 overflow-hidden rounded-[3px] bg-black">
              
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
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 hover:bg-black/25 transition-all">
                    <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-black/30 border-[2px] sm:border-[3px] border-[#00FFFF] flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-t-[9px] border-t-transparent border-l-[15px] border-l-[#00FFFF] border-b-[9px] border-b-transparent ml-1"></div>
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
              className="w-full h-auto relative z-20 drop-shadow-2xl pointer-events-none"
            />
          </div>
        </div>

        <div className="absolute bottom-[5%] right-[2%] sm:right-[5%] w-[32%] sm:w-[28%] z-40 drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500">
          <div className="relative w-full">
            <div className="absolute top-[3.2%] left-[6%] w-[67%] h-[93.5%] z-10 overflow-hidden">
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

      <div className="relative z-20 mt-4 pr-11">
        <h2 className="text-[23px] sm:text-[28px] font-extrabold mb-5 ">
          Օնլայն և մոբայլ բանկինգ
        </h2>

        <p className="text-[15px] sm:text-[16px] leading-[1.6] text-white/95 font-medium mb-6">
          Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն
          առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
        </p>
      </div>

      <button className="w-full bg-white text-[#580BD4] font-bold py-3.5 sm:py-4 rounded-full text-[16px] hover:bg-gray-50 transition-colors shadow-md active:scale-[0.98] mt-2 relative z-20 mb-8">
        Դառնալ հաճախորդ
      </button>

      {/* Հավելվածների ներբեռնման հատված */}
      <div className="relative z-20 w-full flex flex-col gap-3">
        <p className="text-[14px] sm:text-[15px] font-semibold text-white/90">
          Ներբեռնել հավելվածները՝
        </p>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-[38px] sm:h-[42px] w-auto"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-[38px] sm:h-[42px] w-auto"
            />
          </a>
        </div>
      </div>

      {/* CSS Անիմացիաներ */}
      <style>{`
        /* Տարածության մեջ վերև-ներքև գնալու անիմացիաներ */
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }

        /* 3D պտույտների անիմացիաներ */
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