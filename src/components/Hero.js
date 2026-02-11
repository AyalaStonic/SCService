import { Link } from "react-router-dom";
import blueLogo from "../assets/light_mode.png";
import greenLogo from "../assets/dark_mode.png";

function Hero({ darkMode }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <img
          src={darkMode ? greenLogo : blueLogo}
          alt="Stonic Cleaning Services Logo"
          className="logo"
        />

        <h1>A Cleaner Space. A Clearer Mind.</h1>

        <p>
          Premium residential and commercial cleaning designed to bring order,
          comfort, and peace of mind to your space.
          <br /><br />
          We begin with a <strong>free on-site walkthrough</strong> so we can
          understand your space and provide a detailed, accurate quote —
          tailored specifically to you.
        </p>

        <Link to="/contact">
          <button className="cta">
            Schedule Your Free Walkthrough
          </button>
        </Link>
      </div>

      <div className="hero-right">
        <div className="image-placeholder">
          <span>Service Images Coming Soon</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
