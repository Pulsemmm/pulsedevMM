import React from "react";
import { portfolio } from "../content/data";
import { Icon } from "@iconify/react";

const Teamspirit = () => {
  return (
    <>
      <div className="teamspirit-Section d-flex">
        <div className="left-div">
          <p className="text-white text-uppercase">
            Where Talent Meets Dedication: Our Team, Our Pride
          </p>
          <h1 className="fw-bolder text-greenish-blue">
            Triumphant Team Spirit
          </h1>
          <img
            src={portfolio.teamSpirit}
            alt="teamSpiritImg"
            className="img-fluid"
          />
        </div>

        <div className="right-div">
          <p className=" text-white">
            We speak your language and have the same aversion to verbiage.
            What’s more, we think our humour might tickle you.
            <br />
            <br />
            In short: we’re just a team of experts who love what they do, and we
            love sharing it even more. Come to us with your problems, and we’ll
            turn them into solutions.
          </p>
          <a href="/about-us">
            <button className="text-black fw-semibold h-center v-center gap-3">
              MEET THE TEAM
              <Icon
                icon="ph:arrow-right-bold"
                color="black"
                width="28"
                height="24"
                className="rightArrow"
              />
              <span className="circle-anim"></span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Teamspirit;
