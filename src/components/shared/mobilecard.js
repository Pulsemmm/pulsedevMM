import React from "react";
import { useNavigate } from "react-router-dom";

const Mobilecard = (props) => {
  const data = props.data;
  const navigate = useNavigate();
  return (
    <>
      {data.map((items, index) => {
        return (
          <div
            className="mobile-card pointer"
            key={index}
            onClick={() => navigate(items.link)}
          >
            <div className="top">
              <div className="mobile-images">
                <img src={items.app} alt="logocard1" className="logocard" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Mobilecard;
