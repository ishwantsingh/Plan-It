import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted By Ishwant Singh</p>
          <p className="grey-text">23rd March, 12pm</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
