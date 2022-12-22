import React from "react";
// import { services } from "../../../assent/data/Services";
import "./Services.css";
const ServicesData = ({ serve }) => {
  const { images, name, discription } = serve;
  return (
    <div className="s-boxes">
      <div>
        <img src={images} alt="photo" />
      </div>
      <div className="b-intro">
        <p>{name}</p>
        <span>{discription}</span>
      </div>
      <div className="b-button">
        <span>learn more</span>
        <div className="b-shape"></div>
      </div>
    </div>
  );
};
export default ServicesData;
