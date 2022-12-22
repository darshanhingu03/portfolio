import React from "react";
import "./Testimonial.css";
import "../../pages/pages/services/Services.css";
import image from "../../assent/women.png";

const Testimonial = () => {
  return (
    <div className="s-wrapper">
      <div className="s-intro">
        <span>
          our Testimonial<div className="a-shape"></div>
        </span>
        <h2>
          Honourable Client Says
          <br />
          About Me
        </h2>
      </div>
      <div className="t-shape"></div>
      <div className="t-comment">
        <div>
          <img src={image} alt="photo" />
        </div>
        <div className="t-intro">
          <span className="i-name">Jennifer Lawrence</span>
          <p>project manager,apple</p>
          <div className="desc">
            <span>
              Browsers by default will create a certain amount of space between
              lines to ensure that the text is easily readable. For example, for
              12-point type, a browser will place about 1 point of vertical
              space between lines.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
