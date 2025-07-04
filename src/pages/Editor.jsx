import React from "react";
import { Card } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

const Editor = () => (
  <div>
    <h2 className="mb-4">✏️ Online Editor</h2>
    <Card bg="warning" text="dark" className="shadow text-center">
      <Card.Body>
        <BsPencilSquare size={50} className="mb-3" />
        <Card.Title>Online Editor</Card.Title>
        <Card.Text>
          Provide rich text or code editing capabilities directly in the browser.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default Editor;
