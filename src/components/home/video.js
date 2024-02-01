import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import happy from "../../assets/images/home/aboutus.webp";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="video mt-5">
        <div className="top d-flex v-center h-center flex-column">
          <div className="years d-flex v-center h-center flex-column">
            <h2>10+</h2>
            <p className="body-large">Years of Experience</p>
          </div>
          <div className="client-video d-flex v-center h-center">
            {/* <img src={happy} alt="img" className="img-fluid mainImage" /> */}
            <video
              controls
              loop
              autoPlay
              src="/assets/modal.mp4"
              className="mainImage"
            ></video>

            <div className="animation pointer d-none" onClick={handleShow}>
              <img src="/assets/images/anim.png" alt="img" className=" inner" />
              <img src="/assets/images/PNG.png" alt="img" className="outer" />
              {/* <video
                loop
                autoPlay
                muted
                src="/assets/circleVideo.mp4"
                className="outer"
                onClick={handleShow}
              ></video> */}
            </div>
          </div>
        </div>
        <div className="bottom d-flex">
          <div className="content d-flex v-center h-center flex-column">
            <h2 className="text-greenish-blue">8K+</h2>
            <h3>HAPPY CLIENTS</h3>
          </div>
          <div className="projects d-flex align-items-end">
            <h6>25k+ PROJECTS COMPLETED ACROSS NORTH AMERICA</h6>
          </div>
        </div>
      </div>

      {/* Modal for video */}

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        className="video-modal"
      >
        <Modal.Body className="modal-video">
          <video controls loop autoPlay src="/assets/modal.mp4"></video>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Video;
