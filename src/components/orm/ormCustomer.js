import React from "react";
import idea from "../../assets/images/Orm/ormCustomer.webp";

const OrmCustomer = () => {
  return (
    <div>
      <div className="ormCustomer d-flex flex-column">
        <div className="two d-flex">
          <div className="left">
            <h2>orm</h2>
            <p>
              Every decision we make needs to answer the million-dollar
              question: how will this benefit our partner’s goal best? We work
              to develop solutions
            </p>
            <p>
              We like to be different, in the same way that every mission is
              different. Every project is an opportunity to create result that
              will help you
            </p>
            <ul>
              <li>API Development</li>
              <li>Cloud Migration</li>
              <li>JavaScript</li>
              <li>WordPress</li>
              <li>Front End Development</li>
              <li>Flutter Framework</li>
            </ul>
          </div>
          <div className="right">
            <img src={idea} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrmCustomer;
