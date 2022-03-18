import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CircleType from "circletype";

export default function AboutCard(props) {
  useEffect(() => {
    const circleType = document.getElementById("about2").firstElementChild;
    const circleType2 = document.getElementById("about4").lastElementChild;

    new CircleType(circleType);
    new CircleType(circleType2.lastElementChild);
  }, []);

  return (
    <div className="about-card" id={props.id}>
      <div className="about-item">{props.item1}</div>
      <div className="about-item">
        {props.item2}
        <span></span>
      </div>
      <div className="about-inner-item1">
        <h2>
          <span>{props.inner1}</span>
        </h2>
        <div className="x"></div>
      </div>
      <div className="about-inner-item2">
        <div className="heart"></div>
        <h2></h2>
        <span>{props.inner2}</span>
      </div>
    </div>
  );
}
