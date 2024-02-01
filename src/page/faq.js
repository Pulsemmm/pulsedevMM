import React from "react";
import FaqBanner from "../components/faq/faqBanner";
import FaqAccordians from "../components/faq/faqAccordians";
import Contactinfo from "../components/contact-us/contactinfo";

const Faq = () => {
  return (
    <div>
      <FaqBanner />
      <FaqAccordians />
      <Contactinfo />
    </div>
  );
};

export default Faq;
