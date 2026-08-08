import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// 1. Импортируем обертку шапки, подвал и заголовок страниц
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer/Footer";
import PageHeader from "./components/PageHeader";
import ScrollToTop from "./components/ScrollToTop";

// 2. Импортируем страницы
import HomePage from "./Pages/HomePage/HomePage";
import LoansPage from "./Pages/LoansPage/LoansPage";
import LoanDetailsPage from "./Pages/LoansPage/Components/LoanDetailsPage";
import CreditHistoryPage from "./Pages/LoansPage/CreditHistoryPage";
import LoansImportantInfo from "./Pages/LoansPage/LoansImportantInfo";
import CardsPage from "./Pages/CardsPage/CardsPage";
import CardDetailWindow from "./Pages/CardsPage/CardDetailWindow";
import CardsProvisionAndService from "./Pages/CardsPage/CardsProvisionAndService";
import PensionCardsPage from "./Pages/CardsPage/PensionCardsPage";
import EvocaBenefitsPage from "./Pages/CardsPage/EvocaBenefitsPage";

// 3. Импортируем страницы вкладов
import DepositsPage from "./Pages/DepositsPage/DepositsPage";
import DepositDetail from "./Pages/DepositsPage/DepositDetail";
import DepositsImportantInfo from "./Pages/DepositsPage/DepositsImportantInfo";

// 4. Импортируем страницу открытия и обслуживания счетов
import AccountOpeningService from "./Pages/AccountOpeningService/AccountOpeningService";

// 5. Импортируем страницу առարկայազուրկ մետաղական հաշիվներ
import UnallocatedMetalAccounts from "./Pages/AccountOpeningService/UnallocatedMetalAccounts";

// 6. Импортируем страницу ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
import RemoteServiceNonResident from "./Pages/AccountOpeningService/RemoteServiceNonResident";

// 7. Импортируем страницу անհատական պահատուփեր
import PersonalBoxesSafe from "./Pages/AccountOpeningService/PersonalBoxesSafe";

// 8. Импортируем страницу денежных переводов
import MoneyTransfers from "./Pages/MoneyTransfers/MoneyTransfers"; // Укажите правильный путь к файлу вашей страницы

function App() {
  const location = useLocation();

  // Проверяем, открыта ли страница без стандартных элементов
  const isStandalonePage = location.pathname === "/evoca_benefits";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {/* Шапки скрываются для /evoca_benefits */}
      {!isStandalonePage && <MainHeader />}
      {!isStandalonePage && <PageHeader />}

      <main className="flex-1">
        <Routes>
          {/* Автономная страница */}
          <Route path="/evoca_benefits" element={<EvocaBenefitsPage />} />

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

          {/* СТРАНИЦА АՆՀԱՏԱԿԱՆ ՊԱՀԱՏՈՒՓԵՐ (Personal Boxes Safe) */}
          <Route path="/personal-boxes-safe" element={<PersonalBoxesSafe />} />

          {/* СТРАНИЦА ДЕНЕЖНЫХ ПЕРЕВОДОВ */}
          <Route path="/money-transfers" element={<MoneyTransfers />} />

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
