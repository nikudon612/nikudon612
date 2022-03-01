import React from "react";
import skills from "../../skills.png";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>SKILLS</h2>
      <img src={skills} alt="coding languages" />
    </div>
  );
}

export default Skills;
