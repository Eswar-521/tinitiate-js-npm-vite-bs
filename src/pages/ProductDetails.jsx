import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const products = [
  { id: 1, name: "Python", price: "$699", description: "Python courses will begin from Basics concepts.", img: "https://via.placeholder.com/800x500" },
  { id: 2, name: "Java", price: "$999", description: "Java courses will begin from Basics concepts.", img: "https://via.placeholder.com/800x500" },
  { id: 3, name: "Aws cloud", price: "$299", description: "Aws Cloud courses will begin from Basics concepts.", img: "https://via.placeholder.com/800x500" },
  { id: 4, name: "Java script", price: "$199", description: "Java Script courses will begin from Basics concepts With high quality.", img: "https://via.placeholder.com/800x500" },
  { id: 5, name: "Power bi", price: "$599", description: "Power bi courses will begin from Basics concepts.", img: "https://via.placeholder.com/800x500" },
  { id: 6, name: "Testing", price: "$799", description: "Testing courses will begin from Basics concepts.", img: "https://via.placeholder.com/800x500" },
  { id: 7, name: "Core Java", price: "$999", description: "Java courses will begin from Basics concepts.", img: "https://via.placeholder.com/800x500" },
  { id: 8, name: "Web Developer", price: "$599", description: "Aws Cloud courses will begin from Basics concepts.", img: "https://via.placeholder.com/800x500" },
  { id: 9, name: "Mern Stack", price: "$799", description: "Java Script courses will begin from Basics concepts With high quality.", img: "https://via.placeholder.com/800x500" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="text-center my-5">
        <h2>Product Not Found</h2>
        <Button variant="secondary" as={Link} to="/catalog">Back to Catalog</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={10}>
          <Row className="align-items-center">
            {/* Product Image */}
            <Col xs={12} md={6} className="text-center mb-4">
              <Image src={product.img} alt={product.name} className="img-fluid rounded shadow-lg w-100" />
            </Col>

            {/* Product Details */}
            <Col xs={12} md={6}>
              <h2 className="fw-bold">{product.name}</h2>
              <h4 className="text-success">{product.price}</h4>
              <p className="fs-5">{product.description}</p>
              <Button variant="primary" className="me-3">Buy Now</Button>
              <Button variant="secondary" as={Link} to="/catalog">Back to Catalog</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
