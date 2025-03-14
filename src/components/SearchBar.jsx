import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <div className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-light" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
