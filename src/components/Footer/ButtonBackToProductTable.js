import React from 'react';

function ButtonBackToProductTable(props){
  return (
    <div className="footer_button-products-list-box">
	    <button type="button" onClick={props.handleClick}>
		    Back to products list
		  </button>
	  </div>
  );
}

export default ButtonBackToProductTable;
