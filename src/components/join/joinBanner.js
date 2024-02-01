import React from "react";

const JoinBanner = () => {
  return (
    <div>
      <div className="join-banner d-flex v-center h-center">
        <div className="join-video  w-100 h-100">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/join-banner.mp4"
            className="w-100 h-100 object-fit-cover"
          ></video>
        </div>
        <h5>join THE TEAM </h5>
      </div>
    </div>
  );
};

export default JoinBanner;
