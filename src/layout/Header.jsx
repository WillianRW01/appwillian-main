import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">TechShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="minhanav" />
        <Navbar.Collapse id="minhanav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/Inicial">Inicial</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/tecnologia">Tecnologia</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}