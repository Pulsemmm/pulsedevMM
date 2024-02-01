import React from "react";
import OrmBanner from "../components/orm/ormBanner";
import OrmCustomer from "../components/orm/ormCustomer";
import Reputaion from "../components/orm/reputaion";
import Look from "../components/orm/look";
import Contactinfo from "../components/contact-us/contactinfo";

const Orm = () => {
  return (
    <div>
      <OrmBanner />
      <OrmCustomer />
      <Reputaion />
      <Look />
      <Contactinfo />
    </div>
  );
};

export default Orm;
