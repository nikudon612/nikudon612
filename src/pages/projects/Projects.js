import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Safely",
    stack: "ReactJS | Ruby on Rails",
    desc: "COVID-19 Testing Site Location App in NYC",
    deployed: "https://safelyyy.herokuapp.com/",
    git: "https://github.com/nikudon612/Safely",
    img: "safelyss.jpeg",
  },
  {
    id: 2,
    name: "CheckedIn",
    stack: "ReactJS | Ruby on Rails",
    desc: "Blackboard clone that allows users to view their info, create events, and submit personal issues to staff",
    deployed: "",
    git: "https://github.com/dialloflatno/Checkin",
    img: "Checkedinss.png",
  },
  {
    id: 3,
    name: "Exchange Rate Calc",
    img: "Erc.png",
    stack: "JS | HTML | CSS",
    desc: "Simple Exchange rate app that allows for instant conversion of the desired currency",
    deployed: "",
    git: "https://github.com/nikudon612/Exchange-Rate-Calc",
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
