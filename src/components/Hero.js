import React from "react";

import removebg from "../assets/MILAN-removebg.jpg";

const Hero = () => {
  const downloadstyle = {
    color: "rgba(15,14,15,0.94)",
  };
  return (
    <>
      <div
        className="section1"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bgimage.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9, // Adjust the opacity value as needed
        }}
      >
        <section className="grid section1">
          <div className="left">
            <img src={removebg} alt="" />
          </div>
          <div className="right flex">
            <div className="text-container">
              <p className="name">Uncover My Professional Footprint</p>
              <p className="portfolio-text">
                I invite you to explore my professional portfolio, offering a
                glimpse into my skills and achievements. Click below to download
                my detailed resume: Within, you'll find a comprehensive overview
                of my experience, strengths, and the value I bring to a team.
                I'm excited about the possibility of contributing and am eager
                to discuss how my expertise aligns with your team's needs.
                Looking forward to the opportunity to connect and delve deeper
                into potential collaborations.
              </p>
            </div>

            <div className="forms">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="milanresume.pdf" download="milanresume.pdf">
                Unlock Resume
                <i
                  class="bx bxs-download bx-tada bx-flip-horizontal"
                  style={downloadstyle}
                ></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
