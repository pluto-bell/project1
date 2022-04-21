import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import CircleType from "circletype";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import WorkExamples from "./components/WorkExamples";

export default function App() {
  const [toggle, setToggle] = useState(false);
  // const [animate, setAnimate] = useState(false);

  function handleToggle() {
    setToggle((prevState) => !prevState);
  }

  // function handleMouseEvent() {
  //   set
  // }

  // useEffect(() => {

  // }, mouse)

  return (
    <div id="main" className="site-container">
      <div id="menu" className="section1">
        <HamburgerMenu isActive={toggle} toggle={handleToggle} />
      </div>
      <Navbar isActive={toggle} toggle={handleToggle} />
      <div id="about" className="section2">
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
