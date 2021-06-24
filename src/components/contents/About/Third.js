import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";

function Third() {
  const skills = [
    { set: "ReactJS, NodeJS, AngularJS" },
    { set: "HTML, Laravel, Wordpress" },
    { set: "Obj-C, Swift, Java, ReactNative" },
    { set: "Python, Unity3D" },
    { set: "AfterEffects, Apple Motion" },
    { set: "Customer Support" },
  ];

  const team = [
    { set: "Web Developers" },
    { set: "Mobile Developers" },
    { set: "SAP Consultants" },
    { set: "Motion Designers" },
    { set: "Video Producers" },
  ];

  const project = [
    { set: "Offshore Development" },
    { set: "Managed & Self Managed" },
    { set: "Ad-hoc Prototyping & MVP'ing" },
    { set: "Product Development" },
    { set: "Planning & Consulting" },
  ];

  const year = [
    { set: "IT Competency" },
    { set: "Team Building & Up-Skilling" },
    { set: "Handling wide range of clients" },
    { set: "Challenges & Innovation" },
    { set: "VC funded product spin-offs" },
  ];
  return (
    <div className="thirdSection">
      <Container>
        <Row>
          <div className="col-md-4 col-md-push-8 col-xs-12">
            <h1>We Work</h1>
          </div>
          <div className="col-md-8 col-md-push-4 col-xs-12">
            <hr
              style={{
                color: "#fff",
                backgroundColor: "#fff",
                height: 5,
              }}
            />
            <div className="row textFle">
              <Col>
                <h1 className="strokeText">20+</h1>
              </Col>
              <Col>
                <p className="textFlex">Skills</p>
              </Col>
              <Col>
                <ListGroup>
                  {skills.map((skills) => (
                    <li className="aboutList">{skills.set}</li>
                  ))}
                </ListGroup>
              </Col>
            </div>
            <hr
              style={{
                color: "#fff",
                backgroundColor: "#fff",
                height: 5,
              }}
            />
            <div className="row textFle">
              <hr />
              <Col>
                <h1 className="strokeText">50+</h1>
              </Col>
              <Col>
                <p className="textFlex">Teams</p>
              </Col>
              <Col>
                <ListGroup>
                  {team.map((team) => (
                    <li className="aboutList">{team.set}</li>
                  ))}
                </ListGroup>
              </Col>
            </div>
            <hr
              style={{
                color: "#fff",
                backgroundColor: "#fff",
                height: 5,
              }}
            />
            <div className="row textFle">
              <hr />
              <Col>
                <h1 className="strokeText">300+</h1>
              </Col>
              <Col>
                <p className="textFlex">Projects</p>
              </Col>
              <Col>
                <ListGroup>
                  {project.map((project) => (
                    <li className="aboutList">{project.set}</li>
                  ))}
                </ListGroup>
              </Col>
            </div>
            <hr
              style={{
                color: "#fff",
                backgroundColor: "#fff",
                height: 5,
              }}
            />
            <div className="row textFle">
              <hr />
              <Col>
                <h1 className="strokeText">10+</h1>
              </Col>
              <Col>
                <p className="textFlex">Years</p>
              </Col>
              <Col>
                <ListGroup>
                  {year.map((year) => (
                    <li className="aboutList">{year.set}</li>
                  ))}
                </ListGroup>
              </Col>
            </div>
            <hr
              style={{
                color: "#fff",
                backgroundColor: "#fff",
                height: 5,
              }}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Third;
