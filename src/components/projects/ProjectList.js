import React from "react";

import ProjectSummery from "./ProjectSummary";

const ProjectList = ({Projects}) => {
  return (
    <div className="project-list section">
      {Projects && Projects.map((project)=>(
        <ProjectSummery project={project} key={project.id}/>
      ))}
    </div>
  );
};

export default ProjectList;
