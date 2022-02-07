import React from "react";
import { Container, Navbar, Nav, } from "react-bootstrap";

function NavBar() {
  return (
<>
  <Navbar>
      <Container>
      <Navbar.Brand to="/home">COMPANY </Navbar.Brand>
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
