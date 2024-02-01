import React, { useState, useEffect } from "react";
import Servicecard from "../shared/servicecard";
import { serviceImg } from "../content/data";

const Marketingservices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(0);
  };

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setHoveredIndex(null); // Set to null when innerWidth is less than 1000
    }
  };

  useEffect(() => {
    // Initial check on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`marketingServices-section text-center v-center flex-column `}
        id="m-services"
      >
        <h2>
          Pulse Marketing
          <span className="text-greenish-blue"> Services</span>
        </h2>
        <p className="mt-5 pt-3">
          "From pioneering 3D web development that immerses users in dynamic
          digital spaces to SEO strategies enhancing online visibility,
          captivating photo and videography, distinctive logo design, meticulous
          online reputation management, and tailored application development -
          our comprehensive suite of digital services aims to elevate brands by
          delivering innovative, user-centric solutions across diverse digital
          landscapes."
        </p>

        <div className="serviceCard-wrapper  ">
          {servicesData.map((service, index) => (
            <Servicecard
              key={index}
              count={service.count}
              heading={service.heading}
              subHead={service.subHead}
              img={service.img}
              hoveredClass={
                index === hoveredIndex ? "hovered-card" : "notHovered-card"
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </>
  );
};
const servicesData = [
  {
    count: "01",
    heading: "Search Engine ",
    subHead: "optimization",
    img: serviceImg.scard1main,
  },
  {
    count: "02",
    heading: "Logo design &",
    subHead: "branding",
    img: serviceImg.scard2main,
  },
  {
    count: "03",
    heading: "3D web ",
    subHead: "development",
    img: serviceImg.scard3main,
  },
  {
    count: "04",
    heading: "ORM (Online ",
    subHead: "Reputation MG)",
    img: serviceImg.scard4main,
  },
  {
    count: "05",
    heading: "Application ",
    subHead: "development",
    img: serviceImg.scard5main,
  },
  {
    count: "06",
    heading: "Photography & ",
    subHead: "Videography",
    img: serviceImg.scard6main,
  },
];
export default Marketingservices;
