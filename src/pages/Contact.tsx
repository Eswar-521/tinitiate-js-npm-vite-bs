import { useEffect, useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.style.background = darkMode
      ? "linear-gradient(135deg, #2f7778, #2e2c54)"
      : "linear-gradient(135deg, #8ec5fc, #e0c3fc)";
    document.body.style.color = darkMode ? "#f1f1f1" : "#333";
    document.body.style.transition = "background 1s ease, color 0.5s ease";
    document.body.style.fontFamily = "'Poppins', sans-serif";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    },
    toggleButton: {
      position: "absolute",
      top: "2rem",
      right: "2rem",
      padding: "0.6rem 1rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      background: "rgba(255,255,255,0.2)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      fontWeight: 600,
      color: darkMode ? "#fff" : "#222",
    },
    formContainer: {
      background: "rgba(255, 255, 255, 0.1)",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(15px)",
      maxWidth: "500px",
      width: "100%",
      textAlign: "center",
      animation: "fadeIn 1s ease",
    },
    input: {
      width: "100%",
      padding: "1rem",
      marginBottom: "1rem",
      border: "none",
      borderRadius: "0.75rem",
      fontSize: "1rem",
      backgroundColor: darkMode ? "#2c2c3e" : "#fff",
      color: darkMode ? "#f1f1f1" : "#333",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    button: {
      padding: "0.8rem 2rem",
      fontSize: "1rem",
      backgroundColor: "#00b894",
      color: "#fff",
      border: "none",
      borderRadius: "1rem",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.6rem",
    },
  };

  return (
    <div style={styles.page}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <button onClick={() => setDarkMode(!darkMode)} style={styles.toggleButton}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div style={styles.formContainer}>
        <div style={styles.title}>
          <MessageSquare size={24} />
          Contact Us
        </div>
        <form>
          <div style={{ position: "relative" }}>
            <User size={18} style={{ position: "absolute", top: "1.2rem", left: "1rem", color: "#888" }} />
            <input
              type="text"
              placeholder="Your Name"
              style={{ ...styles.input, paddingLeft: "2.5rem" }}
              required
            />
          </div>
          <div style={{ position: "relative" }}>
            <Mail size={18} style={{ position: "absolute", top: "1.2rem", left: "1rem", color: "#888" }} />
            <input
              type="email"
              placeholder="Email Address"
              style={{ ...styles.input, paddingLeft: "2.5rem" }}
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            style={styles.input}
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            ✉️ Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
