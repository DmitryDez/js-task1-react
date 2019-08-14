import React  from 'react';

import ButtonShoppingCart from './ButtonShoppingCart.js';
import ButtonBackToProductTable from './ButtonBackToProductTable.js';
import ButtonClearShoppingCartTable from './ButtonClearShoppingCartTable.js'

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.content = <ButtonShoppingCart onClickFunction={this.showShoppingCart} />;

    this.setFooter         = this.setFooter.bind(this);
    this.showShoppingCart  = this.showShoppingCart.bind(this);
    this.clearShoppingCart = this.clearShoppingCart.bind(this);
  }

  setFooter(){
    if(this.props.stateId === 0){
      this.content = <ButtonShoppingCart onClickFunction={this.showShoppingCart} />;
    } else{
      this.content = <div>
        <ButtonBackToProductTable onClickFunction={this.showShoppingCart} />
        <ButtonClearShoppingCartTable onClickFunction={this.clearShoppingCart}    />
      </div>
    }
    return this.content;
  }

  showShoppingCart(){
    this.props.showShoppingCartF();
  }

  clearShoppingCart(){
    this.props.clearShoppingCartF();
  }

  render(){
    let content = this.setFooter();
    return(
      <footer className="footer">
        {content}
      </footer>
    )
  }
}

export default Footer;
