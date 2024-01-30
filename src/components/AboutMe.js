import React from "react";

import removebg from "../assets/MILAN-removebg.jpg";

const AboutMe = () => {
  return (
    <section className="section5 flex" id="about">
      <h1 className="title">About Me</h1>

      <div className="about-container flex">
        <div className="left flex">
          <div className="bg"></div>
          <img src={removebg} alt="profile-img" />
        </div>

        <div className="right flex">
          <h1>Milan Sherpa</h1>
          <h3>
            IT Graduate at Southern Cross University ,Sydney, NSW Australia
          </h3>
          <h4>
            Developing software skills, cultivating a skill mindset, and growing
            personally
          </h4>

          <div className="flex">
            <div className="tag">Interests</div>

            <div>
              <span>Coding</span>
              <span>Music</span>
              <span>Sports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
