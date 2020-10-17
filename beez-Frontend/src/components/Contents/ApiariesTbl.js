import React from "react";
import { connect } from "react-redux";
import { getEndroits } from "../store/actions/endroitsAction";
import { getRuche } from "../store/actions/rucheAction";
import { deleteRuche } from "../store/actions/deleteRuche";

import { putRuche } from "../store/actions/putRuche";
import InputRuche from "./InputRuche";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Input,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Label,
  Col,
  Row,
  Table,
  Container,
  UncontrolledCollapse,
  Button,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
class Tables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationDropDownValue: "Selectionner un Endroit",
      Rdeleted: false,
      Rupdated: false,
      typemsg: null,
      msg: null,
      ENDid: null,
      RCHref: null,
      RCHid: null,
      dateTime: null,
      date: null,
      Time: null,
      modalmsg: false,
      endroit: [],
      modal: false,
      ddclicked: false,
    };
    this.toggle = this.toggle.bind(this);
    this.togglemsg = this.togglemsg.bind(this);
    this.toggletbl = this.toggletbl.bind(this);
  }
  toggletbl() {
    this.setState({
      ddclicked: true,
    });
  }
  togglemsg() {
    this.setState({
      modalmsg: !this.state.modalmsg,
    });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentWillReceiveProps(props) {
    this.setState({
      Rdeleted: this.props.Rdeleted,
      Rupdated: this.props.Rupdated,
    });
  }
  componentDidMount() {
    this.props.getEndroits();
  }
  onClickEndroitHandler = (e) => {
    this.setState({
      locationDropDownValue: e.reference,
      ENDid: e.id,
    });
    this.props.getRuche(e.id);
    this.toggletbl();
  };
  getPreviousData = (e) => {
    this.setState({
      RCHref: e.reference,
      RCHid: e.id,
      dateTime: e.dateTime,
    });
    this.toggle();
  };
  deleteRuche = (e) => {
    this.setState({
      RCHref: e.reference,
      typemsg: "modal-fluid3",
      msg: "Supprimée",
    });
    this.props.deleteRuche(e.id);
    if (this.state.Rdeleted) {
      this.setState({
        endroit: {
          id: this.state.ENDid,
          reference: this.state.locationDropDownValue,
        },
      });
      this.onClickEndroitHandler(this.state.endroit);
      this.togglemsg();
    }
  };
  onClickforSave = () => {
    const ruche = {
      id: this.state.RCHid,
      reference: this.state.RCHref,
      dateTime: this.state.dateTime,
      endroit: {
        id: this.state.ENDid,
        reference: this.state.locationDropDownValue,
      },
    };
    this.setState({ typemsg: "modal-fluid2", msg: "Modifiée" });
    this.props.putRuche(ruche);
    if (this.state.Rupdated) {
      this.setState({
        endroit: {
          id: this.state.ENDid,
          reference: this.state.locationDropDownValue,
        },
      });
      this.onClickEndroitHandler(this.state.endroit);
      this.toggle();
      this.togglemsg();
    }
  };

  formatDateAndTime = (date) => {
    var d = [];
    var t = [];
    d = date?.slice(0, 10).split("-"); //19
    t = date?.slice(11, 19).split(":");
    if (typeof d != "undefined") {
      return (
        d[2] +
        "-" +
        d[1] +
        "-" +
        d[0] +
        "  |  " +
        t[0] +
        ":" +
        t[1] +
        ":" +
        t[2]
      );
    }
  };
  formatMDatetime = (date) => {
    var d = [];

    d = date?.slice(0, 16).split("T"); //19

    if (typeof d != "undefined") {
      return d[0] + "T" + d[1];
    }
  };

  render() {
    const { endroits } = this.props.endroits;

    let endroitsItems = endroits.map((e) => {
      return (
        <DropdownItem key={e.id} onClick={() => this.onClickEndroitHandler(e)}>
          {e.reference}
        </DropdownItem>
      );
    });

    const { ruches } = this.props.ruches;

    let rucheItems = ruches.map((e) => {
      if (this.state.ddclicked === true) {
        return (
          <tr key={e.id}>
            <th scope="row">{e.reference}</th>
            <td>{this.formatDateAndTime(e.dateTime)}</td>
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
                  <FontAwesomeIcon icon={faCogs} />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem
                    onClick={() => {
                      this.getPreviousData(e);
                    }}
                  >
                    Modifier
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      this.deleteRuche(e);
                    }}
                  >
                    Supprimer
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
        );
      } else {
        return null;
      }
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
                  <h3 className="text-white mb-0 float-left">
                    Gérer vos Ruchers
                  </h3>

                  <Button
                    size="sm"
                    color="danger"
                    id="toggler"
                    style={{ marginBottom: "2rem", marginLeft: "48rem" }}
                  >
                    Ajouter
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        <InputRuche
                          handleTable={this.onClickEndroitHandler}
                          {...this.state.locationDropDownValue}
                        />
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
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  backdrop={false}
                >
                  <ModalHeader>
                    Endroit : {this.state.locationDropDownValue}
                  </ModalHeader>
                  <ModalBody>
                    <Row form>
                      <Col md={10}>
                        <FormGroup>
                          <Label for="exampleSelect">Reference </Label>
                          <Input
                            type="text"
                            value={this.state.RCHref}
                            onChange={(event) => {
                              this.setState({ RCHref: event.target.value });
                            }}
                          ></Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={10}>
                        <FormGroup>
                          <Label for="exampleCity">
                            Date et Temps de mise en place{" "}
                          </Label>
                          <Input
                            type="text"
                            value={this.formatMDatetime(this.state.dateTime)}
                            onChange={(event) => {
                              this.setState({ dateTime: event.target.value });
                            }}
                          ></Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      size="sm"
                      color="danger"
                      onClick={() => {
                        this.onClickforSave();
                      }}
                    >
                      Enregistrer
                    </Button>
                  </ModalFooter>
                </Modal>
                <Modal
                  isOpen={this.state.modalmsg}
                  toggle={this.togglemsg}
                  modalClassName={this.state.typemsg}
                  className={this.props.className}
                  backdrop={false}
                >
                  <ModalHeader toggle={this.togglemsg} className="border-0">
                    <div className="d-flex flex-row">
                      <h6 className="text-white">
                        Ruche : {this.state.RCHref} {this.state.msg} avec
                        succée..!
                      </h6>
                    </div>
                  </ModalHeader>
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
                  <tbody>{rucheItems}</tbody>
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
    Rdeleted: state.Rdeleted,
    Rupdated: state.Rupdated,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getRuche: (idEnd) => dispatch(getRuche(idEnd)),
    getEndroits: () => dispatch(getEndroits()),
    deleteRuche: (id) => dispatch(deleteRuche(id)),
    putRuche: (ruche) => dispatch(putRuche(ruche)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
