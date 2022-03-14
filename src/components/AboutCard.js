import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function AboutCard(props) {
  return (
    <div className="about-card">
      <div className="about-item">{props.item1}</div>
      <div className="about-item">{props.item2}</div>
      <div className="about-inner-item">
        <h2>
          <span></span>
        </h2>
      </div>
    </div>
  );
}
