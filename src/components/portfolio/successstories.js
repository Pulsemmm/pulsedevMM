import React, { useState } from "react";
import { portfolio } from "../content/data";
import Storycard from "../shared/storycard";
import Button from "../shared/button";

const Successstories = (props) => {
  const [activeFilter, setActiveFilter] = useState("First");
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div>
      <div className="s_stories-section v-center flex-column">
        <h2 className={`text-center ${props.hide}`}>
          {props.header}
          <br />
          <span className="text-greenish-blue">{props.subheader}</span>
        </h2>

        <h5 className={`fw-bolder ${props.hide2}`}>{props.header}</h5>
        {/* <div>
          <Button
            text="All"
            width="150px"
            height="40px"
            className="btn-primary text-white "
            onClick={() => handleNavigation("/contact-us")}
          />
          <Button
            text="Websites"
            width="150px"
            height="40px"
            className="btn-primary text-white "
            onClick={() => handleNavigation("/contact-us")}
          />

          <Button
            text="Hospitality"
            width="150px"
            height="40px"
            className="btn-primary text-white "
            onClick={() => handleNavigation("/contact-us")}
          />

          <Button
            text="Contractor"
            width="150px"
            height="40px"
            className="btn-primary text-white "
            onClick={() => handleNavigation("/contact-us")}
          />

          <Button
            text="E-Commerce"
            width="150px"
            height="40px"
            className="btn-primary text-white "
            onClick={() => handleNavigation("/contact-us")}
          />

          <Button
            text=" App"
            width="150px"
            height="40px"
            className="btn-primary text-white "
            onClick={() => handleNavigation("/contact-us")}
          />
        </div> */}

        {/* <div className="S-wrapper my-md-5  ">
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
        </div> */}

        <div className="S-wrapper my-md-5  ">
          <div className="stories-wrapper">
            <Storycard data={animatedWebsite} />
          </div>
        </div>

        <div className="pagination light-grey-shadow v-center h-center  ">
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
          <p className="body-large fw-bold text-grey">16</p>
        </div>
      </div>
    </div>
  );
};

const animatedWebsite = [
  {
    id: 1,
    img: portfolio.storycard1,
    head: "steel wavell",
    link: "https://www.steelwavellc.com/",
  },
  {
    id: 2,
    img: portfolio.storycard2,
    head: "STUDIO 9P",
    link: "https://studio9p.com/en/",
  },
  {
    id: 3,
    img: portfolio.storycard3,
    head: "ADMIRE & AMAZE",
    link: "https://admireamaze.debijenkorf.nl/",
  },
  {
    id: 4,
    img: portfolio.storycard4,
    head: "BIENVILLECAPITAL",
    link: "https://www.bienvillecapital.com/",
  },
  {
    id: 5,
    img: portfolio.storycard5,
    head: "CLOUARCHITECTS",
    link: "https://www.clouarchitects.com/",
  },
  {
    id: 6,
    img: portfolio.storycard6,
    head: "RUMBLESTUDIOS",
    link: "https://rumblestudios.tv/",
  },
  {
    id: 7,
    img: portfolio.storycard7,
    head: "ONEUPSTUDIO",
    link: "https://www.oneupstudio.it/",
  },
  {
    id: 8,
    img: portfolio.storycard8,
    head: "CLOUARCHITECTS",
    link: "https://www.clouarchitects.com/",
  },
  {
    id: 9,
    img: portfolio.storycard9,
    head: "PETERTARKA",
    link: "https://petertarka.com/",
  },
  {
    id: 10,
    img: portfolio.storycard10,
    head: "AMUSE BOUCHE",
    link: "https://www.clouarchitects.com/",
  },
  {
    id: 11,
    img: portfolio.storycard11,
    head: "CLOUARCHITECTS",
    link: "https://www.clouarchitects.com/",
  },
  {
    id: 12,
    img: portfolio.storycard12,
    head: "CLOUARCHITECTS",
    link: "https://www.clouarchitects.com/",
  },
];
export default Successstories;
