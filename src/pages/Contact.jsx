import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ background: 'linear-gradient(135deg, #c3ecf7, #f7d9e3)', minHeight: '100vh', padding: '50px 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">Contact Us</h2>

        <Row className="mb-5">
          <Col md={6} data-aos="fade-right">
            <Card className="p-4 shadow-lg bg-light border-0">
              <h4 className="fw-bold mb-3 text-primary">Get in Touch</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message..." />
                </Form.Group>

                <Button variant="primary" type="submit" className="fw-bold w-100 shadow-sm">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          <Col md={6} data-aos="fade-left" className="mt-4 mt-md-0">
            <Card className="p-4 shadow-lg bg-white border-0">
              <h4 className="fw-bold mb-4 text-success">Contact Information</h4>
              <p><i className="bi bi-geo-alt-fill text-danger me-2"></i>123 Learning Lane, Hyderabad, India</p>
              <p><i className="bi bi-envelope-fill text-warning me-2"></i>support@tinitiate.com</p>
              <p><i className="bi bi-telephone-fill text-primary me-2"></i>+91 98765 43210</p>
              <p><i className="bi bi-clock-fill text-info me-2"></i>Available: 9AM – 9PM IST</p>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5" data-aos="zoom-in">
          <p className="fs-5 text-muted">We usually respond within 24 hours. Thanks for reaching out!</p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
