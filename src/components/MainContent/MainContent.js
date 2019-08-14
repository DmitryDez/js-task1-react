import React  from 'react';
import ProductsTable from '../ProductsTable/ProductsTable.js';
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable.js';

class MainContent extends React.Component{
  constructor(props){
    super(props);

    this.contentTable = <ProductsTable
      data={this.props.productsData}
      storageProductsAmount={this.props.storageProductsAmount}
      toAddProductF={this.props.toAddProductF}
    />;

    this.setContentTable = this.setContentTable.bind(this);
  }

  setContentTable(){
    if(this.props.stateId === 0){
      this.contentTable = <ProductsTable
        data={this.props.productsData}
        storageProductsAmount={this.props.storageProductsAmount}
        toAddProductF={this.props.toAddProductF}
      />;
    } else{
      this.contentTable = <ShoppingCartTable
        data={this.props.shoppingCartData}
        shCartProductsAmount={this.props.shCartProductsAmount}
        toDeleteOneProductFromShoppingCartF={this.props.toDeleteOneProductFromShoppingCartF}
        toDeleteAllOfThisProductsFromShoppingCartF={this.props.toDeleteAllOfThisProductsFromShoppingCartF}
      />;
    }
    return this.contentTable;
  }

  render(){
    let contentTable = this.setContentTable();
    return(
      <div>
        {contentTable}
      </div>
    )
  }
}

export default MainContent;
