import React from "react";
import "./Navbar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

const Navbar = ({ label, handleInput, searchTerm }) => {
  return (
    <div className="navbar">
      <div>Navbar</div>
      <SearchBar
        label={label}
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Navbar;
