import React, { useState } from "react";
import { Table } from "react-bootstrap";

const ComparisonTable = () => {
  // advanced sample data
  const data = [
    { feature: "Price", productA: 100, productB: 120 },
    { feature: "Warranty", productA: "1 year", productB: "2 years" },
    { feature: "Support", productA: "Email", productB: "Email + Phone" },
    { feature: "Features", productA: "Basic", productB: "Premium" },
    { feature: "Storage", productA: "128GB", productB: "256GB" },
    { feature: "Battery", productA: "3000mAh", productB: "4000mAh" },
  ];

  // sorting state
  const [sortAsc, setSortAsc] = useState(true);

  const sortedData = [...data].sort((a, b) => {
    if (sortAsc) {
      return a.feature.localeCompare(b.feature);
    } else {
      return b.feature.localeCompare(a.feature);
    }
  });

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  return (
    <div>
      <h2 className="mb-4">Product Comparison</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th
              style={{ cursor: "pointer" }}
              onClick={toggleSort}
            >
              Feature {sortAsc ? "🔼" : "🔽"}
            </th>
            <th>Product A</th>
            <th>Product B</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => {
            // highlight differences
            const isDifferent = row.productA !== row.productB;
            return (
              <tr key={idx}>
                <td>{row.feature}</td>
                <td className={isDifferent ? "table-warning" : ""}>{row.productA}</td>
                <td className={isDifferent ? "table-warning" : ""}>{row.productB}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p className="text-muted">Click the "Feature" column to sort.</p>
    </div>
  );
};

export default ComparisonTable;
