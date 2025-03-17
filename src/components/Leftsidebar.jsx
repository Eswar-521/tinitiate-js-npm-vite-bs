import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="p-3">
      <h4 className="text-center border-bottom pb-2">Navigation</h4>
      <ul className="list-unstyled">
        <li className="py-2"><Link to="/">🏠 Home</Link></li>
        <li className="py-2"><Link to="/about">ℹ️ About</Link></li>
        <li className="py-2"><Link to="/services">🛠 Services</Link></li>
        <li className="py-2"><Link to="/contact">📞 Contact</Link></li>
        <li className="py-2"><Link to="/catalog">📚 Catalog</Link></li>
        <li className="py-2"><Link to="/comparison">📊 Comparison</Link></li>

      </ul>
    </div>
  );
};

export default LeftSidebar;
