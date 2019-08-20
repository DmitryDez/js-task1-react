import React  from 'react';
import ShoppingCartTableRow from './ShoppingCartTableRow.js';
import EmptyTr from './EmptyTr.js';

function ShoppingCartTableTbody(props){
  let rowListLength  = props.rowListLength;
  let rowList        = props.rowList;

  let tbodyList = [];

  for(let i = 0; i < rowListLength; i++){
    tbodyList.push(<ShoppingCartTableRow
       key={i}
       productData={rowList[i]}
       deleteOneProductFromShoppingCartF={props.deleteOneProductFromShoppingCart}
       deleteAllProductsFromShoppingCartF={props.deleteAllProductsFromShoppingCart}
      />);
  }

  let content = tbodyList;

  if(rowListLength === 0){
    tbodyList = [];

    tbodyList.push(<EmptyTr key="1" />);
    tbodyList.push(<EmptyTr key="2" />);

    content = tbodyList;
  }
  return(
    <tbody>
      {content}
    </tbody>
  );
}

export default ShoppingCartTableTbody;
