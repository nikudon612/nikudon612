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
          publications and have had my work shown in galleries abroad + in the
          US.
          <br />
          10 years in Photography have provided me with a unique set of skills:
          the ability to collaborate, multi-tasking, thinking on-the-fly, and a
          design oriented eye.
          <br />
          I tap into these skills everyday to help me become a better developer.
          <br />
          <br />
          In my freetime I enjoy drinking Matcha, exploring NYC's new eats, and
          surfing at Rockaway Beach when there's a swell.
        </p>
      </div>
    </div>
  );
}

export default About;
