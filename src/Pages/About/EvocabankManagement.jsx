import React from "react";

const managementData = {
  supervisoryBoard: [
    {
      name: "ՎԱՐՈՒԺԱՆ ԱՎԵՏԻՔՅԱՆ, LL.M., MPA",
      title: "Խորհրդի Նախագահ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16776012013335/230x230.png",
    },
    {
      name: "ՄԱՐՏԱ ԷԶԱՐԻԿ",
      title:
        "Խորհրդի անդամ, Աուդիտի կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/17544805530896/230x230.png",
    },
    {
      name: "ՎԱՀԳԵՆ ԳԵՎՈՐԳՅԱՆ, MBA, PhD",
      title: "Խորհրդի անդամ, Ռազմավարության կոմիտեի նախագահ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/17550915579199/230x230.png",
    },
    {
      name: "ՄԱՐԻՆԱ ԲՈՒԿԻ, MBA",
      title:
        "Խորհրդի անդամ, Աուդիտի կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/17544805642771/230x230.png",
    },
    {
      name: "ԽՈՍԵ ՄԱՐԻԱ ՄՈՐԵՆՈ ԴԵ ԲԱՐՐԵԴԱ, LL.M., MBA, PhD",
      title:
        "Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/1675080847328/230x230.png",
    },
    {
      name: "ՏԱԹԵՎԻԿ ՋԱՆՈՅԱՆ, MBA",
      title:
        "Խորհրդի անդամ, Աուդիտի կոմիտեի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16602030046225/230x230.png",
    },
    {
      name: "ՊԻԵՐ ԿԱԶԻԼՅԱԿ, MBA",
      title:
        "Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/17544805424545/230x230.png",
    },
  ],
  managementBoard: [
    {
      name: "ԿԱՐԵՆ ԵՂԻԱԶԱՐՅԱՆ, MBA, PhD",
      title: "Վարչության Նախագահ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/1660202833495/230x230.png",
    },
    {
      name: "ԱՐՄԵՆ ՀԱԿՈԲՅԱՆ, PhD",
      title: "Վարչության նախագահի առաջին տեղակալ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16602027630068/230x230.png",
    },
    {
      name: "ՏԱԹԵՎԻԿ ԽԱՉԱՏՐՅԱՆ, MBA, PMP",
      title: "Վարչության նախագահի տեղակալ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16602030244095/230x230.png",
    },
    {
      name: "ՀԱՅԿ ՊԵՏՐՈՍՅԱՆ",
      title: "Վարչության նախագահի տեղակալ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16602028118681/230x230.png",
    },
    {
      name: "ԼԻԼԻԹ ԳԱԲՈՅԱՆ, MBA",
      title: "Վարչության նախագահի տեղակալ, Ֆինանսական գծով",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16602028538342/230x230.png",
    },
    {
      name: "ԷՄՄԱ ՋԱՆԻՆՅԱՆ, MBA, PhD, FCCA",
      title: "Վարչության անդամ, Գլխավոր հաշվապահ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16602027917723/230x230.png",
    },
    {
      name: "ՍՄԲԱՏ ՄԱՐՏԻՐՈՍՅԱՆ",
      title: "Վարչության անդամ, Իրավաբանական վարչության պետ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16602029763987/230x230.png",
    },
    {
      name: "ՄՀԵՐ ՍԱՀԱԿՅԱՆ",
      title:
        "Վարչության անդամ, Ծրագրավորման և գործառնական համակարգերի վարչության պետ",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16602028738374/230x230.png",
    },
  ],
  internalAudit: [
    {
      name: "ՆԱԶԵԼԻ ԷԼՈՅԱՆ, CIA",
      title: "Ներքին աուդիտի ստորաբաժանման ղեկավար",
      image:
        "https://www.evoca.am/images-cache/team_members/1/16282549740688/230x230.png",
    },
  ],
};

const MemberCard = ({ name, title, image }) => (
  <div className="flex flex-col items-center text-center bg-white p-4 group cursor-pointer">
    {/* Контейнер для треугольника и фото */}
    <div className="relative w-52 h-52 mb-4 flex items-center justify-center">
      {/* SVG треугольника с медленным плавным переходом цвета (duration-1000) */}
      <svg
        className="absolute inset-0 w-full h-full text-gray-100 group-hover:text-purple-600 transition-colors duration-1000 ease-in-out"
        viewBox="0 0 200 200"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M 12,12 Q 12,0 30,0 L 170,0 Q 188,0 188,12 L 107,192 Q 100,200 93,192 Z" />
      </svg>

      {/* Фото сотрудника */}
      <img
        src={image}
        alt={name}
        className="relative z-10 w-36 h-36 object-cover rounded-full shadow-sm"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/230x230?text=Evoca";
        }}
      />
    </div>

    {/* Имя и должность */}
    <h3 className="font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-1000 text-sm sm:text-base mb-1 tracking-tight">
      {name}
    </h3>
    <p className="text-xs sm:text-sm text-gray-600 max-w-xs leading-snug">
      {title}
    </p>
  </div>
);

const EvocabankManagement = () => {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
          Ղեկավարություն
        </h1>

        {/* Секция 1: Банки խորհուրդ (Совет банка) */}
        <section className="mb-12">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            Բանկի խորհուրդ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {managementData.supervisoryBoard.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* Секция 2: Банки վարչություն (Правление банка) */}
        <section className="mb-12">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            Բանկի վարչություն
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {managementData.managementBoard.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* Секция 3: Банки ներքին աուդիտ (Внутренний аудит) */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            Բանկի ներքին աուդիտ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {managementData.internalAudit.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EvocabankManagement;
