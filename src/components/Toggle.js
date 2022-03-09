import React, { useState } from "react";
import ReactDOM from "react-dom";

function Toggle() {
  const [isActive, setActive] = useState(false);
  const changeStyle = () => {
    setActive(!isActive);
  };

  return (
    <div className="container">
      <div
        className={`bar1${isActive ? " change1" : ""}`}
        onClick={changeStyle}
      ></div>
      <div
        div
        className={`bar2${isActive ? " change2" : ""}`}
        onClick={changeStyle}
      ></div>
      <div
        className={`bar3${isActive ? " change3" : ""}`}
        onClick={changeStyle}
      ></div>
    </div>
  );
}

export default Toggle;
