import React from "react";
import investment from "../../assets/images/blogs/A.png";
import magic from "../../assets/images/blogs/B.png";
import inverted from "../../assets/images/blogs/inverted.png";
import ScrollToTop from "../shared/scrollToTop";

const Page1 = (props) => {
  ScrollToTop();
  const data = props.data;
  console.log("data", data);
  return (
    <div>
      <div className="page-1 d-flex v-center h-center flex-column">
        <div className="content d-flex h-center flex-column">
          <div className="top d-flex h-center flex-column">
            <h1>
              {data.header}
              {/* The Biggest Crash in Stock <br className="break" /> Market NBA
              Season */}
            </h1>
            <div className="blog-image ">
              <img src={data.banner} alt="img" className="img-fluid" />
            </div>
            <p className="my-4 ">
              <strong>{data.detail}</strong>
            </p>

            {data.points.map((items, index) => {
              return (
                <div className="magic">
                  <p className="mt-0 mb-2">
                    {/* <strong>  */}
                    {items.head}
                    {/* </strong> */}
                  </p>
                  {items.discription == "" ? (
                    <p className="d-none"></p>
                  ) : (
                    <p className="mb-2 ">{items.discription}</p>
                  )}
                </div>
              );
            })}
            <p>{data.conclusion}</p>
          </div>
          <div className="bottom d-flex flex-column d-none">
            <h3 className="d-flex   h-center">
              <img src={inverted} alt="img" className="img-fluid" />
              Nobody cares what software Facebook runs on. Users only care about
              what the product lets them do and how it makes them feel.
            </h3>
            <div className="content d-flex">
              <div className="left">
                <img src={magic} alt="img" className="img-fluid" />
              </div>
              <div className="right">
                <h4>1 Bucks vs 8 Magic</h4>
                <p>
                  This series will prob go past 5 games, as the Nets were the
                  Team that snapped Raptors 15 game winnings streak in a game in
                  Brooklyn, but regardless the Raptors won the season series
                  3-1, but in every game you saw the Nets put up a good fight.
                  <br />
                  <br />
                  Deep down, you look down the roster, and by the time playoff
                  start, you will have a healthy Toronto Raptors, as this past
                  season, Raptors lost so many man games to injury, as basically
                  the starting lineup went through a series of injury as Siakam,
                  Lowry, Vanfleet, Powell, Ibaka, Gasol all were injured at one
                  point during the season, and still ended up as of today, as
                  the second seed as 46-18 and a 15 game winning streak after
                  losing Danny Green and Kawhi Leonard in Free Agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
