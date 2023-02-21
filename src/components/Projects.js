import React from "react";
import camera from "../assets/camera.jpg";
import camera1 from "../assets/camera1.jpg";
import camera2 from "../assets/camera2.jpg";
import Layout from "./Layout";

const Projects = () => {
  return (
    <Layout>
      <section className="section4 flex" id="projects">
        <h1 className="title">My Projects</h1>

        <div className="projects-container grid">
          <div className="project-card flex">
            <div className="top">
              <img src={camera} alt="" />
            </div>
            <div className="bottom">
              <p>November 20, 2022</p>
              <p>Flex Travel Blog</p>
            </div>
          </div>

          <div className="project-card flex">
            <div className="top">
              <img src={camera1} alt="" />
            </div>
            <div className="bottom">
              <p>December 10, 2022</p>
              <p>Parallax Demo</p>
            </div>
          </div>

          <div className="project-card flex">
            <div className="top">
              <img src={camera2} alt="" />
            </div>
            <div className="bottom">
              <p>January 1, 2023</p>
              <p>Animation and Position</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
