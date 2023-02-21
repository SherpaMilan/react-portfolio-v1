import React from "react";
import resume from "../assets/milan resume.png";
import removebg from "../assets/MILAN-removebg.jpg";
import Layout from "./Layout";
const Hero = () => {
  return (
    <Layout>
      <section className="grid section1" id="home">
        <div className="left">
          <img src={removebg} alt="" />
        </div>

        <div className="right flex">
          <div>
            <h2 className="name">Milan Sherpa</h2>
            <p className="tag">Web Developer</p>
          </div>

          <a href={resume} download>
            Download Resume <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Hero;
