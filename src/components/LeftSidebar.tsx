import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LeftSidebar = () => {
  return (
    <div
      className="d-flex flex-column p-3"
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #3498db, #2c3e50)",
        color: "white",
      }}
    >
      {/* Logo */}
      <div className="text-center mb-4">
        <img
          src="/favicon_new.png" // ✅ Path from public folder
          alt="Logo"
          className="img-fluid rounded-circle"
          style={{ maxWidth: "100px", border: "2px solid white" }}
        />
      </div>

      {/* Navigation Menu */}
      <nav className="nav flex-column">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
          { to: "/profile", label: "Profile" },
          { to: "/comparison", label: "Comparison" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="nav-link px-3 py-2 mb-2 rounded"
            style={{
              color: "white",
              textDecoration: "none",
              backgroundColor: "rgba(255,255,255,0.1)",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidebar;
