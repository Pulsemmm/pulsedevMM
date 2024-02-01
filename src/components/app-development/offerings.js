import React, { Suspense } from "react";
import Offeringcard from "../shared/offeringcard";

const Offerings = () => {
  return (
    <div>
      <div className="offerings ">
        <div className="top ">
          <h5 className="fw-bolder">Pulse Marketing Offerings</h5>
          <p className="text-center">
            We are the most sought-after destination for iOS development
            services in Canada. At our native iOS app development company, we
            use advanced tools and the latest technologies to build highly
            functional applications for businesses worldwide. From Flutter app
            development to Swift app development, you name it, and we will
            deliver quality results. Contact our team of experts to learn more
            about each technology we use and understand which one will be best
            suited for your app development process.
          </p>
        </div>
        <div className="offering-cards">
          <Offeringcard
            heading="/assets/images/flutter.png"
            content="Flutter App Development"
          />
          <Offeringcard
            heading="/assets/images/react.png"
            content="React Native  Development"
          />
          <Offeringcard
            heading="/assets/images/native.png"
            content="Native App Development"
          />
          <Offeringcard
            heading="/assets/images/maintenance.png"
            content="Maintenance Code Review"
          />
        </div>
      </div>
    </div>
  );
};

export default Offerings;
