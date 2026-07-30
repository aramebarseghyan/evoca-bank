import MainHeader from "../../components/MainHeader";
import BiometricScan from "./Components/BiometricScan.jsx";
import EvocaBackground from "./Components/EvocaBackground.jsx";
import EvocaSlider from "./Components/EvocaSlider";

const HomePage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <EvocaSlider></EvocaSlider>
      <BiometricScan></BiometricScan>
      <EvocaBackground></EvocaBackground>
    </>
  );
};
export default HomePage;
