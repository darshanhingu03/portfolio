import React from "react";
import "./Services.css";
import ServicesData from "./ServicesData";
import { services } from "../../../assent/data/Services";
const Services = () => {
  return (
    <div className="s-wrapper">
      <div className="s-intro">
        <span>
          our services <div className="a-shape"></div>
        </span>
        <h2>
          What Service We <br />
          Offer For You
        </h2>
      </div>
      <div className="s-services">
        {services.map((serve, index) => (
          <ServicesData serve={serve} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
