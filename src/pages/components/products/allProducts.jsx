import React from "react";
import ItemsContainer from "./itemsContainer";
import "../products/allProductsStyles.css";

function AllProducts() {
  return (
    // <div classname="flex-container">
    //   <div className="container">

      
    //     <div className="left-column">
    //       <div classname="col-left">Filters</div>
    //     </div>
    //     <div className="right-column">
    //       <div classname="col-right">
    //         <ItemsContainer />
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    <div class="flex-container">
   <div class="Filters-container">Filters</div>
   <div class="Items-container">
    <div className="Items"><ItemsContainer />
    </div></div>
</div>
  );
}

export default AllProducts;
