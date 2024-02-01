import React from "react";

const Map = () => {
  return (
    <div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.4941241989045!2d-123.12241352320288!3d49.285982170520235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671b04929bd2d%3A0x4345d44619628043!2s595%20Burrard%20St%2C%20Vancouver%2C%20BC%20V7X%201L4%2C%20Canada!5e0!3m2!1sen!2s!4v1703185640361!5m2!1sen!2s"
          width="100%"
          height="298"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
