import React from "react";
import Banner from "../components/content creator/banner";
import PhotoAndvideo from "../components/content creator/photoAndvideo";
import Portfolio from "../components/content creator/portfolio";
import Product from "../components/content creator/product";
import Restaurant from "../components/content creator/restaurant";
import ProductVideo from "../components/content creator/productVideo";
import Ads from "../components/content creator/ads";
import Calender from "../components/contact-us/calender";
import Contactinfo from "../components/contact-us/contactinfo";

const ContentCreator = () => {
  return (
    <div>
      <Banner />
      <PhotoAndvideo />
      <Portfolio />
      <Product />
      <Restaurant />
      <ProductVideo />
      <Ads />
      <Contactinfo />
    </div>
  );
};

export default ContentCreator;
