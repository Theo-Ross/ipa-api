import React from "react";
import "./Navbar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import RadioButtons from "../../components/RadioButtons/RadioButtons";

const Navbar = ({ label, handleInput, searchTerm, handleOnChange }) => {
  return (
    <div className="navbar">
      <div>Navbar</div>
      <SearchBar
        label={label}
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
      <RadioButtons handleOnChange={handleOnChange} />
    </div>
  );
};

export default Navbar;
