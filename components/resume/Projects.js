import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ProjectItem from "../ProjectItem";

function Projects({ projects, hosted_projects }) {
  const [key, setKey] = useState("projects");

  return (
    <>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="projects" title="Projects">
          {projects.map((project) => {
            return (
              <div className="project-section" key={project.id}>
                <div className="d-flex flex-row justify-content-between my-4">
                  <div className="d-flex flex-column">
                    <span className="project-name">
                      {project.app_name}
                    </span>
                    <span className="project-tech">
                      Technologies-
                      {project.techs.map((key, value) => {
                        if (value < project.techs.length - 1)
                          return <span key={key}>{key}, </span>;
                        return <span key={key}>{key}</span>;
                      })}
                    </span>
                  </div>
                  <div>
                    <span className="year-passed">
                      {project.start_year}-{project.end_year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Tab>
        <Tab eventKey="hosted-projects" title="Netlify Projects">
          <div className="row g-3 mt-2">
            {hosted_projects.map((project) => {
              return (
                <div className="col-lg-6 col-md-12 col-sm-12" key={project.id}>
                  <ProjectItem project={project} />
                </div>
              );
            })}
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default Projects;
