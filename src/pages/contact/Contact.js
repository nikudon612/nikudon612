import React from "react";
import Linkedin from "../../linkedin-plain.svg";
import Github from "../../github-original.svg";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        {/* <h2>CONTACT</h2> */}
      </div>
      <div className="contact-box">
        <h2>Nick Bechtel</h2>
        <div className="secondary">
          <h4 className="title">Full-Stack Software Developer</h4>
          <h4 className="title" id="photographer">
            Photographer
          </h4>
        </div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/nicholasbechtel/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Linkedin} alt="linkedin logo" />
          </a>
          <hr />
          <a
            href="https://github.com/nikudon612"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Github} alt="github logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
