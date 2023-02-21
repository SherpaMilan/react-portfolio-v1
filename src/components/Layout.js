import React from "react";

import Darkmode from "./Darkmode";
import { Footer } from "./Footer";
import Header from "./Header";
import { Scroll } from "./Scroll";

const Layout = ({ children }) => {
  return (
    <div>
      <Darkmode />

      <div className="wrapper">
        <Header />

        {children}

        <Footer />

        <Scroll />
      </div>
    </div>
  );
};

export default Layout;
