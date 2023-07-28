import React from "react";
import "./About.css";

function About() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="about">
        {/* <h2>ABOUT</h2> */}
        <div className="about-content">
          <p>
            I specialize in Next.js, TypeScript. Collaborating with designers
            to bring their visions to life excites me, and I thrive on building
            scalable, fluid, and performant front-end UIs. With a love for
            technology and continuous learning, I stay at the forefront of web
            development best practices. My dedication to crafting exceptional
            user experiences drives me to deliver innovative and visually
            appealing web applications.
            {/* <br />
            <br />
            As a freelance photographer, I've had the opportunity to shoot for
            various publications and have exhibited my work in galleries both in
            the US and abroad. Over the last 10 years, my experience in
            photography has equipped me with a unique set of skills that
            transcend the field, including the ability to collaborate
            effectively, multitask, think on my feet, and approach problems with
            a design-oriented eye. I find myself drawing on these skills daily
            to improve my work as a developer. */}
            <br />
            <br />
            <br />
            In my freetime, I enjoy a nice Matcha latte, taking photos on one of my old film cameras, or if there's a swell, surfing at Rockaway Beach("Yes NYC actually has decent surf!"). 
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
