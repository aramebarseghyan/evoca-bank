import MainHeader from "../../components/MainHeader";
import BiometricScan from "./Components/BiometricScan.jsx";
import CardSlider from "./Components/CardSlider.jsx";
import EvocaBackground from "./Components/EvocaBackground.jsx";
import EvocaSlider from "./Components/EvocaSlider";
import LoanCalculator from "./Components/LoanCalculator.jsx";
import MobilePromo from "./Components/MobilePromo.jsx";

const HomePage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <EvocaSlider></EvocaSlider>
      <BiometricScan></BiometricScan>
      <EvocaBackground></EvocaBackground>
      <CardSlider></CardSlider>
      <LoanCalculator></LoanCalculator>
      <MobilePromo></MobilePromo>
    </>
  );
};
export default HomePage;
