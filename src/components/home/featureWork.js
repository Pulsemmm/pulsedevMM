import React from "react";
import fw1 from "../../assets/images/home/Music 1.webp";
import fw2 from "../../assets/images/home/dan.webp";
import fw3 from "../../assets/images/home/car.webp";
import fw4 from "../../assets/images/home/fw4.webp";
import fw5 from "../../assets/images/home/fw5.webp";
import fw6 from "../../assets/images/home/fw6.webp";
import fw7 from "../../assets/images/home/fw7.webp";
import fw8 from "../../assets/images/home/fw8.webp";
import fw9 from "../../assets/images/home/fw9.webp";
import fw10 from "../../assets/images/home/fw10.webp";
import fw12 from "../../assets/images/home/fw12.webp";
import fw13 from "../../assets/images/home/fw13.webp";
import f13 from "../../assets/images/home/f13.png";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  EffectCreative,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/parallax";

const FeatureWork = () => {
  const swiperParameters = {
    modules: [
      A11y,
      Autoplay,
      EffectCoverflow,
      EffectCreative,
      Navigation,
      Parallax,
    ],
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    watchSlidesProgress: true,
    autoplay: { pauseOnMouseEnter: true, enabled: true, delay: 2000 },
    effect: "coverflow",
    slidesPerGroupAuto: false,
    navigation: true,
    loop: true,
    creativeEffect: {
      next: { shadow: true },
      prev: { shadow: true },
      limitProgress: 5,
    },
    parallax: { enabled: true },
    speed: 2100,
    coverflowEffect: { depth: 112 },
  };

  return (
    <>
      <div
        className="featuredWork"
        style={{ height: "100vh", background: "black", overflowX: "hidden" }}
      >
        <Swiper {...swiperParameters}>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex   simp">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">1</span>
                      <span className="stroke">1</span>
                    </span>
                    <span className="hash">#</span> <br />
                    Simple <br />
                    RFP
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  Simplifying government contracts to efficiently enable
                  business growth.
                </p>
              </div>
              <div className="right">
                <img src={f13} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-5">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">2</span>
                      <span className="stroke">2</span>
                    </span>
                    <span className="hash">#</span> <br />
                    WELCOME <br />
                    TO WESTOAK
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  Vancouver's destination for West Coast inspired cuisine with a
                  personalized and authentic dining experience
                </p>
              </div>
              <div className="right">
                <img src={fw5} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-6">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">3</span>
                      <span className="stroke">3</span>
                    </span>
                    <span className="hash">#</span> <br />
                    DEFICIENCY <br />
                    MANAGEMENT
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  With over 15 years in the business we have created a system of
                  deficiency rectification, we have helped tower after tower
                  correcting almost any problem.
                </p>
              </div>
              <div className="right">
                <img src={fw6} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-7">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">4</span>
                      <span className="stroke">4</span>
                    </span>
                    <span className="hash">#</span> <br />
                    FITORU <br />
                    REVOLUTION
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  At Fitoru, we believe everyone deserves to live vibrantly and
                  feel great. We’ve helped thousands of people of all ages, body
                  types and wellness pursuits unlock their full potential with
                  cutting-edge nutraceuticals that make weight loss and healthy
                  living effortless. We’re changing the way people like you get
                  fit and stay strong. Are you ready to join the revolution?
                </p>
              </div>
              <div className="right">
                <img src={fw7} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-8">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">5</span>
                      <span className="stroke">5</span>
                    </span>
                    <span className="hash">#</span> <br />
                    NEW <br />
                    EYE DEFY
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  Enjoy all the benefits and get your glowiest skin yet at the
                  best value, including custom rewards and savings!
                </p>
              </div>
              <div className="right">
                <img src={fw8} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-2">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">6</span>
                      <span className="stroke">6</span>
                    </span>
                    <span className="hash">#</span> <br />
                    DAN <br />
                    HAINES
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  Over 20 years of experience as a digital leader and
                  strategist. Seasoned consultant and product leader with
                  extensive design, business & analytical acumen. Demonstrated
                  record of expertise in gathering and applying research,
                  business requirements and analytics data.
                </p>
              </div>
              <div className="right">
                <img src={fw2} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-9">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">7</span>
                      <span className="stroke">7</span>
                    </span>
                    <span className="hash">#</span> <br />
                    HARBER <br />
                    LONDON
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  We are Harber London, and we create honest, high quality,
                  functional products to help you carry better. Our products are
                  designed to reflect our unique point of view, our style, make
                  the little stuff better, and we don’t stop until we get it
                  right. We combine incredibly high skilled craftsmanship, a
                  touch from the heart and the finest materials available.
                </p>
              </div>
              <div className="right">
                <img src={fw9} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-3">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">8</span>
                      <span className="stroke">8</span>
                    </span>
                    <span className="hash">#</span> <br />
                    CREATIVE <br />
                    BULLPEN
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  More than 30 000 ladies in South Africa trust us for on-trend
                  fashion accessories and styling advice. Now it’s YOUR turn.
                </p>
              </div>
              <div className="right">
                <img src={fw3} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-10">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">9</span>
                      <span className="stroke">9</span>
                    </span>
                    <span className="hash">#</span> <br />
                    TIME <br />
                    DISCOVERED
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  We're on a mission to make buying, selling, and investing in
                  vintage watches more affordable, transparent, and meaningful.
                  No matter your interest, wearing or collecting, something for
                  yourself or a gift for a loved one, we're here to be your
                  guide through the market.
                </p>
              </div>
              <div className="right">
                <img src={fw10} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-1">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">10</span>
                      <span className="stroke">10</span>
                    </span>
                    <span className="hash">#</span> <br />
                    zynth <br />
                    2023
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  For those of us who are blessed with good sight. So we seldom
                  consider it. That’s why going off to investigate the whys and
                  hows involved is a little like trying to get behind the wind
                </p>
              </div>
              <div className="right">
                <img src={fw1} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-12">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">11</span>
                      <span className="stroke">11</span>
                    </span>
                    <span className="hash">#</span> <br />
                    JOON <br />
                    HAIRCARE
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  Merging spices from our grandmother's kitchen with science
                  from our father's haircare lab.
                </p>
              </div>
              <div className="right">
                <img src={fw12} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-13">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">12</span>
                      <span className="stroke">12</span>
                    </span>
                    <span className="hash">#</span> <br />
                    AQMA <br />
                    SKINCARE
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  We care about your skin and in order to protect it from
                  serious problems caused by artificial preservatives we use
                  natural alternatives which keeps your skin glowing.
                </p>
              </div>
              <div className="right">
                <img src={fw13} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-3f38">
            <div className="slider2 d-flex slider-4">
              <div className="left">
                <div className="later">
                  <h2 className="text-white">Featured work</h2>
                  <h1 className="text-white">
                    <span className="text-greenish-blue number">
                      <span className="filled">13</span>
                      <span className="stroke">13</span>
                    </span>
                    <span className="hash">#</span> <br />
                    WELCOME <br />
                    TO PIERRE
                    <div className="layer rounded-circle"></div>
                  </h1>
                </div>
                <p className="text-white mt-4">
                  Vancouver’s most exclusive lounge experience
                </p>
              </div>
              <div className="right">
                <img src={fw4} alt="img" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FeatureWork;
