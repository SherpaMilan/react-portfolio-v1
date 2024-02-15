import React from "react";

export const Footer = () => {
  const siteMap = {
    color: "rgba(115,169,107,0.94)",
    fontSize: "1rem",
    fontWeight: "bold",
  };
  const locationStyle = {
    color: "rgba(115,169,107,0.94)",
    fontWeight: "bold",
    fontSize: "1rem",
  };
  const hourStyle = {
    color: "rgba(115,169,107,0.94)",
    fontWeight: "bold",
    fontSize: "1rem",
  };
  return (
    <footer>
      <div className="footer-container   flex">
        <div className="footer-top flex">
          <div className="sitemap">
            <h1 className="text-xl  font-bold mb-3">
              SiteMap
              <i
                class="bx bx-sitemap bx-flashing bx-flip-horizontal"
                style={siteMap}
              ></i>
            </h1>
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

          {/* location  */}
          <div className="mb-6 mr-4 md:mb-0 location">
            <h1 className=" text-2xl text-blue-500 font-bold mb-4">
              Location
              <i
                class="bx bx-current-location bx-flashing bx-flip-horizontal"
                style={locationStyle}
              ></i>
            </h1>
            <ul className="flex">
              <li className="text-black mb-2">789 Repository Road</li>
              <li className="text-black mb-2">Commitville, Branch State</li>
              <li className="text-black">Zip Code: 45678</li>
            </ul>
          </div>
          {/* opening hours */}
          <div className="mb-6  md:mb-0 ophours">
            <h3 className="text-xl  font-bold mb-3">
              Opening Hours
              <i class="bx bxs-hourglass" style={hourStyle}></i>
            </h3>
            <ul className="flex">
              <p className="text-black mb-2 shadow-sm">
                Monday to Friday: 9 AM - 5 PM
              </p>
              <p className="text-black mb-2 shadow-sm">
                Weekends: Coding marathons, please disturb responsibly
              </p>
              <p className="text-black shadow-sm">
                Holidays: Debugging in progress, expect delays
              </p>
            </ul>
          </div>
        </div>

        <div className=" justify-center font-semibold text-l">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} Milan Sherpa| All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
