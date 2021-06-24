import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Wonder() {
  return (
    <div className="wonderSection">
      <Container>
        <Row>
          <Col>
            <h1>We Wonder</h1>
          </Col>
          <Col>
            <a href=" https://www.joinwonder.com">
              <img src={require("../../assets/img/utilities/wonder.png")} />
            </a>
          </Col>
          <Col>
            <h1>We Wonder</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Wonder;
