import { Routes, Route } from "react-router-dom";
import "./App.css";

// 1. Импортируем обертку шапки, подвал и заголовок страниц
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer/Footer";
import PageHeader from "./components/PageHeader";
import ScrollToTop from "./components/ScrollToTop"; // <-- Добавили новый импорт

// 2. Импортируем страницы
import HomePage from "./Pages/HomePage/HomePage";
import LoansPage from "./Pages/LoansPage/LoansPage";
import CreditHistoryPage from "./Pages/LoansPage/CreditHistoryPage";
import LoansImportantInfo from "./Pages/LoansPage/LoansImportantInfo";
import CardsPage from "./Pages/CardsPage/CardsPage";
import CardDetailWindow from "./Pages/CardsPage/CardDetailWindow";
import CardsProvisionAndService from "./components/ScrollToTop"; // Импорт страницы условий карт

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Этот компонент будет следить за URL и скроллить наверх */}
      <ScrollToTop />

      <MainHeader />

      {/* Автоматически отображается на всех страницах, кроме Главной (HomePage) */}
      <PageHeader />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loans" element={<LoansPage />} />

          <Route
            path="/credit-history-and-score"
            element={<CreditHistoryPage />}
          />

          <Route
            path="/loans-important-information"
            element={<LoansImportantInfo />}
          />

          {/* Страница списка карт */}
          <Route path="/cards" element={<CardsPage />} />

          {/* Динамический маршрут для отдельной карты по её ID */}
          <Route path="/cards/:id" element={<CardDetailWindow />} />

          {/* Страница «Քարտերի տրամադրում և սպասարկում» */}
          <Route
            path="/cards-provision-and-service"
            element={<CardsProvisionAndService />}
          />

          <Route path="*" element={<div />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
