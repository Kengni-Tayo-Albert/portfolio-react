import React, { useState } from "react"; // Import de React et du hook d'état useState
import "./App.css"; // Feuille de styles personnalisée
import AppRouter from "./routes/Router"; // Composant de gestion des routes
import Header from "./components/Header"; // Composant d'en-tête
import Footer from "./components/Footer"; // Composant de pied de page
import GitHubModal from "./components/GitHubModal"; // Modale affichant les infos GitHub
import { Container } from "react-bootstrap"; // Composant de conteneur Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Styles Bootstrap

function App() {
  // État local pour contrôler l'affichage de la modale GitHub
  const [showModal, setShowModal] = useState(false);

  return (
    // Conteneur principal fluide sans padding horizontal (px-0) pour un rendu plein écran
    <Container fluid className="App px-0">
      {/* En-tête affiché sur toutes les pages */}
      <Header />

      {/* Composant de routage qui gère la navigation entre les pages */}
      {/* La fonction onShowModal est transmise à la HomePage pour déclencher l’ouverture de la modale */}
      <AppRouter onShowModal={() => setShowModal(true)} />

      {/* Pied de page affiché sur toutes les pages */}
      <Footer />

      {/* Modale GitHub visible uniquement lorsque showModal est à true */}
      <GitHubModal
        show={showModal}
        handleClose={() => setShowModal(false)} // Ferme la modale
      />
    </Container>
  );
}

export default App;
