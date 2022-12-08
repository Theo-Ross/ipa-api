import React from "react";

const RadioButtons = ({ handleOnChange }) => {
  return (
    <div>
      <button className="RadioButtons" onClick={handleOnChange}>
        High ABV over 6.0%
      </button>
      <button className="RadioButtons" onClick={handleOnChange}>
        Classic Range
      </button>
      <button className="RadioButtons" onClick={handleOnChange}>
        Acidic ph over 4
      </button>
    </div>
  );
};

export default RadioButtons;
