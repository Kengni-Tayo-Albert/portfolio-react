import React, { useEffect, useState } from "react"; // Import des hooks pour gérer l'état et le cycle de vie
import { Modal, Button } from "react-bootstrap"; // Composants modale et bouton Bootstrap
import {
  FaMapMarkerAlt,
  FaBook,
  FaUsers,
  FaUserFriends,
  FaInfoCircle,
} from "react-icons/fa"; // Icônes de FontAwesome via react-icons

// Composant GitHubModal qui affiche une modale avec les données du profil GitHub
const GitHubModal = ({ show, handleClose }) => {
  const [profile, setProfile] = useState(null); // État pour stocker les données du profil GitHub

  useEffect(() => {
    // Appel de l’API GitHub au chargement du composant
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setProfile(data)) // Mise à jour de l’état avec les données reçues
      .catch((error) => console.error("Erreur API GitHub :", error)); // Gestion des erreurs
  }, []); // Tableau de dépendances vide pour exécuter une seule fois au montage

  // Si les données ne sont pas encore chargées, ne rien afficher
  if (!profile) return null;

  return (
    // Modale Bootstrap conditionnelle selon la prop `show`, avec fermeture via `handleClose`
    <Modal show={show} onHide={handleClose} centered size="lg">
      {/* En-tête de la modale avec titre et bouton de fermeture */}
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>

      {/* Corps de la modale affichant les informations du profil utilisateur */}
      <Modal.Body className="d-flex flex-column flex-md-row text-white bg-dark">
        {/* Avatar GitHub de l'utilisateur */}
        <img
          src={profile.avatar_url}
          alt="avatar"
          className="img-fluid rounded me-md-4 mb-4"
          style={{ maxWidth: "200px" }}
        />

        {/* Informations du profil : nom, localisation, bio, stats publiques */}
        <div>
          <p>
            <FaInfoCircle />{" "}
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-info fw-bold"
            >
              {profile.name || profile.login}
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> {profile.location || "Inconnu"}
          </p>
          <p>
            <FaInfoCircle /> {profile.bio || "Pas de bio disponible."}
          </p>
          <p>
            <FaBook /> Repositories : {profile.public_repos}
          </p>
          <p>
            <FaUsers /> Followers : {profile.followers}
          </p>
          <p>
            <FaUserFriends /> Following : {profile.following}
          </p>
        </div>
      </Modal.Body>

      {/* Pied de page de la modale avec un bouton pour la fermer */}
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GitHubModal;
