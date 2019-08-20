import React  from 'react';

function ButtonShoppingCart(props){
  return (
    <div className="button-shopping-cart-box">
      <button type="button" onClick={props.handleClick}>
        Shopping cart
      </button>
    </div>
  );
}

export default ButtonShoppingCart;
