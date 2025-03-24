import React, { useState } from "react";
import "./App.css";
import AppRouter from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GitHubModal from "./components/GitHubModal";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container fluid className="App px-0">
      <Header />
      <AppRouter onShowModal={() => setShowModal(true)} />
      <Footer />
      <GitHubModal show={showModal} handleClose={() => setShowModal(false)} />
    </Container>
  );
}

export default App;
