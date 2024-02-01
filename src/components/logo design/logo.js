import React from "react";
import brand from "../../assets/images/Logo-design/Rectangle 3861.webp";
import cyber from "../../assets/images/Logo-design/Rectangle 3863.webp";
import eagle from "../../assets/images/Logo-design/Rectangle 3864.webp";
import mask from "../../assets/images/Logo-design/Rectangle 3862.webp";
import card from "../../assets/images/Logo-design/Rectangle 3865.webp";

const Logo = () => {
  return (
    <div>
      <div className="logo d-flex flex-column">
        <div className="two d-flex v-center">
          <div className="left">
            <h1>
              Logo Design <span className="text-greenish-blue px-2">&</span>
              Branding
            </h1>
            <p>
              Our team of talented graphic designers will work with you through
              the whole process to create a stunning marketing piece that you
              will love. From logos, business cards, brochures, to signs and
              everything in between we have you covered for all of your design
              needs. <br /> <br /> Enter the realm where brands come to life,
              identities are forged, and stories are told through visual
              narratives. Our logo and branding services are more than just
              design; they are a strategic blend of creativity and psychology,
              carving unique identities that resonate with audiences.
            </p>
          </div>
          <div className="right d-flex flex-column">
            <div className="top ">
              <img src={brand} alt="img" />
              <img src={mask} alt="img" />
            </div>
            <div className="bottom ">
              <img src={cyber} alt="..." />
              <img src={eagle} alt="..." />
              <img src={card} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
