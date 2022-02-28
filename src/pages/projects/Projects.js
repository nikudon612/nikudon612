import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Safely",
    img: "",
    stack: "ReactJS | Ruby on Rails",
    desc: "COVID-19 Testing Site Location App",
    deployed: "https://safelyyy.herokuapp.com/",
    github: "https://github.com/nikudon612/Safely",
  },
  {
    id: 2,
    name: "CheckedIn",
    img: "",
    stack: "ReactJS | Ruby on Rails",
    desc: "Blackboard clone that allows users to view their information, create events, and submit personal issues to staff",
    deployed: "",
    github: "https://github.com/dialloflatno/Checkin",
  },
  {
    id: 3,
    name: "Exchange Rate Calc",
    img: "",
    stack: "",
    desc: "",
    deployed: "",
    github: "",
  },
];

function Project() {
  const projectList = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="project-cards">{projectList}</div>
    </div>
  );
}

export default Project;
