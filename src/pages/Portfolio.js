import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Pour appliquer les styles globaux

const projects = [
  {
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec PHP et MySQL",
    image: "/images/fresh-food.jpg",
    url: "#",
  },
  {
    title: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec WordPress",
    image: "/images/restaurant-akira.jpg",
    url: "#",
  },
  {
    title: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec LARAVEL",
    image: "/images/wellness.jpg",
    url: "#",
  },
  {
    title: "SEO",
    description: "Amélioration du référencement d’un site e-commerce",
    tech: "Utilisation des outils SEO",
    image: "/images/seo.jpg",
    url: "#",
  },
  {
    title: "Création d'une API",
    description: "Création d’une API RESTFUL publique",
    tech: "PHP - SYMFONY",
    image: "/images/api.jpg",
    url: "#",
  },
  {
    title: "Maquette d’un site web",
    description: "Création d’un prototype d’un site",
    tech: "Réalisé avec FIGMA",
    image: "/images/mockup.jpg",
    url: "#",
  },
];

const PortfolioPage = () => {
  return (
    <div>
      {/* Banner */}
      <img
        src="/images/banner.jpg"
        alt="Banner"
        className="img-fluid w-100"
        style={{ maxHeight: "250px", objectFit: "cover" }}
      />

      {/* Titre */}
      <Container className="text-center my-5">
        <h2 className="fw-bold">Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <hr className="border border-primary border-2 opacity-100 w-25 mx-auto mb-5" />
      </Container>

      {/* Grid */}
      <Container className="mb-5">
        <Row>
          {projects.map((project, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <Card className="project-card h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="mt-auto project-button"
                  >
                    Voir le site
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted text-center small">
                  {project.tech}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioPage;
