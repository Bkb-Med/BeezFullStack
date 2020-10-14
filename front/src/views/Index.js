import React from "react";

import MainNavbar from "components/Navbars/MainNavbar";

import Login from "components/home/Login";
import Overview from "components/home/Overview";
import CardsFooter from "components/Footers/CardsFooter";

class Index extends React.Component {
    constructor(props) {
    super(props);
   
    this.state = {
     
      showHide: true,
      
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent() {
        this.setState({ showHide: !this.state.showHide });
      
    }
  
  render() {
     const { showHide } = this.state;
    return (
      <>
        <MainNavbar handleclick={this.hideComponent} />  {showHide && (<Login />)} <Overview />
      <CardsFooter />
      </>
    );
  }
}

export default Index;

    
 