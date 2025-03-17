// src/components/Catalog/CatalogGrid.jsx
import React from "react";

const CatalogGrid = () => {
  return (
    <div>
      <h2>Catalog Grid</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        <div style={{ border: "1px solid black", padding: "10px" }}>Item A - $15</div>
        <div style={{ border: "1px solid black", padding: "10px" }}>Item B - $25</div>
        <div style={{ border: "1px solid black", padding: "10px" }}>Item C - $35</div>
      </div>
    </div>
  );
};

export default CatalogGrid;
