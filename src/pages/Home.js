import React from "react";
import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const skills = [
  { name: "HTML5", value: 90, variant: "danger" },
  { name: "CSS3", value: 80, variant: "info" },
  { name: "JAVASCRIPT", value: 70, variant: "warning" },
  { name: "PHP", value: 60, variant: "success" },
  { name: "REACT", value: 50, variant: "primary" },
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <h1 className="fw-bold">Bonjour, je suis John Doe</h1>
        <h2 className="fw-bold">Développeur web full stack</h2>
        <Button variant="danger" className="mt-4">
          En savoir plus
        </Button>
      </div>

      {/* About & Skills Section */}
      <Container className="my-5 p-4 bg-white rounded shadow">
        <Row>
          <Col md={6} className="mb-4">
            <h4 className="border-bottom border-primary pb-2">A propos</h4>
            <img src="/images/john-doe-about.jpg" alt="John Doe" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
          </Col>

          <Col md={6}>
            <h4 className="border-bottom border-primary pb-2">
              Mes compétences
            </h4>
            {skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <span>
                  {skill.name} {skill.value}%
                </span>
                <ProgressBar
                  now={skill.value}
                  variant={skill.variant}
                  animated
                  striped
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
