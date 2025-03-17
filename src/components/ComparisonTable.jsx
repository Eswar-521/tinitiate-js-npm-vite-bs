import React from "react";
import { Table } from "react-bootstrap";

const ComparisonTable = () => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover className="text-center">
        <thead className="table-dark">
          <tr>
            <th>Leadership Style</th>
            <th>Characteristics</th>
            <th>Advantages</th>
            <th>Disadvantages</th>
            <th>When to Use It</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-warning">Autocratic</td>
            <td>Decisions made alone, strict rules.</td>
            <td>Quick decision-making, clear leadership.</td>
            <td>Low team morale, lack of creativity.</td>
            <td>When fast decisions are needed.</td>
          </tr>
          <tr>
            <td className="bg-warning">Democratic</td>
            <td>Team involvement in decisions.</td>
            <td>High morale, teamwork.</td>
            <td>Slow decision-making.</td>
            <td>When collaboration is important.</td>
          </tr>
          <tr>
            <td className="bg-warning">Bureaucratic</td>
            <td>Strict rules and structure.</td>
            <td>Consistency and order.</td>
            <td>Slow adaptability.</td>
            <td>In regulated industries.</td>
          </tr>
          <tr>
            <td className="bg-warning">Charismatic</td>
            <td>Inspires and motivates.</td>
            <td>Strong team commitment.</td>
            <td>Over-reliance on leader.</td>
            <td>When vision is needed.</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
