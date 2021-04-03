import React from "react";
import "./index.css";
import Projects from "../../jsons/projects.json";
import Project from "../../Project";
import Button from "../../Button";

function Portfolio() {
  return (
    <div className="section portfolio__container">
      <div className="portfolio__container__heading">
        <h2>Portfolio</h2>
        <Button content="View All" />
      </div>
      <div className="portfolio__container__projects">
        {Projects
          ? Projects.map((project, index) => {
              if (index <= 3) {
                return (
                  <Project
                    key={index}
                    height="64vh"
                    width="20%"
                    name={project.name}
                    prevImg={project.previewImg}
                    desc={project.desc}
                    date={project.date}
                  />
                );
              }
            })
          : null}
      </div>
    </div>
  );
}

export default Portfolio;
