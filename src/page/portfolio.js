import React from "react";
import Portfoliobanner from "../components/portfolio/portfoliobanner";
import Showcase from "../components/portfolio/showcase";
import Successstories from "../components/portfolio/successstories";
import Teamspirit from "../components/portfolio/teamspirit";
import Workwithus from "../components/about/workwithus";
import Projects from "../components/portfolio/projects";

const Portfolio = () => {
  return (
    <>
      <Portfoliobanner
        heading="Portfolio"
        para="Transforming visions into digital realities through 3D web development, SEO mastery, multimedia creativity, logo design, online reputation management, and application innovation"
      />
      <Showcase />
      <Projects
        header="Highlighting Success Stories,"
        subheader="Unveiling Expertise"
        hide2="d-none"
      />
      <Teamspirit />
      <Workwithus />
    </>
  );
};

export default Portfolio;
