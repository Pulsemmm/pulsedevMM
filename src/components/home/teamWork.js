import React from "react";
import CounterComponent from "../../components/counter/counter";
const TeamWork = () => {
  return (
    <div>
      <div className="teamWork d-flex v-center h-center">
        <div className="team d-flex flex-column v-center">
          <h4 className="text-white">team work</h4>
          <h2 className="d-flex animated-text">
            <CounterComponent className="head" targetValue={25} time={60} />
            k+
          </h2>
          <p>Projects Completed</p>
        </div>
        <div className="team d-flex flex-column v-center">
          <h4 className="text-white">Skills</h4>
          <h2 className="d-flex animated-text">
            <CounterComponent className="head" targetValue={8} time={60} />
            k+
          </h2>
          <p>Happy Customers </p>
        </div>
        <div className="team d-flex flex-column v-center">
          <h4 className="text-white">happiness</h4>
          <h2 className="d-flex animated-text">
            <CounterComponent className="head" targetValue={10} time={60} />
            k+
          </h2>
          <p>Years Experience</p>
        </div>
        <div className="team d-flex flex-column v-center">
          <h4 className="text-white">creativity</h4>
          <h2 className="d-flex animated-text">
            <CounterComponent className="head" targetValue={20} time={60} />
            k+
          </h2>
          <p>Countries Served</p>
        </div>
        <div className="layer"></div>
      </div>
    </div>
  );
};

export default TeamWork;
