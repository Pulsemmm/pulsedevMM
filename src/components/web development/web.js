import React from "react";
import idea from "../../assets/images/Web-development/idea.png";

const Web = () => {
  return (
    <div>
      <div className="web d-flex flex-column">
        <div className="two d-flex">
          <div className="left">
            <h2>web development</h2>
            <p>
              Every decision we make needs to answer the million-dollar
              question: how will this beneﬁt our partner’s goal best? We work to
              develop solutions. Step into our digital workshop, where
              innovative ideas converge with technical prowess to build bespoke
              online experiences. Our web development services are the
              cornerstone of digital success, where every line of code breathes
              life into seamless, user-centric websites that redefine online
              presence.
            </p>
            <ul>
              <li>Tailored Solutions</li>
              <li>Cutting-Edge Technology</li>
              <li>User-Centric Design</li>
              <li>SEO Optimization:</li>
              <li>Continuous Evolution</li>
              <li>Elevate Your Online Presence </li>
            </ul>
            <div className="green-layer"></div>
          </div>
          <div className="right">
            <img src={idea} alt="..." className="img-fluid" />
          </div>
        </div>
        <div className="white-shadow"></div>
      </div>
    </div>
  );
};

export default Web;
