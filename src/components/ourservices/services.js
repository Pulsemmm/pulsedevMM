import React from "react";
import ServiceVideo from "../../assets/video/ourservices/servicesVideo.mp4";
import { Icon } from "@iconify/react";

const Services = () => {
  return (
    <>
      <div className="service-section">
        <div className="service-video w-100 h-100">
          <video loop autoPlay playsInline muted>
            <source src={ServiceVideo} type="video/mp4" />
          </video>
        </div>

        <div className="service-wrapper v-center flex-column ">
          <div className="background"></div>
          <a href="#m-services">
            <div className="cursor-wrapper h-center v-center flex-column gap-4">
              <div className="g-circle "></div>
              <Icon
                icon="bi:arrow-down"
                width="42"
                height="42"
                className="down-arrow"
                color="black"
              />
            </div>
          </a>

          <p className="text-center mt-5">
            Digital solutions that boost your visibility online to gain market
            share, increase your brand definition online and build relationships
            with your target audience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
