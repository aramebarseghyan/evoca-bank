// Функция для очистки языковых префиксов (/hy, /ru, /en) из URL
export const normalizePath = (path) => {
  return path.replace(/^\/(hy|ru|en)/, "") || "/";
};

export const subNavigationGroups = [
  // ==========================================
  //  ԱՆՀԱՏ (ФИЗИЧЕСКИЕ ЛИЦА)
  // ==========================================
  {
    mainPath: "/loans",
    isBusiness: false,
    paths: [
      "/loans",
      "/credit-history-and-score",
      "/loans-important-information",
    ],
    items: [
      { name: "Վարկեր", path: "/loans" },
      {
        name: "Վարկային պատմություն և սքոր",
        path: "/credit-history-and-score",
      },
      { name: "Կարևոր տեղեկատվություն", path: "/loans-important-information" },
    ],
  },
  {
    mainPath: "/cards",
    isBusiness: false,
    paths: [
      "/cards",
      "/cards-provision-and-service",
      "/pension-cards",
      "/evoca_benefits",
    ],
    items: [
      { name: "Քարտեր", path: "/cards" },
      {
        name: "Քարտերի տրամադրում և սպասարկում",
        path: "/cards-provision-and-service",
      },
      {
        name: "Սոցիալական ապահովության վճարային քարտեր",
        path: "/pension-cards",
      },
      { name: "Evoca Benefits", path: "/evoca_benefits" },
    ],
  },
  {
    mainPath: "/deposits",
    isBusiness: false,
    paths: ["/deposits", "/deposits-important-information"],
    items: [
      { name: "Ավանդներ", path: "/deposits" },
      {
        name: "Կարևոր տեղեկատվություն",
        path: "/deposits-important-information",
      },
    ],
  },
  {
    mainPath: "/account-opening-service",
    isBusiness: false,
    paths: [
      "/accounts",
      "/account-opening-service",
      "/unallocated-metal-accounts",
      "/remote-service-for-non-resident-clients",
      "/personal-boxes-safe",
    ],
    items: [
      {
        name: "Հաշիվների բացում և սպասարկում",
        path: "/account-opening-service",
      },
      {
        name: "Առարկայազուրկ մետաղական հաշիվներ",
        path: "/unallocated-metal-accounts",
      },
      {
        name: "Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում",
        path: "/remote-service-for-non-resident-clients",
      },
      { name: "Պահատուփեր", path: "/personal-boxes-safe" },
    ],
  },
  {
    mainPath: "/money-transfers",
    isBusiness: false,
    paths: ["/money-transfers", "/transfer-payment-systems"],
    items: [
      { name: "Դրամական փոխանցումներ", path: "/money-transfers" },
      { name: "Վճարային համակարգեր", path: "/transfer-payment-systems" },
    ],
  },
  {
    mainPath: "/investment-services",
    isBusiness: false,
    paths: [
      "/investment-services",
      "/bonds",
      "/stocks-cda-services",
      "/stocks-repo-transactions",
      "/stocks-evocainvest",
    ],
    items: [
      { name: "Ներդրումային ծառայություններ", path: "/investment-services" },
      { name: "Պարտատոմսեր", path: "/bonds" },
      { name: "ՀԿԴ ծառայություններ", path: "/stocks-cda-services" },
      {
        name: "Ռեպո/Հակադարձ Ռեպո գործարքներ",
        path: "/stocks-repo-transactions",
      },
      { name: "EvocaINVEST", path: "/stocks-evocainvest" },
    ],
  },

  // ==========================================
  //  ԲԻԶՆԵՍ (БИЗНЕС)
  // ==========================================
  {
    mainPath: "/business-loans",
    isBusiness: true,
    paths: ["/business-loans"],
    items: [{ name: "Բիզնես վարկեր", path: "/business-loans" }],
  },
  {
    mainPath: "/leasing-evoca",
    isBusiness: true,
    paths: ["/leasing-evoca", "/leasing-special-offer"],
    items: [
      { name: "Evoca Leasing", path: "/leasing-evoca" },
      { name: "Հատուկ առաջարկ", path: "/leasing-special-offer" },
    ],
  },
  {
    mainPath: "/business-account-opening-and-services",
    isBusiness: true,
    paths: [
      "/business-account-opening-and-services",
      "/business-unallocated-metal-accounts",
    ],
    items: [
      {
        name: "Հաշիվների բացում և սպասարկում",
        path: "/business-account-opening-and-services",
      },
      {
        name: "Առարկայազուրկ մետաղական հաշիվներ",
        path: "/business-unallocated-metal-accounts",
      },
    ],
  },
  {
    mainPath: "/business-classical-deposit",
    isBusiness: true,
    paths: ["/business-classical-deposit"],
    items: [{ name: "Դասական ավանդ", path: "/business-classical-deposit" }],
  },
  {
    mainPath: "/business-investment-services",
    isBusiness: true,
    paths: [
      "/business-investment-services",
      "/business-bonds",
      "/business-cda-services",
      "/business-repo-transactions",
      "/business-evocainvest",
    ],
    items: [
      {
        name: "Ներդրումային ծառայություններ",
        path: "/business-investment-services",
      },
      { name: "Պարտատոմսեր", path: "/business-bonds" },
      { name: "ՀԿԴ ծառայություններ", path: "/business-cda-services" },
      {
        name: "Ռեպո/Հակադարձ ռեպո գործարքներ",
        path: "/business-repo-transactions",
      },
      { name: "EvocaINVEST", path: "/business-evocainvest" },
    ],
  },
  {
    mainPath: "/guarantee",
    isBusiness: true,
    paths: ["/guarantee", "/factoring", "/letter-of-credit", "/collection"],
    items: [
      { name: "Երաշխիք", path: "/guarantee" },
      { name: "Ֆակտորինգային ֆինանսավորում", path: "/factoring" },
      { name: "Ակրեդիտիվ", path: "/letter-of-credit" },
      { name: "Ինկասո", path: "/collection" },
    ],
  },
  {
    mainPath: "/v-pos-terminal",
    isBusiness: true,
    paths: [
      "/v-pos-terminal",
      "/pos-terminal",
      "/pos-tariffs",
      "/terminal-application",
      "/evoca-mobile-pos",
    ],
    items: [
      { name: "V-POS Տերմինալ", path: "/v-pos-terminal" },
      { name: "POS Տերմինալ", path: "/pos-terminal" },
      { name: "Սակագներ", path: "/pos-tariffs" },
      { name: "Տերմինալի տեղադրման հայտ", path: "/terminal-application" },
      { name: "Evoca Mobile POS mPOS", path: "/evoca-mobile-pos" },
    ],
  },
  {
    mainPath: "/individual-safe-deposit-boxes",
    isBusiness: true,
    paths: ["/individual-safe-deposit-boxes", "/business-transfers"],
    items: [
      { name: "Պահատուփեր", path: "/individual-safe-deposit-boxes" },
      { name: "Փոխանցումներ", path: "/business-transfers" },
    ],
  },

  // ==========================================
  //  ՄԵՐ ՄԱՍԻՆ (О НАС)
  // ==========================================
  {
    mainPath: "/about",
    isBusiness: false,
    paths: [
      "/about",
      "/structure",
      "/shareholders",
      "/management",
      "/partners",
      "/awards",
      "/reviews",
      "/csr",
    ],
    items: [
      { name: "Ընդհանուր", path: "/about" },
      { name: "Կառուցվածք", path: "/structure" },
      { name: "Բաժնետերեր", path: "/shareholders" },
      { name: "Ղեկավարություն", path: "/management" },
      { name: "Գործընկերներ", path: "/partners" },
      { name: "Մրցանակներ", path: "/awards" },
      { name: "Կարծիքներ", path: "/reviews" },
      { name: "CSR", path: "/csr" },
    ],
  },

  // ==========================================
  //  ՍԱԿԱԳՆԵՐ (ТАРИФЫ)
  // ==========================================
  {
    mainPath: "/tariffs",
    isBusiness: false,
    paths: [
      "/tariffs",
      "/tariffs/loans-to-individuals",
      "/tariffs/loans-to-legal-entities",
      "/tariffs/commission-fees",
      "/tariffs/deposits",
      "/tariffs/archive",
    ],
    items: [
      {
        name: "Վարկեր ֆիզիկական անձանց",
        path: "/tariffs/loans-to-individuals",
      },
      {
        name: "Վարկեր իրավաբանական անձանց",
        path: "/tariffs/loans-to-legal-entities",
      },
      { name: "Միջնորդավճարների սակագները", path: "/tariffs/commission-fees" },
      { name: "Ավանդների սակագներ", path: "/tariffs/deposits" },
      { name: "Արխիվ", path: "/tariffs/archive" },
    ],
  },

  // ==========================================
  //  ՀԱՇՎԵՏՎՈՒԹՅՈՒՆՆԵՐ (ОТЧЕТЫ)
  // ==========================================
  {
    mainPath: "/auditors-opinion",
    isBusiness: false,
    paths: [
      "/auditors-opinion",
      "/financial-statements",
      "/for-investors",
      "/semi-annual-reports",
      "/annual-reports",
    ],
    items: [
      { name: "Աուդիտորական եզրակացություն", path: "/auditors-opinion" },
      { name: "Ֆինանսական հաշվետվություններ", path: "/financial-statements" },
      { name: "Ներդրողների համար", path: "/for-investors" },
      { name: "Կիսամյակային հաշվետվություն", path: "/semi-annual-reports" },
      { name: "Տարեկան հաշվետվություն", path: "/annual-reports" },
    ],
  },

  // ==========================================
  //  ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆՆԵՐ (ОБЪЯВЛЕНИЯ)
  // ==========================================
  {
    mainPath: "/announcements",
    isBusiness: false,
    paths: ["/announcements"],
    items: [{ name: "Հայտարարություններ", path: "/announcements" }],
  },

  // ==========================================
  //  ԿԱՐԻԵՐԱ 1: Evoca Լայֆ
  // ==========================================
  {
    mainPath: "/culture",
    isBusiness: false,
    paths: ["/culture", "/advantages", "/faq", "/how-to-apply", "/evoca-life"],
    items: [
      { name: "Մշակույթ", path: "/culture" },
      { name: "Առավելություններ", path: "/advantages" },
      { name: "Հաճախ տրվող հարցեր", path: "/faq" },
      {
        name: "Ինչպես ընդունվել աշխատանքի Evocabank-ում",
        path: "/how-to-apply",
      },
    ],
  },

  // ==========================================
  //  ԿԱՐԻԵՐԱ 2: Աշխատանք և պրակտիկա
  // ==========================================
  {
    mainPath: "/work-at-evoca",
    isBusiness: false,
    paths: ["/work-at-evoca", "/internship", "/evocabridge", "/career"],
    items: [
      { name: "Աշխատանք Evoca-ում", path: "/work-at-evoca" },
      { name: "Ուսումնական պրակտիկա", path: "/internship" },
      { name: "EvocaBRIDGE", path: "/evocabridge" },
    ],
  },
];
