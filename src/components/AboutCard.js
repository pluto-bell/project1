import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function AboutCard(props) {
  return (
    <div className="about-card" id={props.id}>
      <div className="about-item">
        {props.item1}
        <span></span>
      </div>
      <div className="about-item">
        {props.item2}
        <span></span>
      </div>
      <div className="about-inner-item1">
        <h2>
          <span>{props.inner1}</span>
        </h2>
      </div>
      <div className="about-inner-item2">
        <h2>
          <span>{props.inner2}</span>
        </h2>
      </div>
    </div>
  );
}
