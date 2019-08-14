import React  from 'react';
import ShoppingCartTableTbody from './ShoppingCartTableTbody.js';

function ShoppingCartTable(props){  
  return (
    <main className="main">
      <table id="ShoppingCartTable" className="shopping-cart-table">
				<caption> Shopping-cart </caption>
        <thead className="shopping-cart-table_thead">
          <tr className="shopping-cart-table_thead-row">
            <th> Name   </th>
            <th> Price  </th>
            <th> Amount </th>
						<th></th>
						<th></th>
          </tr>
        </thead>
        <ShoppingCartTableTbody
          rowList={props.data}
          rowListLength={props.shCartProductsAmount}
          deleteOneProductFromShoppingCart={props.toDeleteOneProductFromShoppingCartF}
          deleteAllProductsFromShoppingCart={props.toDeleteAllOfThisProductsFromShoppingCartF}
        />
			</table>
		</main>
  );
}

export default ShoppingCartTable;
