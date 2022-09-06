import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2>ABOUT</h2>
      <div className="about-content">
        <p>
          I'm a Full-stack Software Developer based in New York City. Currently
          working with {""}
          <a
            href="https://www.perpetualny.com/"
            target="_blank"
            rel="noreferrer"
            className="companyLink"
          >
            Perpetual
          </a>
          .
          <br />
          <br />
          I'm also a freelance photographer - having shot for several
          publications, online magazines, and have had my work shown in
          galleries in the US and abroad. 10 years in Photography have provided
          me with a unique set of skills: the ability to collaborate,
          multi-tasking, thinking on-the-fly, and a design oriented eye. I
          implement these skills everyday to help me become a better developer.
          <br />
          <br />
          In my freetime I enjoy drinking matcha in downtown Manhattan,
          exploring New Yorks endless food options, and when the swell is good -
          surfing at Rockaway Beach in Queens.
        </p>
      </div>
    </div>
  );
}

export default About;
