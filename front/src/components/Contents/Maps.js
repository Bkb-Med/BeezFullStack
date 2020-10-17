import React from "react";
import MapEndroits from "./MapEndroit";
import {
  Input,
  Card,
  CardHeader,
  Row,
  Container,
  Button,
  CardBody,
} from "reactstrap";

class Maps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <div className="col">
              <Card className=" shadow">
                <CardHeader className=" border-0">
                  <h3 className=" mb-0 float-left">Gérer vos Endroits</h3>

                  <Button
                    size="sm"
                    color="danger"
                    id="toggler"
                    style={{ marginBottom: "2rem", marginLeft: "48rem" }}
                  >
                    Ajouter
                  </Button>
                </CardHeader>
                <CardBody>
                  <MapEndroits />
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Maps;
