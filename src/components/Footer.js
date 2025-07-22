// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="zepto-footer">
      <div className="footer-top">
        <div className="footer-logo-social">
          <h2 className="zepto-logo">E-Commerce</h2>
          <div className="social-icons">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
          <p>© E-commerce Marketplace Private Limited</p>
        </div>

        <div className="footer-links">
          <div>
            <p>Home</p>
            <p>Delivery Areas</p>
            <p>Careers</p>
            <p>Customer Support</p>
            <p>Press</p>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Responsible Disclosure Policy</p>
            <p>Mojo - a E-Commerce Blog</p>
            <p>Sell on E-commerce</p>
            <p>Deliver with E-commerce</p>
          </div>
          <div className="download-app">
  <p>Download App</p>
  
  <a
    href="https://play.google.com/store/apps/details?id=com.example.app"
    target="_blank"
    rel="noopener noreferrer"
    className="store-button"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Get it on Google Play"
      className="store-icon"
    />
  </a>

  <a
    href="https://apps.apple.com/us/app/example-app/id123456789"
    target="_blank"
    rel="noopener noreferrer"
    className="store-button"
  >
    <img
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="Download on the App Store"
      className="store-icon"
    />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
