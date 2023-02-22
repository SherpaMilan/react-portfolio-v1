import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import { Contact } from "./components/Contact";

import Darkmode from "./components/Darkmode";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Projects from "./components/Projects";
import { Scroll } from "./components/Scroll";
import Skills from "./components/Skills";

function App() {
  const [showScreen, setShowScreen] = useState(" ");
  console.log(showScreen);

  const screens = {
    skills: <Skills />,
    projects: <Projects />,
    about: <AboutMe />,
    contact: <Contact />,
  };
  console.log(screens.about);

  return (
    <div>
      <Darkmode />

      <div className="wrapper">
        <Header setShowScreen={setShowScreen} />

        {!showScreen ? (
          <>
            <Hero />
            {Object.values(screens)}
          </>
        ) : (
          screens[showScreen]
        )}

        <Footer />

        <Scroll />
      </div>
    </div>
  );
}

export default App;
