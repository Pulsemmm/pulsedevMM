import React, { Suspense } from "react";

import { aboutImg } from "../content/data";
import LazyLoadedImage from "../shared/lazyLoadedImage";
import bVideo from "../../assets/video/about/aboutBanner.mp4";

const aboutbanner = () => {
  return (
    <>
      <div className="aboutBanner v-center h-center">
        <Suspense fallback="Loading...">
          <LazyLoadedImage
            src={aboutImg.Ellipse}
            alt="Ellipse"
            className="ellipse w-100 h-100 object-fit-cover"
          />
        </Suspense>
        <div className="banner-content flex-column v-center h-center">
          <div className="content-back"></div>
          <h2 className="text-white text-center">
            Empowering Your Digital Presence.
          </h2>
          <p className="text-white text-center mt-2">
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

export default aboutbanner;
