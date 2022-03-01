import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Safely",
    img: "/safelyss.jpeg",
    stack: "ReactJS | Ruby on Rails",
    desc: "COVID-19 Testing Site Location App in NYC",
    deployed: "https://safelyyy.herokuapp.com/",
    git: "https://github.com/nikudon612/Safely",
  },
  {
    id: 2,
    name: "CheckedIn",
    img: "/checkedinss.jpeg",
    stack: "ReactJS | Ruby on Rails",
    desc: "Blackboard clone that allows users to view their info, create events, and submit personal issues to staff",
    deployed: "",
    git: "https://github.com/dialloflatno/Checkin",
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
