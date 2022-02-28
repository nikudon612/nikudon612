import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <h1 className="info">CODE</h1>
        <h1 className="info">& PHOTO</h1>
        <h4 className="title">Full-Stack Software Developer</h4>
        <h4 className="title" id="photographer">Photographer</h4>
      </div>
      <img src="/nickphoto.png" alt="Nick :)" id="photo" />
    </div>
  );
}

export default Home;
