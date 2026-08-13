import React from "react";

const EvocaCareers = () => {
  // Массив с данными для карточек преимуществ
  const features = [
    {
      id: 1,
      title: "Մոտիվացված",
      iconUrl:
        "https://www.evoca.am/images-cache/applicant_features/1/16194199747856/120x120.png",
    },
    {
      id: 2,
      title: "Նպատակասլաց",
      iconUrl:
        "https://www.evoca.am/images-cache/applicant_features/1/16194205883017/120x120.png",
    },
    {
      id: 3,
      title: "Արագ և ճկուն",
      iconUrl:
        "https://www.evoca.am/images-cache/applicant_features/1/16194206332591/120x120.png",
    },
    {
      id: 4,
      title: "Իր աշխատանքը շա՜տ սիրող",
      iconUrl:
        "https://www.evoca.am/images-cache/applicant_features/1/16194207496218/120x120.png",
    },
    {
      id: 5,
      title: "Նորարարական և կրեատիվ\nլուծումներ գտնող",
      iconUrl:
        "https://www.evoca.am/images-cache/applicant_features/1/16194208269015/120x120.png",
    },
  ];

  return (
    <div className="w-full font-sans bg-white">
      {/* 1. Hero Section (Главный баннер) */}
      <section className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]">
        {/* Фоновое изображение */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.evoca.am/images-cache/menu/1/16194611253542/1920x634.jpg')",
          }}
        ></div>

        {/* Контейнер для белой плашки с текстом */}
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 md:px-8 lg:px-24">
          <div
            className="bg-white py-6 px-8 md:py-12 md:px-16 shadow-md"
            style={{
              borderBottomLeftRadius: "60px",
              borderBottomRightRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
              Աշխատանք Evoca-ում
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Features Section (Секция с иконками) */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Заголовок секции */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-8">
            Ինչպիսի՞ թիմակից ենք մենք փնտրում :
          </h2>
          {/* Тонкая разделительная линия, как на дизайне */}
          <hr className="w-[90%] md:w-3/4 mx-auto border-gray-100" />
        </div>

        {/* Сетка иконок (Flexbox для правильного центрирования 3 сверху, 2 снизу) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-16 md:gap-y-16 mt-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center w-[250px]"
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img
                  src={feature.iconUrl}
                  alt={feature.title.replace("\n", " ")}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[#333333] font-medium text-sm md:text-base leading-relaxed whitespace-pre-line">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EvocaCareers;
