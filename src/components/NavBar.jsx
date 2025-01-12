
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"
import './NavBar.css'

function NavBar () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img className="brand-logo" src="../src/assets/logo-moreamor.avif" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sale">Sale</Nav.Link>
            <Nav.Link href="#hombre">Hombre</Nav.Link>
            <Nav.Link href="#mujer">Mujer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar