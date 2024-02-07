import React from "react";

const Skills = () => {
  return (
    <section className="section3 " id="skills">
      <h1 className="title">Skillset Evolution</h1>
      <div className="skills-container flex">
        <div className="flex">
          <i className="fa-brands fa-html5"></i>
          <span>HTML</span>
        </div>
        <div className="flex">
          <i className="fa-brands fa-css3"></i>
          <span>CSS</span>
        </div>
        <div className="flex">
          <i className="fa-brands fa-react"></i>
          <span>React</span>
        </div>
        <div className="flex">
          <i className="fa-brands fa-js"></i>
          <span>JavaScript</span>
        </div>
        <div className="flex">
          <i class="fa-brands fa-bootstrap"></i>
          <span>Bootstrap</span>
        </div>
        <div className="flex">
          <i className="fa-brands fa-sass"></i>
          <span>Sass</span>
        </div>
        <div className="flex">
          <i class="bx bxl-firebase"></i>
          <span>Firebase</span>
        </div>
        <div className="flex">
          <i class="bx bxl-tailwind-css"></i>
          <span>TailwindCss</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
