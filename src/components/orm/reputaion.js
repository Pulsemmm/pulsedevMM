import React from "react";

const Reputaion = () => {
  return (
    <div>
      <div className="reputation">
        <div className="top d-flex v-center h-center flex-column">
          <h5>
            Don’t Let Negative Or Incorrect <br className="mobile-none" />{" "}
            Content Ruin Your Reputation
          </h5>
          <p>
            Negative or false content online can significantly impact
            thereputation of both businesses and individuals.
          </p>
        </div>
        <div className="bottom">
          <div className="repu-card">
            <div>
              <img src="/assets/images/reputation1.png" alt="" />
              <p>
                Over 90% of HR managers in 2017 will review people online before
                making a hiring decision.
              </p>
            </div>
          </div>
          <div className="repu-card">
            <div>
              <img src="/assets/images/reputation2.png" alt="" />
              <p>
                95% of potential customers will research a business online
                before making a buying decision.
              </p>
            </div>
          </div>
          <div className="repu-card">
            <div>
              <img src="/assets/images/reputation3.png" alt="" />
              <p>
                85% incorporate online feedback about a business or service into
                their purchase decision.
              </p>
            </div>
          </div>
          <div className="repu-card">
            <div>
              <img src="/assets/images/reputation4.png" alt="" />
              <p>
                90% of people will hesitate to purchase from a business that has
                negative feedback online.
              </p>
            </div>
          </div>
        </div>
        <div className="consultant d-flex v-center h-center">
          <button>Get A Consulation</button>
        </div>
      </div>
    </div>
  );
};

export default Reputaion;
