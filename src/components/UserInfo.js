import React, { useState, useEffect } from "react";
import "./UserInfo.css"; // we'll create this next

const UserInfo = () => {
  const [image, setImage] = useState(localStorage.getItem("userImage") || null);
  const [name, setName] = useState(localStorage.getItem("userName") || "Guest User");

  // Runs once when page loads
  useEffect(() => {
    const savedImage = localStorage.getItem("userImage");
    const savedName = localStorage.getItem("userName");

    if (savedImage) setImage(savedImage);
    if (savedName) setName(savedName);
  }, []);

  // Image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("userImage", reader.result); // Save to browser storage
      };
      reader.readAsDataURL(file);
    }
  };

  // Name change
  const handleNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("userName", e.target.value);
  };

  return (
    <div className="user-info">
      {/* Clickable image area */}
      <label htmlFor="profile-image" className="user-photo-wrapper">
        {image ? (
          <img src={image} alt="Profile" className="user-photo" />
        ) : (
          <div className="user-photo-placeholder">Upload</div>
        )}
      </label>

      {/* Hidden input to choose image */}
      <input
        id="profile-image"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      {/* Name and role */}
      <div className="user-details">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="user-name-input"
          placeholder="Enter name"
        />
        <span className="user-role">Premium member</span>
      </div>
    </div>
  );
};

export default UserInfo;
