import React, { useState } from "react";
import productData from "../assets/products.json";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && (
        <div className="mt-3">
          <h5>Search Results:</h5>
          <ul className="list-group">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id} className="list-group-item">
                  {product.name} - ${product.price}
                </li>
              ))
            ) : (
              <li className="list-group-item text-danger">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
