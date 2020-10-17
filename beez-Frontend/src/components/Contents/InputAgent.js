import React from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, Col, Row, Button } from 'reactstrap';
import { connect } from "react-redux";

import { getAgents } from '../store/actions/agentAction'
import { postAgent } from '../store/actions/postAgentAction'


class InputAgent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cin: null,
      fullName: null,
      email: null,
      cnssNum: null,
      SENDED: false,
      modal: false,

    };
    this.toggle = this.toggle.bind(this);
  };


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  componentWillReceiveProps(props) {
    this.setState({ SENDED: this.props.QueryState })
  }

  onClickforSave = () => {
    const agent = {
      cin: this.state.cin,
      fullName: this.state.fullName,
      email: this.state.email,
      cnssNum: this.state.cnssNum,
    };
    this.props.postAgent(agent);

    if (this.state.SENDED) {
      this.toggle();
      this.props.handleTblag();
    };
  }

  render() {

    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label >N° CIN </Label>
              <Input type="text"
                placeholder="numéro de CIN"
                onChange={(event) => { this.setState({ cin: event.target.value }) }}>

              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label >Nom & Prénom</Label>
              <Input type="text" placeholder="nom de l'agent" onChange={(event) => { this.setState({ fullName: event.target.value }) }} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label >Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleDate"
                placeholder="Email de l'agent"
                onChange={(event) => { this.setState({ email: event.target.value }) }}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>N° CNSS</Label>
              <Input
                type="text"
                name="cnss"

                placeholder="numéro de la cnss"
                onChange={(event) => { this.setState({ cnssNum: event.target.value }) }}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="align-right">
          <Button color="primary" size="sm" onClick={() => this.onClickforSave()}>Enregistrer</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} modalClassName=" modal-fluid" className={this.props.className} backdrop={false}>
            <ModalHeader toggle={this.toggle} className="border-0" >
              <div className="d-flex flex-row">
                <h6 className="text-white">
                  Agent : {this.state.fullName} ajoutée avec succée..!</h6>
                                               </div>
            </ModalHeader>

          </Modal>
        </div>
      </Form>
    );
  };
}
function mapStateToProps(state) {
  return {
    agents: state.agents,
    QueryState: state.QueryState
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getAgents: () => dispatch(getAgents()),

    postAgent: agent => dispatch(postAgent(agent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputAgent);