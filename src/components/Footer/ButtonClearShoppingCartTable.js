import React from 'react';

function ButtonClearShoppingCartTable(props){
  return (
    <div className="footer_button-clear-shopping-cart-box">
	    <button type="button" onClick={props.handleClick}>
		    Clear shopping cart
		  </button>
	  </div>
  );
}

export default ButtonClearShoppingCartTable;
