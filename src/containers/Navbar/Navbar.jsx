import React from "react";
import "./Navbar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import RadioButton2 from "../../components/RadioButtons/RadioButton2";
import RadioButton3 from "../../components/RadioButtons/RadioButton3";
import RadioButtons1 from "../../components/RadioButtons/RadioButtons1";

const Navbar = ({ label, handleInput, searchTerm }) => {
  return (
    <div className="navbar">
      <div>Navbar</div>
      <SearchBar
        label={label}
        handleInput={handleInput}
        searchTerm={searchTerm}
      />

      <RadioButtons1 />

      <RadioButton2 />

      <RadioButton3 />
    </div>
  );
};

export default Navbar;
