import React  from 'react';
import Header from '../Header/Header.js';
import MainContent from '../MainContent/MainContent.js';
import Footer from '../Footer/Footer.js';

import productsList from '../../db/products.js';

import './css/App.css';
import '../Header/css/HeaderStyle.css';
import '../ProductsTable/css/ProductsTableStyle.css';
import '../ShoppingCartTable/css/ShoppingCartTableStyle.css';
import '../Footer/css/footerStyle.css';
import '../Footer/css/ButtonShoppingCartStyle.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.productsData = [];
    this.storageProductsAmount = 7;

    this.shoppingCartData = [];

    this.state = {
      globalStateId: 0,
      headerType:    0,
      mainContent:   0,
      footerType:    0
    };

    this.switchPage = this.switchPage.bind(this);
    this.addProductToShoppingCart = this.addProductToShoppingCart.bind(this);
    this.deleteOneProductFromShoppingCart = this.deleteOneProductFromShoppingCart.bind(this);
    this.deleteAllOfThisProductsFromShoppingCart = this.deleteAllOfThisProductsFromShoppingCart.bind(this);
    this.clearShoppingCart = this.clearShoppingCart.bind(this);
    this.moveOneProductFromDBToShoppingCart = this.moveOneProductFromDBToShoppingCart.bind(this);
    this.checkForDuplicateInShoppingCart = this.checkForDuplicateInShoppingCart.bind(this);
  }

  switchPage(){
    if(this.state.globalStateId === 0){
      this.setState({
        globalStateId: 1,
        headerType:    1,
        mainContent:   1,
        footerType:    1
      });
    } else{
      this.setState({
        globalStateId: 0,
        headerType:    0,
        mainContent:   0,
        footerType:    0
      });
    }
  }

  getProductsFromDB(numberOfProducts){
    for(let i = 1; i <= numberOfProducts; i++){
      let product = {
        id:     productsList["product" + i].id,
        name:   productsList["product" + i].name,
        price:  productsList["product" + i].price,
        amount: productsList["product" + i].amount,
      };

      this.productsData.push(product);
    }
  }

  addProductToShoppingCart(product){
    let isItDuplicate = this.checkForDuplicateInShoppingCart(product);

    if(!isItDuplicate){
      this.shoppingCartData.push(product);
    }

    this.moveOneProductFromDBToShoppingCart(product);
  }

  checkForDuplicateInShoppingCart(product){
    let objectValuesShoppingCartData = Object.values(this.shoppingCartData);

    for(let i = 0; i < objectValuesShoppingCartData.length; i++){
      if(objectValuesShoppingCartData[i].id === product.id){
        this.shoppingCartData[i].amount++;
        return true;
      }
    }
  }

  moveOneProductFromDBToShoppingCart(product){
    for(let i = 0; i < this.productsData.length; i++){
      if(this.productsData[i].id === product.id){
        this.productsData[i].amount--;
      }
    }
  }

  deleteOneProductFromShoppingCart(product){
    for(let i = 0; i < this.productsData.length; i++){
      if(this.productsData[i].id === product.id){
        this.productsData[i].amount++;
      }
    }

    for(let i = 0; i < this.shoppingCartData.length; i++){
      if(this.shoppingCartData[i].id === product.id){
        this.shoppingCartData[i].amount--;
        if(this.shoppingCartData[i].amount === 0){
          this.shoppingCartData.splice(i, 1);
        }
      }
    }
  }

  deleteAllOfThisProductsFromShoppingCart(product){
    for(let i = 0; i < this.productsData.length; i++){
      if(this.productsData[i].id === product.id){
        this.productsData[i].amount = this.productsData[i].amount + product.amount;
      }
    }

    for(let i = 0; i < this.shoppingCartData.length; i++){
      if(this.shoppingCartData[i].id === product.id){
        this.shoppingCartData.splice(i, 1);
      }
    }
  }

  clearShoppingCart(){
    if(this.shoppingCartData.length === 0) return;

    this.shoppingCartData = [];
    this.productsData     = [];

    this.setState({
      mainContent: 1,
    });

    this.getProductsFromDB(this.storageProductsAmount);
  }

  render(){
    if(this.productsData.length === 0){
      this.getProductsFromDB(this.storageProductsAmount);
    }

    return(
      <div>
        <Header stateId={this.state.headerType} />
        <MainContent
          stateId={this.state.mainContent}
          productsData={this.productsData}
          storageProductsAmount={this.storageProductsAmount}
          shoppingCartData={this.shoppingCartData}
          shCartProductsAmount={this.shoppingCartData.length}
          toAddProductF={this.addProductToShoppingCart}
          toDeleteOneProductFromShoppingCartF={this.deleteOneProductFromShoppingCart}
          toDeleteAllOfThisProductsFromShoppingCartF={this.deleteAllOfThisProductsFromShoppingCart}
        />
        <Footer
          stateId={this.state.footerType}
          showShoppingCartF={this.switchPage}
          clearShoppingCartF={this.clearShoppingCart}
        />
      </div>
    );
  }
}

export default App;
