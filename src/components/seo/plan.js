import React from "react";
import assesment from "../../assets/images/Seo/assesment.png";
import target from "../../assets/images/Seo/target.png";
import analysis from "../../assets/images/Seo/analysis.png";

const Plan = () => {
  return (
    <div>
      <div className="plan d-flex v-center h-center flex-column">
        <div className="top d-flex v-center h-center flex-column">
          <h5>Developing SEO Strategy and Plan</h5>
          <p>
            We work together to understand your business goals and identify the
            best path for success. We’ll discuss how a strong online presence
            can lead you toward greate r things to come, as well as what needs
            improvement.
          </p>
        </div>
        <div className="bottom">
          <div className="two  d-flex v-center h-center flex-column">
            <div className="assesment d-flex v-center h-center  ">
              <img src={assesment} alt="img" />
            </div>
            <p>business Assessment</p>
          </div>
          <div className="two d-flex v-center h-center flex-column">
            <div className="assesment d-flex v-center h-center">
              <img src={target} alt="img" />
            </div>
            <p>Target customer</p>
          </div>
          <div className="two d-flex v-center h-center flex-column">
            <div className="assesment d-flex v-center h-center">
              <img src={analysis} alt="img" />
            </div>
            <p>Competitor Analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
