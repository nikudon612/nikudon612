import React from "react";
import Arrow from "./arrow.png";
import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Link to="navbar" smooth={true} duration="1000">
        <img src={Arrow} alt="up arrow" id="arrow"></img>
      </Link>
    </div>
  );
}

export default Footer;
