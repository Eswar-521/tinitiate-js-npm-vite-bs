import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Tinitiate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Home Dropdown */}
            <NavDropdown title="Home Pages" id="home-dropdown">
              <NavDropdown.Item as={Link} to="/">Home 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/home2">Home 2</NavDropdown.Item>
              {/* You can add more home pages here */}
            </NavDropdown>

            <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

