import React from "react";
import SBanner from "../components/ourservices/Sbanner";
import Services from "../components/ourservices/services";
import Marketingservices from "../components/ourservices/marketingservices";
import Slider from "../components/home/slider";
import Workwithus from "../components/about/workwithus";
import ScrollToTop from "../components/shared/scrollToTop";
const Ourservices = () => {
  ScrollToTop();
  return (
    <>
      <SBanner />
      <Services />
      <Marketingservices />
      <Slider />
      <Workwithus />
    </>
  );
};

export default Ourservices;
