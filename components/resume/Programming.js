import React from "react";

function Programming({ skills }) {
  return (
    <div className="programming-section my-4">
      <div className="row">
        {skills.map((skill) => {
          return (
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4" key={skill.id}>
              <span className="language">{skill.language}</span>
              <div className="progress-bar">
                <div
                  className="progress-made"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Programming;
