import React from "react";
import Banner from "../components/home/banner";
import About from "../components/home/about";
import Video from "../components/home/video";
import Slider from "../components/home/slider";
import Featured from "../components/home/featured";

import WhyChoose from "../components/home/whyChoose";
import Cards from "../components/home/cards";
import TeamWork from "../components/home/teamWork";
import Join from "../components/home/join";
import Services from "../components/home/sevices";
import Instagram from "../components/home/instagram";
import FeatureWork from "../components/home/featureWork";
import Testimonials from "../components/home/testimonials";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Video />
      <Slider />
      <FeatureWork />
      <Testimonials />
      <Featured />
      <WhyChoose />
      <Cards />
      <TeamWork />
      <Join />
      <Services />
      <Instagram />
    </div>
  );
};

export default Home;
