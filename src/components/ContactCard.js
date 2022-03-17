import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function ContactCard(props) {
  return (
    <div className="contact-card" id={`contact-card${props.id}`}>
      <div>
        {props.type}
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
