import Image from "next/image";
import React from "react";

function Work({ works }) {
  return works.map((work) => {
    return (
      <div className="work-section my-4" key={work.id}>
        <div className="d-flex flex-column ">
          <div className="d-flex flex-row justify-content-between">
            <a href={work.company_url} style={{ textDecoration: "none" }}>
              <span className="company-name">
                {/* <Image style={{ background: "#000" }} className="" width={200} height={100} src={"/images/companies/" + work.company_logo} /> */}
                {work.company_name}
              </span>
            </a>
            <span className="year-passed">
              {work.start_month} {work.start_year} - {work.end_month}{" "}
              {work.end_year}
            </span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">{work.position}</span>
          <span className="description">
            <ul>
              {work.descriptions.map((description) => {
                return <li key={description}>{description}</li>;
              })}
            </ul>
          </span>
        </div>
      </div >
    );
  });
}

export default Work;
