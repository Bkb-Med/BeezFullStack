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
                Our services include
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
                      not available
                    </CardSubtitle>
                    <CardText>
                      Store all your data in cloud for futher analyzing .
                    </CardText>
                    <CardText>
                      <small className="text-muted">Comming soon.</small>
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
                      Available
                    </CardSubtitle>
                    <CardText>
                      Use machine learning to analyse your data
                      (temperature-weights-traffics) and predict futur action.
                    </CardText>
                    <CardText>
                      <small className="text-muted">
                        Last updated 15 days ago
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
                      Available
                    </CardSubtitle>
                    <CardText>
                      With our handy Dashboard look after your apiaries wherever
                      your are.{" "}
                    </CardText>
                    <CardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
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
                  Thank you for choosing beez-app!
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Stay tuned for any news.
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
                  Follow us
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
