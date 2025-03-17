import React from "react";
import { Link } from "react-router-dom";
import { Container, Carousel, Button, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="my-5">
      {/* Bootstrap Carousel with Auto-Slide */}
      <Carousel className="shadow-lg rounded overflow-hidden" interval={3000} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://via.placeholder.com/1200x500/007bff/ffffff?text=Welcome+to+Our+Store" alt="Slide 1" />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h3 className="fw-bold">Best Deals Available!</h3>
            <p>Check out our latest collection of high-quality products.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://via.placeholder.com/1200x500/28a745/ffffff?text=New+Arrivals" alt="Slide 2" />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h3 className="fw-bold">Latest Products Just for You</h3>
            <p>Browse through our latest collection of premium gadgets.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://via.placeholder.com/1200x500/dc3545/ffffff?text=Exclusive+Discounts" alt="Slide 3" />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h3 className="fw-bold">Limited-Time Offers</h3>
            <p>Grab the best deals before they run out!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Call-to-Action Section */}
      <div className="text-center my-5 p-5 bg-light shadow-sm rounded">
        <h2 className="fw-bold display-5">Tinitiate </h2>
        <p className="fs-5 text-muted">Browse through our catalog and find the perfect course for you.</p>
        <Button variant="primary" as={Link} to="/catalog" size="lg" className="px-4 py-2 fw-bold shadow-sm">View Catalog</Button>
      </div>

      {/* Features Section */}
      <Row className="text-center mt-5">
        <Col md={4} className="p-4">
          <i className="bi bi-truck display-3 text-primary"></i>
          <h4 className="fw-bold mt-3">Fastest Growing online courses </h4>
          <p>Get your own courses </p>
        </Col>
        <Col md={4} className="p-4">
          <i className="bi bi-patch-check display-3 text-success"></i>
          <h4 className="fw-bold mt-3">100% </h4>
          <p>All our course are checked for high quality to ensure the best experience.</p>
        </Col>
        <Col md={4} className="p-4">
          <i className="bi bi-headset display-3 text-danger"></i>
          <h4 className="fw-bold mt-3">24/7 Support</h4>
          <p>We provide 24/7 tarning section support to assist you at any time.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
