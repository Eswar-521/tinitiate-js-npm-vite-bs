import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BsBarChart, BsPieChart, BsPeople, BsAward } from "react-icons/bs";

const Infographics = () => {
  const data = [
    {
      icon: <BsPeople size={40} />,
      title: "Total Users",
      value: "1,250",
      color: "primary",
    },
    {
      icon: <BsBarChart size={40} />,
      title: "Monthly Sales",
      value: "$14,500",
      color: "success",
    },
    {
      icon: <BsPieChart size={40} />,
      title: "Market Share",
      value: "32%",
      color: "danger",
    },
    {
      icon: <BsAward size={40} />,
      title: "Awards",
      value: "8",
      color: "warning",
    },
  ];

  return (
    <div>
      <h2 className="mb-4">Infographics Dashboard</h2>
      <Row className="g-4">
        {data.map((item, idx) => (
          <Col md={6} lg={3} key={idx}>
            <Card
              bg={item.color}
              text={item.color === "warning" ? "dark" : "white"}
              className="text-center shadow"
            >
              <Card.Body>
                <div className="mb-2">{item.icon}</div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="fs-4 fw-bold">{item.value}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Infographics;
