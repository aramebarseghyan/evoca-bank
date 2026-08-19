const propertyData = [
  {
    id: 1,
    address: "Կոտայքի մարզ, հ․ Սոլակ 1-ին փող․, 4-րդ նրբ․, թիվ 2 հողամաս",
    description: "հողատարածք",
    area: "1540 քմ",
    image: "https://www.evoca.am/file_manager/Alienated-Property/solak.png",
  },
  {
    id: 2,
    address: "ք. Երևան, Արաբկիր, Բաղրամյան պողոտա 53շ․ 69",
    description: "ոչ բնակելի տարածք",
    area: "180 քմ",
    image:
      "https://www.evoca.am/file_manager/Alienated-Property/baghramyan-53.jpg",
  },
  {
    id: 3,
    address: "Պռոշյան գյուղ, Մայիսյան 4-րդ նրբանցք, 21 տուն",
    description: "բնակելի տուն",
    area: "1400 քմ",
    image: "https://www.evoca.am/file_manager/Alienated-Property/proshyan.jpg",
  },
  {
    id: 4,
    address: "Կոտայքի մարզ, գ․ Մարմարիկ",
    description: "հողամաս",
    area: "7600 քմ",
    image: "https://www.evoca.am/file_manager/Alienated-Property/marmarik.jpg",
  },
  {
    id: 5,
    address: "Կոտայքի մարզ, Արտավազ համ․, Կարմիր Հովիտ",
    description: "հողամաս (նպատակային նշ․' արոտավայր)",
    area: "10000 քմ",
    image:
      "https://www.evoca.am/file_manager/Alienated-Property/karmir-hovit_0.jpg",
  },
  {
    id: 6,
    address: "ք․ Գյումրի, Ղուկասյան փողոց 8 շարք, թիվ 33 բն․",
    description: "տուն",
    area: "115 քմ",
    image: "https://www.evoca.am/file_manager/Alienated-Property/Gyumri.jpg",
  },
];

const AlienatedProperty = () => {
  return (
    <div className="w-full bg-white min-h-screen py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* H1 Վերնագիր */}
        <h1 className="text-3xl sm:text-[36px] font-bold text-[#443f38] mb-8">
          Օտարվող գույք
        </h1>

        {/* Աղյուսակ */}
        <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-6">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/60 text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-4 px-4 sm:px-6 w-[35%]">ՀԱՍՑԵ</th>
                <th className="py-4 px-4 sm:px-6 w-[25%]">ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ</th>
                <th className="py-4 px-4 sm:px-6 w-[15%]">ՄԱԿԵՐԵՍ</th>
                <th className="py-4 px-4 sm:px-6 w-[25%]">ՆԿԱՐ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm text-[#443f38]">
              {propertyData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-5 px-4 sm:px-6 align-middle font-medium leading-relaxed">
                    {item.address}
                  </td>
                  <td className="py-5 px-4 sm:px-6 align-middle leading-relaxed">
                    {item.description}
                  </td>
                  <td className="py-5 px-4 sm:px-6 align-middle font-medium whitespace-nowrap">
                    {item.area}
                  </td>
                  <td className="py-4 px-4 sm:px-6 align-middle">
                    <div className="w-full max-w-[220px] h-[130px] rounded overflow-hidden border border-gray-100 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.address}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ամսաթիվ աջ անկյունում */}
        <div className="text-right text-xs text-gray-400 font-sans">
          Թարմացվել է՝ 06/10/2025 10:00
        </div>
      </div>
    </div>
  );
};

export default AlienatedProperty;
