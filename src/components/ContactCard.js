import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const initialState = {
  "contact-card1": false,
  "contact-card2": false,
  "contact-card3": false,
};

export default function ContactCard(props) {
  const [animate, setAnimate] = useState(initialState);

  //Changes State of Target Card
  function changeAnimationState(targetName) {
    setAnimate(initialState);
    setAnimate((prev) => {
      return {
        ...prev,
        [targetName]: !targetName.value,
      };
    });
  }
  // Handles stateChange and initiates animation
  function handleMouseEvent(e) {
    //target.closest insures that the right element gets used on both desktop and mobile view
    changeAnimationState(e.target.closest(".contact-card").id);
    rotateEl(e, 0, 360);
  }

  //Executes eery time animate state updates
  useEffect(() => {
    const contactCardEntries = Object.entries(animate);
    const contactCardArr = Array.from(
      document.getElementsByClassName("contact-card")
    );

    //if value of item is FALSE, turn off animation
    contactCardArr.map((card) => {
      contactCardEntries.map((i) => {
        if (!i[1]) {
          resetElement(`${i[0]}`);
        }
      });
    });
  }, [animate]);

  return (
    <div
      className="contact-card"
      id={`contact-card${props.id}`}
      onMouseEnter={(e) => {
        handleMouseEvent(e);
      }}
    >
      <div className="contact-outer">
        <p id={`contact-inner${props.id}`}></p>
      </div>
    </div>
  );
}

//adds animation on element
function rotateEl(e, child, num) {
  //target.closest insures that the right element gets used on both desktop and mobile view
  let target = e.target.closest(".contact-card");
  target.children[child].style.transform = `rotate(${num}deg)`;
  target.children[child].style.transition = "transform 2s ease-in-out 0s";
}

//removes animation from element
function resetElement(cardId) {
  document.getElementById(cardId).children[0].style.transform = "none";
}
