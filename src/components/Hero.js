import React from "react";

import removebg from "../assets/MILAN-removebg.jpg";
const Hero = () => {
  return (
    <section className="grid section1 " id="home">
      <div className="left">
        <img src={removebg} alt="" />
      </div>

      <div className="right flex">
        <div>
          <h2 className="name">Milan Sherpa</h2>
        </div>
        <div className="forms">
          <a href="milanresume.pdf" download="milanresume.pdf">
            Download Resume <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
