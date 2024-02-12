import React from "react";

const Skills = () => {
  return (
    <>
      <section className="section2 " id="skills">
        <div className="loading-container ">
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="loading-text">InProgress...</div>
        </div>

        <div className="skills-container ">
          <div className="flex circle circle-container1">
            <i class="fa-brands fa-html5"></i>
          </div>

          <div className="flex circle  circle-container2">
            <i class="fa-brands fa-css3-alt"></i>
          </div>

          <div className="flex circle circle-container3">
            <i class="fa-brands fa-react"></i>
          </div>

          <div className="flex circle circle-container4">
            <i class="fa-brands fa-square-js"></i>
          </div>

          <div className="flex circle  circle-container5">
            <i class="bx bxl-tailwind-css" style={{ color: "#3c13b1" }}></i>
          </div>
          <div className="flex circle circle-container6">
            <i class="bx bxl-firebase" style={{ color: "#dd9a09" }}></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
