import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // You can replace this with a real search function
    }
  };

  return (
    <header className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
      {/* Logo */}
      <h2 className="m-0">My Website</h2>

      {/* Search Bar */}
      <form className="d-flex me-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {/* Login/Signup Buttons */}
      <div>
        <Link to="/login" className="btn btn-light me-2">Login</Link>
        <Link to="/signup" className="btn btn-primary">Signup</Link>
      </div>
    </header>
  );
};

export default Header;
