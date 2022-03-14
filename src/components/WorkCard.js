import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function WorkCard(props) {
  return (
    <div className="work-card">
      <div className="work-type">
        <h2 className="type">{props.type}</h2>
        <div className="underline"></div>
      </div>
      <div className="work-item work-number">{props.number}</div>
      <div className="work-item work-name">{props.name}</div>
    </div>
  );
}
