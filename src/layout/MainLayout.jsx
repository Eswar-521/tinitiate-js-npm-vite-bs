import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">My Courses</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
              <Nav.Link as={Link} to="/Comparison">Comparison</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content with Sidebars */}
      <div className="d-flex" style={{ minHeight: "calc(100vh - 80px)" }}>
        {/* Left Sidebar */}
        <div className="bg-light p-3" style={{ width: "250px" }}>
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <Outlet />
        </div>

        {/* Right Sidebar */}
        <div className="bg-light p-3" style={{ width: "250px" }}>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
