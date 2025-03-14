import React from "react";
import { Link } from "react-router-dom";

const LeftMenuBar = () => {
  return (
    <div className="d-flex flex-column vh-100 p-3">
      <h4 className="text-center">Menu</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenuBar;
