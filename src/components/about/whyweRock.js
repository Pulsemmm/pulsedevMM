import React, { Suspense } from "react";
import Democard from "../shared/democard";
import { aboutImg } from "../content/data";
import LazyLoadedImage from "../shared/lazyLoadedImage";

const WhyweRock = () => {
  return (
    <>
      <div className="whyRockSection">
        <div className="achievement-card-wrapper ">
          <Democard heading="25K+" content="Projects Completed" />
          <Democard heading="8K+" content="Happy Customer" />
          <Democard heading="10" content="Years Of Experience" />
          <Democard heading="20+" content="Countries Served" />
        </div>
        <div className="maincontent-div flex-column v-center">
          <p className="text-center">
            Empowering brands with a comprehensive digital suite – from
            immersive 3D web development, SEO excellence, and captivating photo
            & videography to distinctive logo design, online reputation
            management, and bespoke application development, crafting a holistic
            online presence that drives engagement and success.
          </p>
          <h2>why we rock</h2>
        </div>
      </div>
      <div className="rock-content d-flex v-center gap-5">
        <p>
          Welcome to Pulse Marketing Inc., a Vancouver-based marketing firm that
          has been delivering exceptional services to businesses of all sizes
          for years. We have proudly served over 8,000 clients across various
          industries and have completed more than 25,000 projects.
          <br />
          <br /> At Pulse Marketing, we believe that every business deserves
          access to quality marketing services. That's why we provide a wide
          range of services to help our clients achieve their goals. Our
          services include AI consulting, website and app development, content
          creation, ORM (online reputation management) branding, digital
          marketing, social media marketing, SEO, content marketing, and more.
          <br />
          <br /> Our team of experts is highly skilled and experienced in the
          latest marketing strategies and techniques. We use our knowledge to
          help our clients achieve their marketing objectives, whether that's
          increasing brand awareness, generating leads, or driving sales.
          <br />
          <br /> At Pulse Marketing, we believe in building long-lasting
          relationships with our clients. We take the time to understand our
          clients' unique needs and tailor our services to meet their specific
          goals. We work closely with our clients to ensure that we're
          delivering the results they need to succeed.
          <br />
          <br /> Thank you for considering Pulse Marketing Inc. for your
          marketing needs. We are dedicated to helping you achieve your goals
          and taking your business to the next level.
        </p>
        <Suspense fallback="Loading...">
          <LazyLoadedImage
            src={aboutImg.rock3d}
            alt="pulse logo"
            className=" img-fluid"
          />
        </Suspense>
      </div>
    </>
  );
};

export default WhyweRock;
