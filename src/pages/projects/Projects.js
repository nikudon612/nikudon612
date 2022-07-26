import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Safely",
    img: "safelyss.jpeg",
    stack: "JSX | Ruby on Rails",
    desc: "COVID-19 Testing Site Location App in NYC",
    deployed: "https://safelyyy.herokuapp.com/",
    git: "https://github.com/nikudon612/Safely",
  },
  {
    id: 2,
    name: "Another Day Agency",
    img: "../assests/ADA.jpg",
    stack: "JSX | TypeScript",
    desc: "UI/UX Design and Developed a redesign of Another Day Agencies website",
    deployed: "",
    git: "https://github.com/nikudon612/Another-Day-Agency",
  },
  {
    id: 3,
    name: "Reach",
    img: "Erc.png",
    stack: "JSX | Redux | TypeScript",
    desc: "Frontend edits for Reach / Liberty Lending's site",
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
