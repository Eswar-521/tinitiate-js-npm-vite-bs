import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4" data-aos="fade-down">About Us</h2>

      <p className="lead text-muted text-center mb-5" data-aos="fade-up">
        Welcome to <strong>Tinitiate</strong> – your destination for quality online learning. 
        We are committed to providing top-notch courses, resources, and support.
      </p>

      <Row className="mb-5">
        <Col md={6} data-aos="fade-right">
          <h4 className="fw-bold text-primary">Our Mission</h4>
          <p>
            To empower individuals with skills and knowledge through engaging online education.
          </p>
        </Col>
        <Col md={6} data-aos="fade-left">
          <h4 className="fw-bold text-success">Our Vision</h4>
          <p>
            To be a global leader in online education, fostering lifelong learning opportunities.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4} data-aos="zoom-in">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5 className="fw-bold text-info">Innovation</h5>
              <p>We continually evolve our content and platform to meet learner needs.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} data-aos="zoom-in" data-aos-delay="200">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5 className="fw-bold text-warning">Quality</h5>
              <p>We prioritize high-quality content and instructors for your journey.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} data-aos="zoom-in" data-aos-delay="400">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5 className="fw-bold text-danger">Support</h5>
              <p>We offer 24/7 guidance and support to ensure a smooth experience.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-5" data-aos="fade-up">
        <h4 className="fw-bold mb-3">Ready to explore our courses?</h4>
        <Button variant="primary" href="/catalog" size="lg" className="fw-semibold">
          Browse Catalog
        </Button>
      </div>
    </Container>
  );
};

export default About;
