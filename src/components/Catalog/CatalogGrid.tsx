import React from "react";
import { Card, Col, Row } from "react-bootstrap";

interface CatalogItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface Props {
  data: CatalogItem[];
}

const CatalogGrid: React.FC<Props> = ({ data }) => {
  return (
    <Row className="mt-3">
      {data.map((item) => (
        <Col key={item.id} md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Price: {item.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CatalogGrid;
