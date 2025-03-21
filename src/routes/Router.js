import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import ServicesPage from "../pages/Services";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
};

export default AppRouter;
