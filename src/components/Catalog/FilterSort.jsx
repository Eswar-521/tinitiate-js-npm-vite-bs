import React, { useState } from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";

const FilterSort = ({ setFilteredData, setView, data }) => {
  const [search, setSearch] = useState("");
  const [view, updateView] = useState("grid");
  const [filtered, setLocalFiltered] = useState(data);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setLocalFiltered(result);
    setFilteredData(result);
  };

  const handleViewChange = (value) => {
    updateView(value);
    setView(value);
  };

  return (
    <>
      {/* Filter and View Select */}
      <div className="d-flex justify-content-between mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        <select
          className="form-select w-25"
          value={view}
          onChange={(e) => handleViewChange(e.target.value)}
        >
          <option value="grid">Grid View</option>
          <option value="list">List View</option>
          <option value="cards">Card View</option>
        </select>
      </div>

      {/* Render Based on Selected View */}
      {view === "list" && (
        <ListGroup>
          {filtered.map((item, idx) => (
            <ListGroup.Item key={idx}>
              <strong>{item.name}</strong> - {item.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {view === "grid" && (
        <Row className="g-3">
          {filtered.map((item, idx) => (
            <Col md={4} key={idx}>
              <div className="p-3 border rounded bg-light text-center shadow-sm">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
              </div>
            </Col>
          ))}
        </Row>
      )}

      {view === "cards" && (
        <Row className="g-4">
          {filtered.map((item, idx) => (
            <Col md={4} key={idx}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={`https://via.placeholder.com/400x200?text=${item.name}`}
                  alt={item.name}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price: {item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default FilterSort;
