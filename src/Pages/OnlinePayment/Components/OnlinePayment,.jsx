import React from "react";
import HeaderOnl from "./HeaderOnl";
import MainOnlcomponent from "./Pages/MainOnlcomponent";
import FooterOnl from "./FooterOnl";

export default function OnlinePayment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderOnl />

      {/* Main Content */}
      <main>
        <MainOnlcomponent />
      </main>
      <FooterOnl></FooterOnl>
    </div>
  );
}
