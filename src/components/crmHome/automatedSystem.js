import React from "react";
import build from "../../assets/images/crm/build.webp";
import expert from "../../assets/images/crm/expert.webp";
import send from "../../assets/images/crm/send.webp";
import call from "../../assets/images/crm/call.webp";

const AutomatedSystem = () => {
  return (
    <div>
      <div className="automated-system  d-flex v-center h-center flex-column">
        <div className="top d-flex flex-column">
          <h5>
            Get Your Email Game On Point With Pluse Marketing Automated System!
          </h5>
          <p>
            Sending personalized messages with the press of a button! Let Us Get
            You Any International Mobile Number You Want… Pluse Marketing CRM is
            an all-in-one sales and marketing platform that automatically grows
            your business.
          </p>
        </div>
        <div className="bottom d-flex flex-column">
          <div className="section-1 d-flex">
            <div className="left">
              <img src={build} alt="img" className="img-fluid" />
            </div>
            <div className="right d-flex flex-column">
              <h6>CRM & Lead Catch!</h6>
              <h4>Build An Unlimited Number Of Websites..</h4>
              <p>
                Bag Those Leads Without Breaking A Sweat… Double your sales with
                Pluse Marketing CRM and lead capture tools. Our effective CRM
                and lead capture blueprints, landing page templates and
                appointment setting allows you to streamline the leads.
              </p>
            </div>
          </div>
          <div className="section-2 d-flex">
            <div className="left d-flex flex-column">
              <h6>Cool Personalized Automation That Sounds Like YOU!</h6>
              <h4>
                Let Pluse Marketing Experts Do The Work While You Can Focus On
                What’s More Important.
              </h4>
              <p>
                With our customized automations you can free yourself from the
                boring tasks.
              </p>
            </div>
            <div className="right ">
              <img src={expert} alt="img" className="img-fluid" />
            </div>
          </div>
          <div className="section-1 d-flex">
            <div className="left">
              <img src={send} alt="img" className="img-fluid" />
            </div>
            <div className="right d-flex flex-column">
              <h6>Emails & Texts That Are Hard To Ignore.</h6>
              <h4>Don't just send a dull email!!</h4>
              <p>
                Send personalized and targeted emails to your leads! Let Pluse
                Marketing curated templates do the heavy lifting for you. With
                our segmented lists in your CRM, you'll be sending messages that
                your audience will actually want to read.
              </p>
            </div>
          </div>
          <div className="section-2 d-flex">
            <div className="left d-flex flex-column">
              <h6>Smart And Hassel Free Business Line.</h6>
              <h4>Call Anyone With An International Number</h4>
              <p>
                Keep your business and personal life separate with Pluse
                Marketing CRM Business Line. Take work calls and texts on your
                smartphone without mixing with your personal conversations. Keep
                it professional, keep it personal with our Business Line
              </p>
            </div>
            <div className="right ">
              <img src={call} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedSystem;
