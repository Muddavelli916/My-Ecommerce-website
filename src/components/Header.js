import React, { useState, useEffect } from 'react';
import './Header.css';
import { FiSearch, FiBell, FiMail, FiMenu } from 'react-icons/fi';
import { MdApps } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

const Header = ({ onToggleSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [userImage, setUserImage] = useState(localStorage.getItem('userImage') || null);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  const toggleDropdown = (type) => {
    setActiveDropdown((prev) => (prev === type ? '' : type));
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
        localStorage.setItem('userImage', reader.result);
        setUserName('');
        localStorage.setItem('userName', '');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
    localStorage.setItem('userName', e.target.value);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo-container">
          <img
            src="https://t3.ftcdn.net/jpg/02/45/84/16/240_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg"
            alt="Company Logo"
            className="logo"
          />
        </div>
        <span className="company-name">E-commerce</span>
        <FiMenu className="menu-icon-mobile" title="Toggle Sidebar" onClick={onToggleSidebar} />
      </div>

      <div className="header-center">
        <div className="search-bar">
          <FiSearch className="search-icon" onClick={handleSearch} />
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="header-right">
        <FiBell className={`header-icon ${activeDropdown === 'notification' ? 'active' : ''}`} onClick={() => toggleDropdown('notification')} />
        <FiMail className={`header-icon ${activeDropdown === 'mail' ? 'active' : ''}`} onClick={() => toggleDropdown('mail')} />
        <MdApps className={`header-icon ${activeDropdown === 'apps' ? 'active' : ''}`} onClick={() => toggleDropdown('apps')} />

        {/* === USER PROFILE === */}
        <div className="user-info">
          <label htmlFor="profile-image" className="user-photo-wrapper">
            {userImage ? (
              <img src={userImage} alt="User" className="user-photo" />
            ) : (
              <div className="user-photo-placeholder">Upload</div>
            )}
            <div className="edit-icon">
              <FaPen size={12} />
            </div>
          </label>
          <input
            id="profile-image"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          <div className="user-details">
            <input
              type="text"
              placeholder="Enter name"
              value={userName}
              onChange={handleNameChange}
              className="user-name-input"
            />
            <span className="user-role">Premium member</span>
          </div>
        </div>
      </div>

      {/* === DROPDOWNS === */}
      {activeDropdown === 'notification' && (
        <div className="dropdown-box">
          <h4>Notifications</h4>
          <img src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png" alt="Notification" />
          <p>You have 3 new alerts</p>
        </div>
      )}
      {activeDropdown === 'mail' && (
        <div className="dropdown-box">
          <h4>Messages</h4>
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Mail" />
          <p>2 unread messages</p>
        </div>
      )}
      {activeDropdown === 'apps' && (
        <div className="dropdown-box apps-dropdown">
          <h4>Apps</h4>
          <div className="app-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" alt="Chrome" />
            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Drive" />
            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="Notepad" />
            <div className="add-new-app">+</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
