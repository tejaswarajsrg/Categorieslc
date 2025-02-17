import React from "react";
import "../styles.css";

const CategoryCard = ({ name, bgColor }) => {
  return (
    <div className="category-card" style={{ backgroundColor: bgColor }}>
      <span className="category-name">{name}</span>
      <button className="plus-button">+</button>
    </div>
  );
};

export default CategoryCard;
