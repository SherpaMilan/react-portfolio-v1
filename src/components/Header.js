import React from "react";

const Header = () => {
  return (
    <header className="flex primary-header">
      {/* <!-- left side --> */}
      <div className="flex logo">
        <h2>Milan Sherpa</h2>

        <div>
          <h2 className="line">Frontend Developer</h2>
        </div>
      </div>

      {/* <!-- right side  --> */}
      <div className="right">
        <input type="checkbox" id="check" />

        <label htmlFor="check" className="checkBtn">
          <i className="fa-solid fa-bars"></i>
        </label>

        <ul className="flex primary-navigation">
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
    </header>
  );
};

export default Header;
