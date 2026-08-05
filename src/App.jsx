import { Routes, Route } from "react-router-dom";
import "./App.css";

// 1. Импортируем обертку шапки и подвал
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer/Footer";

// 2. Импортируем страницы
import HomePage from "./Pages/HomePage/HomePage";
import LoansPage from "./Pages/LoansPage/LoansPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/cards" element={<div />} />
          <Route path="*" element={<div />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
