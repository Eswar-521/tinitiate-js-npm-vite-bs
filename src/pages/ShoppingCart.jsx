import React from "react";
import { Card } from "react-bootstrap";
import { BsCart } from "react-icons/bs";

const ShoppingCart = () => (
  <div>
    <h2 className="mb-4">🛒 Shopping Cart</h2>
    <Card bg="info" text="white" className="shadow text-center">
      <Card.Body>
        <BsCart size={50} className="mb-3" />
        <Card.Title>Shopping Cart</Card.Title>
        <Card.Text>
          Build powerful e-commerce functionality to handle products, checkout, and more.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default ShoppingCart;
