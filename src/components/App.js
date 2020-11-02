import "../styles/App.css";
import React, { Component, useEffect, useState } from "react";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  const reset = () => {
    setX(0);
    setY(0);
    setRenderBall(false);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
  };

  //{key:ArrowRight, keyCode:39} or
  //{key:ArrowDown, keyCode:40} or
  //{key:ArrowUp, keyCode:38},
  //{key:ArrowLeft, keyCode:37}.

  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={buttonClickHandler}>
          Click For One Ball
        </button>
      );
  };

  const onKeyPressed = (e) => {
    let valueX = x;
    let valueY = y;
    if (e.keyCode === 39) {
      valueX += 5;
      setX(valueX);
    }
    if (e.keyCode === 40) {
      valueY += 5;
      setY(valueY);
    }
    if (e.keyCode === 38) {
      valueY -= 5;
      setY(valueY);
    }
    if (e.keyCode === 37) {
      valueX -= 5;
      setX(valueX);
    }
    setBallPosition({ left: valueX + "px", top: valueY + "px" });
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);
    return () => {
      document.removeEventListener("keydown", onKeyPressed);
    };
  });

  return (
    <div className="playground">
      {renderChoice()}
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;
