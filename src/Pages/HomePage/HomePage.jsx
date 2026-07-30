import MainHeader from "../../components/MainHeader";
import BiometricScan from "./Components/BiometricScan.jsx";
import EvocaSlider from "./Components/EvocaSlider";

const HomePage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <EvocaSlider></EvocaSlider>
      <BiometricScan></BiometricScan>
    </>
  );
};
export default HomePage;
