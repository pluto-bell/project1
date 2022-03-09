import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import WorkExamples from "./components/WorkExamples";

export default function App() {
  return (
    <div className="site-container">
      <div className="section1">
        <Toggle />
        <Navbar />
      </div>
      <div className="section2">
        <About />
      </div>
      <div className="section3">
        <WorkExamples />
      </div>
      <div className="section4">
        <Contact />
      </div>
    </div>
  );
}
