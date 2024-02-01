import React, { Suspense, useState } from "react";
import { aboutImg } from "../content/data";
import LazyLoadedImage from "../shared/lazyLoadedImage";
import { Icon } from "@iconify/react";
const Teamcard = () => {
  const goToPage = () => {
    window.open(
      "https://api.leadconnectorhq.com/widget/bookings/pulsemarketing",
      "_blank"
    );
  };

  const teamInfo = [
    {
      id: 1,
      profile: aboutImg.team3,
      name: "Ian Slater",
      desig: "Principal/Partner",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 2,
      profile: aboutImg.team6,
      name: "Matthew Czegeny",
      desig: "CTO/Partner",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 3,
      profile: aboutImg.team9,
      name: "Joel Halcro",
      desig: "Design/Partner",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 4,
      profile: aboutImg.team4,
      name: "Talha Pervaiz",
      desig: "Media",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 5,
      profile: aboutImg.team29,
      name: "Jessica Chan",
      desig: "Copywriter",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 6,
      profile: aboutImg.team25,
      name: "Fiona Roka",
      desig: "Design",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 7,
      profile: aboutImg.team7,
      name: "William Healy",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 8,
      profile: aboutImg.team8,
      name: "Valluvan Koneswaran",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 9,
      profile: aboutImg.team30,
      name: "Shabnam Rezagholi",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 10,
      profile: aboutImg.team28,
      name: "Alisha Gittens",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 11,
      profile: aboutImg.team11,
      name: "Ramiz Essani",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 12,
      profile: aboutImg.team27,
      name: "Anna Kubai",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 13,
      profile: aboutImg.team13,
      name: "Sebastiano Cantali",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 14,
      profile: aboutImg.team14,
      name: "Raunak Singh",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 15,
      profile: aboutImg.team10,
      name: "Alexander Mitchell",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 16,
      profile: aboutImg.team12,
      name: "Brandon Aultman",
      desig: "Sales Coordinator",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 17,
      profile: aboutImg.team17,
      name: "Dwayne Hann",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 18,
      profile: aboutImg.team18,
      name: "Arham Ramirez",
      desig: "CRM Lead ",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 19,
      profile: aboutImg.team19,
      name: "Michele Wilson",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 20,
      profile: aboutImg.team20,
      name: "Viviana Moran",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 21,
      profile: aboutImg.team16,
      name: "Jacob Pascau",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 22,
      profile: aboutImg.team31,
      name: "Riya Dutt",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 23,
      profile: aboutImg.team15,
      name: "AJ Jumani",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
    {
      id: 24,
      profile: aboutImg.team24,
      name: "John Chang",
      desig: "Account Executive",
      twitterLink: "#",
      facebookLink: "#",
      PinterestLink: "#",
      InstaLink: "#",
    },
  ];
  return (
    <>
      {teamInfo.map((info) => (
        <div
          className="team-card light-grey-shadow pointer"
          key={info.id}
          onClick={goToPage}
        >
          <Suspense fallback="Loading...">
            <LazyLoadedImage
              src={info.profile}
              alt="teamEllipse"
              className="team-img"
            />
          </Suspense>
          <div className="card-bottom h-center flex-column">
            <p className="body-large fw-medium">{info.name}</p>
            <p className="body-large fw-light mt-2">{info.desig}</p>
          </div>
          <div className="card-bottom-hover h-center flex-column d-none">
            <p className="body-large fw-medium">{info.name}</p>
            <p className="body-large fw-light mt-2">{info.desig}</p>
            <div className="h-center links-wrapper gap-4 mt-3">
              <a href={info.twitterLink} target="_blank">
                <div className="icon-wrapper">
                  <span className="iconmain v-center h-center">
                    <Icon
                      icon="ri:twitter-x-fill"
                      width="20"
                      height="20"
                      color="black"
                    />
                  </span>
                  <span className="iconhover v-center h-center">
                    <Icon
                      icon="ri:twitter-x-fill"
                      width="20"
                      height="20"
                      color="black"
                    />
                  </span>
                </div>
              </a>
              <a href={info.facebookLink} target="_blank">
                <div className="icon-wrapper">
                  <span className="iconmain v-center h-center">
                    <Icon
                      icon="jam:facebook"
                      width="20"
                      height="20"
                      color="black"
                    />
                  </span>
                  <span className="iconhover v-center h-center">
                    <Icon
                      icon="jam:facebook"
                      width="20"
                      height="20"
                      color="black"
                    />
                  </span>
                </div>
              </a>
              <a href={info.PinterestLink} target="_blank">
                <div className="icon-wrapper">
                  <span className="iconmain v-center h-center">
                    <Icon
                      icon="fa:pinterest-p"
                      width="20"
                      height="20"
                      color="black"
                    />
                  </span>
                  <span className="iconhover v-center h-center">
                    <Icon
                      icon="fa:pinterest-p"
                      width="20"
                      height="20"
                      color="black"
                    />
                  </span>
                </div>
              </a>
              <a href={info.InstaLink} target="_blank">
                <div className="icon-wrapper">
                  <span className="iconmain v-center h-center">
                    <Icon
                      icon="grommet-icons:instagram"
                      width="20"
                      height="20"
                      color="black"
                    />
                  </span>
                  <span className="iconhover v-center h-center">
                    <Icon
                      icon="grommet-icons:instagram"
                      width="20"
                      height="20"
                      color="black"
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Teamcard;
