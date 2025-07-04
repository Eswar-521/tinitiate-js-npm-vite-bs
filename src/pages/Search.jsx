import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search..."
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline-primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;

