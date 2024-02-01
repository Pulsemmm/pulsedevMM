import React from "react";

const CrmBanner = () => {
  return (
    <div>
      <div className="crmBanner d-flex v-center h-center">
        <div className="banner-video w-100 h-100">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/assets/crm-background.mp4"
            className="w-100 h-100 object-fit-cover"
          ></video>
        </div>
        <div className="banner-content d-flex v-center h-center flex-column">
          <h1>
            Unravel The Secret To Success With All-in-One Pluse Marketing CRM
          </h1>
          <p>
            Make Your Entrepreneur Dream Come True!! Boost your leads,
            conversions, and customer loyalty with our powerful sales and
            marketing automation tools.
          </p>
          <button className="d-none">Try Free</button>
          <p className="trial d-none">
            14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrmBanner;
