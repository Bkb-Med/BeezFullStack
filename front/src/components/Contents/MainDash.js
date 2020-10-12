import React from "react";
import { connect } from "react-redux";
import { getEndroits } from '../store/actions/endroitsAction'
import { getRuche } from '../store/actions/rucheAction'
import { getTemps } from '../store/actions/tempsAction'
import { getTraffics } from '../store/actions/trafficAction'
import {getWeights} from '../store/actions/weightsAction'



import Chart from "chart.js";

import { Line, Bar } from "react-chartjs-2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  Card,
  CardHeader,
  CardBody,
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

  faMapSigns,
  
  faPercent,
  faThermometerQuarter,
  faHourglassEnd
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
      locationDropDownValue: "endroit",
      rucheDropDownValue: "ruche",
      
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
  componentDidMount() {
    this.props.getEndroits()
  }
 
  onClickEndroitHandler = (e) => {
    this.setState({ locationDropDownValue: e.reference });
    this.props.getRuche(e.id)
    
  };
  onClickRucheHandler = (e) => {
    this.setState({ rucheDropDownValue: e.reference });
    this.props.getTraffics(e.id)
    this.props.getTemps(e.id)
    this.props.getWeights(e.id)
   
  };
  filterlastValue = (data)=> {
      var mostRecentDate = new Date(Math.max.apply(null, data.map(e => {
        return new Date(e.dateTime);
      })));
      var mostRecentObject = data.filter(e => {
        var d = new Date(e.dateTime);
        return d.getTime() == mostRecentDate.getTime();
      })[0];
      
      return mostRecentObject;

 }
  formatDateAndTime = (date) => {
    var d = []
    d = date?.slice(0, 10).split("-");
    if (typeof (d) != 'undefined') {
      return d[2] + "/" + d[1] + "/" + d[0]
    }
  };
    
  render() {
   
    const { endroits } = this.props.endroits
    
    let endroitsItems = endroits.map(e => {
      return (
        <DropdownItem key={e.id} onClick={() => this.onClickEndroitHandler(e)}>
          {e.reference}
        </DropdownItem>
      );
    });
    const { ruches } =this.props.ruches
    
     let rucheItems= ruches.map((e) => {
      return (
        <DropdownItem key={e.id} onClick={() => this.onClickRucheHandler(e)}>
          {e.reference}
        </DropdownItem>
      );
     });
    const { traffics } = this.props.traffics
    const { temps } = this.props.temps
    const {weights}=this.props.weights
    let lastTFvalue = this.filterlastValue(traffics)
    let lastTMvalue = this.filterlastValue(temps)
    let lastWGvalue = this.filterlastValue(weights)
    
    let dtTFvalue = this.formatDateAndTime(lastTFvalue?.dateTime)
    let dtTMvalue = this.formatDateAndTime(lastTMvalue?.dateTime)
    let dtWGvalue = this.formatDateAndTime(lastWGvalue?.dateTime)
    const dataTM = {
    
      labels: temps.map(e => {
        return this.formatDateAndTime(e.dateTime)
      }),
      datasets: [
        {
        
          data: temps.map(e => {
        return e.value
      }),
        },
      ],
    };
    const dataTF = {
    
      labels: traffics.map(e => {
        return this.formatDateAndTime(e.dateTime)
      }),
      datasets: [
        {
        
          data: traffics.map(e => {
        return e.value
      }),
        },
      ],
    };
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
                        Selectionner une Ruche :{"  "}
                        <UncontrolledDropdown
                          setActiveFromChild
                          className="ml-3"
                        >
                          <DropdownToggle
                            size="sm"
                            className="cursor-pointer text-lowercase text-capitalize"
                            caret
                          >
                            {this.state.locationDropDownValue}
                          </DropdownToggle>
                          <DropdownMenu>{endroitsItems}</DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown
                          setActiveFromChild
                          className="ml-3"
                        >
                          <DropdownToggle
                            size="sm"
                            className="cursor-pointer text-lowercase text-capitalize"
                            caret
                          >
                            {this.state.rucheDropDownValue}
                          </DropdownToggle>
                          <DropdownMenu>{rucheItems}</DropdownMenu>
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
                      <span className="h4 font-weight-bold mb-0">
                        {" "}
                        {lastTFvalue?.value}
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faMapSigns} />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm ">
                    <span className="text-nowrap ">
                      <small> Dernière mise à jour :</small>
                    </span>{" "}
                    <br></br>
                    <span className="d-flex text-success mr-2 text-right">
                      {dtTFvalue}
                    </span>
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
                        Température
                      </CardTitle>
                      <span className="h4 font-weight-bold mb-0">{lastTMvalue?.value}</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faThermometerQuarter} />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm ">
                    <span className="text-nowrap ">
                      <small> Dernière mise à jour :</small>
                    </span>{" "}
                    <br></br>
                    <span className="d-flex text-success mr-2 text-right">
                      {dtTMvalue}
                    </span>
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
                        Poids
                      </CardTitle>
                      <span className="h4 font-weight-bold mb-0">{lastWGvalue?.value}</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={  faHourglassEnd} />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm ">
                    <span className="text-nowrap ">
                      <small> Dernière mise à jour :</small>
                    </span>{" "}
                    <br></br>
                    <span className="d-flex text-success mr-2 text-right">
                      {dtWGvalue}
                    </span>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
        </Container>
        <Container className="mt-2 mb-auto" fluid>
            <Row xs="10">
            <Col className="mb-5 mb-xl-0 " xl="12">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Historique
                      </h6>
                      <h5 className="text-white mb-0">Température</h5>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={dataTM}
                      options={chartExample1.options}
                      getDatasetAtEvent={(e) => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="12">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                     
                      <h2 className="mb-0">Traffic</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Bar
                      data={dataTF}
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
function mapStateToProps(state) {
  return {
    endroits: state.endroits, //this.props.endroits
    ruches: state.ruches,
    temps: state.temps,
    weights: state.weights,
    traffics: state.traffics,
    
        };
}
const mapDispatchToProps = dispatch => {
  return {
    getRuche: idEnd => dispatch(getRuche(idEnd)),
    getEndroits: () => dispatch(getEndroits()), 
    getTemps: idRch => dispatch(getTemps(idRch)),
    getTraffics: idRch => dispatch(getTraffics(idRch)),
    getWeights:idRch => dispatch(getWeights(idRch))
   
  };
};
maindash.defaultProps = {
    recentTrafic: []
};
export default connect(mapStateToProps, mapDispatchToProps)(maindash);
