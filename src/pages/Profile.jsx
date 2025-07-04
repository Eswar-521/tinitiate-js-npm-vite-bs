import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.style.background = darkMode
      ? "linear-gradient(135deg, #1f1f1f, #333)"
      : "linear-gradient(135deg, #e0eafc, #cfdef3)";
    document.body.style.color = darkMode ? "#f4f4f4" : "#1a1a1a";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
          transition: all 0.4s ease-in-out;
        }

        .profile-card {
          background: ${darkMode ? "#2c2c2c" : "#ffffff"};
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          padding: 2rem;
          border-radius: 20px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          animation: fadeIn 1s ease-in-out;
        }

        .profile-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .toggle-btn {
          background: ${darkMode ? "#444" : "#eee"};
          color: ${darkMode ? "#fff" : "#111"};
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 10px;
          margin-top: 1.5rem;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .toggle-btn:hover {
          background: ${darkMode ? "#666" : "#ddd"};
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .profile-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="profile-card">
        <img
          src=""
          alt="Profile"
          className="profile-img"
        />
        <h2>Tinitiate</h2>
        <p>Frontend Developer | React & UI/UX Enthusiast</p>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
};

export default ProfilePage;
