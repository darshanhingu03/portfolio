import React from "react";
import "./About.css";
import profile from "../../assent/women.png";
function About() {
  return (
    <div className="a-wrapper">
      <div className="a-left">
        <div className="shape"></div>
        <img src={profile} style={{ height: "300px" }} alt="profile" />
      </div>
      <div className="a-right">
        <div className="a-intro">
          <span className="a-title">
            about me<div className="a-shape"></div>
          </span>
          <span className="a-header">Creative Art Director And Designer</span>
          <span className="a-desc">
            Also signs his face were digns fish don't first isn't over evening
            hath divided days light darkness gathering moved dry all darkness
            then fourth can't create d forth Also signs Also signs his face were
            moltenus Also signs his face
          </span>
        </div>
        <button>download cv</button>
      </div>
    </div>
  );
}

export default About;
