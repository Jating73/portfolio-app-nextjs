import React, { Fragment } from "react";

function Education(props) {
  const { educations } = props;

  return (
    <Fragment>
      {educations.map((education) => {
        return (
          <div className="education-section my-4" key={education.id}>
            <div className="d-flex flex-column ">
              <div className="d-flex flex-row justify-content-between">
                <span className="university">{education.university_name}</span>
                <span className="year-passed">
                  {education.start_year}-{education.end_year}
                </span>
              </div>
            </div>
            <div className="d-flex flex-column">
              <span className="degree">{education.unviversity_degree}</span>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Education;
