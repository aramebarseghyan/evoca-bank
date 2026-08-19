import React from "react";

const TransferPaymentSystems = () => {
  const systems = [
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png",
      description:
        "MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակն է Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովում՝ հիմնված տասնամյակների փորձի վրա: Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը:",
      phoneLabel: "MoneyTun Հաճախորդների սպասարկման հեռախոսահամար՝",
      phone: "+374 10 27 72 85",
      scheduleTitle: "Աշխատանքային գրաֆիկ՝",
      schedule:
        "երկուշաբթի-ուրբաթ՝ 10:00-17:30\nշաբաթ՝ 10:00-14:00\nկիրակի՝ 10:00-13:00",
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png",
      description:
        "Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանված սակագների:",
      phoneLabel: "Ria Հաճախորդների սպասարկման հեռախոսահամար Հայաստանի համար՝",
      phone: "+374 94 23 59 00",
      scheduleTitle: "Աշխատանքային գրաֆիկ՝",
      schedule: "երկուշաբթի-ուրբաթ, 09:00-18:00\n(Երևանի ժամանակով)",
      languages: "Հաճախորդների աջակցության լեզուներ՝\nռուսերեն, անգլերեն",
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png",
      description:
        "UBPay - ն արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար: Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ:",
      phoneLabel: "UBPay Հաճախորդների սպասարկման հեռախոսահամար՝",
      phone: "+374 43 00 49 35",
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png",
      description:
        "Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, Եվրոպական երկրներ և այլն): Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանված սակագների:",
      phoneLabel: "İNTELEXPRESS Հաճախորդների սպասարկման հեռախոսահամար՝",
      phone: "+995 32 2 49 25 25",
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png",
      description:
        "«ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակն է ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է:\n\nՀամակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և, ինչպես նաև եվրոյով:",
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png",
      description:
        "Գործում է 170 երկրի ավելի քան 125,000 կետերում: Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար: Միջնորդավճարը գանձվում է՝ ըստ MoneyGram-ի սահմանված սանդղակի:",
      phoneLabel: "MoneyGram Հաճախորդների սպասարկման հեռախոսահամար՝",
      phone: "1-800-926-9400",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      <div className="max-w-[1440px] mx-auto pt-4 md:pt-6 px-4 sm:px-8 lg:px-16">
        {}
        <div className="flex border-b border-gray-200 mb-12">
          <a
            href="/money-transfers"
            className="pb-4 px-6 text-gray-500 font-medium hover:text-[#5D00E0] transition-colors"
          >
            Դրամական փոխանցումներ
          </a>
          <a
            href="/transfer-payment-systems"
            className="pb-4 px-6 text-[#5D00E0] font-bold border-b-2 border-[#5D00E0]"
          >
            Վճարային համակարգեր
          </a>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((sys, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={sys.logo}
                    alt="Payment System Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">
                  {sys.description}
                </p>
              </div>

              {sys.phone && (
                <div className="border-t border-gray-100 pt-4 mt-auto text-center">
                  <p className="text-xs md:text-sm font-bold text-[#5D00E0] mb-1">
                    {sys.phoneLabel}
                  </p>
                  <p className="text-gray-900 font-bold text-base md:text-lg">
                    {sys.phone}
                  </p>
                  {sys.scheduleTitle && (
                    <div className="mt-3">
                      <p className="text-xs md:text-sm font-bold text-[#5D00E0]">
                        {sys.scheduleTitle}
                      </p>
                      <p className="text-gray-700 text-xs md:text-sm whitespace-pre-line mt-1">
                        {sys.schedule}
                      </p>
                    </div>
                  )}
                  {sys.languages && (
                    <p className="text-gray-700 text-xs md:text-sm whitespace-pre-line mt-2">
                      {sys.languages}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferPaymentSystems;
