import React from "react";
import chef from "../../assets/images/Content-creator/chef.webp";
import drink from "../../assets/images/Content-creator/drink.webp";
import recap from "../../assets/images/Content-creator/recap.webp";
import mansion from "../../assets/images/Content-creator/mansion.webp";
import { Icon } from "@iconify/react";

const Restaurant = () => {
  return (
    <div>
      <div className="restaurant productVideo d-flex v-center h-center flex-column">
        <h5>RESTAURANTS+ NIGHTLIFE</h5>
        <div className="food d-flex ">
          {data.map((item, index) => {
            return (
              <div className="new d-flex v-center flex-column ">
                <div className="content">
                  <div className="food-image ">
                    <img src={item.productImg} alt="img" />
                    <div className="black-layer"></div>
                  </div>
                  <div className="layers ">
                    <div className="shadow1"></div>
                    <div className="shadow2"></div>
                    <div className="shadow3"></div>
                  </div>
                  <Icon
                    icon="octicon:play-16"
                    color="white"
                    width="74"
                    height="74"
                    className="video-icon"
                  />
                </div>
                <p className="body-large mt-2 fw-medium">{item.productName}</p>
              </div>
            );
          })}
        </div>
        <div className="green-shadow"></div>
      </div>
    </div>
  );
};
const data = [
  {
    productName: "Open Kitchen",
    productImg: chef,
  },
  {
    productName: "Drink Recipe",
    productImg: drink,
  },
  {
    productName: "Twelve West Recap",
    productImg: recap,
  },
  {
    productName: "Mansion Nightclub Recap",
    productImg: mansion,
  },
];
export default Restaurant;
