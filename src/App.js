import React from "react";
import { Container } from "react-bootstrap"; // ✅ Ajout de Container
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Juste au cas où

import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import AppRouter from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid className="App px-0">
      {" "}
      {/* Container fluid ici */}
      <Header />
      <AppRouter />
      <Footer />
    </Container>
  );
}

export default App;
