import React from "react";
import bVideo from "../../assets/video/ourservices/Servicesbanner.mp4";

const SBanner = () => {
  return (
    <>
      <div className="servicesBanner v-center h-center">
        <div className="banner-content flex-column v-center h-center">
          <div className="content-back"></div>
          <h2 className="text-white text-center">
            Multifaceted Solutions <br className="mobile-none" /> One
            Destination
          </h2>
          <p className="text-white text-center">
            Transforming visions into digital realities through 3D web
            development, SEO mastery, multimedia creativity, logo design, online
            reputation management, and application innovation
          </p>
        </div>
        <div className="banner-video w-100 h-100">
          <video loop autoPlay playsInline muted>
            <source src={bVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default SBanner;
