import React from "react";
import ReactDOM from "react-dom";

export default function HamburgerMenu(props) {
  return (
    <div className="container" onClick={props.toggle}>
      <div className={props.isActive ? "bar bar-change1" : "bar"}></div>
      <div div className={props.isActive ? "bar bar-change2" : "bar"}></div>
      <div className={props.isActive ? "bar bar-change3" : "bar"}></div>
    </div>
  );
}
