import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Header from "./Header";
import Footer from "./Footer";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Catalog", path: "/catalog" },
  { name: "Comparison", path: "/comparison" },
];

const MainLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Function to handle search
  const handleSearch = () => {
    const matchedPage = pages.find((page) =>
      page.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchedPage) {
      navigate(matchedPage.path); // Navigate to the matched page
      setSearchTerm(""); // Clear the search bar
    } else {
      alert("No matching page found!"); // Show an alert if no match
    }
  };

  return (
    <>
      {/* Header with Search Bar */}
      <Header>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "250px",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            style={{
              marginLeft: "10px",
              padding: "8px 12px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🔍 Search
          </button>
        </div>
      </Header>

      {/* Main Layout */}
      <div className="d-flex" style={{ minHeight: "calc(100vh - 100px)" }}>
        {/* Left Sidebar */}
        <aside className="bg-light p-3" style={{ width: "250px" }}>
          <LeftSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">
          <Outlet />
        </main>

        {/* Right Sidebar */}
        <aside className="bg-light p-3" style={{ width: "250px" }}>
          <RightSidebar />
        </aside>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
