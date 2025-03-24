import React from "react";
import { Container, Accordion } from "react-bootstrap"; // Composants Bootstrap pour la mise en page et l'accordéon
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet"; // Permet de gérer dynamiquement les balises SEO dans le <head>

// Déclaration des balises meta SEO spécifiques à cette page
<Helmet>
  <title>John Doe - Développeur Full Stack</title>
  <meta
    name="description"
    content="Portfolio de John Doe, développeur web full stack spécialisé en React, PHP, JS."
  />
  <meta name="robots" content="index, follow" />
</Helmet>;

const Legal = () => {
  return (
    <>
      <head>
        {/* Désindexation explicite de la page pour les moteurs de recherche */}
        <meta name="robots" content="noindex" />
      </head>

      <Container className="my-5">
        {/* Titre de la page avec séparation visuelle */}
        <h2 className="text-center fw-bold">Mentions légales</h2>
        <hr className="border border-primary border-2 opacity-100 w-25 mx-auto mb-5" />

        {/* Accordéon contenant les 3 sections légales : éditeur, hébergeur, crédits */}
        <Accordion defaultActiveKey="0" flush>
          {/* Section : Éditeur du site */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <h5>John Doe</h5>
              <p>
                <i className="bi bi-building"></i> 40 rue Laure Diebold <br />
                <i className="bi bi-geo-alt"></i> 69009 Lyon, France <br />
                <i className="bi bi-telephone"></i> 10 20 30 40 50 <br />
                <i className="bi bi-envelope"></i> john.doe@gmail.com
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Section : Hébergeur du site */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h5>alwaysdata</h5>
              <p>
                91 Rue du Faubourg Saint-Honoré, 75008 Paris <br />
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Section : Crédits techniques et sources visuelles */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <p>
                Ce site a été réalisé par John Doe, étudiant au
                <a
                  href="https://www.cef-learning.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-1"
                >
                  Centre Européen de formation
                </a>
                .
              </p>
              <p>
                <em>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site
                </em>
                <a
                  href="https://pixabay.com/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-1"
                >
                  Pixabay
                </a>
                .
              </p>
              <p>
                <em>La favicon de ce site a été fournie par</em>
                <a
                  href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-1"
                >
                  John doe Icons erstellt von Freepik - Flaticon
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Legal;
