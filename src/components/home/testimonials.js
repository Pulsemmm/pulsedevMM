import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from "../../assets/icons/Ellipse.png";
import comma from "../../assets/icons/commas.png";
import comma2 from "../../assets/icons/commas2.png";
import peter from "../../assets/icons/peter.png";
import paul from "../../assets/icons/paul.png";
import waldo from "../../assets/icons/waldo.png";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="ourClient">
        <h2 className="fw-medium">
          <span>What Our</span> Client Says
        </h2>
        <div className="clientReview-slider">
          <Slider {...settings} className="d-nonse">
            <div className="for-layer">
              <div className="slide-1">
                <div className="top">
                  <img src={profile} alt="img" />
                  <div className="d-flex">
                    <img src={comma} alt="img" className="comma hover-hide" />
                    <img
                      src={comma2}
                      alt="img"
                      className="comma hover-show d-none"
                    />
                  </div>
                </div>
                <p>
                  Truly exceeded our expectations with their website development
                  services. From the initial consultation to the final launch,
                  their team exhibited a remarkable level of professionalism,
                  creativity, and technical expertise. We are thrilled with the
                  end result and have received numerous compliments on the
                  website's design and functionality. We wholeheartedly endorse
                  Pulse Marketing for their exceptional website development
                  services.
                </p>
                <div className="bottom">
                  <p className="body-large fw-semibold">Johnny Bananas</p>
                  <p className="designation">MTV Studios Celebrity</p>
                </div>
              </div>
              <div className="layer"></div>
            </div>
            <div className="for-layer">
              <div className="slide-1">
                <div className="top">
                  <img src={profile} alt="img" />
                  <div className="d-flex">
                    <img src={comma} alt="img" className="comma hover-hide" />
                    <img
                      src={comma2}
                      alt="img"
                      className="comma hover-show d-none"
                    />
                  </div>
                </div>
                <p>
                  I have been working with Pulse Marketing for several years
                  now, and I can confidently say that they are the best in the
                  business. Their team is dedicated, creative, and always
                  willing to listen to our needs and concerns. They have helped
                  us build a strong brand identity and establish ourselves as
                  leaders in our industry. I highly recommend Pulse Marketing to
                  any business looking for a top-notch marketing agency.
                </p>
                <div className="bottom">
                  <p className="body-large fw-semibold">Peter Szaly</p>
                  <p className="designation">Owner - ABR Construction</p>
                </div>
              </div>
              <div className="layer"></div>
            </div>
            <div className="for-layer">
              <div className="slide-1">
                <div className="top">
                  <img src={profile} alt="img" />
                  <div className="d-flex">
                    <img src={comma} alt="img" className="comma hover-hide" />
                    <img
                      src={comma2}
                      alt="img"
                      className="comma hover-show d-none"
                    />
                  </div>
                </div>
                <p>
                  This team has been instrumental in our business growth. Pulse
                  has helped us establish a strong social media presence and
                  build relationships with our audience through engaging content
                  and effective community management. They are highly skilled,
                  professional, and always willing to go the extra mile. We
                  highly recommend Pulse Marketing to any business looking to
                  improve their social media marketing efforts.
                </p>
                <div className="bottom">
                  <p className="body-large fw-semibold">Paul Schipizky</p>
                  <p className="designation">Owner- Brilliant Electric</p>
                </div>
              </div>
              <div className="layer"></div>
            </div>
            <div className="for-layer">
              <div className="slide-1">
                <div className="top">
                  <img src={profile} alt="img" />
                  <div className="d-flex">
                    <img src={comma} alt="img" className="comma hover-hide" />
                    <img
                      src={comma2}
                      alt="img"
                      className="comma hover-show d-none"
                    />
                  </div>
                </div>
                <p>
                  Pulse Marketing is a highly skilled and results-driven
                  marketing agency. They have helped us build a strong digital
                  presence and increase our online visibility through effective
                  SEO and PPC campaigns. Their team is responsive, proactive,
                  and always willing to go the extra mile to ensure our success.
                  We highly recommend Pulse Marketing to any business looking to
                  improve their online marketing efforts
                </p>
                <div className="bottom">
                  <p className="body-large fw-semibold">Waldo Villeda </p>
                  <p className="designation">Owner- F45 Fitness</p>
                </div>
              </div>
              <div className="layer"></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
