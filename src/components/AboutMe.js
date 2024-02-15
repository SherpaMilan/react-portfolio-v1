import React from "react";

const AboutMe = () => {
  return (
    <section className="section5 flex" id="about">
      <h1 className="heading">Profile Highlights</h1>

      <div className="about-container flex">
        <div className="left flex">
          <h2 className="title">Education & Training</h2>

          <ol>
            <li>
              <p className="bold">
                {" "}
                🎉ACS Professional Year Sydney, Computer Science
              </p>
              Australian Technical & Management College(ATMC).
            </li>
            <br />
            <li>
              <p className="bold">🎉Dented Code Academy Bootcamp, Sydney</p>
              Developed hand on experience, real-life web applications using
              React.js, HTML5, CSS , bootstrap and Tailwind CSS.
            </li>
            <br />
            <li>
              <p className="bold">
                {" "}
                🎉Bachelor's degree, Information Technology (Software
                Development)
              </p>
              Southern Cross University, Sydney.
            </li>
            <br />
            <li>
              <p className="bold"> 🎉Rebb Tech Pty Ltd , Sydney</p>
              Web Developer Intern
            </li>
          </ol>
          <ol>
            <h2 className="title">Technical Skills</h2>
            <br />
            <ul>
              <li className="bold">
                ♦️Languages:{" "}
                <span className="skills-color">Html, CSS, JavaScript</span>
              </li>
              <li className="bold">
                ♦️Technologies:{" "}
                <span className="skills-color">
                  React.js, Tailwind CSS, Firebase
                </span>
              </li>
              <li className="bold">
                ♦️Others:{" "}
                <span className="skills-color">
                  Git & GitHub, Vs Code & Jira
                </span>
              </li>
            </ul>
          </ol>
        </div>

        <div className="right flex">
          <h2 className="title">My Story</h2>
          <h3>
            I, a dreamer and a go-getter, born in the beautiful landscapes of
            Nepal, embarked on a life-changing journey that brought me to the
            vibrant streets of Sydney in 2018. My entry into the tech world
            faced its biggest challenge around the end of 2022, just as I was
            about to graduate. The job market in Australia became increasingly
            tough from 2023 onwards. Yet, I thrive on challenges that others
            find daunting. I see each hurdle as a stepping stone to greater
            heights, pushing myself to learn and grow every day. With unwavering
            determination, I create projects and carefully curate my portfolio,
            each piece reflecting my resilience and unwavering spirit.
            <h4>
              I envision a day when I'll look back at this challenging yet
              rewarding journey, proudly tracing my steps through the obstacles
              I've overcome and the dreams I've turned into reality. My story is
              one of perseverance, passion, and a steadfast belief in the power
              of hard work.
            </h4>
          </h3>

          <div className="flex">
            <div className="tag title">Hobbies</div>
            <div>
              <span>Travel</span>
              <span>Music</span>
              <span>Chess</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
