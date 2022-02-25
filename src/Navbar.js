import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav>
      <div className="logo"></div>
      <div className="rightside">
        <button className="btn" id="toggle" onClick={() => setShow(!show)}>
          {show ? <CloseIcon /> : <MenuIcon />}
        </button>
        <ul className="links" id={show ? "hidden" : ""}>
          <li className="logo>"></li>
          <li>
            <Link to="about" smooth={true} duration={1000}>
              <span>ABOUT</span>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1000}>
              <span>PROJECTS</span>
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={1000}>
              <span>SKILLS</span>
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
        </ul>
      </div>

      {/* <h1>hello world</h1> */}
    </nav>
  );
}

export default Navbar;
