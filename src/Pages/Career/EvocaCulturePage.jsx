import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Ներմուծում ենք Firebase-ի db-ն (ստուգեք՝ ճիշտ ուղին արդյոք համապատասխանում է ձեր նախագծին)
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

// Swiper-ի ոճերը
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EvocaCulturePage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [cultureVideos, setCultureVideos] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosSnapshot = await getDocs(collection(db, "cultureVideos"));
        const videosList = videosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCultureVideos(videosList);

        const testimonialsSnapshot = await getDocs(
          collection(db, "testimonials"),
        );
        const testimonialsList = testimonialsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(testimonialsList);
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white text-[#5C00C9] font-bold text-xl">
        Բեռնվում է...
      </div>
    );
  }

  return (
    <div className="w-full font-sans text-[#333333] overflow-x-hidden">
      <style>{`
        .culture-swiper .swiper-wrapper { align-items: center; }
        .culture-swiper .swiper-slide { width: 320px !important; opacity: 0.9; transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease; }
        .culture-swiper .swiper-slide-active { width: 780px !important; opacity: 1; }
        .culture-swiper .swiper-slide .slide-title { font-size: 0.875rem; transition: font-size 0.5s ease; }
        .culture-swiper .swiper-slide-active .slide-title { font-size: 1.25rem; }
        .testimonial-swiper .swiper-pagination-bullet { width: 8px; height: 8px; background-color: #d1d5db; opacity: 1; margin: 0 6px !important; transition: background-color 0.3s ease; }
        .testimonial-swiper .swiper-pagination-bullet-active { background-color: #5C00C9; }
        @media (max-width: 1024px) { .culture-swiper .swiper-slide-active { width: 600px !important; } }
        @media (max-width: 768px) { .culture-swiper .swiper-slide { width: 260px !important; } .culture-swiper .swiper-slide-active { width: 85vw !important; } }
      `}</style>

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[350px] md:h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg')`,
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-white/95 p-8 md:p-10 max-w-[500px] rounded-br-[40px] rounded-tl-[40px] shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
              Մշակույթ
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Evoca-ում աշխատելը հաճելի է: Առօրյան լցված է նորարարություններով։
              Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում։
            </p>
          </div>
        </div>
      </section>

      {/* WHY WORK AT EVOCA SECTION */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ինչո՞ւ աշխատել Evoca-ում
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            «Բացահայտիր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ:
            Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն
            օգնում է հոգ տանել իրենց և ընտանիքների մասին»
          </p>
          <div className="flex justify-center">
            <img
              src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg"
              alt="Why work at Evoca"
              className="max-w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      {/* CULTURE VIDEOS SWIPER SECTION */}
      <section className="bg-[#5C00C9] py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-10 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Մշակույթ
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
              Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև
              կյանքից վերցնում ենք ամեն ինչ. Անընդհատ սովորում ենք, մեր փորձը
              կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում:
              Միացիր մեզ!
            </p>
          </div>
        </div>

        <div className="relative w-full z-10 px-0 md:px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            onSlideChange={() => setActiveVideo(null)}
            className="culture-swiper pb-10"
          >
            {cultureVideos.map((video) => (
              <SwiperSlide key={video.id} className="h-auto">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl h-full flex flex-col justify-between transition-all duration-300">
                  <div
                    className="relative w-full aspect-video rounded-xl overflow-hidden bg-black group cursor-pointer"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    {activeVideo === video.id ? (
                      <iframe
                        className="w-full h-full"
                        src={`${video.iframeSrc}&autoplay=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={video.img}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                          <svg
                            className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform group-hover:scale-110 transition-transform duration-300"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke="#00F0FF"
                              strokeWidth="2.5"
                              fill="#5C00C9"
                              fillOpacity="0.8"
                            />
                            <path d="M43 36L64 50L43 64V36Z" fill="#00F0FF" />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>
                  {video.title && (
                    <h3 className="slide-title mt-5 mb-2 font-bold text-gray-900 leading-tight">
                      {video.title}
                    </h3>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Նավիգացիոն սլաքներ */}
          <button className="custom-swiper-button-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-110 hover:text-[#00F0FF] transition-all p-2 cursor-pointer">
            <svg
              className="w-10 h-10 md:w-12 md:h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="custom-swiper-button-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-110 hover:text-[#00F0FF] transition-all p-2 cursor-pointer">
            <svg
              className="w-10 h-10 md:w-12 md:h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#333]">
            Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
          </h2>
          <div className="relative px-10 md:px-16 max-w-[1200px] mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".test-swiper-button-next",
                prevEl: ".test-swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="testimonial-swiper pb-16"
            >
              {testimonials.map((test) => (
                <SwiperSlide key={test.id} className="h-auto">
                  <div className="bg-[#f8f8fc] p-8 md:p-10 rounded-xl h-full flex flex-col justify-between text-left relative transition-all duration-300">
                    <span className="text-[#5C00C9] text-7xl absolute top-2 right-6 font-serif font-bold leading-none">
                      "
                    </span>
                    <div className="mt-4 mb-8">
                      <h3 className="text-[#5C00C9] font-bold text-xl md:text-2xl leading-snug">
                        {Array.isArray(test.words)
                          ? test.words.map((word, index) => (
                              <React.Fragment key={index}>
                                {word}
                                {index < test.words.length - 1 && <br />}
                              </React.Fragment>
                            ))
                          : test.words}
                      </h3>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {test.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{test.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Նավիգացիոն սլաքներ Testimonial սլայդերի համար */}
            <button className="test-swiper-button-prev absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 text-[#5C00C9] hover:text-[#8c54ff] transition-colors p-2 bg-white rounded-full">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="test-swiper-button-next absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 text-[#5C00C9] hover:text-[#8c54ff] transition-colors p-2 bg-white rounded-full">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* JOB APPLICATION FORM */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-4">
              Դառնալ թիմի անդամ
            </h2>
            <p className="text-gray-600 text-sm">
              Եթե ցանկանում ես միանալ{" "}
              <span className="text-[#5C00C9] font-bold">EvocaTEAM</span>-ին,
              կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականդ:
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Անուն <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#5C00C9]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Ազգանուն <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#5C00C9]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Հեռախոսահամար <span className="text-red-500">*</span>
              </label>
              <div className="flex border border-gray-300 rounded overflow-hidden">
                <span className="bg-gray-50 p-3 text-sm text-gray-600 border-r border-gray-300">
                  🇦🇲 +374
                </span>
                <input
                  type="tel"
                  className="w-full p-3 focus:outline-none focus:border-[#5C00C9]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Էլ. հասցե
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#5C00C9]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Facebook սոց. կայքում անձնական էջի հղում
              </label>
              <input
                type="url"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#5C00C9]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                LinkedIn սոց. կայքում անձնական էջի հղում
              </label>
              <input
                type="url"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#5C00C9]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Ուղեկցող նամակ
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#5C00C9]"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span>
              </label>
              <div className="border border-dashed border-gray-300 rounded p-4 text-center cursor-pointer hover:bg-gray-50 flex justify-between items-center text-gray-500">
                <span className="text-sm">Կցել ֆայլ / Ֆայլերը</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-full max-w-xs border border-gray-300 p-4 rounded">
              <label className="block text-sm text-gray-700 mb-2">
                Ստուգման ծածկագիր <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Մուտքագրեք ծածկագիրը"
                    className="border border-gray-300 rounded p-2 flex-grow text-sm focus:outline-none"
                  />
                  <button
                    type="button"
                    className="text-gray-500 hover:text-[#5C00C9]"
                  >
                    ↻
                  </button>
                </div>
                <div className="h-12 bg-gray-100 flex items-center justify-center font-serif text-xl tracking-widest italic line-through decoration-gray-400">
                  BLD2D4
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full bg-[#6A00F4] hover:bg-[#5C00C9] text-white font-bold py-4 rounded-full transition duration-300 mt-8 shadow-lg shadow-purple-500/30"
            >
              Ես ուզում եմ աշխատել Evoca-ում :)
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
