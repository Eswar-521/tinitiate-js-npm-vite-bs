import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Save theme on change
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white text-center py-5"
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        background: darkMode
          ? "linear-gradient(-45deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(-45deg, #ff6a00, #ee0979, #ff6a00)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
        transition: "all 0.4s ease-in-out"
      }}
    >
      {/* Theme Toggle */}
      <div className="w-100 d-flex justify-content-end pe-4">
        <button onClick={toggleTheme} className="btn btn-outline-light">
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      {/* About Card */}
      <div
        className="container p-5 mt-3 rounded-4 shadow-lg"
        style={{
          backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          maxWidth: "800px",
        }}
      >
        <h1 className="mb-4 fw-bold">About Us</h1>
        <p className="fs-5">
          Welcome to <strong>tinitiate-ts-npm-vite-bs</strong>! We are a modern frontend project starter template,
          combining the best of TypeScript, Vite, Bootstrap, and NPM tools. Our goal is to help developers build fast,
          scalable, and beautiful web applications.
        </p>
        <p className="fs-6">
          This project is ideal for those who want a quick start with a robust structure, smart defaults, and a clean,
          responsive UI design out of the box.
        </p>
      </div>

      {/* Animated Gradient Keyframes */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default About;
