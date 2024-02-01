import React from "react";

const Democard = (props) => {
  return (
    <div>
      <div className="demoCard h-center">
        <h4 className="text-white  h-center ">{props.heading}</h4>
        <p className="text-white body-large fw-medium h-center">
          {props.content}
        </p>
        <div className="circle-anim"></div>
      </div>
    </div>
  );
};

export default Democard;
