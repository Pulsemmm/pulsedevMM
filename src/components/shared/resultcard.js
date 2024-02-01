import React from "react";

const Resultcard = (props) => {
  return (
    <div>
      <div className="parent d-flex v-center h-center flex-column">
        <div className="resultCard h-center">
          <h4 className="text-white  h-center ">{props.heading}</h4>
          <div className="circle-anim"></div>
        </div>
        <p className="h-center">{props.content}</p>
      </div>
    </div>
  );
};

export default Resultcard;
