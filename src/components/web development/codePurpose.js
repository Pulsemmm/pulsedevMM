import React, { useState } from "react";
import { portfolio } from "../content/data";
import Storycard from "../shared/storycard";
const CodePurpose = () => {
  const [activeFilter, setActiveFilter] = useState("First");
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div>
      <div className="s_stories-section v-center flex-column">
        <h2 className="text-center">
          Highlighting Success Stories,
          <span className="text-greenish-blue">Unveiling Expertise</span>
        </h2>
        <div className="S-wrapper my-5  ">
          {activeFilter === "First" ? (
            <div className="stories-wrapper">
              <Storycard
                heading="steel wavell"
                cardImg={portfolio.storycard1}
              />
              <Storycard heading="studio 9p" cardImg={portfolio.storycard2} />
              <Storycard
                heading="admire & amaze"
                cardImg={portfolio.storycard3}
              />
              <Storycard
                heading="bienvillecapital"
                cardImg={portfolio.storycard4}
              />
              <Storycard
                heading="clouarchitects"
                cardImg={portfolio.storycard5}
              />
              <Storycard
                heading="rumblestudios"
                cardImg={portfolio.storycard6}
              />
              <Storycard heading="oneupstudio" cardImg={portfolio.storycard7} />
              <Storycard heading="petertarka" cardImg={portfolio.storycard8} />
              <Storycard
                heading="amuse bouche"
                cardImg={portfolio.storycard9}
              />
            </div>
          ) : activeFilter === "Second" ? (
            <div className="stories-wrapper">
              <Storycard
                heading="thinkingbox"
                cardImg={portfolio.storycard10}
              />
              <Storycard heading="lesanimals" cardImg={portfolio.storycard11} />
              <Storycard heading="nancy" cardImg={portfolio.storycard12} />
              <Storycard heading="ohio" cardImg={portfolio.storycard13} />
              <Storycard heading="enabling" cardImg={portfolio.storycard14} />
              <Storycard heading="bowls" cardImg={portfolio.storycard15} />
              <Storycard heading="norebro" cardImg={portfolio.storycard16} />
              <Storycard heading="fitness" cardImg={portfolio.storycard17} />
              <Storycard heading="boost" cardImg={portfolio.storycard18} />
            </div>
          ) : (
            ""
          )}
        </div>
        {/* <div className="pagination light-grey-shadow v-center h-center ">
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
        </div> */}
      </div>
    </div>
  );
};

export default CodePurpose;
