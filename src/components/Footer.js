import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row className="text-center text-md-start">
          {/* Colonne 1 - Infos développeur */}
          <Col md={4} className="mb-3">
            <h5>John Doe</h5>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>
              <a
                href="mailto:john.doe@gmail.com"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                john.doe@gmail.com
              </a>
            </p>
            {/* Icônes réseaux sociaux */}
            <div className="d-flex gap-3">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-icon"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-icon"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-icon"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>

          {/* Colonne 2 - Liens utiles */}
          <Col md={4} className="mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-light">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-light">
                  Mention légales
                </Link>
              </li>
            </ul>
          </Col>

          {/* Colonne 3 - Dernières réalisations */}
          <Col md={4} className="mb-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/portfolio" className="text-light">
                  Fresh Food
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-light">
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-light">
                  Espace bien-être
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-light">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-light">
                  Création d'une API
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-light">
                  Maquette d'un site
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
