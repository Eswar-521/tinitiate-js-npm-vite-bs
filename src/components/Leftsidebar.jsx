import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  return (
    <div className="p-3">
      <h4 className="text-center border-b pb-2">Navigation</h4>
      <ul className="list-unstyled">

        {/* Home Dropdown */}
        <li className="py-2">
          <div
            onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            🏠 Home ▼
          </div>
          {isHomeDropdownOpen && (
            <ul className="list-unstyled ps-3">
              <li className="py-1">
                <Link to="/" style={{ textDecoration: "none" }}>🏡 Home</Link>
              </li>
              <li className="py-1">
                <Link to="/home2" style={{ textDecoration: "none" }}>🏡 Home 2</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Other static links */}
        <li className="py-2"><Link to="/profile" style={{ textDecoration: "none" }}>👤 Profile</Link></li>
        <li className="py-2"><Link to="/catalog" style={{ textDecoration: "none" }}>📚 Catalog</Link></li>
        <li className="py-2"><Link to="/services" style={{ textDecoration: "none" }}>🛠 Services</Link></li>
        <li className="py-2"><Link to="/search" style={{ textDecoration: "none" }}>🔍 Search</Link></li>
        <li className="py-2"><Link to="/comparison" style={{ textDecoration: "none" }}>📑 Comparison</Link></li>
        <li className="py-2"><Link to="/comparisontable" style={{ textDecoration: "none" }}>📊 Comparison Table</Link></li>
        <li className="py-2"><Link to="/forms" style={{ textDecoration: "none" }}>📝 Forms</Link></li>
        <li className="py-2"><Link to="/datatable" style={{ textDecoration: "none" }}>📋 Data Table</Link></li>
        <li className="py-2"><Link to="/infographics" style={{ textDecoration: "none" }}>📈 Infographics Dashboard</Link></li>
        <li className="py-2"><Link to="/video" style={{ textDecoration: "none" }}>Video</Link></li>
        <li className="py-2"><Link to="/animation" style={{ textDecoration: "none" }}>🎞️ Animation</Link></li>
        <li className="py-2"><Link to="/drag-drop" style={{ textDecoration: "none" }}>🖱️ Drag & Drop</Link></li>
        <li className="py-2"><Link to="/editor" style={{ textDecoration: "none" }}>✏️ Online Editor</Link></li>
        <li className="py-2"><Link to="/shopping-cart" style={{ textDecoration: "none" }}>🛒 Shopping Cart</Link></li>
        <li className="py-2"><Link to="/calendar" style={{ textDecoration: "none" }}>📅 Calendar</Link></li>
        <li className="py-2"><Link to="/dashboard" style={{ textDecoration: "none" }}>📊 Dashboard</Link></li>
        <li className="py-2"><Link to="/analytics" style={{ textDecoration: "none" }}>📈 Analytics</Link></li>
        <li className="py-2"><Link to="/security" style={{ textDecoration: "none" }}>🔒 Security</Link></li>
        <li className="py-2"><Link to="/about" style={{ textDecoration: "none" }}>ℹ️ About</Link></li>
        <li className="py-2"><Link to="/contact" style={{ textDecoration: "none" }}>📞 Contact</Link></li>
        <li className="py-2"><Link to="/help" style={{ textDecoration: "none" }}>🆘 Help</Link></li>

      </ul>
    </div>
  );
};

export default LeftSidebar;
