import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const generateProducts = (count = 50) => {
  const names = ["Laptop", "Phone", "Camera", "Tablet", "Speaker", "Watch", "Monitor", "Keyboard", "Mouse", "Drone"];
  const specsList = ["8GB RAM", "16GB RAM", "256GB SSD", "512GB SSD", "4K Display", "Touchscreen", "Wireless", "GPS", "Heart Rate", "Waterproof"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${names[i % names.length]} ${i + 1}`,
    image: `https://picsum.photos/seed/${i + 1}/200/150`,
    specs: `${specsList[i % specsList.length]}, ${specsList[(i + 3) % specsList.length]}`,
    price: (Math.floor((i + 1) * 1000) + 10000).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),
  }));
};

const CatalogPage = () => {
  const [products] = useState(() => {
    const existing = localStorage.getItem("products");
    if (existing) return JSON.parse(existing);
    const newProducts = generateProducts();
    localStorage.setItem("products", JSON.stringify(newProducts));
    return newProducts;
  });

  const [selectedIds, setSelectedIds] = useState(() => {
    const saved = localStorage.getItem("selectedIds");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("selectedIds", JSON.stringify(selectedIds));
  }, [selectedIds]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toString().includes(searchTerm)
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Product Catalog</h2>
      <input
        type="text"
        placeholder="Search by name or card number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: 8, marginBottom: 20, borderRadius: 10, border: '1px solid #ccc' }}
      />
      <button onClick={() => navigate("/comparison")} style={{ marginLeft: 10 }}>Go to Comparison</button>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            onClick={() => toggleSelect(p.id)}
            style={{
              width: 220,
              padding: 16,
              margin: 10,
              border: selectedIds.includes(p.id) ? "3px solid blue" : "1px solid #ccc",
              borderRadius: 12,
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
              background: "white"
            }}
          >
            <h5>Card #{p.id}</h5>
            <img src={p.image} alt={p.name} style={{ width: "100%", borderRadius: 8 }} />
            <h4>{p.name}</h4>
            <p>{p.specs}</p>
            <div style={{ color: "green", fontWeight: 600 }}>{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;