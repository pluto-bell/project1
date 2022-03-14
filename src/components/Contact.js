import React from "react";
import ReactDOM from "react-dom";
import ContactCard from "./ContactCard.js";
import contactData from "./contactData.js";

export default function Contact() {
  return (
    <div className="contact-container">
      <ContactCard
        text="Contact me — Say hi!"
        type1="email"
        type2="insta"
        type3="other"
      />
    </div>
  );
}
