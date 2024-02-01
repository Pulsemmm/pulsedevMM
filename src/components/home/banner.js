import React from "react";
import pulse from "../../assets/video/home/pulse.mp4";
import pulse2 from "../../assets/images/home/pulse2.webp";
const Banner = () => {
  return (
    <div>
      <div className="h-banner">
        <div className="banner-content-wrapper  ">
          <div className="banner-content">
            {/* <h2 className="text-white">Pulse</h2> */}
            <h1 className="text-white text-uppercase">
              <img src={pulse2} alt="img" />
            </h1>
            <p className="text-white">
              Pulse Marketing is a sales-focused marketing firm based in
              Vancouver, British Columbia with an objective to increase revenue
              for all of our clients Pulse has served 8k+ happy customer and
              completed 25k+ projects over the last 10+ years in business from
              fortune 500 giants to locally owned businesses.
            </p>
          </div>
          <div className="pulse-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-100 h-100 object-cover"
            >
              <source src={pulse} type="video/mp4" />
            </video>
          </div>
          <div className="background-video">
            <video autoPlay muted loop src="\assets\home-banner.mov"></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
