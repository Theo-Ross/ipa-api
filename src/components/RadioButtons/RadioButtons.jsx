import React from "react";
import "./RadioButtons.scss";

const RadioButtons = ({ handleOnChange, buttonActive }) => {
  return (
    <div>
      <button
        className={
          buttonActive ? "RadioButtons__active" : "RadioButtons__unactive"
        }
        onClick={handleOnChange}
      >
        High ABV over 6.0%
      </button>
      <button
        className={
          buttonActive ? "RadioButtons__active" : "RadioButtons__unactive"
        }
        onClick={handleOnChange}
      >
        Classic Range
      </button>
      <button
        className={
          buttonActive ? "RadioButtons__active" : "RadioButtons__unactive"
        }
        onClick={handleOnChange}
      >
        Acidic ph over 4
      </button>
    </div>
  );
};

export default RadioButtons;
