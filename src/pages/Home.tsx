import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Save theme preference on change
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="text-center py-5"
      style={{
        minHeight: "100vh",
        color: darkMode ? "#fff" : "#000",
        fontFamily: "'Poppins', sans-serif",
        background: darkMode
          ? "linear-gradient(-45deg, #141E30, #243B55, #1E3C72, #2A5298)"
          : "linear-gradient(-45deg, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
      }}
    >
      {/* Toggle Button */}
      <div className="d-flex justify-content-end pe-4">
        <button onClick={toggleTheme} className="btn btn-outline-light">
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      {/* Content */}
      <div className="container mt-5">
        <h1 className="fw-bold mb-3">Welcome to Our Website</h1>
        <p className="lead">Explore our courses and find what suits you best.</p>

        {/* Note */}
        <div
          className="alert d-inline-block mt-4"
          style={{
            backgroundColor: darkMode ? "#ffffff20" : "#ffffffb0",
            color: darkMode ? "#fff" : "#000",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          🔔 <strong>Note:</strong> Your theme preference is saved!
        </div>

        {/* Catalog Button */}
        <div className="mt-4">
          <Link to="/catalog" className="btn btn-dark btn-lg shadow-lg">
            View Catalog
          </Link>
        </div>
      </div>

      {/* Animated Gradient Keyframes */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
