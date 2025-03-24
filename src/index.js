import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Composant de routage principal pour gérer la navigation
import "bootstrap/dist/css/bootstrap.min.css"; // Import des styles Bootstrap

import ReactDOM from "react-dom/client"; // Méthode moderne de rendu React (React 18+)
import "./index.css"; // Feuille de style globale de l'application
import App from "./App"; // Composant racine de l'application
import reportWebVitals from "./reportWebVitals"; // Utilitaire pour mesurer les performances

// Point d'entrée de l'application : création de la racine React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application React dans le DOM
root.render(
  <React.StrictMode>
    {/* Activation du routage dans toute l'application via BrowserRouter */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Outil pour mesurer et analyser les performances (optionnel)
// Possibilité d’envoyer les données à une console ou un outil de tracking
reportWebVitals();
