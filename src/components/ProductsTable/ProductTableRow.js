import React  from 'react';

class ProductTableRow extends React.Component{
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
        tdClassName: "product-run-out-ver1",
        isDisabled: true
      }
    }

    this.addProductToShoppingCart = this.addProductToShoppingCart.bind(this);
  }

  addProductToShoppingCart(){
    let productWeAdd = {
      id:     this.productId,
      name:   this.productName,
      price:  this.productPrice,
      amount: 1
    }

    if(this.state.productAmount !== 0){
      this.props.toAddProductF(productWeAdd);
      this.setState({
        productAmount: this.state.productAmount - 1
      });
    }
  }

  componentDidUpdate(){
    if( (this.state.tdClassName === "") && (this.state.productAmount === 0) ){
      this.setState({
        tdClassName: "product-run-out-ver1",
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
            className="products-table-button-plus"
            onClick={this.addProductToShoppingCart}
            disabled={this.state.isDisabled}>
             +
          </button>
        </td>
      </tr>
    )
  }
}

export default ProductTableRow;
