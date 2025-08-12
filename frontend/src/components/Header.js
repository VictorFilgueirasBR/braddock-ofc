import { useState } from "react";
import logo from "../assets/logo-original.png"; 
import menuBg from "../assets/images/menu-background.png";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Bradock Intelligence" />
          </div>

          {/* Menu Desktop */}
          <nav className="nav-links desktop-menu">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="https://wa.me/5521965486862">Contact</a>
          </nav>

          {/* Botão Mobile */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Menu Mobile (fora do header para sobrepor tudo) */}
      {menuOpen && (
        <div
          className="mobile-menu open"
          style={{ backgroundImage: `url(${menuBg})` }}
        >
          <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
          <div className="mobile-logo">
            <img src={logo} alt="Bradock Intelligence" />
          </div>
          <nav>
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="https://wa.me/5521965486862" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </>
  );
}
