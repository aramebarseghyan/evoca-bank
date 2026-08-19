import React, { useState } from "react";

const contractorsData = [
  {
    id: 1,
    title: "Dilijan Eye",
    developer: "«ԴԻ ՍԻ ԴԻ» ՍՊԸ",
    phone: "+374 43 100 550",
    address: "ՀՀ Տավուշի մարզ, ք. Դիլիջան, Առողջարանային փողոց 12/4",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 2,
    title: "«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ",
    developer: "«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ",
    phone: "+374 55 200 707 | +374 41 200 700",
    address: "Կոտայքի մարզ, Նոր Հաճն, գյուղ Քանաքեռավան, Երևանյան խճ. 8 և 8/3",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 3,
    title: "«White Island» ՍՊԸ",
    developer: "«White Island» ՍՊԸ",
    phone: "+374 91 76 76 06, +374 91 47 38 74",
    address: "ՀՀ, ք. Աշտարակ",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 4,
    title: "«ԱՍՏՐՈՆ» ՍՊԸ",
    developer: "«ԱՍՏՐՈՆ» ՍՊԸ",
    phone: "+374 10 12 34 56",
    address: "ՀՀ, ք. Երևան, Վարդանանց 15",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 5,
    title: "PARK VIEW",
    developer: "«ՊԱՐԿ ՎԻՈՒ» ՍՊԸ",
    phone: "+374 44 00 11 22",
    address: "ՀՀ, ք. Երևան, Ծիծեռնակաբերդի խճուղի",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 6,
    title: "«ՕՊՏԻՄԱ 25» ՍՊԸ",
    developer: "«ՕՊՏԻՄԱ 25» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 7,
    title: "«Midis Park»",
    developer: "«Midis Park» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 8,
    title: "«Ավենյու Գրուպ» ՍՊԸ",
    developer: "«Ավենյու Գրուպ» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 9,
    title: "«ԴԻ ՋԻ ԷԹ ՔԸՆՍԹՐԱՔՇՆ» ՍՊԸ",
    developer: "«ԴԻ ՋԻ ԷԹ ՔԸՆՍԹՐԱՔՇՆ» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 10,
    title: "«ԷՍՔՈԶՈ-ԱՐԴՈ» ՍՊԸ",
    developer: "«ԷՍՔՈԶՈ-ԱՐԴՈ» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 11,
    title: "«ԱՍՏԱՐԱ» ՍՊԸ",
    developer: "«ԱՍՏԱՐԱ» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 12,
    title: "«Majestic Residence»",
    developer: "«Majestic Residence»",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 13,
    title: "ԱՄՈՒՐ 21 ՍՊԸ",
    developer: "ԱՄՈՒՐ 21 ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 14,
    title: "«Փիրումյան Շին» ՍՊԸ",
    developer: "«Փիրումյան Շին» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 15,
    title: "In Town",
    developer: "In Town",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 16,
    title: "Շինարտ Գրուպ ՍՊԸ",
    developer: "Շինարտ Գրուպ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 17,
    title: "Ս.Կ. ԳՐՈՒՊ ՍՊԸ",
    developer: "Ս.Կ. ԳՐՈՒՊ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 18,
    title: "ՌՈՖ ԲԻԼԴԻՆԳՍ ՍՊԸ",
    developer: "ՌՈՖ ԲԻԼԴԻՆԳՍ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 19,
    title: "«Pullman Living and Residences»",
    developer: "«Pullman Living and Residences»",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 20,
    title: "«Մխիթարոֆ» ՍՊԸ",
    developer: "«Մխիթարոֆ» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 21,
    title: "«ԲՈՒԼԴՈԶԵՐ ԳՐՈՒՊ» ՍՊԸ",
    developer: "«ԲՈՒԼԴՈԶԵՐ ԳՐՈՒՊ» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 22,
    title: "«Նորթերն Գեյթս» ԲԲԸ",
    developer: "«Նորթերն Գեյթս» ԲԲԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 23,
    title: "«ՐԻՎԵՐ ՍԱՅԴ» ՍՊԸ",
    developer: "«ՐԻՎԵՐ ՍԱՅԴ» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 24,
    title: "«Կամ Դեվելոփմենթս» ՍՊԸ",
    developer: "«Կամ Դեվելոփմենթս» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 25,
    title: "ՄԵՏՍՍԱ ԳՐՈՒՊ ՍՊԸ",
    developer: "ՄԵՏՍՍԱ ԳՐՈՒՊ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 26,
    title: "Վի Էմ Բիլդինգ",
    developer: "Վի Էմ Բիլդինգ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 27,
    title: "ՍՎ ԷՎ ԳԱ ՍՊԸ",
    developer: "ՍՎ ԷՎ ԳԱ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 28,
    title: "Վաղարշ և Որդիներ Կոնցեռն ՍՊԸ (ԷԱ 19/5)",
    developer: "Վաղարշ և Որդիներ Կոնցեռն ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 29,
    title: "ՍԱՖ ԿԱՊԻՏԱԼ ՍՊԸ (ԷԱ)",
    developer: "ՍԱՖ ԿԱՊԻՏԱԼ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 30,
    title: "Հորիզոն Ինվեստ ՓԲԸ",
    developer: "Հորիզոն Ինվեստ ՓԲԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 31,
    title: "Իմպերիալ Քոնսթրաքշն ՍՊԸ",
    developer: "Իմպերիալ Քոնսթրաքշն ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 32,
    title: "«ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ» ՍՊԸ",
    developer: "«ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ» ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 33,
    title: "ՋԵԹ ՍԵԹ ՍՊԸ",
    developer: "ՋԵԹ ՍԵԹ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
  {
    id: 34,
    title: "ՄԱԳԱՍ ՍՊԸ (ԷԱ)",
    developer: "ՄԱԳԱՍ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
    ],
  },
  {
    id: 35,
    title: "ՏԵՍԱՐԱՆ ՓՐՈՋԵՔԹ ՍՊԸ",
    developer: "ՏԵՍԱՐԱՆ ՓՐՈՋԵՔԹ ՍՊԸ",
    phone: "+374 10 00 00 00",
    address: "ՀՀ, ք. Երևան",
    images: [
      "https://www.evoca.am/file_manager/Constractors/web%202.jpg",
      "https://www.evoca.am/file_manager/Constractors/web%201.jpg",
    ],
  },
];

export default function ConstructionCompanies() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800">
      <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-900 mb-4">
        ԿԱՌՈՒՑԱՊԱՏՈՂՆԵՐ
      </h1>

      <div className="text-sm text-gray-600 space-y-2 mb-8 leading-relaxed">
        <p>
          Ձեռք բերեք Ձեր նորակառույց և հարմարավետ բնակարանը{" "}
          <span className="text-[#6C1C97] font-semibold">Evocabank</span>-ի հետ։
        </p>
        <p>
          Ծանոթացեք մեզ հետ համագործակցող կառուցապատող կազմակերպությունների
          ցանկին և անհրաժեշտ տեղեկատվությանը ստորև։
        </p>
      </div>

      <h2 className="text-base font-bold uppercase tracking-wide text-gray-900 mb-4">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      <div className="space-y-4">
        {contractorsData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                isOpen ? "border-[#6C1C97]" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center px-6 py-4 text-left font-semibold text-sm text-gray-700 hover:bg-gray-50 focus:outline-none transition-colors"
              >
                <span
                  className={`mr-4 text-xs transform transition-transform duration-300 text-[#6C1C97] ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
                {item.title}
              </button>

              {}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2 sm:pl-12">
                    <div className="space-y-1 text-sm text-gray-700 mb-5">
                      <p>
                        <strong className="text-[#6C1C97] font-bold">
                          Կառուցապատող՝{" "}
                        </strong>
                        {item.developer}
                      </p>
                      <p>
                        <strong className="text-[#6C1C97] font-bold">
                          Հեռ.՝{" "}
                        </strong>
                        {item.phone}
                      </p>
                      <p>
                        <strong className="text-[#6C1C97] font-bold">
                          Հասցե՝{" "}
                        </strong>
                        {item.address}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.images.map((imgSrc, idx) => (
                        <img
                          key={idx}
                          src={imgSrc}
                          alt={`${item.title} ${idx + 1}`}
                          className="w-full h-auto rounded-xl border border-gray-100 object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
