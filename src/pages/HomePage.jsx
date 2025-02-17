import React from "react";
import SearchBar from "src\components\SearchBar.jsx";
import CategoryCard from "src\components\CategoryCard.jsx";
import 'src\assets\styles.css';

const categories = [
  { name: "Abacus Classes", bgColor: "white" },
  { name: "Abrasive Dealers", bgColor: "#FFC67C" },
  { name: "AC repairs & Services", bgColor: "white" },
  { name: "Accommodations", bgColor: "white" },
  { name: "Adoption Center", bgColor: "#FFC67C" },
  { name: "Adventure Club", bgColor: "white" },
  { name: "Advertising", bgColor: "#FFC67C" }
];

const HomePage = () => {
  return (
    <div className="container">
      <SearchBar />
      <div className="category-grid">
        {categories.map((category, index) => (
          <CategoryCard key={index} name={category.name} bgColor={category.bgColor} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
