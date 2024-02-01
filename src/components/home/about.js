import React, { Suspense } from "react";
import LazyLoadedImage from "../shared/lazyLoadedImage";
import { logoLg } from "../content/data";
import { homeImg } from "../content/data";

const About = () => {
  return (
    <div>
      <div className="h-about">
        <div className="h-about-content">
          <div className="content-wrapper d-flex justify-content-between">
            <div className="left-content">
              <label className="text-greenish-blue">GET TO KNOW US</label>
              <h5 className="mt-2 position-relative fw-bolder">
                The best digital <br />
                marketing solutions
              </h5>
              <p className="mt-3">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words which don't slightly.
              </p>
            </div>
            <div className="right-content">
              <div className="two d-flex">
                <div className="image-section">
                  <Suspense fallback="Loading...">
                    <LazyLoadedImage src={homeImg.arro} alt="pulse logo" />
                  </Suspense>
                </div>
                <div className="lead">
                  <label>Leading in marketing</label>
                  <p className="mt-1">
                    Knowledge of technologies rules better than anyone which we
                    apply in our daily work
                  </p>
                </div>
              </div>
              <div className="two d-flex">
                <div className="image-section">
                  <Suspense fallback="Loading...">
                    <LazyLoadedImage src={homeImg.bulb} alt="pulse logo" />
                  </Suspense>
                </div>
                <div className="lead">
                  <label>Expert developers</label>
                  <p className="mt-1">
                    Knowledge of technologies rules better than anyone which we
                    apply in our daily work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
