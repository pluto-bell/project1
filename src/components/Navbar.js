import React from "react";
import ReactDOM from "react-dom";

export default function Navbar() {
  return (
    <nav className="hide">
      <ul className="nav-list">
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
}
