import React from "react";
import meeting from "../../assets/images/crm/meeting.webp";
import white from "../../assets/images/crm/WhiteComma.webp";
import green from "../../assets/images/crm/GreenComma.webp";

const Meeting = () => {
  return (
    <div>
      <div className="team-meeting   ">
        <div className="content d-flex">
          <div className="left d-flex v-center h-center">
            <img src={meeting} alt="img" className="img-fluid" />
          </div>
          <div className="right d-flex flex-column align-items-end">
            <div className="card1 d-flex flex-column">
              <img src={white} alt="img" className="img-fluid" />
              <h5>
                You will have all you need to double your leads with Rozi’s
                tailored coaching and strategic directions.
              </h5>
              <p>
                Powerful Assistance From The Experts. <br /> You can have
                round-the-clock support, and trouble-free migration services.
              </p>
            </div>
            <div className="card1 second-card d-flex flex-column">
              <img src={green} alt="img" className="img-fluid" />
              <h5>
                "Since using Rozi’s CRM services, our text communication has
                become foolproof. We never have to worry about human error or
                absences, and our conversion rate has skyrocketed to 87%!"
              </h5>
              <p>-Sally Hendricks, "Nail Glam Club"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
