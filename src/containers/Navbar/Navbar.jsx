import React from "react";
import "./Navbar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import RangeInput from "../../components/rangeInput/RangeInput";

const Navbar = ({
  label,
  handleInput,
  searchTerm,
  handleOnChange,
  abvButtonActive,
  phButtonActive,
  classicButtonActive,
  handleInputChange,
}) => {
  return (
    <div className="navbar">
      <SearchBar
        label={label}
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
      <RadioButtons
        handleOnChange={handleOnChange}
        abvButtonActive={abvButtonActive}
        phButtonActive={phButtonActive}
        classicButtonActive={classicButtonActive}
      />
      <RangeInput
        className="navbar__range"
        min={1}
        max={80}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default Navbar;
