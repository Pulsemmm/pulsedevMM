import React from "react";
import Logobanner from "../components/logo design/logobanner";
import Logo from "../components/logo design/logo";
import Portfolio from "../components/content creator/portfolio";
import Successstories from "../components/portfolio/successstories";
import Logos from "../components/logo design/logos";
import Branding from "../components/logo design/branding";
import Contactinfo from "../components/contact-us/contactinfo";
import BrandPricing from "../components/logo design/brandPricing";
import ScrollToTop from "../components/shared/scrollToTop";

const LogoDesign = () => {
  ScrollToTop();

  return (
    <div>
      <Logobanner />
      <Logo />
      <Portfolio />
      <Logos />
      <Branding />
      <BrandPricing />
      <Contactinfo />
    </div>
  );
};

export default LogoDesign;
