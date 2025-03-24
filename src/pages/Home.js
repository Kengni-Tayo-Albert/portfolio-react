import React from "react";
import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap"; // Composants Bootstrap pour mise en page, bouton et barres de progression
import "bootstrap/dist/css/bootstrap.min.css"; // Feuille de style Bootstrap
import "../index.css"; // Styles personnalisés du projet
import { Helmet } from "react-helmet"; // Permet de gérer dynamiquement les balises <head> pour le SEO

// Définition des balises meta pour le SEO de la page d'accueil
<Helmet>
  <title>John Doe - Développeur Full Stack</title>
  <meta
    name="description"
    content="Portfolio de John Doe, développeur web full stack spécialisé en React, PHP, JS."
  />
  <meta name="robots" content="index, follow" />
</Helmet>;

// Liste des compétences affichées avec barre de progression dynamique
const skills = [
  { name: "HTML5", value: 90, variant: "danger" },
  { name: "CSS3", value: 80, variant: "info" },
  { name: "JAVASCRIPT", value: 70, variant: "warning" },
  { name: "PHP", value: 60, variant: "success" },
  { name: "REACT", value: 50, variant: "primary" },
];

// Composant principal de la page d’accueil
const HomePage = ({ onShowModal }) => {
  return (
    <>
      {/* Section Hero : image en plein écran avec texte d’intro et bouton de modale */}
      <div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)", // Image de fond personnalisée
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Pleine hauteur de l'écran
        }}
      >
        <h1 className="fw-bold">Bonjour, je suis John Doe</h1>
        <h2 className="fw-bold">Développeur web full stack</h2>

        {/* Bouton déclenchant l’ouverture de la modale GitHub */}
        <Button variant="danger" className="mt-4" onClick={onShowModal}>
          En savoir plus
        </Button>
      </div>

      {/* Section À propos et compétences, en 2 colonnes */}
      <Container className="my-5 p-4 bg-white rounded shadow">
        <Row>
          {/* Colonne gauche : description du développeur */}
          <Col md={6} className="mb-4">
            <h4 className="border-bottom border-primary pb-2">A propos</h4>
            <img src="/images/john-doe-about.jpg" alt="John Doe" />{" "}
            {/* Photo de présentation */}
            {/* Texte de présentation (placeholder actuellement) */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
          </Col>

          {/* Colonne droite : compétences techniques avec barres de progression */}
          <Col md={6}>
            <h4 className="border-bottom border-primary pb-2">
              Mes compétences
            </h4>

            {/* Affichage dynamique des compétences */}
            {skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <span>
                  {skill.name} {skill.value}%
                </span>

                {/* Barre de progression animée et colorée selon la compétence */}
                <ProgressBar
                  now={skill.value}
                  variant={skill.variant}
                  animated
                  striped
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
