import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const BrandPricing = () => {
  const handleNavigation = () => {
    window.open(
      "https://app.pulsemarketing.io/v2/preview/7Ms5cChVCJ1fwDSv9rjQ",
      "_blank",
      "noreferrer"
    );
  };
  return (
    <div>
      <div className="brand-pricing d-flex v-center h-center flex-column">
        <div className="top d-flex v-center h-center flex-column">
          <h1>pricing</h1>
          <p>
            Access our all-in-one software with industry-leading features
            without being penalized by increased costs when you grow your team
            or contact list.
          </p>
        </div>
        <div className="bottom d-flex">
          <div className="section-1 d-flex flex-column">
            <h6>Essential Branding Package</h6>
            <p>The essentials to provide your best work for clients.</p>
            <h5>
              $198 USD<span> </span>
            </h5>
            <a onClick={handleNavigation}>
              <button>Buy plan</button>
            </a>
            <div className="available-facilities d-flex flex-column">
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Personalized Consultation: </strong>
                Engage in a one-on-one meeting with our experienced branding
                team for tailored creative direction and insightful suggestions.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Diverse Logo Options: </strong>
                Receive 5 distinct logo designs, crafted to reflect your brand's
                unique identity.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Unlimited Revisions: </strong>
                Enjoy the flexibility of unlimited revisions to ensure your
                total satisfaction with the final design.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Fast Turnaround: </strong>
                Benefit from a rapid 72-hour delivery, perfect for tight
                deadlines.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Comprehensive File Suite: </strong>
                Gain access to all working files including PDFs, PNGs, and other
                essential formats for versatile use.
              </p>
            </div>
          </div>
          <div className="section-1 professional d-flex flex-column">
            <h6>Advanced Branding Package</h6>
            <p>A plan that scales with your rapidly growing business.</p>
            <h5>
              $498 USD<span> </span>
            </h5>
            <a onClick={handleNavigation}>
              <button className="professional-button">Buy plan</button>
            </a>
            <div className="available-facilities d-flex flex-column">
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>In-Depth Branding Consultation: </strong>
                Dive deeper with a one-on-one meeting with our branding experts
                for comprehensive creative guidance and bespoke suggestions.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Expanded Logo Selection: </strong>
                Choose from 10 innovative logo designs, offering a broader range
                of creative options.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Unlimited Revisions: </strong>
                Avail unlimited revisions to ensure each aspect of your brand is
                precisely as you envision.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Optimized Delivery Timeline: </strong>
                Receive your complete branding package within 1 week, balancing
                quality and efficiency.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Custom Tri-Fold Brochure: </strong>
                Enhance your marketing with a professionally designed tri-fold
                brochure, tailored for print.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Animated Logo GIF: </strong>
                Add dynamic flair to your brand with a custom animated logo GIF,
                perfect for digital platforms.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Extensive File Collection: </strong>
                Access all necessary working files, including PDFs, PNGs, and
                more, for full control over your branding materials.
              </p>
            </div>
          </div>
          <div className="section-1 d-flex flex-column">
            <h6> Bespoke Enterprise Solutions</h6>
            <p>
              Our commitment extends beyond project completion, offering ongoing
              support and strategic consultation to adapt and grow with your
              brand.
            </p>
            <h5>
              Custom Pricing<span> </span>
            </h5>
            <a onClick={handleNavigation}>
              <button>Buy plan</button>
            </a>
            <div className="available-facilities d-flex flex-column">
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Customized Approach: </strong>
                Tailored specifically to meet the unique needs of
                enterprise-level clients, this tier offers a highly personalized
                service.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Flexible Client Engagement: </strong>
                We prioritize listening to our clients' specific requests,
                challenges, and objectives to deliver targeted solutions.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Comprehensive Service Range: </strong>
                From advanced branding strategies to large-scale marketing
                campaigns, our team is equipped to handle a wide array of
                services.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Adaptable Pricing Structure: </strong>
                Understanding the complexity and scale of enterprise projects,
                pricing is determined based on the scope and requirements of
                each project, ensuring fair and transparent agreements.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Dedicated Project Management: </strong>
                Clients in this tier benefit from a dedicated project manager to
                ensure seamless communication and efficient execution.
              </p>
              <p>
                <span>
                  <Icon
                    icon="subway:tick"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
                <strong>Long-Term Support and Consultation: </strong>
                Our commitment extends beyond project completion, offering
                ongoing support and strategic consultation to adapt and grow
                with your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPricing;
