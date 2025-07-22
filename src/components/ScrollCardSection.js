// src/components/HorizontalCardSection.jsx
import React from 'react';
import './ScrollCardSection.css'; // Use the same CSS file or separate one if needed

const HorizontalCardSection = ({ title, items }) => {
  return (
    <div className="horizontal-section">
      <h2 className="horizontal-title">{title}</h2>
      <div className="horizontal-scroll-wrapper">
        <div className="horizontal-scroll-container">
          {items.map((item, index) => (
            <div className="horizontal-card" key={index}>
              <img src={item.img} alt={item.label} className="horizontal-card-img" />
              <p className="horizontal-card-label">{item.label}</p>
              <span className="horizontal-card-offer">{item.offer}</span>
            </div>
          ))}
        </div>
        <div className="fade-right" />
      </div>
    </div>
  );
};

export default HorizontalCardSection;

