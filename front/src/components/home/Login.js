import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-white">
                  Beez App
                  <span className="text-white">a simple web application</span>
                </h3>
                <p className="lead text-white">
                  Powerful website to monitor your data and manage your apiaries
                  wherever they are.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="btn-white"
                    color="default"
                    to="/register-page"
                    tag={Link}
                  >
                    Learn More
                  </Button>
                </div>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="">
                  <Card className="bg-gradient-lighter border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className=" btn-icon btn-signin-website"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/facebook.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Facebook</span>
                        </Button>
                        <Button
                          className="btn-icon btn-signin-website"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form">
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.emailFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              onFocus={(e) =>
                                this.setState({ emailFocused: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames({
                            focused: this.state.passwordFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onFocus={(e) =>
                                this.setState({ passwordFocused: true })
                              }
                              onBlur={(e) =>
                                this.setState({ passwordFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckLogin2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckLogin2"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button className="my-4 btn-custom">Sign in</Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
