import React from "react";

export const Scroll = () => {
  const scrollstyle = {
    color: "#e72d14",
  };
  return (
    <a href="#">
      <div className="scroll-to-top">
        <a className="scroll-btn">
          <i
            class="bx bx-chevrons-up bx-tada bx-flip-horizontal"
            style={scrollstyle}
          ></i>
        </a>
      </div>
    </a>
  );
};
