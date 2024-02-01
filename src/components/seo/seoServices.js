import React from "react";
import idea from "../../assets/images/Seo/seoServices.png";

const SeoServices = () => {
  return (
    <div>
      <div className="ormServices d-flex flex-column">
        <div className="two d-flex">
          <div className="left">
            <h2>SEO</h2>
            <p>
              Welcome to our SEO services, where we specialize in optimizing
              your digital presence to secure prominent positions on search
              engine results pages. Our SEO strategies are meticulously crafted
              to boost your website's visibility, drive organic traffic, and
              enhance your online credibility.
            </p>
            <ul>
              <li>Strategic Keyword Research and Optimization</li>
              <li>On-Page and Off-Page Optimization</li>
              <li>Comprehensive Website Analysis</li>
              <li>Content Strategy and Creation</li>
              <li>Performance Monitoring and Reporting</li>
              <li>Maximize Your Online Potential</li>
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

export default SeoServices;
