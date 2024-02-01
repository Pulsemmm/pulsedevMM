import React from "react";
import Aboutbanner from "../components/about/aboutbanner";
import WhyweRock from "../components/about/whyweRock";
import Team from "../components/about/team";
import Workwithus from "../components/about/workwithus";
import ScrollToTop from "../components/shared/scrollToTop";

const About = () => {
  ScrollToTop();
  return (
    <>
      <Aboutbanner />
      <WhyweRock />
      <Team />
      <Workwithus />
    </>
  );
};

export default About;
