import React from "react";
import Resultcard from "../shared/resultcard";

const Results = () => {
  return (
    <div>
      <div className="results d-flex v-center h-center flex-column">
        <h5>CHECK OUT SOME OF OUR SEO RESULTS</h5>
        <div className="for-griding">
          <Resultcard
            heading="500,000+"
            content="visits driven to clients’ websites annually"
          />
          <Resultcard
            heading="5,000+"
            content="pieces of content published annually"
          />
          <Resultcard heading="3,000+" content="sites audited each year" />
          <Resultcard heading="4,000+" content="campaigns ranked" />
          <Resultcard heading="7,000+" content="webpages optimized each year" />
          <Resultcard heading="3,000+" content="SEO of pages done" />
        </div>
      </div>
    </div>
  );
};

export default Results;
