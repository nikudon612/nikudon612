import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import reach from "/Users/nickbechtel/portfolio/src/assests/reach.png";
import ada from "/Users/nickbechtel/portfolio/src/assests/ADA.jpg";

const projects = [
  {
    id: 1,
    name: "Reach",
    img: reach,
    stack: "JSX | Redux | TypeScript",
    desc: "Frontend development for Reach / Liberty Lending.",
    deployed: "",
    git: "https://reach.com",
  },
  {
    id: 2,
    name: "Another Day Agency",
    img: ada,
    stack: "JSX | TypeScript | UI/UX",
    desc: "Web Development and UI/UX Design redesign for Another Day Agency",
    deployed: "",
    git: "https://github.com/nikudon612/Another-Day-Agency",
  },
  {
    id: 3,
    name: "Safely",
    img: "safelyss.jpeg",
    stack: "JSX | Ruby on Rails",
    desc: "COVID-19 Testing Site Location App in NYC",
    deployed: "https://safelyyy.herokuapp.com/",
    git: "https://github.com/nikudon612/Safely",
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
