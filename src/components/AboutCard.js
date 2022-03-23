import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CircleType from "circletype";

// function resetElement(state, set el) {
//   if (state) {
//     setState(prev => false)
//     el.style.transform = "none";
//   } else { return }
// }

export default function AboutCard(props) {
  const [outerAnimate, setOuterAnimate] = useState(false);
  const [innerAnimate, setInnerAnimate] = useState(false);

  useEffect(() => {
    const circleType = document.getElementById("about2").firstElementChild;
    const circleType2 = document.getElementById("about4").lastElementChild;

    new CircleType(circleType);
    new CircleType(circleType2.lastElementChild);
  }, []);

  function handleMouseEvent(e) {
    const card = e.target.closest(".about-card");
    const inner1 = e.target.closest(".about-inner-item1");
    const inner2 = e.target.closest(".about-inner-item2");
    console.log(document.getElementsByClassName("about-card"));
    if (card.id === "about2") {
      transitionEl(card, 2);
      transformEl(card, 2, 0, 100);
      card.children[2].style.zIndex = "500";
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
    }
  }

  function handleInnerMouseEvent(e, num) {
    const innerItem = e.target.closest(".about-inner");
    const id = innerItem.id.replace(/[^\d.-]/g, "");

    if (id === "4-1") {
      transitionEl(innerItem, 1);
      scaleEl(innerItem, 1, 80);
    }
    if (id === "7-1") {
      innerItem.children[0].style.transition = "transform 2s ease-in-out 0s";
      rotateEl(innerItem, 0, 380);
    }
    if (id === "8-1") {
      transitionEl(innerItem, 1);
      scaleEl(innerItem, 1, 120);
    }
    if (id === "4-2") {
      innerItem.children[1].style.transition = "transform 2s ease-in-out 0s";
      rotateEl(innerItem, 1, 380);
    }
    if (id === "7-2") {
      innerItem.children[1].style.backgroundColor = `#f65600`;
    }
    if (id === "8-2") {
      transitionEl(innerItem, 1);
      scaleEl(innerItem, 1, 150);
    }
  }

  return (
    <div
      className="about-card"
      id={props.id}
      onMouseEnter={(e) => {
        handleMouseEvent(e);
      }}
      outerAnimate={outerAnimate}
    >
      <div className="about-item">{props.item1}</div>
      <div className="about-item">
        {props.item2}
        <span></span>
      </div>
      <div
        className="about-inner about-inner-item1"
        id={`${props.id}-inner1`}
        onMouseEnter={(e) => {
          handleInnerMouseEvent(e);
        }}
        innerAnimate={innerAnimate}
      >
        <h2>
          <span>{props.inner1}</span>
        </h2>
        <div className="x"></div>
      </div>
      <div
        className="about-inner about-inner-item2"
        id={`${props.id}-inner2`}
        onMouseEnter={(e) => {
          handleInnerMouseEvent(e);
        }}
      >
        <div className="heart"></div>
        <h2></h2>
        <span>{props.inner2}</span>
      </div>
    </div>
  );
}

function transitionEl(card, child) {
  card.children[child].style.transition = "transform 650ms, opacity 600ms";
}
function transformEl(card, child, num1, num2) {
  card.children[child].style.transform = `translate(${num1}%, ${num2}%)`;
}

function scaleEl(card, child, num) {
  card.children[child].style.transform = `scale(${num}%)`;
}
function rotateEl(card, child, num) {
  card.children[child].style.transform = `rotate(${num}deg)`;
}
