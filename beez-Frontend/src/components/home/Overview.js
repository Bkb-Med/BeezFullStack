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
                <h3 className="text-primary font-weight-900  mb-1">Aperçu</h3>
                <p className="text-dark">Application Web simple et sécurisée</p>
                <p className="lead text-dark">
                  Notre tableau de bord fournit plusieurs services que vous pouvez utiliser pour
                  surveiller vos données et fournit un modèle simple pour voir ce que
                  se passe dans vos ruchers en temps réel.
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
