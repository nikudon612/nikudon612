import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { name, stack, desc, deployed, git, img } = project;
  return (
    <div className="project-card-content">
      <img src={img} alt={name} />
      <p className="project-name">{name}</p>
      <p className="stack">{stack}</p>
      <br />
      <p className="desc">{desc}</p>
      <hr id="firsthr" />
      <div className="buttons">
        {/* <a href={deployed} target="_blank" rel="noreferrer noopener">
          <button className="btn">SITE</button>
        </a> */}
        <a href={git} target="_blank" rel="noreferrer noopener">
          <button className="btn">VIEW PROJECT</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
