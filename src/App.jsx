import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

// Firebase & Store imports
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "./Pages/Acc/authStore";
import AuthModal from "./Pages/Acc/AuthModal";

// --- ԱՎԵԼԱՑՎԱԾ Է PEER-Ը ---
import { Peer } from "peerjs";

// Header, Footer and Page Header imports
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer/Footer";
import PageHeader from "./components/PageHeader";
import ScrollToTop from "./components/ScrollToTop";
import LocationTracker from "./Pages/Maps/LocationTracker";
import ChatButton from "./components/Chat/ChatButton";
import ChatWindow from "./components/Chat/ChatWindow";

// === ABOUT PAGES ===
import EvocabankAbout from "./Pages/About/EvocabankAbout";
import EvocaCulturePage from "./Pages/Career/EvocaCulturePage";
import EvocaAdvantagesPage from "./Pages/Career/BenefitsHero";
import EvocaFaq from "./Pages/Career/EvocaFaqPage";
import WorkAtEvocaPage from "./Pages/Career/WorkAtEvocaPage";
import EvocaCareers from "./Pages/Career/EvocaCareers";
import EvocaJobsList from "./Pages/Career/EvocaJobsList";
import JobDetail from "./Pages/Career/JobDetail";
import PracticePage from "./Pages/Career/PracticeHero";
import EvocaBridgePage from "./Pages/Career/EvocaBridgePage";

import EvocabankStructure from "./Pages/About/EvocabankStructure";
import EvocabankShareholders from "./Pages/About/EvocabankShareholders";
import EvocabankManagement from "./Pages/About/EvocabankManagement";
import ManagementDetail from "./Pages/About/ManagementDetail";
import EvocabankPartners from "./Pages/About/EvocabankPartners";
import AwardsPage from "./Pages/About/Awards";
import CSRComponent from "./Pages/About/CSR";
import LoanTariffsTablePage from "./Pages/About/LoanTariffsTablePage";
import BusinessLoanTariffsPage from "./Pages/About/BusinessLoanTariffsPage";
import CardTariffsPage from "./Pages/About/CardTariffsPage";
import DepositTariffsPage from "./Pages/About/DepositTariffsPage";
import ArchivePage from "./Pages/About/ArchivePage";
import AuditorsOpinionList from "./Pages/About/AuditorsOpinionList";
import FinancialStatementsList from "./Pages/About/FinancialStatementsList";
import InvestorPresentations from "./Pages/About/InvestorPresentations";
import SemiAnnualReports from "./Pages/About/SemiAnnualReports";
import AnnualReports from "./Pages/About/AnnualReports";
import Announcements from "./Pages/About/Announcements";
import ReviewsList from "./Pages/About/ReviewsList";
import ConstructionCompanies from "./Pages/DontHeaderPages/ConstructionCompanies";
import CustomerRights from "./Pages/DontHeaderPages/CustomerRights";

// === NEWS AND BLOG ===
import NewsPage from "./Pages/News/NewsPage";
import NewsArchive from "./Pages/News/NewsArchive";
import NewsDetailPage from "./Pages/News/NewsDetailPage";

import BlogPage from "./Pages/Blog/BlogPage";
import BlogArchive from "./Pages/Blog/BlogArchive";
import BlogDetailPage from "./Pages/Blog/BlogDetailPage";

// === BUSINESS ===
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

// === INDIVIDUALS ===
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
import DepositsPage from "./Pages/Individual/DepositsPage/DepositsPage";
import DepositDetail from "./Pages/Individual/DepositsPage/DepositDetail";
import DepositsImportantInfo from "./Pages/Individual/DepositsPage/DepositsImportantInfo";
import AccountOpeningService from "./Pages/Individual/AccountOpeningService/AccountOpeningService";
import UnallocatedMetalAccounts from "./Pages/Individual/AccountOpeningService/UnallocatedMetalAccounts";
import RemoteServiceNonResident from "./Pages/Individual/AccountOpeningService/RemoteServiceNonResident";
import PersonalBoxesSafe from "./Pages/Individual/AccountOpeningService/PersonalBoxesSafe";
import MoneyTransfers from "./Pages/Individual/MoneyTransfers/MoneyTransfers";
import TransferPaymentSystems from "./Pages/Individual/MoneyTransfers/TransferPaymentSystems";
import InvestmentServices from "./Pages/Individual/Securities/InvestmentServices";
import Bonds from "./Pages/Individual/Securities/Bonds";
import StocksCdaServices from "./Pages/Individual/Securities/StocksCdaServices";
import RepoTransactions from "./Pages/Individual/Securities/RepoTransactions";
import EvocaInvest from "./Pages/Individual/Securities/EvocaInvest";

// === BUSINESS LOANS AND SERVICES ===
import BusinessLoansList from "./Pages/Business/Loans/BusinessLoansList";
import BusinessLoanDetails from "./Pages/Business/Loans/BusinessLoanDetails";
import LeasingPage from "./Pages/Business/Leasing/LeasingPage";
import SpecialOffersPage from "./Pages/Business/Leasing/SpecialOffersPage";
import BusinessAccountOpening from "./Pages/Business/Accounts/BusinessAccountOpening";
import BusinessMetalAccounts from "./Pages/Business/Accounts/BusinessMetalAccounts";
import BusinessClassicalDeposit from "./Pages/Business/Deposits/BusinessClassicalDeposit";
import BusinessInvestmentServices from "./Pages/Business/JewelryMarket/BusinessInvestmentServices";
import BusinessBonds from "./Pages/Business/JewelryMarket/BusinessBonds";
import BusinessCdaServices from "./Pages/Business/JewelryMarket/BusinessCdaServices";
import BusinessRepoTransactions from "./Pages/Business/JewelryMarket/BusinessRepoTransactions";
import BusinessEvocaInvest from "./Pages/Business/EvocalNVEST/EvocalNVEST";

// === ONLINE PAYMENTS ===
import InstantPaymentsPage from "./Pages/OnlinePayment/Components/OnlinePayment,";
import EvocabankPage from "./Pages/OnlinePayment/Components/Pages/EvocabankPage";
import LoanRepaymentPage from "./Pages/OnlinePayment/Components/Pages/LoanRepaymentPage";
import LoanInputPage from "./Pages/OnlinePayment/Components/Pages/LoanInputPage";

import LegalActs from "./Pages/DontHeaderPages/LegalActs";

// === MAPS ===
import LiveUsersMap from "./Pages/Maps/LiveUsersMap";
import ProtectedRoute from "./Pages/Maps/ProtectedRoute";
import AlienatedProperty from "./Pages/DontHeaderPages/AlienatedProperty";
import PartnerCarDealerships from "./Pages/DontHeaderPages/PartnerCarDealerships";
import CustomerResidencyCriteria from "./Pages/DontHeaderPages/CustomerResidencyCriteria";
import Regulation from "./Pages/DontHeaderPages/Regulation";

function App() {
  const location = useLocation();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user); // <-- ՍՏԱՆՈՒՄ ԵՆՔ ԸՆԹԱՑԻԿ ՕԳՏԱՏԻՐՈՋԸ

  // СОСТОЯНИЕ ДЛЯ ЧАТА И ЗВОНКОВ
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [peerInstance, setPeerInstance] = useState(null);
  const [incomingCall, setIncomingCall] = useState(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // 1. АВТОРИЗАЦИЯ FIREBASE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [setUser]);

  // --- ՆՈՐ: PEERJS ԳԼՈԲԱԼ ՄԻԱՑՈՒՄ ---
  useEffect(() => {
    if (!user) return; // Միանում ենք միայն եթե օգտատերը մուտք է գործել

    const myPeerId = `chat-user-${user.uid}`;
    const peer = new Peer(myPeerId);

    peer.on("open", (id) => {
      console.log("📍 Գլոբալ Peer միացված է:", id);
    });

    peer.on("call", (call) => {
      console.log("📞 Մուտքային զանգ:", call.peer);
      setIncomingCall(call);
      setIsChatOpen(true); // Ավտոմատ բացում ենք չաթի պատուհանը
    });

    peer.on("error", (err) => {
      console.error("Peer սխալ:", err);
    });

    setPeerInstance(peer);

    return () => {
      peer.destroy();
    };
  }, [user]);
  // ------------------------------------

  // 2. ПРИНУДИТЕЛЬНЫЙ ЗАПРОС ГЕОЛОКАЦИИ ПРИ ВХОДЕ НА САЙТ
  useEffect(() => {
    const requestGeoPermission = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("📍 Доступ к геолокации разрешен:", position.coords);
          },
          (error) => {
            console.warn(
              "🚫 Геолокация отклонена или недоступна:",
              error.message,
            );
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          },
        );
      } else {
        console.warn("❌ Браузер не поддерживает геолокацию.");
      }
    };

    requestGeoPermission();
  }, []);

  const isStandalonePage =
    location.pathname === "/evoca_benefits" ||
    location.pathname === "/instant-payments" ||
    location.pathname === "/evocabank" ||
    location.pathname === "/loan-repayment" ||
    location.pathname === "/loan-input";

  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollToTop />

      <LocationTracker />

      {!isStandalonePage && <MainHeader />}
      {!isStandalonePage && <PageHeader />}

      <AuthModal />

      <main className="flex-1">
        <Routes>
          {/* MAPS - ЗАЩИЩЕННЫЙ МАРШРУТ */}
          <Route
            path="/live-map"
            element={
              <ProtectedRoute>
                <LiveUsersMap />
              </ProtectedRoute>
            }
          />
          {/* PAYMENTS */}
          <Route path="/instant-payments" element={<InstantPaymentsPage />} />
          <Route path="/evocabank" element={<EvocabankPage />} />
          <Route path="/loan-repayment" element={<LoanRepaymentPage />} />
          <Route path="/loan-input" element={<LoanInputPage />} />
          {/* NEWS */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/archive" element={<NewsArchive />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          {/* BLOG */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/archive" element={<BlogArchive />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          {/* BUSINESS */}
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
          <Route path="/leasing-evoca" element={<LeasingPage />} />
          <Route
            path="/leasing-special-offer"
            element={<SpecialOffersPage />}
          />
          {/* ABOUT AND HOME */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<EvocabankAbout />} />
          <Route path="/culture" element={<EvocaCulturePage />} />
          <Route path="/advantages" element={<EvocaAdvantagesPage />} />
          <Route path="/structure" element={<EvocabankStructure />} />
          <Route path="/shareholders" element={<EvocabankShareholders />} />
          <Route path="/management" element={<EvocabankManagement />} />
          <Route path="/management/:id" element={<ManagementDetail />} />
          <Route path="/partners" element={<EvocabankPartners />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/csr" element={<CSRComponent />} />
          <Route path="/auditors-opinion" element={<AuditorsOpinionList />} />
          <Route
            path="/financial-statements"
            element={<FinancialStatementsList />}
          />
          <Route path="/for-investors" element={<InvestorPresentations />} />
          <Route path="/semi-annual-reports" element={<SemiAnnualReports />} />
          <Route path="/annual-reports" element={<AnnualReports />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/reviews" element={<ReviewsList />} />
          {/* TARIFFS */}
          <Route
            path="/tariffs"
            element={<Navigate to="/tariffs/loans-to-individuals" replace />}
          />
          <Route
            path="/tariffs/loans-to-individuals"
            element={<LoanTariffsTablePage />}
          />
          <Route
            path="/tariffs/loans-to-legal-entities"
            element={<BusinessLoanTariffsPage />}
          />
          <Route
            path="/tariffs/commission-fees"
            element={<CardTariffsPage />}
          />
          <Route path="/tariffs/deposits" element={<DepositTariffsPage />} />
          <Route path="/tariffs/archive" element={<ArchivePage />} />
          {/* INDIVIDUALS */}
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
          {/* ИСПРАВЛЕННЫЙ МАРШРУТ ЗДЕСЬ */}
          <Route path="/personal-boxes-safe" element={<PersonalBoxesSafe />} />
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
          <Route path="/legal-acts" element={<LegalActs />} />{" "}
          <Route path="/regulation" element={<Regulation />} />
          <Route
            path="/customer-residency-criteria"
            element={<CustomerResidencyCriteria />}
          />
          <Route path="/alienated-property" element={<AlienatedProperty />} />
          <Route
            path="/construction-companies"
            element={<ConstructionCompanies />}
          />
          <Route
            path="/partner-car-dealerships"
            element={<PartnerCarDealerships />}
          />{" "}
          <Route path="/customer-rights" element={<CustomerRights />} />
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
          <Route path="/evoca_benefits" element={<EvocaBenefitsPage />} />
          <Route path="/faq" element={<EvocaFaq />} />
          {/* CAREERS */}
          <Route path="/how-to-apply" element={<EvocaCareers />} />
          <Route path="/work-at-evoca" element={<EvocaJobsList />} />
          <Route path="/work-at-evoca/:id" element={<JobDetail />} />
          <Route path="/work-at-evoca/stages" element={<WorkAtEvocaPage />} />
          <Route path="/internship" element={<PracticePage />} />
          <Route path="/evocabridge" element={<EvocaBridgePage />} />
          <Route path="*" element={<div />} />
        </Routes>
      </main>

      {!isStandalonePage && <Footer />}

      {/* --- ՓՈԽԱՆՑՎՈՒՄ ԵՆ PEERJS-Ի ՏՎՅԱԼՆԵՐԸ ՉԱԹԻՆ --- */}
      <ChatWindow
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        peerInstance={peerInstance}
        incomingCall={incomingCall}
        setIncomingCall={setIncomingCall}
      />

      <div className={isChatOpen ? "hidden sm:block" : "block"}>
        <ChatButton onClick={toggleChat} />
      </div>
    </div>
  );
}

export default App;
