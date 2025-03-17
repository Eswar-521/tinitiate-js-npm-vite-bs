// src/components/Catalog/FilterSort.jsx
import React, { useState } from "react";

const FilterSort = ({ setFilteredData, setView, data }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = data.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <div className="d-flex justify-content-between mb-4">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <select className="form-select w-25" onChange={(e) => setView(e.target.value)}>
        <option value="grid">Grid View</option>
        <option value="list">List View</option>
        <option value="cards">Card View</option>
      </select>
    </div>
  );
};

export default FilterSort;
