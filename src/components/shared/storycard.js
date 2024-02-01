import React from "react";
import { portfolio } from "../content/data";

const Storycard = (props) => {
  const data = props.data;

  const handleNavigation = (link) => {
    window.open(link, "_blank", "noreferrer");
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className="story-card pointer"
            key={index}
            onClick={() => handleNavigation(item.link)}
          >
            <div className="top light-grey-shadow">
              <h1 className="text-uppercase text-center">{item.head}</h1>
              <img
                src={item.img}
                alt="storycard1"
                className="storycard img-fluid"
              />
              <img
                src={portfolio.backSlider}
                alt="backSlider"
                className="backSlider"
              />
            </div>
            <div className="bottom mt-3 text-center">
              <p className="text-uppercase fw-bolder ">{item.head}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Storycard;
