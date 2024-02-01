import React from "react";
import logo from "../../assets/images/logo.png";
import { Icon } from "@iconify/react";

const CrmFooter = () => {
  return (
    <div>
      <div className="crm-footer d-flex  justify-content-between">
        <div className="left d-flex flex-column">
          <img src={logo} alt="img" className="img-fluid" />
          <p>+1 112 223 3344</p>
          <p>Helping thousands of entrepreneurs soar high....</p>
          <div className="social-icons  d-flex">
            <a href="">
              <Icon icon="mdi:twitter" color="white" width="29" height="24" />
            </a>
            <a href="">
              <Icon icon="bi:linkedin" color="white" width="29" height="24" />
            </a>
            <a href="">
              <Icon
                icon="ic:outline-facebook"
                color="white"
                width="29"
                height="24"
              />
            </a>
            <a href="">
              <Icon
                icon="ri:instagram-fill"
                color="white"
                width="29"
                height="24"
              />
            </a>
          </div>
          <p className="address">
            Address: 30 Riverhead Close, London, England, E17 5PY
          </p>
        </div>
        <div className="right d-flex">
          <div className="two d-flex">
            <div className="customer">
              <h6>Customer resources</h6>
              <a href="">
                <p>Help center</p>
              </a>
              <a href="">
                <p>Pluse Marketing user community</p>
              </a>
              <a href="">
                <p>Customer webinars</p>
              </a>
              <a href="">
                <p>New customers</p>
              </a>
            </div>
            <div className="who">
              <h6>Who we are</h6>
              <a href="">
                <p>About</p>
              </a>
              <a href="">
                <p>Careers</p>
              </a>
              <a href="">
                <p>Contact</p>
              </a>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CrmFooter;
