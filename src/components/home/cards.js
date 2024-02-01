import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="cards d-flex mt-5" id="card-section">
        <div className="left d-flex flex-column">
          <h2 className="text-greenish-blue">
            KEYWORD, RESEARCH STRATEGY, SURVEY & ANALYTICS
          </h2>
          <p className="take-care">
            We take care of the tech. Pulse Marketing will build, maintain and
            manage your business digitally and has a 100% satisfaction guarantee
            on your digital marketing products. We have served 8K+ happy
            customers and completed 25K+ projects across North America.
          </p>
          <div className="social-media d-flex ">
            <p>
              INSTAGRAM
              <div className="black-layer"></div>
            </p>
            <p>
              FACEBOOK <div className="black-layer"></div>
            </p>
            <p>
              GOOGLE <div className="black-layer"></div>
            </p>
          </div>
        </div>
        <div className="right d-flex">
          <div className="div-1 market-status-card">
            <div className="without-audience market-status-card-content d-flex flex-column v-center h-center">
              <div className="top">
                <p>
                  Your audience will be defined on your target customers and
                  prospective buyers.
                </p>
                <div className="orange-layer"></div>
              </div>
            </div>
            <div className="audience market-status-card-content d-flex flex-column v-center h-center">
              <div className="top">
                <h6 className="medium-head">Audience</h6>
                <h1>95%</h1>
                <div className="orange-layer"></div>
              </div>
            </div>
          </div>
          <div className="div-2  market-status-card">
            <div className="audience market-status-card-content d-flex flex-column v-center h-center">
              <div className="top">
                <h6 className="medium-head">Strategy</h6>
                <h1>60%</h1>
                <div className="green-layer"></div>
              </div>
            </div>
            <div className="without-audience market-status-card-content d-flex flex-column v-center h-center">
              <div className="top">
                <p>
                  Your keyword strategy will be built based off common user
                  search results in your geographical area and business nature.
                </p>
                <div className="green-layer"></div>
              </div>
            </div>
          </div>
          <div className="div-3 market-status-card">
            <div className="without-audience market-status-card-content d-flex flex-column v-center h-center">
              <div className="top">
                <p>
                  Your marketing strategy optimizing performance doesn't have to
                  be a guessing game.
                </p>
                <div className="purple-layer"></div>
              </div>
            </div>
            <div className="audience market-status-card-content d-flex flex-column v-center h-center">
              <div className="top">
                <h6 className="medium-head">Keyword</h6>
                <h1>70%</h1>
                <div className="purple-layer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
