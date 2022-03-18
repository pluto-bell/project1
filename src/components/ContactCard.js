import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CircleType from "circletype";

export default function ContactCard(props) {
  useEffect(() => {
    const circleType = document.getElementById(`contact-inner${props.id}`);
    console.log(circleType);
    new CircleType(circleType).radius(100);
    // new CircleType(circleType2.lastElementChild);
  }, []);

  return (
    <div className="contact-card" id={`contact-card${props.id}`}>
      <div className="contact-outer">
        <p id={`contact-inner${props.id}`}>
          <span>{props.type}</span>
        </p>
      </div>
    </div>
  );
}
