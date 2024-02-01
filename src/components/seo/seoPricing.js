import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SeoPricing = () => {
  const handleNavigation = () => {
    window.open(
      "https://app.pulsemarketing.io/v2/preview/lnHgwLDzr6zW193CvYNF",
      "_blank",
      "noreferrer"
    );
  };
  return (
    <div>
      <div className="seo-pricing d-flex v-center h-center flex-column">
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
            <h6>Starter Package</h6>
            <p>The essentials to provide your best work for clients.</p>
            <h5>
              $529 USD<span>/Month</span>
            </h5>

            <button onClick={handleNavigation}>Buy plan</button>

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
                {/* 2 Way Text & Email Conversation   */}
                <strong>Keyword Research: </strong>
                {/* Identification of industry-specific keywords and phrases. */}
                Identification of industry-specific keywords and phrases.
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
                <strong>On-Page Optimization:</strong>
                Basic optimization of titles, meta descriptions, and headings.
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
                <strong>Content Analysis:</strong>
                Review and recommendations for existing website content.
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
                <strong>Local SEO:</strong>
                Basic local listing management and optimization.
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
                <strong>Monthly Reporting:</strong>
                Standard reports on keyword rankings and website traffic.
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
                <strong>24-7 Tracking:</strong>
                Interactive Performance Metrics: Engage with real-time data.
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
                <strong>Customer Support:</strong>
                Email and phone support with a 24-hour response time.
              </p>
              {/* <p>
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
                SMS & Email Templates
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
                Invoice
              </p> */}
            </div>
          </div>
          <div className="section-1 professional d-flex flex-column">
            <h6>Professional</h6>
            <p>A plan that scales with your rapidly growing business..</p>
            <h5>
              $849 USD<span>/Month</span>
            </h5>
            <a>
              <button
                className="professional-button"
                onClick={handleNavigation}
              >
                Buy plan
              </button>
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
                <strong>Advanced Keyword Research:</strong>
                Comprehensive analysis including competitor keyword strategies.
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
                <strong>Full On-Page Optimization: </strong>
                Detailed optimization of all on-page elements including images
                and schema
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
                <strong>Content Creation & Optimization:</strong>
                Creation of optimized blog posts or web pages (up to 8 per
                month).
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
                <strong>Local and National SEO:</strong>
                Enhanced local SEO strategies and initiation of national SEO
                efforts.
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
                <strong>Link Building:</strong>
                Basic link-building efforts to improve domain authority.
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
                <strong>Analytics and Reporting:</strong>
                Detailed monthly reports with insights and recommendations.
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
                <strong>24-7 Tracking:</strong>
                Interactive Performance Metrics: Engage with real-time data.
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
                <strong>Priority Customer Support:</strong>
                Phone and email support with a 4-hour response time
              </p>
            </div>
          </div>
          <div className="section-1 d-flex flex-column">
            <h6>Enterprise Package</h6>
            <p>Dedicated support and infrastructure for your company..</p>
            <h5>
              Custom Pricing<span>/Month</span>
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
                <strong>Bespoke Keyword Strategy:</strong>
                Tailored keyword research and strategy, including international
                SEO if applicable.
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
                <strong>Comprehensive SEO Audit:</strong>
                In-depth analysis of your website and competitors
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
                <strong>Custom Content Strategy:</strong>
                Personalized content planning and production (quantity varies
                based on needs).
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
                <strong>Advanced Link Building:</strong>
                Aggressive link-building strategies for maximum domain authority
                improvement.
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
                <strong>Full-Scale On-Page and Off-Page SEO:</strong>
                Complete SEO services including technical SEO.
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
                <strong>Custom Analytics and Reporting:</strong>
                Tailored reports with actionable insights and strategic planning
                sessions.
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
                <strong>Dedicated Account Manager:</strong>
                Direct access to a dedicated SEO expert for consultations and
                strategy discussions.
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
                <strong>24-7 Tracking:</strong>
                Interactive Performance Metrics: Engage with real-time data.
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
                <strong>Ongoing SEO Consultation:</strong>
                Regular meetings to discuss strategy, performance, and
                adjustments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoPricing;
