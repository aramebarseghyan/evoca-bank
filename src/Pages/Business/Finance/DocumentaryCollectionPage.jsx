import React from "react";
import LatestNews from "../../Individual/HomePage/Components/LatestNews";

const DocumentaryCollectionPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800 leading-relaxed">
      {}
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        {}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ինկասո
          </h1>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Ինկասոն վճարումների ստացման և պարտքերի մարման արագ, պարզ ու արդյունավետ գործիք է:
            </p>
            <p>
              Այն վաճառողի հանձնարարությունն է մեզ՝ մատակարարված ապրանքների փաստաթղթերը, վճարի դիմաց, փոխանցելու գնորդին: Մինչդեռ, մենք վճարման որևէ պարտավորություն չենք ստանձնում, այլ կատարում ենք փաստաթղթերը փոխանցողի (միջնորդի) դեր:
            </p>
          </div>
        </div>

        {}
        <div className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            Ինկասոյի վճարման հիմնական ձևերն են՝
          </h2>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base list-disc pl-5 leading-relaxed">
            <li>
              <strong className="text-gray-900">Փաստաթղթեր՝ վճարման դիմաց (Documents Against Payment or D/P).</strong> Փաստաթղթերը տրամադրում ենք գնորդին միայն նրա կողմից ապրանքների դիմաց վճարելուց հետո:
            </li>
            <li>
              <strong className="text-gray-900">Փաստաթղթեր՝ ակցեպտի դիմաց (Documents Against Acceptance or D/A).</strong> Փաստաթղթերը տրամադրում ենք գնորդին՝ ապրանքների դիմաց հետագայում վճարելու պայմանով (վճարումների հետաձգման պարտավորագրի (մուրհակ) ակցեպտի դեպքում): Ինկասոյի այս ձևը կիրառվում է, երբ գնորդն ու վաճառողը պայմանավորվածություն ունեն վճարման հետաձգման վերաբերյալ:
            </li>
          </ul>
        </div>

        {}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-wide">
            Սակագներ
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Ինկասոյի գործառնությունների վերաբերյալ լրացուցիչ տեղեկություններ և խորհրդատվություն ստանալու համար կարող եք դիմել մեր Գլխամասային գրասենյակ՝ «Միջազգային և արտարժութային գործառնությունների» բաժին:
          </p>
        </div>
      </div>

      {}
      <div className="w-full mb-16">
        <LatestNews />
      </div>
    </div>
  );
};

export default DocumentaryCollectionPage;