import React from "react";
import mask from "../../assets/images/App-development/Rectangle 3866.webp";

const Ios = () => {
  return (
    <div>
      <div className="ios d-flex v-center h-center">
        <div className="left">
          <div className="picture">
            <img src={mask} alt="img" />
            <div className="shadow"></div>
          </div>
        </div>
        <div className="right">
          <h1>
            ios App <br className="mobile-none" />
            Development
          </h1>
          <p>
            Pulse Marketing is a reputable iOS app development company that
            lives, eats, breathes, and dreams iOS. We offer a wide array of
            custom iOS app development services that empower businesses and help
            them transform their ideas into reality. We have seen iOS trends
            rise and fall over the years, gone with the flow and against it,
            evolved with the industry as one of the industry leaders. We have
            established ourselves as Canada’s most trusted iOS mobile
            application development company. Our expertise, extensive
            experience, technical know-how, professionalism, and unparalleled
            services make us a reliable place for developing robust and scalable
            applications for iOS devices. We specialize in iOS game app
            development and have become a popular mobile game development agency
            in Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ios;
