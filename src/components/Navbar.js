import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/main_logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="call-bar">
        <span>
          Call: <strong>407-252-4449</strong>
        </span>
        <span>Residential & Commercial</span>
      </div>

      <nav className="top-bar">
        <div className="brand">
          <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Stonic Cleaning Service" />
            <span>Stonic Cleaning Service</span>
          </Link>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
