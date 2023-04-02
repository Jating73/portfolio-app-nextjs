import React, { useEffect, useState } from "react";
import { Tab, Tabs, Spinner } from "react-bootstrap";
import ProjectItem from "../ProjectItem";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Projects({ projects }) {
  const [key, setKey] = useState("projects");
  const [loading, setLoading] = useState(false);
  const [netlifyProjects, setNetlifyProjects] = useState([]);

  useEffect(() => {
    if (key === "netlify-projects") {
      setLoading(true);
      fetch("/api/projects/netlify")
        .then((response) => response.json())
        .then((response) => {
          setLoading(false);
          setNetlifyProjects(response.data);
        });
    }
  }, [key]);

  return (
    <>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="projects" title="Projects">
          {projects.map((project) => {
            return (
              <div className="project-section" key={project.id}>
                <div className="d-flex flex-row justify-content-between my-4">
                  <div className="d-flex flex-column">
                    <span className="project-name">{project.app_name}</span>
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
        <Tab eventKey="netlify-projects" title="Netlify Projects">
          <div
            className="row g-3 mt-2"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {loading && <Spinner animation="grow" variant="primary" />}
            {!loading &&
              netlifyProjects.map((item) => {
                return (
                  <OverlayTrigger
                    key={item.id}
                    overlay={
                      <Tooltip id={`tooltip-${item.id}`}>
                        <strong>{item.name.toUpperCase().replace(/-/g, ' ')}</strong>.
                      </Tooltip>
                    }
                  >
                    <div className="col-lg-6 col-md-12 col-sm-12" key={item.id}>
                      {" "}
                      <ProjectItem project={item} />
                    </div>
                  </OverlayTrigger>
                );
              })}
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default Projects;
