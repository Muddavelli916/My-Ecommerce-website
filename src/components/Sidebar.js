// src/components/Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';
import {
  FaHome,
  FaStore,
  FaThList,
  FaShoppingBasket,
  FaHeart,
  FaEnvelope,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUsers,
  FaCog,
  FaShoppingCart,
  FaGift
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Sidebar = ({ isOpen }) => {
  const [openSection, setOpenSection] = useState(null);
  const { getTotalItems } = useCart();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Logo */}
      <div className="logo"></div>

      {/* Top Menu */}
      <div className="sidebar-menu">
        <Link to="/dashboard" className="sidebar-link active">
          <FaHome /> <span>Home</span>
        </Link>

        {/* Market Section */}
        <div className="sidebar-section">
          <div className="section-title" onClick={() => toggleSection('market')}>
            <div className="icon-label">
              <FaStore /> <span>Market</span>
            </div>
          </div>
          {openSection === 'market' && (
            <div className="dropdown-links">
              <Link to="/market/favourites"><FaHeart /> Favourites</Link>
            </div>
          )}
        </div>

        {/* Messages, Support, Users, Promotions, Settings */}
        <Link to="/messages" className="sidebar-link">
          <FaEnvelope /> <span>Messages</span>
        </Link>

        <Link to="/support" className="sidebar-link">
          <FaQuestionCircle /> <span>Support</span>
        </Link>

        <Link to="/users" className="sidebar-link">
          <FaUsers /> <span>Users</span>
        </Link>

        <Link to="/promotions" className="sidebar-link">
          <FaGift /> <span>Promotions</span>
        </Link>

        <Link to="/settings" className="sidebar-link">
          <FaCog /> <span>Settings</span>
        </Link>

        {/* Cart Item Count Near Market Section */}
        <Link to="/cart" className="sidebar-link cart-link">
  <FaShoppingCart className="cart-icon" />
  <span>Cart</span>
  {getTotalItems() > 0 && (
    <span className="cart-badge">{getTotalItems()}</span>
  )}
</Link>
      </div>

      {/* Bottom Fixed Menu */}
      <div className="sidebar-bottom">
        <Link to="/logout" className="sidebar-link logout">
          <FaSignOutAlt /> <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
