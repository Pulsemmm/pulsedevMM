import React, { useEffect, useState } from "react";
import ciclebgV from "../../assets/video/ourservices/center-circleV.mp4";
import { serviceImg } from "../content/data";

const Servicecard = ({
  key,
  count,
  heading,
  img,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
  nothovered,
  subHead,
}) => {
  return (
    <div
      // className={`service-card ${hoveredClass}`}
      className={`service-card ${hoveredClass}  `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={key}
    >
      <img src={img} alt="" className="service-thumbnail  w-100 " />
      <img src={serviceImg.leftEllipse} alt="" className="right-circle" />
      <div className="service-card-h  service-quote">
        {/* <div className="video-wrapper ">
          <video loop autoPlay playsInline muted>
            <source src={ciclebgV} type="video/mp4" />
          </video>
        </div> */}
        <img src={serviceImg.quoteCircle} alt="img" />
      </div>

      <div className={` bottom h-center v-center gap-1   ${hoveredClass}`}>
        <h2 className="text-greenish-blue">{count}</h2>
        <p className="fw-bolder text-uppercase text-white">
          {heading} <span>{subHead}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Servicecard;
