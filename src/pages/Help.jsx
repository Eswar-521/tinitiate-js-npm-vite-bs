import React from "react";
import { Card, Accordion } from "react-bootstrap";

const Help = () => {
  return (
    <div>
      <h2 className="mb-4">🆘 Help & Support</h2>
      <Card className="shadow">
        <Card.Body>
          <Card.Title>Need Assistance?</Card.Title>
          <Card.Text>
            Here you can find answers to frequently asked questions and reach our support team.
          </Card.Text>
        </Card.Body>
      </Card>

      <Accordion className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I reset my password?</Accordion.Header>
          <Accordion.Body>
            Go to your profile page, click “Change Password” and follow the instructions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I contact customer support?</Accordion.Header>
          <Accordion.Body>
            You can email us at <strong>support@example.com</strong> or call <strong>1800-123-456</strong>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Where can I find tutorials?</Accordion.Header>
          <Accordion.Body>
            Visit the “Resources” section on our website for video and written guides.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Help;
