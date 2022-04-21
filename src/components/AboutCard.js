import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CircleType from "circletype";

const initialState = {
  about1: false,
  about2: false,
  about3: false,
  about5: false,
  about6: false,
  about9: false,
  about2inner1: false,
  about2inner2: false,
  about4inner1: false,
  about4inner2: false,
  about7inner1: false,
  about7inner2: false,
  about8inner1: false,
  about8inner2: false,
};

//TODO: reset animations when mouse _leaves_ the div container of whole section
export default function AboutCard(props) {
  const [animate, setAnimate] = useState(initialState);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const circleType = document.getElementById("about2").firstElementChild;
    const circleType2 = document.getElementById("about4").lastElementChild;

    new CircleType(circleType);
    new CircleType(circleType2.lastElementChild);
  }, []);

  useEffect(() => {
    const animateEntries = Object.entries(animate);
    const cardsArr1 = Array.from(document.getElementsByClassName("about-card"));

    cardsArr1.map((card) => {
      const cardId = card.getAttribute("id");

      animateEntries.map((entry) => {
        if (!entry[1]) {
          resetElement(`${entry[0]}`);
        }
      });
    });
  }, [animate]);

  window.addEventListener("resize", function (event) {
    let newWidth = window.innerWidth;
    setWindowSize(newWidth);
  });

  return (
    <div
      className="about-card"
      id={props.id}
      name={props.id}
      value={props.id}
      onMouseEnter={(e) => {
        handleMouseEvent(e);
      }}
    >
      <div className="about-item">{props.item1}</div>
      <div className="about-item">
        {props.item2}
        <span></span>
      </div>
      <div
        className="about-inner about-inner-item1"
        id={`${props.id}inner1`}
        name={`${props.id}inner1`}
        value={props.id}
        onMouseEnter={(e) => {
          handleInnerMouseEvent(e);
        }}
        name="inner1-animate"
      >
        <h2>
          <span>{props.inner1}</span>
        </h2>
        <div className="x"></div>
      </div>
      <div
        className="about-inner about-inner-item2"
        id={`${props.id}inner2`}
        name={`${props.id}inner2`}
        value={props.id}
        onMouseEnter={(e) => {
          handleInnerMouseEvent(e);
        }}
      >
        <div className="design"></div>
        <div className="heart"></div>
        <h2></h2>
        <span>{props.inner2}</span>
      </div>
    </div>
  );

  // F*U*N*C*T*I*O*N*S
  //TODO: clean up code, more dry and transfer into components

  //TODO: rename this function, to make more clear.. it helps reset cards
  function card1(card, idName, idNum, childNum) {
    if (idName === `about${idNum}`) {
      card.children[childNum].style.transform = "none";
    } else if (
      (idName === `about${idNum}inner1`) |
      (idName === `about${idNum}inner2`)
    ) {
      card.children[1].style.transform = "none";
      card.children[0].style.transform = "none";
    } else if (idName === `about2inner2`) {
      card.children[2].style.backgroundColor = "#1c7b32";
    } else if (idName === `about7inner1`) {
      card.children[0].style.transform = "none";
    } else if (idName === `about7inner2`) {
      card.children[2].style.background = "#1c7b32";
    } else if (idName === `about8inner2`) {
      card.children[2].style.transform = "none";
    }
  }

  function resetElement(idName) {
    const card = document.querySelector(`#${idName}`);
    card1(card, idName, 1, 2);
    card1(card, idName, 2, 2);
    card1(card, idName, 3, 3);
    card1(card, idName, 5, 2);
    card1(card, idName, 6, 3);
    card1(card, idName, 9, 2);

    card1(card, idName, 2, 0);
    card1(card, idName, 2, 2);
    card1(card, idName, 4, 1);
    card1(card, idName, 4, 2);
    card1(card, idName, 7, 2);
    card1(card, idName, 7, 2);
    card1(card, idName, 8, 1);
    card1(card, idName, 8, 2);
  }

  function playAnimation(targetName) {
    setAnimate(initialState);
    setAnimate((prev) => {
      return {
        ...prev,
        [targetName]: !targetName.value,
      };
    });
  }

  //TODO: make more dry
  function handleMouseEvent(e) {
    const card = e.target.closest(".about-card");
    const inner1 = e.target.closest(".about-inner-item1");
    if (card.id === "about2" && windowSize > "749") {
      playAnimation("about2");
      transitionEl(card, 2);
      transformEl(card, 2, 0, 100);
      card.children[2].style.zIndex = "500";
    } else if (card.id === "about9") {
      playAnimation("about9");
      transitionEl(card, 2);
      transformEl(card, 2, 0, 100);
      card.children[2].style.display = "block";
    } else if (card.id === "about3") {
      playAnimation("about3");
      transitionEl(card, 3);
      transformEl(card, 3, -100, 0);
    } else if (card.id === "about1") {
      playAnimation("about1");
      transitionEl(card, 2);
      transformEl(card, 2, 100, 0);
    } else if (card.id === "about5") {
      playAnimation("about5");
      transitionEl(card, 2);
      transformEl(card, 2, 100, 0);
    } else if (card.id === "about6") {
      playAnimation("about6");
      transitionEl(card, 3);
      transformEl(card, 3, 0, -100);
    }
  }

  function handleInnerMouseEvent(e, num) {
    const innerItem = e.target.closest(".about-inner");
    const id = innerItem.id.replace(/[^\d.-]/g, "");
    if (id === "21" && windowSize <= "749") {
      playAnimation("about2inner1");
      innerItem.children[0].style.transition = "transform 2s ease-in-out 0s";
      rotateEl(innerItem, 0, 380);
    }
    // FIXME: not changing color on mobile view
    if (id === "22" && windowSize <= "749") {
      console.log(id);
      console.log(e);
      console.log(windowSize);
      playAnimation("about2inner2");
      innerItem.children[2].style.backgroundColor = `#ffc610`;
    }
    if (id === "42" && windowSize <= "749") {
      playAnimation("about4inner2");
      innerItem.children[0].style.transition = "transform 2s ease-in-out 0s";
      rotateEl(innerItem, 0, 380);
    }
    if (id === "41") {
      playAnimation("about4inner1");
      transitionEl(innerItem, 1);
      scaleEl(innerItem, 1, 80);
    }
    if (id === "71") {
      playAnimation("about7inner1");
      innerItem.children[0].style.transition = "transform 2s ease-in-out 0s";
      rotateEl(innerItem, 0, 380);
    }
    if (id === "81") {
      playAnimation("about8inner1");
      transitionEl(innerItem, 1);
      scaleEl(innerItem, 1, 120);
    }
    if (id === "42") {
      playAnimation("about4inner2");
      innerItem.children[0].style.transition = "transform 2s ease-in-out 0s";
      rotateEl(innerItem, 0, 380);
    }
    if (id === "72") {
      playAnimation("about7inner2");
      innerItem.children[2].style.backgroundColor = `#f65600`;
    }
    if (id === "82") {
      playAnimation("about8inner2");
      transitionEl(innerItem, 2);
      scaleEl(innerItem, 2, 150);
    }
  }
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
