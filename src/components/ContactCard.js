import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="contact-text">{props.text}</div>
      <div className="contact-item contact-type1">{props.type1}</div>
      <div className="contact-item contact-type2">{props.type2}</div>
      <div className="contact-item contact-type3">{props.type3}</div>
    </div>
  );
}
