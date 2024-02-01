import React, { useState } from "react";
import { logocards } from "../content/data";
import Logocards from "../shared/logocards";

const Logos = () => {
  const [activeFilter, setActiveFilter] = useState("First");
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div>
      <div className="logos d-flex v-center h-center flex-column">
        <h5 className="text-center heading">
          Logos that Speak, Brands that Resonate
        </h5>
        <div className="S-wrapper my-5">
          <div className="two-heads d-flex v-center h-center flex-column">
            <h1>Logos</h1>
            <h2>Logos</h2>
          </div>
          {activeFilter === "First" ? (
            <div className="stories-wrapper">
              <Logocards cardImg={logocards.logocard1} />
              <Logocards cardImg={logocards.logocard2} />
              <Logocards cardImg={logocards.logocard3} />
              <Logocards cardImg={logocards.logocard4} />
              <Logocards cardImg={logocards.logocard5} />
              <Logocards cardImg={logocards.logocard6} />
              <Logocards cardImg={logocards.logocard7} />
              <Logocards cardImg={logocards.logocard8} />
              <Logocards cardImg={logocards.logocard9} />
              <Logocards cardImg={logocards.logocard10} />
              {/* <Logocards cardImg={logocards.logocard19} />
              <Logocards cardImg={logocards.logocard20} />
              <Logocards cardImg={logocards.logocard21} />
              <Logocards cardImg={logocards.logocard22} />
              <Logocards cardImg={logocards.logocard23} />
              <Logocards cardImg={logocards.logocard24} />
              <Logocards cardImg={logocards.logocard25} />
              <Logocards cardImg={logocards.logocard26} />
              <Logocards cardImg={logocards.logocard27} />
              <Logocards cardImg={logocards.logocard28} /> */}
            </div>
          ) : activeFilter === "Second" ? (
            <div className="stories-wrapper">
              <Logocards cardImg={logocards.logocard11} />
              <Logocards cardImg={logocards.logocard12} />
              <Logocards cardImg={logocards.logocard13} />
              <Logocards cardImg={logocards.logocard14} />
              <Logocards cardImg={logocards.logocard15} />
              <Logocards cardImg={logocards.logocard16} />
              <Logocards cardImg={logocards.logocard17} />
              <Logocards cardImg={logocards.logocard18} />
              <Logocards cardImg={logocards.logocard19} />
              <Logocards cardImg={logocards.logocard20} />
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

export default Logos;
