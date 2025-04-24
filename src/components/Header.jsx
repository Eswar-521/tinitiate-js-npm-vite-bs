import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white p-4 shadow-lg">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Side - "Tinitiate Project" Title */}
        <h2 className="text-white">Tinitiate Project</h2>

        {/* Centered Tech Stack */}
        <div className="d-flex justify-content-center align-items-center gap-2">
          <span className="bg-warning text-dark px-2 py-1 rounded fw-semibold">JS</span>
          <span className="bg-success text-white px-2 py-1 rounded fw-semibold">npm</span>
          <span className="bg-danger text-white px-2 py-1 rounded fw-semibold">Vite</span>
          <span className="bg-info text-dark px-2 py-1 rounded fw-semibold">Bs</span>
        </div>

        {/* Right Side - Login/Signup Buttons */}
        <div className="d-flex gap-2">
          <Link to="/login" className="btn btn-sm btn-light">Login</Link>
          <Link to="/signup" className="btn btn-sm btn-outline-light">Signup</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
