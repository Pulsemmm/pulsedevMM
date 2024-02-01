import React, { Suspense } from "react";
import bVideo from "../../assets/video/portfolio/bannerFolio.mp4";
import { portfolio } from "../content/data";
import LazyLoadedImage from "../shared/lazyLoadedImage";

const Portfoliobanner = (props) => {
  return (
    <>
      <div className="Banner v-center h-center banner-responsive">
        <Suspense fallback="Loading...">
          <LazyLoadedImage
            src={portfolio.bannerback}
            alt="Ellipse"
            className="ellipse w-100 h-100 object-fit-cover"
          />
        </Suspense>
        <div className="banner-content flex-column v-center h-center">
          <div className="content-back"></div>
          <h1 className="text-white text-center fw-bolder">{props.heading}</h1>
          <p className="text-white text-center">{props.para}</p>
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

export default Portfoliobanner;
