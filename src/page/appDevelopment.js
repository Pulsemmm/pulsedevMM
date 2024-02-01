import React from "react";
import Appbanner from "../components/app-development/appbanner";
import AppDevel from "../components/app-development/appDevel";
import Ios from "../components/app-development/ios";
import Offerings from "../components/app-development/offerings";
import Friendly from "../components/app-development/friendly";
import Portfolio from "../components/content creator/portfolio";
import Applications from "../components/app-development/applications";
import Contactinfo from "../components/contact-us/contactinfo";
import ScrollToTop from "../components/shared/scrollToTop";

const AppDevelopment = () => {
  ScrollToTop();

  return (
    <div>
      <Appbanner />
      <AppDevel />
      <Ios />
      <Offerings />
      <Friendly />
      <Portfolio />
      <Applications />
      <Contactinfo />
    </div>
  );
};

export default AppDevelopment;
