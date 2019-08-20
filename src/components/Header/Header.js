import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.headerTitle = "Products list page";    
  }

  setTitle(){
    if(this.props.stateId === 0){
      this.headerTitle = "Products list page";
    } else{
      this.headerTitle = "Shopping cart page";
    }
    return this.headerTitle;
  }

  render(){
    let title = this.setTitle();

    return (
      <header className="header">
        <h1 className="header-title"> {title} </h1>
      </header>
    );
  }
}

export default Header;
