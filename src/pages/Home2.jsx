import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const Home2 = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center text-center">
        <Container>
          <h1 className="display-3 fw-bold text-white">Explore, Learn & Grow</h1>
          <p className="lead text-white">Discover top-rated courses and enhance your skills today.</p>
          <Button as={Link} to="/catalog" variant="light" size="lg" className="fw-bold shadow-sm px-4 py-2">Browse Courses</Button>
        </Container>
      </div>

      {/* Feature Cards Section */}
      <Container className="my-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="feature-card shadow-lg">
              <Card.Body>
                <i className="bi bi-award display-4 text-primary"></i>
                <h4 className="mt-3 fw-bold">Certified Courses</h4>
                <p>Earn industry-recognized certificates to boost your career.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card shadow-lg">
              <Card.Body>
                <i className="bi bi-laptop display-4 text-success"></i>
                <h4 className="mt-3 fw-bold">Expert Instructors</h4>
                <p>Learn from the best instructors with real-world experience.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card shadow-lg">
              <Card.Body>
                <i className="bi bi-graph-up-arrow display-4 text-danger"></i>
                <h4 className="mt-3 fw-bold">Career Growth</h4>
                <p>Enhance your skills and land your dream job.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call-to-Action Section */}
      <div className="cta-section text-center">
        <Container>
          <h2 className="fw-bold text-white">Start Learning Today!</h2>
          <p className="lead text-white">Join thousands of learners and build your future.</p>
          <Button as={Link} to="/signup" variant="warning" size="lg" className="fw-bold shadow-sm px-4 py-2">Sign Up Now</Button>
        </Container>
      </div>
    </>
  );
};

export default Home2;
