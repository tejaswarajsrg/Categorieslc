import React from "react";
import "../styles.css";

const SearchBar = () => {
  return (
    <div className="search-box">
      <h3>CATEGORIES</h3>
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
  );
};

export default SearchBar;
