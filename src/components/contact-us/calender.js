import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import profile from "../../assets/images/Calender/Ellipse 45.png";
import { Icon } from "@iconify/react";

const Calender = () => {
  const [show, setShow] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);
  return (
    <div>
      <div className="calender d-flex flex-column v-center h-center">
        <h2 className="text-center">BOOK CONSULTATION</h2>
        {/* <div className="calender-content d-flex">
          <div className="calender-content-left">
            <div className="top d-flex v-center h-center">
              <div className="profile-pic">
                <img src={profile} alt="profile-img" />
              </div>
              <div className="profile-details">
                <label className="label-medium text-white">Ian slater</label>
                <p className="body-medium text-greenish-blue">CEO</p>
                <p className="greyish">20-min Consulation</p>
              </div>
            </div>
            <div className="bottom">
              <div className="camera d-flex">
                <Icon icon="bxs:video" color="white" width="33" height="33" />{" "}
                <p>Web conferencing details provided upon confirmation.</p>
              </div>
              <div className="unlock">
                <p>
                  Unlock Your Brand's Potential: Schedule a Pulse Marketing
                  Consultation. <br /> <br />
                  Get ready to embark on an exhilarating marketing journey!
                  We're thrilled that you've chosen Pulse Marketing for your
                  consultation, and we can't wait to meet you virtually. <br />{" "}
                  <br />
                  Our team of marketing experts is eager to dive into your
                  project and explore the endless possibilities to elevate your
                  brand. Your ideas and aspirations matter to us, and we're here
                  to turn them into reality. <br /> <br /> To make the most out
                  of our meeting, please: Our team of marketing experts is eager
                  to dive into your project and explore the endless
                  possibilities to elevate your brand. Your ideas and
                  aspirations matter to us, and we're here to turn them into
                  reality. <br /> <br /> To make the most out of our meeting,
                  please:
                </p>
              </div>
            </div>
          </div>
          <div className="calender-content-right d-flex">
            <div className="left-side d-flex flex-column">
              <div className="top d-flex flex-column">
                <h4>2023</h4>
                <div>|</div>
                <p>Octomber</p>
                <div>|</div>
                <h3>November</h3>
                <div>|</div>
                <h2>December</h2>
                <div>|</div>
                <h3>January</h3>
                <div>|</div>
                <p>February</p>
              </div>
              <div className="bottom">
                <h2>Calender 2023</h2>
              </div>
            </div>
            <div className="right-side d-flex v-center flex-column">
              <h6>Dec 02,Saturday</h6>
              <table>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
                <tr>
                  <td className="blur">26</td>
                  <td className="blur">27</td>
                  <td className="blur">28</td>
                  <td className="blur">29</td>
                  <td className="blur">30</td>
                  <td>1</td>
                  <td className="active-number" onClick={handleShow}>
                    2
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td className="blur">1</td>
                  <td className="blur">2</td>
                  <td className="blur">3</td>
                  <td className="blur">4</td>
                  <td className="blur">5</td>
                  <td className="blur">6</td>
                </tr>
              </table>
              <div className="for-shade"></div>
            </div>
          </div>
        </div> */}
        <iframe
          className="book-form"
          src="https://api.leadconnectorhq.com/widget/booking/j28QTcc6Jh0qSBmvQa8u"
        ></iframe>
      </div>

      {/* Modal opens when user clicks on his/her date of appointment */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton className="first-modal">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="first-body">
          <h4>
            December <span>SAT</span>
            <span className="text-greenish-blue">2</span>
          </h4>
          <div className="schedule ">
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
            <div className="time d-flex v-center h-center ">
              <p>10:00 Am</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="next" onClick={handleShow2}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal opens when user click on next button which is in modal-1 */}
      <Modal show={showModal2} onHide={handleClose2} centered size="xl">
        <Modal.Header closeButton className="first-modal">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="next-modal-body">
          <div className="content w-100">
            <div className="details ">
              <p>Name*</p>
              <input type="text" name="" id="" />
            </div>
            <div className="details  ">
              <p>Email*</p>
              <input type="text" name="" id="" />
            </div>
            <div className="details  ">
              <p>Add Guests</p>
              <button>+ Guest</button>
            </div>
            <div className="details">
              <p>Phone No*</p>
              <input type="text" name="" id="" />
            </div>
            <div className="details">
              <p>Company Name *</p>
              <input type="text" name="" id="" />
            </div>
            <div className="details">
              <p>Current Website *</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="goal">
            <p>
              What specific goals do you intend to pursue in the upcoming
              marketing consultation with Pulse?
            </p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="event">
            <div className="details">
              <p>Send Text Message To*</p>
              <input type="text" name="" id="" />
            </div>
            <div className="details">
              <p className="mt-4"></p>
              <button>Schedule Event</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Calender;
