import React from "react";

const Dibrary = () => {
  
  const partnerLogos = [
    { name: "EBSCO", url: "https://logo.clearbit.com/ebsco.com" },
    { name: "OpenStax", url: "https://logo.clearbit.com/openstax.org" },
    { name: "Springer", url: "https://logo.clearbit.com/springer.com" },
    { name: "DOAJ", url: "https://logo.clearbit.com/doaj.org" },
    { name: "JSTOR", url: "https://logo.clearbit.com/jstor.org" },
    {
      name: "ScienceDirect",
      url: "https://logo.clearbit.com/sciencedirect.com",
    },
    { name: "SAGE", url: "https://logo.clearbit.com/sagepub.com" },
    { name: "Bookboon", url: "https://logo.clearbit.com/bookboon.com" },
    { name: "Duke University", url: "https://logo.clearbit.com/duke.edu" },
    { name: "OER Commons", url: "https://logo.clearbit.com/oercommons.org" },
    { name: "Cambridge", url: "https://logo.clearbit.com/cambridge.org" },
    { name: "Oxford", url: "https://logo.clearbit.com/oup.com" },
    { name: "Wiley", url: "https://logo.clearbit.com/wiley.com" },
    { name: "Nature", url: "https://logo.clearbit.com/nature.com" },
    { name: "IEEE", url: "https://logo.clearbit.com/ieee.org" },
    { name: "ACM", url: "https://logo.clearbit.com/acm.org" },
    { name: "ArXiv", url: "https://logo.clearbit.com/arxiv.org" },
    { name: "PLOS", url: "https://logo.clearbit.com/plos.org" },
    { name: "Frontiers", url: "https://logo.clearbit.com/frontiersin.org" },
    { name: "MDPI", url: "https://logo.clearbit.com/mdpi.com" },
  ];

  return (
    <div className="w-full bg-white min-h-screen py-10 px-4 sm:px-8 font-sans">
      <div className="max-w-[1100px] mx-auto">
        {}
        <div className="flex flex-col md:flex-row items-stretch rounded-[2rem] overflow-hidden mb-12 shadow-sm bg-[#FAF8FC]">
          {}
          <div className="w-full md:w-5/12 p-8 sm:p-12 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Dibrary - Digital Library
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Evocabank-ի նոր և գերժամանակակից «Թումանյան» մասնաճյուղում՝
              Թումանյան 15 հասցեով, բացի ստանդարտ բանկային ծառայություններից,
              կգործի նաև Dibrary – digital library:
            </p>
          </div>

          {}
          <div className="w-full md:w-7/12 min-h-[300px] md:min-h-[400px]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16117479662777/780x585.jpg"
              alt="Evocabank Dibrary"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {}
        <div className="max-w-[950px] mx-auto space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed mb-16">
          <p>
            <span className="text-[#5D00E0] font-medium">#dibrary</span>-ում
            կարելի է անվճար օգտվել էլեկտրոնային բիզնես ռեսուրսներից՝{" "}
            <span className="text-[#5D00E0] font-medium">
              e-Duke Journals Scholarly Collection, ASTM Compass, Edward Elgar
              Publishing Journals, Mathematical Sciences Publishers Journals,
              Royal Society Journals Collection, SAGE Premier
            </span>{" "}
            և այլն…
          </p>

          <p>
            <span className="text-[#5D00E0] font-medium">#dibrary</span>-ի
            գրքերը, հոդվածները և հրապարակումները շարունակաբար համալրվում են՝
            ներառելով նաև համաշխարհային լավագույն համալսարանների փակ վճարովի
            ռեսուրսները: Բացի էլեկտրոնային նյութերից,{" "}
            <span className="text-[#5D00E0] font-medium">#dibrary</span>-ում
            կարելի է գտնել նաև դասական գրքեր, ինչպես նաև ժամանակակից բիզնես
            գրականության բեսթսելլերները, որոնք կարելի է կարդալ տեղում, իսկ
            ցանկության դեպքում՝ նաև տանել տուն:
          </p>

          <p>
            <span className="text-[#5D00E0] font-medium">#dibrary</span>-ի
            բացման գործում մեզ աջակցել են՝{" "}
            <span className="text-[#5D00E0] font-medium">
              DLAA-ը՝ Հայաստանի թվային գրադարանների ասոցիացիան (Digital Library
              Association of Armenia), Ավետիք Իսահակյանի անվան գրադարանը և
              American Corner Yerevan-ը:
            </span>{" "}
            Նրանց աջակցության շնորհիվ{" "}
            <span className="text-[#5D00E0] font-medium">#dibrary</span>-ում
            կարելի է անվճար օգտվել այնպիսի հրատարակիչների նյութերից, որոնց
            անդամակցությունը բավականին թանկ է և շատերի համար՝ անհասանելի:
          </p>
        </div>

        {}
        <div className="max-w-[1000px] mx-auto border border-gray-100 rounded-2xl p-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 h-24 border border-gray-100 rounded-xl hover:shadow-md transition-shadow duration-200 bg-white"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                  
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="hidden text-xs font-bold text-gray-400 text-center uppercase tracking-wider">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dibrary;
