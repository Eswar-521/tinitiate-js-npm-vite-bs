import React from "react";
import { Card } from "react-bootstrap";
import { BsFilm } from "react-icons/bs";

const Animation = () => (
  <div>
    <h2 className="mb-4">🎞️ Animation</h2>
    <Card bg="danger" text="white" className="shadow text-center">
      <Card.Body>
        <BsFilm size={50} className="mb-3" />
        <Card.Title>Animation Features</Card.Title>
        <Card.Text>
          Add animations with CSS, JavaScript, or advanced libraries for interactive visuals.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default Animation;
