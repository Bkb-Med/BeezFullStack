import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import {
  faChartBar,
  faChartPie,
  faUsers,
  faPercent,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts";

class maindash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1",
    });
  };
  render() {
    return (
      <>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card
                className="card-stats  mb-xl-0"
                style={{
                  width: "72rem",
                  backgroundColor: "#445379",
                }}
              >
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h6"
                        className=" text-white text-muted mb-0"
                      >
                        Choose an apiary :{"  "}
                        <UncontrolledDropdown
                          setActiveFromChild
                          className="ml-3"
                        >
                          <DropdownToggle
                            size="sm"
                            className="cursor-pointer"
                            caret
                          >
                            Location
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem tag="a" href="/blah" active>
                              MEllila centre
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown
                          setActiveFromChild
                          className="ml-3"
                        >
                          <DropdownToggle
                            size="sm"
                            className="cursor-pointer"
                            caret
                          >
                            Reference
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem tag="a" href="/blah" active>
                              R0256
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>{" "}
                      </CardTitle>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mt-1" fluid>
          <Row className="mt-2 mb-4">
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h6"
                        className="text-uppercase text-muted mb-0"
                      >
                        Traffic
                      </CardTitle>
                      <span className="h4 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faChartBar} />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <FontAwesomeIcon icon={faArrowUp} /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h6"
                        className="text-uppercase text-muted mb-0"
                      >
                        New users
                      </CardTitle>
                      <span className="h4 font-weight-bold mb-0">2,356</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faChartPie} />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-danger mr-2">
                      <FontAwesomeIcon icon={faArrowDown} />
                      3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last week</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h6"
                        className="text-uppercase text-muted mb-0"
                      >
                        Sales
                      </CardTitle>
                      <span className="h4 font-weight-bold mb-0">924</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-warning mr-2">
                      <FontAwesomeIcon icon={faArrowDown} />
                      1.10%
                    </span>{" "}
                    <span className="text-nowrap">Since yesterday</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h6"
                        className="text-uppercase text-muted mb-0"
                      >
                        Performance
                      </CardTitle>
                      <span className="h4 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faPercent} />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <FontAwesomeIcon icon={faArrowUp} /> 12%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="mb-5 mb-xl-0 " xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h5 className="text-white mb-0">Sales value</h5>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1,
                            })}
                            href="#pablo"
                            onClick={(e) => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2,
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={(e) => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Week</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={(e) => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Total orders</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default maindash;
