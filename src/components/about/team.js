import React, { Suspense } from "react";
import { aboutImg } from "../content/data";
import Teamcard from "../shared/teamcard";
import LazyLoadedImage from "../shared/lazyLoadedImage";

const Team = () => {
  return (
    <>
      <div className="team-section text-center v-center flex-column">
        <div className="heading-content">
          <Suspense fallback="Loading...">
            <LazyLoadedImage
              src={aboutImg.teamEllipse}
              alt="teamEllipse"
              className="teamEllipse"
            />
          </Suspense>
          <h2>
            Unity in Diversity, Strength in{" "}
            <span className="text-greenish-blue">Teamwork</span>
          </h2>
          <p className="mt-5 pt-3">
            Innovation is our ethos, and teamwork is our superpower. Join us at
            Pulse Marketing where every individual's expertise fuels our
            collective success in IT solutions
          </p>
        </div>
        <div className="team-wrapper">
          <Teamcard />
        </div>
      </div>
    </>
  );
};

export default Team;
