import React, { useState } from "react";
import { logocards } from "../content/data";
import Logocards from "../shared/logocards";

const Branding = () => {
  const [activeFilter, setActiveFilter] = useState("First");
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div>
      <div className="branding d-flex v-center flex-column">
        <div className="S-wrapper my-5">
          <div className="two-heads d-flex v-center h-center flex-column">
            <h1>Branding</h1>
            <h2>Branding </h2>
          </div>
          {activeFilter === "First" ? (
            <div className="stories-wrapper">
              <Logocards cardImg={logocards.logocard11} />
              <Logocards cardImg={logocards.logocard12} />
              <Logocards cardImg={logocards.logocard13} />
              <Logocards cardImg={logocards.logocard14} />
              <Logocards cardImg={logocards.logocard15} />
              <Logocards cardImg={logocards.logocard16} />
              <Logocards cardImg={logocards.logocard17} />
              <Logocards cardImg={logocards.logocard18} />
            </div>
          ) : activeFilter === "Second" ? (
            <div className="stories-wrapper">
              <Logocards cardImg={logocards.logocard1} />
              <Logocards cardImg={logocards.logocard2} />
              <Logocards cardImg={logocards.logocard3} />
              <Logocards cardImg={logocards.logocard4} />
              <Logocards cardImg={logocards.logocard5} />
              <Logocards cardImg={logocards.logocard6} />
              <Logocards cardImg={logocards.logocard7} />
              <Logocards cardImg={logocards.logocard8} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="pagination light-grey-shadow v-center h-center d-none">
          <p
            className={`body-large fw-bold next_icon pointer ${
              activeFilter === "First" ? "active" : ""
            }`}
            onClick={() => handleFilterClick("First")}
          >
            1
          </p>
          <p
            className={`body-large fw-bold next_icon pointer ${
              activeFilter === "Second" ? "active" : ""
            }`}
            onClick={() => handleFilterClick("Second")}
          >
            2
          </p>
          <p className="body-large fw-bold">3</p>
          <p className="body-large fw-bold">4</p>
          <p className="body-large fw-bold">5</p>
          <p className="body-large fw-bold">6</p>
          <p className="body-large fw-bold">7</p>
          <p className="body-large ">...</p>
          <p className="body-large ">16</p>
        </div>
      </div>
    </div>
  );
};

export default Branding;
