import React, { useEffect, useState } from "react";
import Education from "./resume/Education";
import Programming from "./resume/Programming";
import Projects from "./resume/Projects";
import Work from "./resume/Work";
import Volunteer from "./resume/Volunteer";

function Resume(props) {
  const { educations, works, skills, projects, volunteers } = props;

  const [showEducation, setShowEducation] = useState(true);
  const [showWork, setShowWork] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);

  const [hostedProjects, setHostedProjects] = useState([]);

  function setAllFalse() {
    setShowEducation(false);
    setShowWork(false);
    setShowProject(false);
    setShowSkill(false);
    setShowVolunteer(false);
  }

  function changeState(functionName, value) {
    setAllFalse();
    functionName(value);
  }

  //   useEffect(() => {
  //     const url =
  //       BACKEND.BASE_URL +
  //       BACKEND.API_V1 +
  //       BACKEND.PROJECT_ENDPOINT.PROJECT +
  //       BACKEND.PROJECT_ENDPOINT.HOSTED_PROJECTS;

  //     fetch(url)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((response) => {
  //         const output = response.data.filter((project) => {
  //           return project.id != EXCLUDE_PROJECT_IDS;
  //         });
  //         setHostedProjects(output);
  //       });
  //   }, []);

  return (
    <div className="resume-section d-flex flex-column" id="resume">
      <span className="resume-heading text-center">Resume</span>
      <span className="resume-sub-heading text-center">
        My Formal Bio Details
      </span>
      <div className="row inner-section my-2">
        <div className="col-lg-4 col-md-4 col-sm-12 left d-flex flex-row px-0">
          <div className="d-flex flex-column bg-new text-white">
            <span className="icon-span">
              <i className="fa fa-user-graduate"></i>
            </span>
            <span className="icon-span">
              <i className="fa fa-briefcase"></i>
            </span>
            <span className="icon-span">
              <i className="fa fa-laptop-code"></i>
            </span>
            <span className="icon-span">
              <i className="fas fa-tasks"></i>
            </span>
            <span className="icon-span">
              <i className="fas fa-fist-raised"></i>
            </span>
          </div>
          <div className="d-flex flex-column bg-white">
            <span
              className={
                showEducation
                  ? "resume-option-items selected"
                  : "resume-option-items"
              }
              onClick={() => {
                changeState(setShowEducation, true);
              }}
            >
              Education
            </span>
            <span
              className={
                showWork ? "resume-option-items selected" : "resume-option-items"
              }
              onClick={() => {
                changeState(setShowWork, true);
              }}
            >
              Work
            </span>
            <span
              className={
                showSkill
                  ? "resume-option-items selected"
                  : "resume-option-items"
              }
              onClick={() => {
                changeState(setShowSkill, true);
              }}
            >
              Skills
            </span>
            <span
              className={
                showProject
                  ? "resume-option-items selected"
                  : "resume-option-items"
              }
              onClick={() => {
                changeState(setShowProject, true);
              }}
            >
              Projects
            </span>
            <span
              className={
                showVolunteer
                  ? "resume-option-items selected"
                  : "resume-option-items"
              }
              onClick={() => {
                changeState(setShowVolunteer, true);
              }}
            >
              Volunteer
            </span>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 right bg-white py-2">
          {showEducation && <Education educations={educations} />}
          {showWork && <Work works={works} />}
          {showSkill && <Programming skills={skills} />}
          {showProject && (
            <Projects projects={projects} hosted_projects={hostedProjects} />
          )}
          {showVolunteer && <Volunteer volunteers={volunteers} />}
        </div>
      </div>
    </div>
  );
}

export default Resume;
