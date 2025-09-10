import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import "./Footer.css";

const Footer = ({ setCurrentPage }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Contact Info</h3>
            <div className="footer-list">
              <p><MapPin size={16} /> Ziwani Estate, Nairobi</p>
              <p><Phone size={16} /> +254 700 000 000</p>
              <p><Mail size={16} /> info@aicziwani.org</p>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              <button onClick={() => setCurrentPage('about')}>About Us</button>
              <button onClick={() => setCurrentPage('services')}>Services</button>
              <button onClick={() => setCurrentPage('ministries')}>Ministries</button>
              <button onClick={() => setCurrentPage('contact')}>Contact</button>
            </div>
          </div>
          <div>
            <h3>Service Times</h3>
            <div className="footer-list">
              <p>Sunday: 8:00 AM - 10:00 AM</p>
              <p>Sunday: 10:00 AM - 12:00 PM</p>
              <p>Sunday: 12:00 PM - 2:00 PM</p>
              <p>Friday Prayers: 6:00 PM - 7:00 PM</p>
            </div>
          </div>
          <div>
            <h3>Follow Us</h3>
            <p className="muted">Stay connected through our social media channels for updates and inspiration.</p>
          </div>
        </div>
        <div className="footer-bottom">© {year} AIC Ziwani. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;