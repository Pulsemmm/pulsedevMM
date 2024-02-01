import React from "react";
import BoardingBanner from "../components/boarding/boardingBanner";
import Information from "../components/boarding/information";
import ScrollToTop from "../components/shared/scrollToTop";

const Boarding = () => {
  ScrollToTop();
  return (
    <div>
      <BoardingBanner />
      <Information />
    </div>
  );
};

export default Boarding;
