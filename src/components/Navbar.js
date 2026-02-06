import { Link } from "react-router-dom";
import logo from "../assets/main_logo.png";

function Navbar() {
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
          <img src={logo} alt="Stonic Cleaning Services" />
          <span>Stonic Cleaning Service</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/#services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
