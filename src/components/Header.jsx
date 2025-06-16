import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Header = () => {
  return (
    <header className="bg-dark text-white p-4 shadow-lg">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Left Side - "Tinitiate Project" Title */}
        <h2 className="text-white">Tinitiate Project</h2>

        {/* Centered Tech Stack with Icons */}
        <div className="d-flex justify-content-center align-items-center gap-2">
          <span className="bg-warning text-dark px-2 py-1 rounded fw-semibold d-flex align-items-center">
            <i className="bi bi-code-slash me-1"></i> JS
          </span>
          <span className="bg-success text-white px-2 py-1 rounded fw-semibold d-flex align-items-center">
            <i className="bi bi-box-fill me-1"></i> npm
          </span>
          <span className="bg-danger text-white px-2 py-1 rounded fw-semibold d-flex align-items-center">
            <i className="bi bi-lightning-fill me-1"></i> Vite
          </span>
          <span className="bg-info text-dark px-2 py-1 rounded fw-semibold d-flex align-items-center">
            <i className="bi bi-bootstrap-fill me-1"></i> Bs
          </span>
        </div>

        {/* Right Side - Login/Signup Buttons */}
        <div className="d-flex gap-2">
          <Link to="/login" className="btn btn-sm btn-light">
            <i className="bi bi-box-arrow-in-right me-1"></i> Login
          </Link>
          <Link to="/signup" className="btn btn-sm btn-outline-light">
            <i className="bi bi-person-plus me-1"></i> Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
