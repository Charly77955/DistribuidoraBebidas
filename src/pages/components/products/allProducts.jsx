import React from 'react'
import ItemsContainer from './itemsContainer';

function AllProducts() {

  return (
    <div>
      <div class="flex-container">
       <div class="container">
         <div class="row">
          <div class="col-3">Filters</div>
          <div class="col-8"><ItemsContainer/>
          </div>
         </div>
    </div>
    </div>
    </div>

  )
}

export default AllProducts;
