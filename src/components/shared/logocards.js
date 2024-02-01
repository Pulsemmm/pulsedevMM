import React from "react";
// import { logocards } from "../content/data";

const Logocards = (props) => {
  return (
    <div className="story-card">
      <div className="top light-grey-shadow">
        {/* <h1 className="text-uppercase text-center">{props.heading}</h1> */}
        <div className="logos-images">
          <img src={props.cardImg} alt="logocard1" className="logocard" />
          <div className="black-layer"></div>
        </div>
        {/* <img
          src={logocards.backSlider}
          alt="backSlider"
          className="backSlider"
        /> */}
        <div className="layers ">
          <div className="shadow1"></div>
          <div className="shadow2"></div>
          <div className="shadow3"></div>
        </div>
      </div>
      <div className="bottom mt-3 text-center">
        <p className="text-uppercase fw-bolder ">{props.heading}</p>
      </div>
    </div>
  );
};

export default Logocards;
