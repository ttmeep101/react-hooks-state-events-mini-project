import React from "react";
import { useState } from 'react'

function CategoryFilter({category, handleCategory, isSelected}) {

  return (
    <div className="categories">
      <button
        className = {isSelected ? 'selected' : ''} 
        onClick={handleCategory}
        value={category}>
          {category}
      </button>
    </div>
  );
}

export default CategoryFilter;
