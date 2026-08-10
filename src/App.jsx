import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

// 1. Импортируем обертку шапки, подвал и заголовок страниц
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer/Footer";
import PageHeader from "./components/PageHeader";
import ScrollToTop from "./components/ScrollToTop";

// === ИМПОРТЫ ДЛЯ СТРАНИЦ "О БАНКЕ" ===
import EvocabankAbout from "./Pages/About/EvocabankAbout";
import EvocabankStructure from "./Pages/About/EvocabankStructure";
import EvocabankShareholders from "./Pages/About/EvocabankShareholders";
import EvocabankManagement from "./Pages/About/EvocabankManagement";
import ManagementDetail from "./Pages/About/ManagementDetail";
import EvocabankPartners from "./Pages/About/EvocabankPartners";
import AwardsPage from "./Pages/About/Awards";
import CSRComponent from "./Pages/About/CSR";
import LoanTariffsTablePage from "./Pages/Tariffs/LoanTariffsTablePage"; // Тарифы для физлиц
import BusinessLoanTariffsPage from "./Pages/Tariffs/BusinessLoanTariffsPage"; // Тарифы для юридических лиц
import CardTariffsPage from "./Pages/Tariffs/CardTariffsPage"; // Комиссионные тарифы по платежным картам
import DepositTariffsPage from "./Pages/Tariffs/DepositTariffsPage"; // <-- Добавлен импорт тарифов по депозитам

// Նոր ավելացված կոմպոնենտները (բիզնես)
import GuaranteeAccordion from "./Pages/Business/Finance/AccordionItem";
import FactoringPage from "./Pages/Business/Finance/LoanSummarySection";
import LetterOfCreditPage from "./Pages/Business/Finance/LetterOfCreditPage";
import DocumentaryCollectionPage from "./Pages/Business/Finance/DocumentaryCollectionPage";
import VPosTerminalPage from "./Pages/Business/Digital/VPosTerminalPage";
import PosTerminalPage from "./Pages/Business/Digital/PosTerminalPage";
import PosTariffsPage from "./Pages/Business/Digital/TerminalsTariffsPage";
import TerminalInstallationForm from "./Pages/Business/Digital/TerminalInstallationForm";
import EvocaMobilePosPage from "./Pages/Business/Digital/EvocaMobilePosPage";
import BusinessMoneyTransfers from "./Pages/Business/Others/BusinessMoneyTransfers";

// 2. Импортируем страницы (физлица)
import HomePage from "./Pages/Individual/HomePage/HomePage";
import LoansPage from "./Pages/Individual/LoansPage/LoansPage";
import LoanDetailsPage from "./Pages/Individual/LoansPage/Components/LoanDetailsPage";
import CreditHistoryPage from "./Pages/Individual/LoansPage/CreditHistoryPage";
import LoansImportantInfo from "./Pages/Individual/LoansPage/LoansImportantInfo";
import CardsPage from "./Pages/Individual/CardsPage/CardsPage";
import CardDetailWindow from "./Pages/Individual/CardsPage/CardDetailWindow";
import CardsProvisionAndService from "./Pages/Individual/CardsPage/CardsProvisionAndService";
import PensionCardsPage from "./Pages/Individual/CardsPage/PensionCardsPage";
import EvocaBenefitsPage from "./Pages/Individual/CardsPage/EvocaBenefitsPage";
import EvocaSalary from "./Pages/Individual/EvocaSalaryandTouchCode/EvocaSalary";
import EvocaTouchPage from "./Pages/Individual/EvocaSalaryandTouchCode/EvocaTouchPage";
import EvocaCodesPage from "./Pages/Individual/EvocaSalaryandTouchCode/EvocaCodesPage";

// 3. Импортируем страницы вкладов (физлица)
import DepositsPage from "./Pages/Individual/DepositsPage/DepositsPage";
import DepositDetail from "./Pages/Individual/DepositsPage/DepositDetail";
import DepositsImportantInfo from "./Pages/Individual/DepositsPage/DepositsImportantInfo";

// 4. Импортируем страницу открытия и обслуживания счетов (физлица)
import AccountOpeningService from "./Pages/Individual/AccountOpeningService/AccountOpeningService";

// 5. Импортируем страницу առարկայազուրկ մետաղական հաշիվներ (физлица)
import UnallocatedMetalAccounts from "./Pages/Individual/AccountOpeningService/UnallocatedMetalAccounts";

// 6. Импортируем страницу ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
import RemoteServiceNonResident from "./Pages/Individual/AccountOpeningService/RemoteServiceNonResident";

// 7. Импортируем страницу անհատական պահատուփեր
import PersonalBoxesSafe from "./Pages/Individual/AccountOpeningService/PersonalBoxesSafe";

// 8. Импортируем страницу денежных переводов
import MoneyTransfers from "./Pages/Individual/MoneyTransfers/MoneyTransfers";

// 9. Импортируем страницу платежных систем
import TransferPaymentSystems from "./Pages/Individual/MoneyTransfers/TransferPaymentSystems";

// 10. Импортируем страницу инвестиционных услуг
import InvestmentServices from "./Pages/Individual/Securities/InvestmentServices";

// 11. Импортируем страницу облигаций
import Bonds from "./Pages/Individual/Securities/Bonds";

// 12. Импортируем страницу услуг ЦД
import StocksCdaServices from "./Pages/Individual/Securities/StocksCdaServices";

// 13. Импортируем страницу репо/обратных репо сделок
import RepoTransactions from "./Pages/Individual/Securities/RepoTransactions";

// 14. Импортируем страницу EvocaINVEST
import EvocaInvest from "./Pages/Individual/Securities/EvocaInvest";

// БИЗНЕС-КРЕДИТЫ
import BusinessLoansList from "./Pages/Business/Loans/BusinessLoansList";
import BusinessLoanDetails from "./Pages/Business/Loans/BusinessLoanDetails";

// ЛИЗИНГ
import LeasingPage from "./Pages/Business/Leasing/LeasingPage";
import SpecialOffersPage from "./Pages/Business/Leasing/SpecialOffersPage";

// БИЗНես-СЧЕТА
import BusinessAccountOpening from "./Pages/Business/Accounts/BusinessAccountOpening";
import BusinessMetalAccounts from "./Pages/Business/Accounts/BusinessMetalAccounts";

// БИЗНЕС-ДЕПОЗИТЫ
import BusinessClassicalDeposit from "./Pages/Business/Deposits/BusinessClassicalDeposit";

// БИЗНЕС-ИНВЕСТИЦИИ
import BusinessInvestmentServices from "./Pages/Business/JewelryMarket/BusinessInvestmentServices";
import BusinessBonds from "./Pages/Business/JewelryMarket/BusinessBonds";
import BusinessCdaServices from "./Pages/Business/JewelryMarket/BusinessCdaServices";
import BusinessRepoTransactions from "./Pages/Business/JewelryMarket/BusinessRepoTransactions";
import BusinessEvocaInvest from "./Pages/Business/EvocalNVEST/EvocalNVEST";

// === ИМПОРТЫ ДЛЯ СИСТЕМЫ ОНЛАЙН ПЛАТЕЖЕЙ ===
import InstantPaymentsPage from "./Pages/OnlinePayment/Components/OnlinePayment,";
import EvocabankPage from "./Pages/OnlinePayment/Components/Pages/EvocabankPage";
import LoanRepaymentPage from "./Pages/OnlinePayment/Components/Pages/LoanRepaymentPage";
import LoanInputPage from "./Pages/OnlinePayment/Components/Pages/LoanInputPage";
import ReviewsList from "./Pages/About/ReviewsList";

function App() {
  const location = useLocation();

  const isStandalonePage =
    location.pathname === "/evoca_benefits" ||
    location.pathname === "/instant-payments" ||
    location.pathname === "/evocabank" ||
    location.pathname === "/loan-repayment" ||
    location.pathname === "/loan-input";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {!isStandalonePage && <MainHeader />}
      {!isStandalonePage && <PageHeader />}

      <main className="flex-1">
        <Routes>
          {/* === РОУТЫ ДЛЯ МГНОВЕННЫХ ПЛАТЕЖЕЙ === */}
          <Route path="/instant-payments" element={<InstantPaymentsPage />} />
          <Route path="/evocabank" element={<EvocabankPage />} />
          <Route path="/loan-repayment" element={<LoanRepaymentPage />} />
          <Route path="/loan-input" element={<LoanInputPage />} />
          <Route path="/guarantee" element={<GuaranteeAccordion />} />
          <Route path="/factoring" element={<FactoringPage />} />
          <Route path="/letter-of-credit" element={<LetterOfCreditPage />} />
          <Route path="/collection" element={<DocumentaryCollectionPage />} />
          <Route path="/v-pos-terminal" element={<VPosTerminalPage />} />
          <Route path="/pos-terminal" element={<PosTerminalPage />} />
          <Route path="/pos-tariffs" element={<PosTariffsPage />} />
          <Route
            path="/terminal-application"
            element={<TerminalInstallationForm />}
          />
          <Route path="/evoca-mobile-pos" element={<EvocaMobilePosPage />} />
          <Route path="/evoca_benefits" element={<EvocaBenefitsPage />} />

          {/* БИЗНЕС-РОУТЫ */}
          <Route path="/business-loans" element={<BusinessLoansList />} />
          <Route path="/business-loans/:id" element={<BusinessLoanDetails />} />
          <Route
            path="/business-transfers"
            element={<BusinessMoneyTransfers />}
          />
          <Route
            path="/business-account-opening-and-services"
            element={<BusinessAccountOpening />}
          />
          <Route
            path="/business-unallocated-metal-accounts"
            element={<BusinessMetalAccounts />}
          />
          <Route
            path="/business-classical-deposit"
            element={<BusinessClassicalDeposit />}
          />
          <Route
            path="/business-investment-services"
            element={<BusinessInvestmentServices />}
          />
          <Route path="/business-bonds" element={<BusinessBonds />} />
          <Route
            path="/business-cda-services"
            element={<BusinessCdaServices />}
          />
          <Route
            path="/business-repo-transactions"
            element={<BusinessRepoTransactions />}
          />
          <Route
            path="/business-evocainvest"
            element={<BusinessEvocaInvest />}
          />

          {/* ЛИЗИНГ */}
          <Route path="/leasing-evoca" element={<LeasingPage />} />
          <Route
            path="/leasing-special-offer"
            element={<SpecialOffersPage />}
          />

          {/* СТАНДАРТНЫЕ РОУТЫ */}
          <Route path="/" element={<HomePage />} />

          {/* === РОУТЫ СТРАНИЦ "О БАНКЕ" И ТАРИФОВ === */}
          <Route path="/about" element={<EvocabankAbout />} />
          <Route path="/structure" element={<EvocabankStructure />} />
          <Route path="/shareholders" element={<EvocabankShareholders />} />
          <Route path="/management" element={<EvocabankManagement />} />
          <Route path="/management/:id" element={<ManagementDetail />} />
          <Route path="/partners" element={<EvocabankPartners />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/csr" element={<CSRComponent />} />

          {/* Редирект с общего /tariffs на физические лица */}
          <Route
            path="/tariffs"
            element={<Navigate to="/tariffs/loans-to-individuals" replace />}
          />

          {/* Тарифы для физических лиц */}
          <Route
            path="/tariffs/loans-to-individuals"
            element={<LoanTariffsTablePage />}
          />

          {/* Тарифы для юридических лиц (Бизнес-кредиты) */}
          <Route
            path="/tariffs/loans-to-legal-entities"
            element={<BusinessLoanTariffsPage />}
          />

          {/* Комиссионные тарифы по платежным картам */}
          <Route
            path="/tariffs/commission-fees"
            element={<CardTariffsPage />}
          />

          {/* Тарифы по депозитам */}
          <Route path="/tariffs/deposits" element={<DepositTariffsPage />} />

          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/loans/:id" element={<LoanDetailsPage />} />
          <Route path="/deposits" element={<DepositsPage />} />
          <Route path="/deposits/:id" element={<DepositDetail />} />
          <Route
            path="/deposits-important-information"
            element={<DepositsImportantInfo />}
          />
          <Route
            path="/account-opening-service"
            element={<AccountOpeningService />}
          />
          <Route
            path="/unallocated-metal-accounts"
            element={<UnallocatedMetalAccounts />}
          />
          <Route
            path="/remote-service-for-non-resident-clients"
            element={<RemoteServiceNonResident />}
          />
          <Route
            path="/individual-safe-deposit-boxes"
            element={<PersonalBoxesSafe />}
          />
          <Route path="/money-transfers" element={<MoneyTransfers />} />
          <Route
            path="/transfer-payment-systems"
            element={<TransferPaymentSystems />}
          />
          <Route path="/investment-services" element={<InvestmentServices />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/stocks-cda-services" element={<StocksCdaServices />} />
          <Route
            path="/stocks-repo-transactions"
            element={<RepoTransactions />}
          />
          <Route path="/stocks-evocainvest" element={<EvocaInvest />} />
          <Route path="/evocasalary" element={<EvocaSalary />} />
          <Route path="/evocatouch" element={<EvocaTouchPage />} />
          <Route path="/evoca-codes" element={<EvocaCodesPage />} />
          <Route
            path="/credit-history-and-score"
            element={<CreditHistoryPage />}
          />
          <Route
            path="/loans-important-information"
            element={<LoansImportantInfo />}
          />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/cards/:id" element={<CardDetailWindow />} />
          <Route
            path="/cards-provision-and-service"
            element={<CardsProvisionAndService />}
          />
          <Route path="/pension-cards" element={<PensionCardsPage />} />
          <Route path="*" element={<div />} />
        </Routes>
      </main>

      {!isStandalonePage && <Footer />}
    </div>
  );
}

export default App;
