import React from "react";
import CompanyDetails from "./companyDetails";

const Information = () => {
  return (
    <div>
      <div className="information d-flex v-center h-center flex-column">
        <div className="content">
          <div className="personal-info">
            <h6>Personal Information</h6>
            <div className="details-parent">
              <div className="details">
                <p>Name*</p>
                <input type="text" placeholder="Type here" />
              </div>
              <div className="details">
                <p>Email*</p>
                <input type="text" placeholder="Type here" />
              </div>
              <div className="details">
                <p>Company Name*</p>
                <input type="text" placeholder="Type here" />
              </div>
            </div>
          </div>
        </div>
        <CompanyDetails />
      </div>
    </div>
  );
};

export default Information;
