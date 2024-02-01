import React from "react";
import banner from "../../assets/images/boarding/boarding-banner.webp";

const BoardingBanner = () => {
  return (
    <div>
      <div className="boarding-banner d-flex v-center h-center">
        <img src={banner} alt="img" className="img-fluid" />
        <h5>WEBSITE DEVELOPMENT ON-BOARDING</h5>
      </div>
    </div>
  );
};

export default BoardingBanner;
