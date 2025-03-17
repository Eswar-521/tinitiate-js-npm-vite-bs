// src/components/Catalog/CatalogCards.jsx
import React from "react";

const CatalogCards = () => {
  return (
    <div>
      <h2>Catalog Cards</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <h3>Item 1</h3>
          <p>Price: $10</p>
        </div>
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <h3>Item 2</h3>
          <p>Price: $20</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogCards;
