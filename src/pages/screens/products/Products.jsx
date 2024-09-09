import React from "react";
import ItemsContainer from "../../components/itemcontainer/itemsContainer";
import "./ProductsStyles.css";

function Products() {
  return (
    
    <div class="flex-container">
   <div class="Filters-container">Filters</div>
   <div class="Items-container">
    <div className="Items"><ItemsContainer />
    </div></div>
</div>
  );
}

export default Products;
