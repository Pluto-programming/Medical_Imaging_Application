import React from "react";
import { Container, Navbar, Nav, } from "react-bootstrap";

import './NavBar.style.scss';

function NavBar() {
  return (
<>
  <Navbar className="Navbar">
      <Container>
      <Navbar.Brand className="Navbar-brand" to="/home">Medical Imaging &reg; </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="AllReports">All Reports</Nav.Link>
        <Nav.Link href="SignIn">Sign In</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
</>
  )
}
export default NavBar;
