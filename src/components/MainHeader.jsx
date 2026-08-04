import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header1 from "../components/Header/Header1";
import Header2 from "../components/Header/Header2";
import ScrollHeader from "../components/Header/ScrollHeader";
import MobileMenu from "../components/Header/MobileMenu";
import SubHeader from "../components/Header/SubHeader";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="relative w-full z-40 bg-white shadow-sm">
      <Header1 onOpenMenu={() => setIsMobileMenuOpen(true)} />
      <Header2 />

      {!isHomePage && <SubHeader />}

      <ScrollHeader onOpenMenu={() => setIsMobileMenuOpen(true)} />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

export default MainHeader;
