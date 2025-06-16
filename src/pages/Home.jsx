import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Carousel, Button, Row, Col } from "react-bootstrap";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const imageStyle = {
    height: scrolled ? "100px" : "500px", // full size vs shrunk
    objectFit: "cover",
    transition: "height 0.3s ease",
    margin: "0 auto",
    width: "100%",
  };

  return (
    <Container className="my-5">
      {/* Carousel with Scroll-Responsive Image Size */}
      <Carousel className="shadow-lg rounded overflow-hidden text-center" interval={3000} pause={false}>
        <Carousel.Item>
          <img
            className="rounded"
            src="https://via.placeholder.com/1200x500/007bff/ffffff?text=Welcome+to+Our+Store"
            alt="Slide 1"
            style={imageStyle}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h5 className="fw-bold">Best Deals Available!</h5>
            <p>Check out our latest collection of high-quality products.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="rounded"
            src="https://via.placeholder.com/1200x500/28a745/ffffff?text=New+Arrivals"
            alt="Slide 2"
            style={imageStyle}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h5 className="fw-bold">Latest Products Just for You</h5>
            <p>Browse through our latest collection of premium gadgets.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="rounded"
            src="https://via.placeholder.com/1200x500/dc3545/ffffff?text=Exclusive+Discounts"
            alt="Slide 3"
            style={imageStyle}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h5 className="fw-bold">Limited-Time Offers</h5>
            <p>Grab the best deals before they run out!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Call-to-Action Section */}
      <div className="text-center my-5 p-5 bg-light shadow-sm rounded">
        <h2 className="fw-bold display-5">Tinitiate</h2>
        <p className="fs-5 text-muted">Browse through our catalog and find the perfect course for you.</p>
        <Button variant="primary" as={Link} to="/catalog" size="lg" className="px-4 py-2 fw-bold shadow-sm">
          View Catalog
        </Button>
      </div>

      {/* Features Section */}
      <Row className="text-center mt-5">
        <Col md={4} className="p-4">
          <i className="bi bi-truck display-3 text-primary"></i>
          <h4 className="fw-bold mt-3">Fastest Growing Online Courses</h4>
          <p>Get your own courses</p>
        </Col>
        <Col md={4} className="p-4">
          <i className="bi bi-patch-check display-3 text-success"></i>
          <h4 className="fw-bold mt-3">100%</h4>
          <p>All our courses are checked for high quality to ensure the best experience.</p>
        </Col>
        <Col md={4} className="p-4">
          <i className="bi bi-headset display-3 text-danger"></i>
          <h4 className="fw-bold mt-3">24/7 Support</h4>
          <p>We provide 24/7 training section support to assist you at any time.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
