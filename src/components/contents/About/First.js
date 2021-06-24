import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";

function First() {
  const strategy = [
    { name: "DIgital Strategy" },
    { name: "Content Strategy" },
    { name: "Responsive Development" },
    { name: "Web Design" },
    { name: "Motion Design" },
    { name: "Data Analyst" },
    { name: "Brand Experience" },
  ];
  const development = [
    { name: "Design Direction" },
    { name: "Web & Mobile UI" },
    { name: "Creative Concepts & Ideas" },
    { name: "User Experience Design" },
    { name: "Branding & Identity" },
    { name: "Websites & Web Applications" },
    { name: "E-Commerce" },
  ];
  return (
    <div className="firstSection">
      <Container>
        <Row>
          <div className="col-md-4 col-md-push-8 col-xs-12">
            <h1 className="aboutTitle">Who Are We</h1>
          </div>
          <div className="col-md-8 col-md-push-4 col-xs-12">
            <p>
              Senja offers fast and affordable IT Services and bespoke Web- and
              App-Development. Our highly agile team will turn your vision into
              reality in budget and time. With over 7 years of experience and
              hundreds of successfully finished and running projects we are able
              to bring your product or service to Product-Market-Fit while
              providing you with in-depth advise on Go-To-Market-Strategies and
              effective, data-driven roadmapping.
            </p>
            <div className="firstList">
              <Row>
                <Col className="col-md-4 col-md-push-8 col-xs-12">
                  <h5>Strategy</h5>
                  <ListGroup>
                    {strategy.map((strategy) => (
                      <li className="listText">{strategy.name}</li>
                    ))}
                  </ListGroup>
                </Col>
                <Col className="col-md-8 col-md-push-4 col-xs-12">
                  <h5>Development</h5>
                  <ListGroup>
                    {development.map((development) => (
                      <li className="listText">{development.name}</li>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default First;
