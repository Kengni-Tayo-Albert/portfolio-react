import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="px-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          JOHN DOE
        </Navbar.Brand>

        {/* Bouton hamburger pour mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-uppercase"
              activeclassname="active"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/services"
              className="text-uppercase"
              activeclassname="active"
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className="text-uppercase"
              activeclassname="active"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="text-uppercase"
              activeclassname="active"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/legal"
              className="text-uppercase"
              activeclassname="active"
            >
              Mentions Légales
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
