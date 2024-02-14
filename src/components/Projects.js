import React from "react";
import camera from "../assets/camera.jpg";
import littlelemon from "../assets/lemon.jpg";
import library from "../assets/library.jpg";
import movie from "../assets/movie.jpg";
import calculator from "../assets/calculator.jpg";
import store from "../assets/store.jpg";
const projects = [
  {
    image: camera,
    description: "Expense Tracker App",
    link: "https://mpa-money-tracker-app.vercel.app/",
  },
  {
    image: littlelemon,
    description: "Little Lemon Restaurant",
    link: "https://littlelemon-capstone-project.vercel.app/",
  },

  {
    image: library,
    description: "Digital Library",
    link: "https://milan-digital-library.vercel.app/",
  },
  {
    image: store,
    description: "E-Commerce Store",
    link: "https://online-shopping-six-alpha.vercel.app/",
  },
  {
    image: movie,
    description: "Movie App collection",
    link: "https://my-movie-app-cyan.vercel.app/",
  },
  {
    image: calculator,
    description: "Calculator",
    link: " https://calculatorapp-jet.vercel.app/",
  },
];

const Projects = () => {
  return (
    <>
      <section className="section4 flex" id="projects">
        <h1 className="title">Projects</h1>

        <div className="projects-container grid">
          {projects.map((project, index) => (
            <div className="project-card flex" key={index}>
              <a href={project.link}>
                <div className="top">
                  <img src={project.image} alt="" />
                </div>
              </a>

              <div className="botton">
                <a href={project.link} className="explore-button">
                  <p> 🚀 Explore: {project.description}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
