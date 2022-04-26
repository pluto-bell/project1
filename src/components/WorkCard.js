import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function WorkCard(props) {
  const [imgStyle, setImgStyle] = useState(false);
  const [hidden, setHidden] = useState(true);

  function onClick(e) {
    //TODO: make toggle between !!!
    setHidden((prev) => !prev);
  }

  return (
    <div className="work-container">
      <div
        className="work-card"
        name={props.name}
        style={hidden ? { display: "grid" } : { display: "none" }}
        onClick={() => onClick()}
      >
        <div className="work-type">
          <h2 className="type">{props.type}</h2>
          <div className="underline underline1"></div>
          <h2 className="type type2">{props.type}</h2>
          <div className="underline underline2"></div>
          <h2 className="type type3">{props.type}</h2>
        </div>
        <div
          className="work-item work-number"
          onMouseEnter={(e) => {
            handleMouseEvent(e);
          }}
          onMouseLeave={(e) => {
            handleMouseLeave(e);
          }}
        >
          {props.number}
        </div>
        <div
          className="work-item work-name"
          onMouseEnter={(e) => {
            handleMouseEvent(e);
          }}
          onMouseLeave={(e) => {
            handleMouseLeave(e);
          }}
        >
          <p>{props.name}</p>
        </div>
      </div>
      <div
        className={`work-card-extended`}
        id={`${props.name}`}
        style={hidden ? { display: "none" } : { display: "block" }}
      >
        <div className="work-type">
          <h2 className="type">{props.type}</h2>
          <div className="underline underline1"></div>
          <h2 className="type type2">{props.type}</h2>
          <div className="underline underline2"></div>
          <h2 className="type type3">{props.type}</h2>
        </div>
        <div
          className="flex-box-container"
          style={hidden ? { display: "none" } : { display: "flex" }}
        >
          <div
            className="left-grid-box"
            style={{
              minWidth: "25vw",
              maxWidth: "25vw",
              display: "block",
              border: "1px solid rgb(37, 37, 37)",
              textAlign: "center",
            }}
          >
            <div
              className="work-item work-number"
              onMouseEnter={(e) => {
                handleMouseEvent(e);
              }}
              onMouseLeave={(e) => {
                handleMouseLeave(e);
              }}
              style={{
                border: "none",
                borderBottom: "1px solid rgb(37, 37, 37)",
                borderRadius: "inherit",
                minHeight: "17vw",
                maxHeight: "17vw",
                fontWeight: "100",
                color: `${randomColor()} `,
              }}
            >
              {props.number}
            </div>
            <p
              style={{
                borderBottom: "1px solid rgb(37, 37, 37)",
                margin: "0",
                padding: "1vw",
                fontWeight: "100",
              }}
            >
              {props.name}
            </p>
            <p
              style={{
                borderBottom: "1px solid rgb(37, 37, 37)",
                margin: "0",
                padding: "1vw",
                fontWeight: "100",
              }}
            >
              2000
            </p>
            <p
              style={{
                textAlign: "initial",
                padding: "1.2vw",
                fontWeight: "100",
                fontSize: "1.6vw",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.""
            </p>
          </div>
          <div
            className="right-flex-box"
            style={{ height: "60vw", width: "100%" }}
          >
            <div className="right-flex-x"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

//TODO: make DRY
//TODO: ease image in via pseudo element
function handleMouseEvent(e) {
  if (e.target.closest(".work-number")) {
    e.target.style.color = randomColor();
    e.target.style.transition = "color 800ms ease-in-out 0s";
  }
  if (e.target.closest(".work-name")) {
    e.target.closest(".work-name").style.color = "transparent";
    e.target.closest(
      ".work-name"
    ).style.backgroundImage = `url("https://i.insider.com/573398c75124c9183c56814f?width=1000&format=jpeg&auto=webp")`;
    e.target.closest(".work-name").style.backgroundSize = `cover`;
  }
}

function handleMouseLeave(e) {
  if (e.target.closest(".work-number")) {
    e.target.style.color = "rgb(37, 37, 37)";
  }

  if (e.target.closest(".work-name")) {
    const workNameArr = Array.from(
      document.getElementsByClassName("work-name")
    );
    workNameArr.map((i) => {
      if (i.style.backgroundImage) {
        i.style.backgroundImage = "";
        i.style.color = "rgb(37, 37, 37)";
      }
    });
  }
}

function randomColor() {
  const colorArr = ["#1c7b32", "#f65600", "#ffc610", "#ff8caf", "#0053ad"];
  let shuffled = colorArr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled[0];
}
