import React from "react";
import "./Category.css";
import fungicides from "../../../assets/Categories/Fungicides.jpeg";
import herbicides from "../../../assets/Categories/Herbicides.jpeg";
import insecticides from "../../../assets/Categories/Insecticides.jpeg";
import GrowthPromoters from "../../../assets/Categories/Growth Promoters.jpeg";
import seeds from "../../../assets/Categories/Seeds1.jpeg";
import Viricides from "../../../assets/Categories/Viricides.jpeg";
import Nutrients from "../../../assets/Categories/Nutrients.jpeg";
import AgriculturalTools from "../../../assets/Categories/Farm Machinery.jpeg";
import AnimalHusbandry from "../../../assets/Categories/Animal husbandry.jpeg";
import OrganicFarming from "../../../assets/Categories/Organic Farming.png";
import irrigation from "../../../assets/Categories/irrigation.jpeg";
import implement from "../../../assets/Categories/implements.jpeg";

const categories = [
  { name: "Fungicides", image: fungicides },
  { name: "Herbicides", image: herbicides },
  { name: "Insecticides", image: insecticides },
  { name: "Growth Promoters", image: GrowthPromoters },
  { name: "Seeds", image: seeds },
  { name: "Viricides", image: Viricides },
  { name: "Nutrients", image: Nutrients },
  { name: "Agricultural Tools", image: AgriculturalTools },
  { name: "Animal Husbandry", image: AnimalHusbandry },
  { name: "Organic Farming", image: OrganicFarming },
  { name: "Irrigation", image: irrigation },
  { name: "Implements", image: implement },
];

const Category = () => {
  return (
    <div className="category-section">
      <h1 className="category-title">CATEGORIES</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.name}>
            <img
              src={category.image} // Directly use the imported image
              alt={category.name}
              className="category-image"
              onError={(event) => {
                // Handle missing image (optional)
                event.target.src = "path/to/default-image.png"; // Replace with a default image path
              }}
            />
            <a href="#" className="category-link">
              {category.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
