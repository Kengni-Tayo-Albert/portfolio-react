import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaBook,
  FaUsers,
  FaUserFriends,
  FaInfoCircle,
} from "react-icons/fa";

const GitHubModal = ({ show, handleClose }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Erreur API GitHub :", error));
  }, []);

  if (!profile) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column flex-md-row text-white bg-dark">
        <img
          src={profile.avatar_url}
          alt="avatar"
          className="img-fluid rounded me-md-4 mb-4"
          style={{ maxWidth: "200px" }}
        />
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
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GitHubModal;
