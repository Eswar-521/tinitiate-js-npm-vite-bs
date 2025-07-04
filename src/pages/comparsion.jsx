import React from "react";
import { Table } from "react-bootstrap";

const Comparison = () => {
  // sample data
  const data = [
    { feature: "Price", productA: "$100", productB: "$120" },
    { feature: "Warranty", productA: "1 year", productB: "2 years" },
    { feature: "Support", productA: "Email", productB: "Email + Phone" },
    { feature: "Features", productA: "Basic", productB: "Premium" },
  ];

  return (
    <div>
      <h2 className="mb-4">Product Comparison</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Product A</th>
            <th>Product B</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.feature}</td>
              <td>{row.productA}</td>
              <td>{row.productB}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Comparison;
