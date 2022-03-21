import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CircleType from "circletype";

function transitionEl(card, child) {
  card.children[child].style.transition = "transform 650ms, opacity 600ms";
}
function transformEl(card, child, num1, num2) {
  card.children[child].style.transform = `translate(${num1}%, ${num2}%)`;
}

function scaleEl(card, child, num) {
  card.children[child].style.transform = `scale(80%)`;
}

export default function AboutCard(props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const circleType = document.getElementById("about2").firstElementChild;
    const circleType2 = document.getElementById("about4").lastElementChild;

    new CircleType(circleType);
    new CircleType(circleType2.lastElementChild);
  }, []);

  function handleMouseEvent(e) {
    const card = e.target.closest(".about-card");
    if (card.id === "about2") {
      transitionEl(card, 2);
      transformEl(card, 2, 0, 100);
      card.children[2].style.zIndex = "500%";
    } else if (card.id === "about9") {
      transitionEl(card, 2);
      transformEl(card, 2, 0, 100);
      card.children[2].style.display = "block";
    } else if (card.id === "about3") {
      transitionEl(card, 3);
      transformEl(card, 3, -100, 0);
    } else if ((card.id === "about1") | (card.id === "about5")) {
      transitionEl(card, 2);
      transformEl(card, 2, 100, 0);
    } else if (card.id === "about6") {
      transitionEl(card, 3);
      transformEl(card, 3, 0, -100);
    } else if (card.id === "about4") {
      const newCard = card.children[2].children[1];
      newCard.style.transition = "transform 650ms, opacity 600ms";
      newCard.style.transform = `scale(80%)`;
    }

    // console.log(card.children[2].id);
    // //
    // const innerOneItemCollection = document.getElementsByClassName(
    //   "about-inner-item1"
    // );
    // const innerTwoItemCollection = document.getElementsByClassName(
    //   "about-inner-item2"
    // );
    // const filterIndexValues = [0, 1, 2, 4, 5, 8];
    // function filter(values, index) {
    //   return filterIndexValues.indexOf(index) == -1;
    // }
    // const innerItems1Arr = Array.from(innerOneItemCollection).filter(filter);
    // const innerItems2Arr = Array.from(innerTwoItemCollection).filter(filter);
  }

  // function handleHover(e){

  //   else if (card.id === "about8") {
  //     console.log(card);
  //     // const innerCard = card.children[3].children[1];
  //     // innerCard.style.transition = "transform 650ms, opacity 600ms";
  //     // innerCard.style.transform = `scale(150%)`;
  //   } else if (card.id === "about7") {
  //     const innerCard = card.children[3].children[1];
  //     innerCard.style.backgroundColor = `#f65600`;
  //   }
  // }

  return (
    <div
      className="about-card"
      id={props.id}
      onMouseEnter={(e) => {
        handleMouseEvent(e);
      }}
    >
      <div className="about-item">{props.item1}</div>
      <div className="about-item">
        {props.item2}
        <span></span>
      </div>
      <div className="about-inner-item1" id={`${props.id}-inner1`}>
        <h2>
          <span>{props.inner1}</span>
        </h2>
        <div className="x"></div>
      </div>
      <div className="about-inner-item2" id={`${props.id}-inner2`}>
        <div className="heart"></div>
        <h2></h2>
        <span>{props.inner2}</span>
      </div>
    </div>
  );
}
