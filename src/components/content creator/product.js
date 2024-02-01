import React from "react";
import chips from "../../assets/images/Content-creator/chips.webp";
import glas from "../../assets/images/Content-creator/glas.webp";
import cold from "../../assets/images/Content-creator/cold.webp";
import redglass from "../../assets/images/Content-creator/redglass.webp";
import plate from "../../assets/images/Content-creator/plate.webp";
import smoothie from "../../assets/images/Content-creator/smoothie.webp";
import steak from "../../assets/images/Content-creator/steak.webp";
import mint from "../../assets/images/Content-creator/mint.webp";
import salad from "../../assets/images/Content-creator/salad.webp";
import lemon from "../../assets/images/Content-creator/lemon.webp";

const Product = () => {
  return (
    <div>
      <div className="product d-flex v-center h-center flex-column">
        <h5>PRODUCT PHOTOGRAPHY</h5>
        <div className="food d-flex ">
          <div className="content">
            <div className="food-image">
              <img src={chips} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={glas} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={cold} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={redglass} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={plate} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={smoothie} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={steak} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={mint} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={salad} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
          <div className="content">
            <div className="food-image">
              <img src={lemon} alt="img" />
              <div className="black-layer"></div>
            </div>
            <div className="layers ">
              <div className="shadow1"></div>
              <div className="shadow2"></div>
              <div className="shadow3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
