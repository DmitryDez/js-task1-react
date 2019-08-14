import React  from 'react';
import ProductTableTbody from './ProductTableTbody.js';

function ProductsTable(props){
  return (
    <main className="main">
      <table id="productsTable" className="products-table">
        <thead className="products-table-thead">
          <tr className="products-table-thead-row">
            <th> Name   </th>
            <th> Price  </th>
            <th> Amount </th>
						<th></th>
          </tr>
        </thead>
        <ProductTableTbody        
         rowList={props.data}
         rowListLength={props.storageProductsAmount}
         toAddProductF={props.toAddProductF} />
      </table>
    </main>
  );
}

export default ProductsTable;
