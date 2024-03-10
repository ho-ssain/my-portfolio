/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { projectData, projectsNav } from "./Data";
import WorksItems from "./WorksItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectData);
    } else {
      const newProjects = projectData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, i) => {
    setItem({ name: e.target.textContent });
    setActive(i);
  };

  return (
    <div>
      <div className="work-filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              className={`${active === index ? "active-work" : ""} work-item`}
              key={index}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work-container container grid">
        {projects.map((item) => {
          return <WorksItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
