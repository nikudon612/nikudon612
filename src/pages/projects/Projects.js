import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import reach from "../../assests/Reach.png";
import ada from "../../assests/ADA.jpg";
import dom from "../../assests/DoM.png";

const projects = [
  {
    id: 1,
    name: "Dept of Music",
    img: dom,
    stack: "JSX | UI/UX",
    desc: "Website Development and UI/UX design for Dept of Music",
    deployed: "https://www.deptofmusic.com",
    git: "https://github.com/nikudon612/DeptofMusic",
  },
  {
    id: 2,
    name: "Another Day Agency",
    img: ada,
    stack: "JSX | TypeScript | UI/UX",
    desc: "Web Development and UI/UX Design redesign for Another Day Agency",
    deployed: "https://another-day-agency.vercel.app/",
    git: "https://github.com/nikudon612/Another-Day-Agency",
  },
  {
    id: 3,
    name: "Reach",
    img: reach,
    stack: "JSX | Redux | TypeScript",
    desc: "Frontend development for Reach / Liberty Lending.",
    deployed: "https://www.reach.com/",
    git: "https://reach.com",
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
