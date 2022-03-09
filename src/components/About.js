import React from "react";
import ReactDOM from "react-dom";
import AboutCard from "./AboutCard.js";
import aboutData from "./aboutData.js";

export default function About() {
  const aboutElements = aboutData.map((data) => {
    return <AboutCard key={data.id} item1={data.item1} item2={data.item2} />;
  });

  return <div className="about-container">{aboutElements}</div>;
}
