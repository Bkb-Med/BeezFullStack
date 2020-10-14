/*eslint-disable*/
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
  CardDeck,
  UncontrolledTooltip,
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container className="container-lg">
            <Row>
              <h3 className="text-primary font-weight-900 mb-6">              
               Nos services comprennent
              </h3>

              <CardDeck>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    alt="..."
                    src={require("../../assets/img/services/cloud.svg")}
                  />

                  <CardBody>
                    <CardTitle>Cloud Storage</CardTitle>
                    <CardSubtitle className="card-notav-text">          
                         indisponible
                    </CardSubtitle>
                    <CardText>
                      Stockez toutes vos données dans le cloud pour une analyse plus approfondie.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Bientôt disponible.</small>
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    alt="..."
                    src={require("../../assets/img/services/analyze.svg")}
                  />
                  <CardBody>
                    <CardTitle>Data Analytics</CardTitle>
                    <CardSubtitle className="card-av-text">
                        Disponible
                    </CardSubtitle>
                    <CardText>
                      Utilisez l'apprentissage automatique pour analyser vos données
                      (température-poids-trafics) et prédire l'action future.
                    </CardText>
                    <CardText>
                      <small className="text-muted">          
                         Dernière mise à jour il y a 15 jours
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    alt="..."
                    src={require("../../assets/img/services/remote.svg")}
                  />
                  <CardBody>
                    <CardTitle>Business Intelligence</CardTitle>
                    <CardSubtitle className="card-av-text">
                     Disponible
                    </CardSubtitle>
                    <CardText>
                     Avec notre tableau de bord pratique, prenez soin de vos ruchers où que vous soyez
                      tu es.{" "}
                    </CardText>
                    <CardText>
                      <small className="text-muted">
                        Dernière mise à jour il y a 3 minutes
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
              </CardDeck>
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">               
                       Merci d'avoir choisi beez-app!
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Restez à l'écoute pour toute nouvelle.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Suivez nous
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="https://dribbble.com"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-dribbble" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a href="https://http://ensias.um5.ac.ma/" target="_blank">
                    ENSIAS
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="http://ensias.um5.ac.ma/article/master-internet-des-objets-logiciel-et-analytique-miola"
                      target="_blank"
                    >
                      MIOLA
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="http://ensias.um5.ac.ma/" target="_blank">
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="http://ensias.um5.ac.ma/" target="_blank">
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/" target="_blank">
                      MIT License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
