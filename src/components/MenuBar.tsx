import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaUserPlus, FaBars } from "react-icons/fa";

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <button
        className="btn btn-primary me-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars /> Menu
      </button>

      {/* Search Bar */}
      <input
        type="text"
        className="form-control me-3"
        placeholder="Search..."
        style={{ width: "250px" }}
      />

      {/* Right-side Login & Signup */}
      <div className="ms-auto d-flex align-items-center">
        <Link to="/login" className="btn btn-outline-primary me-2">
          <FaUser /> Login
        </Link>
        <Link to="/signup" className="btn btn-outline-success">
          <FaUserPlus /> Signup
        </Link>
      </div>

      {/* Hidden Menu */}
      {isMenuOpen && (
        <div className="dropdown-menu show position-absolute">
          <Link className="dropdown-item" to="/">Home</Link>
          <Link className="dropdown-item" to="/about">About</Link>
          <Link className="dropdown-item" to="/profile">Profile</Link>
          <Link className="dropdown-item" to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;
