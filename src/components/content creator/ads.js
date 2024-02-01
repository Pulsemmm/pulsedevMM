import React from "react";
import limited from "../../assets/images/Content-creator/limited.webp";
import cyber from "../../assets/images/Content-creator/cyber.webp";
import nikon from "../../assets/images/Content-creator/nikon.webp";
import flash from "../../assets/images/Content-creator/flash.webp";
import { Icon } from "@iconify/react";
const Ads = () => {
  return (
    <div>
      <div className="ads productVideo d-flex v-center h-center flex-column">
        <h5>ADS &COMMERCIALS</h5>
        <div className="food d-flex">
          {data.map((item, index) => {
            return (
              <div className="new d-flex v-center flex-column ">
                <div className="content position-relative">
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
    productName: "Get Limited Offer",
    productImg: limited,
  },
  {
    productName: "Cyber Monday",
    productImg: cyber,
  },
  {
    productName: "Nikon Discount",
    productImg: nikon,
  },
  {
    productName: "Flash Sale",
    productImg: flash,
  },
];
export default Ads;
