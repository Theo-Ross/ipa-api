import React from "react";
import "./RadioButtons.scss";

const RadioButtons = ({
  handleOnChange,
  abvButtonActive,
  classicButtonActive,
  phButtonActive,
}) => {
  return (
    <div>
      <button
        className={
          abvButtonActive ? "RadioButtons__active" : "RadioButtons__unactive"
        }
        onClick={handleOnChange}
      >
        High ABV over 6.0%
      </button>
      <button
        className={
          classicButtonActive
            ? "RadioButtons__active"
            : "RadioButtons__unactive"
        }
        onClick={handleOnChange}
      >
        Classic Range
      </button>
      <button
        className={
          phButtonActive ? "RadioButtons__active" : "RadioButtons__unactive"
        }
        onClick={handleOnChange}
      >
        Acidic ph under 4
      </button>
    </div>
  );
};

export default RadioButtons;
