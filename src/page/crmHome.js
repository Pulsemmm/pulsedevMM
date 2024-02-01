import React from "react";
import CrmBanner from "../components/crmHome/crmBanner";
import AutomatedSystem from "../components/crmHome/automatedSystem";
import Pricing from "../components/crmHome/pricing";
import Meeting from "../components/crmHome/meeting";
import Partner from "../components/crmHome/partner";
import Army from "../components/crmHome/army";
import CrmFooter from "../components/crmHome/crmFooter";
import ScrollToTop from "../components/shared/scrollToTop";

const CrmHome = () => {
  ScrollToTop();
  return (
    <div>
      <CrmBanner />
      <AutomatedSystem />
      <Pricing />
      <Meeting />
      <Partner />
      <Army />
      {/*       <CrmFooter /> */}
    </div>
  );
};

export default CrmHome;
