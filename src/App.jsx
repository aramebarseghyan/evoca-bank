import { Routes, Route } from "react-router-dom";
import "./App.css";

// 1. Импортируем Шапку и Подвал
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer/Footer";

// 2. Импортируем страницы
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/loans" element={<div />} />
          <Route path="/cards" element={<div />} />

          <Route path="*" element={<div />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
