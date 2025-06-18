import React, { useState } from "react";

const FilterSort: React.FC = () => {
  const [sortBy, setSortBy] = useState("price");

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5>Filters</h5>
      <select
        className="form-select w-auto"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="price">Sort by Price</option>
        <option value="name">Sort by Name</option>
      </select>
    </div>
  );
};

export default FilterSort;
