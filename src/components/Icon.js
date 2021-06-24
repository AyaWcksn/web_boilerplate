import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Icon() {
  React.useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("icon").style.fontSize = "150%";
      } else {
        document.getElementById("icon").style.fontSize = "300%";
      }
    }
  });
  return (
    <Navbar fixed="top" className="navBar">
      <Nav className="icon" id="icon">
        <h1 id="icon">Senja</h1>
      </Nav>
    </Navbar>
  );
}

export default Icon;
