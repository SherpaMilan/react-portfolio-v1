import React from "react";

const Info = () => {
  return (
    <section className="flex section2">
      <div className="flex info-container">
        <div className="flex info-lists">
          <div className="icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <h5>InhtmlFormation Technology</h5>
            <p>Graduate</p>
          </div>
        </div>

        <div className="info-divider"></div>

        <div className="flex info-lists">
          <div className="icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <h5>Dented Code Bootcamp</h5>
            <p>In Progress</p>
          </div>
        </div>

        <div className="info-divider"></div>

        <div className="flex info-lists">
          <div className="icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <h5>+5 Projects</h5>
            <p>In Progress</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
