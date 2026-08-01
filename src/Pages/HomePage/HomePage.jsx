import MainHeader from "../../components/MainHeader";
import BiometricScan from "./Components/BiometricScan.jsx";
import CardSlider from "./Components/CardSlider.jsx";
import EvocaBackground from "./Components/EvocaBackground.jsx";
import EvocaSlider from "./Components/EvocaSlider";
import LoanCalculator from "./Components/LoanCalculator.jsx";

const HomePage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <EvocaSlider></EvocaSlider>
      <BiometricScan></BiometricScan>
      <EvocaBackground></EvocaBackground>
      <CardSlider></CardSlider>
      <LoanCalculator></LoanCalculator>
    </>
  );
};
export default HomePage;
