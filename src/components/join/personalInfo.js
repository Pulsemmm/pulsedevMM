import React from "react";
import { Icon } from "@iconify/react";

const PersonalInfo = () => {
  return (
    <div>
      <div className="personal-info">
        <div className="detail d-flex">
          <p className="w-50">
            Pulse Marketing jobs allow you to display your creative, analytical
            and strategic skills across the company and the world. Help increase
            the presence of our brand, communicate the value of our products,
            gather competitive insights and build a strategy for growth. From
            marketing specialist jobs to brand marketing opportunities, we have
            a wide range of offerings. Amazing with your camera? We’d love to
            see your portfolio.
          </p>
          <p className=" w-50">
            Pulse Marketing is an award winning sales-focused marketing firm
            based in Vancouver, British Columbia with an objective to increase
            revenue for all of our clients. Pulse has served 25K+ happy
            customers over the last 10+ years in business from Fortune 500
            companies to locally owned businesses.
          </p>
        </div>
        <div className="facilities d-flex flex-column">
          <p>
            <Icon
              icon="ic:round-task-alt"
              color="#00cdac"
              width="16"
              height="16"
            />
            Putting our customers first in everything we do
          </p>
          <p>
            <Icon
              icon="ic:round-task-alt"
              color="#00cdac"
              width="16"
              height="16"
            />
            Putting our customers first in everything we do
          </p>
          <p>
            <Icon
              icon="ic:round-task-alt"
              color="#00cdac"
              width="16"
              height="16"
            />
            Putting our customers first in everything we do
          </p>
          <p>
            <Icon
              icon="ic:round-task-alt"
              color="#00cdac"
              width="16"
              height="16"
            />
            Putting our customers first in everything we do
          </p>
        </div>
        <div className="per-info d-flex v-center h-center">
          <div className="content">
            <div className="personal-infor">
              <h6>Personal Information</h6>
              <div className="details-parent">
                <div className="details">
                  <p>
                    Are you interested in full-time employment, part-time or
                    either?
                  </p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>When’s the earliest you can start working with us?</p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>What are your salary expectations?</p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>Are you eligible to work in Canada?</p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>
                    Are you willing to relocate? If so, when would you be
                    available?
                  </p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>Why did you apply for this position?*</p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>Why would you like to work with our company?</p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>How did you learn about this job?</p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>
                    How does this position fit in with your long-term goals?
                  </p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>
                    Please list three references and their contact information.
                  </p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>
                    This is a remote position. Do you have access to (e.g. a
                    computer, Internet connection and a private space) to work
                    remotely?
                  </p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>
                    What days and times are you available to work during the
                    week? or Are you available to work
                  </p>
                  <input type="text" placeholder="Type here" />
                </div>
                <div className="details">
                  <p>
                    If you’re currently working, how much notice do you need to
                    give to your employer?
                  </p>
                  <input type="text" placeholder="Type here" />
                </div>

                <div className="details">
                  <p>Resume Upload</p>
                  <input type="file" name="" id="" />
                </div>

                <div className="details d-flex v-center h-center">
                  <div className="save d-flex v-center h-center">
                    <button>Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
