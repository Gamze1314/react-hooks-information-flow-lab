import React, { useState } from "react";
import Item from "./Item";
import Filter from './Filter'

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value); 
  }

  // if selectedCategory is all or matching category items being displayed
  // Line 16 will work even if you swap the conditions.
  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory
  });

  const mappedItems = itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))

  return (
    <div className="ShoppingList" >
      <Filter onCategoryChange={(handleCategoryChange)}/>
      <ul className="Items">
        {mappedItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
