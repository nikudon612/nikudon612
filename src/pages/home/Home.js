import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <div className="home-info">
          {/* <h1 className="info">CODE</h1>
          <h1 className="info">& PHOTO</h1> */}

          <h2 id="intro">
            Hi, I'm Nick Bechtel,
            <br />a{" "}
            <Link id="sd" to="about" smooth={true} duration="1000">
              Software Developer
            </Link>
            <br />
            and{" "}
            <a
              href="https://www.nickbechtel.com/"
              target="_blank"
              rel="nooponer noreferrer"
            >
              Photographer
            </a>{" "}
            based in NYC.
          </h2>
          {/* <h4 className="title">Full-Stack Software Developer</h4>
          <h4 className="title" id="photographer">
            Photographer
          </h4> */}
        </div>

        <img src="Nickphoto.png" alt="Nick :)" id="photo" />
      </div>
    </div>
  );
}

export default Home;
