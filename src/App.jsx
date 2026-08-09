import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// 1. Импортируем обертку шапки, подвал и заголовок страниц
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer/Footer";
import PageHeader from "./components/PageHeader";
import ScrollToTop from "./components/ScrollToTop";

// 2. Импортируем страницы
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

// 3. Импортируем страницы вкладов
import DepositsPage from "./Pages/Individual/DepositsPage/DepositsPage";
import DepositDetail from "./Pages/Individual/DepositsPage/DepositDetail";
import DepositsImportantInfo from "./Pages/Individual/DepositsPage/DepositsImportantInfo";

// 4. Импортируем страницу открытия и обслуживания счетов
import AccountOpeningService from "./Pages/Individual/AccountOpeningService/AccountOpeningService";

// 5. Импортируем страницу առարկայազուրկ մետաղական հաշիվներ
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

// 🔥 БИЗНЕС-КРЕДИТЫ: Импортируем список и страницу деталей
import BusinessLoansList from "./Pages/Business/Loans/BusinessLoansList";
import BusinessLoanDetails from "./Pages/Business/Loans/BusinessLoanDetails";

// 🔥 ЛИЗИНГ И СПЕЦПРЕДЛОЖЕНИЯ
import LeasingPage from "./Pages/Business/Leasing/LeasingPage";
import SpecialOffersPage from "./Pages/Business/Leasing/SpecialOffersPage";

function App() {
  const location = useLocation();

  // Только /evoca_benefits остается автономной страницей без шапки и футера
  const isStandalonePage = location.pathname === "/evoca_benefits";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {/* Шапки будут отображаться для всех страниц, кроме /evoca_benefits */}
      {!isStandalonePage && <MainHeader />}
      {!isStandalonePage && <PageHeader />}

      <main className="flex-1">
        <Routes>
          {/* Автономная страница */}
          <Route path="/evoca_benefits" element={<EvocaBenefitsPage />} />

          {/* 🔥 РОУТЫ ДЛЯ БИЗНЕС-КРЕДИТОВ */}
          <Route path="/business-loans" element={<BusinessLoansList />} />
          <Route path="/business-loans/:id" element={<BusinessLoanDetails />} />

          {/* 🔥 РОУТЫ ДЛЯ ЛИЗИНГА И СПЕЦПРЕДЛОЖЕНИЙ */}
          <Route path="/leasing-evoca" element={<LeasingPage />} />
          <Route
            path="/leasing-special-offer"
            element={<SpecialOffersPage />}
          />

          {/* Стандартные страницы */}
          <Route path="/" element={<HomePage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/loans/:id" element={<LoanDetailsPage />} />

          {/* СТРАНИЦЫ ВКЛАДОВ */}
          <Route path="/deposits" element={<DepositsPage />} />
          <Route path="/deposits/:id" element={<DepositDetail />} />
          <Route
            path="/deposits-important-information"
            element={<DepositsImportantInfo />}
          />

          {/* СТРАНИЦА ОТКРЫТИЯ И ОБСЛУЖИВАНИЯ СЧЕТОВ */}
          <Route
            path="/account-opening-service"
            element={<AccountOpeningService />}
          />

          {/* СТРАНИЦА МЕТАЛЛИЧЕСКИХ СЧЕТОВ */}
          <Route
            path="/unallocated-metal-accounts"
            element={<UnallocatedMetalAccounts />}
          />

          {/* СТРАНИЦА УДАЛЕННОГО ОБСЛУЖИВАНИЯ НЕ РЕЗИДЕНТОВ */}
          <Route
            path="/remote-service-for-non-resident-clients"
            element={<RemoteServiceNonResident />}
          />

          {/* СТРАНИЦԱ ԱՆՀԱՏԱԿԱՆ ՊԱՀԱՏՈՒՓԵՐ (Personal Boxes Safe) */}
          <Route path="/personal-boxes-safe" element={<PersonalBoxesSafe />} />

          {/* СТРАНИЦЫ ПЕРЕВОДОВ */}
          <Route path="/money-transfers" element={<MoneyTransfers />} />
          <Route
            path="/transfer-payment-systems"
            element={<TransferPaymentSystems />}
          />

          {/* СТРАНИЦА ИНВЕСТИЦИОННЫХ УСЛУГ */}
          <Route path="/investment-services" element={<InvestmentServices />} />

          {/* СТРАНИЦА ОБЛИГАЦИЙ */}
          <Route path="/bonds" element={<Bonds />} />

          {/* СТРАНИЦА УСЛУГ ЦД */}
          <Route path="/stocks-cda-services" element={<StocksCdaServices />} />

          {/* СТРАНИЦА РЕПО/ОБРАТНЫХ РЕПО СДЕЛОК */}
          <Route
            path="/stocks-repo-transactions"
            element={<RepoTransactions />}
          />

          {/* СТРАНИЦА EVOCAINVEST */}
          <Route path="/stocks-evocainvest" element={<EvocaInvest />} />

          {/* СТРАНИЦЫ SALARY, TOUCH И CODES */}
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
