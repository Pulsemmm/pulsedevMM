import React from "react";
import showcaseVideo from "../../assets/video/portfolio/showcaseVideo.mp4";

const Showcase = () => {
  return (
    <>
      <div className="showcase-section">
        <div className="content-left ">
          <h6 className="text-uppercase">
            Portfolio <span className="text-greenish-blue">Showcase:</span>
          </h6>
          <h4 className="fw-medium mt-4">
            Welcome to our digital universe, where innovation finds its canvas
            and creativity knows no bounds.
          </h4>
          <p className="mt-30 pt-2">
            Welcome to our portfolio showcase, where our digital mastery comes
            to life. Each project featured here is a testament to our dedication
            to innovation and excellence.
            <br />
            <br />
            Our portfolio is not just a display of work; it's a journey through
            our commitment to creating solutions that resonate, exceed
            expectations, and drive tangible results. Each entry encapsulates
            our passion for creativity, innovation, and client success.
          </p>
        </div>
        <div className="banner-video w-100 h-100">
          <video loop autoPlay playsInline muted>
            <source src={showcaseVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Showcase;
