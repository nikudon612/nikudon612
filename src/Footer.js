import React from "react";
import Arrow from "./arrow.png";
import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* <Link to="home" smooth={true} duration="1000">
        <img src={Arrow} alt="up arrow" id="arrow" />
      </Link> */}
      <div className="footer-links">
        <a
          href="
          https://www.linkedin.com/in/nicholas-bechtel/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
        <a href=""></a>
      </div>
    </div>
  );
}

export default Footer;
