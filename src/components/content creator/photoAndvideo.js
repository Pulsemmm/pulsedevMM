import { initComponentToken } from "antd/es/input/style";
import React from "react";
import BlacknWhite from "../../assets/images/Content-creator/black&white.webp";

const PhotoAndvideo = () => {
  return (
    <div>
      <div className="photoAndvideo d-flex v-center h-center">
        <div className="two d-flex v-center h-center">
          <div className="left">
            <h1>
              photography <br />
              <span className="text-greenish-blue "> & </span>
              videography
            </h1>
            <p className="mt-2">
              Welcome to our world of visual storytelling where pixels speak
              volumes and every frame narrates a compelling tale. Our content
              creation hub for photography and videography is a haven where
              moments come to life, and stories unfold through the lens. From
              globally known television networks to creating content for local
              business in Vancouver, B.C. content creation is what we love to
              do. Book your photography & videography consultation today.
            </p>
          </div>
          <div className="right">
            <div className="picture">
              <img src={BlacknWhite} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default PhotoAndvideo;
