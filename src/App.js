import "./App.css";
import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certifications";
import { Contact } from "./components/Contact";
import Darkmode from "./components/Darkmode";
// import Example from "./components/Example";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Scroll } from "./components/Scroll";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Darkmode />

      <div className="wrapper">
        <Header />

        <Hero />

        <Skills />
        <Certifications />

        <Projects />

        <AboutMe />

        <Contact />

        <Footer />

        <Scroll />
        {/* <Example /> */}
      </div>
    </div>
  );
}

export default App;
