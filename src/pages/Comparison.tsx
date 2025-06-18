import { useEffect, useState } from "react";

const ComparisonPage = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("selectedIds") || "[]");
    const allProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setSelectedIds(storedIds);
    setProducts(allProducts);
  }, []);

  const handleRemove = (id) => {
    const updatedIds = selectedIds.filter((pid) => pid !== id);
    setSelectedIds(updatedIds);
    localStorage.setItem("selectedIds", JSON.stringify(updatedIds));
  };

  const selectedProducts = products.filter((p) => selectedIds.includes(p.id));

  return (
    <div style={{ padding: 20 }}>
      <h2>Comparison Table</h2>
      {selectedProducts.length === 0 ? (
        <p>No cards selected for comparison.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "white" }}>
              <th>Card #</th>
              <th>Name</th>
              <th>Specs</th>
              <th>Price</th>
              <th>Image</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((item) => (
              <tr key={item.id} style={{ textAlign: "center", borderBottom: "1px solid #eee" }}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.specs}</td>
                <td>{item.price}</td>
                <td>
                  <img src={item.image} alt={item.name} width="100" style={{ borderRadius: 8 }} />
                </td>
                <td>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ComparisonPage;
