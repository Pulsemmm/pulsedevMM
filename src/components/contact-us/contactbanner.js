import React from "react";
import { Icon } from "@iconify/react";

const Contactbanner = () => {
  return (
    <div>
      <div className="contactbanner d-flex v-center h-center flex-column">
        <div className="content mt-5 text-white">
          <h2>Lets Get in Touch</h2>
          <p>
            We’re excited to hear from you and start something special together.
            Submit your inquiry below and a member of our team with be in touch
            with you directly.
          </p>
          <div className="three-button d-flex flex-column">
            <button>
              <a href="mailto:hi@pulsemarketing.ca" className="text-white">
                hi@pulsemarketing.ca
              </a>
            </button>
            <button>
              <a href="mailto:sales@pulsemarketing.ca" className="text-white">
                sales@pulsemarketing.ca
              </a>
            </button>
            <button>
              <a href="mailto:ai@pulsemarketing.ca" className="text-white">
                ai@pulsemarketing.ca
              </a>
            </button>
          </div>
          <p className="mt-5">
            Address |{" "}
            <span>
              <Icon
                icon="fluent:location-12-filled"
                color="#00cdac"
                width="20"
                height="20"
              />
            </span>
            595 Burrard Street,Vancouver, BC V7X 1A3, Canada
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactbanner;
