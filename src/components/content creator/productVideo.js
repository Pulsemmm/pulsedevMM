import React from "react";
import first from "../../assets/images/Content-creator/bottle.webp";
import cosmetics from "../../assets/images/Content-creator/cosmetics.webp";
import serums from "../../assets/images/Content-creator/serums.webp";
import headsets from "../../assets/images/Content-creator/headsets.webp";
import { Icon } from "@iconify/react";
const ProductVideo = () => {
  return (
    <div>
      <div className="productVideo d-flex v-center h-center flex-column">
        <h5>PRODUCTS VIDEOS</h5>
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
      </div>
    </div>
  );
};

const data = [
  {
    productName: "Ocean Bottle",
    productImg: first,
  },
  {
    productName: "Cosmetics",
    productImg: cosmetics,
  },
  {
    productName: "Serums",
    productImg: serums,
  },
  {
    productName: "Headset",
    productImg: headsets,
  },
];
export default ProductVideo;
