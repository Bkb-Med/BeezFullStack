import React from "react";
import { connect } from "react-redux";
import { getEndroits } from '../store/actions/endroitsAction'
import { getRuche } from '../store/actions/rucheAction'
import InputRuche from './InputRuche'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// reactstrap components
import {
  Badge,Input,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup, Label,
 Col, Row, 
  Table,
  Container,
 UncontrolledCollapse, Button, CardBody,InputGroup,Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import {
  
  faCogs,
  
} from "@fortawesome/free-solid-svg-icons";
class Tables extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      locationDropDownValue: "Selectionner un Endroit",
      ENDid:null ,
      RCHref:null ,
      RCHid: null,
      dateTime:null,

      modal: false
         };
          this.toggle = this.toggle.bind(this); 
  }
  
 toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
   componentDidMount() {
    this.props.getEndroits()
     }
  onClickEndroitHandler = (e) => {
    this.setState({
      locationDropDownValue: e.reference,
      ENDid:e.id});
    this.props.getRuche(e.id)
    
  };
  getPreviousData = (e) => {
    this.setState({
      
      RCHref:e.reference ,
      RCHid: e.id,
      dateTime: e.dateTime,
    });
    console.log(this.state.RCHref)
    this.toggle();


  }
  deleteRuche = (e) => {
    const store = JSON.parse(localStorage.getItem('login'));
    const ruche = {
      id:this.state.RCHid,
      reference: this.state.RCHref,
      dateTime: this.state.dateTime,
      endroit: {
        id: this.state.ENDid,
        reference:this.state.locationDropDownValue,
      }
    };

       /* 'content-type': 'application/json',
        'Accept': 'application/json',*/
     
    try {
     
     
       fetch(`http://localhost:8080/delete/ruche/${e.id}`,{
        method: "DELETE",
         headers: {
          'Authorization': `bearer ${store.token}`,
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(ruche)}
       ).then(res => {
          console.log("done")
         console.log("message", res)
        
       })
    
     
    
 
    } catch (e) {
      console.log(e)
    }


  }
  onClickforSave = () => {
   
    const store = JSON.parse(localStorage.getItem('login'));
    const ruche = {
      id:this.state.RCHid,
      reference: this.state.RCHref,
      dateTime: this.state.dateTime,
      endroit: {
        id: this.state.ENDid,
        reference:this.state.locationDropDownValue,
      }
    };

       /* 'content-type': 'application/json',
        'Accept': 'application/json',*/
     
    try {
     
   
       fetch('http://localhost:8080/update/ruche',{
        method: "PUT",
         headers: {
          'Authorization': `bearer ${store.token}`,
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(ruche)}
       ).then(res => {
          console.log("done")
         console.log("message", res)
         this.toggle();
       })
    
     
    
 
    } catch (e) {
      console.log(e)
    }
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
         <tr key={e.id}>
                      <th scope="row">
                       
                              {e.reference}
                           
                      </th>
                      <td>{e.dateTime}</td>

                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <FontAwesomeIcon icon={ faCogs} />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              onClick={() => { this.getPreviousData(e)}}
                            >
                              Modifier
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => { this.deleteRuche(e)}}
                            >
                              Supprimer
                            </DropdownItem>
                            
                          </DropdownMenu>
                        </UncontrolledDropdown>
           </td>
           
                    </tr>
       
      );
     });
    return (
      <>
        {/* Page content */}
        <Container className="mt--7" fluid>
          
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0 float-left">Gérer vos Ruches</h3>
                  
                   <Button  size="sm" color="danger" id="toggler" style={{ marginBottom: '2rem',marginLeft:'48rem' }}>
                   Ajouter
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        <InputRuche {...this.state.locationDropDownValue} />
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <UncontrolledDropdown
                          setActiveFromChild
                          className="ml-3 mt-3"
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
                        
                </CardHeader>
                <Modal isOpen={this.state.modal} toggle={this.toggle}   backdrop={false}>
                  <ModalHeader>
                    Endroit : {this.state.locationDropDownValue}
                  </ModalHeader>
                  <ModalBody>
                    <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleSelect">Reference </Label>
                          <Input type="text"
                            value={this.state.RCHref}
                              onChange={(event) => { this.setState({ RCHref: event.target.value }) }}> 
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleCity">Date et temps </Label>
                          <Input type="text" value={this.state.dateTime} onChange={(event) => { this.setState({ dateTime: event.target.value }) }}>
                              </Input>
                          </FormGroup>
                        </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button size="sm" color="danger" onClick={() => { this.onClickforSave() }}>Enregistrer</Button>
                  </ModalFooter>
          </Modal>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Reference</th>
                      <th scope="col">Date et Temps de mise en place</th>
                  
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                   {rucheItems}
                   
                  </tbody>
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
   
    
        };
}
const mapDispatchToProps = dispatch => {
  return {
    getRuche: idEnd => dispatch(getRuche(idEnd)),
    getEndroits: () => dispatch(getEndroits()), 
  
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
