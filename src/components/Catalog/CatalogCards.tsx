import React from "react";
import { Card } from "react-bootstrap";

interface CatalogItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface Props {
  data: CatalogItem[];
}

const CatalogCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center mt-3">
      {data.map((item) => (
        <Card key={item.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={item.image} alt={item.name} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Price: {item.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CatalogCards;
