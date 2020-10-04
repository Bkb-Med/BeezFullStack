import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="has-cards">
          <Container className="container-lg py-lg-9">
            <Row>
              {" "}
              <CardImg
                width="100%"
                height="100%"
                alt="..."
                src={require("../../assets/img/iotconnect.png")}
              />
              <Col>
                <h3 className="text-primary font-weight-900  mb-1">Overview</h3>
                <p className="text-dark">Easy and Secure web application</p>
                <p className="lead text-dark">
                  Our dashboard provide several services that you can use to
                  monitor your data, and it provide an easy template to see what
                  happening in your apiaries in real time.
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
