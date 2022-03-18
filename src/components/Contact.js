import React from "react";
import ReactDOM from "react-dom";
import ContactCard from "./ContactCard.js";
import contactData from "./contactData.js";

export default function Contact() {
  const contactCards = contactData.map((data) => {
    return <ContactCard id={data.id} type={data.type} />;
  });

  return (
    <div className="contact-container">
      Contact me — <span>Say hi!</span>
      {contactCards}
    </div>
  );
}
