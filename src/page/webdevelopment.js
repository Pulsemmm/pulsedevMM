import React from "react";
import Webbanner from "../components/web development/webbanner";
import Web from "../components/web development/web";
import Portfolio from "../components/content creator/portfolio";
import Successstories from "../components/portfolio/successstories";
import Contactinfo from "../components/contact-us/contactinfo";
import ScrollToTop from "../components/shared/scrollToTop";

const Webdevelopment = () => {
  ScrollToTop();
  return (
    <div>
      <Webbanner />
      <Web />
      <div className="for-padding pt-md-5">
        <Portfolio />
      </div>
      <Successstories
        header="Code with Purpose, Design with Passion"
        hide="d-none"
      />
      <Contactinfo />
    </div>
  );
};

export default Webdevelopment;
