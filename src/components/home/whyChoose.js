import React from "react";
import PM from "../../assets/images/home/Group 58.webp";
import { Icon } from "@iconify/react";

const WhyChoose = () => {
  return (
    <div>
      <div className="whyChoose d-flex v-center flex-column">
        <div className="two">
          <div className="left">
            <h1>why choose us</h1>
          </div>
          <div className="right">
            <img src={PM} alt="img" className="img-fluid" />
          </div>
        </div>
        <div className="service-wrapper v-center flex-column ">
          <div className="background"></div>
          <a href="#card-section ">
            <div className="cursor-wrapper h-center v-center flex-column gap-4">
              <div className="g-circle "></div>
              <Icon
                icon="bi:arrow-down"
                width="42"
                height="42"
                className="down-arrow"
                color="black"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
