import React from "react";

const Thankyou = () => {
  return (
    <div>
      <div className="thank-you d-flex v-center h-center flex-column">
        <div className="thankyou-video w-100 h-100">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/assets/thank-you.mp4"
            className="w-100 h-100 object-fit-cover"
          ></video>
        </div>
        <div className="content d-flex v-center h-center flex-column">
          <h5>Thank You</h5>
          <p>
            Thank you for choosing Pulse Marketing! Your support means the world
            to us. We look forward to helping you achieve your marketing goals.
            Feel free to reach out if you have any questions or need further
            assistance. Cheers to success!"
          </p>
          <a href="/crm">
            <button>Go back to main page</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
