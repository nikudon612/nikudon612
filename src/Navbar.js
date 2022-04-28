import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { Link } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img onClick={handleClick} src="/nickphoto.png" alt="logo"></img> */}
        <p onClick={handleClick}>NB</p>
      </div>
      <div className="rightside">
        <button className="btn" id="toggle" onClick={() => setShow(!show)}>
          {show ? <CloseIcon /> : <MenuIcon />}
        </button>
        <ul className="links" id={show ? "hidden" : ""}>
          <li className="logo>"></li>
          <li>
            <Link to="about" smooth={true} duration={750}>
              <span>ABOUT</span>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={750}>
              <span>PROJECTS</span>
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={750}>
              <span>SKILLS</span>
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={750}>
              <span>CONTACT</span>
            </Link>
          </li>
          <li>
            <a
              href="https://niku-code.tumblr.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>BLOG</span>
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1iMBqtXsack1yDsWAYdHRtqHiurjyJ7G4LNtl9rXJVBM/edit?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button id="resume">RESUME</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
