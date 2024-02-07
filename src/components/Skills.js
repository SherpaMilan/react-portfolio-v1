import React from "react";

const Skills = () => {
  return (
    <>
      <div
        className="section2"
        id="skills"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/section33.jpg)`,
          backgroundSize: "40%",
          backgroundPosition: "center",
          opacity: 0.9, // Adjust the opacity value as needed
        }}
      >
        <section>
          <div className="skills-container flex">
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
              <i class="fa-brands fa-bootstrap"></i>
            </div>

            <div className="flex circle  circle-container5">
              <i class="bx bxl-tailwind-css" style={{ color: "#3c13b1" }}></i>
            </div>
            <div className="flex circle circle-container6">
              <i class="bx bxl-firebase" style={{ color: "#dd9a09" }}></i>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
