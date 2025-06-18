import { Link } from "react-router-dom";
import { FaUser, FaUserPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const RightSidebar = () => {
  return (
    <div
      className="right-sidebar p-4 border-start text-white"
      style={{
        background: "linear-gradient(to bottom right, #6a11cb, #2575fc)", // Gradient
        minHeight: "100vh"
      }}
    >
      <nav className="nav flex-column gap-3">
        <Link to="/home" className="nav-link text-white fw-semibold">
          Home
        </Link>
        <Link to="/about" className="nav-link text-white fw-semibold">
          About
        </Link>
        <Link to="/catalog" className="nav-link text-white fw-semibold">
          Catalog
        </Link>
        <Link
          to="/login"
          className="btn btn-outline-light my-2 d-flex align-items-center justify-content-center"
        >
          <FaUser className="me-2" /> Login
        </Link>
        <Link
          to="/signup"
          className="btn btn-outline-light d-flex align-items-center justify-content-center"
        >
          <FaUserPlus className="me-2" /> Signup
        </Link>
      </nav>
    </div>
  );
};

export default RightSidebar;
