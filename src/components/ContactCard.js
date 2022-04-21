import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const initialState = {
  contactCard1: false,
  contactCard2: false,
  contactCard3: false,
};

export default function ContactCard(props) {
  const [animate, setAnimate] = useState(initialState);

  // useEffect(() => {
  //   const animateEntries = Object.entries(animate);
  //   const cardsArr = Array.from(
  //     document.getElementsByClassName("contact-card")
  //   );
  //   console.log(animateEntries);
  //   cardsArr.map((card) => {
  //     const cardId = card.getAttribute("id");

  //     animateEntries.map((entry) => {
  //       if (!entry[1]) {
  //         // resetElement(`${entry[0]}`);
  //         console.log(entry[1]);
  //       }
  //     });
  //   });
  // }, [animate]);

  function playAnimation(targetName) {
    setAnimate(initialState);
    setAnimate((prev) => {
      return {
        ...prev,
        [targetName]: !targetName.value,
      };
    });
  }
  return (
    <div
      className="contact-card"
      id={`contact-card${props.id}`}
      onMouseEnter={(e) => {
        handleMouseEvent(e, setAnimate);
      }}
    >
      <div className="contact-outer">
        <p id={`contact-inner${props.id}`}></p>
      </div>
    </div>
  );
}

function rotateEl(card, child, num) {
  card.children[child].style.transform = `rotate(${num}deg)`;
}

function handleMouseEvent(e, setAnimate) {
  // console.log(e.target);
  // const card = e.target.closest(".about-card");
  // const inner1 = e.target.closest(".about-inner-item1");
  // if (card.id === "about2" && windowSize > "749") {
  //   playAnimation("about2");
  //   transitionEl(card, 2);
  //   transformEl(card, 2, 0, 100);
  //   card.children[2].style.zIndex = "500";
}
