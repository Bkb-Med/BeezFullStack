import React from "react";
import { connect } from "react-redux";
import { getAgents } from "../store/actions/agentAction";
import { putAgent } from "../store/actions/putAgentAction";
import { deleteAgent } from "../store/actions/deleteAgentAction";
import InputAgent from "./InputAgent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// reactstrap components
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
      typemsg: null,
      id: null,
      msg: null,
      cin: null,
      fullName: null,
      email: null,
      cnssNum: null,
      modalmsg: false,
      modal: false,
      edited: false,
      deleted: false,
    };
    this.toggle = this.toggle.bind(this);
    this.togglemsg = this.togglemsg.bind(this);
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

  componentDidMount() {
    this.props.getAgents();
  }

  getPreviousData = (e) => {
    this.setState({
      id: e.id,
      cin: e.cin,
      fullName: e.fullName,
      email: e.email,
      cnssNum: e.cnssNum,
    });
    this.toggle();
  };
  deleteAgent = (e) => {
    this.setState({
      fullName: e.fullName,
      typemsg: "modal-fluid3",
      msg: "Supprimée",
    });
    this.props.deleteAgent(e.id);
    if (this.state.deleted) {
      this.togglemsg();
      this.props.getAgents();
    }
  };
  componentWillReceiveProps(props) {
    this.setState({ deleted: this.props.deleted });
    this.setState({ edited: this.props.edited });
  }
  onClickforSave = () => {
    const agent = {
      id: this.state.id,
      cin: this.state.cin,
      fullName: this.state.fullName,
      email: this.state.email,
      cnssNum: this.state.cnssNum,
    };
    console.log(agent);
    this.props.putAgent(agent);
    this.setState({ typemsg: "modal-fluid2", msg: "Modifiée" });

    if (this.state.edited) {
      this.toggle();
      this.togglemsg();
      this.props.getAgents();
    }
  };

  render() {
    const { agents } = this.props.agents;
    let agentItems = agents.map((e) => {
      return (
        <tr key={e.id}>
          <td scope="row">{e.cin}</td>
          <th>{e.fullName}</th>
          <td>{e.email}</td>
          <td>{e.cnssNum}</td>
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
                    this.deleteAgent(e);
                  }}
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
          <Row className="mt-5">
            <div className="col">
              <Card className=" shadow">
                <CardHeader className=" border-0">
                  <h3 className=" mb-0 float-left">Gérer vos Agents</h3>

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
                        <InputAgent handleTblag={this.props.getAgents} />
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </CardHeader>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  backdrop={false}
                >
                  <ModalHeader>
                    Modifier les informations de l'agent
                  </ModalHeader>
                  <ModalBody>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label>N° CIN </Label>
                          <Input
                            type="text"
                            value={this.state.cin}
                            onChange={(event) => {
                              this.setState({ cin: event.target.value });
                            }}
                          ></Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Nom & Prénom</Label>
                          <Input
                            type="text"
                            value={this.state.fullName}
                            placeholder="Reference"
                            onChange={(event) => {
                              this.setState({ fullName: event.target.value });
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            placeholder="Email de l'agent"
                            onChange={(event) => {
                              this.setState({ email: event.target.value });
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label>N° CNSS</Label>
                          <Input
                            type="text"
                            name="cnss"
                            value={this.state.cnssNum}
                            placeholder="numéro de la cnss"
                            onChange={(event) => {
                              this.setState({ cnssNum: event.target.value });
                            }}
                          />
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
                        Agent : {this.state.fullName} {this.state.msg} avec
                        succée..!
                      </h6>
                    </div>
                  </ModalHeader>
                </Modal>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">N° CIN</th>
                      <th scope="col">Nom et Prénom</th>
                      <th scope="col">Email</th>
                      <th scope="col">CNSS</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>{agentItems}</tbody>
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
    agents: state.agents, //this.props.endroits
    edited: state.Edited,
    deleted: state.Deleted,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    putAgent: (agent) => dispatch(putAgent(agent)),
    getAgents: () => dispatch(getAgents()),
    deleteAgent: (id) => dispatch(deleteAgent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
