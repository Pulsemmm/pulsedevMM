import React, { useEffect, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const counter = ({ targetValue, time }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isVisible && count < targetValue) {
      const interval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, targetValue));
      }, time);
      return () => clearInterval(interval);
    }
  }, [isVisible, count, targetValue]);
  return (
    <div>
      <ReactVisibilitySensor
        onChange={(isVisible) => setIsVisible(isVisible)}
        partialVisibility={true}
      >
        <h2 className="head">{count}</h2>
      </ReactVisibilitySensor>
    </div>
  );
};

export default counter;
