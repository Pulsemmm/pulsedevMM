import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const handleNavigation = () => {
    window.open(
      "https://app.pulsemarketing.io/v2/preview/e2eV1vrGAc29tdDZQftt",
      "_blank",
      "noreferrer"
    );
  };
  return (
    <div>
      <div className="pricing d-flex v-center h-center flex-column">
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
            <h6>Basic</h6>
            <p>The essentials to provide your best work for clients.</p>
            <h5>
              $129<span>/Month</span>
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
                2 Way Text & Email Conversation
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
                Missed Call Text Back
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
                Text To Pay
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
                Calendar
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
                CRM & Opportunities
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
                Email Marketing
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
                Websites & Funnels
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
                Forms & Surveys
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
                Trigger Links
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
                Triggers
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
                Invoice
              </p>
            </div>
          </div>
          <div className="section-1 professional d-flex flex-column">
            <h6>Professional</h6>
            <p>A plan that scales with your rapidly growing business..</p>
            <h5>
              $248<span>/Month</span>
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
                2 Way Text & Email Conversation
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
                Missed Call Text Back
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
                Text To Pay
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
                Calendar
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
                CRM & Opportunities
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
                Email Marketing
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
                Websites & Funnels
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
                Forms & Surveys
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
                Trigger Links
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
                Triggers
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
                Invoice
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
                Campaigns
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
                Social Planner
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
                Facebook Messenger
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
                All Reporting
              </p>
            </div>
          </div>
          <div className="section-1 d-flex flex-column">
            <h6>Premium</h6>
            <p>Dedicated support and infrastructure for your company..</p>
            <h5>
              $298<span>/Month</span>
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
                2 Way Text & Email Conversation
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
                Missed Call Text Back
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
                Text To Pay
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
                Calendar
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
                CRM & Opportunities
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
                Email Marketing
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
                Websites & Funnels
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
                Forms & Surveys
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
                Trigger Links
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
                Triggers
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
                Invoices
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
                Campaigns
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
                Social Planner
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
                Facebook Messenger
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
                All Reporting
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
                Reputation Management
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
                Website Chat
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
                GMB Messaging & GMB Call Tracking
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
                Missed call text back
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
