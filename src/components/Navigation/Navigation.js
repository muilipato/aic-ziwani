import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [mobileOpen, setMobileMenuOpen] = useState(false);
  const items = ["Home", "About", "Services", "Ministries", "Gallery", "Blog", "Contact"];
  
  return(
    <nav className="navigation">
      <div className="nav-container container">
        <div className="logo">
          <div className="logo-circle">AIC</div>
          <div className="logo-text">
            <h1>AIC Ziwani</h1>
            <p>Africa Inland Church</p>
          </div>
        </div>

        <div className="menu-desktop">
          {items.map((item) => (
            <button key={item}
            className={`menu-item ${currentPage === item.toLowerCase() ? "active" : ""}`}
            onClick={() => setCurrentPage(item.toLowerCase())}
            > 
            {item}
            </button>
          ))}

        </div>

        <div className="menu-mobile-toggle">
          <button aria-label="Toggle Menu" onClick={() => setMobileOpen((v) => !v)}>
             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="menu-mobile container">
          {items.map((item) => (
            <button
              key={item}
              className={`menu-item ${currentPage === item.toLowerCase() ? "active" : ""}`}
              onClick={() => { setCurrentPage(item.toLowerCase()); setMobileOpen(false); }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;