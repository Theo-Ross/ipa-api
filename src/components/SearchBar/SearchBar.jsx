import "./SearchBar.scss";
import React from "react";

const SearchBar = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <div>
      <div>SearchBar</div>
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

export default SearchBar;
