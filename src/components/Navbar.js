import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Navbar(props) {
  const className = props.isActive ? "nav-bar" : "hide";

  return (
    <div className={className} onClick={props.toggle}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#main">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
