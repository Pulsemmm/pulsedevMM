import React from "react";
import hands from "../../assets/images/home/hands.webp";
const Join = () => {
  return (
    <div>
      <div className="join d-flex flex-column v-center h-center">
        <h2>Have project in mind ?</h2>
        <p className="extra-body-large">
          Join forces and create greatness together
        </p>
        <button className="d-flex v-center justify-content-between">
          Join Hands
          <img src={hands} alt="hand-img" />
          <img
            src="/assets/images/handshake.gif"
            alt="gif"
            className="handshake img-fluid"
          />
          <div className="layer"></div>
        </button>
      </div>
    </div>
  );
};

export default Join;
