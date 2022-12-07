import React from "react";

const Navbar = ({ label, handleInput, searchTerm }) => {
  return (
    <div className="navbar">
      <div>Navbar</div>
      <input
        type="text"
        name={label}
        value={searchTerm}
        onInput={handleInput}
        className="navbar__input"
      />
    </div>
  );
};

export default Navbar;
