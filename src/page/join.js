import React from "react";
import JoinBanner from "../components/join/joinBanner";
import PersonalInfo from "../components/join/personalInfo";
import ScrollToTop from "../components/shared/scrollToTop";

const Join = () => {
  ScrollToTop();
  return (
    <div>
      <JoinBanner />
      <PersonalInfo />
    </div>
  );
};

export default Join;
