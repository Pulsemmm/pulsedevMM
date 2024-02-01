import React from "react";
import SeoBanner from "../components/seo/seoBanner";
import SeoServices from "../components/seo/seoServices";
import Plan from "../components/seo/plan";
import Results from "../components/seo/results";
import Reasons from "../style/page/seo/reasons";
import Contactinfo from "../components/contact-us/contactinfo";
import SeoPricing from "../components/seo/seoPricing";
import ScrollToTop from "../components/shared/scrollToTop";

const Seo = () => {
  ScrollToTop();

  return (
    <div>
      <SeoBanner />
      <SeoServices />
      <Plan />
      <Results />
      <Reasons />
      <SeoPricing />
      <Contactinfo />
    </div>
  );
};

export default Seo;
