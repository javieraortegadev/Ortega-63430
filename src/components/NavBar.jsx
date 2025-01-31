
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"
import './NavBar.css'
import { NavLink } from 'react-router-dom';
function NavBar () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'><img className="brand-logo" src="../src/assets/logo-moreamor.avif" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/category/sale'>Sale</Nav.Link>
            <Nav.Link as={NavLink} to='/category/hombre'>Hombre</Nav.Link>
            <Nav.Link as={NavLink} to='/category/mujer'>Mujer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar