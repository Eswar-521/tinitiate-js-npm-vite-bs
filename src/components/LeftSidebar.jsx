import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  return (
    <div className="p-3">
      <h4 className="text-center border-bottom pb-2">Navigation</h4>
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

        <li className="py-2"><Link to="/about" style={{ textDecoration: "none" }}>ℹ️ About</Link></li>
        <li className="py-2"><Link to="/services" style={{ textDecoration: "none" }}>🛠 Services</Link></li>
        <li className="py-2"><Link to="/contact" style={{ textDecoration: "none" }}>📞 Contact</Link></li>
        <li className="py-2"><Link to="/catalog" style={{ textDecoration: "none" }}>📚 Catalog</Link></li>
        <li className="py-2"><Link to="/comparison" style={{ textDecoration: "none" }}>📊 Comparison</Link></li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
