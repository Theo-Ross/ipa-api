import "./SearchBar.scss";
import React from "react";

const SearchBar = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <div>
      <input
        type="text"
        name={label}
        value={searchTerm}
        onInput={handleInput}
        className="searchbar__input"
      />
    </div>
  );
};

export default SearchBar;
