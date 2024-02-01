import React, { useState } from "react";
import {
  portfolio,
  hospitality,
  contractor,
  ecommerce,
  mobilecards,
} from "../content/data";
import Storycard from "../shared/storycard";
import Button from "../shared/button";
import Mobilecard from "../shared/mobilecard";
import ReactPaginate from "react-paginate";
import { useEffect } from "react";
import Applications from "../app-development/applications";

const Projects = (props) => {
  const [filter, setFilter] = useState("Animated");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    setData(portfolioItems);
  }, []);

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.category === filter);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleFilter = (category) => {
    setFilter(category);
    setCurrentPage(0);
  };
  return (
    <div>
      <div
        className={
          filter === "Apps"
            ? "applications v-center flex-column"
            : "s_stories-section v-center flex-column"
        }
      >
        <h2 className={`text-center ${props.hide}`}>
          {props.header}
          <br />
          <span className="text-greenish-blue">{props.subheader}</span>
        </h2>
        <h5 className={`fw-bolder ${props.hide2}`}>{props.header}</h5>
        <div className="d-flex gap-4 cat-btn">
          <Button
            text="All"
            width="150px"
            height="40px"
            className={`btn-primary2 text-black d-none ${
              filter === "All" ? "selected text-white" : ""
            }`}
            onClick={() => handleFilter("All")}
          />
          <Button
            text="Animated"
            width="150px"
            height="40px"
            className={`btn-primary2 text-black ${
              filter === "Animated" ? "selected text-white" : ""
            }`}
            onClick={() => handleFilter("Animated")}
          />
          <Button
            text="Hospitality"
            width="150px"
            height="40px"
            className={`btn-primary2 text-black ${
              filter === "Hospitality" ? "selected text-white" : ""
            }`}
            onClick={() => handleFilter("Hospitality")}
          />
          <Button
            text="Contractor"
            width="150px"
            height="40px"
            className={`btn-primary2 text-black ${
              filter === "contractorWebsite" ? "selected text-white" : ""
            }`}
            onClick={() => handleFilter("contractorWebsite")}
          />
          <Button
            text="E-Commerce"
            width="150px"
            height="40px"
            className={`btn-primary2 text-black ${
              filter === "ecommerceWebsite" ? "selected text-white" : ""
            }`}
            onClick={() => handleFilter("ecommerceWebsite")}
          />
          <Button
            text="Apps"
            width="150px"
            height="40px"
            className={`btn-primary2 text-black ${
              filter === "Apps" ? "selected text-white" : ""
            }`}
            onClick={() => handleFilter("Apps")}
          />
        </div>

        <div className="S-wrapper my-md-5  ">
          <div className="stories-wrapper">
            {filter === "Apps" ? (
              <Mobilecard data={mopbileApps} />
            ) : (
              <Storycard data={subset} />
            )}
          </div>
        </div>
        {filter === "Apps" ? (
          <></>
        ) : (
          <ReactPaginate
            pageCount={totalPages}
            onPageChange={handlePageChange}
            forcePage={currentPage}
            pageRangeDisplayed={2}
            className="light-grey-shadow pagination-react"
          />
        )}
      </div>
    </div>
  );
};

const portfolioItems = [
  {
    category: "Animated",
    img: portfolio.storycard1,
    head: "steel wavell",
    link: "https://www.steelwavellc.com/",
  },
  {
    category: "Animated",
    img: portfolio.storycard2,
    head: "STUDIO 9P",
    link: "https://studio9p.com/en/",
  },
  {
    category: "Animated",
    img: portfolio.storycard3,
    head: "ADMIRE & AMAZE",
    link: "https://admireamaze.debijenkorf.nl/",
  },
  {
    category: "Animated",
    img: portfolio.storycard4,
    head: "BIENVILLECAPITAL",
    link: "https://www.bienvillecapital.com/",
  },
  {
    category: "Animated",
    img: portfolio.storycard5,
    head: "CLOUARCHITECTS",
    link: "https://www.clouarchitects.com/",
  },
  {
    category: "Animated",
    img: portfolio.storycard6,
    head: "RUMBLESTUDIOS",
    link: "https://rumblestudios.tv/",
  },
  {
    category: "Animated",
    img: portfolio.storycard7,
    head: "ONEUPSTUDIO",
    link: "https://www.oneupstudio.it/",
  },
  {
    category: "Animated",
    img: portfolio.storycard8,
    head: "CLOUARCHITECTS",
    link: "https://www.clouarchitects.com/",
  },
  {
    category: "Animated",
    img: portfolio.storycard9,
    head: "PETERTARKA",
    link: "https://petertarka.com/",
  },
  {
    category: "Animated",
    img: portfolio.storycard10,
    head: "AMUSE BOUCHE",
    link: "https://www.clouarchitects.com/",
  },
  {
    category: "Animated",
    img: portfolio.storycard11,
    head: "CLOUARCHITECTS",
    link: "https://www.clouarchitects.com/",
  },
  {
    category: "Animated",
    img: portfolio.storycard12,
    head: "CLOUARCHITECTS",
    link: "https://www.clouarchitects.com/",
  },

  // Hospitality category
  {
    category: "Hospitality",
    img: hospitality.web1,
    head: "Pierre’s",
    link: "https://pierreslounge.ca/",
  },
  {
    category: "Hospitality",
    img: hospitality.web2,
    head: "WestOak",
    link: "https://westoakrestaurant.com/",
  },
  {
    category: "Hospitality",
    img: hospitality.web3,
    head: "twelve west",
    link: "https://twelvewest.ca/",
  },
  {
    category: "Hospitality",
    img: hospitality.web4,
    head: "karma",
    link: "https://karmalounge.ca/",
  },
  {
    category: "Hospitality",
    img: hospitality.web5,
    head: "mansion club",
    link: "https://mansionclub.ca/",
  },
  {
    category: "Hospitality",
    img: hospitality.web6,
    head: "after dark",
    link: "https://afterdarkhospitality.com/",
  },

  // contractorWebsite category
  {
    category: "contractorWebsite",
    img: contractor.cons1,
    head: "skyline solutions",
    link: "https://skylinesolutions.ca/",
  },
  {
    category: "contractorWebsite",
    img: contractor.cons2,
    head: "starline",
    link: "https://starline.solutions/",
  },
  {
    category: "contractorWebsite",
    img: contractor.cons3,
    head: "tdr electric",
    link: "https://www.tdrelectric.ca/",
  },
  {
    category: "contractorWebsite",
    img: contractor.cons4,
    head: "glass fix",
    link: "https://www.glassfixcanada.com/",
  },

  // ecommerceWebsite category
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco1,
    head: "lead apparel",
    link: "https://leadapparel.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco2,
    head: "store holder",
    link: "https://store.holder.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco3,
    head: "oohlaluxe",
    link: "https://oohlaluxe.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco4,
    head: "fitoru",
    link: "https://fitoru.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco5,
    head: "innogear",
    link: "https://www.innogear.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco6,
    head: "dreamlandjewelry",
    link: "https://www.dreamlandjewelry.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco7,
    head: "bymilaner",
    link: "https://bymilaner.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco8,
    head: "goldfadenmd",
    link: "https://goldfadenmd.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco9,
    head: "yummie",
    link: "https://www.yummie.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco10,
    head: "harberlondon",
    link: "https://www.harberlondon.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco11,
    head: "allswellhome",
    link: "https://allswellhome.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco12,
    head: "veggieshake",
    link: "https://veggieshake.myshopify.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco13,
    head: "boompup",
    link: "https://www.boompup.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco14,
    head: "kenzaandco",
    link: "https://kenzaandco.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco15,
    head: "heartfuldiamonds",
    link: "https://www.heartfuldiamonds.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco16,
    head: "leoricci",
    link: "https://www.leoricci.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco17,
    head: "visualmood",
    link: "https://www.visualmood.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco18,
    head: "limovations",
    link: "https://www.limovations.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco19,
    head: "socaljaxwaxsd",
    link: "https://socaljaxwaxsd.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco20,
    head: "timerediscovered",
    link: "https://timerediscovered.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco21,
    head: "forg3dnutrition",
    link: "https://forg3dnutrition.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco22,
    head: "eatables",
    link: "https://eatables.co",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco23,
    head: "coffeecommitment",
    link: "https://coffeecommitment.myshopify.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco24,
    head: "joonhaircare",
    link: "https://joonhaircare.com",
  },
  {
    category: "ecommerceWebsite",
    img: ecommerce.eco25,
    head: "aqmapro",
    link: "https://www.aqmapro.com",
  },

  // appWebsite category (I noticed that you had the same data as ecommerceWebsite, so I'm including it again here)
  // {
  //   category: "appWebsite",
  //   img: mobilecards.gym,
  //   head: "lead apparel",
  //   link: "https://leadapparel.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img2,
  //   head: "store holder",
  //   link: "https://store.holder.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img3,
  //   head: "oohlaluxe",
  //   link: "https://oohlaluxe.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img4,
  //   head: "fitoru",
  //   link: "https://fitoru.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img5,
  //   head: "innogear",
  //   link: "https://www.innogear.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img6,
  //   head: "dreamlandjewelry",
  //   link: "https://www.dreamlandjewelry.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img7,
  //   head: "bymilaner",
  //   link: "https://bymilaner.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img8,
  //   head: "goldfadenmd",
  //   link: "https://goldfadenmd.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img9,
  //   head: "yummie",
  //   link: "https://www.yummie.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img10,
  //   head: "harberlondon",
  //   link: "https://www.harberlondon.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img11,
  //   head: "allswellhome",
  //   link: "https://allswellhome.com",
  // },
  // {
  //   category: "appWebsite",
  //   img: mobilecards.img12,
  //   head: "veggieshake",
  //   link: "https://veggieshake.myshopify.com",
  // },
];
const mopbileApps = [
  {
    app: mobilecards.gym,
    link: "#",
  },
  {
    app: mobilecards.img2,
    link: "#",
  },
  {
    app: mobilecards.img3,
    link: "#",
  },
  {
    app: mobilecards.img4,
    link: "#",
  },
  {
    app: mobilecards.img5,
    link: "#",
  },
  {
    app: mobilecards.img6,
    link: "#",
  },
  {
    app: mobilecards.img7,
    link: "#",
  },
  {
    app: mobilecards.img8,
    link: "#",
  },
  {
    app: mobilecards.img9,
    link: "#",
  },
  {
    app: mobilecards.img10,
    link: "#",
  },
  {
    app: mobilecards.img11,
    link: "#",
  },
  {
    app: mobilecards.img12,
    link: "#",
  },
];
export default Projects;
