import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

interface Props {
  setFilteredData: (data: any) => void;
  setView: (view: string) => void;
}

const FilterSort: React.FC<Props> = ({ setFilteredData, setView }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Row className="mb-3">
      <Col md={4}>
        <Form.Control
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
      </Col>
      <Col md={3}>
        <Button onClick={() => setView("grid")}>Grid</Button>
        <Button onClick={() => setView("list")} className="mx-2">
          List
        </Button>
        <Button onClick={() => setView("cards")}>Cards</Button>
      </Col>
    </Row>
  );
};

export default FilterSort;
