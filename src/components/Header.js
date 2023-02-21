import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex primary-header">
      {/* <!-- left side --> */}
      <div className="flex logo">
        <h1>Milan Sherpa</h1>

        <div>
          <h3 className="line">Web Developer</h3>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
