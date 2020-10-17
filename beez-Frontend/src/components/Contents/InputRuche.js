import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormText,
  Col,
  Row,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { postRuche } from "../store/actions/postRuche";
import { getEndroits } from "../store/actions/endroitsAction";

class InputRuche extends React.Component {
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
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentWillReceiveProps(props) {
    this.setState({ SENDED: this.props.Rsended });
  }
  componentDidMount() {
    this.props.getEndroits();
  }
  onClickforSave = () => {
    const ruche = {
      reference: this.state.RCHreference,
      dateTime: this.state.Date + "T" + this.state.Time,
      endroit: {
        id: this.state.ENDid,
      },
    };
    this.props.postRuche(ruche);
    if (this.state.SENDED) {
      this.setState({
        endroit: {
          id: this.state.ENDid,
          reference: "Selectionner un Endroit",
        },
      });
      this.props.handleTable(this.state.endroit);
      this.toggle();
    }
  };

  render() {
    const { endroits } = this.props.endroits;
    let endroitsItemsADD = endroits.map((e) => {
      return (
        <option key={e.id} value={e.id}>
          {e.reference}
        </option>
      );
    });
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Choisir un Endroit : </Label>
              <Input
                type="select"
                onChange={(event) => {
                  this.setState({ ENDid: event.target.value });
                }}
              >
                {endroitsItemsADD}
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Reference :</Label>
              <Input
                type="text"
                placeholder="Reference"
                onChange={(event) => {
                  this.setState({ RCHreference: event.target.value });
                }}
              />
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
                onChange={(event) => {
                  this.setState({ Date: event.target.value });
                }}
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
                onChange={(event) => {
                  this.setState({ Time: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="align-right">
          <Button
            color="primary"
            size="sm"
            onClick={() => this.onClickforSave()}
          >
            Enregistrer
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            modalClassName=" modal-fluid"
            backdrop={false}
          >
            <ModalHeader toggle={this.toggle} className="border-0">
              <div className="d-flex flex-row">
                <h6 className="text-white">
                  Ruche : {this.state.RCHreference} ajoutée avec succée..!
                </h6>
              </div>
            </ModalHeader>
          </Modal>
        </div>
      </Form>
    );
  }
}
function mapStateToProps(state) {
  return {
    endroits: state.endroits,
    Rsended: state.Rsended,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getEndroits: () => dispatch(getEndroits()),
    postRuche: (ruche) => dispatch(postRuche(ruche)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputRuche);
