import React from "react";
import { Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>
      <Card>
        <Card.Body>
          <h5 className="card-title">Welcome to the Dashboard</h5>
          <p>This is where you can monitor and manage all key metrics.</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
