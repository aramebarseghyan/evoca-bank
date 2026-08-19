import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

const DepositsPage = () => {
  const navigate = useNavigate();
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialDeposits = [
    {
      id: "classical-deposit",
      title: "Դասական ավանդ",
      description:
        "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով «Դասական ավանդ» կայուն և բարձր եկամտաբերությամբ.",
      fullDescription: [
        {
          parts: [
            {
              text: "Դասական ժամկետային ավանդն ընդունվում է և՛ ֆիզիկական, և՛ իրավաբանական անձանցից: Այն կայուն բարձր եկամտաբերությամբ կավելացնի Ձեր խնայած գումարը: Կուտակված տոկոսագումարները կարող եք ստանալ ինչպես ժամկետի վերջում, այնպես էլ Ձեր նախընտրած պարբերականությամբ: Որպես Բանկի ավանդատու՝ Դուք կստանաք նաև ",
            },
            { text: "միջազգային քարտ՝ բացարձակապես անվճար", highlight: true },
            {
              text: ", որին ցանկության դեպքում կփոխանցվեն Ձեր ավանդի տոկոսագումարները:",
            },
          ],
        },
        {
          parts: [
            { text: "Ավանդը", highlight: true, underline: true },
            {
              text: " ձևակերպվում է շատ արագ՝ Բանկի Գլխամասային գրասենյակում և բոլոր մասնաճյուղերում /բացառությամբ Էրեբունի մասնաճյուղի/.",
            },
          ],
        },
        {
          parts: [
            {
              text: "Խնայելը Evocabank-ի հետ դառնում է ավելի արդյունավետ և հաճելի.",
            },
          ],
        },
      ],
      image:
        "https://www.evoca.am/images-cache/deposits/1/16142452390653/720x405.jpg",
      imageBgColor: "bg-[#D8B4FE]",
      metrics: [
        { label: "Գումար", value: "100,000 ֏", prefix: "սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", prefix: "" },
        { label: "Տոկոսադրույք", value: "10.5% ֏", prefix: "մինչև" },
        {
          label: "Համալրման հնարավորություն",
          value: "100,000 ֏",
          prefix: "սկսած",
        },
      ],
    },
    {
      id: "children-deposit",
      title: "Մանկական ավանդ",
      description:
        "Ձեր երեխայի պայծառ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ։ «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով.",
      fullDescription: [
        {
          parts: [
            {
              text: "Ձեր երեխայի պայծառ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ։ «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով.",
            },
          ],
        },
      ],
      image:
        "https://www.evoca.am/images-cache/deposits/2/16142452390653/720x405.jpg",
      imageBgColor: "bg-[#FDE047]",
      metrics: [
        { label: "Գումար", value: "100,000 ֏", prefix: "սկսած" },
        { label: "Ժամկետ", value: "18 լրանալը", prefix: "մինչև" },
        { label: "Տոկոսադրույք", value: "9.5% ֏", prefix: "" },
        {
          label: "Համալրման հնարավորություն",
          value: "40,000 ֏",
          prefix: "սկսած",
        },
      ],
    },
    {
      id: "evoca-online-deposit",
      title: "Ավանդ Evoca Online",
      description:
        "Ցանկանո՞ւմ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ։ Ձևակերպեք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
      fullDescription: [
        {
          parts: [
            {
              text: "Ցանկանո՞ւմ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ։ Ձևակերպեք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
            },
          ],
        },
      ],
      image:
        "https://www.evoca.am/images-cache/deposits/3/16142452390653/720x405.jpg",
      imageBgColor: "bg-[#E2E8F0]",
      metrics: [
        { label: "Գումար", value: "100,000 ֏", prefix: "սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", prefix: "" },
        { label: "Տոկոսադրույք", value: "10.75% ֏", prefix: "մինչև" },
        { label: "Համալրման հնարավորություն", value: "-", prefix: "" },
      ],
    },
  ];

  useEffect(() => {
    const fetchAndSeedDeposits = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "deposits"));

        if (querySnapshot.empty) {
          for (const item of initialDeposits) {
            await setDoc(doc(db, "deposits", item.id), item);
          }
          setDeposits(initialDeposits);
        } else {
          const itemsList = querySnapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
          }));
          setDeposits(itemsList);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных из Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSeedDeposits();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="w-full font-sans bg-white min-h-screen pb-16 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24">
        <div className="space-y-8">
          {deposits.map((deposit) => (
            <div
              key={deposit.id}
              className="flex flex-col lg:flex-row items-center bg-white border border-gray-100 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden p-6 lg:p-8 gap-8"
            >
              <div
                className={`w-full lg:w-[380px] h-56 rounded-2xl flex items-center justify-center overflow-hidden shrink-0 ${
                  deposit.imageBgColor || "bg-purple-100"
                }`}
              >
                <img
                  src={deposit.image}
                  alt={deposit.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {deposit.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {deposit.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100 items-end">
                  {deposit.metrics?.map((metric, idx) => (
                    <div key={idx}>
                      {metric.prefix && (
                        <div className="text-gray-400 text-xs mb-0.5">
                          {metric.prefix}
                        </div>
                      )}
                      <div className="text-[#5D00E0] text-lg sm:text-xl font-bold leading-tight">
                        {metric.value}
                      </div>
                      <div className="text-gray-500 text-xs mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-start">
                  <button
                    onClick={() => navigate(`/deposits/${deposit.id}`)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4F0FF] hover:bg-[#5D00E0] hover:text-white text-[#5D00E0] rounded-full text-sm font-medium transition-all cursor-pointer group"
                  >
                    <span>Մանրամասն</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">
                      ›
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositsPage;
