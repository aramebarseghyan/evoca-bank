import React, { useState } from "react";
import Header1 from "../components/Header/Header1";
import Header2 from "../components/Header/Header2";
import ScrollHeader from "../components/Header/ScrollHeader";
import MobileMenu from "../components/Header/MobileMenu";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Header1 onOpenMenu={() => setIsMobileMenuOpen(true)} />
      <Header2 />
      <ScrollHeader onOpenMenu={() => setIsMobileMenuOpen(true)} />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default MainHeader;
