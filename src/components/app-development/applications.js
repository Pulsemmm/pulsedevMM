import React, { useState } from "react";
import { mobilecards } from "../content/data";
import Mobilecard from "../shared/mobilecard";

const Applications = () => {
  const [activeFilter, setActiveFilter] = useState("First");
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div>
      <div className="applications d-flex v-center h-center flex-column">
        <h5 className="text-center heading">
          Applications that Redefine Possibilities
        </h5>

        <div className="S-wrapper ">
          <div className="stories-wrapper">
            <Mobilecard data={mopbileApps} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mopbileApps = [
  {
    app: mobilecards.gym,
    link: "#",
  },
  {
    app: mobilecards.img2,
    link: "#",
  },
  {
    app: mobilecards.img3,
    link: "#",
  },
  {
    app: mobilecards.img4,
    link: "#",
  },
  {
    app: mobilecards.img5,
    link: "#",
  },
  {
    app: mobilecards.img6,
    link: "#",
  },
  {
    app: mobilecards.img7,
    link: "#",
  },
  {
    app: mobilecards.img8,
    link: "#",
  },
  {
    app: mobilecards.img9,
    link: "#",
  },
  {
    app: mobilecards.img10,
    link: "#",
  },
  {
    app: mobilecards.img11,
    link: "#",
  },
  {
    app: mobilecards.img12,
    link: "#",
  },
];
export default Applications;
