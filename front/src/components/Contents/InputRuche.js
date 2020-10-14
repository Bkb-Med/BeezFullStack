import React ,{ useState } from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter,FormText ,Col, Row, Button} from 'reactstrap';
import { connect } from "react-redux";

import { getEndroits } from '../store/actions/endroitsAction';
import Axios from 'components/Axios';




class InputRuche  extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {

            RCHreference: null,
            Date: null,
            Time: null,
            ENDid: 1,
           SENDED: false,
      modal: false,
            endroit: [],
         };
        this.toggle = this.toggle.bind(this);  
  };
  

 toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

   componentDidMount() {
    this.props.getEndroits()
  }
  onClickforSave = () => {
   
    const store = JSON.parse(localStorage.getItem('login'));
    const ruche = {
      reference: this.state.RCHreference,
      dateTime: this.state.Date + "T" + this.state.Time,
      endroit: {
        id: this.state.ENDid,
       
      }
    };

       /* 'content-type': 'application/json',
        'Accept': 'application/json',*/
     
    try {
     
      console.log(store.token)
       fetch('http://localhost:8080/add/ruche',{
        method: "POST",
         headers: {
          'Authorization': `bearer ${store.token}`,
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(ruche)}
       ).then(res => {
            this.setState({
              endroit: {
                id: this.state.ENDid,
                reference: "Selectionner un Endroit"
              } })
         this.props.handleTable(this.state.endroit);
         this.toggle();
       })
    
     
    
 
    } catch (e) {
      console.log(e)
    }
  }
   
 
   
 
  render() {
    const { endroits } = this.props.endroits
    let endroitsItemsADD = endroits.map(e => {
      return (
        
            <option key={e.id} value={e.id}>{e.reference}</option>
           
      );
    });
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect">Choisir un Endroit : </Label>
              <Input type="select"
                onChange={(event) => { this.setState({ ENDid: event.target.value }) }}> 
                {endroitsItemsADD}
               </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Reference :</Label>
              <Input type="text"  placeholder="Reference" onChange={(event) => { this.setState({ RCHreference: event.target.value }) }}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleDate">Date de mise en place :</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                onChange={(event) => { this.setState({ Date: event.target.value }) }}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleTime">Temps</Label>
              <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="time placeholder"
                onChange={(event) => { this.setState({ Time: event.target.value }) }}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="align-right">
          <Button color="primary" size="sm" onClick={() => this.onClickforSave()}>Enregistrer</Button>
           <Modal isOpen={this.state.modal} toggle={this.toggle}  modalClassName=" modal-fluid" className={this.props.className} backdrop={false}>
           
            <ModalBody>
              <div className="d-flex flex-row">
              <h6 className="text-light">
                  Ruche : {this.state.RCHreference} ajoutée avec succée..!</h6></div>
              <div className="d-flex flex-row-reverse mt-0">
                <Button color="secondary" onClick={this.toggle} size="sm" >Cancel</Button>
                </div>
            </ModalBody>
            
              
             
            
          </Modal>
        </div>
      </Form>
    );
  };
}
function mapStateToProps(state) {
  return {
    endroits: state.endroits, //this.props.endroits
   
        };
}
const mapDispatchToProps = dispatch => {
  return {
     getEndroits: () => dispatch(getEndroits()), 
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputRuche);