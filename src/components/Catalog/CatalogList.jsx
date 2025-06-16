import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Container, Row, Col } from "react-bootstrap";

const CatalogList = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const items = [
    { name: "Item 1", price: "$10", color: "primary" },
    { name: "Item 2", price: "$20", color: "success" },
    { name: "Item 3", price: "$30", color: "info" },
    { name: "Item 4", price: "$40", color: "warning" },
    { name: "Item 5", price: "$50", color: "danger" },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4" data-aos="fade-down">
        Course Catalog
      </h2>
      <Row className="g-4">
        {items.map((item, idx) => (
          <Col md={4} sm={6} xs={12} key={idx} data-aos="zoom-in">
            <Card
              bg={item.color.toLowerCase()}
              text={item.color === "warning" ? "dark" : "white"}
              className="shadow-lg"
            >
              <Card.Body className="text-center">
                <Card.Title className="fw-bold fs-4">{item.name}</Card.Title>
                <Card.Text className="fs-5">{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CatalogList;
