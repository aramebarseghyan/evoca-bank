import React from "react";

const bookletsData = [
  {
    id: 1,
    title: "Ավտոկայանատեղիի\nձեռքբերման վարկ",
    imgSrc:
      "https://www.evoca.am/file_manager/Booklets/Images/Car%20Parking_Web_Visual.png",
    link: "#",
  },
  {
    id: 2,
    title: "Ավտոմեքենայի\nձեռք բերման\nնպատակով վարկ",
    imgSrc:
      "https://www.evoca.am/file_manager/Booklets/Images/%D4%B1%D5%BE%D5%BF%D5%B8%D5%B4%D5%A5%D6%84%D5%A5%D5%B6%D5%A1%D5%B5%D5%AB-%D5%B1%D5%A5%D5%BC%D6%84%D5%A2%D5%A5%D6%80%D5%B4%D5%A1%D5%B6-%D5%B6%D5%BA%D5%A1%D5%BF%D5%A1%D5%AF%D5%B8%D5%BE-%D5%BE%D5%A1%D6%80%D5%AF.png",
    link: "#",
  },
  {
    id: 3,
    title: "Անշարժ և շարժական\nգույքի գրավով վարկեր",
    imgSrc:
      "https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%86%D5%87%D4%B1%D5%90%D4%BA-%D4%B5%D5%8E-%D5%87%D4%B1%D5%90%D4%BA%D4%B1%D4%BF%D4%B1%D5%86-%D4%B3%D5%88%D5%92%D5%85%D5%94%D4%BB-%D4%B3%D5%90%D4%B1%D5%8E%D5%88%D5%8E-%D5%8E%D4%B1%D5%90%D4%BF%D4%B5%D5%90.png",
    link: "#",
  },
  {
    id: 4,
    title: "Հիփոթեքային վարկեր",
    imgSrc:
      "https://www.evoca.am/file_manager/Booklets/Images/5-mortgage-loans.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Բիզնես վարկեր",
    imgSrc:
      "https://www.evoca.am/file_manager/Booklets/Images/6-business-loans.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Ոսկու գրավով\nվարկեր",
    imgSrc:
      "https://www.evoca.am/file_manager/Booklets/Images/10-gold-secured-loans.jpg",
    link: "#",
  },
];

const Booklets = () => {
  return (
    <div className="w-full min-h-screen bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-10 md:ml-12">
          Բուկլետներ
        </h2>

        {}
        <div className="flex flex-col items-center gap-8">
          {bookletsData.map((booklet) => (
            <a
              key={booklet.id}
              href={booklet.link}
              className="flex flex-col md:flex-row items-center w-full max-w-[850px] bg-[#fbfbFC] hover:bg-[#f4f4f7] transition-colors duration-300 py-8 px-6 group cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-10">
                <img
                  src={booklet.imgSrc}
                  alt={booklet.title.replace("\n", " ")}
                  className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {}
              <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start mt-6 md:mt-0 md:pl-4">
                <h3 className="text-[22px] md:text-[26px] text-[#6b2593] font-medium text-center md:text-left leading-snug whitespace-pre-line">
                  {booklet.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booklets;
