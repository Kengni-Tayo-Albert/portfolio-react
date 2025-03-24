import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap"; // Composants Bootstrap pour la mise en page et le formulaire
import { Helmet } from "react-helmet"; // Permet de gérer dynamiquement les balises <head> pour le SEO

// Définition du titre de la page et des balises meta SEO
<Helmet>
  <title>John Doe - Développeur Full Stack</title>
  <meta
    name="description"
    content="Portfolio de John Doe, développeur web full stack spécialisé en React, PHP, JS."
  />
  <meta name="robots" content="index, follow" />
</Helmet>;

const ContactPage = () => {
  return (
    <Container className="my-5">
      {/* En-tête de la page avec titre, description et séparation visuelle */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact</h2>
        <p>
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <hr className="border border-primary border-2 opacity-100 w-25 mx-auto mb-4" />
      </div>

      {/* Grille responsive contenant le formulaire à gauche et les coordonnées à droite */}
      <Row className="bg-white shadow p-4 rounded">
        {/* Formulaire de contact côté gauche */}
        <Col md={6} className="mb-4">
          <h5 className="fw-bold border-bottom border-primary pb-2">
            Formulaire de contact
          </h5>

          {/* Formulaire Bootstrap avec champs requis */}
          <Form>
            {/* Champ : nom */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="Votre nom" required />
            </Form.Group>

            {/* Champ : email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Votre adresse email"
                required
              />
            </Form.Group>

            {/* Champ : téléphone */}
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Control
                type="tel"
                placeholder="Votre numéro de téléphone"
                required
              />
            </Form.Group>

            {/* Champ : sujet du message */}
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Control type="text" placeholder="Sujet" required />
            </Form.Group>

            {/* Champ : message (zone de texte) */}
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Votre message"
                required
              />
            </Form.Group>

            {/* Bouton d'envoi */}
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>

        {/* Coordonnées personnelles et carte Google Maps côté droit */}
        <Col md={6}>
          <h5 className="fw-bold border-bottom border-primary pb-2">
            Mes coordonnées
          </h5>
          <p>
            <strong>John Doe</strong>
          </p>
          <p>📍 40 rue Laure Diebold</p>
          <p>🏙️ 69009 Lyon, France</p>
          <p>📞 10 20 30 40 50</p>
          <p>📧 john.doe@gmail.com</p>

          {/* Carte Google Maps intégrée pour localiser l’adresse */}
          <iframe
            title="map"
            src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
