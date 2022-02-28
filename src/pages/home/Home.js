import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <h1>CODE</h1>
        <h1>& PHOTO</h1>
        <h4>Full-Stack Software Developer</h4>
        <h4>Photographer</h4>
      </div>
      <img src="/nickphoto.png" alt="Nick :)" id="photo" />
    </div>
  );
}

export default Home;
