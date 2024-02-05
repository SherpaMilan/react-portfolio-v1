import React from "react";
import Icons from "./Icons";

const Skills = () => {
  // Creating a skills set array each holding different information
  const skillsData = [
    {
      year: "2021",
      text: "Bachelor of IT",
      colors: {
        pole: "#FF5733",
        circle: "#FF5733",
        flag: "#FF5733",
      },
    },
    {
      year: "2022",
      text: "Html5 & JavaScript",
      colors: {
        pole: "#5733FF",
        circle: "#5733FF",
        flag: "#5733FF",
      },
    },
    {
      year: "2023",
      text: "React, Bootstrap",
      colors: {
        pole: "#006400",
        circle: "#006400",
        flag: "#006400",
      },
    },
    {
      year: "2024",
      text: "Tailwind, Firebase",
      colors: {
        pole: "#8B0000",
        circle: "#8B0000",
        flag: "#8B0000",
      },
    },
  ];

  // Using map function to go through each set of data in the array.
  // The data parameter represents each set, and index is the position in the array.
  const skillsContainers = skillsData.map((data, index) => (
    <div key={index} className="skills-container">
      <div className="pole" style={{ backgroundColor: data.colors.pole }}></div>
      <div
        className="circle"
        style={{ backgroundColor: data.colors.circle }}
      ></div>
      <div className="flag" style={{ backgroundColor: data.colors.flag }}>
        <div className="flag-content">
          <div className="flag-year">{data.year}</div>
          <div className="flag-text">{data.text}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="section2" id="skills">
        <h1 className="title">Skillset Evolution</h1>
        <div className="skills-container">{skillsContainers}</div>
      </section>
      <Icons />
    </>
  );
};

export default Skills;
