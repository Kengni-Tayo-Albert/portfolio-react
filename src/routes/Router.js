import { Routes, Route } from "react-router-dom"; // Composants de routage de React Router
import HomePage from "../pages/Home"; // Page d'accueil
import ServicesPage from "../pages/Services"; // Page Services
import PortfolioPage from "../pages/Portfolio"; // Page Portfolio
import ContactPage from "../pages/Contact"; // Page Contact
import LegalPage from "../pages/Legal"; // Page Mentions légales

// Composant de configuration des routes principales de l'application
const AppRouter = ({ onShowModal }) => {
  return (
    <Routes>
      {/* Route vers la page d'accueil avec passage de la fonction onShowModal en prop */}
      <Route path="/" element={<HomePage onShowModal={onShowModal} />} />

      {/* Route vers la page des services */}
      <Route path="/services" element={<ServicesPage />} />

      {/* Route vers la page portfolio */}
      <Route path="/portfolio" element={<PortfolioPage />} />

      {/* Route vers la page de contact */}
      <Route path="/contact" element={<ContactPage />} />

      {/* Route vers la page mentions légales */}
      <Route path="/legal" element={<LegalPage />} />
    </Routes>
  );
};

export default AppRouter;
