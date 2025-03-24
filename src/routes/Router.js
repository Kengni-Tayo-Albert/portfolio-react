import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import ServicesPage from "../pages/Services";
import PortfolioPage from "../pages/Portfolio"; //  Import du composant
import ContactPage from "../pages/Contact";
import LegalPage from "../pages/Legal";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/Legal" element={<LegalPage />} />
    </Routes>
  );
};

export default AppRouter;
