import React from "react";
import { connect } from "react-redux";
import { getEndroits } from '../store/actions/endroitsAction'
import { getRuche } from '../store/actions/rucheAction'
import { getTemps } from '../store/actions/tempsAction'
import { getTraffics } from '../store/actions/trafficAction'
import {getWeights} from '../store/actions/weightsAction'

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,Col,CardBody,
    CardTitle,
  UncontrolledTooltip,
} from "reactstrap";

class indicators extends React.Component {
   constructor(props) {
    super(props);
   
    this.state = {
    
      locationDropDownValue: "endroit",
      rucheDropDownValue: "ruche",
      
    };
   
  }
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
formatDateAndTime = (date) => {
  var d = []
  var t=[]
  d = date?.slice(0, 10).split("-");//19
  t=date?.slice(11, 19).split(":");
    if (typeof (d) != 'undefined') {
      return d[2] + "-" + d[1] + "-" + d[0]+"  |  "+t[0]+":"+t[1]+":"+t[2]
    }
  };
  formatValue = (v) => {
    if (v <20) {
      return (<Badge color="primary" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          faible
                        </Badge>)
    } else if (v >= 20 && v<35) {
      return (<Badge color="success" className="badge-dot mr-4">
                          <i className="bg-warning" />
                         moyen
                        </Badge>)
    } else if(v>=35){
      return (<Badge color="warning" className="badge-dot mr-4">
                          <i className="bg-warning" />
                         haut
                        </Badge>)
    }
   
  }
   getSensorIdentifiant = (data) => {
    
      var mostRecentDate = new Date(Math.max.apply(null, data.map(e => {
        return new Date(e.dateTime);
      })));
      var mostRecentObject = data.filter(e => {
        var d = new Date(e.dateTime);
        return d.getTime() == mostRecentDate.getTime();
      })[0];
      
      return mostRecentObject;

 }
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
     let idTFsensor = this.getSensorIdentifiant( traffics)
    
    const { temps } = this.props.temps
    let idTMsensor = this.getSensorIdentifiant(temps)
    const { weights } = this.props.weights
    let idWGsensor = this.getSensorIdentifiant( weights)
    let TMrow = temps.map(e => {
      return ( <tbody key={e.id}>
                  <tr>
                      
          <td>{this.formatDateAndTime(e.dateTime)}</td>
          <th scope="row">
                        <span className="mb-0 text-sm">
                             {e.value}
                            </span>
                         </th>
                      <td>
                         {this.formatValue(e.value)}
                        </td>
                    </tr></tbody>
      );
    });
    let TRrow = traffics.map(e => {
      return ( <tbody key={e.id}>
                  <tr>
                      
          <td>{this.formatDateAndTime(e.dateTime)}</td>
          <th scope="row">
                        <span className="mb-0 text-sm">
                             {e.value}
                            </span>
                         </th>
                      <td>
                         {this.formatValue(e.value)}
                        </td>
                    </tr></tbody>
      );
    });
    let WGrow = weights.map(e => {
      return ( <tbody key={e.id}>
                  <tr>
                      
          <td>{this.formatDateAndTime(e.dateTime)}</td>
          <th scope="row">
                        <span className="mb-0 text-sm">
                             {e.value}
                            </span>
                         </th>
                      <td>
                         {this.formatValue(e.value)}
                        </td>
                    </tr></tbody>
      );
    });
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
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Table des Températures </h3><h5>Identifiant du capteur :{idTMsensor?.reference}</h5>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Date/Temps</th>
                      <th scope="col">Valeur</th>
                      <th scope="col">Etat</th>
                      
                    </tr>
                  </thead>
                  {TMrow}
                </Table>
                
              </Card>
            </div>
          </Row>
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Table des Traffics </h3><h5 className="text-white mb-0" >Identifiant du capteur :{idTFsensor?.reference}</h5>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Date/Temps</th>
                      <th scope="col">Valeur</th>
                      <th scope="col">Etat</th>
                      
                    </tr>
                  </thead>
                  {TRrow}
                  </Table>
              </Card>
            </div>
          </Row>
          {/*weight table*/}
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Table des Poids </h3><h5>Identifiant du capteur :{idWGsensor?.reference}</h5>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Date/Temps</th>
                      <th scope="col">Valeur</th>
                      <th scope="col">Etat</th>
                      
                    </tr>
                  </thead>
                  {WGrow}
                </Table>
                
              </Card>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(indicators);

