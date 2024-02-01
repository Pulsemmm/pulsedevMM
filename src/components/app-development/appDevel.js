import React from "react";
import mask from "../../assets/images/App-development/Mask group.webp";
const AppDevel = () => {
  return (
    <div>
      <div className="app-Devel d-flex v-center h-center">
        <div className="left">
          <h1>
            Application <br className="mobile-none" />
            development
          </h1>
          <p>
            Welcome to the hub of digital innovation, where ideas evolve into
            functional, intuitive applications that redefine user experiences.
            Our application development services are driven by a passion for
            innovation and a commitment to delivering solutions that exceed
            expectations. <br /> <br /> iOS App Development for start-up MVP’s
            to reinventing your existing app with a fresh look we are end-to-end
            iPhone and Android experts.
          </p>
        </div>
        <div className="right">
          <div className="picture">
            <img src={mask} alt="img" />
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevel;
