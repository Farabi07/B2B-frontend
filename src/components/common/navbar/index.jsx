import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false); // State for Dashboard dropdown

  return (
    <header>
      {/* Top Layer: Logo and Search Bar */}
      <div className="top-layer">
        <div className="logo-container">
          <Link to="/" className="navbar-logo">
            <img
              src="/assets/images/b2b logo.webp" // Relative path for the public folder
              alt="B2B Logo"
            />
          </Link>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for product, brand and more..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Dropdown for Categories */}
        <div
          className="navbar-categories"
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <button className="categories-button">
            Categories <span className="dropdown-arrow">▼</span>
          </button>
          {showCategories && (
            <ul className="categories-dropdown">
              <li>
                <Link to="/categories/computers" className="dropdown-item">
                  Computers & Laptops
                </Link>
              </li>
              <li>
                <Link to="/categories/fashion" className="dropdown-item">
                  Fashion & Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/categories/home-appliance" className="dropdown-item">
                  Home Appliance
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Dropdown for Dashboard */}
        <div
          className="navbar-categories"
          onMouseEnter={() => setShowDashboard(true)}
          onMouseLeave={() => setShowDashboard(false)}
        >
          <button className="categories-button">
            Dashboard <span className="dropdown-arrow">▼</span>
          </button>
          {showDashboard && (
            <ul className="categories-dropdown">
              <li>
                <Link to="/dashboard/bids" className="dropdown-item">
                  Bids
                </Link>
              </li>
              <li>
                <Link to="/dashboard/transactions" className="dropdown-item">
                  Transactions
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/notification" className="navbar-link">
              Notification
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;