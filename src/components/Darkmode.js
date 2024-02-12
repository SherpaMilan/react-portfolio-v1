import React from "react";

const Darkmode = () => {
  return (
    <>
      <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />
      <label htmlFor="darkMode">
        <i className="fa-solid fa-moon toggle" style={{ fontSize: "30px" }}></i>
      </label>
    </>
  );
};

export default Darkmode;
