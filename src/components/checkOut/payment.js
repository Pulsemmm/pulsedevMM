import React from "react";
import money from "../../assets/icons/money.svg";
import paypal from "../../assets/icons/paypal.svg";
import visa from "../../assets/icons/visa.svg";
import Dropdown from "react-bootstrap/Dropdown";

const Payment = () => {
  return (
    <div>
      <div className="payment d-flex v-center h-center ">
        <div className="content">
          <h4>Payment Method </h4>
          <div className="methods d-flex">
            <label htmlFor="1">
              <input type="checkbox" name="" id="1" />
              <img src={money} alt="img" className="camera img-fluid" />
            </label>
            <label htmlFor="2">
              <input type="checkbox" name="" id="2" />
              <img src={paypal} alt="img" className="paypal img-fluid" />
            </label>
          </div>
          <div className="details d-flex flex-column">
            <h4>Payment Details</h4>
            <input type="text" name="" id="" placeholder="Enter Name on Card" />
            <div className="for-dropdown d-flex">
              <input
                type="text"
                name=""
                id=""
                placeholder="Card Name"
                className="drop"
              />
              <Dropdown className="card-names">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img src={visa} alt="img" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="dates d-flex">
              <input
                type="number"
                name=""
                id=""
                placeholder="Expiration"
                className="w-50"
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="CVV Card "
                className="w-50"
              />
            </div>
            <p>
              By Clicking “Confirm Payment” I agree to the companies term of
              services
            </p>
            <div className="buttons d-flex v-center h-center">
              <a href="/pricing">
                <button className="back">Back</button>
              </a>
              <a href="/thankyou">
                <button className="confirm">confirm Payment : $ 14.88</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
