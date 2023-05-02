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
          As a freelance photographer, I've had the opportunity to shoot for various publications and have exhibited my work in galleries both in the US and abroad. Over the last 10 years, my experience in photography has equipped me with a unique set of skills that transcend the field, including the ability to collaborate effectively, multitask, think on my feet, and approach problems with a design-oriented eye. I find myself drawing on these skills daily to improve my work as a developer.
          <br />
          I tap into these skills everyday to help me become a better developer.
          <br />
          <br />
          During my free time, I enjoy sipping on Matcha, discovering new eateries around NYC, and catching waves at Rockaway Beach whenever the swell is up. These activities help me stay grounded and balanced, leading to better performance both personally and professionally.
        </p>
      </div>
    </div>
  );
}

export default About;
