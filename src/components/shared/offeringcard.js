import React from "react";

const Offeringcard = (props) => {
  return (
    <div className="offeringCard ">
      <img src={props.heading} alt="img" />
      <h3>{props.content}</h3>
      <div className="circle-anim"></div>
    </div>
  );
};

export default Offeringcard;
