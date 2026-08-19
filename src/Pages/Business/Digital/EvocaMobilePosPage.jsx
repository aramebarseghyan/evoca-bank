import React from "react";

const EvocaMobilePosPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10">
        {}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Evoca Mobile POS` mPOS
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Evocabank-ի նոր mobile POS` mPOS գործիքի շնորհիվ Ձեր բիզնեսը կարող
              է ստանալ անկանխիկ վճարումներ` ավելի հեշտ ու արագ:
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16697156723793/780x585.png"
              alt="Evoca Mobile POS mPOS"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>

        {}
        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl">
          <p>
            <strong className="text-gray-900">mPOS</strong>-ը ստանդարտ POS
            տերմինալի մոբայլ տարբերակն է, որը ցանկացած Android սմարթֆոն վերածում
            է վճարային տերմինալի:
          </p>
          <p>
            mPOS-ը հատկապես հարմար է շարժական բիզնեսով զբաղվողների համար՝
            բացօթյա խանութներ, սրճարաններ, միջոցառումների ընթացքում սննդի
            վաճառքի կետեր, օնլայն խանութներ, առաքման ծառայություններ, կամ
            ցանկացած այլ բիզնես, որը հաճախորդից վճարում է ընդունում է բիզնեսի
            տարածքից դուրս:
          </p>
          <p>
            mPOS-ն ակտիվացնելու համար բիզնեսին պարզապես անհրաժեշտ է՝ NFC
            ընթերցողով Android սմարթֆոն, որը միացված է ինտերնետին, և{" "}
            <span className="text-purple-600 font-medium">
              Evoca-ի mPOS հավելվածը
            </span>
            : Այն կարող եք ներբեռնել Google Play-ից՝ Android 8.1 կամ ավելի բարձր
            ծրագրային ապահովման դեպքում:
          </p>
          <p>
            Հավելվածը ներբեռնելուց հետո պետք է մուտք գործել հավելված՝ Բանկի
            տրամադրած մուտքանունով և գաղտնաբառով: Եվ վերջ: Դուք արդեն կարող եք
            Ձեր հաճախորդներից ստանալ անկանխիկ վճարումներ: Վճարում կատարելու
            համար հաճախորդը պարզապես մոտեցնում է Ձեր սմարթֆոնին իր քարտը կամ
            Apple Pay ունեցող հեռախոսը, որին կցված է Evoca վճարային քարտ:
          </p>
        </div>
      </div>
    </div>
  );
};

export default EvocaMobilePosPage;
