import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <div className="home-info">
          <h1 id="name">Hi, I'm Nick Bechtel</h1>
          <h2 id="intro">
            I'm a{" "}
            {/* <Link id="sd" to="about" smooth={true} duration="1000"> */}
            Software Developer
            {/* </Link> */}
            <br />
            based in NYC
          </h2>
        </div>

        <img
          src={process.env.PUBLIC_URL + "/Nick.png"}
          alt="Nick :)"
          id="photo"
        />
      </div>
    </div>
  );
}

export default Home;
