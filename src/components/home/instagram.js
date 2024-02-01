import React from "react";
import maskgroup from "../../assets/images/home/Mask group.webp";
import maskgroup1 from "../../assets/images/home/Mask group1.webp";
import maskgroup2 from "../../assets/images/home/Mask group2.webp";

const Instagram = () => {
  return (
    <div>
      <div className="instagram">
        <div className="heading">
          <h2 className="text-center">connect on Instagram</h2>
        </div>
        <div className="laws   ">
          <img src={maskgroup} alt="img" className="img-fluid" />
          <img src={maskgroup1} alt="img" className="img-fluid" />
          <img src={maskgroup2} alt="img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
