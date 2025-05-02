import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'; // Custom styles

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar animate__animated animate__fadeInDown fixed-top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo text-warning">
          <i className="fas fa-book-open me-2"></i>Comics World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-uppercase fw-semibold">
            <Nav.Link as={Link} to="/" className="nav-link">
              <i className="fas fa-home me-1"></i> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/comics" className="nav-link">
              <i className="fas fa-book me-1"></i> Comics
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
