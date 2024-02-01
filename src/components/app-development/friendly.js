import React from "react";
import apple from "../../assets/images/App-development/apple.webp";
import mobile from "../../assets/images/App-development/mobile.webp";
import pad from "../../assets/images/App-development/pad.webp";
import screen from "../../assets/images/App-development/screen.webp";

const Friendly = () => {
  return (
    <div>
      <div className="friendly">
        <div className="top d-flex v-center h-center flex-column">
          <h5 className="fw-bolder">ios-friendly devices</h5>
          <p>
            At Pulse Marketing, we build scalable, robust, and high-performance
            applications for various iOS devices, like iPhones, iPads, Apple
            Watches, and more. Our versatility and dynamic solutions have helped
            us build a strong reputation as the trusted name for Apple watch app
            development.
          </p>
        </div>
        <div className="bottom d-flex v-center h-center">
          <div className="devices">
            <img src={apple} alt="" />
            <p>Apple Watch</p>
          </div>
          <div className="devices">
            <img src={mobile} alt="" />
            <p>iphone</p>
          </div>
          <div className="devices">
            <img src={pad} alt="" />
            <p>ipad</p>
          </div>
          <div className="devices">
            <img src={screen} alt="" />
            <p>internet of things</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friendly;
