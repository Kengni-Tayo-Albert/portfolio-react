import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import ServicesPage from "../pages/Services";
import PortfolioPage from "../pages/Portfolio";
import ContactPage from "../pages/Contact";
import LegalPage from "../pages/Legal";

const AppRouter = ({ onShowModal }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage onShowModal={onShowModal} />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/legal" element={<LegalPage />} />
    </Routes>
  );
};

export default AppRouter;
