import React from "react";
import { Icon } from "@iconify/react";
import CustomCheckBox from "../shared/customCheckBox";
import { useState } from "react";
import Input from "../shared/input";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contactinfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    message: "",
    seo: false,
    gd: false,
    wd: false,
    orm: false,
    ad: false,
    cc: false,
    file: null,
    captcha: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      // Update checkbox values to label text if checked, otherwise an empty string
      setFormData({
        ...formData,
        [name]: checked ? value : "",
      });
    } else if (type === "file") {
      // Handle file upload
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      // Handle other input types
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="Contactinfo d-flex v-center h-center flex-column">
        <h2>BOOK CONSULTATION</h2>
        <div className="content d-flex mt-5">
          <div className="left d-flex flex-column v-center h-center">
            <h1>
              Contact <br /> <span>Information</span>
            </h1>
            <label className="small mt-4">
              Say something to start a live chat!
            </label>
            <div className="green-shadow"></div>
          </div>
          <div className="right d-flex flex-column">
            <div className="input-box-wrapper gap-5">
              <Input
                label="First Name"
                labelClass="mb-2"
                inputType="text"
                wrapperClasses="w-100"
                onChange={handleInputChange}
                name="firstName"
                value={formData.firstName}
              />
              <Input
                label="Last Name"
                labelClass="mb-2"
                inputType="text"
                wrapperClasses="w-100"
                onChange={handleInputChange}
                name="lastName"
                value={formData.lastName}
              />

              <Input
                label="Email"
                labelClass="mb-2"
                inputType="mail"
                wrapperClasses="w-100"
                onChange={handleInputChange}
                name="email"
                value={formData.email}
              />

              <Input
                label="Phone Number"
                labelClass="mb-2"
                inputType="number"
                wrapperClasses="w-100"
                onChange={handleInputChange}
                name="phone"
                value={formData.phone}
              />

              <Input
                label="Company Name"
                labelClass="mb-2"
                inputType="text"
                wrapperClasses="w-100"
                onChange={handleInputChange}
                name="companyName"
                value={formData.companyName}
              />

              <Input
                label="Company Website"
                labelClass="mb-2"
                inputType="text"
                wrapperClasses="w-100"
                onChange={handleInputChange}
                name="companyWebsite"
                value={formData.companyWebsite}
              />
            </div>

            <div className="service d-flex flex-column">
              <p className="medium">What services are you interested in?</p>
              <div className="labels">
                <CustomCheckBox
                  label="Search Engine Optimization"
                  id="seo"
                  name="seo"
                  value="Search Engine Optimization"
                  onChange={handleInputChange}
                  checked={formData.seo}
                />
                {/* <CustomCheckBox
                  label="Graphic Design"
                  id="gd"
                  name="gd"
                  value="Graphic Design"
                  onChange={handleInputChange}
                  checked={formData.gd}
                /> */}
                <CustomCheckBox
                  label="Web Development"
                  id="wd"
                  name="wd"
                  value="Web Development"
                  onChange={handleInputChange}
                  checked={formData.wd}
                />
                <CustomCheckBox
                  label="ORM (Online Reputation Management)"
                  id="orm"
                  name="orm"
                  value="ORM (Online Reputation Management)"
                  onChange={handleInputChange}
                  checked={formData.orm}
                />
                <CustomCheckBox
                  label="Applications Development"
                  id="ad"
                  name="ad"
                  value="Applications Development"
                  onChange={handleInputChange}
                  checked={formData.ad}
                />
                {/* <CustomCheckBox
                  label="Content Creation"
                  id="cc"
                  name="cc"
                  value="Content Creation"
                  onChange={handleInputChange}
                  checked={formData.cc}
                /> */}
              </div>
            </div>

            <div className="message">
              <p className="medium">Message</p>
              <textarea
                id=""
                placeholder="Write your message.."
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <ReCAPTCHA
                sitekey="6LfB52EpAAAAAJondA85dVvzsS5rUQLK0GsvbLE2"
                onChange={handleInputChange}
                name="captcha"
              />
            </div>

            <div className="two-buttons d-flex justify-content-between">
              <label id="1" className="d-flex v-center h-center">
                Upload File
                <input
                  type="file"
                  name="file"
                  id="1"
                  className="d-none"
                  onChange={handleInputChange}
                />
                <Icon
                  icon="material-symbols:upload"
                  width="24"
                  height="24"
                  className="ms-2"
                />
              </label>
              <button className="rightbutton" onClick={handleSubmit}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
