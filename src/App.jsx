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
import LoanDetailsPage from "./Pages/LoansPage/Components/LoanDetailsPage"
import CreditHistoryPage from "./Pages/LoansPage/CreditHistoryPage";
import LoansImportantInfo from "./Pages/LoansPage/LoansImportantInfo";
import CardsPage from "./Pages/CardsPage/CardsPage";
import CardDetailWindow from "./Pages/CardsPage/CardDetailWindow";
import CardsProvisionAndService from "./Pages/CardsPage/CardsProvisionAndService";
import PensionCardsPage from "./Pages/CardsPage/PensionCardsPage";
import EvocaBenefitsPage from "./Pages/CardsPage/EvocaBenefitsPage";

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
          {/* Автономная страница без хедера и футера */}
          <Route path="/evoca_benefits" element={<EvocaBenefitsPage />} />

          {/* Стандартные страницы */}
          <Route path="/" element={<HomePage />} />
          <Route path="/loans" element={<LoansPage />} />

          {/* Маршрут для детальной страницы кредита по ID */}
          <Route path="/loans/:id" element={<LoanDetailsPage />} />

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

      {/* Футер скрывается для /evoca_benefits */}
      {!isStandalonePage && <Footer />}
    </div>
  );
}

export default App;
