import React from "react";
import { Card } from "react-bootstrap";
import { BsMouse } from "react-icons/bs";

const DragDrop = () => (
  <div>
    <h2 className="mb-4">🖱️ Drag & Drop</h2>
    <Card bg="success" text="white" className="shadow text-center">
      <Card.Body>
        <BsMouse size={50} className="mb-3" />
        <Card.Title>Drag & Drop Features</Card.Title>
        <Card.Text>
          Enhance user interactivity with easy-to-use drag-and-drop components.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default DragDrop;
