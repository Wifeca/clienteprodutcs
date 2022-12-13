import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


function Navegacion () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>TechTienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/signup"}>Registrarse</Nav.Link>
            <Nav.Link as={NavLink} to={"/signin"}>Iniciar sesion</Nav.Link>
            <Nav.Link as={NavLink} to={"/crearproducto"}>Crear producto</Nav.Link>
            <NavDropdown title="Usuario" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={"/misproductos"}>Mis productos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Navegacion}