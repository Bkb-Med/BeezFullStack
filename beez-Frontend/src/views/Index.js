import React from "react";

import MainNavbar from "components/Navbars/MainNavbar";

import Login from "components/home/Login";
import Overview from "components/home/Overview";
import CardsFooter from "components/Footers/CardsFooter";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHide: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.myRef = React.createRef();
  }

  hideComponent() {
    this.setState({ showHide: !this.state.showHide });
    //window.scrollTo(0, this.myRef.current.offsetTop + 100);
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }

  render() {
    const { showHide } = this.state;
    return (
      <>
        <MainNavbar handleclick={this.hideComponent} />{" "}
        <div ref={this.myRef}>{showHide && <Login />}</div> <Overview />
        <CardsFooter />
      </>
    );
  }
}

export default Index;
