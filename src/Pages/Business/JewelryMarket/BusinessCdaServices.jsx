import React from "react";

const BusinessCdaServices = () => {
  return (
    <div className="w-full bg-white sm:bg-transparent pt-[30px] sm:pt-[50px] pb-16">
      <div className="max-w-[1150px] mx-auto lg:ml-[300px] lg:mx-0 px-4 sm:px-6 lg:px-8">
        {/* Главный заголовок страницы */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-8 leading-snug">
          Հայաստանի Կենտրոնական դեպոզիտարիայի (ՀԿԴ) ծառայություններ
        </h1>

        {/* Текстовый блок */}
        <div className="mb-8 text-[#333333] text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումը իրականացնում է
            բացառապես Հաշվի Օպերատորների միջնորդությամբ:
          </p>

          <p>
            Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքած պայմանագրի
            հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից
            մատուցվող ծառայությունները:
          </p>

          <p>
            Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և
            կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՀԱ), մատուցում է
            ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց
            մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ՝
            մասնաճյուղերում:
          </p>
        </div>

        {/* Фиолетовые ссылки на документы */}
        <div className="flex flex-col gap-4 mb-12">
          <a
            href="#"
            className="text-[#6000ff] font-medium underline hover:no-underline text-sm sm:text-base leading-snug"
          >
            Հայաստանի Կենտրոնական դեպոզիտարիայի կողմից մատուցվող
            ծառայությունների միջնորդավորման գործունեության սակագներ (Սակագների
            ուժի մեջ մտնելու ամսաթիվ – 01.04.2026թ.)
          </a>

          <a
            href="#"
            className="text-[#6000ff] font-medium underline hover:no-underline text-sm sm:text-base leading-snug"
          >
            Հայաստանի Կենտրոնական դեպոզիտարիայի կողմից մատուցվող
            ծառայությունների միջնորդավորման գործունեության կանոններ
          </a>
        </div>

        {/* Дата обновления страницы */}
        <div className="text-right text-xs sm:text-sm text-[#777777]">
          Թարմացվել է` 22/05/2026 10:27
        </div>
      </div>
    </div>
  );    
};

export default BusinessCdaServices;
