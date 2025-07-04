import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const DataTable = () => {
  const data = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
    { id: 4, name: "Diana", email: "diana@example.com", role: "Viewer" },
    { id: 5, name: "Edward", email: "edward@example.com", role: "Admin" },
    { id: 6, name: "Fiona", email: "fiona@example.com", role: "Editor" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // filter data based on search
  const filteredData = data.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2 className="mb-4">Advanced Data Table</h2>
      <Form className="mb-3">
        <Form.Control
          type="search"
          placeholder="Search by name, email, or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
