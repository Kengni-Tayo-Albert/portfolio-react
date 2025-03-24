import { Link, NavLink } from "react-router-dom"; // Composants de navigation pour React Router
import { Navbar, Nav, Container } from "react-bootstrap"; // Composants de navigation Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import des styles Bootstrap

// Composant Header affichant la barre de navigation principale du site
const Header = () => {
  return (
    // Barre de navigation responsive, sombre, avec du padding horizontal
    <Navbar expand="lg" bg="dark" variant="dark" className="px-3">
      <Container>
        {/* Logo du site, redirige vers la page d'accueil */}
        <Navbar.Brand as={Link} to="/">
          JOHN DOE
        </Navbar.Brand>

        {/* Bouton hamburger affiché sur les écrans mobiles pour ouvrir/coller le menu */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Zone de navigation principale, responsive */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Lien de navigation vers la page d'accueil */}
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-uppercase"
              activeclassname="active"
            >
              Home
            </Nav.Link>

            {/* Lien vers la page Services */}
            <Nav.Link
              as={NavLink}
              to="/services"
              className="text-uppercase"
              activeclassname="active"
            >
              Services
            </Nav.Link>

            {/* Lien vers la page Portfolio */}
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className="text-uppercase"
              activeclassname="active"
            >
              Portfolio
            </Nav.Link>

            {/* Lien vers la page Contact */}
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="text-uppercase"
              activeclassname="active"
            >
              Contact
            </Nav.Link>

            {/* Lien vers la page Mentions Légales */}
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
