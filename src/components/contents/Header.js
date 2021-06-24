import React from "react";
import { Row, Container } from "react-bootstrap";

function Header() {
  return (
    <section className="headerSection">
      <Container>
        <Row>
          <div className="col-9">
            <div className="col-lg-7">
              <h1 className="headerText">
                We Bring Your<span className="strokeTxt"> Ideas</span> To
                <span className="strokeTxt"> Life</span>
              </h1>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
