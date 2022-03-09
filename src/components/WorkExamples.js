import React from "react";
import ReactDOM from "react-dom";
import WorkCard from "./WorkCard.js";
import workData from "./workData.js";

export default function WorkExamples() {
  const workElements = workData.map((data) => {
    return (
      <WorkCard
        key={data.id}
        type={data.type}
        number={data.number}
        name={data.name}
      />
    );
  });

  return <div className="work-container"> {workElements}</div>;
}
