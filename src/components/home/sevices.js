import React from "react";
import arrow from "../../assets/images/home/Arrow 1.webp";
import { useNavigate } from "react-router-dom";

const Services = () => {
  // Dummy data for iteration

  const navigate = useNavigate();

  const searchData = [
    {
      id: 1,
      heading: "Search Engine Optimization",
      image: "/assets/images/Frame 67.png",
      web: "/Seo",
    },
    {
      id: 2,
      heading: "LOGO design & Branding Packages ",
      image: "/assets/images/design.png",
      web: "/logo-design",
    },
    {
      id: 3,
      heading: "Web Development",
      image: "/assets/images/html.png",
      web: "web-development",
    },
    {
      id: 4,
      heading: "orm (Online Reputation Management)",
      image: "/assets/images/tick.png",
    },
    {
      id: 5,
      heading: "Application Development",
      image: "/assets/images/ui.png",
    },
    {
      id: 6,
      heading: "Photography Videography",
      image: "/assets/images/camera.png",
      web: "/",
    },
  ];

  return (
    <div>
      <div className="services d-flex flex-column">
        <h2 className="text-center">
          Pulse Marketing <span className="text-greenish-blue">Services</span>
        </h2>
        {/* <div className="new">
          {searchData.map((item) => (
            <div className="search" key={item.id}>
              <div className="for-layer" onClick={() => navigate(item.web)}>
                <img src={item.image} alt="img" className="thumbnail-img" />
                <div className="two d-flex align-items-end justify-content-between">
                  <div className="left d-flex h-center flex-column">
                    <h2>0{item.id}</h2>
                    <label className="large">{item.heading}</label>
                  </div>
                  <div className="right">
                    <div className="box d-flex h-center v-center">
                      <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="black-layer"></div>
              </div>
            </div>
          ))}s
        </div> */}

        <div className="new">
          <div className="search pointer">
            <a href="/service/search-engine-optimization">
              <div className="for-layer">
                <img
                  src="/assets/images/Frame 67.png"
                  alt="img"
                  className="thumbnail-img"
                />
                <div className="two d-flex align-items-end justify-content-between">
                  <div className="left d-flex h-center flex-column">
                    <h2>01</h2>
                    <label className="large">
                      Search Engine <br /> Optimization
                    </label>
                  </div>
                  <div className="right">
                    <div className="box d-flex h-center v-center">
                      <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="black-layer"></div>
              </div>
            </a>
          </div>
          <a href="/service/branding-logos-design-graphic-design-packages">
            <div className="search pointer">
              <div
                className="for-layer"
                // onClick={() => navigate("/logo-design")}
              >
                <img
                  src="/assets/images/design.png"
                  alt="img"
                  className="thumbnail-img"
                />
                <div className="two d-flex align-items-end justify-content-between">
                  <div className="left d-flex h-center flex-column">
                    <h2>02</h2>
                    <label className="large">
                      LOGO design & <br /> Branding Packages
                    </label>
                  </div>
                  <div className="right">
                    <div className="box d-flex h-center v-center">
                      <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="black-layer"></div>
              </div>
            </div>
          </a>
          <a href="/service/web-development">
            <div className="search pointer">
              <div
                className="for-layer"
                // onClick={() => navigate("/web-development")}
              >
                <img
                  src="/assets/images/html.png"
                  alt="img"
                  className="thumbnail-img"
                />
                <div className="two d-flex align-items-end justify-content-between">
                  <div className="left d-flex h-center flex-column">
                    <h2>03</h2>
                    <label className="large">
                      Web <br /> Development
                    </label>
                  </div>
                  <div className="right">
                    <div className="box d-flex h-center v-center">
                      <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="black-layer"></div>
              </div>
            </div>
          </a>
          <a href="/service/orm-online-reputation-management">
            <div className="search pointer">
              <div className="for-layer">
                <img
                  src="/assets/images/tick.png"
                  alt="img"
                  className="thumbnail-img"
                />
                <div className="two d-flex align-items-end justify-content-between">
                  <div className="left d-flex h-center flex-column">
                    <h2>04</h2>
                    <label className="large">
                      orm (Online <br /> Reputation Management)
                    </label>
                  </div>
                  <div className="right">
                    <div className="box d-flex h-center v-center">
                      <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="black-layer"></div>
              </div>
            </div>
          </a>
          <a href="/service/applications-development">
            <div className="search pointer">
              <div
                className="for-layer"
                // onClick={() => navigate("/app-development")}
              >
                <img
                  src="/assets/images/ui.png"
                  alt="img"
                  className="thumbnail-img"
                />
                <div className="two d-flex align-items-end justify-content-between">
                  <div className="left d-flex h-center flex-column">
                    <h2>05</h2>
                    <label className="large">
                      Application <br />
                      Development
                    </label>
                  </div>
                  <div className="right">
                    <div className="box d-flex h-center v-center">
                      <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="black-layer"></div>
              </div>
            </div>
          </a>
          <a href="/photography_videography">
            <div className="search pointer">
              <div
                className="for-layer"
                // onClick={() => navigate("/content-creator")}
              >
                <img
                  src="/assets/images/camera.png"
                  alt="img"
                  className="thumbnail-img"
                />
                <div className="two d-flex align-items-end justify-content-between">
                  <div className="left d-flex h-center flex-column">
                    <h2>06</h2>
                    <label className="large">
                      Photography <br />
                      Videography
                    </label>
                  </div>
                  <div className="right">
                    <div className="box d-flex h-center v-center">
                      <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="black-layer"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
