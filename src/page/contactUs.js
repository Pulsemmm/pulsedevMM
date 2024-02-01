import React from "react";
import Contactbanner from "../components/contact-us/contactbanner";
import Contactinfo from "../components/contact-us/contactinfo";
import Map from "../components/contact-us/ultraMap";
import Calender from "../components/contact-us/calender";
import ScrollToTop from "../components/shared/scrollToTop";

const ContactUs = () => {
  ScrollToTop();
  return (
    <div>
      <Contactbanner />
      <Contactinfo />
      <Map />
      <Calender />
    </div>
  );
};

export default ContactUs;
