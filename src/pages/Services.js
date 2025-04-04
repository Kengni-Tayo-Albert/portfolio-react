import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Composants Bootstrap pour la grille et les cartes
import { BsPen, BsCodeSlash, BsSearch } from "react-icons/bs"; // Icônes Bootstrap React
import "../index.css"; // Styles globaux personnalisés
import { Helmet } from "react-helmet"; // Gestion des balises <head> pour le SEO

// Définition des balises SEO pour cette page
<Helmet>
  <title>John Doe - Développeur Full Stack</title>
  <meta
    name="description"
    content="Portfolio de John Doe, développeur web full stack spécialisé en React, PHP, JS."
  />
  <meta name="robots" content="index, follow" />
</Helmet>;

// Données des services proposés, avec icône, titre et description
const services = [
  {
    title: "UX Design",
    icon: <BsPen size={40} color="#007bff" />,
    text: `L’UX Design est une discipline qui consiste à concevoir des produits 
           (sites web, applications mobiles, logiciels, objets connectés, etc.) 
           en plaçant l’utilisateur au centre des préoccupations. L’objectif est 
           de rendre l’expérience utilisateur la plus fluide et agréable possible.`,
  },
  {
    title: "Développement web",
    icon: <BsCodeSlash size={40} color="#007bff" />,
    text: `Le développement de sites web consiste à créer des sites internet en 
           utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) 
           et des frameworks (Bootstrap, React, Angular, etc.).`,
  },
  {
    title: "Référencement",
    icon: <BsSearch size={40} color="#007bff" />,
    text: `Le référencement naturel (SEO) est une technique qui consiste à optimiser 
           un site web pour le faire remonter dans les résultats des moteurs de recherche 
           (Google, Bing, Yahoo, etc.). L’objectif est d’attirer un maximum de visiteurs 
           qualifiés sur le site.`,
  },
];

// Composant principal de la page des services
const ServicesPage = () => {
  return (
    <div>
      {/* Bannière d’en-tête avec image de fond */}
      <div
        style={{
          backgroundImage: "url(/images/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      ></div>

      {/* Section principale contenant les services */}
      <Container className="my-5">
        {/* Titre et description introductive */}
        <h2 className="text-center fw-bold mb-2">Mon offre de services</h2>
        <p className="text-center mb-4">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <hr
          className="mx-auto mb-5 border-primary"
          style={{ width: "120px", height: "3px" }}
        />

        {/* Grille responsive Bootstrap avec 1 à 3 colonnes selon la taille de l’écran */}
        <Row>
          {services.map((service, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              {/* Carte de service avec icône, titre et description */}
              <Card className="service-card text-center h-100 p-3 shadow-sm">
                <div className="mb-3">{service.icon}</div>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;
