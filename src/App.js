import React, { useState } from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import WorkExamples from "./components/WorkExamples";

export default function App() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prevState) => !prevState);
  }

  return (
    <div id="main" className="site-container">
      <div id="menu" className="section1">
        <HamburgerMenu isActive={toggle} toggle={handleToggle} />
      </div>
      <Navbar isActive={toggle} toggle={handleToggle} />
      <div id="about" className="section2">
        {/* ********* TODO ********* */}
        <About about="addClick" projects="addClick" contact="addClick" />
      </div>
      <div id="projects" className="section3">
        <WorkExamples />
      </div>
      <div id="contact" className="section4">
        <Contact />
      </div>
    </div>
  );
}
