import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Youtube from "./media/Youtube";

function Hiring() {
  return (
    <section className="hiringSection">
      <Container>
        <h1>We Are Hiring!</h1>
        <Row>
          <Col>
            <Youtube />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="hiringLink justify-content-center">
              Start or Boost your career at Senja, Email us your CV{" "}
              <a href="mailto:apply@senja.co.uk"> HERE!</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hiring;
