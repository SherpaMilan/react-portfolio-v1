import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container flex">
        <div className="footer-top flex">
          <div>
            <h3>LINKS</h3>
            <ul className="flex">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>EXTERNAL LINKS</h3>
            <ul className="flex">
              <li>
                <a href="https://www.youtube.com/">YouTube</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/SherpaMilan">GitHub</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom flex">
          <h1>Milan | Web Developer</h1>
          <p>&copy; | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
