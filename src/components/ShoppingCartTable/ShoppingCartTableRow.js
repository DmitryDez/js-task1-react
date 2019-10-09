import React  from 'react';

class ShoppingCartTableRow extends React.Component{
  constructor(props){
    super(props);

    this.productId     = this.props.productData.id;
    this.productName   = this.props.productData.name;
    this.productPrice  = this.props.productData.price;
    this.productAmount = this.props.productData.amount;

    if(this.productAmount !== 0){
      this.state = {
        productAmount: this.props.productData.amount,
        tdClassName: "",
        isDisabled: false
      }
    } else{
      this.state = {
        productAmount: this.props.productData.amount,
        tdClassName: "product-run-out-ver2",
        isDisabled: true
      }
    }

    this.deleteOneProduct = this.deleteOneProduct.bind(this);
    this.deleteAllOfThisProducts = this.deleteAllOfThisProducts.bind(this);
  }

  deleteOneProduct(){
    let productWeDelete = {
      id:     this.productId,
      name:   this.productName,
      price:  this.productPrice,
      amount: 1
    }

    if(this.state.productAmount !== 0){
      this.props.deleteOneProductFromShoppingCartF(productWeDelete);
      this.setState({
        productAmount: this.state.productAmount - 1
      });
    }
  }

  deleteAllOfThisProducts(){
    let productWeDelete = {
      id:     this.productId,
      name:   this.productName,
      price:  this.productPrice,
      amount: this.props.productData.amount
    }

    if(this.state.productAmount !== 0){
      this.props.deleteAllProductsFromShoppingCartF(productWeDelete);
      this.setState({
        productAmount: 0
      });
    }
  }

  componentDidUpdate(){
    if( (this.state.tdClassName === "") && (this.state.productAmount === 0) ){
      this.setState({
        tdClassName: "product-run-out-ver2",
        isDisabled: true
      });
    }
  }

  render(){
    return (
      <tr className={this.state.tdClassName}>
        <td>
          {this.productName}
        </td>
        <td>
          {this.productPrice}
        </td>
        <td>
          {this.state.productAmount}
        </td>
        <td>
          <button
            type="button"
            className="shopping-cart-table_button-minus"
            onClick={this.deleteOneProduct}
            disabled={this.state.isDisabled}>
            -
          </button>
        </td>
        <td>
          <button
            type="button"
            className="shopping-cart-table_button-delete-all"
            onClick={this.deleteAllOfThisProducts}
            disabled={this.state.isDisabled}>
            Delete all
          </button>
        </td>
      </tr>
    )
  }
}

export default ShoppingCartTableRow;
