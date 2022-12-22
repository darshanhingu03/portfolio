import React from "react";
import { CiFacebook, CiLinkedin, CiTwitter, CiInstagram } from "react-icons/ci";
import profile from "../../assent/profile.png";
import "./Header.css";
import BoxesDetails from "./Boxes";
import { Boxes } from "../../assent/data/Boxes";

const Header = () => {
  return (
    <div className="h-wrapper">
      <div className="h-left">
        <div className="h-intro">
          <span>hey there !</span>
          <span>i am jo breed</span>
          <span>Creative art director & designer</span>
        </div>
        <div className="h-links">
          <CiFacebook className="link" size={30} />
          <CiInstagram
            className="link"
            size={30}
            style={{ marginLeft: "1rem" }}
          />
          <CiLinkedin
            className="link"
            size={30}
            style={{ marginLeft: "1rem" }}
          />
          <CiTwitter
            className="link"
            size={30}
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <button>see my work</button>
        <div className="boxes">
          {Boxes.map((data, i) => (
            <BoxesDetails data={data} key={i} />
          ))}
        </div>
      </div>
      <div className="h-right">
        <div className="shape"></div>
        <div className="imageSectio">
          <img src={profile} profile={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
