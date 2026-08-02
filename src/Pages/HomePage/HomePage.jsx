import MainHeader from "../../components/MainHeader";
import BiometricScan from "./Components/BiometricScan.jsx";
import CardSlider from "./Components/CardSlider.jsx";
import EvocaBackground from "./Components/EvocaBackground.jsx";
import EvocaSlider from "./Components/EvocaSlider";
import LatestNews from "./Components/LatestNews.jsx";
import LoanCalculator from "./Components/LoanCalculator.jsx";
import MobilePromo from "./Components/MobilePromo.jsx";
import Partners from "./Components/Partners.jsx";

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
      <Partners></Partners>
      <LatestNews></LatestNews>
    </>
  );
};
export default HomePage;
